'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, ArrowUpRight, Clock, Tag, Search, Sparkles } from 'lucide-react';

const categorias = ['Todos', 'Marketing', 'Inteligencia Artificial', 'Estrategia', 'Organizacional'];

const articulos = [
  {
    slug: 'ia-en-tu-negocio-hoy',
    categoria: 'Inteligencia Artificial',
    catBg: 'bg-[#EFF6FF]',
    catColor: 'text-[#2563EB]',
    titulo: '5 formas de usar IA en tu negocio hoy mismo',
    extracto: 'La inteligencia artificial ya no es exclusiva para grandes corporativos. Te mostramos 5 herramientas prácticas que puedes implementar esta semana sin presupuesto millonario.',
    tiempo: '8 min',
    fecha: '22 julio, 2026',
    destacado: true,
  },
  {
    slug: 'estrategia-de-contenido',
    categoria: 'Marketing',
    catBg: 'bg-[#EEF7E6]',
    catColor: 'text-[#5C9E31]',
    titulo: 'Cómo construir una estrategia de contenido desde cero',
    extracto: 'Un paso a paso para crear contenido que atraiga, conecte y convierta sin necesitar un equipo enorme ni presupuesto de agencia.',
    tiempo: '10 min',
    fecha: '15 julio, 2026',
    destacado: true,
  },
  {
    slug: 'seo-local-pymes',
    categoria: 'Marketing',
    catBg: 'bg-[#EEF7E6]',
    catColor: 'text-[#5C9E31]',
    titulo: 'SEO local: la guía definitiva para PYMEs',
    extracto: 'Cómo aparecer primero en Google cuando alguien busca tu servicio en tu ciudad. Guía completa con casos reales.',
    tiempo: '12 min',
    fecha: '8 julio, 2026',
    destacado: false,
  },
  {
    slug: 'cultura-empresarial',
    categoria: 'Organizacional',
    catBg: 'bg-[#F5F3FF]',
    catColor: 'text-[#7C3AED]',
    titulo: 'Por qué la cultura empresarial es tu mayor activo',
    extracto: 'Las empresas que crecen de forma sostenida tienen una cultura clara. Te explicamos cómo construirla aunque seas una PYME.',
    tiempo: '7 min',
    fecha: '1 julio, 2026',
    destacado: false,
  },
  {
    slug: 'automatizacion-sin-codigo',
    categoria: 'Inteligencia Artificial',
    catBg: 'bg-[#EFF6FF]',
    catColor: 'text-[#2563EB]',
    titulo: 'Automatización sin código: Make, Zapier y n8n explicados',
    extracto: 'Tres herramientas de automatización explicadas sin tecnicismos. Cuándo usar cada una y cómo empezar tu primer flujo.',
    tiempo: '9 min',
    fecha: '24 junio, 2026',
    destacado: false,
  },
  {
    slug: 'metricas-que-importan',
    categoria: 'Estrategia',
    catBg: 'bg-[#ECFEFF]',
    catColor: 'text-[#0891B2]',
    titulo: 'Las métricas que realmente importan para tu negocio',
    extracto: 'No todas las métricas son iguales. Te enseñamos a separar los vanity metrics de los indicadores que realmente dicen si vas bien.',
    tiempo: '11 min',
    fecha: '17 junio, 2026',
    destacado: false,
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredArticulos = selectedCategory === 'Todos'
    ? articulos
    : articulos.filter((a) => a.categoria === selectedCategory);

  const destacado = articulos[0];

  return (
    <main className="w-full bg-hueso min-h-screen overflow-hidden">
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="w-full bg-hueso pt-44 pb-16 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-trebol/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#EEF7E6] text-[#5C9E31] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-[#5C9E31]/20"
          >
            <BookOpen size={14} />
            Blog & Publicaciones
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl lg:text-[6.5rem] font-black text-carbon leading-[0.9] tracking-tighter mb-8"
          >
            Ideas que mueven <br />
            <span className="text-[#5C9E31]">negocios reales.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-carbon/70 font-light max-w-2xl leading-relaxed mb-10"
          >
            Marketing, inteligencia artificial y estrategia explicados en lenguaje humano, sin jerga académica y con aplicación práctica.
          </motion.p>

          {/* Categorías (Pills) */}
          <div className="flex flex-wrap gap-2.5">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-sm font-semibold px-5 py-2 rounded-full border transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-carbon text-hueso border-carbon shadow-md'
                    : 'bg-white/80 border-gray-200 text-carbon/70 hover:border-[#5C9E31] hover:text-[#5C9E31]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Magazine Spotlight ──────────────── */}
      {selectedCategory === 'Todos' && (
        <section className="w-full bg-hueso pb-16 px-6 md:px-12">
          <div className="max-w-[1400px] mx-auto">
            <Link href={`/insights/blog/${destacado.slug}`}>
              <div className="group bg-carbon text-hueso rounded-[3rem] p-8 md:p-14 shadow-2xl relative overflow-hidden flex flex-col md:flex-row gap-10 items-center justify-between hover:shadow-trebol/20 transition-all duration-500">
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-widest bg-[#5C9E31] text-white px-3.5 py-1 rounded-full">
                      Artículo Destacado
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1 font-mono">
                      <Clock size={13} /> {destacado.tiempo} lectura
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-5xl font-black text-white leading-[0.95] group-hover:text-[#5C9E31] transition-colors">
                    {destacado.titulo}
                  </h2>

                  <p className="text-lg text-hueso/70 font-light leading-relaxed max-w-2xl">
                    {destacado.extracto}
                  </p>

                  <div className="inline-flex items-center gap-2 text-sm font-bold text-[#5C9E31] group-hover:underline">
                    <span>Leer artículo completo</span>
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                <div className="w-full md:w-64 bg-[#2d2d2d] border border-white/10 rounded-2xl p-6 flex flex-col justify-between shrink-0 space-y-4">
                  <Sparkles size={24} className="text-[#5C9E31]" />
                  <p className="text-xs text-gray-300">Publicado el {destacado.fecha} por el equipo de Trébol Digital.</p>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ── Editorial Grid Cards ─────────────────────── */}
      <section className="w-full bg-hueso pb-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticulos.map((art, idx) => (
            <motion.div
              key={art.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
            >
              <Link href={`/insights/blog/${art.slug}`}>
                <div className="group bg-white/70 backdrop-blur-2xl border border-white/90 rounded-[2.5rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:border-[#5C9E31]/40 transition-all duration-500 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${art.catBg} ${art.catColor}`}>
                        {art.categoria}
                      </span>
                      <span className="text-xs text-carbon/40 flex items-center gap-1">
                        <Clock size={12} /> {art.tiempo}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-carbon mb-3 group-hover:text-[#5C9E31] transition-colors leading-tight">
                      {art.titulo}
                    </h3>

                    <p className="text-sm text-carbon/70 font-light leading-relaxed mb-6">
                      {art.extracto}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-carbon/60">
                    <span>{art.fecha}</span>
                    <ArrowUpRight size={16} className="group-hover:text-[#5C9E31] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
