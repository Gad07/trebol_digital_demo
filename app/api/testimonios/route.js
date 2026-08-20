import { NextResponse } from 'next/server';
import { getTestimoniosFromDB, saveTestimoniosToDB } from '@/lib/db';

export async function GET() {
  const testimonios = await getTestimoniosFromDB();
  return NextResponse.json(testimonios);
}

export async function POST(req) {
  try {
    const body = await req.json();
    if (!Array.isArray(body)) {
      return NextResponse.json({ error: 'Payload debe ser un array' }, { status: 400 });
    }
    await saveTestimoniosToDB(body);
    return NextResponse.json({ ok: true, count: body.length });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
