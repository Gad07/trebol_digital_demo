import { Hero, Services, CanalesScrollytelling, Process, WhyUs, Contact } from '../components/DynamicSections';
import ClientLogosBanner from '../components/ClientLogosBanner';

export const metadata = {
  title: "Trébol Digital | Estrategia Digital, IA y Desarrollo Organizacional en México",
  description:
    "Empresa de estrategia digital integral, inteligencia artificial y desarrollo organizacional para empresas en desarrollo. Toluca, CDMX, Santa Fe y online en todo México.",
  alternates: {
    canonical: "https://treboldigital.com",
  },
  openGraph: {
    title: "Trébol Digital | Estrategia Digital, IA y Desarrollo Organizacional en México",
    description:
      "Empresa de estrategia digital integral, inteligencia artificial y desarrollo organizacional para empresas en desarrollo. Toluca, CDMX, Santa Fe y online en todo México.",
    url: "https://treboldigital.com",
    siteName: "Trébol Digital",
  },
};

export default function Home() {
  return (
    <main id="main-content" className="relative z-10">
      <div id="section-hero">
        <Hero />
      </div>
      <div id="section-services">
        <Services />
      </div>
      <div id="section-scrollytelling">
        <CanalesScrollytelling />
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


