'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, Cpu, Layers, BarChart3, Users } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Conocer',
    tagline: 'Diagnóstico & Análisis Estratégico',
    description: 'Analizamos a fondo tu empresa, mercado y clientes en una sesión estratégica. Evaluamos tu arquitectura digital actual e identificamos las oportunidades comerciales de mayor impacto.',
    tecnologias: ['Auditoría SEO & UX Editorial', 'Análisis B2B de Competencia', 'Diagnóstico de Prospección'],
    icon: Users,
    metrica: 'Diagnóstico 100% Personalizado',
  },
  {
    number: '02',
    title: 'Diseñar',
    tagline: 'Ruta de Acción Digital & Ecosistema',
    description: 'Trazamos tu hoja de ruta personalizada. Diseñamos la arquitectura de tu página web de alto rendimiento, la estrategia de contenidos en redes y el embudo de captación optimizado.',
    tecnologias: ['Wireframing & UI/UX Editorial', 'Estrategia de Pauta Multicanal', 'Arquitectura de Conversión (CRO)'],
    icon: Layers,
    metrica: 'Plan Integrado Priorizado',
  },
  {
    number: '03',
    title: 'Ejecutar',
    tagline: 'Desarrollo Nativo, IA & Coordinación de Redes',
    description: 'Trabajamos lado a lado. Desarrollamos tu sitio web en código nativo ultrarrápido, coordinamos tus redes sociales con pauta activa e integramos agentes de Inteligencia Artificial.',
    tecnologias: ['Desarrollo Nativo Next.js', 'Contenido Reels 9:16 & Pauta Meta/TikTok', 'Agentes & Chatbots de IA'],
    icon: Cpu,
    metrica: 'Despliegue & Operación En Vivo',
  },
  {
    number: '04',
    title: 'Medir & Capacitar',
    tagline: 'Optimización Diaria & Autonomía de Equipo',
    description: 'Medimos los resultados con datos reales. Ajustamos la pauta diariamente para maximizar el ROAS y capacitamos a tu equipo para que dominen todas las herramientas con autonomía total.',
    tecnologias: ['Dashboards en Tiempo Real', 'Optimización Diaria de ROAS', 'Talleres & Transferencia Técnica'],
    icon: BarChart3,
    metrica: 'Autonomía Total & Escalado',
  },
];

const leafAngles = [-135, -45, 45, 135];
const stepRotations = [180, 90, 0, -90];

