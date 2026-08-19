import { NextResponse } from 'next/server';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const DB_PATH = join(process.cwd(), 'data', 'testimonios_db.json');

function readTestimonios() {
  try { return JSON.parse(readFileSync(DB_PATH, 'utf-8')); }
  catch (e) { return []; }
}

function writeTestimonios(data) {
  writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
}

export async function GET() {
  return NextResponse.json(readTestimonios());
}

export async function POST(req) {
  try {
    const body = await req.json();
    if (!Array.isArray(body)) return NextResponse.json({ error: 'Payload debe ser un array' }, { status: 400 });
    writeTestimonios(body);
    return NextResponse.json({ ok: true, count: body.length });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
