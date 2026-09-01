import { NextResponse } from 'next/server';
import { verifySessionToken } from '@/lib/auth';

export async function GET(req) {
  try {
    const cookieToken = req.cookies.get('trebol_admin_session')?.value;
    const authHeader = req.headers.get('authorization');
    const headerToken = authHeader?.startsWith('Bearer ') ? authHeader.substring(7).trim() : null;

    const token = cookieToken || headerToken;

    if (!token) {
      return NextResponse.json({ ok: false, authenticated: false }, { status: 401 });
    }

    const payload = verifySessionToken(token);

    if (!payload) {
      const response = NextResponse.json({ ok: false, authenticated: false, error: 'Sesión expirada' }, { status: 401 });
      response.cookies.delete('trebol_admin_session');
      return response;
    }

    return NextResponse.json({
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
  } catch (e) {
    return NextResponse.json({ ok: false, error: 'Error al verificar sesión' }, { status: 500 });
  }
}
