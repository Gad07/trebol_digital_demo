import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Insights | Ideas, Guías y Recursos para tu Negocio',
  description:
    'Artículos, recursos descargables y talleres sobre marketing digital, inteligencia artificial y desarrollo organizacional para empresas mexicanas.',
  path: '/insights',
});

export default function InsightsLayout({ children }) {
  return <>{children}</>;
}
