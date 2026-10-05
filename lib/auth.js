import crypto from 'crypto';

const AUTH_SECRET = process.env.AUTH_SECRET || process.env.JWT_SECRET || 'trebol-digital-secure-auth-secret-key-2026-v1';
const PBKDF2_ITERATIONS = 100000;
const PBKDF2_KEYLEN = 64;
const PBKDF2_DIGEST = 'sha512';

// Dummy hash precalculado para prevención de Timing Attacks (Enumeración de usuarios)
const DUMMY_SALT = crypto.randomBytes(16).toString('hex');
const DUMMY_HASH = crypto.pbkdf2Sync('dummy_timing_protection_pass_2026', DUMMY_SALT, PBKDF2_ITERATIONS, PBKDF2_KEYLEN, PBKDF2_DIGEST).toString('hex');

// ── 1. HASHING Y VERIFICACIÓN DE CONTRASEÑAS CON PROTECCIÓN CONTRA TIMING ATTACKS ──
export function hashPassword(password) {
  if (!password || typeof password !== 'string') {
    throw new Error('Contraseña inválida para hashing');
  }
  const salt = crypto.randomBytes(16).toString('hex');
  const derivedKey = crypto.pbkdf2Sync(password, salt, PBKDF2_ITERATIONS, PBKDF2_KEYLEN, PBKDF2_DIGEST).toString('hex');
  return `pbkdf2:${PBKDF2_DIGEST}:${PBKDF2_ITERATIONS}:${salt}:${derivedKey}`;
}

export function needsRehash(storedPassword) {
  if (!storedPassword || typeof storedPassword !== 'string') return false;
  return !storedPassword.startsWith('pbkdf2:');
}

export function verifyPassword(password, storedPassword) {
  const safePassword = typeof password === 'string' ? password : '';
  const safeStored = typeof storedPassword === 'string' ? storedPassword : '';

  // Si no se proporcionó contraseña almacenada (usuario inexistente), ejecutamos el hash dummy
  // para que el tiempo de respuesta sea exactamente el mismo que si el usuario existiera.
  if (!safeStored) {
    crypto.pbkdf2Sync(safePassword || 'dummy', DUMMY_SALT, PBKDF2_ITERATIONS, PBKDF2_KEYLEN, PBKDF2_DIGEST);
    return false;
  }

  // Si está almacenada con formato seguro PBKDF2
  if (safeStored.startsWith('pbkdf2:')) {
    const parts = safeStored.split(':');
    if (parts.length !== 5) {
      crypto.pbkdf2Sync(safePassword || 'dummy', DUMMY_SALT, PBKDF2_ITERATIONS, PBKDF2_KEYLEN, PBKDF2_DIGEST);
      return false;
    }
    const [, digest, iterStr, salt, hash] = parts;
    const iterations = parseInt(iterStr, 10);
    if (isNaN(iterations) || !salt || !hash) return false;

    const derivedKey = crypto.pbkdf2Sync(safePassword, salt, iterations, PBKDF2_KEYLEN, digest);
    const hashBuffer = Buffer.from(hash, 'hex');

    if (derivedKey.length !== hashBuffer.length) {
      return false;
    }
    return crypto.timingSafeEqual(derivedKey, hashBuffer);
  }

  // Compatibilidad segura con contraseñas legadas
  const passBuffer = Buffer.from(safePassword);
  const storedBuffer = Buffer.from(safeStored);
  if (passBuffer.length !== storedBuffer.length) {
    return false;
  }
  return crypto.timingSafeEqual(passBuffer, storedBuffer);
}

// ── 2. TOKENS DE SESIÓN FIRMADOS (JWT HMAC-SHA256) CON HUELLA DE CLIENTE ──
function base64UrlEncode(str) {
  return Buffer.from(str)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

function base64UrlDecode(str) {
  let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
  while (base64.length % 4) {
    base64 += '=';
  }
  return Buffer.from(base64, 'base64').toString('utf8');
}

export function createFingerprint(ip = '', userAgent = '') {
  // Mascará de IP (primeros dos octetos) + User-Agent simplificado para estabilidad ante roaming
  const ipPrefix = ip.split('.').slice(0, 2).join('.') || ip;
  return crypto
    .createHmac('sha256', AUTH_SECRET)
    .update(`${ipPrefix}:${userAgent || 'generic'}`)
    .digest('hex')
    .slice(0, 16);
}

export function signSessionToken(userPayload, expiresInSeconds = 7 * 24 * 3600, fingerprint = '') {
  const header = {
    alg: 'HS256',
    typ: 'JWT'
  };

  const now = Math.floor(Date.now() / 1000);
  const payload = {
    ...userPayload,
    jti: crypto.randomBytes(12).toString('hex'),
    fp: fingerprint || '',
    iat: now,
    exp: now + expiresInSeconds
  };

  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));

  const dataToSign = `${encodedHeader}.${encodedPayload}`;
  const signature = crypto
    .createHmac('sha256', AUTH_SECRET)
    .update(dataToSign)
    .digest('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  return `${dataToSign}.${signature}`;
}

