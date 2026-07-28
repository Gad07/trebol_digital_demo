'use client';
import { Search, Activity, Zap, Server, CheckCircle2, ArrowRight, Command } from 'lucide-react';

export function SaasMockup({ compact = false }) {
  return (
    <div className="w-full bg-[#0D0E12] text-[#ECEEF2] font-sans select-none overflow-x-hidden min-h-full flex flex-col justify-between border border-white/10 p-6 md:p-10">
      {/* SaaS Command Header */}
      <header className="px-4 py-3 bg-[#12141B] border border-white/10 rounded-2xl flex items-center justify-between font-mono text-xs mb-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-[#5C9E31] flex items-center justify-center text-black font-black text-xs">
            ⚡
          </div>
          <span className="font-bold text-white tracking-tight">LINEAR_FLOW.IO</span>
          <span className="bg-[#5C9E31]/20 text-[#5C9E31] px-2 py-0.5 rounded text-[10px] font-bold border border-[#5C9E31]/30 hidden sm:inline">
            PROD v2.4
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-2 bg-[#1B1E26] px-3 py-1.5 rounded-lg border border-white/10 text-neutral-400 text-xs w-56">
          <Search size={14} />
          <span>Buscar comando...</span>
          <div className="ml-auto flex items-center gap-1 bg-[#282C37] px-1.5 py-0.5 rounded text-[10px] text-neutral-300">
            <Command size={10} />
            <span>K</span>
          </div>
        </div>

        <button className="bg-[#5C9E31] text-black font-bold px-4 py-1.5 rounded-lg hover:bg-emerald-400 transition-colors text-xs flex items-center gap-1.5 shadow-[0_0_15px_rgba(92,158,49,0.3)]">
          <span>CREAR PROYECTO</span>
          <ArrowRight size={14} />
        </button>
      </header>

      {/* Main SaaS Content */}
      <div className="my-auto space-y-6 py-4">
        <div className="inline-flex items-center gap-2 bg-[#5C9E31]/10 text-[#5C9E31] px-3.5 py-1.5 rounded-full font-mono text-xs font-bold border border-[#5C9E31]/20">
          <span className="w-2 h-2 rounded-full bg-[#5C9E31] animate-pulse" />
          <span>ESTÁNDAR DE INGENIERÍA ENTERPRISE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
          Minimalist SaaS <br />
          <span className="text-[#5C9E31]">Raycast & Linear Aesthetic.</span>
        </h2>

        <p className="text-xs md:text-sm text-neutral-400 font-light max-w-xl leading-relaxed">
          Interfases oscuras optimizadas para rendimiento con micro-transiciones, atajos de teclado nativos y visualización fluida de datos.
        </p>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono text-xs pt-2">
          <div className="bg-[#16181D] p-3.5 rounded-xl border border-white/10 space-y-1">
            <div className="flex justify-between items-center text-neutral-400 text-[10px]">
              <span>LATENCIA EDGE</span>
              <Activity size={14} className="text-[#5C9E31]" />
            </div>
            <div className="text-xl font-black text-white">12 ms</div>
            <div className="text-[10px] text-emerald-400">99.99% Uptime</div>
          </div>

          <div className="bg-[#16181D] p-3.5 rounded-xl border border-white/10 space-y-1">
            <div className="flex justify-between items-center text-neutral-400 text-[10px]">
              <span>LIGHTHOUSE</span>
              <Zap size={14} className="text-[#5C9E31]" />
            </div>
            <div className="text-xl font-black text-[#5C9E31]">99 / 100</div>
            <div className="text-[10px] text-neutral-400">Audit Verificada</div>
          </div>

          <div className="bg-[#16181D] p-3.5 rounded-xl border border-white/10 space-y-1">
            <div className="flex justify-between items-center text-neutral-400 text-[10px]">
              <span>CONVERSIÓN</span>
              <Server size={14} className="text-[#5C9E31]" />
            </div>
            <div className="text-xl font-black text-white">+3.6x</div>
            <div className="text-[10px] text-emerald-400">Leads Incremento</div>
          </div>

          <div className="bg-[#16181D] p-3.5 rounded-xl border border-white/10 space-y-1">
            <div className="flex justify-between items-center text-neutral-400 text-[10px]">
              <span>SEGURIDAD</span>
              <CheckCircle2 size={14} className="text-[#5C9E31]" />
            </div>
            <div className="text-xl font-black text-white">SSL AAA</div>
            <div className="text-[10px] text-neutral-400">0 Vulnerabilidades</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 pt-3 font-mono text-xs text-neutral-400 flex justify-between items-center">
        <span>LINEAR_FLOW B2B SAAS DESIGN</span>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#5C9E31]" />
          <span className="text-white font-bold text-[11px]">SYSTEM OPERATIONAL</span>
        </div>
      </footer>
    </div>
  );
}
