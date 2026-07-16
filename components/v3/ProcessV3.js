'use client';
import { motion } from 'framer-motion';

export default function ProcessV3() {
  const steps = [
    { num: '01', title: 'Auditoría Inicial', desc: 'Mapeo total de tus sistemas y flujos actuales.' },
    { num: '02', title: 'Arquitectura', desc: 'Diseñamos la estructura técnica más eficiente.' },
    { num: '03', title: 'Implementación', desc: 'Construcción y despliegue ágil.' },
    { num: '04', title: 'Optimización', desc: 'Medición iterativa para maximizar el ROI.' },
  ];

  return (
    <section id="proceso" className="w-full py-16 px-4 md:px-8 relative">
      <div className="max-w-[1600px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-carbon mb-8 px-4 tracking-tight">El Sistema.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/10 backdrop-blur-[80px] border-t border-l border-white/80 border-b border-r border-white/30 rounded-[3rem] p-8 flex flex-col justify-between shadow-[0_30px_60px_rgba(0,0,0,0.08),inset_0_1px_20px_rgba(255,255,255,0.4)] hover:-translate-y-4 hover:scale-[1.02] transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-trebol/10 text-trebol font-bold flex items-center justify-center mb-16">
                {step.num}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-carbon mb-2">{step.title}</h3>
                <p className="text-carbon/60 text-sm">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
