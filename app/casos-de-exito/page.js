'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Contact from '@/components/Contact';

export default function CasosPage() {
  const [casos, setCasos] = useState([]);
  const [testimonios, setTestimonios] = useState([]);
  const [loadingCasos, setLoadingCasos] = useState(true);
  const [loadingTestimonios, setLoadingTestimonios] = useState(true);
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [activeTestimonio, setActiveTestimonio] = useState(0);

  useEffect(() => {
    fetch('/api/casos')
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setCasos(data.filter((c) => c.visible !== false));
      })
      .catch(() => {})
      .finally(() => setLoadingCasos(false));

    fetch('/api/testimonios')
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setTestimonios(data.filter((t) => t.visible !== false));
      })
      .catch(() => {})
      .finally(() => setLoadingTestimonios(false));
  }, []);

  const categorias = ['Todos', ...Array.from(new Set(casos.map((c) => c.categoria).filter(Boolean)))];
  const casosFiltrados = activeCategory === 'Todos' ? casos : casos.filter((c) => c.categoria === activeCategory);

  return (
    <main className="w-full bg-hueso min-h-screen overflow-hidden">

      {/* HERO */}
      <section className="relative w-full min-h-screen min-h-[100dvh] flex flex-col items-center justify-center pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 px-5 sm:px-8 md:px-12 bg-hueso overflow-hidden border-b border-carbon/10">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-40 -left-40 w-[32rem] h-[32rem] bg-trebol/20 rounded-full blur-[110px] opacity-70"></div>
          <div className="absolute top-20 right-0 w-[28rem] h-[28rem] bg-trebol/10 rounded-full blur-[90px] opacity-60"></div>
          <div className="absolute -bottom-20 left-1/3 w-[35rem] h-[35rem] bg-trebol/15 rounded-full blur-[120px] opacity-60"></div>
        </div>

        <div className="relative w-full max-w-[1400px] mx-auto text-center flex flex-col items-center justify-center mb-8 md:mb-12 z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -10 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mb-2 sm:absolute sm:-top-10 md:-top-12 lg:right-[15%] sm:right-2 z-20"
          >
            <div className="bg-white/60 backdrop-blur-md px-5 sm:px-6 py-2.5 sm:py-3 border border-white/80 shadow-xl rounded-full text-xs sm:text-sm md:text-lg text-carbon font-semibold">
              Resultados Medibles Reales
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-[7.5rem] font-black text-carbon leading-[0.95] sm:leading-[0.85] tracking-tighter"
          >
            Empresas que impulsan<br className="hidden sm:block" />
            su crecimiento con <span className="text-trebol">Trébol Digital.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-lg md:text-2xl text-carbon/80 font-light leading-relaxed max-w-3xl mx-auto font-sans"
          >
            Conoce cómo ayudamos a empresas en crecimiento a escalar sus ventas, optimizar su operación e implementar Inteligencia Artificial con resultados medibles desde el primer mes.
          </motion.p>
        </div>
      </section>

      {/* FILTROS */}
      {!loadingCasos && categorias.length > 1 && (
        <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-16 relative z-10">
          <div className="flex flex-wrap justify-center gap-3">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-4 rounded-full font-bold text-sm md:text-base transition-all duration-300 shadow-md ${
                  activeCategory === cat
                    ? 'bg-carbon text-hueso border-2 border-trebol shadow-xl scale-105'
                    : 'bg-white text-carbon/70 border border-gray-200 hover:border-trebol/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* CASOS DE ÉXITO */}
      <section className="w-full bg-hueso pb-32 px-6 md:px-12 relative z-10">
        <div className="max-w-[1400px] mx-auto space-y-16">
          {loadingCasos ? (
            [1, 2, 3].map((i) => (
              <div key={i} className="rounded-[3.5rem] bg-white/60 border border-neutral-200 h-96 animate-pulse" />
            ))
          ) : (
            <AnimatePresence mode="wait">
              {casosFiltrados.map((caso, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={caso.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`rounded-[3.5rem] p-8 md:p-14 border transition-all duration-500 grid md:grid-cols-12 gap-10 items-center hover:-translate-y-1 shadow-[0_20px_60px_rgba(0,0,0,0.05)] ${caso.bgColor || 'bg-white/90 border-white'}`}
                  >
                    {/* Imagen */}
                    <div className={`md:col-span-5 h-80 md:h-[480px] rounded-[2.5rem] overflow-hidden relative shadow-2xl group ${isEven ? 'md:order-first' : 'md:order-last'}`}>
                      <img src={caso.image} alt={caso.empresa} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>

                    {/* Contenido */}
                    <div className={`md:col-span-7 space-y-6 ${isEven ? 'md:order-last' : 'md:order-first'}`}>
                      <div>
                        <span className="text-xs font-bold text-trebol uppercase tracking-widest font-mono">{caso.categoria} · {caso.lugar}</span>
                        <h2 className="text-4xl md:text-6xl font-black text-carbon tracking-tight leading-[0.9] mt-1">{caso.empresa}</h2>
                      </div>

                      <div className="space-y-4 pt-2">
                        <div className="p-5 rounded-2xl border bg-white/80 border-gray-200">
                          <p className="text-xs font-bold text-trebol uppercase tracking-wider mb-1">El Desafío Inicial</p>
                          <p className="text-base text-carbon/80 font-light leading-relaxed">{caso.reto}</p>
                        </div>
                        <div className="p-5 rounded-2xl border bg-[#EEF7E6] border-trebol/30">
                          <p className="text-xs font-bold text-trebol uppercase tracking-wider mb-1">La Solución Trébol</p>
                          <p className="text-base text-carbon/90 font-medium leading-relaxed">{caso.solucion}</p>
                        </div>
                      </div>

                      {/* Métricas */}
                      <div className="grid grid-cols-3 gap-3 pt-2">
                        {(caso.resultados || []).map((r, i) => (
                          <div key={i} className="p-4 rounded-2xl text-center shadow-md bg-white border border-gray-200">
                            <p className="text-2xl md:text-3xl font-black text-trebol mb-0.5">{r.stat}</p>
                            <p className="text-[11px] text-carbon/60 font-light">{r.label}</p>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4">
                        <Link href="/agenda" className="inline-flex items-center gap-2 bg-carbon text-hueso hover:bg-trebol font-bold px-10 py-5 rounded-full transition-colors duration-500 text-lg shadow-xl">
                          Quiero un resultado similar
                          <ArrowUpRight size={20} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          )}
        </div>
      </section>

      {/* LO QUE DICEN NUESTROS CLIENTES (TESTIMONIOS INDEPENDIENTES) */}
      {!loadingTestimonios && testimonios.length > 0 && (
        <section className="w-full bg-hueso py-24 px-6 md:px-12 border-t border-carbon/10">
          <div className="max-w-[1100px] mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-carbon tracking-tighter leading-[0.85] mb-16">
              Lo que dicen nuestros <span className="text-trebol">clientes.</span>
            </h2>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setActiveTestimonio(activeTestimonio === 0 ? testimonios.length - 1 : activeTestimonio - 1)}
                className="w-12 h-12 rounded-full flex items-center justify-center text-carbon hover:text-trebol transition-colors shrink-0 cursor-pointer"
                title="Testimonio anterior"
              >
                <ChevronLeft size={28} />
              </button>

              <div className="flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonio}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                    className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg flex flex-col md:flex-row min-h-[350px]"
                  >
                    {testimonios[activeTestimonio]?.clienteImg && (
                      <div className="relative w-full md:w-2/5 h-64 md:h-auto shrink-0 overflow-hidden">
                        <img
                          src={testimonios[activeTestimonio]?.clienteImg}
                          alt={testimonios[activeTestimonio]?.cliente}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white to-transparent hidden md:block" />
                      </div>
                    )}
                    <div className="flex-1 p-8 md:p-14 text-left relative flex flex-col justify-center">
                      <Quote size={100} className="absolute -top-4 -left-2 text-trebol/10 pointer-events-none" />

                      {/* Estrellas */}
                      <div className="flex items-center gap-1 mb-4 text-amber-500">
                        {Array.from({ length: testimonios[activeTestimonio]?.rating || 5 }).map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" />
                        ))}
                      </div>

                      <p className="text-lg md:text-2xl text-carbon/80 font-light leading-relaxed italic mb-8 relative z-10">
                        &ldquo;{testimonios[activeTestimonio]?.quote}&rdquo;
                      </p>
                      <div className="pt-4 border-t border-gray-100 relative z-10">
                        <p className="text-base font-bold text-carbon mb-0.5">{testimonios[activeTestimonio]?.cliente}</p>
                        <p className="text-xs text-trebol font-semibold">
                          {testimonios[activeTestimonio]?.cargo ? `${testimonios[activeTestimonio].cargo} · ` : ''}
                          {testimonios[activeTestimonio]?.empresa}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <button
                onClick={() => setActiveTestimonio(activeTestimonio === testimonios.length - 1 ? 0 : activeTestimonio + 1)}
                className="w-12 h-12 rounded-full flex items-center justify-center text-carbon hover:text-trebol transition-colors shrink-0 cursor-pointer"
                title="Siguiente testimonio"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            <div className="flex items-center justify-center gap-3 mt-8">
              {testimonios.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonio(idx)}
                  className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${activeTestimonio === idx ? 'w-10 bg-trebol' : 'w-2.5 bg-trebol/30 hover:bg-trebol/60'}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <Contact />
    </main>
  );
}
