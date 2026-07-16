import NavbarV3 from '../../components/v3/NavbarV3';
import ProcessV3 from '../../components/v3/ProcessV3';
import WhyUsV3 from '../../components/v3/WhyUsV3';
import ContactV3 from '../../components/v3/ContactV3';
import FloatingNav from '../../components/FloatingNav';
import { motion } from 'framer-motion';

export default function PageV3() {
  return (
    <main className="relative min-h-screen font-sans selection:bg-trebol selection:text-white bg-gradient-to-br from-hueso via-[#eef2eb] to-[#e0e8dc] overflow-x-hidden pb-32">
      <NavbarV3 />
      
      {/* Dynamic Spatial Background */}
      <div className="fixed top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-trebol/20 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-multiply"></div>
      <div className="fixed top-[20%] right-[-20%] w-[50vw] h-[50vw] bg-blue-400/10 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] left-[20%] w-[70vw] h-[70vw] bg-white/60 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-8 pt-32 pb-16 min-h-screen flex flex-col justify-center">
        
        {/* Bento Grid Layout (Hero & Services) */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 md:gap-6 h-auto md:h-[80vh]">
          
          {/* Main Hero Box */}
          <div className="md:col-span-2 md:row-span-2 bg-white/10 backdrop-blur-[80px] border-t border-l border-white/80 border-b border-r border-white/30 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.08),inset_0_1px_20px_rgba(255,255,255,0.4)] p-10 md:p-14 flex flex-col justify-between group overflow-hidden relative animate-fade-in-up hover:-translate-y-2 hover:scale-[1.01] transition-all duration-500">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-trebol to-trebol/30 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-carbon/5 text-carbon text-xs font-bold uppercase tracking-widest mb-6">Trébol Digital</span>
              <h1 className="text-5xl md:text-7xl font-black text-carbon tracking-tighter leading-[0.9] mb-6">
                Crece <br/> Sin Ruido.
              </h1>
              <p className="text-xl text-carbon/60 font-light max-w-sm">Ecosistemas digitales estructurados para escalar y automatizar procesos.</p>
            </div>
            <a href="#contacto" className="mt-12 self-start px-8 py-4 rounded-full bg-carbon text-hueso font-bold text-sm hover:bg-trebol transition-colors duration-300">
              Iniciar Proyecto
            </a>
          </div>

          {/* Service 1 Box */}
          <div className="bg-white/10 backdrop-blur-[80px] border-t border-l border-white/80 border-b border-r border-white/30 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.08),inset_0_1px_20px_rgba(255,255,255,0.4)] p-8 flex flex-col justify-between hover:bg-white/40 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-bold text-carbon">Desarrollo High-End</h3>
            <p className="text-carbon/60 text-sm mt-4">Interfaces minimalistas de altísimo rendimiento.</p>
          </div>

          {/* Service 2 Box */}
          <div className="bg-carbon/90 backdrop-blur-3xl border-t border-l border-white/20 border-b border-r border-black/50 text-hueso rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.2),inset_0_1px_10px_rgba(255,255,255,0.1)] p-8 flex flex-col justify-between group overflow-hidden relative animate-fade-in-up hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-trebol/20 blur-3xl rounded-full"></div>
            <h3 className="text-2xl font-bold text-white relative z-10">Automatización</h3>
            <p className="text-white/60 text-sm mt-4 relative z-10">Inteligencia Artificial aplicada a tus flujos.</p>
          </div>

          {/* Metric / Stat Box */}
          <div className="md:col-span-2 bg-trebol/90 backdrop-blur-3xl border-t border-l border-white/40 border-b border-r border-black/10 text-white rounded-[3rem] p-10 flex flex-col md:flex-row items-center justify-between shadow-[0_30px_60px_rgba(92,158,49,0.3),inset_0_1px_20px_rgba(255,255,255,0.2)] animate-fade-in-up hover:-translate-y-2 hover:scale-[1.01] transition-all duration-500" style={{ animationDelay: '0.3s' }}>
            <div>
              <h3 className="text-4xl font-black mb-2">Metodología Data-Driven</h3>
              <p className="text-white/80">No suponemos. Medimos y escalamos lo que funciona.</p>
            </div>
            <div className="text-7xl font-black opacity-30 mt-6 md:mt-0">04</div>
          </div>

          {/* Contact CTA Box */}
          <div className="md:col-span-2 bg-white/30 backdrop-blur-3xl border-t border-l border-white/80 border-b border-r border-white/30 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.08),inset_0_1px_20px_rgba(255,255,255,0.4)] p-10 flex items-center justify-center hover:bg-white/50 hover:border-trebol/50 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-4xl font-extrabold text-carbon text-center">
              ¿Listo para <span className="text-trebol">evolucionar?</span>
            </h2>
          </div>

        </div>
      </div>

      <div className="relative z-10">
        <ProcessV3 />
        <WhyUsV3 />
        <ContactV3 />
        
        {/* Footer V3 */}
        <footer className="max-w-[1600px] mx-auto px-8 py-12 mt-16 flex justify-between items-center text-carbon/40 text-sm border-t border-carbon/5">
          <p>© 2026 Trébol Digital. Todos los derechos reservados.</p>
        </footer>
      </div>

      <FloatingNav current="v3" />
    </main>
  );
}
