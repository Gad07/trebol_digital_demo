'use client';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Cpu, Layers, BarChart3, Users } from 'lucide-react';

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

const leafAngles = [-135, -45, 45, 135];
const stepRotations = [180, 90, 0, -90];
const reverseStepRotations = [0, -90, -180, 90];

function RawHalfGiantTrebol({ stepIndex, reverse = false }) {
  const currentRotation = (reverse ? reverseStepRotations : stepRotations)[stepIndex];

  return (
    <div className={`absolute top-1/2 -translate-y-1/2 w-[650px] h-[650px] sm:w-[800px] sm:h-[800px] md:w-[920px] md:h-[920px] lg:w-[1020px] lg:h-[1020px] flex items-center justify-center select-none overflow-visible pointer-events-auto z-10 ${reverse ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
      }`}>

      {/* Resplandor Verde Ambiental */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.35, 0.65, 0.35]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-trebol/35 rounded-full blur-[120px] pointer-events-none"
      />

      {/* Trébol SVG Gigante Idéntico al del Home */}
      <div
        style={{ transform: `rotate(${currentRotation}deg)` }}
        className="relative w-full h-full flex items-center justify-center overflow-visible transform-gpu"
      >
        <svg viewBox="0 0 500 500" className="w-full h-full overflow-visible drop-shadow-[0_25px_60px_rgba(0,0,0,0.12)]">
          <g transform="translate(250, 250)">
            {steps.map((_, i) => {
              const isActive = stepIndex === i;
              const leafAngle = leafAngles[i];
              const textRotation = -(leafAngle + currentRotation);

              return (
                <g
                  key={i}
                  transform={`rotate(${leafAngle})`}
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

                  {/* Número activo únicamente en la hoja de la fase */}
                  {isActive && (
                    <text
                      x="0"
                      y="-130"
                      transform={`rotate(${textRotation} 0 -140)`}
                      textAnchor="middle"
                      fill="#FFFFFF"
                      fontSize="28"
                      fontWeight="bold"
                      fontFamily="monospace"
                    >
                      0{i + 1}
                    </text>
                  )}
                </g>
              );
            })}
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function FourStepStaticProcess() {
  return (
    <div className="w-full bg-white text-carbon select-none">

      {/* 4 SECCIONES ESTÁTICAS CON EL TRÉBOL GIGANTE SIN MARCO (TAL CUAL EL HOME PROCESS.JS) */}
      {steps.map((step, idx) => {
        const StepIcon = step.icon;
        const isReverse = idx % 2 === 1; // Fases 2 y 4 en reverse (Trébol a la derecha)

        return (
          <section
            key={step.number}
            id={`fase-${step.number}`}
            className="relative w-full min-h-[75vh] py-10 sm:py-16 md:py-20 bg-white text-carbon border-b border-carbon/10 select-none overflow-hidden flex items-center justify-center"
          >
            {/* Luces Ambientales de Fondo */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute top-1/3 w-[40rem] h-[40rem] bg-trebol/20 rounded-full blur-[140px] ${isReverse ? 'right-1/4' : 'left-1/4'
                  }`}
              />
            </div>

            {/* TRÉBOL SVG GIGANTE SIN MARCO ANCLADO AL BORDE DE PANTALLA */}
            <RawHalfGiantTrebol stepIndex={idx} reverse={isReverse} />

            {/* CONTENIDO PRINCIPAL EN TARJETA DEL HOME PROCESS.JS */}
            <div className={`w-full max-w-[1400px] mx-auto px-4 sm:px-8 relative z-20 ${isReverse
              ? 'md:pr-56 lg:pr-[380px] xl:pr-[440px] pl-4 md:pl-8'
              : 'md:pl-56 lg:pl-[380px] xl:pl-[440px] pr-4 md:pr-8'
              }`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full p-4 sm:p-5 md:p-6 lg:p-8 rounded-[2rem] bg-hueso/90 backdrop-blur-xl border border-neutral-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] relative overflow-hidden"
              >
                {/* Resplandor decorativo de esquina */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-trebol/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between mb-2.5 sm:mb-3 md:mb-4 border-b border-neutral-200 pb-2.5 sm:pb-3 md:pb-4">
                  <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4">
                    <span className="text-2xl sm:text-3xl md:text-5xl font-black text-trebol font-mono leading-none">
                      {step.number}.
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black tracking-tight text-carbon">
                        {step.title}
                      </h3>
                      <div className="text-[11px] sm:text-xs md:text-sm text-trebol font-mono font-semibold mt-0.5">
                        {step.tagline}
                      </div>
                    </div>
                  </div>

                  <div className="w-9 h-9 md:w-11 md:h-11 rounded-xl bg-trebol/10 border border-trebol/30 flex items-center justify-center text-trebol shrink-0 hidden sm:flex">
                    <StepIcon size={22} />
                  </div>
                </div>

                {/* Descripción del Paso */}
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-carbon/80 font-light leading-relaxed mb-3 sm:mb-4 md:mb-5 font-sans">
                  {step.description}
                </p>

                {/* Tecnologías & Entregables */}
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="text-[10px] sm:text-[11px] uppercase tracking-wider font-mono text-carbon/60">
                    Tecnología & Entregables Clave:
                  </div>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2">
                    {step.tecnologias.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-white border border-neutral-200 text-[10px] sm:text-xs text-carbon font-mono flex items-center gap-1 shadow-sm"
                      >
                        <CheckCircle2 size={12} className="text-trebol" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pie con resultado de etapa */}
                <div className="mt-3 sm:mt-4 md:mt-5 pt-2.5 sm:pt-3 md:pt-4 border-t border-neutral-200 flex items-center justify-between text-[11px] sm:text-xs font-mono text-carbon/60">
                  <span>Resultado de Etapa</span>
                  <span className="text-trebol font-bold flex items-center gap-1.5">
                    {step.metrica}
                    <ArrowRight size={13} />
                  </span>
                </div>

              </motion.div>
            </div>
          </section>
        );
      })}

    </div>
  );
}
