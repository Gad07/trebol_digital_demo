import mysql from 'mysql2/promise';

let pool;

export function getMySQLPool() {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.MYSQL_HOST || 'localhost',
      port: Number(process.env.MYSQL_PORT) || 3306,
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD || '',
      database: process.env.MYSQL_DATABASE || 'trebol_db',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });
  }
  return pool;
}

export async function queryMySQL(sql, params = []) {
  try {
    const p = getMySQLPool();
    const [rows] = await p.execute(sql, params);
    return rows;
  } catch (err) {
    console.error('[MySQL Error]:', err.message);
    throw err;
  }
}

// In-memory fallback if needed
let memoryStore = {
  blogs: [],
  casos: [],
  testimonios: [],
  landings: []
};

// ── BLOGS ──
export async function getBlogsFromDB() {
  try {
    const rows = await queryMySQL('SELECT * FROM blogs ORDER BY created_at DESC');
    return rows.map(r => ({
      ...r,
      destacado: Boolean(r.destacado),
      tiempoLectura: r.tiempo_lectura,
      imagenUrl: r.imagen_url,
      contenido: r.contenido ? JSON.parse(r.contenido) : []
    }));
  } catch (e) {
    return memoryStore.blogs;
  }
}

export async function saveBlogsToDB(blogs) {
  memoryStore.blogs = blogs;
  try {
    for (const b of blogs) {
      const id = b.id || String(Date.now());
      const slug = b.slug || '';
      const titulo = b.titulo || '';
      const categoria = b.categoria || '';
      const subtitulo = b.subtitulo || '';
      const resumen = b.resumen || '';
      const autor = b.autor || 'Trébol Digital';
      const fecha = b.fecha || new Date().toISOString();
      const tiempoLectura = b.tiempoLectura || b.tiempo_lectura || '5 min';
      const imagenUrl = b.imagenUrl || b.imagen_url || '';
      const destacado = b.destacado ? 1 : 0;
      const contenido = JSON.stringify(b.contenido || []);
      const status = b.status || 'published';

      await queryMySQL(
        `INSERT INTO blogs (id, slug, titulo, categoria, subtitulo, resumen, autor, fecha, tiempo_lectura, imagen_url, destacado, contenido, status)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE
         slug = VALUES(slug), titulo = VALUES(titulo), categoria = VALUES(categoria),
         subtitulo = VALUES(subtitulo), resumen = VALUES(resumen), autor = VALUES(autor),
         fecha = VALUES(fecha), tiempo_lectura = VALUES(tiempo_lectura), imagen_url = VALUES(imagen_url),
         destacado = VALUES(destacado), contenido = VALUES(contenido), status = VALUES(status)`,
        [id, slug, titulo, categoria, subtitulo, resumen, autor, fecha, tiempoLectura, imagenUrl, destacado, contenido, status]
      );
    }
    return true;
  } catch (e) {
    console.error('Error saving blogs to MySQL:', e);
    return false;
  }
}

// ── CASOS ──
export async function getCasosFromDB() {
  try {
    const rows = await queryMySQL('SELECT * FROM casos ORDER BY created_at DESC');
    return rows.map(r => ({
      ...r,
      imagenUrl: r.imagen_url
    }));
  } catch (e) {
    return memoryStore.casos;
  }
}

export async function saveCasosToDB(casos) {
  memoryStore.casos = casos;
  try {
    for (const c of casos) {
      const id = c.id || String(Date.now());
      const slug = c.slug || '';
      const titulo = c.titulo || '';
      const categoria = c.categoria || '';
      const cliente = c.cliente || '';
      const resultado = c.resultado || '';
      const imagenUrl = c.imagenUrl || c.imagen_url || '';
      const descripcion = c.descripcion || '';
      const status = c.status || 'published';

      await queryMySQL(
        `INSERT INTO casos (id, slug, titulo, categoria, cliente, resultado, imagen_url, descripcion, status)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE
         slug = VALUES(slug), titulo = VALUES(titulo), categoria = VALUES(categoria),
         cliente = VALUES(cliente), resultado = VALUES(resultado), imagen_url = VALUES(imagen_url),
         descripcion = VALUES(descripcion), status = VALUES(status)`,
        [id, slug, titulo, categoria, cliente, resultado, imagenUrl, descripcion, status]
      );
    }
    return true;
  } catch (e) {
    console.error('Error saving casos to MySQL:', e);
    return false;
  }
}

