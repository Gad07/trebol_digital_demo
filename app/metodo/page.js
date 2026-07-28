'use client';
import { useState, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Target, Brain, Users, BarChart3 } from 'lucide-react';
import Contact from '@/components/Contact';

const fases = [
  {
    number: '01',
    title: 'Conocer.',
    subtitle: 'Diagnóstico & Entendimiento',
    color: '#5C9E31',
    bg: 'bg-trebol/10',
    border: 'border-trebol/30',
    description: 'Analizamos tu negocio, tu mercado y tus clientes. Entendemos tus objetivos reales antes de proponer cualquier solución.',
    acciones: [
      'Entrevista profunda con fundadores y equipo clave',
      'Auditoría de presencia digital y procesos actuales',
      'Análisis de competencia y benchmarks del sector',
      'Identificación de oportunidades prioritarias',
    ],

  },
  {
    number: '02',
    title: 'Diseñar.',
    subtitle: 'Estrategia & Hoja de Ruta',
    color: '#0284c7',
    bg: 'bg-sky-500/10',
    border: 'border-sky-500/30',
    description: 'Trazamos tu ruta de acción digital con una estrategia clara, priorizada y adaptada inteligentemente a tu presupuesto.',
    acciones: [
      'Plan estratégico a 90 días con hitos claros',
      'Selección de herramientas y canales prioritarios',
      'Definición de métricas clave (KPIs)',
      'Asignación de responsabilidades y ownership',
    ],

  },
  {
    number: '03',
    title: 'Ejecutar.',
    subtitle: 'Implementación Acompañada',
    color: '#d97706',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    description: 'Trabajamos lado a lado. Te capacitamos mientras implementamos, garantizando que tu equipo no dependa de nosotros.',
    acciones: [
      'Implementación de herramientas y automatizaciones',
      'Producción de contenido y activaciones digitales',
      'Capacitación del equipo en el proceso',
      'Reuniones semanales de seguimiento',
    ],

  },
  {
    number: '04',
    title: 'Medir.',
    subtitle: 'Optimización Continua',
    color: '#7c3aed',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/30',
    description: 'Revisamos los resultados con datos reales y crudos. Ajustamos la estrategia milimétricamente y escalamos lo que funciona.',
    acciones: [
      'Reportes mensuales con análisis de datos reales',
      'Pruebas A/B y experimentación continua',
      'Actualización de estrategia según resultados',
      'Escalabilidad planificada de lo que funciona',
    ],

  },
];



