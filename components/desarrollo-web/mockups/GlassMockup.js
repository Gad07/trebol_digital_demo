'use client';
import { Sparkles, ArrowRight } from 'lucide-react';

export function GlassMockup({ compact = false }) {
  return (
    <div className="w-full bg-gradient-to-br from-[#F3F4F6] via-[#EEF2FF] to-[#E0E7FF] text-[#1F2937] font-sans select-none overflow-x-hidden min-h-full flex flex-col justify-between p-6 md:p-10 border border-white/80 relative">
      {/* Soft Pastel Background Orbs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-300/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl pointer-events-none" />

      {/* Spatial Glass Bar Header */}
      <header className="bg-white/60 backdrop-blur-2xl p-4 rounded-3xl border border-white/80 shadow-lg flex items-center justify-between relative z-10 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-md">
            ✨
          </div>
          <span className="font-bold text-base tracking-tight text-gray-900">SPATIAL_GLASS</span>
        </div>

        <button className="bg-indigo-600 text-white font-bold px-5 py-2 rounded-2xl hover:bg-indigo-700 transition-colors text-xs flex items-center gap-1.5 shadow-lg shadow-indigo-500/20">
          <span>VisionOS Mode</span>
          <ArrowRight size={14} />
        </button>
      </header>

      {/* Content */}
      <div className="my-auto space-y-6 py-4 relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-indigo-600 border border-white shadow-sm">
          <Sparkles size={14} />
          <span>VISIONOS SPATIAL GLASS & PASTEL AESTHETIC</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight">
          Spatial Glass & <br />
          <span className="text-indigo-600">Pastel Refraction.</span>
        </h2>

        <p className="text-xs md:text-sm text-gray-600 font-light max-w-xl leading-relaxed">
          Diseño espacial con paneles flotantes en cristal esmerilado, degradados pasteles suaves (rosa, azul, verde menta) y sombras multicapa difusas.
        </p>

        {/* Spatial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="bg-white/70 backdrop-blur-xl p-5 rounded-3xl border border-white/80 shadow-xl space-y-2">
            <span className="text-xs font-mono font-bold text-indigo-600 block">REFRACCIÓN</span>
            <h3 className="text-xl font-bold text-gray-900">Cristal 4K</h3>
            <p className="text-[11px] text-gray-500">Superficies transparentes fluidas.</p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl p-5 rounded-3xl border border-white/80 shadow-xl space-y-2">
            <span className="text-xs font-mono font-bold text-indigo-600 block">SUAVIDAD</span>
            <h3 className="text-xl font-bold text-gray-900">Pastel UI</h3>
            <p className="text-[11px] text-gray-500">Paleta relajante multicanal.</p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl p-5 rounded-3xl border border-white/80 shadow-xl space-y-2">
            <span className="text-xs font-mono font-bold text-indigo-600 block">OPTIMIZACIÓN</span>
            <h3 className="text-xl font-bold text-gray-900">97 / 100</h3>
            <p className="text-[11px] text-gray-500">Respuesta sin lag de render.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white/60 backdrop-blur-2xl p-3 rounded-2xl border border-white/80 shadow-sm text-xs text-gray-500 font-mono flex justify-between items-center relative z-10">
        <span>VISIONOS SPATIAL GLASS DESIGN</span>
        <span className="text-indigo-600 font-bold">FLUID EXPERIENCE</span>
      </footer>
    </div>
  );
}
