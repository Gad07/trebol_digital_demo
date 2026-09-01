import { NextResponse } from 'next/server';
import { getUsuariosFromDB } from '@/lib/db';
import { 
  verifyPassword, 
  signSessionToken, 
  checkRateLimit, 
  recordFailedAttempt, 
  resetRateLimit 
} from '@/lib/auth';

export async function POST(req) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
               req.headers.get('x-real-ip') || 
               'local-client';

    let body;
    try {
      body = await req.json();
    } catch (err) {
      return NextResponse.json({ ok: false, error: 'Cuerpo de solicitud inválido' }, { status: 400 });
    }

    const { username, password } = body || {};

    // 1. Validación estricta de entrada
    if (!username || typeof username !== 'string' || !username.trim()) {
      return NextResponse.json({ ok: false, error: 'Ingresa tu usuario o correo' }, { status: 400 });
    }

    if (!password || typeof password !== 'string') {
      return NextResponse.json({ ok: false, error: 'Ingresa tu contraseña' }, { status: 400 });
    }

    const cleanUsername = username.trim().toLowerCase();
    const rateLimitKey = `${ip}:${cleanUsername}`;

    // 2. Comprobar límite de intentos (Fuerza Bruta)
    const rateCheck = checkRateLimit(rateLimitKey);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        { ok: false, error: rateCheck.error, locked: true, retryAfterSeconds: rateCheck.retryAfterSeconds },
        { status: 429 }
      );
    }

    // 3. Buscar usuario en Base de Datos
    const users = await getUsuariosFromDB();
    const foundUser = (users || []).find(u => 
      u.username?.toLowerCase() === cleanUsername || 
      (u.email && u.email.toLowerCase() === cleanUsername)
    );

    // 4. Verificación de credenciales con prevención de timing attacks
    let isAuthenticated = false;
    if (foundUser && foundUser.password) {
      isAuthenticated = verifyPassword(password, foundUser.password);
    }

    if (!isAuthenticated) {
      const failInfo = recordFailedAttempt(rateLimitKey);
      if (failInfo.locked) {
        return NextResponse.json(
          { 
            ok: false, 
            error: `Has superado el límite de intentos. Bloqueo temporal por ${failInfo.retryAfterMinutes} minutos.`,
            locked: true 
          }, 
          { status: 429 }
        );
      }

      return NextResponse.json(
        { 
          ok: false, 
          error: `Credenciales no válidas. Intentos restantes: ${failInfo.remainingAttempts}`,
          remainingAttempts: failInfo.remainingAttempts
        }, 
        { status: 401 }
      );
    }

    // 5. Autenticación exitosa -> reiniciar contador de intentos
    resetRateLimit(rateLimitKey);

    const userPayload = {
      id: foundUser.id || 'usr_superadmin',
      username: foundUser.username,
      name: foundUser.name || foundUser.username,
      email: foundUser.email || '',
      role: foundUser.role || 'editor_contenido',
      permissions: foundUser.permissions || []
    };

    // 6. Generar Token JWT HMAC-SHA256 firmado y asignarlo solo a Cookie HttpOnly
    const token = signSessionToken(userPayload);

    // 7. Respuesta segura: el token NUNCA se expone en el JSON, solo viaja en Cookie HttpOnly
    const response = NextResponse.json({
      ok: true,
      user: userPayload
    });

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
    console.error('[Login Error]:', e);
    return NextResponse.json({ ok: false, error: 'Error interno del servidor' }, { status: 500 });
  }
}
