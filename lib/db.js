import { isMySQLConfigured, queryMySQL } from './mysql.js';
import { prisma, isPrismaConfigured } from './prisma.js';

import defaultBlogs from '../data/blogs_db.json';

// Helper to safe stringify JSON for MySQL
function toJSON(val) {
  if (val === null || val === undefined) return null;
  if (typeof val === 'string') return val;
  return JSON.stringify(val);
}

// ── BLOGS ──
export async function getBlogsFromDB() {
  if (isMySQLConfigured()) {
    try {
      const blogs = await queryMySQL('SELECT * FROM blogs ORDER BY created_at DESC');
      if (blogs && blogs.length > 0) {
        return blogs.map(r => {
          const rawContenido = typeof r.contenido === 'string' ? JSON.parse(r.contenido || '[]') : (r.contenido || []);
          const isContentObj = rawContenido && typeof rawContenido === 'object' && !Array.isArray(rawContenido);

          return {
            ...r,
            destacado: Boolean(r.destacado),
            tiempo: r.tiempo_lectura || '8 min',
            tiempoLectura: r.tiempo_lectura || '8 min',
            imagenUrl: r.imagen_url,
            imagen: r.imagen_url,
            extracto: r.resumen,
            content: isContentObj ? rawContenido : (r.content || null),
            contenido: Array.isArray(rawContenido) ? rawContenido : (rawContenido?.contenido || [])
          };
        });
      }
    } catch (e) {
      console.warn('[MySQL Blogs Error]:', e.message);
    }
  }

  if (isPrismaConfigured()) {
    try {
      const blogs = await prisma.blog.findMany({ orderBy: { created_at: 'desc' } });
      if (blogs && blogs.length > 0) {
        return blogs.map(r => {
          const rawContenido = typeof r.contenido === 'string' ? JSON.parse(r.contenido || '[]') : (r.contenido || []);
          const isContentObj = rawContenido && typeof rawContenido === 'object' && !Array.isArray(rawContenido);

          return {
            ...r,
            destacado: Boolean(r.destacado),
            tiempo: r.tiempo_lectura || '8 min',
            tiempoLectura: r.tiempo_lectura || '8 min',
            imagenUrl: r.imagen_url,
            imagen: r.imagen_url,
            extracto: r.resumen,
            content: isContentObj ? rawContenido : (r.content || null),
            contenido: Array.isArray(rawContenido) ? rawContenido : (rawContenido?.contenido || [])
          };
        });
      }
    } catch (e) {
      console.warn('[Prisma Blogs Error]:', e.message);
    }
  }

  return defaultBlogs || [];
}

export async function saveBlogsToDB(blogs) {
  if (isMySQLConfigured()) {
    try {
      for (const b of blogs) {
        const id = b.id || String(Date.now());
        const slug = b.slug || '';
        const titulo = b.titulo || '';
        const categoria = b.categoria || '';
        const subtitulo = b.subtitulo || '';
        const resumen = b.resumen || b.extracto || '';
        const autor = b.autor || 'Trébol Digital';
        const fecha = b.fecha || new Date().toISOString();
        const tiempoLectura = b.tiempoLectura || b.tiempo_lectura || b.tiempo || '8 min';
        const imagenUrl = b.imagenUrl || b.imagen_url || b.imagen || '';
        const destacado = b.destacado ? 1 : 0;
        const contenido = toJSON(b.content ? b.content : (b.contenido || []));
        const status = b.status || 'published';

        await queryMySQL(`
          INSERT INTO blogs (id, slug, titulo, categoria, subtitulo, resumen, autor, fecha, tiempo_lectura, imagen_url, destacado, contenido, status)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          ON DUPLICATE KEY UPDATE
            slug = VALUES(slug),
            titulo = VALUES(titulo),
            categoria = VALUES(categoria),
            subtitulo = VALUES(subtitulo),
            resumen = VALUES(resumen),
            autor = VALUES(autor),
            fecha = VALUES(fecha),
            tiempo_lectura = VALUES(tiempo_lectura),
            imagen_url = VALUES(imagen_url),
            destacado = VALUES(destacado),
            contenido = VALUES(contenido),
            status = VALUES(status);
        `, [id, slug, titulo, categoria, subtitulo, resumen, autor, fecha, tiempoLectura, imagenUrl, destacado, contenido, status]);
      }
      return true;
    } catch (e) {
      console.error('[MySQL Save Blogs Error]:', e.message);
    }
  }

  if (isPrismaConfigured()) {
    try {
      for (const b of blogs) {
        const id = b.id || String(Date.now());
        const data = {
          id,
          slug: b.slug || '',
          titulo: b.titulo || '',
          categoria: b.categoria || '',
          subtitulo: b.subtitulo || '',
          resumen: b.resumen || b.extracto || '',
          autor: b.autor || 'Trébol Digital',
          fecha: b.fecha || new Date().toISOString(),
          tiempo_lectura: b.tiempoLectura || b.tiempo_lectura || b.tiempo || '8 min',
          imagen_url: b.imagenUrl || b.imagen_url || b.imagen || '',
          destacado: Boolean(b.destacado),
          contenido: b.content ? b.content : (b.contenido || []),
          status: b.status || 'published'
        };
        await prisma.blog.upsert({ where: { id }, create: data, update: data });
      }
      return true;
    } catch (e) {
      console.error('[Prisma Save Blogs Error]:', e.message);
    }
  }

  return false;
}

