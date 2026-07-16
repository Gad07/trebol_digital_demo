'use client';
import { motion } from 'framer-motion';

export default function HeroV2() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden px-6 pt-24">
      {/* Cinematic Glowing Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-trebol/30 rounded-full blur-[150px] pointer-events-none z-0"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 backdrop-blur-3xl border border-white/10 mb-10"
        >
          <div className="w-2 h-2 rounded-full bg-trebol animate-pulse"></div>
          <span className="text-white/70 text-sm font-medium tracking-widest uppercase">Inteligencia Digital</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-[8rem] font-black text-white tracking-tighter leading-[0.9] mb-8"
        >
          El futuro es <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-trebol">transparente.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-3xl text-white/50 font-light max-w-3xl mb-16 leading-relaxed"
        >
          Diseñamos ecosistemas digitales que funcionan en la sombra y brillan en los resultados. Sin ruido, solo impacto.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a href="#contacto" className="px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:bg-trebol hover:text-white transition-colors duration-500 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(92,158,49,0.5)]">
            Iniciar Proyecto
          </a>
          <a href="#servicios" className="px-10 py-5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white font-medium text-lg hover:bg-white/10 transition-all duration-300">
            Explorar Servicios
          </a>
        </motion.div>

      </div>
    </section>
  );
}
