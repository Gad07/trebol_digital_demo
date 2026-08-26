import { NextResponse } from 'next/server';
import { getClientesFromDB, saveClientesToDB } from '@/lib/db';

export async function GET() {
  try {
    const clientesConfig = await getClientesFromDB();
    return NextResponse.json(clientesConfig);
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Payload debe ser un objeto' }, { status: 400 });
    }
    const result = await saveClientesToDB(body);
    return NextResponse.json({ ok: true, data: result });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
