'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calculator } from 'lucide-react';
import CanalesScrollytelling from '@/components/CanalesScrollytelling';

export default function MarketingPage() {
  const [presupuesto, setPresupuesto] = useState(25000);

  // Estimaciones
  const estimarProspectos = Math.round(presupuesto / 110);
  const estimarVentas = Math.round(estimarProspectos * 0.15);
  const retornoEstimado = (presupuesto * 4.8).toLocaleString('es-MX');

  return (
    <main className="w-full bg-hueso text-carbon min-h-screen">
      {/* ── HERO EDITORIAL CLARO CON LUZ AMBIENTAL ─────────────────────── */}
      <section className="relative w-full flex flex-col items-center justify-start pt-36 md:pt-44 pb-20 px-4 md:px-12 bg-hueso overflow-hidden border-b border-carbon/10">

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.85, 0.6] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -right-40 w-[40rem] h-[40rem] bg-trebol/25 rounded-full blur-[120px]"
          />
        </div>

        <div className="relative w-full max-w-[1400px] mx-auto text-center flex justify-center mb-16 md:mb-20 z-10">

          {/* Floating Glass Badge Original */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -6 }}
            animate={{ opacity: 1, y: [0, -6, 0], rotate: -2 }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 0.8, delay: 0.2 },
              rotate: { duration: 0.8, delay: 0.2 }
            }}
            className="absolute -top-10 md:-top-12 lg:right-[15%] right-0 z-20"
          >
            <div className="bg-white/70 backdrop-blur-md px-6 py-3 border border-white shadow-xl rounded-full text-sm md:text-lg text-carbon font-semibold">
              Marketing de Resultados
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl lg:text-[8.5rem] font-black text-carbon leading-[0.82] tracking-tighter"
          >
            Marketing con <br />
            Impacto <span className="text-trebol">Comercial.</span>
          </motion.h1>
        </div>

        {/* Hero Visual Image Banner */}
        <div className="w-[95%] max-w-[1500px] h-[55vh] md:h-[65vh] rounded-[3rem] overflow-hidden shadow-2xl relative border border-white z-10 group">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1800&q=80"
            alt="Marketing Estratégico Trébol"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon/90 via-transparent to-transparent flex items-end p-8 md:p-14">
            <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <span className="text-xs font-mono font-bold text-trebol uppercase tracking-widest block mb-1">Ecosistema de Captación Continuo</span>
                <h2 className="text-3xl md:text-5xl font-black text-white">4.8× ROAS Promedio Generado</h2>
              </div>
              <Link
                href="/agenda"
                className="inline-flex items-center gap-2 bg-trebol text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-carbon transition-colors duration-300 shadow-xl shrink-0"
              >
                Solicitar Plan de Pauta
                <ArrowUpRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── MATRIZ DE CANALES DE CONVERSIÓN (APPLE SCROLLYTELLING) ───── */}
      <CanalesScrollytelling />

      {/* ── SECCIÓN INTERACTIVA: CALCULADORA DE ROI PUBLICITARIO ─────── */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-trebol bg-trebol/10 px-4 py-1.5 rounded-full mb-4 inline-block">
            Proyección Comercial
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-carbon tracking-tighter">
            Calculadora de Retorno de Inversión (ROI)
          </h2>
          <p className="text-xl text-carbon/70 font-light max-w-2xl mx-auto mt-4">
            Ajusta el presupuesto publicitario proyectado y calcula los prospectos y ventas estimadas.
          </p>
        </div>

        <div className="bg-white backdrop-blur-2xl border border-gray-200 rounded-[3.5rem] p-8 md:p-16 shadow-2xl grid md:grid-cols-12 gap-12 items-center">
          {/* Slider Control Column */}
          <div className="md:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-carbon/50 block mb-2">Presupuesto Publicitario Mensual:</span>
              <span className="text-5xl md:text-6xl font-black text-trebol font-mono">
                ${presupuesto.toLocaleString('es-MX')} MXN
              </span>
            </div>

            <input
              type="range"
              min="5000"
              max="100000"
              step="5000"
              value={presupuesto}
              onChange={(e) => setPresupuesto(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-trebol"
            />

            <div className="flex justify-between text-xs font-mono text-carbon/50 font-bold">
              <span>$5,000 MXN</span>
              <span>$50,000 MXN</span>
              <span>$100,000 MXN</span>
            </div>

            <div className="bg-[#EEF7E6] p-6 rounded-2xl border border-trebol/30 text-sm text-carbon/80 leading-relaxed font-mono text-xs">
              <strong>Nota de Transparencia:</strong> Estimación basada en CPL promedio de $110 MXN y tasa de conversión comercial del 15%.
            </div>
          </div>

          {/* Results Output Cards */}
          <div className="md:col-span-6 bg-carbon text-hueso rounded-[2.5rem] p-8 md:p-10 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-mono font-bold text-trebol uppercase tracking-wider flex items-center gap-2">
                <Calculator size={16} />
                Resultados Proyectados
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-trebol animate-pulse" />
            </div>

            <div className="grid grid-cols-2 gap-6 pt-2">
              <div>
                <span className="text-xs font-mono text-gray-400 block mb-1">Prospectos Calificados:</span>
                <span className="text-4xl md:text-5xl font-black text-white font-mono">{estimarProspectos}</span>
                <span className="text-xs font-mono text-trebol block mt-1">leads / mes</span>
              </div>

              <div>
                <span className="text-xs font-mono text-gray-400 block mb-1">Cierres Estimados:</span>
                <span className="text-4xl md:text-5xl font-black text-trebol font-mono">{estimarVentas}</span>
                <span className="text-xs font-mono text-gray-400 block mt-1">clientes nuevos</span>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <span className="text-xs font-mono text-gray-400 block mb-1">Ingreso Bruto Proyectado (4.8× ROAS):</span>
              <span className="text-4xl md:text-5xl font-black text-white font-mono">${retornoEstimado} MXN</span>
            </div>

            <Link
              href="/agenda"
              className="w-full inline-flex items-center justify-center gap-2 bg-trebol text-white font-bold py-4 rounded-full hover:bg-white hover:text-carbon transition-colors duration-300 text-base shadow-xl pt-4"
            >
              Desplegar Estrategia Comercial
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Contact CTA Editorial ────────────────────── */}
      <section className="w-full bg-hueso pb-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto bg-white/60 backdrop-blur-2xl border border-white/80 rounded-[3rem] p-12 md:p-20 shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div>
              <h2 className="text-5xl md:text-7xl font-black text-carbon tracking-tighter leading-[0.9] mb-6">
                Construyamos tu <br />
                <span className="text-trebol">estrategia digital.</span>
              </h2>
              <p className="text-2xl text-carbon/70 font-light max-w-xl leading-relaxed">
                Agenda una sesión estratégica de 30 minutos sin costo. Analizaremos tu presencia digital y definiremos la ruta exacta.
              </p>
            </div>

            <Link
              href="/agenda"
              className="inline-flex items-center gap-2 bg-carbon text-hueso font-bold px-10 py-6 rounded-full hover:bg-trebol transition-colors duration-500 text-xl shrink-0 shadow-xl"
            >
              Agendar diagnóstico
              <ArrowUpRight size={22} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
