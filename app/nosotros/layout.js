import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Nosotros | Equipo y Filosofía de Trébol Digital',
  description:
    'Conoce al equipo multidisciplinario de Trébol Digital y nuestra filosofía: autonomía, claridad, confianza y respeto para transformar empresas y personas.',
  path: '/nosotros',
});

export default function NosotrosLayout({ children }) {
  return <>{children}</>;
}