function TrebolSVG({ activeIndex }) {
  const rotation = stepRotations[activeIndex];

  return (
    <div className="relative w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] md:w-[520px] md:h-[520px] flex items-center justify-center select-none shrink-0 mx-auto">
      {/* Ambient glow */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 bg-trebol/25 rounded-full blur-[100px] pointer-events-none"
      />

      <motion.div
        animate={{ rotate: rotation }}
        transition={{ type: 'spring', stiffness: 60, damping: 18 }}
        className="relative w-full h-full"
      >
        <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.10)]">
          <g transform="translate(250, 250)">
            {steps.map((_, i) => {
              const isActive = activeIndex === i;
              const leafAngle = leafAngles[i];
              const textRotation = -(leafAngle + rotation);
              return (
                <g key={i} transform={`rotate(${leafAngle})`}>
                  <motion.path
                    d="M 0,0 C -35,-55 -65,-95 -65,-140 A 65,65 0 0,1 65,-140 C 65,-95 35,-55 0,0 Z"
                    animate={{
                      fill: isActive ? '#84C638' : '#cbd2dc',
                      stroke: isActive ? '#84C638' : '#cbd2dc',
                    }}
                    transition={{ duration: 0.5 }}
                    strokeWidth="18"
                    strokeLinejoin="round"
                  />
                  <circle cx="0" cy="-140" r="48" fill="#FFFFFF" />
                  <motion.circle
                    cx="0"
                    cy="-140"
                    r="37"
                    animate={{ fill: isActive ? '#84C638' : '#d1d5db' }}
                    transition={{ duration: 0.5 }}
                  />
                  {isActive && (
                    <text
                      x="0"
                      y="-130"
                      transform={`rotate(${textRotation} 0 -140)`}
                      textAnchor="middle"
                      fill="#FFFFFF"
                      fontSize="28"
                      fontWeight="bold"
                      fontFamily="var(--font-manrope), sans-serif"
                    >
                      0{i + 1}
                    </text>
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

export default function FourStepStaticProcess() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-cycle every 4s
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % steps.length), 4000);
    return () => clearTimeout(t);
  }, [active, paused]);

  const step = steps[active];
  const StepIcon = step.icon;

  return (
    <section className="relative w-full bg-white text-carbon border-t border-carbon/10 overflow-hidden py-20 md:py-28">

      {/* Ambient bg glow */}
      <motion.div
        animate={{ opacity: [0.1, 0.22, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-trebol/15 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Section header */}
        <div className="mb-14 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <span className="text-[11px] font-mono text-trebol font-black uppercase tracking-[0.2em] block mb-3">
              ✦ Metodología Trébol
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-carbon tracking-tighter leading-[0.92]">
              Cómo <span className="text-trebol">trabajamos.</span>
            </h2>
          </div>

          {/* Step tabs */}
          <div className="flex gap-2">
            {steps.map((s, i) => (
              <button
                key={i}
                onClick={() => { setActive(i); setPaused(true); }}
                className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                  active === i
                    ? 'bg-trebol text-white shadow-md'
                    : 'bg-carbon/5 text-carbon/50 hover:bg-carbon/10'
                }`}
              >
                {s.number}
              </button>
            ))}
          </div>
        </div>

        {/* Main content: Trebol + Card */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left — Trébol SVG */}
          <div
            className="shrink-0 cursor-pointer"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <TrebolSVG activeIndex={active} />
          </div>

          {/* Right — Step content card */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="w-full p-6 md:p-10 rounded-[2rem] bg-hueso/90 backdrop-blur-xl border border-neutral-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] relative overflow-hidden"
              >
                {/* Corner glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-trebol/10 rounded-full blur-3xl pointer-events-none" />

                {/* Header row */}
                <div className="flex items-center justify-between mb-5 border-b border-neutral-200 pb-5">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl md:text-5xl font-black text-trebol font-mono leading-none">
                      {step.number}.
                    </span>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black tracking-tight text-carbon">{step.title}</h3>
                      <p className="text-xs text-trebol font-mono font-semibold mt-0.5">{step.tagline}</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-trebol/10 border border-trebol/30 flex items-center justify-center text-trebol shrink-0">
                    <StepIcon size={24} />
                  </div>
                </div>

                {/* Description */}
                <p className="text-base md:text-lg text-carbon/80 font-light leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Tags */}
                <div className="mb-2 text-[10px] uppercase tracking-wider font-mono text-carbon/50 mb-2">
                  Tecnología & Entregables Clave:
                </div>
                <div className="flex flex-wrap gap-2">
                  {step.tecnologias.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-full bg-white border border-neutral-200 text-xs text-carbon font-mono flex items-center gap-1.5 shadow-sm"
                    >
                      <CheckCircle2 size={12} className="text-trebol" />
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center justify-between text-xs font-mono text-carbon/50">
                  <span>Resultado de Etapa</span>
                  <span className="text-trebol font-bold flex items-center gap-1.5">
                    {step.metrica}
                    <ArrowRight size={13} />
                  </span>
                </div>

                {/* Progress bar */}
                <div className="mt-4 h-0.5 bg-carbon/10 rounded-full overflow-hidden">
                  <motion.div
                    key={active}
                    className="h-full bg-trebol rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: paused ? `${((active + 1) / 4) * 100}%` : '100%' }}
                    transition={{ duration: paused ? 0.3 : 4, ease: 'linear' }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <div className="flex items-center gap-3 mt-5 justify-end">
              <button
                onClick={() => { setActive((a) => (a - 1 + 4) % 4); setPaused(true); }}
                className="w-10 h-10 rounded-full border border-carbon/20 flex items-center justify-center hover:border-trebol hover:text-trebol transition-all cursor-pointer text-carbon/50"
              >
                ←
              </button>
              <button
                onClick={() => { setActive((a) => (a + 1) % 4); setPaused(true); }}
                className="w-10 h-10 rounded-full bg-carbon text-white flex items-center justify-center hover:bg-trebol transition-all cursor-pointer"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
