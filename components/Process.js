'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { CheckCircle2, ArrowRight, Cpu, Layers, BarChart3, Users } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    number: '01',
    title: 'Conocer',
    tagline: 'Diagnóstico & Análisis Estratégico',
    description: 'Analizamos a fondo tu empresa, mercado y clientes en una sesión estratégica. Evaluamos tu arquitectura digital actual e identificamos las oportunidades comerciales de mayor impacto.',
    tecnologias: ['Auditoría SEO & UX Editorial', 'Análisis B2B de Competencia', 'Diagnóstico de Prospección'],
    icon: Users,
    metrica: 'Diagnóstico 100% Personalizado'
  },
  {
    number: '02',
    title: 'Diseñar',
    tagline: 'Ruta de Acción Digital & Ecosistema',
    description: 'Trazamos tu hoja de ruta personalizada. Diseñamos la arquitectura de tu página web de alto rendimiento, la estrategia de contenidos en redes y el embudo de captación optimizado.',
    tecnologias: ['Wireframing & UI/UX Editorial', 'Estrategia de Pauta Multicanal', 'Arquitectura de Conversión (CRO)'],
    icon: Layers,
    metrica: 'Plan Integrado Priorizado'
  },
  {
    number: '03',
    title: 'Ejecutar',
    tagline: 'Desarrollo Nativo, IA & Coordinación de Redes',
    description: 'Trabajamos lado a lado. Desarrollamos tu sitio web en código nativo ultrarrápido, coordinamos tus redes sociales con pauta activa e integramos agentes de Inteligencia Artificial.',
    tecnologias: ['Desarrollo Nativo Next.js', 'Contenido Reels 9:16 & Pauta Meta/TikTok', 'Agentes & Chatbots de IA'],
    icon: Cpu,
    metrica: 'Despliegue & Operación En Vivo'
  },
  {
    number: '04',
    title: 'Medir & Capacitar',
    tagline: 'Optimización Diaria & Autonomía de Equipo',
    description: 'Medimos los resultados con datos reales. Ajustamos la pauta diariamente para maximizar el ROAS y capacitamos a tu equipo para que dominen todas las herramientas con autonomía total.',
    tecnologias: ['Dashboards en Tiempo Real', 'Optimización Diaria de ROAS', 'Talleres & Transferencia Técnica'],
    icon: BarChart3,
    metrica: 'Autonomía Total & Escalado'
  },
];

// Angulos base de las 4 hojas en SVG:
// Leaf 0: -135deg (Top-Left)
// Leaf 1: -45deg (Top-Right)
// Leaf 2: 45deg (Bottom-Right)
const leafAngles = [-135, -45, 45, 135];
const stepRotations = [180, 90, 0, -90];
const reverseStepRotations = [0, -90, -180, 90];

