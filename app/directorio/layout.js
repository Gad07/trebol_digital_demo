import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Directorio de Expertos | Equipo Trébol Digital',
  description:
    'Conoce a los especialistas de Trébol Digital: perfiles, especialidades y publicaciones de nuestro equipo de marketing, IA, desarrollo web y organización.',
  path: '/directorio',
});

export default function DirectorioLayout({ children }) {
  return <>{children}</>;
}
