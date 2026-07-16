'use client';
import { motion } from 'framer-motion';

export default function NavbarV2() {
  return (
    <nav className="fixed top-0 w-full z-50 py-6 px-6">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-8 py-4 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        <div className="text-white font-black text-xl tracking-tighter">
          TRÉBOL<span className="text-trebol">.</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-white/70">
          <a href="#servicios" className="hover:text-trebol transition-colors">Capacidades</a>
          <a href="#proceso" className="hover:text-trebol transition-colors">Sistema</a>
          <a href="#nosotros" className="hover:text-trebol transition-colors">Filosofía</a>
        </div>
        <a href="#contacto" className="px-6 py-2 rounded-full bg-white/10 hover:bg-trebol text-white text-sm font-bold transition-colors">
          Contactar
        </a>
      </div>
    </nav>
  );
}
