'use client';
import { motion } from 'framer-motion';

export default function WhyUsV2() {
  const reasons = [
    { title: 'No dependencias.', desc: 'Te capacitamos para que operes tu propio sistema. Sin ataduras.' },
    { title: 'IA Nativa.', desc: 'Construimos con IA en el núcleo, no como un añadido superficial.' },
    { title: 'Data Dura.', desc: 'Cero métricas de vanidad. Solo impacto en el balance general.' },
    { title: 'Diseño Élite.', desc: 'Estéticas minimalistas que transmiten autoridad inmediata.' },
  ];

  return (
    <section id="nosotros" className="w-full py-32 px-6 bg-black relative">
      <div className="max-w-[1200px] mx-auto relative z-10">
        
        <div className="mb-24 flex flex-col items-center text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6"
          >
            Nuestra <span className="text-trebol">Filosofía.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
          {reasons.map((r, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-black p-12 md:p-16 flex flex-col justify-center group hover:bg-white/[0.02] transition-colors"
            >
              <h3 className="text-3xl font-extrabold text-white mb-4 group-hover:text-trebol transition-colors">{r.title}</h3>
              <p className="text-white/50 text-lg font-light leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
