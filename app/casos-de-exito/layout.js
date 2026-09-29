import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Casos de Éxito | Resultados Medibles de Clientes',
  description:
    'Historias reales de empresas que creceron con estrategia digital, IA aplicada y desarrollo web. Los números de cada proyecto, sin filtros.',
  path: '/casos-de-exito',
});

export default function CasosDeExitoLayout({ children }) {
  return <>{children}</>;
}
