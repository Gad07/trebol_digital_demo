import fs from 'fs';
import path from 'path';
import { isMySQLConfigured, queryMySQL } from './mysql.js';
import { prisma, isPrismaConfigured } from './prisma.js';
import { hashPassword } from './auth.js';

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

  return [];
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
let tarjetasSchemaChecked = false;
async function ensureTarjetasSchema() {
  if (tarjetasSchemaChecked) return;
  if (isMySQLConfigured()) {
    try {
      await queryMySQL(`ALTER TABLE tarjetas ADD COLUMN IF NOT EXISTS experiencia_badge VARCHAR(255)`);
      await queryMySQL(`ALTER TABLE tarjetas ADD COLUMN IF NOT EXISTS pilares_tags TEXT`);
      await queryMySQL(`ALTER TABLE tarjetas ADD COLUMN IF NOT EXISTS linkedin_url TEXT`);
      await queryMySQL(`ALTER TABLE tarjetas ADD COLUMN IF NOT EXISTS semblanza_p3 TEXT`);
      await queryMySQL(`ALTER TABLE tarjetas ADD COLUMN IF NOT EXISTS enfoque_destacado TEXT`);
      await queryMySQL(`ALTER TABLE tarjetas ADD COLUMN IF NOT EXISTS servicios LONGTEXT`);
      await queryMySQL(`ALTER TABLE tarjetas ADD COLUMN IF NOT EXISTS diferencial_titulo TEXT`);
      await queryMySQL(`ALTER TABLE tarjetas ADD COLUMN IF NOT EXISTS diferencial_formula TEXT`);
      await queryMySQL(`ALTER TABLE tarjetas ADD COLUMN IF NOT EXISTS cta_titulo TEXT`);
      await queryMySQL(`ALTER TABLE tarjetas ADD COLUMN IF NOT EXISTS cta_subtitulo TEXT`);
      await queryMySQL(`ALTER TABLE tarjetas ADD COLUMN IF NOT EXISTS portfolio_url VARCHAR(255) DEFAULT '/casos-de-exito'`);
      await queryMySQL(`ALTER TABLE tarjetas ADD COLUMN IF NOT EXISTS show_portfolio BOOLEAN DEFAULT true`);
      tarjetasSchemaChecked = true;
    } catch (e) {
      tarjetasSchemaChecked = true;
    }
  }
}

function mapTarjetaRow(r) {
  let pilares = [];
  if (Array.isArray(r.pilaresTags)) pilares = r.pilaresTags;
  else if (Array.isArray(r.pilares_tags)) pilares = r.pilares_tags;
  else if (typeof r.pilares_tags === 'string' && r.pilares_tags.trim().startsWith('[')) {
    try { pilares = JSON.parse(r.pilares_tags); } catch (e) { pilares = []; }
  } else if (typeof r.pilares_tags === 'string') {
    pilares = r.pilares_tags.split(',').map(s => s.trim()).filter(Boolean);
  }

  let servicios = [];
  if (Array.isArray(r.servicios)) servicios = r.servicios;
  else if (typeof r.servicios === 'string') {
    try { servicios = JSON.parse(r.servicios || '[]'); } catch (e) { servicios = []; }
  }

  const showPort = r.showPortfolio !== undefined 
    ? Boolean(r.showPortfolio) 
    : (r.show_portfolio !== undefined ? (Boolean(r.show_portfolio) && r.show_portfolio !== 0 && r.show_portfolio !== '0' && r.show_portfolio !== 'false') : true);

  return {
    id: r.id,
    slug: r.slug,
    firstName: r.first_name || r.firstName || '',
    lastName: r.last_name || r.lastName || '',
    title: r.title || '',
    company: r.company || 'TRÉBOL DIGITAL',
    bio: r.bio || '',
    experienciaBadge: r.experiencia_badge || r.experienciaBadge || '',
    pilaresTags: pilares,
    phone: r.phone || '',
    email: r.email || '',
    website: r.website || 'treboldigital.com.mx',
    websiteUrl: r.website_url || r.websiteUrl || 'https://treboldigital.com.mx',
    whatsappUrl: r.whatsapp_url || r.whatsappUrl || '',
    linkedinUrl: r.linkedin_url || r.linkedinUrl || '',
    photoUrl: r.photo_url || r.photoUrl || '',
    portfolioUrl: r.portfolio_url || r.portfolioUrl || '/casos-de-exito',
    showPortfolio: showPort,
    semblanzaP1: r.semblanza_p1 || r.semblanzaP1 || '',
    semblanzaP2: r.semblanza_p2 || r.semblanzaP2 || '',
    semblanzaP3: r.semblanza_p3 || r.semblanzaP3 || '',
    citaTexto: r.cita_texto || r.citaTexto || r.enfoque_destacado || r.enfoqueDestacado || '',
    enfoqueDestacado: r.enfoque_destacado || r.enfoqueDestacado || r.cita_texto || r.citaTexto || '',
    servicios: servicios,
    diferencialTitulo: r.diferencial_titulo || r.diferencialTitulo || '',
    diferencialFormula: r.diferencial_formula || r.diferencialFormula || '',
    ctaTitulo: r.cta_titulo || r.ctaTitulo || '',
    ctaSubtitulo: r.cta_subtitulo || r.ctaSubtitulo || '',
    status: r.status || 'published',
    createdAt: r.created_at || r.createdAt
  };
}

