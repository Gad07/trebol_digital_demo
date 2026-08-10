'use client';
import { motion } from 'framer-motion';
import { Sparkles, BarChart3, Code2, Presentation } from 'lucide-react';

const services = [
  {
    title: 'Estrategia Digital Integral',
    desc: 'Auditoría digital profunda y trazado de ruta accionable. Te decimos exactamente dónde estás perdiendo dinero y cómo recuperarlo.',
    icon: <Presentation size={32} strokeWidth={1} />,
  },
  {
    title: 'Automatización & IA',
    desc: 'Integramos inteligencia artificial en tus flujos de trabajo diarios. Menos horas operativas, más horas estratégicas.',
    icon: <Sparkles size={32} strokeWidth={1} />,
  },
  {
    title: 'Desarrollo Web High-End',
    desc: 'Sitios web ultra-rápidos que funcionan como el mejor vendedor de tu equipo. Minimalismo que convierte.',
    icon: <Code2 size={32} strokeWidth={1} />,
  },
  {
    title: 'Growth Analytics',
    desc: 'Dejamos de adivinar. Montamos dashboards en tiempo real para que tomes decisiones basadas en datos crudos.',
    icon: <BarChart3 size={32} strokeWidth={1} />,
  }
];

export default function ServicesV2() {
  return (
    <section id="servicios" className="w-full py-32 px-6 bg-black relative">
      <div className="max-w-[1200px] mx-auto relative z-10">
        
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6"
          >
            Capacidades.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/50 font-light max-w-2xl mx-auto"
          >
            Todo lo que necesitas para dominar tu nicho, ejecutado con precisión quirúrgica.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-10 md:p-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-colors duration-500 flex flex-col justify-between"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-trebol mb-12 group-hover:scale-110 transition-transform duration-500">
                {srv.icon}
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">{srv.title}</h3>
                <p className="text-white/50 text-lg leading-relaxed font-light">{srv.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
