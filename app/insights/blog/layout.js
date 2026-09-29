import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Blog | Marketing, IA y Desarrollo Organizacional',
  description:
    'Artículos prácticos sobre estrategia de contenido, SEO local, automatización con IA y cultura empresarial. Sin tecnicismos, aplicable a tu negocio.',
  path: '/insights/blog',
});

export default function BlogLayout({ children }) {
  return <>{children}</>;
}
