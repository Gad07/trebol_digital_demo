'use client';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Conocer.',
    description: 'Analizamos tu negocio, tu mercado y tus clientes en una sesión estratégica de 30 minutos. Sin costos ni compromisos.',
    top: 'top-[15vh]',
  },
  {
    number: '02',
    title: 'Diseñar.',
    description: 'Trazamos tu ruta de acción digital con una estrategia clara, priorizada y adaptada inteligentemente a tu presupuesto.',
    top: 'top-[20vh]',
  },
  {
    number: '03',
    title: 'Ejecutar.',
    description: 'Trabajamos lado a lado. Te capacitamos mientras implementamos, garantizando que tu equipo no dependa de nosotros.',
    top: 'top-[25vh]',
  },
  {
    number: '04',
    title: 'Medir.',
    description: 'Revisamos los resultados con datos reales y crudos. Ajustamos la estrategia milimétricamente y escalamos.',
    top: 'top-[30vh]',
  },
];

export default function Process() {
  return (
    <section id="proceso" className="w-full py-32 px-4 md:px-12 bg-carbon relative text-hueso">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="mb-32 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-[7rem] font-black tracking-tighter leading-[0.9]"
          >
            Metodología <br className="hidden md:block"/>
            <span className="text-trebol">Dinámica.</span>
          </motion.h2>
        </div>

        {/* Sticky Stacking Cards */}
        <div className="flex flex-col relative pb-32">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`sticky ${step.top} w-full min-h-[45vh] md:min-h-[50vh] bg-[#2d2d2d]/80 backdrop-blur-2xl border border-white/10 text-hueso rounded-[3rem] shadow-[0_-8px_32px_rgba(0,0,0,0.5)] p-8 md:p-16 mb-10 transition-transform origin-top overflow-hidden flex items-center`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 w-full relative z-10">
                <div className="flex flex-col justify-center">
                  <span className="text-7xl md:text-[8rem] font-black text-trebol leading-none mb-2 md:mb-6">
                    {step.number}
                  </span>
                  <h3 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                    {step.title}
                  </h3>
                </div>
                
                <div className="flex items-center">
                  <p className="text-xl md:text-3xl text-hueso/90 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
