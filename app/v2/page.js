import NavbarV2 from '../../components/v2/NavbarV2';
import HeroV2 from '../../components/v2/HeroV2';
import ServicesV2 from '../../components/v2/ServicesV2';
import WhyUsV2 from '../../components/v2/WhyUsV2';
import ContactV2 from '../../components/v2/ContactV2';
import FloatingNav from '../../components/FloatingNav';

export default function PageV2() {
  return (
    <main className="bg-black min-h-screen text-white font-sans selection:bg-trebol selection:text-white">
      <NavbarV2 />
      <HeroV2 />
      <ServicesV2 />
      
      {/* Process V2: Dark Vertical Timeline */}
      <section id="proceso" className="w-full py-32 px-6 bg-black relative">
        <div className="max-w-[800px] mx-auto relative z-10 border-l border-white/10 pl-10 md:pl-20">
          <div className="mb-24">
            <h2 className="text-5xl font-black text-white tracking-tighter">Proceso.</h2>
          </div>
          
          {[
            { num: '01', title: 'Descubrimiento', desc: 'Análisis profundo de tus sistemas y objetivos.' },
            { num: '02', title: 'Arquitectura', desc: 'Diseño del ecosistema y selección de herramientas.' },
            { num: '03', title: 'Despliegue', desc: 'Implementación ágil sin interrumpir tu operación.' },
            { num: '04', title: 'Optimización', desc: 'Monitoreo en tiempo real y ajustes paramétricos.' },
          ].map((step, i) => (
            <div key={i} className="relative mb-20 last:mb-0 group">
              {/* Dot */}
              <div className="absolute -left-[45px] md:-left-[85px] w-5 h-5 bg-black border-2 border-white/20 rounded-full group-hover:border-trebol group-hover:bg-trebol transition-colors duration-300"></div>
              <span className="text-trebol font-mono text-sm mb-2 block">{step.num}</span>
              <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-white/50 text-lg font-light leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <WhyUsV2 />
      <ContactV2 />

      {/* Footer V2 */}
      <footer className="w-full py-16 px-6 bg-black border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-white/40 max-w-[1200px] mx-auto">
        <p>© 2026 Trébol Digital. Todos los derechos reservados.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-trebol transition-colors">Privacidad</a>
          <a href="#" className="hover:text-trebol transition-colors">Términos</a>
        </div>
      </footer>

      <FloatingNav current="v2" />
    </main>
  );
}
