import { NextResponse } from 'next/server';
import { verifySessionToken, createFingerprint } from '@/lib/auth';

export async function GET(req) {
  try {
    const cookieToken = req.cookies.get('trebol_admin_session')?.value;
    const authHeader = req.headers.get('authorization');
    const headerToken = authHeader?.startsWith('Bearer ') ? authHeader.substring(7).trim() : null;

    const token = cookieToken || headerToken;

    if (!token) {
      const response = NextResponse.json({ ok: false, authenticated: false }, { status: 401 });
      response.headers.set('Cache-Control', 'no-store, max-age=0');
      return response;
    }

    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
               req.headers.get('x-real-ip') || 
               'local-client';
    const userAgent = req.headers.get('user-agent') || 'generic-client';
    const fingerprint = createFingerprint(ip, userAgent);

    const payload = verifySessionToken(token, fingerprint);

    if (!payload) {
      const response = NextResponse.json({ ok: false, authenticated: false, error: 'Sesión inválida o expirada' }, { status: 401 });
      response.cookies.delete('trebol_admin_session');
      response.headers.set('Cache-Control', 'no-store, max-age=0');
      return response;
    }

    const response = NextResponse.json({
      ok: true,
      authenticated: true,
      user: {
        id: payload.id,
        username: payload.username,
        name: payload.name,
        email: payload.email,
        role: payload.role,
        permissions: payload.permissions
      }
    });

    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('X-Content-Type-Options', 'nosniff');

    return response;
  } catch (e) {
    return NextResponse.json({ ok: false, error: 'Error al verificar sesión' }, { status: 500 });
  }
}
