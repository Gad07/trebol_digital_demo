import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Panel de Administración',
  description: 'Área privada de administración.',
  path: '/admin',
  noindex: true,
});

export default function AdminLayout({ children }) {
  return <>{children}</>;
}
