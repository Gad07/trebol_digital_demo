import { prisma, isPrismaConfigured } from './prisma.js';
import { isSupabaseConfigured, getSupabaseClient } from './supabase.js';

import defaultBlogs from '../data/blogs_db.json';

// ── BLOGS ──
export async function getBlogsFromDB() {
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

  if (isSupabaseConfigured()) {
    try {
      const supabase = getSupabaseClient();
      const { data, error } = await supabase.from('blogs').select('*').order('created_at', { ascending: false });
      if (!error && data && data.length > 0) {
        return data.map(r => {
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
      console.warn('[Supabase Blogs Error]:', e.message);
    }
  }

  return defaultBlogs || [];
}

export async function saveBlogsToDB(blogs) {
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

  if (isSupabaseConfigured()) {
    try {
      const supabase = getSupabaseClient();
      const rowsToUpsert = blogs.map(b => ({
        id: b.id || String(Date.now()),
        slug: b.slug || '',
        titulo: b.titulo || '',
        categoria: b.categoria || '',
        subtitulo: b.subtitulo || '',
        resumen: b.resumen || '',
        autor: b.autor || 'Trébol Digital',
        fecha: b.fecha || new Date().toISOString(),
        tiempo_lectura: b.tiempoLectura || b.tiempo_lectura || '5 min',
        imagen_url: b.imagenUrl || b.imagen_url || '',
        destacado: Boolean(b.destacado),
        contenido: b.contenido || [],
        status: b.status || 'published'
      }));
      await supabase.from('blogs').upsert(rowsToUpsert, { onConflict: 'id' });
      return true;
    } catch (e) {
      console.error('[Supabase Save Blogs Exception]:', e.message);
    }
  }

  return false;
}

// ── CASOS DE ÉXITO ──
export async function getCasosFromDB() {
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

  if (isSupabaseConfigured()) {
    try {
      const supabase = getSupabaseClient();
      const { data, error } = await supabase.from('casos').select('*').order('created_at', { ascending: false });
      if (!error && data) {
        return data.map(r => ({
          ...r,
          imagenUrl: r.imagen_url
        }));
      }
    } catch (e) {
      console.warn('[Supabase Casos Error]:', e.message);
    }
  }

  return [];
}

export async function saveCasosToDB(casos) {
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

  if (isSupabaseConfigured()) {
    try {
      const supabase = getSupabaseClient();
      const rowsToUpsert = casos.map(c => ({
        id: c.id || String(Date.now()),
        slug: c.slug || '',
        titulo: c.titulo || '',
        categoria: c.categoria || '',
        cliente: c.cliente || '',
        resultado: c.resultado || '',
        imagen_url: c.imagenUrl || c.imagen_url || '',
        descripcion: c.descripcion || '',
        status: c.status || 'published'
      }));
      await supabase.from('casos').upsert(rowsToUpsert, { onConflict: 'id' });
      return true;
    } catch (e) {
      console.error('[Supabase Save Casos Error]:', e.message);
    }
  }

  return false;
}

// ── TESTIMONIOS ──
export async function getTestimoniosFromDB() {
  let list = [];
  if (isPrismaConfigured()) {
    try {
      list = await prisma.testimonio.findMany({ orderBy: { created_at: 'desc' } });
    } catch (e) {
      console.warn('[Prisma Testimonios Error]:', e.message);
    }
  } else if (isSupabaseConfigured()) {
    try {
      const supabase = getSupabaseClient();
      const { data, error } = await supabase.from('testimonios').select('*').order('created_at', { ascending: false });
      if (!error && data) list = data;
    } catch (e) {
      console.warn('[Supabase Testimonios Error]:', e.message);
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

  if (isSupabaseConfigured()) {
    try {
      const supabase = getSupabaseClient();
      const rowsToUpsert = testimonios.map(t => ({
        id: String(t.id || Date.now()),
        nombre: t.nombre || t.cliente || t.name || 'Cliente Trébol',
        cargo: t.cargo || t.puesto || t.role || '',
        empresa: t.empresa || t.company || '',
        texto: t.texto || t.quote || t.testimonio || t.contenido || t.descripcion || 'Excelente experiencia de trabajo con Trébol Digital.',
        avatar: t.avatar || t.clienteImg || t.imagen_url || t.imagenUrl || '',
        rating: Number(t.rating) || 5,
        status: t.status || 'published'
      }));
      const { data, error } = await supabase.from('testimonios').upsert(rowsToUpsert, { onConflict: 'id' });
      if (error) {
        console.error('[Supabase Save Testimonios Error]:', error);
      } else {
        saved = true;
      }
    } catch (e) {
      console.error('[Supabase Save Testimonios Exception]:', e.message);
    }
  }

  if (isPrismaConfigured()) {
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

  if (isSupabaseConfigured()) {
    try {
      const supabase = getSupabaseClient();
      const { data, error } = await supabase.from('landings').select('*').order('created_at', { ascending: false });
      if (!error && data) {
        return data.map(r => ({
          ...r,
          themeStyle: r.theme_style,
          metaTitle: r.meta_title,
          metaDescription: r.meta_description,
          sections: typeof r.sections === 'string' ? JSON.parse(r.sections || '[]') : (r.sections || [])
        }));
      }
    } catch (e) {
      console.warn('[Supabase Landings Error]:', e.message);
    }
  }

  return [];
}

export async function saveLandingsToDB(landings) {
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

  if (isSupabaseConfigured()) {
    try {
      const supabase = getSupabaseClient();
      const rowsToUpsert = landings.map(l => ({
        id: l.id || String(Date.now()),
        slug: l.slug || '',
        title: l.title || '',
        theme_style: l.themeStyle || l.theme_style || 'v2',
        status: l.status || 'published',
        meta_title: l.metaTitle || l.meta_title || '',
        meta_description: l.metaDescription || l.meta_description || '',
        sections: l.sections || []
      }));
      await supabase.from('landings').upsert(rowsToUpsert, { onConflict: 'id' });
      return true;
    } catch (e) {
      console.error('[Supabase Save Landings Error]:', e.message);
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
  if (isPrismaConfigured()) {
    try {
      const tarjetas = await prisma.tarjeta.findMany({ orderBy: { created_at: 'desc' } });
      return tarjetas.map(mapTarjetaRow);
    } catch (e) {
      console.warn('[Prisma Tarjetas Error]:', e.message);
    }
  }

  if (isSupabaseConfigured()) {
    try {
      const supabase = getSupabaseClient();
      const { data, error } = await supabase.from('tarjetas').select('*').order('created_at', { ascending: false });
      if (!error && data) {
        return data.map(mapTarjetaRow);
      }
    } catch (e) {
      console.warn('[Supabase Tarjetas Error]:', e.message);
    }
  }

  return [];
}

export async function getTarjetaBySlugFromDB(slug) {
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

  if (isSupabaseConfigured()) {
    try {
      const supabase = getSupabaseClient();
      const { data, error } = await supabase
        .from('tarjetas')
        .select('*')
        .or(`slug.eq.${slug},id.eq.${slug}`)
        .limit(1);
      if (!error && data && data.length > 0) {
        return mapTarjetaRow(data[0]);
      }
    } catch (e) {
      console.warn('[Supabase Tarjeta Slug Error]:', e.message);
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

  if (isSupabaseConfigured()) {
    try {
      const supabase = getSupabaseClient();
      await supabase.from('tarjetas').upsert({
        id, slug, first_name: firstName, last_name: lastName, title, company, bio, phone, email,
        website, website_url: websiteUrl, whatsapp_url: whatsappUrl, photo_url: photoUrl,
        semblanza_p1: semblanzaP1, semblanza_p2: semblanzaP2, cita_texto: citaTexto, status
      }, { onConflict: 'id' });
      return true;
    } catch (e) {
      console.error('[Supabase Save Tarjeta Error]:', e.message);
    }
  }

  return false;
}

export async function deleteTarjetaFromDB(id) {
  if (isPrismaConfigured()) {
    try {
      await prisma.tarjeta.deleteMany({ where: { OR: [{ id: id }, { slug: id }] } });
      return true;
    } catch (e) {
      console.error('[Prisma Delete Tarjeta Error]:', e.message);
    }
  }

  if (isSupabaseConfigured()) {
    try {
      const supabase = getSupabaseClient();
      await supabase.from('tarjetas').delete().or(`id.eq.${id},slug.eq.${id}`);
      return true;
    } catch (e) {
      console.error('[Supabase Delete Tarjeta Error]:', e.message);
    }
  }

  return false;
}

// ── CITAS / AGENDAMIENTOS ──
export async function getCitasFromDB() {
  if (isPrismaConfigured()) {
    try {
      const citas = await prisma.cita.findMany({ orderBy: { created_at: 'desc' } });
      return citas || [];
    } catch (e) {
      console.warn('[Prisma Citas Error]:', e.message);
    }
  }

  if (isSupabaseConfigured()) {
    try {
      const supabase = getSupabaseClient();
      const { data, error } = await supabase.from('citas').select('*').order('created_at', { ascending: false });
      if (!error && data) return data;
    } catch (e) {
      console.warn('[Supabase Citas Error]:', e.message);
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

  if (isPrismaConfigured()) {
    try {
      const data = { id, nombre, email, telefono, empresa, host_nombre: hostNombre, fecha, hora, mensaje, notas, proxima_reunion: proximaReunion, status };
      await prisma.cita.upsert({ where: { id }, create: data, update: data });
      return { ok: true, id };
    } catch (e) {
      console.error('[Prisma Save Cita Error]:', e.message);
    }
  }

  if (isSupabaseConfigured()) {
    try {
      const supabase = getSupabaseClient();
      await supabase.from('citas').upsert({
        id, nombre, email, telefono, empresa, host_nombre: hostNombre, fecha, hora, mensaje, notas, proxima_reunion: proximaReunion, status
      }, { onConflict: 'id' });
      return { ok: true, id };
    } catch (e) {
      console.error('[Supabase Save Cita Error]:', e.message);
    }
  }

  return { ok: false, error: 'No database connected' };
}

export async function updateCitaStatusInDB(id, updates) {
  const status = typeof updates === 'string' ? updates : updates.status;
  const notas = typeof updates === 'object' ? updates.notas : undefined;
  const proximaReunion = typeof updates === 'object' ? updates.proximaReunion : undefined;

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

  if (isSupabaseConfigured()) {
    try {
      const supabase = getSupabaseClient();
      const patch = {};
      if (status !== undefined) patch.status = status;
      if (notas !== undefined) patch.notas = notas;
      if (proximaReunion !== undefined) patch.proxima_reunion = proximaReunion;
      await supabase.from('citas').update(patch).eq('id', id);
      return true;
    } catch (e) {
      console.error('[Supabase Update Cita Error]:', e.message);
    }
  }

  return false;
}

export async function deleteCitaFromDB(id) {
  if (isPrismaConfigured()) {
    try {
      await prisma.cita.delete({ where: { id } });
      return true;
    } catch (e) {
      console.error('[Prisma Delete Cita Error]:', e.message);
    }
  }

  if (isSupabaseConfigured()) {
    try {
      const supabase = getSupabaseClient();
      await supabase.from('citas').delete().eq('id', id);
      return true;
    } catch (e) {
      console.error('[Supabase Delete Cita Error]:', e.message);
    }
  }

  return false;
}

// ── USUARIOS & RBAC ──
export async function getUsuariosFromDB() {
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

  if (isSupabaseConfigured()) {
    try {
      const supabase = getSupabaseClient();
      const { data, error } = await supabase.from('usuarios').select('*').order('created_at', { ascending: false });
      if (!error && data) {
        return data.map(r => ({
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
      console.warn('[Supabase Usuarios Error]:', e.message);
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
  const permissions = u.permissions || [];

  const newUser = { id, username, password, name, email, role, permissions, createdAt: new Date() };

  if (isPrismaConfigured()) {
    try {
      const data = { id, username, password, name, email, role, permissions };
      await prisma.usuario.upsert({ where: { id }, create: data, update: data });
      return { ok: true, user: newUser };
    } catch (e) {
      console.error('[Prisma Save Usuario Error]:', e.message);
    }
  }

  if (isSupabaseConfigured()) {
    try {
      const supabase = getSupabaseClient();
      await supabase.from('usuarios').upsert({
        id, username, password, name, email, role, permissions
      }, { onConflict: 'id' });
      return { ok: true, user: newUser };
    } catch (e) {
      console.error('[Supabase Save Usuario Error]:', e.message);
    }
  }

  return { ok: false, error: 'No database connected' };
}

export async function deleteUsuarioFromDB(id) {
  if (isPrismaConfigured()) {
    try {
      await prisma.usuario.deleteMany({ where: { OR: [{ id: id }, { username: id }] } });
      return true;
    } catch (e) {
      console.error('[Prisma Delete Usuario Error]:', e.message);
    }
  }

  if (isSupabaseConfigured()) {
    try {
      const supabase = getSupabaseClient();
      await supabase.from('usuarios').delete().or(`id.eq.${id},username.eq.${id}`);
      return true;
    } catch (e) {
      console.error('[Supabase Delete Usuario Error]:', e.message);
    }
  }

  return false;
}

// ── RECURSOS DESCARGABLES ──
export async function getRecursosFromDB() {
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

  if (isSupabaseConfigured()) {
    try {
      const supabase = getSupabaseClient();
      const { data, error } = await supabase.from('recursos').select('*').order('created_at', { ascending: false });
      if (!error && data) {
        return data.map(r => ({
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
    } catch (e) {
      console.warn('[Supabase Recursos Error]:', e.message);
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
  const downloadUrl = r.downloadUrl || r.download_url || '#';

  const newRecurso = { id, tipo, formato, descargas, titulo, desc: descTexto, tags: r.tags || [], downloadUrl };

  if (isPrismaConfigured()) {
    try {
      const data = { id, tipo, formato, descargas, titulo, desc_texto: descTexto, tags: r.tags || [], download_url: downloadUrl };
      await prisma.recurso.upsert({ where: { id }, create: data, update: data });
      return { ok: true, recurso: newRecurso };
    } catch (e) {
      console.error('[Prisma Save Recurso Error]:', e.message);
    }
  }

  if (isSupabaseConfigured()) {
    try {
      const supabase = getSupabaseClient();
      await supabase.from('recursos').upsert({
        id, tipo, formato, descargas, titulo, desc_texto: descTexto, tags: r.tags || [], download_url: downloadUrl
      }, { onConflict: 'id' });
      return { ok: true, recurso: newRecurso };
    } catch (e) {
      console.error('[Supabase Save Recurso Error]:', e.message);
    }
  }

  return { ok: false, error: 'No database connected' };
}

export async function deleteRecursoFromDB(id) {
  if (isPrismaConfigured()) {
    try {
      await prisma.recurso.delete({ where: { id } });
      return true;
    } catch (e) {
      console.error('[Prisma Delete Recurso Error]:', e.message);
    }
  }

  if (isSupabaseConfigured()) {
    try {
      const supabase = getSupabaseClient();
      await supabase.from('recursos').delete().eq('id', id);
      return true;
    } catch (e) {
      console.error('[Supabase Delete Recurso Error]:', e.message);
    }
  }

  return false;
}

// ── CURSOS & TALLERES ──
export async function getTalleresFromDB() {
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

  if (isSupabaseConfigured()) {
    try {
      const supabase = getSupabaseClient();
      const { data, error } = await supabase.from('talleres').select('*').order('created_at', { ascending: false });
      if (!error && data) {
        return data.map(r => ({
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
    } catch (e) {
      console.warn('[Supabase Talleres Error]:', e.message);
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

  const newTaller = { id, titulo, tipo, modalidad, duracion, fecha, hora, precio, cupos, desc: descTexto, imagen, temas: t.temas || [] };

  if (isPrismaConfigured()) {
    try {
      const data = { id, titulo, tipo, modalidad, duracion, fecha, hora, precio, cupos, desc_texto: descTexto, imagen, temas: t.temas || [] };
      await prisma.taller.upsert({ where: { id }, create: data, update: data });
      return { ok: true, taller: newTaller };
    } catch (e) {
      console.error('[Prisma Save Taller Error]:', e.message);
    }
  }

  if (isSupabaseConfigured()) {
    try {
      const supabase = getSupabaseClient();
      await supabase.from('talleres').upsert({
        id, titulo, tipo, modalidad, duracion, fecha, hora, precio, cupos, desc_texto: descTexto, imagen, temas: t.temas || []
      }, { onConflict: 'id' });
      return { ok: true, taller: newTaller };
    } catch (e) {
      console.error('[Supabase Save Taller Error]:', e.message);
    }
  }

  return { ok: false, error: 'No database connected' };
}

export async function deleteTallerFromDB(id) {
  if (isPrismaConfigured()) {
    try {
      await prisma.taller.delete({ where: { id } });
      return true;
    } catch (e) {
      console.error('[Prisma Delete Taller Error]:', e.message);
    }
  }

  if (isSupabaseConfigured()) {
    try {
      const supabase = getSupabaseClient();
      await supabase.from('talleres').delete().eq('id', id);
      return true;
    } catch (e) {
      console.error('[Supabase Delete Taller Error]:', e.message);
    }
  }

  return false;
}

// ── BANNER Y LOGOS DE CLIENTES ──
export async function getClientesFromDB() {
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

  if (isSupabaseConfigured()) {
    try {
      const supabase = getSupabaseClient();
      const { data, error } = await supabase.from('config').select('*').eq('clave', 'clientes_banner').limit(1);
      if (!error && data && data.length > 0 && data[0].valor) {
        return typeof data[0].valor === 'string' ? JSON.parse(data[0].valor) : data[0].valor;
      }
    } catch (e) {
      console.warn('[Supabase Clientes Banner Error]:', e.message);
    }
  }

  return null;
}

export async function saveClientesToDB(configData) {
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

  if (isSupabaseConfigured()) {
    try {
      const supabase = getSupabaseClient();
      await supabase.from('config').upsert({
        clave: 'clientes_banner',
        valor: configData
      }, { onConflict: 'clave' });
      return { ok: true, config: configData };
    } catch (e) {
      console.error('[Supabase Save Clientes Banner Error]:', e.message);
    }
  }

  return { ok: false, error: 'No database connected' };
}