export async function getTarjetasFromDB() {
  if (isMySQLConfigured()) {
    try {
      await ensureTarjetasSchema();
      const tarjetas = await queryMySQL('SELECT * FROM tarjetas ORDER BY created_at DESC');
      if (tarjetas && tarjetas.length > 0) {
        return tarjetas.map(mapTarjetaRow);
      }
    } catch (e) {
      console.warn('[MySQL Tarjetas Error]:', e.message);
    }
  }

  if (isPrismaConfigured()) {
    try {
      const tarjetas = await prisma.tarjeta.findMany({ orderBy: { created_at: 'desc' } });
      if (tarjetas && tarjetas.length > 0) {
        return tarjetas.map(mapTarjetaRow);
      }
    } catch (e) {
      console.warn('[Prisma Tarjetas Error]:', e.message);
    }
  }

  // Fallback a tarjetas_db.json
  try {
    const jsonPath = path.join(process.cwd(), 'data', 'tarjetas_db.json');
    if (fs.existsSync(jsonPath)) {
      const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
      if (Array.isArray(data) && data.length > 0) {
        return data.map(mapTarjetaRow);
      }
    }
  } catch (e) {
    console.warn('[JSON Tarjetas Read Error]:', e.message);
  }

  return [];
}

export async function getTarjetaBySlugFromDB(slug) {
  if (isMySQLConfigured()) {
    try {
      await ensureTarjetasSchema();
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

  // Fallback a tarjetas_db.json
  try {
    const jsonPath = path.join(process.cwd(), 'data', 'tarjetas_db.json');
    if (fs.existsSync(jsonPath)) {
      const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
      if (Array.isArray(data)) {
        const found = data.find(t => t.slug === slug || t.id === slug);
        if (found) return mapTarjetaRow(found);
      }
    }
  } catch (e) {
    console.warn('[JSON Tarjeta Slug Read Error]:', e.message);
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
  const experienciaBadge = t.experienciaBadge || t.experiencia_badge || '';
  const pilaresTags = Array.isArray(t.pilaresTags) ? t.pilaresTags : (Array.isArray(t.pilares_tags) ? t.pilares_tags : (typeof t.pilaresTags === 'string' ? t.pilaresTags.split(',').map(s=>s.trim()) : []));
  const phone = t.phone || '';
  const email = t.email || '';
  const website = t.website || 'treboldigital.com.mx';
  const websiteUrl = t.websiteUrl || t.website_url || 'https://treboldigital.com.mx';
  const whatsappUrl = t.whatsappUrl || t.whatsapp_url || `https://wa.me/${phone.replace(/[^0-9]/g, '')}`;
  const linkedinUrl = t.linkedinUrl || t.linkedin_url || '';
  const photoUrl = t.photoUrl || t.photo_url || '';
  const portfolioUrl = t.portfolioUrl || t.portfolio_url || '/casos-de-exito';
  const showPortfolio = t.showPortfolio !== undefined 
    ? Boolean(t.showPortfolio) 
    : (t.show_portfolio !== undefined ? (Boolean(t.show_portfolio) && t.show_portfolio !== 0 && t.show_portfolio !== '0' && t.show_portfolio !== 'false') : true);
  const semblanzaP1 = t.semblanzaP1 || t.semblanza_p1 || '';
  const semblanzaP2 = t.semblanzaP2 || t.semblanza_p2 || '';
  const semblanzaP3 = t.semblanzaP3 || t.semblanza_p3 || '';
  const citaTexto = t.citaTexto || t.cita_texto || t.enfoqueDestacado || t.enfoque_destacado || '';
  const enfoqueDestacado = t.enfoqueDestacado || t.enfoque_destacado || citaTexto;
  const servicios = Array.isArray(t.servicios) ? t.servicios : [];
  const diferencialTitulo = t.diferencialTitulo || t.diferencial_titulo || '';
  const diferencialFormula = t.diferencialFormula || t.diferencial_formula || '';
  const ctaTitulo = t.ctaTitulo || t.cta_titulo || '';
  const ctaSubtitulo = t.ctaSubtitulo || t.cta_subtitulo || '';
  const status = t.status || 'published';

  let saved = false;

  if (isMySQLConfigured()) {
    try {
      await ensureTarjetasSchema();
      await queryMySQL(`
        INSERT INTO tarjetas (
          id, slug, first_name, last_name, title, company, bio, experiencia_badge, pilares_tags, phone, email,
          website, website_url, whatsapp_url, linkedin_url, photo_url, portfolio_url, show_portfolio,
          semblanza_p1, semblanza_p2, semblanza_p3, cita_texto, enfoque_destacado, servicios,
          diferencial_titulo, diferencial_formula, cta_titulo, cta_subtitulo, status
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
          slug = VALUES(slug),
          first_name = VALUES(first_name),
          last_name = VALUES(last_name),
          title = VALUES(title),
          company = VALUES(company),
          bio = VALUES(bio),
          experiencia_badge = VALUES(experiencia_badge),
          pilares_tags = VALUES(pilares_tags),
          phone = VALUES(phone),
          email = VALUES(email),
          website = VALUES(website),
          website_url = VALUES(website_url),
          whatsapp_url = VALUES(whatsapp_url),
          linkedin_url = VALUES(linkedin_url),
          photo_url = VALUES(photo_url),
          portfolio_url = VALUES(portfolio_url),
          show_portfolio = VALUES(show_portfolio),
          semblanza_p1 = VALUES(semblanza_p1),
          semblanza_p2 = VALUES(semblanza_p2),
          semblanza_p3 = VALUES(semblanza_p3),
          cita_texto = VALUES(cita_texto),
          enfoque_destacado = VALUES(enfoque_destacado),
          servicios = VALUES(servicios),
          diferencial_titulo = VALUES(diferencial_titulo),
          diferencial_formula = VALUES(diferencial_formula),
          cta_titulo = VALUES(cta_titulo),
          cta_subtitulo = VALUES(cta_subtitulo),
          status = VALUES(status);
      `, [
        id, slug, firstName, lastName, title, company, bio, experienciaBadge, toJSON(pilaresTags), phone, email,
        website, websiteUrl, whatsappUrl, linkedinUrl, photoUrl, portfolioUrl, showPortfolio ? 1 : 0,
        semblanzaP1, semblanzaP2, semblanzaP3, citaTexto, enfoqueDestacado, toJSON(servicios),
        diferencialTitulo, diferencialFormula, ctaTitulo, ctaSubtitulo, status
      ]);
      saved = true;
    } catch (e) {
      console.error('[MySQL Save Tarjeta Error]:', e.message);
    }
  }

  if (isPrismaConfigured() && !saved) {
    try {
      const data = {
        id, slug, first_name: firstName, last_name: lastName, title, company, bio, phone, email,
        website, website_url: websiteUrl, whatsapp_url: whatsappUrl, photo_url: photoUrl,
        semblanza_p1: semblanzaP1, semblanza_p2: semblanzaP2, cita_texto: citaTexto, status
      };
      await prisma.tarjeta.upsert({ where: { id }, create: data, update: data });
      saved = true;
    } catch (e) {
      console.error('[Prisma Save Tarjeta Error]:', e.message);
    }
  }

  // Sincronizar en data/tarjetas_db.json
  try {
    const jsonPath = path.join(process.cwd(), 'data', 'tarjetas_db.json');
    let currentList = [];
    if (fs.existsSync(jsonPath)) {
      currentList = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    }
    const idx = currentList.findIndex(item => item.id === id || item.slug === slug);
    const itemData = {
      id,
      slug,
      firstName,
      lastName,
      title,
      company,
      bio,
      experienciaBadge,
      pilaresTags,
      phone,
      email,
      website,
      websiteUrl,
      whatsappUrl,
      linkedinUrl,
      photoUrl,
      portfolioUrl,
      showPortfolio,
      semblanzaP1,
      semblanzaP2,
      semblanzaP3,
      citaTexto,
      enfoqueDestacado,
      servicios,
      diferencialTitulo,
      diferencialFormula,
      ctaTitulo,
      ctaSubtitulo,
      status
    };

    if (idx >= 0) {
      currentList[idx] = itemData;
    } else {
      currentList.unshift(itemData);
    }
    fs.writeFileSync(jsonPath, JSON.stringify(currentList, null, 2), 'utf8');
    saved = true;
  } catch (e) {
    console.error('[JSON Save Tarjeta Error]:', e.message);
  }

  return saved;
}

export async function deleteTarjetaFromDB(id) {
  let deleted = false;
  if (isMySQLConfigured()) {
    try {
      await queryMySQL('DELETE FROM tarjetas WHERE id = ? OR slug = ?', [id, id]);
      deleted = true;
    } catch (e) {
      console.error('[MySQL Delete Tarjeta Error]:', e.message);
    }
  }

  if (isPrismaConfigured() && !deleted) {
    try {
      await prisma.tarjeta.deleteMany({ where: { OR: [{ id: id }, { slug: id }] } });
      deleted = true;
    } catch (e) {
      console.error('[Prisma Delete Tarjeta Error]:', e.message);
    }
  }

  try {
    const jsonPath = path.join(process.cwd(), 'data', 'tarjetas_db.json');
    if (fs.existsSync(jsonPath)) {
      let currentList = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
      currentList = currentList.filter(item => item.id !== id && item.slug !== id);
      fs.writeFileSync(jsonPath, JSON.stringify(currentList, null, 2), 'utf8');
      deleted = true;
    }
  } catch (e) { }

  return deleted;
}

// ── CITAS / AGENDAMIENTOS CRM ──
export async function getCitasFromDB() {
  if (isMySQLConfigured()) {
    try {
      const citas = await queryMySQL('SELECT * FROM citas ORDER BY created_at DESC');
      if (citas && Array.isArray(citas) && citas.length > 0) {
        return citas.map(r => ({
          id: r.id,
          nombre: r.nombre,
          email: r.email,
          telefono: r.telefono,
          empresa: r.empresa,
          hostNombre: r.host_nombre,
          host_nombre: r.host_nombre,
          fecha: r.fecha,
          hora: r.hora,
          mensaje: r.mensaje,
          notas: r.notas,
          proximaReunion: r.proxima_reunion,
          proxima_reunion: r.proxima_reunion,
          status: r.status,
          createdAt: r.created_at,
          created_at: r.created_at
        }));
      }
    } catch (e) {
      console.warn('[MySQL Citas Error]:', e.message);
    }
  }

  if (isPrismaConfigured()) {
    try {
      const citas = await prisma.cita.findMany({ orderBy: { created_at: 'desc' } });
      if (citas && Array.isArray(citas) && citas.length > 0) {
        return citas.map(r => ({
          id: r.id,
          nombre: r.nombre,
          email: r.email,
          telefono: r.telefono,
          empresa: r.empresa,
          hostNombre: r.host_nombre,
          host_nombre: r.host_nombre,
          fecha: r.fecha,
          hora: r.hora,
          mensaje: r.mensaje,
          notas: r.notas,
          proximaReunion: r.proxima_reunion,
          proxima_reunion: r.proxima_reunion,
          status: r.status,
          createdAt: r.created_at,
          created_at: r.created_at
        }));
      }
    } catch (e) {
      console.warn('[Prisma Citas Error]:', e.message);
    }
  }

  // Fallback to JSON file if neither DB is available
  try {
    const citasPath = path.join(process.cwd(), 'data', 'citas_db.json');
    if (fs.existsSync(citasPath)) {
      const localCitas = JSON.parse(fs.readFileSync(citasPath, 'utf8'));
      return localCitas.map(r => ({
        ...r,
        hostNombre: r.hostNombre || r.host_nombre || 'Gadiel Palma',
        proximaReunion: r.proximaReunion || r.proxima_reunion || ''
      }));
    }
  } catch (e) { }

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

  let saved = false;

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
      saved = true;
    } catch (e) {
      console.error('[MySQL Save Cita Error]:', e.message);
    }
  }

  if (isPrismaConfigured() && !saved) {
    try {
      const data = { id, nombre, email, telefono, empresa, host_nombre: hostNombre, fecha, hora, mensaje, notas, proxima_reunion: proximaReunion, status };
      await prisma.cita.upsert({ where: { id }, create: data, update: data });
      saved = true;
    } catch (e) {
      console.error('[Prisma Save Cita Error]:', e.message);
    }
  }

  // Also sync to JSON file as fallback
  try {
    const citasPath = path.join(process.cwd(), 'data', 'citas_db.json');
    let currentCitas = [];
    if (fs.existsSync(citasPath)) {
      currentCitas = JSON.parse(fs.readFileSync(citasPath, 'utf8'));
    }
    const idx = currentCitas.findIndex(item => item.id === id);
    const itemData = {
      id,
      nombre,
      email,
      telefono,
      empresa,
      host_nombre: hostNombre,
      hostNombre: hostNombre,
      fecha,
      hora,
      mensaje,
      notas,
      proxima_reunion: proximaReunion,
      proximaReunion: proximaReunion,
      status,
      created_at: new Date().toISOString()
    };
    if (idx >= 0) {
      currentCitas[idx] = itemData;
    } else {
      currentCitas.unshift(itemData);
    }
    fs.writeFileSync(citasPath, JSON.stringify(currentCitas, null, 2), 'utf8');
    saved = true;
  } catch (e) {
    console.error('[JSON Save Cita Error]:', e.message);
  }

  // Webhook integration for external CRMs (HubSpot, Make, Zapier, n8n)
  const webhookUrl = process.env.CRM_WEBHOOK_URL || process.env.MAKE_WEBHOOK_URL || process.env.ZAPIER_WEBHOOK_URL || process.env.N8N_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'lead_cita_created',
          lead: {
            id,
            nombre,
            email,
            telefono,
            empresa,
            hostNombre,
            fecha,
            hora,
            mensaje,
            notas,
            status,
            createdAt: new Date().toISOString()
          }
        })
      }).catch(err => console.warn('[CRM Webhook Fetch Error]:', err.message));
    } catch (webhookErr) {
      console.warn('[CRM Webhook Error]:', webhookErr.message);
    }
  }

  return { ok: saved, id };
}