// ── CASOS DE ÉXITO ──
export async function getCasosFromDB() {
  if (isMySQLConfigured()) {
    try {
      const casos = await queryMySQL('SELECT * FROM casos ORDER BY created_at DESC');
      return casos.map(r => ({
        ...r,
        imagenUrl: r.imagen_url
      }));
    } catch (e) {
      console.warn('[MySQL Casos Error]:', e.message);
    }
  }

  if (isPrismaConfigured()) {
    try {
      const casos = await prisma.caso.findMany({ orderBy: { created_at: 'desc' } });
      return casos.map(r => ({
        ...r,
        imagenUrl: r.imagen_url
      }));
    } catch (e) {
      console.warn('[Prisma Casos Error]:', e.message);
    }
  }

  return [];
}

export async function saveCasosToDB(casos) {
  if (isMySQLConfigured()) {
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

        await queryMySQL(`
          INSERT INTO casos (id, slug, titulo, categoria, cliente, resultado, imagen_url, descripcion, status)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
          ON DUPLICATE KEY UPDATE
            slug = VALUES(slug),
            titulo = VALUES(titulo),
            categoria = VALUES(categoria),
            cliente = VALUES(cliente),
            resultado = VALUES(resultado),
            imagen_url = VALUES(imagen_url),
            descripcion = VALUES(descripcion),
            status = VALUES(status);
        `, [id, slug, titulo, categoria, cliente, resultado, imagenUrl, descripcion, status]);
      }
      return true;
    } catch (e) {
      console.error('[MySQL Save Casos Error]:', e.message);
    }
  }

  if (isPrismaConfigured()) {
    try {
      for (const c of casos) {
        const id = c.id || String(Date.now());
        const data = {
          id,
          slug: c.slug || '',
          titulo: c.titulo || '',
          categoria: c.categoria || '',
          cliente: c.cliente || '',
          resultado: c.resultado || '',
          imagen_url: c.imagenUrl || c.imagen_url || '',
          descripcion: c.descripcion || '',
          status: c.status || 'published'
        };
        await prisma.caso.upsert({ where: { id }, create: data, update: data });
      }
      return true;
    } catch (e) {
      console.error('[Prisma Save Casos Error]:', e.message);
    }
  }

  return false;
}

// ── TESTIMONIOS ──
export async function getTestimoniosFromDB() {
  let list = [];
  if (isMySQLConfigured()) {
    try {
      list = await queryMySQL('SELECT * FROM testimonios ORDER BY created_at DESC');
    } catch (e) {
      console.warn('[MySQL Testimonios Error]:', e.message);
    }
  } else if (isPrismaConfigured()) {
    try {
      list = await prisma.testimonio.findMany({ orderBy: { created_at: 'desc' } });
    } catch (e) {
      console.warn('[Prisma Testimonios Error]:', e.message);
    }
  }

  return (list || []).map((t) => {
    const name = t.nombre || t.cliente || t.name || t.autor || '';
    const text = t.texto || t.quote || t.testimonio || t.contenido || t.descripcion || t.comentario || t.mensaje || t.resena || t.review || t.opinion || '';
    const img = t.avatar || t.clienteImg || t.imagen_url || t.imagenUrl || t.foto || t.image || t.avatar_url || '';
    return {
      ...t,
      id: t.id,
      nombre: name,
      cliente: name,
      cargo: t.cargo || t.puesto || t.role || t.title || '',
      empresa: t.empresa || t.company || t.negocio || '',
      texto: text,
      quote: text,
      avatar: img,
      clienteImg: img,
      rating: Number(t.rating || t.estrellas || t.calificacion || 5) || 5,
      status: t.status || 'published'
    };
  });
}

