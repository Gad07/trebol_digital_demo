'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const soluciones = [
  {
    id: '01',
    title: 'Marketing Estratégico.',
    subtitle: 'Atracción & Posicionamiento',
    desc: 'Diseñamos estrategias para fortalecer la presencia digital de las empresas y convertirla en oportunidades comerciales reales. Desde diagnóstico hasta campañas.',
    href: '/soluciones/marketing-estrategico',
  },
  {
    id: '02',
    title: 'Inteligencia Artificial Aplicada.',
    subtitle: 'Productividad & Eficiencia',
    desc: 'Ayudamos a las empresas a integrar herramientas de inteligencia artificial para mejorar su productividad sin perder el enfoque humano.',
    href: '/soluciones/ia-aplicada',
  },
  {
    id: '03',
    title: 'Desarrollo Organizacional.',
    subtitle: 'Liderazgo & Procesos',
    desc: 'Fortalecemos las capacidades de liderazgo y organización de los equipos para acompañar el crecimiento sostenido de la empresa.',
    href: '/soluciones/desarrollo-organizacional',
  },
  {
    id: '04',
    title: 'Desarrollo Web.',
    subtitle: 'Plataformas & Experiencia',
    desc: 'Desarrollamos sitios web, tiendas online y aplicaciones web ultrarrápidas a la medida diseñadas para convertir visitantes en clientes.',
    href: '/soluciones/desarrollo-web',
  },
];

export default function SolucionesPage() {
  return (
    <main className="w-full bg-hueso min-h-screen overflow-hidden">
      {/* ── Hero Editorial ─────────────────────────────── */}
      <section className="w-full bg-hueso pt-44 pb-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-trebol/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#EEF7E6] text-trebol text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8"
          >
            Nuestras Soluciones
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-6xl md:text-8xl lg:text-[8rem] font-black text-carbon leading-[0.85] tracking-tighter mb-8"
          >
            Evolución digital <br />
            <span className="text-trebol">integral.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-3xl text-carbon/70 font-light max-w-3xl leading-relaxed"
          >
            Un modelo diseñado para empresas que buscan evolucionar a través de la tecnología, la estrategia y el talento humano.
          </motion.p>
        </div>
      </section>

      {/* ── Soluciones (Editorial Sticky Layout V1) ───── */}
      <section className="w-full bg-hueso pb-32 px-6 md:px-12 relative">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          
          {/* Columna Izquierda: Sticky Card */}
          <div className="md:col-span-5 relative z-10">
            <div className="sticky top-32 p-10 md:p-14 bg-trebol border border-white/20 rounded-[3rem] shadow-[0_8px_32px_rgba(92,158,49,0.3)] overflow-hidden relative">
              <div className="absolute -top-32 -right-32 w-80 h-80 bg-white/20 blur-[80px] rounded-full pointer-events-none" />

              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-8 relative z-10"
              >
                Nuestras <br /> Soluciones.
              </motion.h2>
              <p className="text-xl text-white/90 font-light max-w-sm leading-relaxed relative z-10">
                Estrategia, inteligencia artificial, desarrollo organizacional y web en un solo acompañamiento.
              </p>
            </div>
          </div>

          {/* Columna Derecha: Tarjetas V1 */}
          <div className="md:col-span-7 flex flex-col gap-24 pt-4 pb-20">
            {soluciones.map((svc) => (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="flex flex-col border-t border-trebol/20 pt-8 group"
              >
                <span className="text-8xl md:text-9xl font-black text-trebol leading-none mb-4">
                  {svc.id}.
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-trebol mb-2">
                  {svc.subtitle}
                </span>
                <Link href={svc.href}>
                  <h3 className="text-3xl md:text-5xl font-extrabold text-carbon tracking-tight mb-6 group-hover:text-trebol transition-colors duration-300 flex items-center gap-3">
                    {svc.title}
                    <ArrowUpRight size={32} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </h3>
                </Link>
                <p className="text-xl md:text-2xl text-carbon/80 font-light leading-relaxed max-w-2xl mb-6">
                  {svc.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Contact CTA Editorial ────────────────────── */}
      <section className="w-full bg-carbon text-hueso py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-6">
              ¿No sabes por dónde <br />
              <span className="text-trebol">empezar?</span>
            </h2>
            <p className="text-2xl text-hueso/70 font-light max-w-xl leading-relaxed">
              Agenda una sesión estratégica de 30 minutos sin costo. Analizaremos tu ecosistema digital y te propondremos la ruta exacta.
            </p>
          </div>

          <Link
            href="/agenda"
            className="inline-flex items-center gap-2 bg-trebol text-white font-bold px-10 py-6 rounded-full hover:bg-hueso hover:text-carbon transition-all duration-500 text-xl shrink-0"
          >
            Agendar diagnóstico
            <ArrowUpRight size={22} />
          </Link>
        </div>
      </section>
    </main>
  );
}
