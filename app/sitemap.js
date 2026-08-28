import { getBlogsFromDB, getLandingsFromDB, getCasosFromDB, getTarjetasFromDB } from '@/lib/db';

export default async function sitemap() {
  const baseUrl = 'https://treboldigital.com';
  const now = new Date().toISOString();

  // Páginas estáticas principales
  const staticPages = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/soluciones`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/casos-de-exito`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/agenda`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/politica-de-privacidad`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terminos-y-condiciones`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Rutas dinámicas de Blogs
  let blogUrls = [];
  try {
    const blogs = await getBlogsFromDB();
    blogUrls = (blogs || []).map(b => ({
      url: `${baseUrl}/insights/blog/${b.slug}`,
      lastModified: b.created_at ? new Date(b.created_at).toISOString() : now,
      changeFrequency: 'weekly',
      priority: 0.8,
    }));
  } catch (err) {
    console.error('[Sitemap Blogs Error]:', err.message);
  }

  // Rutas dinámicas de Landings
  let landingUrls = [];
  try {
    const landings = await getLandingsFromDB();
    landingUrls = (landings || []).map(l => ({
      url: `${baseUrl}/landings/${l.slug}`,
      lastModified: l.created_at ? new Date(l.created_at).toISOString() : now,
      changeFrequency: 'weekly',
      priority: 0.8,
    }));
  } catch (err) {
    console.error('[Sitemap Landings Error]:', err.message);
  }

  // Rutas dinámicas de Tarjetas Ejecutivas
  let tarjetaUrls = [];
  try {
    const tarjetas = await getTarjetasFromDB();
    tarjetaUrls = (tarjetas || []).map(t => ({
      url: `${baseUrl}/tarjeta/${t.slug}`,
      lastModified: t.created_at ? new Date(t.created_at).toISOString() : now,
      changeFrequency: 'monthly',
      priority: 0.7,
    }));
  } catch (err) {
    console.error('[Sitemap Tarjetas Error]:', err.message);
  }

  return [
    ...staticPages,
    ...blogUrls,
    ...landingUrls,
    ...tarjetaUrls,
  ];
}
