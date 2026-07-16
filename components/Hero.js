"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start pt-40 px-4 md:px-12 bg-hueso overflow-hidden">
      
      {/* Decorative Green Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-trebol/20 rounded-full blur-[100px] opacity-70"></div>
        <div className="absolute top-20 right-0 w-[25rem] h-[25rem] bg-trebol/10 rounded-full blur-[80px] opacity-60"></div>
        <div className="absolute -bottom-20 left-1/3 w-[35rem] h-[35rem] bg-trebol/15 rounded-full blur-[120px] opacity-60"></div>
      </div>

      {/* Container for Headline & Badge */}
      <div className="relative w-full max-w-[1400px] mx-auto text-center flex justify-center mb-16">
        
        {/* Floating Glass Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: -10 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute -top-10 md:-top-12 lg:right-[15%] right-0 z-20"
        >
          <div className="bg-white/40 backdrop-blur-md px-6 py-3 border border-white/60 shadow-xl rounded-full text-sm md:text-lg text-carbon font-semibold">
            Tenemos la suerte de encontrarnos
          </div>
        </motion.div>

        {/* Massive Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl lg:text-[8rem] font-black text-carbon leading-[0.85] tracking-tighter"
        >
          Evolución Digital <br/>
          con Enfoque <span className="text-trebol">Humano.</span>
        </motion.h1>
      </div>

      {/* Massive Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="w-[95%] max-w-[1600px] h-[50vh] md:h-[75vh] relative rounded-3xl overflow-hidden shadow-2xl mb-12"
      >
        <Image 
          src="/hero_panoramica.png" 
          alt="Trébol Digital Equipo"
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>
    </section>
  );
}