export async function saveTestimoniosToDB(testimonios) {
  let saved = false;

  if (isMySQLConfigured()) {
    try {
      for (const t of testimonios) {
        const id = String(t.id || Date.now());
        const nombre = t.nombre || t.cliente || t.name || 'Cliente Trébol';
        const cargo = t.cargo || t.puesto || t.role || '';
        const empresa = t.empresa || t.company || '';
        const texto = t.texto || t.quote || t.testimonio || t.contenido || t.descripcion || '';
        const avatar = t.avatar || t.clienteImg || t.imagen_url || t.imagenUrl || '';
        const rating = Number(t.rating) || 5;
        const status = t.status || 'published';

        await queryMySQL(`
          INSERT INTO testimonios (id, nombre, cargo, empresa, texto, avatar, rating, status)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?)
          ON DUPLICATE KEY UPDATE
            nombre = VALUES(nombre),
            cargo = VALUES(cargo),
            empresa = VALUES(empresa),
            texto = VALUES(texto),
            avatar = VALUES(avatar),
            rating = VALUES(rating),
            status = VALUES(status);
        `, [id, nombre, cargo, empresa, texto, avatar, rating, status]);
      }
      saved = true;
    } catch (e) {
      console.error('[MySQL Save Testimonios Error]:', e.message);
    }
  } else if (isPrismaConfigured()) {
    try {
      for (const t of testimonios) {
        const id = String(t.id || Date.now());
        const data = {
          id,
          nombre: t.nombre || t.cliente || t.name || '',
          cargo: t.cargo || t.puesto || t.role || '',
          empresa: t.empresa || t.company || '',
          texto: t.texto || t.quote || t.testimonio || t.contenido || t.descripcion || '',
          avatar: t.avatar || t.clienteImg || t.imagen_url || t.imagenUrl || '',
          rating: Number(t.rating) || 5,
          status: t.status || 'published'
        };
        await prisma.testimonio.upsert({ where: { id }, create: data, update: data });
      }
      saved = true;
    } catch (e) {
      console.error('[Prisma Save Testimonios Error]:', e.message);
    }
  }

  return saved;
}

// ── LANDING PAGES ──
export async function getLandingsFromDB() {
  if (isMySQLConfigured()) {
    try {
      const landings = await queryMySQL('SELECT * FROM landings ORDER BY created_at DESC');
      return landings.map(r => ({
        ...r,
        themeStyle: r.theme_style,
        metaTitle: r.meta_title,
        metaDescription: r.meta_description,
        sections: typeof r.sections === 'string' ? JSON.parse(r.sections || '[]') : (r.sections || [])
      }));
    } catch (e) {
      console.warn('[MySQL Landings Error]:', e.message);
    }
  }

  if (isPrismaConfigured()) {
    try {
      const landings = await prisma.landing.findMany({ orderBy: { created_at: 'desc' } });
      return landings.map(r => ({
        ...r,
        themeStyle: r.theme_style,
        metaTitle: r.meta_title,
        metaDescription: r.meta_description,
        sections: typeof r.sections === 'string' ? JSON.parse(r.sections || '[]') : (r.sections || [])
      }));
    } catch (e) {
      console.warn('[Prisma Landings Error]:', e.message);
    }
  }

  return [];
}

