'use client';
import { useState } from 'react';
import { Send, Clock } from 'lucide-react';
import { WEB_STYLES } from './data/webStyles';

export function ProposalCalculator() {
  const [selectedStyle, setSelectedStyle] = useState('aurora');
  const [pagesCount, setPagesCount] = useState(5);
  const [hasCMS, setHasCMS] = useState(true);
  const [hasEcommerce, setHasEcommerce] = useState(false);
  const [hasMultilingual, setHasMultilingual] = useState(false);
  const [hasAI, setHasAI] = useState(true);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    telefono: '',
    notas: ''
  });

  // Price calculation logic
  const basePrice = 1200;
  const pageCost = pagesCount * 120;
  const cmsCost = hasCMS ? 400 : 0;
  const ecommerceCost = hasEcommerce ? 800 : 0;
  const multilingualCost = hasMultilingual ? 350 : 0;
  const aiCost = hasAI ? 450 : 0;

  const totalPrice = basePrice + pageCost + cmsCost + ecommerceCost + multilingualCost + aiCost;
  const estimatedDays = Math.ceil(10 + pagesCount * 1.5 + (hasEcommerce ? 7 : 0));

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const styleObj = WEB_STYLES.find(s => s.id === selectedStyle) || WEB_STYLES[0];

  return (
    <section id="cotizador" className="w-full max-w-[1450px] mx-auto px-4 sm:px-6 md:px-12 py-20 md:py-28 relative z-10 border-t border-carbon/10">
      
      {/* Section Title */}
      <div className="text-center mb-16 space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-trebol bg-trebol/10 px-4 py-2 rounded-full inline-block border border-trebol/30 shadow-sm">
          Cotizador Interactivo en Tiempo Real
        </span>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-carbon tracking-tighter">
          Configura tu Proyecto Web <br />
          <span className="text-trebol">& Recibe una Cotización Instantánea.</span>
        </h2>
        <p className="text-lg md:text-xl text-carbon/70 font-light max-w-2xl mx-auto">
          Elige la corriente de diseño de tu preferencia y personaliza las funciones de tu plataforma.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Configuration Controls */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-xl space-y-8">
          
          {/* 1. Style Picker */}
          <div className="space-y-3">
            <label className="text-xs font-mono font-bold text-carbon uppercase tracking-wider block">
              1. Selecciona la Estética & Estilo Visual:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {WEB_STYLES.map((st) => (
                <button
                  key={st.id}
                  type="button"
                  onClick={() => setSelectedStyle(st.id)}
                  className={`p-3 rounded-2xl text-left border transition-all text-xs font-bold cursor-pointer ${
                    selectedStyle === st.id
                      ? 'bg-carbon text-white border-2 border-trebol shadow-lg'
                      : 'bg-hueso text-carbon/80 border-neutral-200 hover:bg-white'
                  }`}
                >
                  <div className="text-[9px] text-trebol uppercase font-mono">{st.category.split('/')[0]}</div>
                  <div className="font-bold">{st.name.split('.')[1]}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Pages Slider */}
          <div className="space-y-3 border-t border-neutral-100 pt-6">
            <div className="flex justify-between items-center text-xs font-mono font-bold text-carbon">
              <span>2. Número de Páginas / Secciones:</span>
              <span className="text-trebol text-base font-black">{pagesCount} Páginas</span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              value={pagesCount}
              onChange={(e) => setPagesCount(Number(e.target.value))}
              className="w-full accent-trebol h-2 bg-neutral-200 rounded-lg cursor-pointer"
            />
          </div>

          {/* 3. Features Checkboxes */}
          <div className="space-y-3 border-t border-neutral-100 pt-6">
            <label className="text-xs font-mono font-bold text-carbon uppercase tracking-wider block">
              3. Módulos & Integraciones Enterprise:
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans text-xs">
              <label className={`p-3.5 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${hasCMS ? 'bg-trebol/10 border-trebol font-bold text-carbon' : 'bg-hueso border-neutral-200 text-carbon/70'}`}>
                <span>Panel Autoadministrable Sanity/Strapi</span>
                <input type="checkbox" checked={hasCMS} onChange={(e) => setHasCMS(e.target.checked)} className="accent-trebol w-4 h-4" />
              </label>

              <label className={`p-3.5 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${hasEcommerce ? 'bg-trebol/10 border-trebol font-bold text-carbon' : 'bg-hueso border-neutral-200 text-carbon/70'}`}>
                <span>Pasarela de Pago Stripe / MercadoPago</span>
                <input type="checkbox" checked={hasEcommerce} onChange={(e) => setHasEcommerce(e.target.checked)} className="accent-trebol w-4 h-4" />
              </label>

              <label className={`p-3.5 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${hasMultilingual ? 'bg-trebol/10 border-trebol font-bold text-carbon' : 'bg-hueso border-neutral-200 text-carbon/70'}`}>
                <span>Soporte Multilingüe (Español / Inglés)</span>
                <input type="checkbox" checked={hasMultilingual} onChange={(e) => setHasMultilingual(e.target.checked)} className="accent-trebol w-4 h-4" />
              </label>

              <label className={`p-3.5 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${hasAI ? 'bg-trebol/10 border-trebol font-bold text-carbon' : 'bg-hueso border-neutral-200 text-carbon/70'}`}>
                <span>Asistente de IA / Chatbot Gemini Integrado</span>
                <input type="checkbox" checked={hasAI} onChange={(e) => setHasAI(e.target.checked)} className="accent-trebol w-4 h-4" />
              </label>
            </div>
          </div>

        </div>

        {/* Right Column: Estimate Summary & Form */}
        <div className="lg:col-span-5 bg-carbon text-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-white/10 space-y-6">
          <div className="flex justify-between items-center border-b border-white/10 pb-4">
            <span className="text-xs font-mono text-trebol uppercase font-bold">ESTIMACIÓN DEL PROYECTO</span>
            <span className="bg-trebol/20 text-trebol border border-trebol/30 px-3 py-1 rounded-full text-xs font-mono font-bold">
              ESTILO: {styleObj.name.split('.')[1]}
            </span>
          </div>

          <div className="space-y-2">
            <div className="text-xs text-neutral-400 font-mono">INVERSIÓN ESTIMADA:</div>
            <div className="text-4xl sm:text-5xl font-black font-mono text-trebol">
              ${totalPrice.toLocaleString()} <span className="text-sm font-light text-neutral-300">USD</span>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-neutral-300 pt-1">
              <span className="flex items-center gap-1">
                <Clock size={14} className="text-trebol" /> Entrega estimada: {estimatedDays} días
              </span>
              <span>•</span>
              <span className="text-emerald-400 font-bold">Lighthouse 99/100</span>
            </div>
          </div>

          {/* Form */}
          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-3 pt-2 text-xs font-sans">
              <div>
                <label className="block text-[11px] font-mono text-neutral-300 mb-1">Nombre Completo *</label>
                <input
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  placeholder="Tu nombre"
                  className="w-full p-3 rounded-xl bg-neutral-800 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-trebol"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-neutral-300 mb-1">Correo Electrónico *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="hola@tuempresa.com"
                  className="w-full p-3 rounded-xl bg-neutral-800 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-trebol"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-neutral-300 mb-1">Teléfono / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  placeholder="+52 55 1234 5678"
                  className="w-full p-3 rounded-xl bg-neutral-800 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-trebol"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-trebol text-white font-bold py-4 rounded-xl hover:bg-emerald-600 transition-colors text-sm flex items-center justify-center gap-2 shadow-lg shadow-trebol/20 mt-4 cursor-pointer"
              >
                <Send size={16} />
                <span>Enviar y Reservar Asesoría Técnica</span>
              </button>
            </form>
          ) : (
            <div className="bg-trebol/20 border border-trebol/40 p-6 rounded-2xl text-center space-y-3 animate-fadeIn">
              <span className="text-4xl">🚀</span>
              <h3 className="text-xl font-bold text-white">¡Cotización Enviada con Éxito!</h3>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                Hemos recibido las especificaciones de tu proyecto ({pagesCount} páginas, estilo {styleObj.name.split('.')[1]}). Un ingeniero de software te contactará a la brevedad.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="bg-white/10 text-white text-xs font-mono px-4 py-2 rounded-xl border border-white/20 hover:bg-white/20 cursor-pointer"
              >
                Modificar Cotización
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
