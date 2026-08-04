import { Hero, Services, CanalesScrollytelling, Process, WhyUs, Contact } from '../components/DynamicSections';

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


