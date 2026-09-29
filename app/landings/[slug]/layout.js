import { buildMetadata } from '@/lib/seo';
import { getLandingsFromDB } from '@/lib/db';

export const revalidate = 300;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const path = `/landings/${slug}`;

  let landing = null;
  try {
    const landings = await getLandingsFromDB();
    landing = (landings || []).find((l) => l && l.slug === slug) || null;
  } catch (err) {
    console.warn('[Landing Metadata Error]:', err.message);
  }

  if (!landing) {
    return buildMetadata({
      title: 'Página no encontrada | Trébol Digital',
      description: 'La página solicitada no existe o fue removida.',
      path,
      noindex: true,
    });
  }

  const title = landing.metaTitle || landing.title || 'Trébol Digital';

  return buildMetadata({
    title,
    description:
      landing.metaDescription ||
      `Conoce la propuesta de Trébol Digital para ti. Agenda una cita sin compromiso.`,
    path,
  });
}

export default function LandingSlugLayout({ children }) {
  return <>{children}</>;
}
