import { NextResponse } from 'next/server';
import { getUsuariosFromDB, saveUsuarioToDB } from '@/lib/db';

export async function GET() {
  try {
    const users = await getUsuariosFromDB();
    // Hide passwords from list response for security
    const sanitized = users.map(u => ({
      id: u.id,
      username: u.username,
      name: u.name,
      email: u.email,
      role: u.role,
      permissions: u.permissions,
      createdAt: u.createdAt
    }));
    return NextResponse.json(sanitized);
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const result = await saveUsuarioToDB(body);
    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
