'use client';
import { motion } from 'framer-motion';

const reasons = [
  {
    title: 'No solo ejecutamos.',
    description: 'Te enseñamos a entender tu estrategia digital para que no dependas de nadie. Te capacitamos.',
  },
  {
    title: 'IA accesible y aplicada.',
    description: 'No hablamos de tecnología en abstracto. Te mostramos cómo usarla en tu negocio sin tecnicismos.',
  },
  {
    title: 'Trato personalizado.',
    description: 'Primero analizamos y conocemos tu negocio, tu mercado y tu cliente. No somos una fábrica de contenido.',
  },
  {
    title: 'Resultados reales.',
    description: 'Cada acción tiene un objetivo. No hacemos trending, vendemos tu servicio o producto con estrategia.',
  },
];

export default function WhyUs() {
  return (
    <section id="nosotros" className="w-full py-32 bg-hueso relative overflow-hidden">
      
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto mb-20 md:mb-32">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-[8rem] font-black text-carbon tracking-tighter leading-[0.85]"
        >
          El <span className="text-trebol">Diferenciador.</span>
        </motion.h2>
      </div>

      <div className="w-full flex flex-col border-b-2 border-carbon/10">
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="border-t-2 border-carbon/10 w-full group hover:bg-trebol transition-colors duration-500 cursor-default"
          >
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center py-12 md:py-20 gap-6 md:gap-12">
              
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-carbon tracking-tight group-hover:text-hueso transition-colors duration-500 max-w-4xl">
                {r.title}
              </h3>
              
              <p className="text-xl md:text-3xl font-light text-carbon/70 group-hover:text-hueso/90 transition-colors duration-500 max-w-xl md:text-right leading-relaxed">
                {r.description}
              </p>
              
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
