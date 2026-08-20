import { NextResponse } from 'next/server';
import { getTarjetasFromDB, saveTarjetaToDB } from '@/lib/db';

export async function GET() {
  try {
    const tarjetas = await getTarjetasFromDB();
    return NextResponse.json(tarjetas);
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const ok = await saveTarjetaToDB(body);
    if (ok) {
      return NextResponse.json({ ok: true, data: body });
    }
    return NextResponse.json({ error: 'Error al guardar en la base de datos' }, { status: 500 });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
