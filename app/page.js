import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import WhyUs from '../components/WhyUs';
import Contact from '../components/Contact';
import ClientLogosBanner from '../components/ClientLogosBanner';
import LazyCanalesScrollytelling from '../components/LazyCanalesScrollytelling';

import { SITE_URL } from '@/lib/seo';

export const metadata = {
  title: "Trébol Digital | Estrategia Digital, IA & Marketing",
  description:
    "Impulsamos empresas con Estrategia Digital, Inteligencia Artificial aplicada, Desarrollo Web y Cultura Organizacional en CDMX, Toluca y México. Agenda tu cita.",
  alternates: {
    canonical: SITE_URL,
    languages: {
      'es-MX': SITE_URL,
    },
  },
  openGraph: {
    title: "Trébol Digital | Estrategia Digital, IA & Marketing",
    description:
      "Transformamos empresas en marcas visibles y rentables con Inteligencia Artificial, Desarrollo Web y Estrategia Digital en México.",
    url: SITE_URL,
    siteName: "Trébol Digital",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Trébol Digital - Estrategia Digital, IA y Desarrollo Organizacional",
      },
      {
        url: "/images/TREBOL_01.png",
        width: 512,
        height: 512,
        alt: "Trébol Digital Logo",
      }
    ],
  },
};

export default function Home() {
  return (
    <main id="main-content" className="relative z-10">
      <div id="section-hero">
        <Hero />
      </div>
      <div id="section-services" className="relative z-10 bg-hueso">
        <Services />
      </div>
      <div id="section-scrollytelling">
        <LazyCanalesScrollytelling />
      </div>
      <div id="section-clientes-wrapper" className="relative z-10">
        <ClientLogosBanner />
      </div>
      <div id="section-process">
        <Process />
      </div>
      <div id="section-whyus">
        <WhyUs />
      </div>
      <div id="section-contact">
        <Contact />
      </div>
    </main>
  );
}


