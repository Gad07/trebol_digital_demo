import { NextResponse } from 'next/server';
import { deleteRecursoFromDB } from '@/lib/db';

export async function DELETE(req, { params }) {
  try {
    const { id } = await params;
    const ok = await deleteRecursoFromDB(id);
    return NextResponse.json({ ok });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
