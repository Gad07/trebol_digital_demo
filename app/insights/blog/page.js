'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock } from 'lucide-react';
import Contact from '@/components/Contact';

const categorias = ['Todos', 'Marketing', 'Inteligencia Artificial', 'Estrategia', 'Organizacional'];

const articulos = [
  {
    slug: 'ia-en-tu-negocio-hoy',
    categoria: 'Inteligencia Artificial',
    titulo: '5 formas de usar IA en tu negocio hoy mismo',
    extracto: 'La inteligencia artificial ya no es exclusiva para grandes corporativos. Te mostramos 5 herramientas prácticas que puedes implementar esta semana sin presupuesto millonario.',
    tiempo: '8 min',
    fecha: '22 julio, 2026',
    imagen: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    destacado: true,
  },
  {
    slug: 'estrategia-de-contenido',
    categoria: 'Marketing',
    titulo: 'Cómo construir una estrategia de contenido desde cero',
    extracto: 'Un paso a paso para crear contenido que atraiga, conecte y convierta sin necesitar un equipo enorme ni presupuesto de agencia.',
    tiempo: '10 min',
    fecha: '15 julio, 2026',
    imagen: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=80',
    destacado: true,
  },
  {
    slug: 'seo-local-pymes',
    categoria: 'Marketing',
    titulo: 'SEO local: la guía definitiva para PYMEs',
    extracto: 'Cómo aparecer primero en Google cuando alguien busca tu servicio en tu ciudad. Guía completa con casos reales.',
    tiempo: '12 min',
    fecha: '8 julio, 2026',
    imagen: 'https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&w=800&q=80',
    destacado: false,
  },
  {
    slug: 'cultura-empresarial',
    categoria: 'Organizacional',
    titulo: 'Por qué la cultura empresarial es tu mayor activo',
    extracto: 'Las empresas que crecen de forma sostenida tienen una cultura clara. Te explicamos cómo construirla aunque seas una PYME.',
    tiempo: '7 min',
    fecha: '1 julio, 2026',
    imagen: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80',
    destacado: false,
  },
  {
    slug: 'automatizacion-sin-codigo',
    categoria: 'Inteligencia Artificial',
    titulo: 'Automatización sin código: Make, Zapier y n8n explicados',
    extracto: 'Tres herramientas de automatización explicadas sin tecnicismos. Cuándo usar cada una y cómo empezar tu primer flujo.',
    tiempo: '9 min',
    fecha: '24 junio, 2026',
    imagen: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=800&q=80',
    destacado: false,
  },
  {
    slug: 'metricas-que-importan',
    categoria: 'Estrategia',
    titulo: 'Las métricas que realmente importan para tu negocio',
    extracto: 'No todas las métricas son iguales. Te enseñamos a separar los vanity metrics de los indicadores que realmente dicen si vas bien.',
    tiempo: '11 min',
    fecha: '17 junio, 2026',
    imagen: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
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

      <section className="relative w-full pt-44 pb-16 px-6 md:px-12 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-trebol/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -6 }}
            animate={{ opacity: 1, y: [0, -6, 0], rotate: -2 }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
              opacity: { duration: 0.8, delay: 0.2 },
              rotate: { duration: 0.8, delay: 0.2 },
            }}
            className="absolute -top-10 md:-top-12 lg:right-[15%] right-0 z-20"
          >
            <div className="bg-white/70 backdrop-blur-md px-6 py-3 border border-white shadow-xl rounded-full text-sm md:text-lg text-carbon font-semibold">
              Entérate de lo nuevo de Trébol
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl lg:text-[8rem] font-black text-carbon leading-[0.85] tracking-tighter mb-8"
          >
            Ideas que mueven <br />
            <span className="text-trebol">negocios reales.</span>
          </motion.h1>

          <div className="flex flex-wrap justify-center gap-2.5">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-sm font-semibold px-5 py-2 rounded-full border transition-all duration-300 ${selectedCategory === cat
                    ? 'bg-carbon text-hueso border-carbon shadow-md'
                    : 'bg-white/80 border-gray-200 text-carbon/70 hover:border-trebol hover:text-trebol'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedCategory === 'Todos' && (
        <section className="w-full pb-16 px-6 md:px-12">
          <div className="max-w-[1400px] mx-auto">
            <Link href={`/insights/blog/${destacado.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group bg-carbon text-hueso rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute inset-0">
                  <img
                    src={destacado.imagen}
                    alt=""
                    className="w-full h-full object-cover opacity-40 group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-carbon/95 via-carbon/80 to-carbon/60" />
                </div>
                <div className="relative z-10 max-w-3xl space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-widest bg-trebol text-white px-3.5 py-1 rounded-full">
                      Artículo Destacado
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1 font-mono">
                      <Clock size={13} /> {destacado.tiempo} lectura
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.9] tracking-tighter group-hover:text-trebol transition-colors">
                    {destacado.titulo}
                  </h2>

                  <p className="text-lg text-hueso/70 font-light leading-relaxed max-w-2xl">
                    {destacado.extracto}
                  </p>

                  <div className="inline-flex items-center gap-2 text-sm font-bold text-trebol group-hover:underline">
                    <span>Leer artículo completo</span>
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </section>
      )}

      <section className="w-full pb-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticulos.map((art, idx) => (
            <motion.div
              key={art.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
            >
              <Link href={`/insights/blog/${art.slug}`}>
                <div className="group bg-white rounded-[2.5rem] border-2 border-trebol/40 overflow-hidden shadow-[0_20px_50px_rgba(92,158,49,0.08)] hover:border-trebol hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={art.imagen}
                      alt={art.titulo}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-trebol bg-white/90 backdrop-blur-sm border border-trebol/20 px-3 py-1 rounded-full">
                        {art.categoria}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs text-carbon/40 flex items-center gap-1">
                          <Clock size={12} /> {art.tiempo}
                        </span>
                      </div>

                      <h3 className="text-2xl font-black text-carbon mb-3 group-hover:text-trebol transition-colors leading-[0.9] tracking-tighter">
                        {art.titulo}
                      </h3>

                      <p className="text-sm text-carbon/70 font-light leading-relaxed mb-6">
                        {art.extracto}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-carbon/60">
                      <span>{art.fecha}</span>
                      <ArrowUpRight size={16} className="group-hover:text-trebol group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Contact />
    </main>
  );
}
