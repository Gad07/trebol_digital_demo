"use client";

import { motion } from 'framer-motion';

export default function Services() {
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

  return (
    <section id="servicios" className="w-full bg-hueso py-24 px-6 md:px-12 relative">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
        
        {/* Columna Izquierda: Sticky */}
        <div className="md:col-span-5 relative z-10">
          <div className="sticky top-32 p-10 md:p-14 bg-trebol/70 backdrop-blur-3xl border border-white/20 rounded-3xl shadow-[0_8px_32px_rgba(92,158,49,0.3)] overflow-hidden">
            {/* Soft decorative glow inside the block */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-white/20 blur-[80px] rounded-full pointer-events-none"></div>

            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-8 relative z-10"
            >
              Nuestras <br/> Soluciones.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 font-light max-w-sm leading-relaxed relative z-10"
            >
              Un modelo integral diseñado para empresas que buscan evolucionar a través de la tecnología y el talento humano.
            </motion.p>
          </div>
        </div>

        {/* Columna Derecha: Tarjetas */}
        <div className="md:col-span-7 flex flex-col gap-24 pt-12 md:pt-0 pb-32">
          {services.map((svc, index) => (
            <motion.div 
              key={svc.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col border-t border-trebol/20 pt-8"
            >
              <span className="text-8xl md:text-9xl font-black text-trebol leading-none mb-6">
                {svc.id}.
              </span>
              <h3 className="text-3xl md:text-5xl font-extrabold text-carbon tracking-tight mb-6 hover:text-trebol transition-colors duration-300">
                {svc.title}
              </h3>
              <p className="text-xl md:text-2xl text-carbon/80 font-light leading-relaxed max-w-2xl">
                {svc.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
