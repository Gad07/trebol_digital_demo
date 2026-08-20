import { NextResponse } from 'next/server';
import { updateCitaStatusInDB, deleteCitaFromDB } from '@/lib/db';

export async function PATCH(req, { params }) {
  try {
    const { id } = await params;
    const body = await req.json();
    const ok = await updateCitaStatusInDB(id, body);
    return NextResponse.json({ ok });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = await params;
    const ok = await deleteCitaFromDB(id);
    return NextResponse.json({ ok });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
