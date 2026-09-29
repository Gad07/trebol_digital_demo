import { buildMetadata } from '@/lib/seo';
import { getTarjetaBySlugFromDB } from '@/lib/db';

export const revalidate = 300;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const path = `/tarjeta/${slug}`;

  let tarjeta = null;
  try {
    tarjeta = await getTarjetaBySlugFromDB(slug);
  } catch (err) {
    console.warn('[Tarjeta Metadata Error]:', err.message);
  }

  if (!tarjeta) {
    return buildMetadata({
      title: 'Perfil no encontrado | Trébol Digital',
      description: 'El perfil solicitado no existe o fue removido.',
      path,
      noindex: true,
    });
  }

  const nombre = [tarjeta.firstName, tarjeta.lastName].filter(Boolean).join(' ').trim();
  const rol = tarjeta.title || 'Especialista';
  const descripcion =
    tarjeta.bio ||
    `${rol}${tarjeta.company ? ` en ${tarjeta.company}` : ''} de Trébol Digital. ${nombre ? `Conoce su perfil, experiencia y publicaciones.` : ''}`.trim();

  return buildMetadata({
    title: `${nombre || 'Perfil'} | ${rol} en Trébol Digital`,
    description: descripcion,
    path,
    image: tarjeta.photoUrl
      ? { url: tarjeta.photoUrl, width: 800, height: 1000, alt: nombre }
      : undefined,
  });
}

export default function TarjetaSlugLayout({ children }) {
  return <>{children}</>;
}
