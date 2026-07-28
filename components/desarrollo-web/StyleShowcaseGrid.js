'use client';
import { useState } from 'react';
import { ArrowUpRight, Maximize2 } from 'lucide-react';
import { WEB_STYLES } from './data/webStyles';

import { BrutalistMockup } from './mockups/BrutalistMockup';
import { LuxuryMockup } from './mockups/LuxuryMockup';
import { AuroraMockup } from './mockups/AuroraMockup';
import { SwissMockup } from './mockups/SwissMockup';
import { SaasMockup } from './mockups/SaasMockup';
import { GlassMockup } from './mockups/GlassMockup';

export function StyleShowcaseGrid() {
  const [activeModalStyle, setActiveModalStyle] = useState(null);

  const renderMockupThumbnail = (id) => {
    switch (id) {
      case 'brutalism':
        return <BrutalistMockup compact />;
      case 'luxury':
        return <LuxuryMockup compact />;
      case 'aurora':
        return <AuroraMockup compact />;
      case 'swiss':
        return <SwissMockup compact />;
      case 'saas':
        return <SaasMockup compact />;
      case 'glassmorphism':
        return <GlassMockup compact />;
      default:
        return <AuroraMockup compact />;
    }
  };

  const selectedModalStyleInfo = WEB_STYLES.find(s => s.id === activeModalStyle);

  return (
    <section id="galeria" className="w-full max-w-[1450px] mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-24 border-t border-neutral-200">
      
      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-trebol bg-trebol/10 px-4 py-2 rounded-full inline-block border border-trebol/30 shadow-sm">
          Showcase de Estilos Vanguardistas
        </span>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-carbon tracking-tighter">
          6 Corrientes de Diseño <br />
          <span className="text-trebol">Listas para tu Empresa.</span>
        </h2>
        <p className="text-lg md:text-xl text-carbon/70 font-light max-w-3xl mx-auto leading-relaxed">
          Cada proyecto en Trébol Digital se programa desde cero en código nativo utilizando la corriente de diseño que mejor conecte con el público de tu marca.
        </p>
      </div>

      {/* Grid 6 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {WEB_STYLES.map((style) => (
          <div
            key={style.id}
            className="bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
          >
            {/* Mockup Preview Container */}
            <div className="relative w-full h-[320px] overflow-hidden bg-carbon">
              <div className="scale-[0.65] origin-top-left w-[153.8%] h-[153.8%] pointer-events-none">
                {renderMockupThumbnail(style.id)}
              </div>

              {/* Hover Overlay Button */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <button
                  onClick={() => setActiveModalStyle(style.id)}
                  className="bg-trebol text-white font-bold px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 hover:bg-emerald-600 transition-colors cursor-pointer"
                >
                  <Maximize2 size={16} />
                  <span>Inspeccionar Mockup Completo</span>
                </button>
              </div>
            </div>

            {/* Info Footer */}
            <div className="p-6 space-y-4">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-trebol bg-trebol/10 px-3 py-1 rounded-full inline-block mb-2">
                  {style.category}
                </span>
                <h3 className="text-2xl font-black text-carbon">{style.name}</h3>
                <p className="text-xs text-carbon/70 mt-1 line-clamp-2 leading-relaxed">
                  {style.description}
                </p>
              </div>

              {/* Specs Pills */}
              <div className="grid grid-cols-3 gap-2 font-mono text-[11px] pt-2 border-t border-neutral-100">
                <div className="bg-hueso p-2 rounded-xl text-center">
                  <span className="text-carbon/60 block text-[9px]">SPEED</span>
                  <strong className="text-carbon font-bold">{style.speed}</strong>
                </div>
                <div className="bg-hueso p-2 rounded-xl text-center">
                  <span className="text-carbon/60 block text-[9px]">LIGHTHOUSE</span>
                  <strong className="text-trebol font-bold">{style.lighthouse}/100</strong>
                </div>
                <div className="bg-hueso p-2 rounded-xl text-center">
                  <span className="text-carbon/60 block text-[9px]">CONVERSIÓN</span>
                  <strong className="text-carbon font-bold">{style.conversionBoost}</strong>
                </div>
              </div>

              <button
                onClick={() => setActiveModalStyle(style.id)}
                className="w-full bg-carbon text-white font-bold py-3 rounded-2xl hover:bg-trebol transition-colors text-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Ver Detalles de {style.name.split('.')[1]}</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* FULLSCREEN MODAL INSPECTOR */}
      {activeModalStyle && selectedModalStyleInfo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8">
          <div className="bg-white rounded-3xl w-full max-w-5xl max-h-[92vh] overflow-hidden flex flex-col shadow-2xl">
            
            {/* Modal Header */}
            <div className="bg-carbon text-white p-4 sm:px-6 flex items-center justify-between border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-trebol uppercase font-bold">
                  {selectedModalStyleInfo.category}
                </span>
                <h3 className="text-xl font-bold">{selectedModalStyleInfo.name}</h3>
              </div>

              <button
                onClick={() => setActiveModalStyle(null)}
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full font-mono text-xs cursor-pointer"
              >
                ✕ Cerrar
              </button>
            </div>

            {/* Modal Body Preview */}
            <div className="flex-1 overflow-y-auto bg-neutral-900 h-[500px]">
              {renderMockupThumbnail(activeModalStyle)}
            </div>

            {/* Modal Footer Description */}
            <div className="p-6 bg-hueso border-t border-neutral-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-carbon/60">Tipografía recomendada: {selectedModalStyleInfo.typography}</span>
                <p className="text-sm text-carbon/80 max-w-2xl">{selectedModalStyleInfo.description}</p>
              </div>

              <button
                onClick={() => {
                  setActiveModalStyle(null);
                  const el = document.getElementById('cotizador');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-trebol text-white font-bold px-6 py-3 rounded-2xl hover:bg-emerald-600 transition-colors text-xs shrink-0 cursor-pointer"
              >
                Cotizar este estilo
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
