'use client';
import { motion } from 'framer-motion';

export default function NavbarV3() {
  return (
    <nav className="fixed top-6 w-full z-50 px-4 md:px-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="w-full bg-white/70 backdrop-blur-2xl border border-white/60 rounded-[2rem] p-4 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.03)]">
          <div className="text-carbon font-black text-xl px-4 tracking-tight">
            TRÉBOL<span className="text-trebol">.</span>
          </div>
          <div className="hidden md:flex gap-2">
            <a href="#servicios" className="px-6 py-2 rounded-full hover:bg-carbon/5 text-carbon text-sm font-medium transition-colors">Servicios</a>
            <a href="#proceso" className="px-6 py-2 rounded-full hover:bg-carbon/5 text-carbon text-sm font-medium transition-colors">Proceso</a>
            <a href="#nosotros" className="px-6 py-2 rounded-full hover:bg-carbon/5 text-carbon text-sm font-medium transition-colors">Filosofía</a>
          </div>
          <a href="#contacto" className="px-6 py-2 rounded-full bg-carbon text-hueso text-sm font-bold hover:bg-trebol transition-colors">
            Contactar
          </a>
        </div>
      </div>
    </nav>
  );
}