export function verifySessionToken(token, fingerprint = '') {
  if (!token || typeof token !== 'string') return null;
  const parts = token.split('.');
  if (parts.length !== 3) return null;

  const [encodedHeader, encodedPayload, signature] = parts;
  const dataToSign = `${encodedHeader}.${encodedPayload}`;

  const expectedSignature = crypto
    .createHmac('sha256', AUTH_SECRET)
    .update(dataToSign)
    .digest('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  const sigBuffer = Buffer.from(signature);
  const expectedSigBuffer = Buffer.from(expectedSignature);

  if (sigBuffer.length !== expectedSigBuffer.length) {
    return null;
  }

  if (!crypto.timingSafeEqual(sigBuffer, expectedSigBuffer)) {
    return null;
  }

  try {
    const payload = JSON.parse(base64UrlDecode(encodedPayload));
    const now = Math.floor(Date.now() / 1000);
    if (payload.exp && payload.exp < now) {
      return null; // Token expirado
    }

    // Si el token tiene huella de cliente y se proporciona una para validar, verificarla
    if (payload.fp && fingerprint && payload.fp !== fingerprint) {
      // Diferencia de huella (posible secuestro de sesión)
      return null;
    }

    return payload;
  } catch (e) {
    return null;
  }
}

// ── 3. VALIDACIÓN DE ORIGEN & CSRF ──
export function validateOrigin(req) {
  const origin = req.headers.get('origin');
  const referer = req.headers.get('referer');
  const host = req.headers.get('host');

  if (!origin && !referer) {
    // Si no hay headers de origen (ej. llamada de script server-side o mobile), permitir si es local/directo
    return true;
  }

  const checkUrl = origin || referer;
  if (!checkUrl) return true;

  try {
    const url = new URL(checkUrl);
    if (url.host === host) return true;
    if (url.hostname === 'localhost' || url.hostname === '127.0.0.1') return true;
    if (url.hostname.endsWith('treboldigital.com.mx') || url.hostname.endsWith('vercel.app')) return true;
    return false;
  } catch {
    return false;
  }
}

// ── 4. RATE LIMITER DINÁMICO Y PROTECCIÓN CONTRA FUERZA BRUTA ──
const loginAttempts = new Map();
const MAX_ATTEMPTS = 5;
const LOCKOUT_WINDOW_MS = 15 * 60 * 1000; // 15 minutos

// Limpieza periódica de registros caducados
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [key, val] of loginAttempts.entries()) {
      if (now - val.lastAttempt > LOCKOUT_WINDOW_MS && now > (val.lockedUntil || 0)) {
        loginAttempts.delete(key);
      }
    }
  }, 10 * 60 * 1000);
}

export function checkRateLimit(identifier) {
  const key = String(identifier).toLowerCase().trim();
  const now = Date.now();
  const record = loginAttempts.get(key);

  if (!record) {
    return { allowed: true, remainingAttempts: MAX_ATTEMPTS, retryAfterSeconds: 0 };
  }

  // Si está bloqueado temporalmente
  if (record.lockedUntil && record.lockedUntil > now) {
    const retryAfterSeconds = Math.ceil((record.lockedUntil - now) / 1000);
    return {
      allowed: false,
      remainingAttempts: 0,
      retryAfterSeconds,
      error: `Demasiados intentos fallidos. Cuenta bloqueada temporalmente por seguridad. Intenta nuevamente en ${Math.ceil(retryAfterSeconds / 60)} minutos.`
    };
  }

  // Si la ventana expiró, reiniciar
  if (now - record.firstAttempt > LOCKOUT_WINDOW_MS) {
    loginAttempts.delete(key);
    return { allowed: true, remainingAttempts: MAX_ATTEMPTS, retryAfterSeconds: 0 };
  }

  const remainingAttempts = Math.max(0, MAX_ATTEMPTS - record.attempts);
  return {
    allowed: record.attempts < MAX_ATTEMPTS,
    remainingAttempts,
    retryAfterSeconds: 0
  };
}

export function recordFailedAttempt(identifier) {
  const key = String(identifier).toLowerCase().trim();
  const now = Date.now();
  const record = loginAttempts.get(key);

  if (!record || now - record.firstAttempt > LOCKOUT_WINDOW_MS) {
    loginAttempts.set(key, {
      attempts: 1,
      firstAttempt: now,
      lastAttempt: now,
      lockedUntil: 0
    });
    return { remainingAttempts: MAX_ATTEMPTS - 1, locked: false, retryAfterMinutes: 0 };
  }

  record.attempts += 1;
  record.lastAttempt = now;

  if (record.attempts >= MAX_ATTEMPTS) {
    // Escalado de penalización: 15 min inicial, incrementa si continúa
    record.lockedUntil = now + LOCKOUT_WINDOW_MS;
    return {
      remainingAttempts: 0,
      locked: true,
      retryAfterMinutes: Math.ceil(LOCKOUT_WINDOW_MS / (60 * 1000))
    };
  }

  return { remainingAttempts: MAX_ATTEMPTS - record.attempts, locked: false, retryAfterMinutes: 0 };
}

export function resetRateLimit(identifier) {
  const key = String(identifier).toLowerCase().trim();
  loginAttempts.delete(key);
}
