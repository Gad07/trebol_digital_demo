'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, Cpu, Layers, BarChart3, Users } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Conocer',
    tagline: 'Diagnóstico & Entendimiento',
    description: 'Analizamos a fondo tu negocio, tu mercado y tus clientes. Entendemos tus objetivos reales antes de proponer cualquier solución.',
    tecnologias: ['Entrevista profunda con fundadores', 'Auditoría de presencia digital & UX', 'Análisis de competencia', 'Oportunidades prioritarias'],
    icon: Users,
    metrica: 'Diagnóstico 100% Personalizado'
  },
  {
    number: '02',
    title: 'Diseñar',
    tagline: 'Estrategia & Hoja de Ruta',
    description: 'Trazamos tu ruta de acción digital con una estrategia clara, priorizada y adaptada inteligentemente a tu presupuesto.',
    tecnologias: ['Plan estratégico a 90 días con hitos', 'Selección de canales prioritarios', 'Definición de KPIs clave', 'Asignación de ownership'],
    icon: Layers,
    metrica: 'Plan Integrado Priorizado'
  },
  {
    number: '03',
    title: 'Ejecutar',
    tagline: 'Implementación Acompañada',
    description: 'Trabajamos lado a lado. Te capacitamos mientras implementamos, garantizando que tu equipo no dependa de nosotros.',
    tecnologias: ['Herramientas & automatizaciones', 'Producción de contenido digital', 'Capacitación al equipo', 'Reuniones semanales'],
    icon: Cpu,
    metrica: 'Implementación Activa'
  },
  {
    number: '04',
    title: 'Medir',
    tagline: 'Optimización Continua',
    description: 'Revisamos los resultados con datos reales y crudos. Ajustamos la estrategia milimétricamente y escalamos lo que funciona.',
    tecnologias: ['Reportes mensuales de datos reales', 'Pruebas A/B y experimentación', 'Actualización de estrategia', 'Escalabilidad planificada'],
    icon: BarChart3,
    metrica: 'Optimización & Escalado'
  },
];

const leafAngles = [-135, -45, 45, 135];
const stepRotations = [180, 90, 0, -90];

function StickyHalfGiantTrebol({ activeStep, setActiveStep }) {
  const currentRotation = stepRotations[activeStep];

  return (
    <div className="w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] md:w-[750px] md:h-[750px] flex items-center justify-center select-none overflow-visible pointer-events-auto relative">
      
      {/* Resplandor Verde Ambiental */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.65, 0.35]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-trebol/30 rounded-full blur-[100px] pointer-events-none"
      />

      {/* Trébol SVG Gigante Rotativo */}
      <motion.div
        animate={{ rotate: currentRotation }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-full flex items-center justify-center overflow-visible transform-gpu"
      >
        <svg viewBox="0 0 500 500" className="w-full h-full overflow-visible drop-shadow-[0_25px_60px_rgba(0,0,0,0.12)]">
          <g transform="translate(250, 250)">
            {steps.map((_, i) => {
              const isActive = activeStep === i;
              const leafAngle = leafAngles[i];
              const textRotation = -(leafAngle + currentRotation);

              return (
                <g
                  key={i}
                  transform={`rotate(${leafAngle})`}
                  onClick={() => setActiveStep(i)}
                  className="cursor-pointer group"
                >
                  {/* Pétalo de la Hoja */}
                  <path
                    d="M 0,0 C -35,-55 -65,-95 -65,-140 A 65,65 0 0,1 65,-140 C 65,-95 35,-55 0,0 Z"
                    fill={isActive ? "#84C638" : "#cbd2dc"}
                    stroke={isActive ? "#84C638" : "#cbd2dc"}
                    strokeWidth="18"
                    strokeLinejoin="round"
                    className="transition-colors duration-500"
                  />

                  {/* Círculos en la Cabeza de la Hoja */}
                  <circle cx="0" cy="-140" r="48" fill="#FFFFFF" />
                  <circle
                    cx="0"
                    cy="-140"
                    r="37"
                    fill={isActive ? "#84C638" : "#d1d5db"}
                    className="transition-colors duration-500"
                  />

                  {/* Número activo */}
                  {isActive && (
                    <motion.text
                      x="0"
                      y="-130"
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1, rotate: textRotation }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      transformOrigin="0 -140"
                      textAnchor="middle"
                      fill="#FFFFFF"
                      fontSize="28"
                      fontWeight="bold"
                      fontFamily="monospace"
                    >
                      0{i + 1}
                    </motion.text>
                  )}
                </g>
              );
            })}
          </g>
        </svg>
      </motion.div>
    </div>
  );
}