function HalfGiantTrebol({ activeStep, setActiveStep, stepsList = steps, reverse = false }) {
  const currentRotation = (reverse ? reverseStepRotations : stepRotations)[activeStep];

  return (
    <div className={`absolute top-1/2 -translate-y-1/2 w-[1050px] h-[1050px] hidden lg:flex items-center justify-center select-none overflow-visible pointer-events-auto z-0 ${reverse
        ? 'right-0 translate-x-1/2'
        : 'left-0 -translate-x-1/2'
      }`}>

      {/* Resplandor Verde Ambiental */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.35, 0.65, 0.35]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-trebol/35 rounded-full blur-[100px] pointer-events-none"
      />

      {/* Trébol SVG Gigante Anclado Rotativo Desktop */}
      <motion.div
        animate={{ rotate: currentRotation }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-full flex items-center justify-center overflow-visible transform-gpu"
      >
        <svg viewBox="0 0 500 500" className="w-full h-full overflow-visible drop-shadow-[0_25px_60px_rgba(0,0,0,0.12)]">
          <g transform="translate(250, 250)">

            {stepsList.map((_, i) => {
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
                  <path
                    d="M 0,0 C -35,-55 -65,-95 -65,-140 A 65,65 0 0,1 65,-140 C 65,-95 35,-55 0,0 Z"
                    fill={isActive ? "#84C638" : "#cbd2dc"}
                    stroke={isActive ? "#84C638" : "#cbd2dc"}
                    strokeWidth="18"
                    strokeLinejoin="round"
                    className="transition-colors duration-500"
                  />

                  <circle cx="0" cy="-140" r="48" fill="#FFFFFF" />
                  <circle
                    cx="0"
                    cy="-140"
                    r="37"
                    fill={isActive ? "#84C638" : "#d1d5db"}
                    className="transition-colors duration-500"
                  />

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
                      fontFamily="var(--font-manrope), sans-serif"
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

export default function Process({ customSteps, title = "Metodología", titleGreen = "Dinámica.", sectionId = "proceso", reverse = false }) {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  
  const stepsList = (customSteps && customSteps.length > 0 ? customSteps : steps).map((st, i) => ({
    number: st.number || `0${i + 1}`,
    title: st.title || steps[i % 4].title,
    tagline: st.tagline || steps[i % 4].tagline,
    description: st.description || st.desc || steps[i % 4].description,
    tecnologias: st.tecnologias || st.technologies || steps[i % 4].tecnologias || [],
    icon: st.icon || steps[i % 4].icon || Users,
    metrica: st.metrica || steps[i % 4].metrica || 'Entregable Personalizado',
  }));

  useGSAP(() => {
    if (!containerRef.current) return;

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    const hideHeader = () => {
      const header = document.querySelector('header');
      if (header) {
        header.style.setProperty('transform', 'translateY(-180%)', 'important');
        header.style.setProperty('opacity', '0', 'important');
        header.style.setProperty('pointer-events', 'none', 'important');
        header.style.setProperty('transition', 'transform 0.4s ease, opacity 0.4s ease', 'important');
      }
    };

    const showHeader = () => {
      const header = document.querySelector('header');
      if (header) {
        header.style.setProperty('transform', 'translateY(0)', 'important');
        header.style.setProperty('opacity', '1', 'important');
        header.style.setProperty('pointer-events', 'auto', 'important');
      }
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=350%',
        pin: true,
        pinSpacing: true,
        refreshPriority: -1,
        scrub: 0.5,
        invalidateOnRefresh: true,
        onToggle: (self) => {
          if (self.isActive) hideHeader();
          else showHeader();
        },
        onEnter: hideHeader,
        onLeave: showHeader,
        onEnterBack: hideHeader,
        onLeaveBack: showHeader,
        onUpdate: (self) => {
          if (self.isActive) hideHeader();
          const p = self.progress;
          if (p < 0.25) setActiveStep(0);
          else if (p < 0.50) setActiveStep(1);
          else if (p < 0.75) setActiveStep(2);
          else setActiveStep(3);
        }
      }
    });

    return () => {
      clearTimeout(timer);
      tl.kill();
      showHeader();
    };
  }, { scope: containerRef });

  const currentStep = stepsList[activeStep];
  const StepIcon = currentStep.icon;

  return (
    <div id={`${sectionId}-section-wrapper`} className="w-full relative z-10 border-none outline-none">
      <section
        id={sectionId}
        ref={containerRef}
        className={`relative w-full h-screen min-h-[550px] select-none overflow-visible flex flex-col justify-center z-20 border-none outline-none ${customSteps ? 'bg-transparent text-inherit' : 'bg-white text-carbon'}`}
      >
        {/* Luces Ambientales sobre Fondo Blanco */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute top-1/3 w-[40rem] h-[40rem] rounded-full blur-[140px] ${customSteps ? 'bg-current/10' : 'bg-trebol/20'} ${reverse ? 'right-1/4' : 'left-1/4'
              }`}
          />
        </div>

        {/* Trébol Gigante Anclado (Solo visible en PC >= 1024px) */}
        <HalfGiantTrebol activeStep={activeStep} setActiveStep={setActiveStep} stepsList={stepsList} reverse={reverse} />

        {/* ── 1. VISTA DESKTOP (100% ORIGINAL SINO QUE SOLO PARA >= 1024px) ── */}
        <div className={`hidden lg:flex w-full max-w-[1400px] mx-auto flex-col justify-center relative z-20 py-4 sm:py-6 md:py-8 ${reverse
          ? 'px-4 sm:px-8 md:pr-56 lg:pr-[380px] xl:pr-[440px] pl-4 md:pl-8'
          : 'px-4 sm:px-8 md:pl-56 lg:pl-[380px] xl:pl-[440px] pr-4 md:pr-8'
          }`}>

          {/* Encabezado del Título Original PC */}
          <div className="w-full mb-2 sm:mb-3 md:mb-4 shrink-0">
            <h2 className={`text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-tight ${customSteps ? 'text-inherit' : 'text-carbon'}`}>
              {title} <span className="text-trebol">{titleGreen}</span>
            </h2>
          </div>

          {/* Tarjeta Original PC con Detalles del Paso Actual */}
          <div className="w-full relative min-h-0 flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.number}
                initial={{ opacity: 0, y: 25, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -25, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full p-4 sm:p-5 md:p-6 lg:p-8 rounded-[2rem] backdrop-blur-xl relative overflow-hidden ${
                  customSteps
                    ? 'bg-current/10 border border-current/20 text-inherit shadow-2xl'
                    : 'bg-hueso/90 border border-neutral-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)]'
                }`}
              >
                {/* Resplandor decorativo de esquina */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-trebol/10 rounded-full blur-3xl pointer-events-none" />

                <div className={`flex items-center justify-between mb-2.5 sm:mb-3 md:mb-4 border-b pb-2.5 sm:pb-3 md:pb-4 ${customSteps ? 'border-current/15' : 'border-neutral-200'}`}>
                  <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4">
                    <span className="text-2xl sm:text-3xl md:text-5xl font-black text-trebol font-mono leading-none">
                      {currentStep.number}.
                    </span>
                    <div>
                      <h3 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-black tracking-tight ${customSteps ? 'text-inherit' : 'text-carbon'}`}>
                        {currentStep.title}
                      </h3>
                      <div className="text-[11px] sm:text-xs md:text-sm text-trebol font-mono font-semibold mt-0.5">
                        {currentStep.tagline}
                      </div>
                    </div>
                  </div>

                  <div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl bg-trebol/10 border border-trebol/30 flex items-center justify-center text-trebol shrink-0">
                    <StepIcon size={22} />
                  </div>
                </div>

                {/* Descripción del Paso */}
                <p className={`text-xs sm:text-sm md:text-base lg:text-lg font-light leading-relaxed mb-3 sm:mb-4 md:mb-5 ${customSteps ? 'opacity-90' : 'text-carbon/80'}`}>
                  {currentStep.description}
                </p>

                {/* Tecnologías & Entregables */}
                <div className="space-y-1.5 sm:space-y-2">
                  <div className={`text-[9px] sm:text-[11px] uppercase tracking-wider font-mono ${customSteps ? 'opacity-75' : 'text-carbon/60'}`}>
                    Tecnología & Entregables Clave:
                  </div>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2">
                    {(currentStep.tecnologias || []).map((tech, i) => (
                      <span
                        key={i}
                        className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full font-mono flex items-center gap-1 shadow-sm text-[10px] sm:text-xs ${
                          customSteps
                            ? 'bg-current/15 border border-current/20 text-inherit'
                            : 'bg-white border border-neutral-200 text-carbon'
                        }`}
                      >
                        <CheckCircle2 size={12} className="text-trebol shrink-0" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Métrica / Impacto */}
                <div className={`pt-2.5 sm:pt-3 border-t flex items-center justify-between mt-2.5 sm:mt-3 ${customSteps ? 'border-current/15' : 'border-neutral-200'}`}>
                  <span className={`text-[10px] sm:text-xs font-mono font-medium ${customSteps ? 'opacity-70' : 'text-carbon/60'}`}>Entregable:</span>
                  <span className="text-xs sm:text-sm text-trebol font-mono font-bold flex items-center gap-1.5">
                    {currentStep.metrica}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* ── 2. VISTA MÓVIL (& TABLET < 1024px) ── */}
        <div className="flex lg:hidden w-full px-4 sm:px-6 flex-col justify-center relative z-20 py-6">
          <div className="w-full mb-3 text-center">
            <h2 className={`text-2xl sm:text-3xl font-black tracking-tight ${customSteps ? 'text-inherit' : 'text-carbon'}`}>
              {title} <span className="text-trebol">{titleGreen}</span>
            </h2>
          </div>

          <div className="w-full mb-4 overflow-x-auto pb-2 scrollbar-none">
            <div className="flex items-center justify-center gap-2 min-w-max mx-auto">
              {stepsList.map((st, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`py-1.5 px-3.5 rounded-full font-mono font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                    activeStep === i
                      ? 'bg-trebol text-white shadow-sm'
                      : customSteps
                      ? 'bg-current/10 text-inherit opacity-70 hover:opacity-100'
                      : 'bg-transparent text-carbon/60 hover:text-carbon'
                  }`}
                >
                  Paso {st.number}
                </button>
              ))}
            </div>
          </div>

          {/* Detalles del Paso Móvil */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.number}
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={`w-full flex flex-col gap-4 p-6 rounded-3xl ${customSteps ? 'bg-current/10 border border-current/20 text-inherit' : ''}`}
            >
              <div className={`flex items-center justify-between border-b pb-3 ${customSteps ? 'border-current/15' : 'border-neutral-200/80'}`}>
                <div className="flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl font-black text-trebol font-mono leading-none">
                    {currentStep.number}.
                  </span>
                  <div>
                    <h3 className={`text-xl sm:text-2xl font-black tracking-tight ${customSteps ? 'text-inherit' : 'text-carbon'}`}>
                      {currentStep.title}
                    </h3>
                    <div className="text-xs sm:text-sm text-trebol font-mono font-semibold mt-0.5">
                      {currentStep.tagline}
                    </div>
                  </div>
                </div>

                <div className="w-10 h-10 rounded-2xl bg-trebol/10 border border-trebol/30 flex items-center justify-center text-trebol shrink-0">
                  <StepIcon size={22} />
                </div>
              </div>

              <p className={`text-sm sm:text-base font-normal leading-relaxed ${customSteps ? 'opacity-90' : 'text-carbon/85'}`}>
                {currentStep.description}
              </p>

              <div className="space-y-2">
                <div className={`text-xs uppercase tracking-wider font-mono font-bold ${customSteps ? 'opacity-75' : 'text-carbon/60'}`}>
                  Tecnología & Entregables Clave:
                </div>
                <div className="flex flex-wrap gap-2">
                  {(currentStep.tecnologias || []).map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1.5 rounded-full text-xs font-mono font-medium shadow-sm flex items-center gap-1.5 ${
                        customSteps
                          ? 'bg-current/15 border border-current/20 text-inherit'
                          : 'bg-neutral-100/90 border border-neutral-200 text-carbon'
                      }`}
                    >
                      <CheckCircle2 size={13} className="text-trebol shrink-0" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`pt-3 border-t flex items-center justify-between ${customSteps ? 'border-current/15' : 'border-neutral-200/80'}`}>
                <span className={`text-xs font-mono font-medium ${customSteps ? 'opacity-70' : 'text-carbon/60'}`}>Entregable:</span>
                <span className="text-sm text-trebol font-mono font-bold flex items-center gap-2">
                  {currentStep.metrica}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </section>
    </div>
  );
}
