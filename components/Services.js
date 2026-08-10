"use client";

import { motion } from 'framer-motion';
import { Target, Zap, Users, Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  return (
    <section id="que-es-trebol" className="relative w-full bg-hueso text-carbon py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      {/* Luz Ambiental de fondo */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -right-32 w-[35rem] h-[35rem] bg-trebol/30 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] bg-emerald-500/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-[1400px] w-full mx-auto relative z-10">

        {/* Encabezado Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-end mb-16 md:mb-20">
          <div className="lg:col-span-7">
            <h2 className="text-4xl md:text-7xl font-black text-carbon tracking-tighter leading-[0.92]">
              ¿Qué es <br />
              <span className="text-trebol">Trébol Digital?</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-lg md:text-2xl text-carbon/80 font-light leading-relaxed">
              Somos una firma de <span className="font-semibold text-carbon">aceleración tecnológica y humana</span>. Ayudamos a las empresas a evolucionar su presencia digital, sus ventas y su operación interna.
            </p>
          </div>
        </div>

        {/* Grid de 3 Pilares Fundamentales de Trébol */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

          {/* Pilar 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 md:p-10 rounded-3xl bg-white border border-neutral-200/80 shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-trebol/10 border border-trebol/20 flex items-center justify-center text-trebol mb-8 group-hover:bg-trebol group-hover:text-white transition-all duration-300">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-bold text-carbon tracking-tight mb-4">
                Estrategia & Tecnología Nativa
              </h3>
              <p className="text-carbon/70 text-base leading-relaxed font-light mb-6">
                Unimos diseño web de calidad editorial, estrategias de marketing hipersegmentadas y modelos de Inteligencia Artificial ajustados a tu industria.
              </p>
            </div>
            <ul className="space-y-2 text-xs font-mono text-carbon/80 pt-6 border-t border-neutral-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-trebol shrink-0" />
                <span>Desarrollo nativo & SEO</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-trebol shrink-0" />
                <span>Pauta de alta conversión</span>
              </li>
            </ul>
          </motion.div>

          {/* Pilar 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 md:p-10 rounded-3xl bg-white border border-neutral-200/80 shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-trebol/10 border border-trebol/20 flex items-center justify-center text-trebol mb-8 group-hover:bg-trebol group-hover:text-white transition-all duration-300">
                <Zap size={28} />
              </div>
              <h3 className="text-2xl font-bold text-carbon tracking-tight mb-4">
                Sistemas Comerciales Escalables
              </h3>
              <p className="text-carbon/70 text-base leading-relaxed font-light mb-6">
                No creamos simples vitrinas estáticas. Diseñamos ecosistemas digitales orientados a la conversión de clientes y retorno directo de inversión.
              </p>
            </div>
            <ul className="space-y-2 text-xs font-mono text-carbon/80 pt-6 border-t border-neutral-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-trebol shrink-0" />
                <span>Automatización con IA & CRM</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-trebol shrink-0" />
                <span>Filtro anti-leads basura</span>
              </li>
            </ul>
          </motion.div>

          {/* Pilar 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 md:p-10 rounded-3xl bg-trebol text-white shadow-xl hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-all duration-300">
                <Users size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-4">
                Capacitación & Autonomía Humana
              </h3>
              <p className="text-white/90 text-base leading-relaxed font-light mb-6">
                No generamos dependencia. Formamos y capacitamos a tu equipo para que tomen el control autónomo de todas las herramientas implementadas.
              </p>
            </div>
            <ul className="space-y-2 text-xs font-mono text-white/90 pt-6 border-t border-white/20 relative z-10">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-white shrink-0" />
                <span>Talleres prácticos a medida</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-white shrink-0" />
                <span>Transferencia técnica completa</span>
              </li>
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