export default function StaticTrebolProcess() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="w-full bg-hueso text-carbon py-24 md:py-32 px-6 md:px-12 relative overflow-hidden select-none">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono text-trebol font-bold uppercase tracking-widest bg-trebol/10 border border-trebol/20 px-4 py-1.5 rounded-full inline-block">
            METODOLOGÍA PROBADA
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-carbon tracking-tighter leading-[0.95]">
            Las 4 Fases <span className="text-trebol">del Método.</span>
          </h2>
          <p className="text-lg md:text-xl text-carbon/70 font-light max-w-2xl mx-auto mt-4 leading-relaxed font-sans">
            Un proceso estructurado de 4 fases que combina diagnóstico profundo, estrategia clara y ejecución impecable.
          </p>
        </div>

        {/* CONTAINER CON COLUMNA IZQUIERDA PEGAJOSA Y 4 SECCIONES ESTÁTICAS A LA DERECHA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">
          
          {/* COLUMNA IZQUIERDA: TRÉBOL PEGAJOSO SIN BLOQUEO DE SCROLL */}
          <div className="lg:col-span-5 sticky top-28 flex flex-col items-center justify-center z-20">
            <StickyHalfGiantTrebol activeStep={activeStep} setActiveStep={setActiveStep} />
            
            {/* Step Indicators Bar */}
            <div className="flex items-center gap-3 mt-6">
              {steps.map((s, idx) => (
                <button
                  key={s.number}
                  onClick={() => setActiveStep(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeStep === idx ? 'w-10 bg-trebol' : 'w-3 bg-neutral-300 hover:bg-neutral-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* COLUMNA DERECHA: 4 SECCIONES/TARJETAS APILADAS VERTICALMENTE */}
          <div className="lg:col-span-7 space-y-16 lg:space-y-24 relative z-10">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              const isActive = activeStep === idx;

              return (
                <motion.div
                  key={step.number}
                  onViewportEnter={() => setActiveStep(idx)}
                  viewport={{ amount: 0.6 }}
                  className={`p-8 md:p-12 rounded-[3rem] border-2 transition-all duration-500 relative overflow-hidden ${
                    isActive
                      ? 'bg-white border-trebol shadow-[0_20px_60px_rgba(92,158,49,0.15)] ring-2 ring-trebol/20 scale-102'
                      : 'bg-white/70 border-neutral-200/80 shadow-md opacity-80 hover:opacity-100 hover:border-trebol/40'
                  }`}
                >
                  {/* Subtle Background Glow */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-trebol/10 rounded-full blur-3xl pointer-events-none" />

                  <div className="flex items-center justify-between mb-6 pb-6 border-b border-neutral-100">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl md:text-7xl font-black text-trebol font-mono leading-none">
                        {step.number}.
                      </span>
                      <div>
                        <h3 className="text-2xl md:text-4xl font-black text-carbon tracking-tight">
                          {step.title}
                        </h3>
                        <div className="text-xs md:text-sm text-trebol font-mono font-semibold mt-1">
                          {step.tagline}
                        </div>
                      </div>
                    </div>

                    <div className="w-14 h-14 rounded-2xl bg-trebol/10 border border-trebol/20 text-trebol flex items-center justify-center shrink-0">
                      <StepIcon size={26} />
                    </div>
                  </div>

                  <p className="text-base md:text-xl text-carbon/80 font-light leading-relaxed mb-8 font-sans">
                    {step.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-carbon/50">
                      Entregables & Acciones Clave:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {step.tecnologias.map((tech, i) => (
                        <div key={i} className="flex items-center gap-2.5 p-3 rounded-2xl bg-trebol/5 border border-trebol/15 text-xs md:text-sm text-carbon font-medium">
                          <CheckCircle2 size={16} className="text-trebol shrink-0" />
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-carbon/60">
                    <span>Resultado de Etapa</span>
                    <span className="text-trebol font-bold flex items-center gap-1.5 bg-trebol/10 border border-trebol/20 px-4 py-1.5 rounded-full">
                      {step.metrica}
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
