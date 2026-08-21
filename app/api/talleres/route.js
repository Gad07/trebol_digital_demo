import { NextResponse } from 'next/server';
import { getTalleresFromDB, saveTallerToDB } from '@/lib/db';

export async function GET() {
  try {
    const talleres = await getTalleresFromDB();
    return NextResponse.json(talleres);
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const result = await saveTallerToDB(body);
    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
