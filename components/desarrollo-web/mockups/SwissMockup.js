'use client';
import { ArrowRight } from 'lucide-react';

export function SwissMockup({ compact = false }) {
  return (
    <div className="w-full h-full min-h-[500px] rounded-3xl bg-[#08120F] text-white p-8 md:p-12 flex flex-col justify-between font-sans select-none relative overflow-hidden shadow-2xl border border-emerald-950/60">
      
      {/* High-End Architectural Photography with Emerald/Dark Atmosphere */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80" 
          alt="Valora Realty Luxury Real Estate"
          className="w-full h-full object-cover object-center opacity-80 scale-105"
        />
        {/* Overlay de degradado esmeralda / atmosférico profundo */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#040D0B]/95 via-[#081713]/60 to-transparent" />
      </div>

      {/* ── TOP HEADER / FLOATING GLASS NAV ── */}
      <header className="flex justify-between items-center relative z-1 w-full">
        {/* Brand Logo Real Estate */}
        <div className="flex items-center gap-2.5">
          <svg className="w-6 h-6 text-white fill-none stroke-current stroke-2" viewBox="0 0 24 24">
            <path d="M3 21h18M3 10l9-7 9 7v11H3V10z" />
            <path d="M9 14h6v7H9v-7z" />
          </svg>
          <span className="font-sans font-medium tracking-tight text-xl text-white">
            ValoraRealty
          </span>
        </div>

        {/* Floating Top-Right Glass Menu Capsule */}
        <div className="bg-white/20 backdrop-blur-xl border border-white/30 p-1.5 pl-6 rounded-2xl flex items-center gap-6 shadow-xl">
          <span className="text-[11px] font-mono font-bold tracking-widest text-white/90 hover:text-white cursor-pointer uppercase">
            PROPIEDADES
          </span>
          <span className="text-[11px] font-mono font-bold tracking-widest text-white/90 hover:text-white cursor-pointer uppercase">
            DESARROLLOS
          </span>
          <button className="bg-[#1A2525] hover:bg-black text-white font-mono font-bold px-5 py-2.5 rounded-xl text-[11px] tracking-widest uppercase transition-all shadow-md cursor-pointer">
            CONTACTAR AGENTE
          </button>
        </div>
      </header>

      {/* ── HERO HEADLINE BIENES RAÍCES (IMPACTANTE CENTRADO / IZQUIERDA) ── */}
      <div className="my-auto py-10 relative z-10 max-w-4xl">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white leading-[0.96] tracking-tight font-sans">
          Diseñamos el futuro <br />
          de los espacios de lujo.
        </h1>
      </div>

      {/* ── BOTTOM FOOTER / SUBTITLE & CTA CAPSULE ── */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 relative z-10 w-full pt-4">
        {/* Left Subtitle Real Estate */}
        <p className="text-sm md:text-base text-white/90 max-w-md font-normal leading-snug">
          Desarrollos residenciales de arquitectura sustentable, alta plusvalía y retorno de inversión garantizado.
        </p>

        {/* Right Dual CTA Capsule */}
        <div className="flex items-center gap-2">
          <button className="bg-[#1F292B] hover:bg-[#121B1D] text-white font-mono font-bold px-6 py-4 rounded-2xl text-xs tracking-widest uppercase transition-all shadow-xl flex items-center justify-center cursor-pointer">
            EXPLORAR PROPIEDADES
          </button>

          <button className="bg-[#CBEB99] hover:bg-[#b8e37a] text-[#1F292B] font-bold w-12 h-12 rounded-2xl flex items-center justify-center transition-all shadow-xl cursor-pointer shrink-0">
            <ArrowRight size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>

    </div>
  );
}
