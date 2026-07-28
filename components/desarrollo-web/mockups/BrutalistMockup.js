'use client';
import { ArrowUpRight, Zap, Check, Sparkles } from 'lucide-react';

export function BrutalistMockup({ compact = false }) {
  return (
    <div className="w-full bg-[#FFFDF0] text-[#000000] font-mono select-none overflow-x-hidden min-h-full flex flex-col justify-between border-4 border-black p-4 md:p-8">
      {/* Header Landing */}
      <header className="flex justify-between items-center border-b-4 border-black pb-4">
        <div className="flex items-center gap-2 font-black text-black text-lg bg-[#FFE500] px-3 py-1 border-2 border-black shadow-[3px_3px_0px_#000]">
          ⚡ KRAFT_BOOTCAMP.2026
        </div>
        <div className="flex items-center gap-3 text-xs font-bold">
          <span className="bg-[#7000FF] text-white px-3 py-1 border-2 border-black shadow-[2px_2px_0px_#000] hidden sm:inline">ACCESO: LIMITADO</span>
          <button className="bg-black text-white px-4 py-2 border-2 border-black shadow-[3px_3px_0px_#FFE500] hover:bg-[#FFE500] hover:text-black transition-all flex items-center gap-1 cursor-pointer">
            <span>¡APARTAR LUGAR!</span>
            <ArrowUpRight size={14} />
          </button>
        </div>
      </header>

      {/* Main Content Landing */}
      <div className="my-auto space-y-6 py-6">
        <div className="inline-block bg-[#FFE500] text-black font-mono font-bold text-xs px-3 py-1 border-2 border-black shadow-[3px_3px_0px_#000]">
          /// LANDING PAGE DE ALTA CONVERSIÓN
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-black leading-none uppercase tracking-tight font-sans">
              MULTI-PROSPECTOS <br />
              <span className="bg-[#7000FF] text-white px-2">EN TIEMPO REAL.</span>
            </h2>

            <p className="text-xs md:text-sm font-mono text-black font-bold max-w-xl leading-relaxed">
              Cero distracciones visuales. Captura directa de prospectos calificados con micro-interacciones, tiempos de carga de 1 segundo y máxima tasa de conversión.
            </p>

            {/* Captura de Lead en 1 Clic */}
            <div className="bg-white p-4 border-4 border-black shadow-[6px_6px_0px_#000] space-y-3 max-w-md">
              <span className="text-xs font-black block text-black">REGÍSTRATE EN 1-CLIC CON TU CORREO:</span>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="tu@empresa.com" 
                  className="w-full p-2.5 border-2 border-black font-mono text-xs focus:outline-none bg-[#FFFDF0]" 
                  readOnly 
                />
                <button className="bg-[#FFE500] text-black font-black px-4 py-2.5 border-2 border-black shadow-[3px_3px_0px_#000] hover:bg-[#7000FF] hover:text-white transition-all shrink-0 cursor-pointer">
                  ENVIAR ↗
                </button>
              </div>
              <span className="text-[10px] text-neutral-600 block">✓ Cero Spam. Confirmación inmediata por WhatsApp.</span>
            </div>
          </div>

          {/* Imagen de Impacto Landing */}
          <div className="lg:col-span-5 hidden sm:block">
            <div className="border-4 border-black shadow-[8px_8px_0px_#000] rounded-none overflow-hidden h-52 relative">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80" 
                alt="Landing Page Impacto"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-[#7000FF] text-white font-mono font-bold text-[10px] px-2 py-1 border-2 border-black">
                CONVERSIÓN: +380%
              </div>
            </div>
          </div>
        </div>

        {/* Spec Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 font-mono">
          <div className="bg-white p-3 border-4 border-black shadow-[4px_4px_0px_#000]">
            <span className="text-[10px] font-bold block text-neutral-500">VELOCIDAD</span>
            <span className="text-lg md:text-xl font-black text-black">1.0 SEG</span>
          </div>

          <div className="bg-[#FFE500] p-3 border-4 border-black shadow-[4px_4px_0px_#000]">
            <span className="text-[10px] font-bold block text-black">RETENCIÓN</span>
            <span className="text-lg md:text-xl font-black text-black">99.2% LEADS</span>
          </div>

          <div className="bg-[#7000FF] text-white p-3 border-4 border-black shadow-[4px_4px_0px_#000]">
            <span className="text-[10px] font-bold block text-white/80">TASA CONVERSIÓN</span>
            <span className="text-lg md:text-xl font-black text-white">4.8% REAL</span>
          </div>
        </div>
      </div>

      {/* Footer Landing */}
      <footer className="flex justify-between items-center border-t-4 border-black pt-4 text-xs font-mono font-bold">
        <span>KRAFT HIGH-CONVERSION LANDING SYSTEM</span>
        <span className="bg-black text-white px-2 py-0.5">READY FOR TRAFFIC</span>
      </footer>
    </div>
  );
}