export async function updateCitaStatusInDB(id, updates) {
  const status = typeof updates === 'string' ? updates : updates.status;
  const notas = typeof updates === 'object' ? updates.notas : undefined;
  const proximaReunion = typeof updates === 'object' ? (updates.proximaReunion || updates.proxima_reunion) : undefined;
  const hostNombre = typeof updates === 'object' ? (updates.hostNombre || updates.host_nombre) : undefined;

  let updated = false;

  if (isMySQLConfigured()) {
    try {
      const fields = [];
      const values = [];
      if (status !== undefined) { fields.push('status = ?'); values.push(status); }
      if (notas !== undefined) { fields.push('notas = ?'); values.push(notas); }
      if (proximaReunion !== undefined) { fields.push('proxima_reunion = ?'); values.push(proximaReunion); }
      if (hostNombre !== undefined) { fields.push('host_nombre = ?'); values.push(hostNombre); }
      if (fields.length > 0) {
        values.push(id);
        await queryMySQL(`UPDATE citas SET ${fields.join(', ')} WHERE id = ?`, values);
        updated = true;
      }
    } catch (e) {
      console.error('[MySQL Update Cita Error]:', e.message);
    }
  }

  if (isPrismaConfigured() && !updated) {
    try {
      const patch = {};
      if (status !== undefined) patch.status = status;
      if (notas !== undefined) patch.notas = notas;
      if (proximaReunion !== undefined) patch.proxima_reunion = proximaReunion;
      if (hostNombre !== undefined) patch.host_nombre = hostNombre;
      await prisma.cita.update({ where: { id }, data: patch });
      updated = true;
    } catch (e) {
      console.error('[Prisma Update Cita Error]:', e.message);
    }
  }

  try {
    const citasPath = path.join(process.cwd(), 'data', 'citas_db.json');
    if (fs.existsSync(citasPath)) {
      let currentCitas = JSON.parse(fs.readFileSync(citasPath, 'utf8'));
      currentCitas = currentCitas.map(c => {
        if (c.id === id) {
          return {
            ...c,
            ...(status !== undefined && { status }),
            ...(notas !== undefined && { notas }),
            ...(proximaReunion !== undefined && { proxima_reunion: proximaReunion, proximaReunion }),
            ...(hostNombre !== undefined && { host_nombre: hostNombre, hostNombre })
          };
        }
        return c;
      });
      fs.writeFileSync(citasPath, JSON.stringify(currentCitas, null, 2), 'utf8');
      updated = true;
    }
  } catch (e) { }

  return updated;
}

