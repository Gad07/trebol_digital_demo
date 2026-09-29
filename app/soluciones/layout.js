import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Soluciones Digitales para Empresas | Marketing, IA y Web',
  description:
    'Cuatro soluciones para transformar tu empresa: Marketing Estratégico, Inteligencia Artificial aplicada, Desarrollo Web de alto rendimiento y Desarrollo Organizacional.',
  path: '/soluciones',
});

export default function SolucionesLayout({ children }) {
  return <>{children}</>;
}
