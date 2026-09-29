import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Agenda tu Cita | Diagnóstico Estratégico Gratuito',
  description:
    'Reserva una sesión de diagnóstico estratégica gratuita con nuestros especialistas. Definimos juntos tus retos y la ruta digital de tu empresa.',
  path: '/agenda',
});

export default function AgendaLayout({ children }) {
  return <>{children}</>;
}