export async function deleteCitaFromDB(id) {
  let deleted = false;
  if (isMySQLConfigured()) {
    try {
      await queryMySQL('DELETE FROM citas WHERE id = ?', [id]);
      deleted = true;
    } catch (e) {
      console.error('[MySQL Delete Cita Error]:', e.message);
    }
  }

  if (isPrismaConfigured() && !deleted) {
    try {
      await prisma.cita.delete({ where: { id } });
      deleted = true;
    } catch (e) {
      console.error('[Prisma Delete Cita Error]:', e.message);
    }
  }

  try {
    const citasPath = path.join(process.cwd(), 'data', 'citas_db.json');
    if (fs.existsSync(citasPath)) {
      let currentCitas = JSON.parse(fs.readFileSync(citasPath, 'utf8'));
      currentCitas = currentCitas.filter(c => c.id !== id);
      fs.writeFileSync(citasPath, JSON.stringify(currentCitas, null, 2), 'utf8');
      deleted = true;
    }
  } catch (e) { }

  return deleted;
}

// ── USUARIOS & RBAC ──
const DEFAULT_USERS = [
  {
    id: 'usr_superadmin',
    username: 'admin',
    password: 'pbkdf2:sha512:100000:c163953254f4e979db42de63e5903203:07586921ffdae4864e89db23b097bc168b3b596fae4f4b8929c64fd21d1e6b3e117227dc815e11ba12f8f1b041207b85d6fceb428ce825de0f682faec363e222',
    name: 'Gadiel Palma',
    email: 'contacto@treboldigital.com.mx',
    role: 'super_admin',
    permissions: ["manage_users", "edit_landings", "edit_blogs", "edit_casos", "edit_tarjetas", "manage_crm", "manage_popups"]
  },
  {
    id: 'usr_editor',
    username: 'editor',
    password: 'editor123',
    name: 'Sandra Cuevas',
    email: 'sandra@treboldigital.com.mx',
    role: 'editor_contenido',
    permissions: ["edit_landings", "edit_blogs", "edit_casos"]
  },
  {
    id: 'usr_ventas',
    username: 'ventas',
    password: 'ventas123',
    name: 'Agente CRM',
    email: 'ventas@treboldigital.com.mx',
    role: 'agente_crm',
    permissions: ["manage_crm", "edit_tarjetas"]
  }
];

