import { NextResponse } from 'next/server';
import { getUsuariosFromDB, saveUsuarioToDB } from '@/lib/db';
import { 
  verifyPassword, 
  hashPassword,
  needsRehash,
  signSessionToken, 
  createFingerprint,
  validateOrigin,
  checkRateLimit, 
  recordFailedAttempt, 
  resetRateLimit 
} from '@/lib/auth';

export async function POST(req) {
  try {
    // 1. Protección contra CSRF: Validar origen de la petición
    if (!validateOrigin(req)) {
      return NextResponse.json(
        { ok: false, error: 'Petición no autorizada o cross-origin inválido' },
        { status: 403 }
      );
    }

    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
               req.headers.get('x-real-ip') || 
               'local-client';
    const userAgent = req.headers.get('user-agent') || 'generic-client';

    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ ok: false, error: 'Cuerpo de solicitud inválido' }, { status: 400 });
    }

    const { username, password } = body || {};

    // 2. Validación estricta y desinfección de entrada
    if (!username || typeof username !== 'string' || !username.trim()) {
      return NextResponse.json({ ok: false, error: 'Ingresa tu usuario o correo' }, { status: 400 });
    }

    if (!password || typeof password !== 'string') {
      return NextResponse.json({ ok: false, error: 'Ingresa tu contraseña' }, { status: 400 });
    }

    const cleanUsername = username.trim().toLowerCase();
    const rateLimitKey = `${ip}:${cleanUsername}`;

    // 3. Comprobar límite de intentos (Fuerza Bruta & DoS protection)
    const rateCheck = checkRateLimit(rateLimitKey);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        { 
          ok: false, 
          error: rateCheck.error, 
          locked: true, 
          retryAfterSeconds: rateCheck.retryAfterSeconds 
        },
        { 
          status: 429,
          headers: {
            'Retry-After': String(rateCheck.retryAfterSeconds || 900),
            'Cache-Control': 'no-store, max-age=0'
          }
        }
      );
    }

    // 4. Buscar usuario en Base de Datos
    const users = await getUsuariosFromDB();
    const foundUser = (users || []).find(u => 
      u.username?.toLowerCase() === cleanUsername || 
      (u.email && u.email.toLowerCase() === cleanUsername)
    );

    // 5. Verificación de credenciales con prevención de timing attacks
    // (Si el usuario no existe, verifyPassword ejecuta un hash dummy en tiempo constante)
    const isAuthenticated = verifyPassword(password, foundUser ? foundUser.password : null);

    if (!isAuthenticated || !foundUser) {
      const failInfo = recordFailedAttempt(rateLimitKey);
      if (failInfo.locked) {
        return NextResponse.json(
          { 
            ok: false, 
            error: `Has superado el límite de intentos permitidos. Acceso bloqueado temporalmente por ${failInfo.retryAfterMinutes} minutos.`,
            locked: true,
            retryAfterSeconds: failInfo.retryAfterMinutes * 60
          }, 
          { 
            status: 429,
            headers: {
              'Retry-After': String(failInfo.retryAfterMinutes * 60),
              'Cache-Control': 'no-store, max-age=0'
            }
          }
        );
      }

      return NextResponse.json(
        { 
          ok: false, 
          error: `Credenciales incorrectas. Intentos restantes: ${failInfo.remainingAttempts}`,
          remainingAttempts: failInfo.remainingAttempts
        }, 
        { 
          status: 401,
          headers: { 'Cache-Control': 'no-store, max-age=0' }
        }
      );
    }

    // 6. Autenticación exitosa -> reiniciar contador de intentos fallidos
    resetRateLimit(rateLimitKey);

    // 7. Auto-migración / Actualización transparente de hash de contraseña (si era texto plano o formato legado)
    if (needsRehash(foundUser.password)) {
      try {
        await saveUsuarioToDB({
          ...foundUser,
          password: hashPassword(password)
        });
      } catch (err) {
        console.warn('[Auto-rehash warning]:', err.message);
      }
    }

    // 8. Generar huella criptográfica de cliente para prevención de Session Hijacking
    const fingerprint = createFingerprint(ip, userAgent);

    const userPayload = {
      id: foundUser.id || 'usr_superadmin',
      username: foundUser.username,
      name: foundUser.name || foundUser.username,
      email: foundUser.email || '',
      role: foundUser.role || 'editor_contenido',
      permissions: foundUser.permissions || []
    };

    // 9. Generar Token JWT HMAC-SHA512 firmado con JTI y huella
    const token = signSessionToken(userPayload, 7 * 24 * 3600, fingerprint);

    // 10. Construir respuesta segura con Cookie HttpOnly
    const response = NextResponse.json({
      ok: true,
      user: userPayload
    });

    // Encabezados de seguridad reforzados
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');

    const isProd = process.env.NODE_ENV === 'production';
    response.cookies.set({
      name: 'trebol_admin_session',
      value: token,
      httpOnly: true,
      secure: isProd,
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 3600 // 7 días
    });

    return response;
  } catch (e) {
    console.error('[Secure Login Error]:', e);
    return NextResponse.json({ ok: false, error: 'Error de autenticación' }, { status: 500 });
  }
}
