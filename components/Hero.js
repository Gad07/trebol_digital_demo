"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full flex flex-col items-center justify-start pt-36 md:pt-44 pb-20 px-4 md:px-12 bg-hueso overflow-hidden">
      
      {/* Animated Green Ambient Light Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.8, 0.6] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[32rem] h-[32rem] bg-trebol/20 rounded-full blur-[110px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-20 right-0 w-[28rem] h-[28rem] bg-trebol/10 rounded-full blur-[90px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.75, 0.5] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute -bottom-20 left-1/3 w-[35rem] h-[35rem] bg-trebol/15 rounded-full blur-[120px]"
        />
      </div>

      {/* Container for Headline & Floating Glass Badge */}
      <div className="relative w-full max-w-[1400px] mx-auto text-center flex justify-center mb-16 md:mb-20 z-10">
        
        {/* Floating Glass Badge (Micro-Floating Loop Animation) */}
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
          <div className="bg-white/50 backdrop-blur-md px-6 py-3 border border-white/70 shadow-xl rounded-full text-sm md:text-lg text-carbon font-semibold">
            Tenemos la suerte de encontrarnos
          </div>
        </motion.div>

        {/* Massive Headline with Stagger Animation */}
        <motion.h1 
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 90, damping: 14 }}
          className="text-5xl md:text-8xl lg:text-[8rem] font-black text-carbon leading-[0.85] tracking-tighter"
        >
          Evolución Digital <br/>
          con Enfoque <span className="text-trebol">Humano.</span>
        </motion.h1>
      </div>

      {/* Spacious Full-Sized Panoramic Image Banner with Interactive Hover Zoom */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 16, delay: 0.3 }}
        whileHover={{ scale: 1.015 }}
        className="w-[95%] max-w-[1600px] h-[55vh] md:h-[65vh] min-h-[420px] relative rounded-3xl overflow-hidden shadow-2xl z-10 transition-shadow duration-500 hover:shadow-[0_30px_70px_rgba(92,158,49,0.15)]"
      >
        <Image 
          src="/hero_panoramica.png" 
          alt="Trébol Digital Equipo"
          fill
          sizes="(max-width: 768px) 95vw, (max-width: 1280px) 90vw, 1400px"
          className="object-cover object-center transition-transform duration-700"
          priority
        />
      </motion.div>
    </section>
  );
}
