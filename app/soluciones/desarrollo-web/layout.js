const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://treboldigital.com.mx').replace(/\/$/, '');

export const metadata = {
  title: "Desarrollo Web Profesional | Next.js & SEO en México",
  description:
    "Sitios y aplicaciones web serverless en Next.js con carga instantánea, SEO técnico optimizado y panel autoadministrable en CDMX, Toluca y México.",
  alternates: {
    canonical: `${SITE_URL}/soluciones/desarrollo-web`,
  },
  openGraph: {
    title: "Desarrollo Web Profesional | Next.js & SEO | Trébol Digital",
    description:
      "Sitios y aplicaciones web serverless en Next.js con carga instantánea, SEO técnico optimizado y panel autoadministrable en CDMX, Toluca y México.",
    url: `${SITE_URL}/soluciones/desarrollo-web`,
    siteName: "Trébol Digital",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function DesarrolloWebLayout({ children }) {
  return <>{children}</>;
}
