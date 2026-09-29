import { buildMetadata } from '@/lib/seo';
import { getTarjetaBySlugFromDB } from '@/lib/db';

export const revalidate = 300;

// /directorio/[slug] re-renders /tarjeta/[slug], so both URLs expose the same
// content. Canonicalising here consolidates them into a single indexable page.
export async function generateMetadata({ params }) {
  const { slug } = await params;

  let tarjeta = null;
  try {
    tarjeta = await getTarjetaBySlugFromDB(slug);
  } catch (err) {
    console.warn('[Directorio Metadata Error]:', err.message);
  }

  if (!tarjeta) {
    return buildMetadata({
      title: 'Perfil no encontrado | Trébol Digital',
      description: 'El perfil solicitado no existe o fue removido.',
      path: `/tarjeta/${slug}`,
      noindex: true,
    });
  }

  const nombre = [tarjeta.firstName, tarjeta.lastName].filter(Boolean).join(' ').trim();
  const rol = tarjeta.title || 'Especialista';

  return buildMetadata({
    title: `${nombre || 'Perfil'} | ${rol} en Trébol Digital`,
    description:
      tarjeta.bio ||
      `${rol}${tarjeta.company ? ` en ${tarjeta.company}` : ''} de Trébol Digital. ${nombre ? `Conoce su perfil, experiencia y publicaciones.` : ''}`.trim(),
    path: `/tarjeta/${slug}`,
    image: tarjeta.photoUrl
      ? { url: tarjeta.photoUrl, width: 800, height: 1000, alt: nombre }
      : undefined,
  });
}

export default function DirectorioSlugLayout({ children }) {
  return <>{children}</>;
}
