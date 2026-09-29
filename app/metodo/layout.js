import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Método Trébol | Cómo Trabajamos en 4 Fases',
  description:
    'Conoce nuestro método de trabajo: diagnóstico, estrategia, implementación y optimización. Un proceso probada que convierte proyectos digitales en resultados medibles.',
  path: '/metodo',
});

export default function MetodoLayout({ children }) {
  return <>{children}</>;
}