export async function saveLandingsToDB(landings) {
  if (isMySQLConfigured()) {
    try {
      for (const l of landings) {
        const id = l.id || String(Date.now());
        const slug = l.slug || '';
        const title = l.title || '';
        const themeStyle = l.themeStyle || l.theme_style || 'v2';
        const status = l.status || 'published';
        const metaTitle = l.metaTitle || l.meta_title || '';
        const metaDescription = l.metaDescription || l.meta_description || '';
        const sections = toJSON(l.sections || []);

        await queryMySQL(`
          INSERT INTO landings (id, slug, title, theme_style, status, meta_title, meta_description, sections)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?)
          ON DUPLICATE KEY UPDATE
            slug = VALUES(slug),
            title = VALUES(title),
            theme_style = VALUES(theme_style),
            status = VALUES(status),
            meta_title = VALUES(meta_title),
            meta_description = VALUES(meta_description),
            sections = VALUES(sections);
        `, [id, slug, title, themeStyle, status, metaTitle, metaDescription, sections]);
      }
      return true;
    } catch (e) {
      console.error('[MySQL Save Landings Error]:', e.message);
    }
  }

  if (isPrismaConfigured()) {
    try {
      for (const l of landings) {
        const id = l.id || String(Date.now());
        const data = {
          id,
          slug: l.slug || '',
          title: l.title || '',
          theme_style: l.themeStyle || l.theme_style || 'v2',
          status: l.status || 'published',
          meta_title: l.metaTitle || l.meta_title || '',
          meta_description: l.metaDescription || l.meta_description || '',
          sections: l.sections || []
        };
        await prisma.landing.upsert({ where: { id }, create: data, update: data });
      }
      return true;
    } catch (e) {
      console.error('[Prisma Save Landings Error]:', e.message);
    }
  }

  return false;
}

