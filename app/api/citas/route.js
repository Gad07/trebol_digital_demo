import { NextResponse } from 'next/server';
import { getCitasFromDB, saveCitaToDB } from '@/lib/db';

export async function GET() {
  try {
    const citas = await getCitasFromDB();
    return NextResponse.json(citas);
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const result = await saveCitaToDB(body);
    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
