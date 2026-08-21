import { NextResponse } from 'next/server';
import { deleteTallerFromDB } from '@/lib/db';

export async function DELETE(req, { params }) {
  try {
    const { id } = await params;
    const ok = await deleteTallerFromDB(id);
    return NextResponse.json({ ok });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
