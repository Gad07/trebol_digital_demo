import { Navbar, Hero, Services, Process, WhyUs, Contact, Footer } from '../components/DynamicSections';
import FloatingNav from '../components/FloatingNav';

export default function Home() {
  return (
    <>

      <Navbar />
      <main id="main-content" className="relative z-10">
        <Hero />
        <Services />
        <Process />
        <WhyUs />
        <Contact />
      </main>

      {/* Footer Editorial */}
      <footer className="w-full bg-carbon text-hueso py-24 px-6 md:px-12 mt-20 rounded-t-[3rem]">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="flex flex-col gap-6">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">Trébol Digital.</h2>
            <p className="text-xl md:text-2xl text-white/70 font-light">Tenemos la suerte de encontrarnos.</p>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-4 text-white/60 text-lg font-light">
            <a href="#servicios" className="hover:text-trebol transition-colors duration-300">Servicios</a>
            <a href="#nosotros" className="hover:text-trebol transition-colors duration-300">Nosotros</a>
            <a href="#contacto" className="hover:text-trebol transition-colors duration-300">Contacto</a>
          </div>
        </div>
        
        <div className="max-w-[1400px] mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <p>© 2026 Trébol Digital. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-trebol transition-colors duration-300">Política de Privacidad</a>
            <a href="#" className="hover:text-trebol transition-colors duration-300">Términos de Servicio</a>
          </div>
        </div>
      </footer>
      <FloatingNav current="v1" />
    </>
  );
}
