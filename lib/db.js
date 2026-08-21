import mysql from 'mysql2/promise';
import tarjetasFallback from '../data/tarjetas_db.json';
import citasFallback from '../data/citas_db.json';
import usersFallback from '../data/users_db.json';
import recursosFallback from '../data/recursos_db.json';
import talleresFallback from '../data/talleres_db.json';

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

// In-memory & JSON fallback
let memoryStore = {
  blogs: [],
  casos: [],
  testimonios: [],
  landings: [],
  tarjetas: tarjetasFallback || [],
  citas: citasFallback || [],
  usuarios: usersFallback || [],
  recursos: recursosFallback || [],
  talleres: talleresFallback || []
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
    if (rows && rows.length > 0) {
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
    }
    return memoryStore.tarjetas;
  } catch (e) {
    console.warn('MySQL no disponible para tarjetas, usando datos fallback JSON:', e.message);
    return memoryStore.tarjetas;
  }
}

export async function getTarjetaBySlugFromDB(slug) {
  try {
    const rows = await queryMySQL('SELECT * FROM tarjetas WHERE slug = ? OR id = ? LIMIT 1', [slug, slug]);
    if (rows && rows.length > 0) {
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
    }
    return memoryStore.tarjetas.find(t => t.slug === slug || t.id === slug) || null;
  } catch (e) {
    console.warn('MySQL no disponible para tarjeta slug, buscando en fallback JSON:', e.message);
    return memoryStore.tarjetas.find(t => t.slug === slug || t.id === slug) || null;
  }
}

export async function saveTarjetaToDB(t) {
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

  const updatedObj = { id, slug, firstName, lastName, title, company, bio, phone, email, website, websiteUrl, whatsappUrl, photoUrl, semblanzaP1, semblanzaP2, citaTexto, status };

  // Actualizar memoria
  const idx = memoryStore.tarjetas.findIndex(x => x.id === id || x.slug === slug);
  if (idx >= 0) {
    memoryStore.tarjetas[idx] = updatedObj;
  } else {
    memoryStore.tarjetas.unshift(updatedObj);
  }

  try {
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
    return true; // Retornar true porque ya se guardó en memoryStore
  }
}

export async function deleteTarjetaFromDB(id) {
  memoryStore.tarjetas = memoryStore.tarjetas.filter(t => t.id !== id && t.slug !== id);
  try {
    await queryMySQL('DELETE FROM tarjetas WHERE id = ? OR slug = ?', [id, id]);
    return true;
  } catch (e) {
    return true;
  }
}

// ── CITAS / AGENDAMIENTOS ──
export async function getCitasFromDB() {
  try {
    const rows = await queryMySQL('SELECT * FROM citas ORDER BY created_at DESC');
    if (rows && rows.length > 0) return rows;
    return memoryStore.citas || [];
  } catch (e) {
    console.warn('MySQL no disponible para citas, usando fallback JSON:', e.message);
    return memoryStore.citas || [];
  }
}

export async function saveCitaToDB(c) {
  const id = c.id || `cita_${Date.now()}`;
  const nombre = c.nombre || '';
  const email = c.email || '';
  const telefono = c.telefono || '';
  const empresa = c.empresa || '';
  const hostNombre = c.hostNombre || c.host_nombre || c.host || 'Gadiel Palma';
  const fecha = c.fecha || '';
  const hora = c.hora || '';
  const mensaje = c.mensaje || '';
  const notas = c.notas || '';
  const proximaReunion = c.proximaReunion || c.proxima_reunion || '';
  const status = c.status || 'confirmed';

  const newCita = { id, nombre, email, telefono, empresa, host_nombre: hostNombre, fecha, hora, mensaje, notas, proxima_reunion: proximaReunion, status, created_at: new Date() };

  if (!memoryStore.citas) memoryStore.citas = [];
  const idx = memoryStore.citas.findIndex(x => x.id === id);
  if (idx >= 0) {
    memoryStore.citas[idx] = { ...memoryStore.citas[idx], ...newCita };
  } else {
    memoryStore.citas.unshift(newCita);
  }

  try {
    await queryMySQL(
      `INSERT INTO citas (id, nombre, email, telefono, empresa, host_nombre, fecha, hora, mensaje, notas, proxima_reunion, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE 
       nombre = VALUES(nombre), email = VALUES(email), telefono = VALUES(telefono),
       empresa = VALUES(empresa), host_nombre = VALUES(host_nombre), fecha = VALUES(fecha),
       hora = VALUES(hora), status = VALUES(status), mensaje = VALUES(mensaje),
       notas = VALUES(notas), proxima_reunion = VALUES(proxima_reunion)`,
      [id, nombre, email, telefono, empresa, hostNombre, fecha, hora, mensaje, notas, proximaReunion, status]
    );
    return { ok: true, id };
  } catch (e) {
    return { ok: true, id };
  }
}