// ── TARJETAS EJECUTIVAS ──
function mapTarjetaRow(r) {
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

export async function getTarjetasFromDB() {
  if (isMySQLConfigured()) {
    try {
      const tarjetas = await queryMySQL('SELECT * FROM tarjetas ORDER BY created_at DESC');
      return tarjetas.map(mapTarjetaRow);
    } catch (e) {
      console.warn('[MySQL Tarjetas Error]:', e.message);
    }
  }

  if (isPrismaConfigured()) {
    try {
      const tarjetas = await prisma.tarjeta.findMany({ orderBy: { created_at: 'desc' } });
      return tarjetas.map(mapTarjetaRow);
    } catch (e) {
      console.warn('[Prisma Tarjetas Error]:', e.message);
    }
  }

  return [];
}

export async function getTarjetaBySlugFromDB(slug) {
  if (isMySQLConfigured()) {
    try {
      const tarjetas = await queryMySQL('SELECT * FROM tarjetas WHERE slug = ? OR id = ? LIMIT 1', [slug, slug]);
      if (tarjetas && tarjetas.length > 0) return mapTarjetaRow(tarjetas[0]);
    } catch (e) {
      console.warn('[MySQL Tarjeta Slug Error]:', e.message);
    }
  }

  if (isPrismaConfigured()) {
    try {
      const tarjeta = await prisma.tarjeta.findFirst({
        where: { OR: [{ slug: slug }, { id: slug }] }
      });
      if (tarjeta) return mapTarjetaRow(tarjeta);
    } catch (e) {
      console.warn('[Prisma Tarjeta Slug Error]:', e.message);
    }
  }

  return null;
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

  if (isMySQLConfigured()) {
    try {
      await queryMySQL(`
        INSERT INTO tarjetas (
          id, slug, first_name, last_name, title, company, bio, phone, email,
          website, website_url, whatsapp_url, photo_url, semblanza_p1, semblanza_p2, cita_texto, status
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
          slug = VALUES(slug),
          first_name = VALUES(first_name),
          last_name = VALUES(last_name),
          title = VALUES(title),
          company = VALUES(company),
          bio = VALUES(bio),
          phone = VALUES(phone),
          email = VALUES(email),
          website = VALUES(website),
          website_url = VALUES(website_url),
          whatsapp_url = VALUES(whatsapp_url),
          photo_url = VALUES(photo_url),
          semblanza_p1 = VALUES(semblanza_p1),
          semblanza_p2 = VALUES(semblanza_p2),
          cita_texto = VALUES(cita_texto),
          status = VALUES(status);
      `, [id, slug, firstName, lastName, title, company, bio, phone, email, website, websiteUrl, whatsappUrl, photoUrl, semblanzaP1, semblanzaP2, citaTexto, status]);
      return true;
    } catch (e) {
      console.error('[MySQL Save Tarjeta Error]:', e.message);
    }
  }

  if (isPrismaConfigured()) {
    try {
      const data = {
        id, slug, first_name: firstName, last_name: lastName, title, company, bio, phone, email,
        website, website_url: websiteUrl, whatsapp_url: whatsappUrl, photo_url: photoUrl,
        semblanza_p1: semblanzaP1, semblanza_p2: semblanzaP2, cita_texto: citaTexto, status
      };
      await prisma.tarjeta.upsert({ where: { id }, create: data, update: data });
      return true;
    } catch (e) {
      console.error('[Prisma Save Tarjeta Error]:', e.message);
    }
  }

  return false;
}

export async function deleteTarjetaFromDB(id) {
  if (isMySQLConfigured()) {
    try {
      await queryMySQL('DELETE FROM tarjetas WHERE id = ? OR slug = ?', [id, id]);
      return true;
    } catch (e) {
      console.error('[MySQL Delete Tarjeta Error]:', e.message);
    }
  }

  if (isPrismaConfigured()) {
    try {
      await prisma.tarjeta.deleteMany({ where: { OR: [{ id: id }, { slug: id }] } });
      return true;
    } catch (e) {
      console.error('[Prisma Delete Tarjeta Error]:', e.message);
    }
  }

  return false;
}

// ── CITAS / AGENDAMIENTOS ──
export async function getCitasFromDB() {
  if (isMySQLConfigured()) {
    try {
      const citas = await queryMySQL('SELECT * FROM citas ORDER BY created_at DESC');
      return citas || [];
    } catch (e) {
      console.warn('[MySQL Citas Error]:', e.message);
    }
  }

  if (isPrismaConfigured()) {
    try {
      const citas = await prisma.cita.findMany({ orderBy: { created_at: 'desc' } });
      return citas || [];
    } catch (e) {
      console.warn('[Prisma Citas Error]:', e.message);
    }
  }

  return [];
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

  if (isMySQLConfigured()) {
    try {
      await queryMySQL(`
        INSERT INTO citas (id, nombre, email, telefono, empresa, host_nombre, fecha, hora, mensaje, notas, proxima_reunion, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
          nombre = VALUES(nombre),
          email = VALUES(email),
          telefono = VALUES(telefono),
          empresa = VALUES(empresa),
          host_nombre = VALUES(host_nombre),
          fecha = VALUES(fecha),
          hora = VALUES(hora),
          mensaje = VALUES(mensaje),
          notas = VALUES(notas),
          proxima_reunion = VALUES(proxima_reunion),
          status = VALUES(status);
      `, [id, nombre, email, telefono, empresa, hostNombre, fecha, hora, mensaje, notas, proximaReunion, status]);
      return { ok: true, id };
    } catch (e) {
      console.error('[MySQL Save Cita Error]:', e.message);
    }
  }

  if (isPrismaConfigured()) {
    try {
      const data = { id, nombre, email, telefono, empresa, host_nombre: hostNombre, fecha, hora, mensaje, notas, proxima_reunion: proximaReunion, status };
      await prisma.cita.upsert({ where: { id }, create: data, update: data });
      return { ok: true, id };
    } catch (e) {
      console.error('[Prisma Save Cita Error]:', e.message);
    }
  }

  return { ok: false, error: 'No database connected' };
}

export async function updateCitaStatusInDB(id, updates) {
  const status = typeof updates === 'string' ? updates : updates.status;
  const notas = typeof updates === 'object' ? updates.notas : undefined;
  const proximaReunion = typeof updates === 'object' ? updates.proximaReunion : undefined;

  if (isMySQLConfigured()) {
    try {
      const fields = [];
      const values = [];
      if (status !== undefined) { fields.push('status = ?'); values.push(status); }
      if (notas !== undefined) { fields.push('notas = ?'); values.push(notas); }
      if (proximaReunion !== undefined) { fields.push('proxima_reunion = ?'); values.push(proximaReunion); }
      if (fields.length > 0) {
        values.push(id);
        await queryMySQL(`UPDATE citas SET ${fields.join(', ')} WHERE id = ?`, values);
      }
      return true;
    } catch (e) {
      console.error('[MySQL Update Cita Error]:', e.message);
    }
  }

  if (isPrismaConfigured()) {
    try {
      const patch = {};
      if (status !== undefined) patch.status = status;
      if (notas !== undefined) patch.notas = notas;
      if (proximaReunion !== undefined) patch.proxima_reunion = proximaReunion;
      await prisma.cita.update({ where: { id }, data: patch });
      return true;
    } catch (e) {
      console.error('[Prisma Update Cita Error]:', e.message);
    }
  }

  return false;
}

export async function deleteCitaFromDB(id) {
  if (isMySQLConfigured()) {
    try {
      await queryMySQL('DELETE FROM citas WHERE id = ?', [id]);
      return true;
    } catch (e) {
      console.error('[MySQL Delete Cita Error]:', e.message);
    }
  }

  if (isPrismaConfigured()) {
    try {
      await prisma.cita.delete({ where: { id } });
      return true;
    } catch (e) {
      console.error('[Prisma Delete Cita Error]:', e.message);
    }
  }

  return false;
}

// ── USUARIOS & RBAC ──
export async function getUsuariosFromDB() {
  if (isMySQLConfigured()) {
    try {
      const usuarios = await queryMySQL('SELECT * FROM usuarios ORDER BY created_at DESC');
      return usuarios.map(r => ({
        id: r.id,
        username: r.username,
        password: r.password,
        name: r.name,
        email: r.email,
        role: r.role,
        permissions: typeof r.permissions === 'string' ? JSON.parse(r.permissions || '[]') : (r.permissions || []),
        createdAt: r.created_at
      }));
    } catch (e) {
      console.warn('[MySQL Usuarios Error]:', e.message);
    }
  }

  if (isPrismaConfigured()) {
    try {
      const usuarios = await prisma.usuario.findMany({ orderBy: { created_at: 'desc' } });
      return usuarios.map(r => ({
        id: r.id,
        username: r.username,
        password: r.password,
        name: r.name,
        email: r.email,
        role: r.role,
        permissions: typeof r.permissions === 'string' ? JSON.parse(r.permissions || '[]') : (r.permissions || []),
        createdAt: r.created_at
      }));
    } catch (e) {
      console.warn('[Prisma Usuarios Error]:', e.message);
    }
  }

  return [];
}

export async function saveUsuarioToDB(u) {
  const id = u.id || `usr_${Date.now()}`;
  const username = u.username || `user_${Date.now()}`;
  const password = u.password || '123456';
  const name = u.name || username;
  const email = u.email || '';
  const role = u.role || 'editor_contenido';
  const permissions = toJSON(u.permissions || []);

  const newUser = { id, username, password, name, email, role, permissions: u.permissions || [], createdAt: new Date() };

  if (isMySQLConfigured()) {
    try {
      await queryMySQL(`
        INSERT INTO usuarios (id, username, password, name, email, role, permissions)
        VALUES (?, ?, ?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
          username = VALUES(username),
          password = VALUES(password),
          name = VALUES(name),
          email = VALUES(email),
          role = VALUES(role),
          permissions = VALUES(permissions);
      `, [id, username, password, name, email, role, permissions]);
      return { ok: true, user: newUser };
    } catch (e) {
      console.error('[MySQL Save Usuario Error]:', e.message);
    }
  }

  if (isPrismaConfigured()) {
    try {
      const data = { id, username, password, name, email, role, permissions: u.permissions || [] };
      await prisma.usuario.upsert({ where: { id }, create: data, update: data });
      return { ok: true, user: newUser };
    } catch (e) {
      console.error('[Prisma Save Usuario Error]:', e.message);
    }
  }

  return { ok: false, error: 'No database connected' };
}

export async function deleteUsuarioFromDB(id) {
  if (isMySQLConfigured()) {
    try {
      await queryMySQL('DELETE FROM usuarios WHERE id = ? OR username = ?', [id, id]);
      return true;
    } catch (e) {
      console.error('[MySQL Delete Usuario Error]:', e.message);
    }
  }

  if (isPrismaConfigured()) {
    try {
      await prisma.usuario.deleteMany({ where: { OR: [{ id: id }, { username: id }] } });
      return true;
    } catch (e) {
      console.error('[Prisma Delete Usuario Error]:', e.message);
    }
  }

  return false;
}

// ── RECURSOS DESCARGABLES ──
export async function getRecursosFromDB() {
  if (isMySQLConfigured()) {
    try {
      const recursos = await queryMySQL('SELECT * FROM recursos ORDER BY created_at DESC');
      return recursos.map(r => ({
        id: r.id,
        tipo: r.tipo,
        formato: r.formato,
        descargas: r.descargas,
        titulo: r.titulo,
        desc: r.desc_texto,
        tags: typeof r.tags === 'string' ? JSON.parse(r.tags || '[]') : (r.tags || []),
        downloadUrl: r.download_url
      }));
    } catch (e) {
      console.warn('[MySQL Recursos Error]:', e.message);
    }
  }

  if (isPrismaConfigured()) {
    try {
      const recursos = await prisma.recurso.findMany({ orderBy: { created_at: 'desc' } });
      return recursos.map(r => ({
        id: r.id,
        tipo: r.tipo,
        formato: r.formato,
        descargas: r.descargas,
        titulo: r.titulo,
        desc: r.desc_texto,
        tags: typeof r.tags === 'string' ? JSON.parse(r.tags || '[]') : (r.tags || []),
        downloadUrl: r.download_url
      }));
    } catch (e) {
      console.warn('[Prisma Recursos Error]:', e.message);
    }
  }

  return [];
}

export async function saveRecursoToDB(r) {
  const id = r.id || `rec_${Date.now()}`;
  const tipo = r.tipo || 'Plantilla';
  const formato = r.formato || '.PDF';
  const descargas = r.descargas || '1,000+ descargas';
  const titulo = r.titulo || 'Recurso Descargable';
  const descTexto = r.desc || r.desc_texto || '';
  const tags = toJSON(r.tags || []);
  const downloadUrl = r.downloadUrl || r.download_url || '#';

  const newRecurso = { id, tipo, formato, descargas, titulo, desc: descTexto, tags: r.tags || [], downloadUrl };

  if (isMySQLConfigured()) {
    try {
      await queryMySQL(`
        INSERT INTO recursos (id, tipo, formato, descargas, titulo, desc_texto, tags, download_url)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
          tipo = VALUES(tipo),
          formato = VALUES(formato),
          descargas = VALUES(descargas),
          titulo = VALUES(titulo),
          desc_texto = VALUES(desc_texto),
          tags = VALUES(tags),
          download_url = VALUES(download_url);
      `, [id, tipo, formato, descargas, titulo, descTexto, tags, downloadUrl]);
      return { ok: true, recurso: newRecurso };
    } catch (e) {
      console.error('[MySQL Save Recurso Error]:', e.message);
    }
  }

  if (isPrismaConfigured()) {
    try {
      const data = { id, tipo, formato, descargas, titulo, desc_texto: descTexto, tags: r.tags || [], download_url: downloadUrl };
      await prisma.recurso.upsert({ where: { id }, create: data, update: data });
      return { ok: true, recurso: newRecurso };
    } catch (e) {
      console.error('[Prisma Save Recurso Error]:', e.message);
    }
  }

  return { ok: false, error: 'No database connected' };
}

export async function deleteRecursoFromDB(id) {
  if (isMySQLConfigured()) {
    try {
      await queryMySQL('DELETE FROM recursos WHERE id = ?', [id]);
      return true;
    } catch (e) {
      console.error('[MySQL Delete Recurso Error]:', e.message);
    }
  }

  if (isPrismaConfigured()) {
    try {
      await prisma.recurso.delete({ where: { id } });
      return true;
    } catch (e) {
      console.error('[Prisma Delete Recurso Error]:', e.message);
    }
  }

  return false;
}

// ── CURSOS & TALLERES ──
export async function getTalleresFromDB() {
  if (isMySQLConfigured()) {
    try {
      const talleres = await queryMySQL('SELECT * FROM talleres ORDER BY created_at DESC');
      return talleres.map(r => ({
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
    } catch (e) {
      console.warn('[MySQL Talleres Error]:', e.message);
    }
  }

  if (isPrismaConfigured()) {
    try {
      const talleres = await prisma.taller.findMany({ orderBy: { created_at: 'desc' } });
      return talleres.map(r => ({
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
    } catch (e) {
      console.warn('[Prisma Talleres Error]:', e.message);
    }
  }

  return [];
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
  const temas = toJSON(t.temas || []);

  const newTaller = { id, titulo, tipo, modalidad, duracion, fecha, hora, precio, cupos, desc: descTexto, imagen, temas: t.temas || [] };

  if (isMySQLConfigured()) {
    try {
      await queryMySQL(`
        INSERT INTO talleres (id, titulo, tipo, modalidad, duracion, fecha, hora, precio, cupos, desc_texto, imagen, temas)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
          titulo = VALUES(titulo),
          tipo = VALUES(tipo),
          modalidad = VALUES(modalidad),
          duracion = VALUES(duracion),
          fecha = VALUES(fecha),
          hora = VALUES(hora),
          precio = VALUES(precio),
          cupos = VALUES(cupos),
          desc_texto = VALUES(desc_texto),
          imagen = VALUES(imagen),
          temas = VALUES(temas);
      `, [id, titulo, tipo, modalidad, duracion, fecha, hora, precio, cupos, descTexto, imagen, temas]);
      return { ok: true, taller: newTaller };
    } catch (e) {
      console.error('[MySQL Save Taller Error]:', e.message);
    }
  }

  if (isPrismaConfigured()) {
    try {
      const data = { id, titulo, tipo, modalidad, duracion, fecha, hora, precio, cupos, desc_texto: descTexto, imagen, temas: t.temas || [] };
      await prisma.taller.upsert({ where: { id }, create: data, update: data });
      return { ok: true, taller: newTaller };
    } catch (e) {
      console.error('[Prisma Save Taller Error]:', e.message);
    }
  }

  return { ok: false, error: 'No database connected' };
}

export async function deleteTallerFromDB(id) {
  if (isMySQLConfigured()) {
    try {
      await queryMySQL('DELETE FROM talleres WHERE id = ?', [id]);
      return true;
    } catch (e) {
      console.error('[MySQL Delete Taller Error]:', e.message);
    }
  }

  if (isPrismaConfigured()) {
    try {
      await prisma.taller.delete({ where: { id } });
      return true;
    } catch (e) {
      console.error('[Prisma Delete Taller Error]:', e.message);
    }
  }

  return false;
}

// ── BANNER Y LOGOS DE CLIENTES ──
export async function getClientesFromDB() {
  if (isMySQLConfigured()) {
    try {
      const rows = await queryMySQL('SELECT valor FROM config WHERE clave = ? LIMIT 1', ['clientes_banner']);
      if (rows && rows.length > 0 && rows[0].valor) {
        return typeof rows[0].valor === 'string' ? JSON.parse(rows[0].valor) : rows[0].valor;
      }
    } catch (e) {
      console.warn('[MySQL Clientes Banner Error]:', e.message);
    }
  }

  if (isPrismaConfigured()) {
    try {
      const conf = await prisma.config.findUnique({ where: { clave: 'clientes_banner' } });
      if (conf && conf.valor) {
        return typeof conf.valor === 'string' ? JSON.parse(conf.valor) : conf.valor;
      }
    } catch (e) {
      console.warn('[Prisma Clientes Banner Error]:', e.message);
    }
  }

  return null;
}

export async function saveClientesToDB(configData) {
  const valor = toJSON(configData);

  if (isMySQLConfigured()) {
    try {
      await queryMySQL(`
        INSERT INTO config (clave, valor)
        VALUES (?, ?)
        ON DUPLICATE KEY UPDATE valor = VALUES(valor);
      `, ['clientes_banner', valor]);
      return { ok: true, config: configData };
    } catch (e) {
      console.error('[MySQL Save Clientes Banner Error]:', e.message);
    }
  }

  if (isPrismaConfigured()) {
    try {
      await prisma.config.upsert({
        where: { clave: 'clientes_banner' },
        create: { clave: 'clientes_banner', valor: configData },
        update: { valor: configData }
      });
      return { ok: true, config: configData };
    } catch (e) {
      console.error('[Prisma Save Clientes Banner Error]:', e.message);
    }
  }

  return { ok: false, error: 'No database connected' };
}
