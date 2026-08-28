'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Star, ArrowUpRight, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Process from '@/components/Process';
import Contact from '@/components/Contact';

const DEFAULT_TESTIMONIALS = [
  {
    id: 'testimonio-1787778466458',
    name: 'SUGA',
    company: 'Fabricación y distribución de suministros industriales',
    text: 'Nos ayudaron con la actualización de nuestra página web. Hoy tenemos una presencia digital más sólida y profesional.',
    stars: 5,
    avatar: 'https://www.suga.mx/assets/img/logo/Logo_02_sf.png'
  },
  {
    id: 'testimonio-1787778387946',
    name: 'CÍRCULO DE EMPRESARIOS',
    company: 'Asociación Empresarial',
    text: 'Gracias a las aportaciones de Trébol Digital y por el valor agregado para hacer que nuestro proyecto creciera.',
    stars: 5,
    avatar: 'https://circulodeempresarios.com.mx/assets/img/ciempre/logo-color-sf-01.png'
  }
];

function TestimonialsCarousel() {
  const [items, setItems] = useState(DEFAULT_TESTIMONIALS);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    fetch('/api/testimonios')
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const mapped = data
            .filter((t) => t.visible !== false && t.status !== 'draft')
            .map((t, idx) => ({
              id: t.id || `testimonio_${idx}`,
              name: t.nombre || t.cliente || t.name || 'Cliente Trébol',
              company: t.cargo ? `${t.cargo}${t.empresa ? ` · ${t.empresa}` : ''}` : (t.empresa || ''),
              text: t.texto || t.quote || t.testimonio || t.comentario || '',
              stars: Number(t.rating || t.estrellas || 5) || 5,
              avatar: t.avatar || t.clienteImg || t.imagen_url || ''
            }))
            .filter((t) => Boolean(t.text));

          if (mapped.length > 0) {
            setItems(mapped);
          }
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (paused || items.length <= 1) return;
    const t = setInterval(() => {
      setDir(1);
      setCurrent(c => (c + 1) % items.length);
    }, 5000);
    return () => clearInterval(t);
  }, [paused, items.length]);

  const go = (next) => {
    if (items.length === 0) return;
    setDir(next > current ? 1 : -1);
    setCurrent((next + items.length) % items.length);
    setPaused(true);
  };

  if (!items || items.length === 0) return null;

  const t = items[current] || items[0];

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
          {/* Fixed-height container */}
          <div className="relative min-h-[300px] md:min-h-[260px] overflow-hidden">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={current}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -60 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-white/80 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col justify-between"
            >
              <Quote size={40} className="text-trebol/10 absolute top-6 right-8" />

              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars || 5)].map((_, s) => (
                    <Star key={s} size={14} className="fill-trebol text-trebol" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-carbon/80 text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-4xl">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-carbon/10 pt-5 mt-6">
                {t.avatar && (t.avatar.startsWith('http') || t.avatar.startsWith('/')) ? (
                  <div className="w-12 h-12 rounded-full bg-white p-1.5 border border-carbon/10 flex items-center justify-center shrink-0 overflow-hidden shadow-xs">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-contain" />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-trebol flex items-center justify-center text-white font-black text-base shrink-0 shadow-xs">
                    {t.avatar || (t.name ? t.name.charAt(0) : 'T')}
                  </div>
                )}
                <div>
                  <p className="font-bold text-carbon text-base leading-none mb-1">{t.name}</p>
                  {t.company && <p className="text-carbon/60 text-xs font-mono">{t.company}</p>}
                </div>
                <div className="ml-auto text-[10px] font-mono text-carbon/40 uppercase tracking-widest">
                  {current + 1} / {items.length}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          {items.length > 1 && (
            <div className="flex items-center gap-3 mt-6 justify-center">
              <button
                onClick={() => go(current - 1)}
                className="w-11 h-11 rounded-full border border-carbon/20 flex items-center justify-center text-carbon/50 hover:border-trebol hover:text-trebol transition-all cursor-pointer"
                title="Testimonio anterior"
              >
                <ChevronLeft size={18} />
              </button>
              {/* Dots */}
              <div className="flex items-center gap-1.5 mx-2">
                {items.map((_, i) => (
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
                title="Siguiente testimonio"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function MetodoPage() {
  return (
    <main className="w-full bg-hueso text-carbon min-h-screen">
      {/* ── HERO EN PANTALLA COMPLETA CON FOTOGRAFÍA Y DEGRADADO ── */}
      <section className="relative w-full min-h-screen min-h-[100dvh] pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-5 sm:px-8 md:px-12 bg-hueso overflow-hidden border-b border-carbon/10 flex items-center">

        {/* Background Hero Image with Crisp Right & Soft Left Gradient Fade */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2200&q=95"
            alt="El Método Trébol Digital"
            fill
            priority
            className="object-cover object-center md:object-right opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-hueso via-hueso/95 via-70% md:via-60% to-hueso/10 md:to-transparent" />
        </div>

        {/* Ambient light blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-40 -left-40 w-[28rem] h-[28rem] bg-trebol/20 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute top-20 right-0 w-[24rem] h-[24rem] bg-trebol/10 rounded-full blur-[80px]"
          />
        </div>

        <div className="max-w-[1350px] mx-auto relative z-10 w-full">

          {/* CONTENIDO PRINCIPAL DEL HERO */}
          <div className="max-w-3xl space-y-6 text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 90, damping: 14 }}
              className="text-4xl md:text-6xl lg:text-[4.5rem] font-black text-carbon leading-[1.05] tracking-tight"
            >
              El Método <br />
              <span className="text-trebol">Trébol.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-base md:text-xl text-carbon/80 font-light leading-relaxed max-w-2xl font-sans"
            >
              Integramos estrategia, marketing, tecnología e Inteligencia Artificial en una metodología estructurada paso a paso para acelerar tu empresa con claridad y visión de futuro.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1"
            >
              <a
                href="#contacto"
                className="px-7 py-3.5 rounded-2xl bg-trebol text-white font-bold text-sm md:text-base hover:bg-carbon transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                Solicita tu diagnóstico gratuito <ArrowUpRight size={18} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="text-xs font-mono text-white sm:text-carbon/60 flex items-center gap-2 pt-1 font-semibold sm:font-normal drop-shadow-sm sm:drop-shadow-none"
            >
              <span>30 minutos · Sin costo · Identificamos oportunidades para tu negocio</span>
            </motion.div>
          </div>

        </div>
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

