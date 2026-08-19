import { NextResponse } from 'next/server';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const DB_PATH = join(process.cwd(), 'data', 'blogs_db.json');

function readBlogs() {
  try {
    const raw = readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

function writeBlogs(blogs) {
  writeFileSync(DB_PATH, JSON.stringify(blogs, null, 2), 'utf-8');
}

// GET /api/blogs → devuelve todos los artículos
export async function GET() {
  const blogs = readBlogs();
  return NextResponse.json(blogs);
}

// POST /api/blogs → guarda el array completo
export async function POST(req) {
  try {
    const body = await req.json();
    if (!Array.isArray(body)) {
      return NextResponse.json({ error: 'Payload debe ser un array' }, { status: 400 });
    }
    writeBlogs(body);
    return NextResponse.json({ ok: true, count: body.length });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
