'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowUpRight, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Process from '@/components/Process';
import Contact from '@/components/Contact';

const testimonials = [
  {
    name: 'Mariana R.',
    company: 'Studio Mara · Fotografía',
    text: 'El método Trébol nos dio claridad total desde el día uno. En 3 meses teníamos un sitio que convierte y redes que hablan por solas.',
    stars: 5,
    avatar: 'M',
  },
  {
    name: 'Carlos V.',
    company: 'InnovaTech · SaaS B2B',
    text: 'Pasamos de 0 a 340 leads en 60 días siguiendo el proceso. No es magia, es metodología. La transferencia de conocimiento fue clave.',
    stars: 5,
    avatar: 'C',
  },
  {
    name: 'Sofía L.',
    company: 'Boutique Ámbar · E-Commerce',
    text: 'Lo que más valoro es que nos enseñaron a operar solos. Hoy gestionamos nuestro marketing con autonomía total. Eso no lo da cualquiera.',
    stars: 5,
    avatar: 'S',
  },
  {
    name: 'Diego M.',
    company: 'Constructora Horizonte · B2B',
    text: 'El diagnóstico inicial fue tan preciso que identificaron en 2 horas lo que nosotros no habíamos visto en 2 años. Resultados inmediatos.',
    stars: 5,
    avatar: 'D',
  },
];

function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setDir(1);
      setCurrent(c => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(t);
  }, [paused]);

  const go = (next) => {
    setDir(next > current ? 1 : -1);
    setCurrent((next + testimonials.length) % testimonials.length);
    setPaused(true);
  };

  const t = testimonials[current];

  return (
    <section className="w-full bg-hueso py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-14 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <span className="text-[11px] font-mono text-trebol font-black uppercase tracking-[0.2em] block mb-3">
              ✦ Lo que dicen nuestros clientes
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-carbon tracking-tighter leading-[0.92]">
              Resultados que <br className="hidden md:block" />
              <span className="text-trebol">hablan solos.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {[1,2,3,4,5].map(i => (
              <Star key={i} size={20} className="fill-trebol text-trebol" />
            ))}
            <span className="text-carbon/60 text-sm font-mono ml-2">4.9 / 5.0</span>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Fixed-height container — NEVER changes size regardless of content */}
          <div className="relative h-[340px] md:h-[300px] overflow-hidden">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={current}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -60 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-white/70 backdrop-blur-xl border border-white/60 rounded-[2rem] p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col justify-between"
            >
              <Quote size={40} className="text-trebol/10 absolute top-6 right-8" />

              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, s) => (
                    <Star key={s} size={14} className="fill-trebol text-trebol" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-carbon/80 text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-4xl line-clamp-4">
                  "{t.text}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-carbon/10 pt-5 mt-4">
                <div className="w-10 h-10 rounded-full bg-trebol flex items-center justify-center text-white font-black text-sm shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-carbon text-sm leading-none mb-0.5">{t.name}</p>
                  <p className="text-carbon/50 text-xs font-mono">{t.company}</p>
                </div>
                <div className="ml-auto text-[10px] font-mono text-carbon/30 uppercase tracking-widest">
                  {current + 1} / {testimonials.length}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-3 mt-6 justify-center">
            <button
              onClick={() => go(current - 1)}
              className="w-11 h-11 rounded-full border border-carbon/20 flex items-center justify-center text-carbon/50 hover:border-trebol hover:text-trebol transition-all cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>
            {/* Dots */}
            <div className="flex items-center gap-1.5 mx-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    i === current
                      ? 'w-6 h-2 bg-trebol'
                      : 'w-2 h-2 bg-carbon/20 hover:bg-carbon/40'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(current + 1)}
              className="w-11 h-11 rounded-full bg-carbon text-white flex items-center justify-center hover:bg-trebol transition-all cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function MetodoPage() {
  return (
    <main className="w-full bg-hueso text-carbon min-h-screen">
      {/* ── HERO ──────────────────────────────────────── */}
      <section className="relative w-full flex flex-col items-center justify-start pt-36 md:pt-44 pb-20 px-4 md:px-12 bg-hueso overflow-hidden">
        {/* Ambient light blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.8, 0.6] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-40 -left-40 w-[32rem] h-[32rem] bg-trebol/20 rounded-full blur-[110px]"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute top-20 right-0 w-[28rem] h-[28rem] bg-trebol/10 rounded-full blur-[90px]"
          />
        </div>

        <div className="relative w-full max-w-[1400px] mx-auto text-center flex justify-center mb-16 md:mb-20 z-10">
          {/* Floating Badge */}
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
              Metodología Probada
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 90, damping: 14 }}
            className="text-5xl md:text-8xl lg:text-[8rem] font-black text-carbon leading-[0.85] tracking-tighter"
          >
            El Método <br />
            <span className="text-trebol">Trébol.</span>
          </motion.h1>
        </div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 80, damping: 16, delay: 0.3 }}
          whileHover={{ scale: 1.015 }}
          className="w-[95%] max-w-[1600px] h-[55vh] md:h-[65vh] min-h-[420px] relative rounded-3xl overflow-hidden shadow-2xl z-10 transition-shadow duration-500 hover:shadow-[0_30px_70px_rgba(92,158,49,0.15)]"
        >
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=80"
            alt="Método Trébol"
            className="w-full h-full object-cover object-center transition-transform duration-700"
          />
        </motion.div>
      </section>

      {/* ── METODOLOGÍA CON ANIMACIÓN GSAP SCROLL-PIN ORIGINAL ── */}
      <Process />

      {/* ── OPINIONES / TESTIMONIOS (CARRUSEL) ──────── */}
      <TestimonialsCarousel />

      {/* ── CTA INTERMEDIO ──────────────────────────── */}
      <section className="w-full bg-carbon">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col gap-5 max-w-2xl">
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.92]">
              ¿Listo para aplicar<br />
              el <span className="text-trebol">Método Trébol</span>?
            </h3>
            <p className="text-white/50 text-lg font-light leading-relaxed max-w-lg">
              Agenda una sesión estratégica gratuita. Analizamos tu negocio y te entregamos un diagnóstico personalizado sin compromiso.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="/agenda"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-trebol text-white font-bold text-base rounded-full hover:bg-white hover:text-carbon transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              Agendar sesión gratuita
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────── */}
      <Contact />
    </main>
  );
}

