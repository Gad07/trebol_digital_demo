"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen min-h-[100dvh] pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-5 sm:px-8 md:px-12 bg-hueso overflow-hidden border-b border-carbon/10 flex items-center">

      {/* Background Hero Image - 100% Crisp & Clean with Responsive Blend */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2200&q=95"
          alt="Trébol Digital Equipo"
          fill
          priority
          className="object-cover object-center md:object-right opacity-100"
        />
        {/* Marked Soft Gradient Fade: Solid contrast behind text, smooth transition to crisp image */}
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-hueso via-hueso/95 via-70% md:via-60% to-hueso/10 md:to-transparent" />
      </div>

      {/* Animated Green Ambient Light Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[28rem] h-[28rem] bg-trebol/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-20 right-0 w-[24rem] h-[24rem] bg-trebol/10 rounded-full blur-[80px]"
        />
      </div>

      <div className="max-w-[1350px] mx-auto relative z-10 w-full">

        {/* CONTENIDO PRINCIPAL DEL HERO */}
        <div className="max-w-3xl space-y-6 text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 90, damping: 14 }}
            className="text-4xl md:text-6xl lg:text-[4.5rem] font-black text-carbon leading-[1.05] tracking-tight"
          >
            Tu negocio tiene potencial. <br />
            Trébol lo convierte en <span className="text-trebol">crecimiento real.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-base md:text-xl text-carbon/80 font-light leading-relaxed max-w-2xl font-sans"
          >
            Integramos estrategia digital, inteligencia artificial y desarrollo organizacional para que tu empresa venda mejor, se organice mejor y compita en el mundo de hoy sin perder el enfoque humano.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1"
          >
            <a
              href="#section-contact"
              className="px-7 py-3.5 rounded-2xl bg-trebol text-white font-bold text-sm md:text-base hover:bg-carbon transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
            >
              Solicita tu diagnóstico gratuito <ArrowUpRight size={18} />
            </a>

            <a
              href="#que-es-trebol"
              className="px-7 py-3.5 rounded-2xl bg-white border border-neutral-300 text-carbon font-semibold text-sm md:text-base hover:border-trebol hover:text-trebol transition-all duration-300 shadow-sm flex items-center justify-center gap-2"
            >
              Descubre cómo funciona ↓
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="text-xs font-mono text-white sm:text-carbon/60 flex items-center gap-2 pt-1 font-semibold sm:font-normal drop-shadow-sm sm:drop-shadow-none"
          >
            <span>30 minutos · Sin costo · Identificamos oportunidades para tu negocio</span>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
