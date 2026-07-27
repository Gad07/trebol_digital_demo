import { Hero, Services, Process, WhyUs, Contact } from '../components/DynamicSections';
import FloatingNav from '../components/FloatingNav';

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
      <FloatingNav current="v1" />
    </>
  );
}