export default function MetodoPage() {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest < 0.25) {
      if (activeStep !== 0) setActiveStep(0);
    } else if (latest >= 0.25 && latest < 0.5) {
      if (activeStep !== 1) setActiveStep(1);
    } else if (latest >= 0.5 && latest < 0.75) {
      if (activeStep !== 2) setActiveStep(2);
    } else if (latest >= 0.75) {
      if (activeStep !== 3) setActiveStep(3);
    }
  });

  const currentFase = fases[activeStep];

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

      {/* ── FASES DEL MÉTODO (SCROLL-DRIVEN, COPY DE Services.js) ── */}
      <section
        id="fases"
        ref={containerRef}
        className="relative w-full h-[300vh] bg-hueso border-t border-carbon/10"
      >
        <div className="sticky top-0 w-full h-screen flex items-center px-6 md:px-12 z-20">
          <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">

            {/* Columna Izquierda: Bloqueada al Centro */}
            <div className="md:col-span-5 relative z-10">
              <div className="p-10 md:p-14 bg-trebol border border-white/30 rounded-3xl shadow-[0_20px_50px_rgba(92,158,49,0.35)] overflow-hidden relative">
                <motion.div
                  animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-32 -right-32 w-80 h-80 bg-white/30 blur-[80px] rounded-full pointer-events-none"
                />

                <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-8 relative z-10">
                  Las 4 Fases <br /> del Método.
                </h2>

                <p className="text-lg md:text-xl text-white/90 font-light max-w-sm leading-relaxed relative z-10 mb-8">
                  Un proceso probado en decenas de empresas que combina diagnóstico profundo, estrategia clara y ejecución impecable.
                </p>

                <div className="flex items-center gap-3 relative z-10">
                  {fases.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveStep(idx)}
                      className={`h-2.5 rounded-full transition-all duration-500 ${
                        activeStep === idx ? 'w-12 bg-white' : 'w-4 bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Columna Derecha: Fase actual animada */}
            <div className="md:col-span-7 relative h-[380px] md:h-[450px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFase.number}
                  initial={{ opacity: 0, y: 50, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -50, scale: 0.97 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full flex flex-col justify-center border-t-2 border-trebol/30 pt-8"
                >
                  <span className="text-8xl md:text-9xl font-black text-trebol leading-none mb-4 block">
                    {currentFase.number}.
                  </span>

                  <span className="text-xs font-bold uppercase tracking-widest text-trebol mb-2">
                    {currentFase.subtitle}
                  </span>

                  <h3 className="text-3xl md:text-5xl font-extrabold text-carbon tracking-tight mb-6">
                    {currentFase.title}
                  </h3>

                  <p className="text-xl md:text-2xl text-carbon/80 font-light leading-relaxed max-w-2xl mb-6">
                    {currentFase.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {currentFase.acciones.map((a) => (
                      <div key={a} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-trebol shrink-0 mt-2.5" />
                        <span className="text-sm text-carbon/70 font-light">{a}</span>
                      </div>
                    ))}
                  </div>


                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* ── PILARES DEL MÉTODO ────────────────────────── */}
      <section className="w-full bg-hueso py-28 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-carbon tracking-tighter leading-none mb-6">
              Por qué funciona <span className="text-trebol">nuestro método.</span>
            </h2>
            <p className="text-lg md:text-xl text-carbon/70 font-light leading-relaxed">
              No es teoría. Es un enfoque construido desde la práctica con empresas como la tuya.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icono: Target, titulo: 'Diagnóstico sin suposiciones', desc: 'No adivinamos. Medimos, entrevistamos y auditamos antes de recomendar cualquier acción.' }, { icono: Brain, titulo: 'Estrategia hecha a tu medida', desc: 'No vendemos plantillas. Cada plan está diseñado para tu industria, tu tamaño y tu momento.' }, { icono: Users, titulo: 'Ejecución con transferencia', desc: 'No creamos dependencia. Capacitamos a tu equipo para que sea autónomo desde el día uno.' }, { icono: BarChart3, titulo: 'Decisiones basadas en datos', desc: 'Cada peso invertido se justifica con métricas reales. Sin reportes inflados ni vanidad.' },
            ].map((p, idx) => {
              const Icono = p.icono;
              return (
                <motion.div
                  key={p.titulo}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className="bg-white rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgba(92,158,49,0.08)] border-2 border-trebol/40 hover:border-trebol hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-2xl bg-trebol/10 text-trebol flex items-center justify-center mb-8 border border-trebol/20">
                    <Icono size={28} />
                  </div>
                  <h3 className="text-2xl font-black text-carbon mb-4">{p.titulo}</h3>
                  <p className="text-carbon/70 text-sm leading-relaxed mb-6 font-light">{p.desc}</p>
                  <div className="flex gap-x-6 text-xs font-mono text-carbon/80 border-t border-neutral-100 pt-6">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-trebol shrink-0" />
                      <span>Resultados comprobados</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-trebol shrink-0" />
                      <span>Metodología validada</span>
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── POR QUÉ LÍDERES ──────────────────────────── */}
      <section className="w-full bg-white py-28 px-6 md:px-12 border-t border-neutral-200">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col border-t-2 border-trebol/30 pt-10 md:pt-14"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-trebol mb-4">
              Confianza empresarial
            </span>
            <h2 className="text-4xl md:text-7xl font-black text-carbon tracking-tighter leading-[0.9] mb-8 max-w-4xl">
              ¿Por qué las marcas líderes <br />
              <span className="text-trebol">eligen a Trébol Digital?</span>
            </h2>
            <p className="text-xl md:text-2xl text-carbon/80 font-light leading-relaxed max-w-3xl">
              Combinamos tecnología propia, copywriters expertos y análisis de datos en tiempo real para garantizar pauta con resultados comerciales comprobados.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────── */}
      <Contact />
    </main>
  );
}
