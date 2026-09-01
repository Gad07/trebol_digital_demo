const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://treboldigital.com.mx').replace(/\/$/, '');

export const metadata = {
  title: "Marketing Digital Estratégico para Empresas en México",
  description:
    "Estrategia digital de captación, gestión de redes sociales, pauta publicitaria rentable y SEO local para PYMEs en Toluca, CDMX y México.",
  keywords: [
    "marketing digital para empresas",
    "estrategia de marketing digital",
    "gestión de redes sociales",
    "generación de leads",
    "captación de clientes",
    "implementación de CRM",
    "WhatsApp Business para empresas",
    "automatización de marketing",
    "seguimiento de leads",
    "estrategia de contenidos",
    "capacitación de equipos de marketing",
    "Trébol Digital"
  ],
  alternates: {
    canonical: `${SITE_URL}/soluciones/marketing-estrategico`,
  },
  openGraph: {
    title: "Marketing Digital Estratégico para Empresas en México | Trébol Digital",
    description:
      "Estrategia digital de captación, gestión de redes sociales, pauta publicitaria rentable y SEO local para PYMEs en Toluca, CDMX y México.",
    url: `${SITE_URL}/soluciones/marketing-estrategico`,
    siteName: "Trébol Digital",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function MarketingEstrategicoLayout({ children }) {
  return <>{children}</>;
}