// ── TESTIMONIOS ──
export async function getTestimoniosFromDB() {
  try {
    const rows = await queryMySQL('SELECT * FROM testimonios ORDER BY created_at DESC');
    return rows;
  } catch (e) {
    return memoryStore.testimonios;
  }
}

export async function saveTestimoniosToDB(testimonios) {
  memoryStore.testimonios = testimonios;
  try {
    for (const t of testimonios) {
      const id = t.id || String(Date.now());
      const nombre = t.nombre || '';
      const cargo = t.cargo || '';
      const empresa = t.empresa || '';
      const texto = t.texto || '';
      const avatar = t.avatar || '';
      const rating = t.rating || 5;
      const status = t.status || 'published';

      await queryMySQL(
        `INSERT INTO testimonios (id, nombre, cargo, empresa, texto, avatar, rating, status)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE
         nombre = VALUES(nombre), cargo = VALUES(cargo), empresa = VALUES(empresa),
         texto = VALUES(texto), avatar = VALUES(avatar), rating = VALUES(rating), status = VALUES(status)`,
        [id, nombre, cargo, empresa, texto, avatar, rating, status]
      );
    }
    return true;
  } catch (e) {
    console.error('Error saving testimonios to MySQL:', e);
    return false;
  }
}

// ── LANDINGS ──
export async function getLandingsFromDB() {
  try {
    const rows = await queryMySQL('SELECT * FROM landings ORDER BY created_at DESC');
    return rows.map(r => ({
      ...r,
      themeStyle: r.theme_style,
      metaTitle: r.meta_title,
      metaDescription: r.meta_description,
      sections: r.sections ? JSON.parse(r.sections) : []
    }));
  } catch (e) {
    return memoryStore.landings;
  }
}

export async function saveLandingsToDB(landings) {
  memoryStore.landings = landings;
  try {
    for (const l of landings) {
      const id = l.id || String(Date.now());
      const slug = l.slug || '';
      const title = l.title || '';
      const themeStyle = l.themeStyle || l.theme_style || 'v2';
      const status = l.status || 'published';
      const metaTitle = l.metaTitle || l.meta_title || '';
      const metaDescription = l.metaDescription || l.meta_description || '';
      const sections = JSON.stringify(l.sections || []);

      await queryMySQL(
        `INSERT INTO landings (id, slug, title, theme_style, status, meta_title, meta_description, sections)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE
         slug = VALUES(slug), title = VALUES(title), theme_style = VALUES(theme_style),
         status = VALUES(status), meta_title = VALUES(meta_title),
         meta_description = VALUES(meta_description), sections = VALUES(sections)`,
        [id, slug, title, themeStyle, status, metaTitle, metaDescription, sections]
      );
    }
    return true;
  } catch (e) {
    console.error('Error saving landings to MySQL:', e);
    return false;
  }
}

// ── TARJETAS EJECUTIVAS ──
export async function getTarjetasFromDB() {
  try {
    const rows = await queryMySQL('SELECT * FROM tarjetas ORDER BY created_at DESC');
    return rows.map(r => ({
      id: r.id,
      slug: r.slug,
      firstName: r.first_name,
      lastName: r.last_name,
      title: r.title,
      company: r.company,
      bio: r.bio,
      phone: r.phone,
      email: r.email,
      website: r.website,
      websiteUrl: r.website_url,
      whatsappUrl: r.whatsapp_url,
      photoUrl: r.photo_url,
      semblanzaP1: r.semblanza_p1,
      semblanzaP2: r.semblanza_p2,
      citaTexto: r.cita_texto,
      status: r.status,
      createdAt: r.created_at
    }));
  } catch (e) {
    console.error('Error fetching tarjetas from MySQL:', e);
    return [];
  }
}

