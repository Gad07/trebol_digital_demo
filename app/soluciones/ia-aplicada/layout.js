const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://treboldigital.com.mx').replace(/\/$/, '');

export const metadata = {
  title: "IA Aplicada a Negocios | Automatización & Agentes IA",
  description:
    "Implementamos agentes conversacionales 24/7, automatización de procesos operativos y consultoría de IA práctica para empresas en CDMX y México.",
  alternates: {
    canonical: `${SITE_URL}/soluciones/ia-aplicada`,
  },
  openGraph: {
    title: "IA Aplicada a Negocios | Automatización & Agentes IA | Trébol Digital",
    description:
      "Implementamos agentes conversacionales 24/7, automatización de procesos operativos y consultoría de IA práctica para empresas en CDMX y México.",
    url: `${SITE_URL}/soluciones/ia-aplicada`,
    siteName: "Trébol Digital",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function IAAplicadaLayout({ children }) {
  return <>{children}</>;
}
