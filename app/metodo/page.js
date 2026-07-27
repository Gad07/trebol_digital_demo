'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const fases = [
  {
    number: '01',
    title: 'Conocer.',
    subtitle: 'Diagnóstico & Entendimiento',
    description: 'Analizamos tu negocio, tu mercado y tus clientes. Entendemos tus objetivos reales antes de proponer cualquier solución.',
    acciones: [
      'Entrevista profunda con fundadores y equipo clave',
      'Auditoría de presencia digital y procesos',
      'Análisis de competencia y benchmarks del sector',
      'Identificación de oportunidades prioritarias',
    ],
    top: 'top-[15vh]',
  },
  {
    number: '02',
    title: 'Diseñar.',
    subtitle: 'Estrategia & Hoja de Ruta',
    description: 'Trazamos tu ruta de acción digital con una estrategia clara, priorizada y adaptada inteligentemente a tu presupuesto.',
    acciones: [
      'Plan estratégico a 90 días con hitos claros',
      'Selección de herramientas y canales prioritarios',
      'Definición de métricas clave (KPIs)',
      'Asignación de responsabilidades',
    ],
    top: 'top-[20vh]',
  },
  {
    number: '03',
    title: 'Ejecutar.',
    subtitle: 'Implementación Acompañada',
    description: 'Trabajamos lado a lado. Te capacitamos mientras implementamos, garantizando que tu equipo no dependa de nosotros.',
    acciones: [
      'Implementación de herramientas y automatizaciones',
      'Producción de contenido y activaciones',
      'Capacitación del equipo en el proceso',
      'Reuniones semanales de seguimiento',
    ],
    top: 'top-[25vh]',
  },
  {
    number: '04',
    title: 'Medir.',
    subtitle: 'Optimización Continua',
    description: 'Revisamos los resultados con datos reales y crudos. Ajustamos la estrategia milimétricamente y escalamos lo que funciona.',
    acciones: [
      'Reportes mensuales con análisis de datos',
      'Pruebas A/B y experimentación continua',
      'Actualización de estrategia según resultados',
      'Escalabilidad planificada de lo que funciona',
    ],
    top: 'top-[30vh]',
  },
];

export default function MetodoPage() {
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
            Nuestro Método
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-6xl md:text-8xl lg:text-[8rem] font-black text-carbon leading-[0.85] tracking-tighter mb-8"
          >
            El Método <br />
            <span className="text-trebol">Trébol.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-carbon/70 font-light max-w-2xl leading-relaxed mb-10"
          >
            No improvisamos. Tenemos un proceso probado en decenas de empresas que combina diagnóstico profundo, estrategia clara y ejecución impecable.
          </motion.p>
        </div>
      </section>

      {/* ── Stacking Cards (V1 Style Process) ───────── */}
      <section className="w-full py-20 px-4 md:px-12 bg-carbon relative text-hueso">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-24 text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-[7rem] font-black tracking-tighter leading-[0.9]"
            >
              Metodología <br className="hidden md:block" />
              <span className="text-trebol">Dinámica.</span>
            </motion.h2>
          </div>

          <div className="flex flex-col relative pb-32">
            {fases.map((step, idx) => (
              <div
                key={idx}
                className={`sticky ${step.top} w-full min-h-[50vh] bg-[#2d2d2d]/90 backdrop-blur-2xl border border-white/10 text-hueso rounded-[3rem] shadow-[0_-8px_32px_rgba(0,0,0,0.5)] p-8 md:p-14 mb-10 transition-transform origin-top overflow-hidden flex items-center`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 w-full relative z-10">
                  <div className="md:col-span-5 flex flex-col justify-center">
                    <span className="text-7xl md:text-[8rem] font-black text-trebol leading-none mb-2">
                      {step.number}
                    </span>
                    <p className="text-xs font-bold uppercase tracking-widest text-trebol mb-1">{step.subtitle}</p>
                    <h3 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                      {step.title}
                    </h3>
                  </div>

                  <div className="md:col-span-7 flex flex-col justify-center gap-6">
                    <p className="text-xl md:text-2xl text-hueso/90 font-light leading-relaxed">
                      {step.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10">
                      {step.acciones.map((a) => (
                        <div key={a} className="flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-trebol shrink-0" />
                          <span className="text-sm text-hueso/70 font-light">{a}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="w-full bg-hueso py-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-white/50 backdrop-blur-2xl border border-white/60 rounded-[3rem] p-10 md:p-16 shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
            <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
              <div className="flex-1">
                <h2 className="text-4xl md:text-6xl font-black text-carbon tracking-tighter leading-[0.9] mb-6">
                  ¿Listo para comenzar <br />
                  <span className="text-trebol">el proceso?</span>
                </h2>
                <p className="text-xl text-carbon/70 font-light leading-relaxed max-w-lg">
                  El primer paso es una sesión gratuita de 30 minutos donde analizamos tu negocio y te damos claridad sobre por dónde empezar.
                </p>
              </div>
              <Link
                href="/agenda"
                className="inline-flex items-center gap-2 bg-carbon text-hueso font-bold px-10 py-5 rounded-full hover:bg-trebol transition-colors duration-500 text-xl shrink-0"
              >
                Agendar mi sesión gratuita
                <ArrowUpRight size={22} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
