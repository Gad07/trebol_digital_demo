import { NextResponse } from 'next/server';
import { getLandingsFromDB, saveLandingsToDB } from '@/lib/db';

export async function GET() {
  const landings = await getLandingsFromDB();
  return NextResponse.json(landings);
}

export async function POST(req) {
  try {
    const body = await req.json();
    if (!Array.isArray(body)) {
      return NextResponse.json({ error: 'Payload debe ser un array' }, { status: 400 });
    }
    await saveLandingsToDB(body);
    return NextResponse.json({ ok: true, count: body.length });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
