import { buildMetadata } from '@/lib/seo';

// /tarjeta re-renders the directorio page verbatim, so it is a duplicate URL.
// Canonicalising it to /directorio keeps a single indexable version of that content.
export const metadata = buildMetadata({
  title: 'Directorio de Expertos | Equipo Trébol Digital',
  description:
    'Conoce a los especialistas de Trébol Digital: perfiles, especialidades y publicaciones de nuestro equipo.',
  path: '/directorio',
});

export default function TarjetaLayout({ children }) {
  return <>{children}</>;
}
