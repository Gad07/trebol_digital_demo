import crypto from 'crypto';

const AUTH_SECRET = process.env.AUTH_SECRET || process.env.JWT_SECRET || 'trebol-digital-secure-auth-secret-key-2026-v1';
const PBKDF2_ITERATIONS = 100000;
const PBKDF2_KEYLEN = 64;
const PBKDF2_DIGEST = 'sha512';

// ── 1. HASHING Y VERIFICACIÓN DE CONTRASEÑAS ──
export function hashPassword(password) {
  if (!password || typeof password !== 'string') {
    throw new Error('Contraseña inválida para hashing');
  }
  const salt = crypto.randomBytes(16).toString('hex');
  const derivedKey = crypto.pbkdf2Sync(password, salt, PBKDF2_ITERATIONS, PBKDF2_KEYLEN, PBKDF2_DIGEST).toString('hex');
  return `pbkdf2:${PBKDF2_DIGEST}:${PBKDF2_ITERATIONS}:${salt}:${derivedKey}`;
}

export function verifyPassword(password, storedPassword) {
  if (!password || !storedPassword || typeof password !== 'string' || typeof storedPassword !== 'string') {
    return false;
  }

  // Si está almacenada con formato seguro PBKDF2
  if (storedPassword.startsWith('pbkdf2:')) {
    const parts = storedPassword.split(':');
    if (parts.length !== 5) return false;
    const [, digest, iterStr, salt, hash] = parts;
    const iterations = parseInt(iterStr, 10);
    if (isNaN(iterations) || !salt || !hash) return false;

    const derivedKey = crypto.pbkdf2Sync(password, salt, iterations, PBKDF2_KEYLEN, digest);
    const hashBuffer = Buffer.from(hash, 'hex');

    if (derivedKey.length !== hashBuffer.length) {
      return false;
    }
    return crypto.timingSafeEqual(derivedKey, hashBuffer);
  }

  // Compatibilidad segura con contraseñas legadas en texto plano
  const passBuffer = Buffer.from(password);
  const storedBuffer = Buffer.from(storedPassword);
  if (passBuffer.length !== storedBuffer.length) {
    return false;
  }
  return crypto.timingSafeEqual(passBuffer, storedBuffer);
}

// ── 2. TOKENS DE SESIÓN FIRMADOS (JWT HMAC-SHA256) ──
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

export function signSessionToken(userPayload, expiresInSeconds = 7 * 24 * 3600) {
  const header = {
    alg: 'HS256',
    typ: 'JWT'
  };

  const now = Math.floor(Date.now() / 1000);
  const payload = {
    ...userPayload,
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

export function verifySessionToken(token) {
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
    return payload;
  } catch (e) {
    return null;
  }
}

// ── 3. RATE LIMITER Y PROTECCIÓN CONTRA FUERZA BRUTA ──
// Mapa en memoria con limpieza automática
const loginAttempts = new Map();
const MAX_ATTEMPTS = 5;
const LOCKOUT_WINDOW_MS = 15 * 60 * 1000; // 15 minutos

// Limpieza periódica cada 30 minutos
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [key, val] of loginAttempts.entries()) {
      if (now - val.lastAttempt > LOCKOUT_WINDOW_MS && now > (val.lockedUntil || 0)) {
        loginAttempts.delete(key);
      }
    }
  }, 30 * 60 * 1000);
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
    return { remainingAttempts: MAX_ATTEMPTS - 1 };
  }

  record.attempts += 1;
  record.lastAttempt = now;

  if (record.attempts >= MAX_ATTEMPTS) {
    record.lockedUntil = now + LOCKOUT_WINDOW_MS;
    return {
      remainingAttempts: 0,
      locked: true,
      retryAfterMinutes: Math.ceil(LOCKOUT_WINDOW_MS / (60 * 1000))
    };
  }

  return { remainingAttempts: MAX_ATTEMPTS - record.attempts, locked: false };
}

export function resetRateLimit(identifier) {
  const key = String(identifier).toLowerCase().trim();
  loginAttempts.delete(key);
}
