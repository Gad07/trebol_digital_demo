import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import WhyUs from '../components/WhyUs';
import Contact from '../components/Contact';
import ClientLogosBanner from '../components/ClientLogosBanner';
import LazyCanalesScrollytelling from '../components/LazyCanalesScrollytelling';

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


