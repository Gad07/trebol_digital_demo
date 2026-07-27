"use client";

import { useState, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

const services = [
  {
    id: "01",
    title: "Crecimiento Digital",
    description: "Diseñamos estrategias para fortalecer la presencia digital de las empresas y convertirla en oportunidades comerciales. Desde diagnóstico y estrategia, hasta gestión de redes sociales y desarrollo web.",
  },
  {
    id: "02",
    title: "Inteligencia Artificial Aplicada",
    description: "Ayudamos a las empresas a integrar herramientas de inteligencia artificial para mejorar su productividad sin perder el enfoque humano. Talleres, implementación y automatización.",
  },
  {
    id: "03",
    title: "Desarrollo Organizacional",
    description: "Fortalecemos las capacidades de liderazgo y organización de los equipos para acompañar el crecimiento de la empresa. No solo implementamos tecnología, formamos personas.",
  }
];

export default function Services() {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  // Track scroll position inside this 300vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Dynamically update activeStep based on scroll progress (0 to 1)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.33) {
      if (activeStep !== 0) setActiveStep(0);
    } else if (latest >= 0.33 && latest < 0.66) {
      if (activeStep !== 1) setActiveStep(1);
    } else if (latest >= 0.66) {
      if (activeStep !== 2) setActiveStep(2);
    }
  });

  const currentService = services[activeStep];

  return (
    <section 
      id="servicios" 
      ref={containerRef} 
      className="relative w-full h-[300vh] bg-hueso"
    >
      {/* Pinned Viewport Container: Locks fixed on screen from top-0 for 300vh scroll distance */}
      <div className="sticky top-0 w-full h-screen flex items-center px-6 md:px-12 z-20">
        <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          
          {/* Columna Izquierda: Bloqueada al Centro de la Pantalla */}
          <div className="md:col-span-5 relative z-10">
            <div className="p-10 md:p-14 bg-trebol/85 backdrop-blur-3xl border border-white/30 rounded-3xl shadow-[0_20px_50px_rgba(92,158,49,0.35)] overflow-hidden">
              {/* Ambient Breathing Light */}
              <motion.div 
                animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-32 -right-32 w-80 h-80 bg-white/30 blur-[80px] rounded-full pointer-events-none" 
              />

              <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-8 relative z-10">
                Nuestras <br/> Soluciones.
              </h2>

              <p className="text-lg md:text-xl text-white/90 font-light max-w-sm leading-relaxed relative z-10 mb-8">
                Un modelo integral diseñado para empresas que buscan evolucionar a través de la tecnología y el talento humano.
              </p>

              {/* Step Progress Capsules */}
              <div className="flex items-center gap-3 relative z-10">
                {services.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`h-2.5 rounded-full transition-all duration-500 ${
                      activeStep === idx ? 'w-12 bg-white' : 'w-4 bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Columna Derecha: El elemento actual reemplaza al anterior limpiamente */}
          <div className="md:col-span-7 relative h-[380px] md:h-[450px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentService.id}
                initial={{ opacity: 0, y: 50, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.97 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="w-full flex flex-col justify-center border-t-2 border-trebol/30 pt-8"
              >
                <span className="text-8xl md:text-9xl font-black text-trebol leading-none mb-4 block">
                  {currentService.id}.
                </span>

                <h3 className="text-3xl md:text-5xl font-extrabold text-carbon tracking-tight mb-6">
                  {currentService.title}
                </h3>

                <p className="text-xl md:text-2xl text-carbon/80 font-light leading-relaxed max-w-2xl">
                  {currentService.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
