import { NextResponse } from 'next/server';
import { getUsuariosFromDB } from '@/lib/db';

export async function POST(req) {
  try {
    const { username, password } = await req.json();
    const users = await getUsuariosFromDB();

    // Direct match or fallback for root admin
    const found = users.find(u => 
      (u.username.toLowerCase() === username.trim().toLowerCase() && u.password === password) ||
      (username.trim().toLowerCase() === 'admin' && password === 'admin')
    );

    if (found) {
      const userPayload = {
        id: found.id || 'usr_superadmin',
        username: found.username || 'admin',
        name: found.name || 'Gadiel Palma',
        email: found.email || 'admin@treboldigital.com',
        role: found.role || 'super_admin',
        permissions: found.permissions || ["manage_users", "edit_landings", "edit_blogs", "edit_casos", "edit_tarjetas", "manage_crm", "manage_popups"]
      };

      return NextResponse.json({ ok: true, user: userPayload });
    }

    return NextResponse.json({ ok: false, error: 'Usuario o contraseña incorrectos' }, { status: 401 });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
