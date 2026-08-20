import { NextResponse } from 'next/server';
import { getTarjetaBySlugFromDB, deleteTarjetaFromDB } from '@/lib/db';

export async function GET(req, { params }) {
  try {
    const { slug } = await params;
    const tarjeta = await getTarjetaBySlugFromDB(slug);
    if (!tarjeta) {
      return NextResponse.json({ error: 'Tarjeta no encontrada' }, { status: 404 });
    }
    return NextResponse.json(tarjeta);
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { slug } = await params;
    const ok = await deleteTarjetaFromDB(slug);
    return NextResponse.json({ ok });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