export async function getUsuariosFromDB() {
  if (isMySQLConfigured()) {
    try {
      const usuarios = await queryMySQL('SELECT * FROM usuarios ORDER BY created_at DESC');
      if (usuarios && usuarios.length > 0) {
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
      }
    } catch (e) {
      console.warn('[MySQL Usuarios Error]:', e.message);
    }
  }

  if (isPrismaConfigured()) {
    try {
      const usuarios = await prisma.usuario.findMany({ orderBy: { created_at: 'desc' } });
      if (usuarios && usuarios.length > 0) {
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
      }
    } catch (e) {
      console.warn('[Prisma Usuarios Error]:', e.message);
    }
  }

  return DEFAULT_USERS;
}

export async function saveUsuarioToDB(u) {
  const id = u.id || `usr_${Date.now()}`;
  const username = u.username || `user_${Date.now()}`;

  let password = u.password;
  if (password && typeof password === 'string' && !password.startsWith('pbkdf2:')) {
    password = hashPassword(password);
  } else if (!password) {
    password = hashPassword('trebol2026!');
  }

  const name = u.name || username;
  const email = u.email || '';
  const role = u.role || 'editor_contenido';
  const permsArray = Array.isArray(u.permissions) ? u.permissions : [];
  const permissions = toJSON(permsArray);
  const sanitizedUser = { id, username, name, email, role, permissions: permsArray, createdAt: new Date() };

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
      return { ok: true, user: sanitizedUser };
    } catch (e) {
      console.error('[MySQL Save Usuario Error]:', e.message);
    }
  }

  if (isPrismaConfigured()) {
    try {
      const data = { id, username, password, name, email, role, permissions: permsArray };
      await prisma.usuario.upsert({ where: { id }, create: data, update: data });
      return { ok: true, user: sanitizedUser };
    } catch (e) {
      console.error('[Prisma Save Usuario Error]:', e.message);
    }
  }

  return { ok: true, user: sanitizedUser };
}

