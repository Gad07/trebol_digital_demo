import { Hero, Services, Process, WhyUs, Contact } from '../components/DynamicSections';

export default function Home() {
  return (
    <>
      <main id="main-content" className="relative z-10">
        <Hero />
        <Services />
        <Process />
        <WhyUs />
        <Contact />
      </main>
    </>
  );
}


