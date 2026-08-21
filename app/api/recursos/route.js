import { NextResponse } from 'next/server';
import { getRecursosFromDB, saveRecursoToDB } from '@/lib/db';

export async function GET() {
  try {
    const recursos = await getRecursosFromDB();
    return NextResponse.json(recursos);
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const result = await saveRecursoToDB(body);
    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