export async function deleteUsuarioFromDB(id) {
  if (isMySQLConfigured()) {
    try {
      await queryMySQL('DELETE FROM usuarios WHERE id = ? OR username = ?', [id, id]);
      return { ok: true };
    } catch (e) {
      console.error('[MySQL Delete Usuario Error]:', e.message);
    }
  }

  if (isPrismaConfigured()) {
    try {
      await prisma.usuario.deleteMany({ where: { OR: [{ id: id }, { username: id }] } });
      return { ok: true };
    } catch (e) {
      console.error('[Prisma Delete Usuario Error]:', e.message);
    }
  }

  return { ok: true };
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
let talleresSchemaChecked = false;
async function ensureTalleresSchema() {
  if (talleresSchemaChecked) return;
  if (isMySQLConfigured()) {
    try {
      await queryMySQL(`ALTER TABLE talleres ADD COLUMN IF NOT EXISTS reservar_url VARCHAR(255) DEFAULT '/agenda'`);
      talleresSchemaChecked = true;
    } catch (e) {
      try {
        await queryMySQL(`ALTER TABLE talleres ADD COLUMN reservar_url VARCHAR(255) DEFAULT '/agenda'`);
        talleresSchemaChecked = true;
      } catch (e2) {
        talleresSchemaChecked = true;
      }
    }
  }
}

export async function getTalleresFromDB() {
  if (isMySQLConfigured()) {
    try {
      await ensureTalleresSchema();
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
        reservarUrl: r.reservar_url || '/agenda',
        reservar_url: r.reservar_url || '/agenda',
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
        reservarUrl: r.reservar_url || '/agenda',
        reservar_url: r.reservar_url || '/agenda',
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
  const reservarUrl = t.reservarUrl || t.reservar_url || '/agenda';
  const temas = toJSON(t.temas || []);

  const newTaller = { id, titulo, tipo, modalidad, duracion, fecha, hora, precio, cupos, desc: descTexto, imagen, reservarUrl, reservar_url: reservarUrl, temas: t.temas || [] };

  if (isMySQLConfigured()) {
    try {
      await ensureTalleresSchema();
      await queryMySQL(`
        INSERT INTO talleres (id, titulo, tipo, modalidad, duracion, fecha, hora, precio, cupos, desc_texto, imagen, reservar_url, temas)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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
          reservar_url = VALUES(reservar_url),
          temas = VALUES(temas);
      `, [id, titulo, tipo, modalidad, duracion, fecha, hora, precio, cupos, descTexto, imagen, reservarUrl, temas]);
      return { ok: true, taller: newTaller };
    } catch (e) {
      console.error('[MySQL Save Taller Error]:', e.message);
    }
  }

  if (isPrismaConfigured()) {
    try {
      const data = { id, titulo, tipo, modalidad, duracion, fecha, hora, precio, cupos, desc_texto: descTexto, imagen, reservar_url: reservarUrl, temas: t.temas || [] };
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
