'use client';
import { motion } from 'framer-motion';
import { BookOpen, Cpu, HeartHandshake, Target } from 'lucide-react';

const reasons = [
  {
    icon: BookOpen,
    num: '01',
    title: 'No solo ejecutamos.',
    description: 'Te enseñamos a entender tu estrategia digital para que no dependas de nadie. Te capacitamos.',
  },
  {
    icon: Cpu,
    num: '02',
    title: 'IA accesible y aplicada.',
    description: 'No hablamos de tecnología en abstracto. Te mostramos cómo usarla en tu negocio sin tecnicismos.',
  },
  {
    icon: HeartHandshake,
    num: '03',
    title: 'Trato personalizado.',
    description: 'Primero analizamos y conocemos tu negocio, tu mercado y tu cliente. No somos una fábrica de contenido.',
  },
  {
    icon: Target,
    num: '04',
    title: 'Resultados reales.',
    description: 'Cada acción tiene un objetivo. No hacemos trending, vendemos tu servicio o producto con estrategia.',
  },
];

export default function WhyUs() {
  return (
    <section id="nosotros" className="w-full py-28 md:py-36 bg-hueso relative overflow-hidden">
      
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto mb-16 md:mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl lg:text-[7.5rem] font-black text-carbon tracking-tighter leading-[0.85]"
        >
          El <span className="text-trebol">Diferenciador.</span>
        </motion.h2>
      </div>

      {/* Grid de Cards en Estilo Editorial Blanco con Borde Verde */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {reasons.map((r, i) => {
          const Icon = r.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white rounded-[2.5rem] p-8 md:p-12 border-2 border-trebol/40 hover:border-trebol shadow-[0_20px_50px_rgba(92,158,49,0.08)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex justify-between items-center mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-trebol/10 border border-trebol/20 text-trebol flex items-center justify-center group-hover:bg-trebol group-hover:text-white transition-all duration-300">
                    <Icon size={28} />
                  </div>
                  <span className="text-3xl font-black font-mono text-trebol/40 group-hover:text-trebol transition-colors">
                    {r.num}
                  </span>
                </div>

                <h3 className="text-2xl md:text-4xl font-black text-carbon mb-4 tracking-tight group-hover:text-trebol transition-colors">
                  {r.title}
                </h3>

                <p className="text-carbon/75 text-base md:text-xl font-light leading-relaxed">
                  {r.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