export async function getTarjetaBySlugFromDB(slug) {
  try {
    const rows = await queryMySQL('SELECT * FROM tarjetas WHERE slug = ? OR id = ? LIMIT 1', [slug, slug]);
    if (rows.length === 0) return null;
    const r = rows[0];
    return {
      id: r.id,
      slug: r.slug,
      firstName: r.first_name,
      lastName: r.last_name,
      title: r.title,
      company: r.company,
      bio: r.bio,
      phone: r.phone,
      email: r.email,
      website: r.website,
      websiteUrl: r.website_url,
      whatsappUrl: r.whatsapp_url,
      photoUrl: r.photo_url,
      semblanzaP1: r.semblanza_p1,
      semblanzaP2: r.semblanza_p2,
      citaTexto: r.cita_texto,
      status: r.status,
      createdAt: r.created_at
    };
  } catch (e) {
    console.error('Error fetching tarjeta by slug from MySQL:', e);
    return null;
  }
}

export async function saveTarjetaToDB(t) {
  try {
    const id = t.id || `tarjeta_${Date.now()}`;
    const slug = t.slug || t.id || `tarjeta-${Date.now()}`;
    const firstName = t.firstName || t.first_name || '';
    const lastName = t.lastName || t.last_name || '';
    const title = t.title || 'DIRECTOR GENERAL';
    const company = t.company || 'TRÉBOL DIGITAL';
    const bio = t.bio || '';
    const phone = t.phone || '';
    const email = t.email || '';
    const website = t.website || 'treboldigital.com';
    const websiteUrl = t.websiteUrl || t.website_url || 'https://treboldigital.com';
    const whatsappUrl = t.whatsappUrl || t.whatsapp_url || `https://wa.me/${phone.replace(/[^0-9]/g, '')}`;
    const photoUrl = t.photoUrl || t.photo_url || '';
    const semblanzaP1 = t.semblanzaP1 || t.semblanza_p1 || '';
    const semblanzaP2 = t.semblanzaP2 || t.semblanza_p2 || '';
    const citaTexto = t.citaTexto || t.cita_texto || '';
    const status = t.status || 'published';

    await queryMySQL(
      `INSERT INTO tarjetas (
        id, slug, first_name, last_name, title, company, bio, phone, email, website, website_url, whatsapp_url, photo_url, semblanza_p1, semblanza_p2, cita_texto, status
       ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE
       slug = VALUES(slug), first_name = VALUES(first_name), last_name = VALUES(last_name),
       title = VALUES(title), company = VALUES(company), bio = VALUES(bio),
       phone = VALUES(phone), email = VALUES(email), website = VALUES(website),
       website_url = VALUES(website_url), whatsapp_url = VALUES(whatsapp_url),
       photo_url = VALUES(photo_url), semblanza_p1 = VALUES(semblanza_p1),
       semblanza_p2 = VALUES(semblanza_p2), cita_texto = VALUES(cita_texto), status = VALUES(status)`,
      [id, slug, firstName, lastName, title, company, bio, phone, email, website, websiteUrl, whatsappUrl, photoUrl, semblanzaP1, semblanzaP2, citaTexto, status]
    );
    return true;
  } catch (e) {
    console.error('Error saving tarjeta to MySQL:', e);
    return false;
  }
}

export async function deleteTarjetaFromDB(id) {
  try {
    await queryMySQL('DELETE FROM tarjetas WHERE id = ? OR slug = ?', [id, id]);
    return true;
  } catch (e) {
    console.error('Error deleting tarjeta from MySQL:', e);
    return false;
  }
}

// ── CITAS / AGENDAMIENTOS ──
export async function getCitasFromDB() {
  try {
    const rows = await queryMySQL('SELECT * FROM citas ORDER BY created_at DESC');
    return rows;
  } catch (e) {
    console.error('Error fetching citas from MySQL:', e);
    return [];
  }
}

export async function saveCitaToDB(c) {
  try {
    const id = `cita_${Date.now()}`;
    const nombre = c.nombre || '';
    const email = c.email || '';
    const telefono = c.telefono || '';
    const empresa = c.empresa || '';
    const hostNombre = c.hostNombre || c.host || 'Gadiel Palma';
    const fecha = c.fecha || '';
    const hora = c.hora || '';
    const mensaje = c.mensaje || '';

    await queryMySQL(
      `INSERT INTO citas (id, nombre, email, telefono, empresa, host_nombre, fecha, hora, mensaje)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [id, nombre, email, telefono, empresa, hostNombre, fecha, hora, mensaje]
    );
    return { ok: true, id };
  } catch (e) {
    console.error('Error saving cita to MySQL:', e);
    return { ok: false, error: String(e) };
  }
}
