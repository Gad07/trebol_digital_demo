const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://treboldigital.com.mx').replace(/\/$/, '');

export const metadata = {
  title: "Desarrollo Organizacional | Alineación de Equipos",
  description:
    "Alineamos tus equipos de Ventas, Marketing y Operaciones para eliminar fricciones y escalar tu empresa con procesos claros y autonomía.",
  alternates: {
    canonical: `${SITE_URL}/soluciones/desarrollo-organizacional`,
  },
  openGraph: {
    title: "Desarrollo Organizacional | Alineación de Equipos | Trébol Digital",
    description:
      "Alineamos tus equipos de Ventas, Marketing y Operaciones para eliminar fricciones y escalar tu empresa con procesos claros y autonomía.",
    url: `${SITE_URL}/soluciones/desarrollo-organizacional`,
    siteName: "Trébol Digital",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function DesarrolloOrganizacionalLayout({ children }) {
  return <>{children}</>;
}
