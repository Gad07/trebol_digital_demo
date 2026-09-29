import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Recursos Gratuitos | Plantillas y Guías Digitales',
  description:
    'Descarga plantillas, checklists y guías de marketing digital, automatización e IA para aplicar directamente en tu empresa.',
  path: '/insights/recursos',
});

export default function RecursosLayout({ children }) {
  return <>{children}</>;
}
