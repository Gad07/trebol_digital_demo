'use client';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Globe, Building2, Users, ChevronRight } from 'lucide-react';

export function SwissMockup({ compact = false }) {
  return (
    <div className="w-full bg-[#FAFAFA] text-[#111111] p-6 md:p-10 flex flex-col justify-between font-sans min-h-full border border-neutral-300 select-none">
      {/* Header Corporativo */}
      <header className="flex justify-between items-center border-b border-neutral-300 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-black text-white font-black text-xs flex items-center justify-center font-mono">
            V
          </div>
          <span className="font-black tracking-tighter text-lg uppercase text-black font-mono">VALORA CAPITAL /// B2B</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono font-bold text-neutral-600">
          <span className="text-black border-b border-black pb-0.5">01. SERVICIOS</span>
          <span className="hover:text-black cursor-pointer">02. NOSOTROS</span>
          <span className="hover:text-black cursor-pointer">03. PORTAFOLIO</span>
          <span className="hover:text-black cursor-pointer">04. REPORTES</span>
        </nav>

        <button className="bg-black text-white font-mono font-bold px-4 py-2 text-xs hover:bg-neutral-800 transition-colors flex items-center gap-1.5 shadow-sm">
          <span>CONTACTO EJECUTIVO</span>
          <ArrowUpRight size={14} />
        </button>
      </header>

      {/* Hero Section Corporativo */}
      <div className="my-auto space-y-6 py-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl md:text-3xl font-black font-mono text-neutral-400">01 /</span>
          <span className="text-xs font-mono font-bold uppercase tracking-widest bg-neutral-200 text-black px-3 py-1 rounded">
            INGENIERÍA WEB CORPORATIVA B2B
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-black leading-[0.9] tracking-tighter uppercase">
              Plataformas B2B de <br />
              <span className="text-neutral-500 font-light italic">Nivel Enterprise.</span>
            </h2>

            <p className="text-xs md:text-sm text-neutral-700 max-w-xl font-light leading-relaxed">
              Diseño institucional con arquitectura suiza de 12 columnas. Carga sub-segundo, accesibilidad AAA e integración perfecta con tu ecosistema corporativo.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs">
              <div className="flex items-center gap-1.5 text-emerald-700 font-bold bg-emerald-50 px-3 py-1.5 rounded border border-emerald-200">
                <CheckCircle2 size={14} />
                <span>Google Speed 99/100</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-800 font-bold bg-neutral-100 px-3 py-1.5 rounded border border-neutral-300">
                <ShieldCheck size={14} />
                <span>Certificación ISO 27001</span>
              </div>
            </div>
          </div>

          {/* Imagen Corporativa de Alta Calidad */}
          <div className="lg:col-span-5 hidden sm:block">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-300 shadow-xl h-52">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" 
                alt="Corporativo Enterprise"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <span className="text-white text-xs font-mono font-bold">HQ ZÜRICH & CIUDAD DE MÉXICO</span>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Specs Table */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 border-t border-b border-neutral-300 py-4 font-mono text-xs">
          <div>
            <span className="text-[10px] text-neutral-500 block uppercase">VELOCIDAD</span>
            <strong className="text-black font-bold">0.9 Segundos</strong>
          </div>
          <div>
            <span className="text-[10px] text-neutral-500 block uppercase">GRILLA</span>
            <strong className="text-black font-bold">12 Columnas</strong>
          </div>
          <div>
            <span className="text-[10px] text-neutral-500 block uppercase">SEGURIDAD</span>
            <strong className="text-black font-bold">SSL & DDoS Pro</strong>
          </div>
          <div>
            <span className="text-[10px] text-neutral-500 block uppercase">CONVERSIÓN</span>
            <strong className="text-black font-bold">+280% Leads B2B</strong>
          </div>
        </div>
      </div>

      {/* Footer Corporativo */}
      <div className="flex justify-between items-center pt-3 text-xs font-mono text-neutral-500 border-t border-neutral-300">
        <span>VALORA CAPITAL © 2026 — ENTERPRISE B2B</span>
        <span className="text-black font-bold">ZÜRICH / MEXICO CITY</span>
      </div>
    </div>
  );
}