export async function updateCitaStatusInDB(id, updates) {
  const status = typeof updates === 'string' ? updates : updates.status;
  const notas = typeof updates === 'object' ? updates.notas : undefined;
  const proximaReunion = typeof updates === 'object' ? updates.proximaReunion : undefined;

  if (memoryStore.citas) {
    const item = memoryStore.citas.find(c => c.id === id);
    if (item) {
      if (status !== undefined) item.status = status;
      if (notas !== undefined) item.notas = notas;
      if (proximaReunion !== undefined) item.proxima_reunion = proximaReunion;
    }
  }

  try {
    if (typeof updates === 'object') {
      await queryMySQL(
        'UPDATE citas SET status = COALESCE(?, status), notas = COALESCE(?, notas), proxima_reunion = COALESCE(?, proxima_reunion) WHERE id = ?',
        [status || null, notas || null, proximaReunion || null, id]
      );
    } else {
      await queryMySQL('UPDATE citas SET status = ? WHERE id = ?', [status, id]);
    }
    return true;
  } catch (e) {
    return true;
  }
}

export async function deleteCitaFromDB(id) {
  if (memoryStore.citas) {
    memoryStore.citas = memoryStore.citas.filter(c => c.id !== id);
  }
  try {
    await queryMySQL('DELETE FROM citas WHERE id = ?', [id]);
    return true;
  } catch (e) {
    return true;
  }
}

// ── USUARIOS & RBAC ──
export async function getUsuariosFromDB() {
  try {
    const rows = await queryMySQL('SELECT * FROM usuarios ORDER BY created_at DESC');
    if (rows && rows.length > 0) {
      return rows.map(r => ({
        id: r.id,
        username: r.username,
        password: r.password,
        name: r.name,
        email: r.email,
        role: r.role,
        permissions: typeof r.permissions === 'string' ? JSON.parse(r.permissions || '[]') : (r.permissions || []),
        createdAt: r.created_at
      }));
    }
    return memoryStore.usuarios || [];
  } catch (e) {
    console.warn('MySQL no disponible para usuarios, usando fallback JSON:', e.message);
    return memoryStore.usuarios || [];
  }
}

export async function saveUsuarioToDB(u) {
  const id = u.id || `usr_${Date.now()}`;
  const username = u.username || `user_${Date.now()}`;
  const password = u.password || '123456';
  const name = u.name || username;
  const email = u.email || '';
  const role = u.role || 'editor_contenido';
  const permissions = u.permissions || [];
  const permissionsStr = JSON.stringify(permissions);

  const newUser = { id, username, password, name, email, role, permissions, createdAt: new Date() };

  if (!memoryStore.usuarios) memoryStore.usuarios = [];
  const idx = memoryStore.usuarios.findIndex(x => x.id === id || x.username === username);
  if (idx >= 0) {
    memoryStore.usuarios[idx] = { ...memoryStore.usuarios[idx], ...newUser };
  } else {
    memoryStore.usuarios.unshift(newUser);
  }

  try {
    await queryMySQL(
      `INSERT INTO usuarios (id, username, password, name, email, role, permissions)
       VALUES (?, ?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE
       password = VALUES(password), name = VALUES(name), email = VALUES(email),
       role = VALUES(role), permissions = VALUES(permissions)`,
      [id, username, password, name, email, role, permissionsStr]
    );
    return { ok: true, user: newUser };
  } catch (e) {
    return { ok: true, user: newUser };
  }
}

export async function deleteUsuarioFromDB(id) {
  if (memoryStore.usuarios) {
    memoryStore.usuarios = memoryStore.usuarios.filter(u => u.id !== id && u.username !== id);
  }
  try {
    await queryMySQL('DELETE FROM usuarios WHERE id = ? OR username = ?', [id, id]);
    return true;
  } catch (e) {
    return true;
  }
}

// ── RECURSOS DESCARGABLES ──
export async function getRecursosFromDB() {
  try {
    const rows = await queryMySQL('SELECT * FROM recursos ORDER BY created_at DESC');
    if (rows && rows.length > 0) {
      return rows.map(r => ({
        id: r.id,
        tipo: r.tipo,
        formato: r.formato,
        descargas: r.descargas,
        titulo: r.titulo,
        desc: r.desc_texto,
        tags: typeof r.tags === 'string' ? JSON.parse(r.tags || '[]') : (r.tags || []),
        downloadUrl: r.download_url
      }));
    }
    return memoryStore.recursos || [];
  } catch (e) {
    return memoryStore.recursos || [];
  }
}

