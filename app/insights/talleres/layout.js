import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Talleres y Capacitaciones | IA y Cultura Organizacional',
  description:
    'Programas de capacitación in-company y talleres sobre inteligencia artificial aplicada, automatización de procesos y cultura empresarial.',
  path: '/insights/talleres',
});

export default function TalleresLayout({ children }) {
  return <>{children}</>;
}
