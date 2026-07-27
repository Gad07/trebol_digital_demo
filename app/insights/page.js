'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Download, GraduationCap, ArrowUpRight } from 'lucide-react';

const secciones = [
  {
    id: '01',
    icon: BookOpen,
    title: 'Blog',
    subtitle: 'Conocimiento Práctico',
    desc: 'Artículos sobre marketing digital, inteligencia artificial y estrategia empresarial escritos en lenguaje humano.',
    cta: 'Leer el blog',
    href: '/insights/blog',
    items: [
      '5 formas de usar IA en tu negocio hoy mismo',
      'Cómo construir una estrategia de contenido desde cero',
      'SEO local: la guía definitiva para PYMEs',
    ],
  },
  {
    id: '02',
    icon: Download,
    title: 'Recursos Descargables',
    subtitle: 'Herramientas Gratuitas',
    desc: 'Plantillas, guías y e-books gratuitos para implementar por tu cuenta las estrategias que usamos con clientes.',
    cta: 'Ver recursos',
    href: '/insights/recursos',
    items: [
      'Plantilla: Calendario editorial mensual',
      'Guía: Cómo usar ChatGPT en tu empresa',
      'Checklist: Auditoría de presencia digital',
    ],
  },
  {
    id: '03',
    icon: GraduationCap,
    title: 'Talleres y Cursos',
    subtitle: 'Capacitación para Equipos',
    desc: 'Capacitación práctica presencial y en línea. Talleres intensivos con aplicación inmediata para tu equipo.',
    cta: 'Ver talleres',
    href: '/insights/talleres',
    items: [
      'Taller: IA para no técnicos (Online)',
      'Taller: Marketing Digital para PYMEs',
      'Curso: Comunicación interna efectiva',
    ],
  },
];

export default function InsightsPage() {
  return (
    <main className="w-full bg-hueso min-h-screen overflow-hidden">
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="w-full bg-hueso pt-44 pb-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-trebol/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-trebol/10 text-trebol text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8"
          >
            Insights
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-6xl md:text-8xl lg:text-[8rem] font-black text-carbon leading-[0.85] tracking-tighter mb-8"
          >
            Aprende con nosotros. <br />
            <span className="text-trebol">Crece por tu cuenta.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-carbon/70 font-light max-w-2xl leading-relaxed"
          >
            Compartimos todo lo que sabemos sobre marketing, inteligencia artificial y estrategia para que tú y tu equipo puedan aplicarlo de inmediato.
          </motion.p>
        </div>
      </section>

      {/* ── Sections List (V1 Hover Style) ──────────── */}
      <section className="w-full bg-hueso py-16 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-col border-b-2 border-carbon/10">
          {secciones.map((sec, i) => (
            <motion.div
              key={sec.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-t-2 border-carbon/10 w-full group hover:bg-trebol transition-colors duration-500 cursor-default"
            >
              <div className="max-w-[1400px] mx-auto px-2 md:px-6 py-12 md:py-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div className="flex flex-col gap-2 max-w-xl">
                  <span className="text-xs font-bold uppercase tracking-widest text-trebol group-hover:text-hueso transition-colors duration-500">
                    {sec.subtitle}
                  </span>
                  <Link href={sec.href}>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-carbon tracking-tight group-hover:text-hueso transition-colors duration-500 flex items-center gap-3">
                      {sec.title}
                      <ArrowUpRight size={32} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h2>
                  </Link>
                  <p className="text-lg text-carbon/70 group-hover:text-hueso/90 transition-colors duration-500 font-light mt-2">
                    {sec.desc}
                  </p>
                </div>

                <div className="flex flex-col gap-2 w-full md:w-80 shrink-0">
                  {sec.items.map((item) => (
                    <Link
                      key={item}
                      href={sec.href}
                      className="bg-white/60 group-hover:bg-white/20 backdrop-blur-md rounded-2xl px-4 py-3 text-sm text-carbon group-hover:text-white transition-colors duration-500 font-medium flex items-center justify-between"
                    >
                      <span className="truncate">{item}</span>
                      <ArrowUpRight size={14} className="shrink-0 ml-2" />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Newsletter (Dark Section) ───────────────── */}
      <section className="w-full bg-carbon py-32 px-6 md:px-12 text-hueso relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-16 items-start md:items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-5xl md:text-[5rem] font-black tracking-tighter leading-[0.9] mb-6">
              Recibe lo mejor <br />
              <span className="text-trebol">cada semana.</span>
            </h2>
            <p className="text-xl text-hueso/70 font-light max-w-lg leading-relaxed">
              Un correo semanal con el artículo más relevante, el recurso más útil y una estrategia accionable para tu negocio.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-auto flex flex-col sm:flex-row gap-3 shrink-0"
          >
            <input
              type="email"
              placeholder="tu@email.com"
              className="bg-white/10 border border-white/20 text-hueso placeholder:text-hueso/30 px-6 py-4 rounded-full outline-none focus:border-trebol transition-colors text-lg"
            />
            <button className="bg-trebol text-white font-bold px-8 py-4 rounded-full hover:bg-hueso hover:text-carbon transition-all duration-500 text-lg whitespace-nowrap">
              Suscribirme
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