export async function saveRecursoToDB(r) {
  const id = r.id || `rec_${Date.now()}`;
  const tipo = r.tipo || 'Plantilla';
  const formato = r.formato || '.PDF';
  const descargas = r.descargas || '1,000+ descargas';
  const titulo = r.titulo || 'Recurso Descargable';
  const descTexto = r.desc || r.desc_texto || '';
  const tagsStr = JSON.stringify(r.tags || []);
  const downloadUrl = r.downloadUrl || r.download_url || '#';

  const newRecurso = { id, tipo, formato, descargas, titulo, desc: descTexto, tags: r.tags || [], downloadUrl };

  if (!memoryStore.recursos) memoryStore.recursos = [];
  const idx = memoryStore.recursos.findIndex(x => x.id === id);
  if (idx >= 0) {
    memoryStore.recursos[idx] = newRecurso;
  } else {
    memoryStore.recursos.unshift(newRecurso);
  }

  try {
    await queryMySQL(
      `INSERT INTO recursos (id, tipo, formato, descargas, titulo, desc_texto, tags, download_url)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE
       tipo = VALUES(tipo), formato = VALUES(formato), descargas = VALUES(descargas),
       titulo = VALUES(titulo), desc_texto = VALUES(desc_texto), tags = VALUES(tags), download_url = VALUES(download_url)`,
      [id, tipo, formato, descargas, titulo, descTexto, tagsStr, downloadUrl]
    );
    return { ok: true, recurso: newRecurso };
  } catch (e) {
    return { ok: true, recurso: newRecurso };
  }
}

export async function deleteRecursoFromDB(id) {
  if (memoryStore.recursos) {
    memoryStore.recursos = memoryStore.recursos.filter(r => r.id !== id);
  }
  try {
    await queryMySQL('DELETE FROM recursos WHERE id = ?', [id]);
    return true;
  } catch (e) {
    return true;
  }
}

// ── CURSOS & TALLERES ──
export async function getTalleresFromDB() {
  try {
    const rows = await queryMySQL('SELECT * FROM talleres ORDER BY created_at DESC');
    if (rows && rows.length > 0) {
      return rows.map(r => ({
        id: r.id,
        titulo: r.titulo,
        tipo: r.tipo,
        modalidad: r.modalidad,
        duracion: r.duracion,
        fecha: r.fecha,
        hora: r.hora,
        precio: r.precio,
        cupos: r.cupos,
        desc: r.desc_texto,
        imagen: r.imagen,
        temas: typeof r.temas === 'string' ? JSON.parse(r.temas || '[]') : (r.temas || [])
      }));
    }
    return memoryStore.talleres || [];
  } catch (e) {
    return memoryStore.talleres || [];
  }
}

export async function saveTallerToDB(t) {
  const id = t.id || `tal_${Date.now()}`;
  const titulo = t.titulo || 'Nuevo Taller';
  const tipo = t.tipo || 'Workshop';
  const modalidad = t.modalidad || 'Online en Vivo';
  const duracion = t.duracion || '4 Horas';
  const fecha = t.fecha || 'A Convenir';
  const hora = t.hora || '10:00 AM';
  const precio = t.precio || 'Gratuito';
  const cupos = t.cupos || 'Cupos limitados';
  const descTexto = t.desc || t.desc_texto || '';
  const imagen = t.imagen || 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80';
  const temasStr = JSON.stringify(t.temas || []);

  const newTaller = { id, titulo, tipo, modalidad, duracion, fecha, hora, precio, cupos, desc: descTexto, imagen, temas: t.temas || [] };

  if (!memoryStore.talleres) memoryStore.talleres = [];
  const idx = memoryStore.talleres.findIndex(x => x.id === id);
  if (idx >= 0) {
    memoryStore.talleres[idx] = newTaller;
  } else {
    memoryStore.talleres.unshift(newTaller);
  }

  try {
    await queryMySQL(
      `INSERT INTO talleres (id, titulo, tipo, modalidad, duracion, fecha, hora, precio, cupos, desc_texto, imagen, temas)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE
       titulo = VALUES(titulo), tipo = VALUES(tipo), modalidad = VALUES(modalidad),
       duracion = VALUES(duracion), fecha = VALUES(fecha), hora = VALUES(hora),
       precio = VALUES(precio), cupos = VALUES(cupos), desc_texto = VALUES(desc_texto),
       imagen = VALUES(imagen), temas = VALUES(temas)`,
      [id, titulo, tipo, modalidad, duracion, fecha, hora, precio, cupos, descTexto, imagen, temasStr]
    );
    return { ok: true, taller: newTaller };
  } catch (e) {
    return { ok: true, taller: newTaller };
  }
}

export async function deleteTallerFromDB(id) {
  if (memoryStore.talleres) {
    memoryStore.talleres = memoryStore.talleres.filter(t => t.id !== id);
  }
  try {
    await queryMySQL('DELETE FROM talleres WHERE id = ?', [id]);
    return true;
  } catch (e) {
    return true;
  }
}
