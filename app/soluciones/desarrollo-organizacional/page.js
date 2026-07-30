'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll } from 'framer-motion';
import { 
  ArrowUpRight, CheckCircle2, Activity, Check
} from 'lucide-react';
import OrgStructureCanvas from '@/components/OrgStructureCanvas';
import Contact from '@/components/Contact';

const raciItems = [
  {
    decision: 'Aprobación de Estrategia Anual & Presupuesto',
    r: 'Dirección General',
    a: 'Consejo / Fundadores',
    c: 'Gerencias de Área',
    i: 'Toda la Empresa',
  },
  {
    decision: 'Lanzamiento de Nuevos Productos o Servicios',
    r: 'Equipo de Producto & Marketing',
    a: 'Director Comercial',
    c: 'Atención al Cliente & Operaciones',
    i: 'Fuerza de Ventas',
  },
  {
    decision: 'Contratación & Evaluación de Desempeño',
    r: 'Líder Directo & RRHH',
    a: 'Gerente del Área',
    c: 'Equipo de Trabajo',
    i: 'Dirección General',
  },
  {
    decision: 'Expansión de Personal & Nuevas Plazas',
    r: 'Gerencia Solicitante & RRHH',
    a: 'Director de Finanzas & DG',
    c: 'Equipo Operativo',
    i: 'Toda la Organización',
  }
];

const sintomas = [
  { id: 1, texto: 'Sientes que creciste pero los procesos se quedaron obsoletos.', peso: 20 },
  { id: 2, texto: 'Existe confusión frecuente sobre quién debe tomar cada decisión.', peso: 20 },
  { id: 3, texto: 'Los proyectos sufren retrasos por falta de coordinación entre áreas.', peso: 20 },
  { id: 4, texto: 'Hay alta rotación de personal o desmotivación en el equipo.', peso: 20 },
  { id: 5, texto: 'Quieres delegar más pero sientes que perderás el control.', peso: 20 },
];

const consejos = {
  alto: 'Sigue así. Te ayudamos a mantener la claridad con una revisión trimestral de roles.',
  medio: 'Agenda una sesión de diagnóstico gratuita. Identificaremos las 3 fricciones más urgentes.',
  bajo: 'Tu empresa necesita una reestructura urgente. Podemos revertirlo en 8 semanas.',
};

const roadmapOrg = [
  { 
    paso: '01', 
    titulo: 'Diagnóstico & Salud Organizacional', 
    desc: 'Evaluamos la estructura actual, detectamos fricciones en la toma de decisiones y medimos la claridad de roles con los mandos medios.',
    entregable: 'Reporte de Diagnóstico Operativo & Fricción',
  },
  { 
    paso: '02', 
    titulo: 'Rediseño de Estructura & Matriz RACI', 
    desc: 'Clarificamos líneas de mando, eliminamos duplicidad de funciones y definimos la matriz RACI para cada decisión estratégica del negocio.',
    entregable: 'Organigrama Funcional & Manual RACI',
  },
  { 
    paso: '03', 
    titulo: 'Alineación de OKRs & SLAs Internos', 
    desc: 'Establecemos Objetivos y Resultados Clave (OKRs) para cada departamento y Acuerdos de Nivel de Servicio (SLAs) entre áreas.',
    entregable: 'Tablero de Control de OKRs & SLAs',
  },
  { 
    paso: '04', 
    titulo: 'Formación de Liderazgo & Acompañamiento', 
    desc: 'Capacitamos a los gerentes en delegación efectiva, comunicación transparente y cultura de rendición de cuentas (accountability).',
    entregable: 'Taller de Liderazgo & Mentoring Directivo',
  },
];

export default function DesarrolloOrgPage() {
  const [checkedSintomas, setCheckedSintomas] = useState([1, 3]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Ref para el scroll progresivo de la barra continua de Roadmap
  const roadmapRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: roadmapRef,
    offset: ["start 65%", "end 75%"]
  });

  const toggleSintoma = (id) => {
    setCheckedSintomas((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const calcularSalud = () => {
    const friccion = checkedSintomas.length * 20;
    return Math.max(0, 100 - friccion);
  };

  const saludScore = calcularSalud();

  return (
    <main className="w-full bg-hueso text-carbon min-h-screen overflow-hidden">
      {/* ── HERO EXACTO ESTILO HOME CON BADGE FLOTANTE & ANIMACIÓN DE LUZ (IMAGEN LIMPIA SIN TEXTOS) ── */}
      <section className="relative w-full flex flex-col items-center justify-start pt-36 md:pt-44 pb-20 px-4 md:px-12 bg-hueso overflow-hidden">
        
        {/* Animated Green Ambient Light Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <motion.div 
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.8, 0.6] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -left-40 w-[32rem] h-[32rem] bg-trebol/20 rounded-full blur-[110px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-20 right-0 w-[28rem] h-[28rem] bg-trebol/10 rounded-full blur-[90px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.75, 0.5] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            className="absolute -bottom-20 left-1/3 w-[35rem] h-[35rem] bg-trebol/15 rounded-full blur-[120px]"
          />
        </div>

        {/* Headline Container with Floating Glass Badge */}
        <div className="relative w-full max-w-[1400px] mx-auto text-center flex justify-center mb-16 md:mb-20 z-10">
          
          {/* Floating Glass Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -6 }}
            animate={{ opacity: 1, y: [0, -6, 0], rotate: -2 }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 0.8, delay: 0.2 },
              rotate: { duration: 0.8, delay: 0.2 }
            }}
            className="absolute -top-10 md:-top-12 lg:right-[12%] right-0 z-20"
          >
            <div className="bg-white/50 backdrop-blur-md px-6 py-3 border border-white/70 shadow-xl rounded-full text-sm md:text-lg text-carbon font-semibold">
              Estructura & Cultura Organizacional
            </div>
          </motion.div>

          {/* Massive Headline with Stagger Spring Animation */}
          <motion.h1 
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 90, damping: 14 }}
            className="text-5xl md:text-8xl lg:text-[8rem] font-black text-carbon leading-[0.85] tracking-tighter"
          >
            Desarrollo Organizacional <br />
            para Crecimiento <span className="text-trebol">Sostenible.</span>
          </motion.h1>
        </div>

        {/* Panoramic Hero Image Banner - 100% CLEAN WITHOUT TEXT OVERLAYS */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 16, delay: 0.3 }}
          whileHover={{ scale: 1.015 }}
          className="w-[95%] max-w-[1600px] h-[55vh] md:h-[65vh] min-h-[420px] relative rounded-3xl overflow-hidden shadow-2xl z-10 transition-shadow duration-500 hover:shadow-[0_30px_70px_rgba(92,158,49,0.15)]"
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=80"
            alt="Desarrollo Organizacional Trébol"
            className="w-full h-full object-cover object-center transition-transform duration-700"
          />
        </motion.div>
      </section>

      {/* ── SECCIÓN DINÁMICA: ORGANIGRAMA INTERACTIVO RACI ────────── */}
      <OrgStructureCanvas />

      {/* ── SECCIÓN ÚNICA 1: DIAGNÓSTICO INTERACTIVO DE SALUD OPERATIVA ─ */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-28 relative z-10 border-t border-carbon/10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-black text-carbon tracking-tighter">
            Evalúa la Salud de tu Empresa
          </h2>
          <p className="text-xl text-carbon/70 font-light max-w-2xl mx-auto mt-4">
            Selecciona los puntos de fricción actuales en tu negocio para calcular el índice de salud operativa en tiempo real.
          </p>
        </div>

        <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-neutral-200 shadow-xl">
          <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-start">
          {/* Diagnostic Quiz List */}
          <div className="md:col-span-7 space-y-1">
            {sintomas.map((s) => {
              const isChecked = checkedSintomas.includes(s.id);
              return (
                <button
                  key={s.id}
                  onClick={() => toggleSintoma(s.id)}
                  className={`w-full text-left flex items-center gap-4 py-4 transition-all duration-200 border-b border-neutral-100 last:border-b-0 ${
                    isChecked ? 'opacity-100' : 'opacity-60 hover:opacity-90'
                  }`}
                >
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-all duration-200 ${
                    isChecked ? 'bg-trebol border-trebol' : 'border-neutral-300'
                  }`}>
                    {isChecked && <CheckCircle2 size={12} className="text-white" />}
                  </div>
                  <span className={`text-sm md:text-base leading-relaxed flex-1 transition-colors duration-200 ${
                    isChecked ? 'text-carbon font-medium' : 'text-carbon/60'
                  }`}>
                    {s.texto}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Org Health Gauge Display Panel */}
          <div className="md:col-span-5">
            <div className="bg-hueso text-carbon rounded-2xl p-6 md:p-8 space-y-6">
              {/* Label */}
              <div className="flex items-center gap-2">
                <Activity size={14} className="text-trebol" />
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Salud Operativa
                </span>
              </div>

              {/* Metric */}
              <div>
                <div className="flex items-baseline gap-1">
                  <motion.span
                    key={saludScore}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-7xl md:text-8xl font-black text-carbon tracking-tighter"
                  >
                    {saludScore}
                  </motion.span>
                  <span className="text-2xl font-bold text-trebol">%</span>
                </div>
                <div className="mt-3 space-y-1.5">
                  <div className="flex justify-between text-[10px] font-mono text-neutral-300">
                    <span>0%</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full h-1.5 bg-neutral-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: saludScore >= 80 ? '#5C9E43' : saludScore >= 50 ? '#d97706' : '#ef4444' }}
                      initial={{ width: 0 }}
                      animate={{ width: `${saludScore}%` }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                    />
                  </div>
                  <motion.p
                    key={saludScore >= 80 ? 'alto' : saludScore >= 50 ? 'medio' : 'bajo'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-carbon/60 font-light leading-relaxed"
                  >
                    {saludScore >= 80 ? consejos.alto : saludScore >= 50 ? consejos.medio : consejos.bajo}
                  </motion.p>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6 border-t border-neutral-100">
                <p className="text-sm text-carbon/50 font-light mb-4 leading-relaxed">
                  ¿Listo para eliminar la fricción operativa y escalar tu organización con claridad?
                </p>
                <Link
                  href="/agenda"
                  className="inline-flex items-center justify-center gap-2 bg-carbon text-white hover:bg-trebol font-bold px-6 py-4 rounded-full transition-all duration-500 text-sm w-full shadow-lg"
                >
                  Solicitar Plan de Intervención
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* ── SECCIÓN ÚNICA 2: HOJA DE RUTA EN 4 PASOS ─────────────────── */}
      <section ref={roadmapRef} className="w-full bg-hueso py-24 px-6 md:px-12 relative z-10 border-t border-carbon/10">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-7xl font-black text-carbon tracking-tighter">
              Hoja de Ruta en <span className="text-trebol">4 Pasos.</span>
            </h2>
            <p className="text-xl text-carbon/70 font-light max-w-2xl mx-auto mt-4">
              Un proceso estructurado de 4 fases para estructurar la cultura y roles de tu empresa con claridad absoluta.
            </p>
          </div>

          {/* CONTENEDOR TIMELINE CON LÍNEA CONTINUA ÚNICA */}
          <div className="relative space-y-12">
            
            {/* LÍNEA VERTICAL CONTINUA */}
            <div className="absolute left-8 md:left-10 top-12 bottom-12 w-1.5 bg-carbon/15 -translate-x-1/2 rounded-full overflow-hidden z-0 pointer-events-none">
              <motion.div 
                style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
                className="w-full h-full bg-trebol rounded-full"
              />
            </div>

            {roadmapOrg.map((r) => (
              <div
                key={r.paso}
                className="flex items-start gap-6 md:gap-10 group relative z-10 opacity-100"
              >
                {/* COLUMNA 1: Círculos 100% Sólidos */}
                <div className="w-16 md:w-20 shrink-0 flex justify-center pt-8">
                  <motion.div 
                    initial={{ backgroundColor: '#2D2D2D', color: '#ffffff', borderColor: '#F5F5F5' }}
                    whileInView={{ 
                      backgroundColor: '#5C9E43', 
                      color: '#ffffff',
                      borderColor: '#F5F5F5',
                    }}
                    viewport={{ once: true, margin: "-25% 0px -25% 0px" }}
                    transition={{ duration: 0.4 }}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full border-4 text-white font-mono font-black text-xl md:text-2xl flex items-center justify-center shadow-md z-20 opacity-100 bg-[#2D2D2D]"
                  >
                    {r.paso}
                  </motion.div>
                </div>

                {/* COLUMNA 2: Tarjeta con efecto foco al centro */}
                <motion.div 
                  initial={{ 
                    opacity: 0.35,
                    backgroundColor: '#ffffff', 
                    borderColor: '#e5e5e5',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
                  }}
                  whileInView={{ 
                    opacity: 1,
                    backgroundColor: '#f2f8ed', 
                    borderColor: '#5C9E43',
                    boxShadow: '0 15px 40px rgba(92,158,49,0.14)',
                  }}
                  viewport={{ margin: "-22% 0px -22% 0px", amount: 0.6 }}
                  transition={{ duration: 0.4 }}
                  className="flex-1 border-2 rounded-[2.5rem] p-8 md:p-12 transition-all duration-400 relative overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 relative z-10">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest bg-trebol/10 text-trebol px-4 py-1.5 rounded-full border border-trebol/30">
                      Fase {r.paso}
                    </span>
                    
                    <div className="flex items-center gap-2 text-xs font-mono font-bold bg-white text-carbon/80 px-4 py-1.5 rounded-full border border-neutral-200 shadow-sm">
                      <Check size={14} className="text-trebol shrink-0" />
                      <span>Entregable: {r.entregable}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-4xl font-black text-carbon mb-4 tracking-tight">
                    {r.titulo}
                  </h3>

                  <p className="text-lg md:text-xl text-carbon/75 font-light leading-relaxed">
                    {r.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN ÚNICA 3: TABLA INTERACTIVA MATRIZ RACI ───────────── */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 relative z-10 border-t border-carbon/10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-black text-carbon tracking-tighter">
            Matriz RACI en la Práctica.
          </h2>
          <p className="text-xl text-carbon/70 font-light max-w-2xl mx-auto mt-4">
            Definimos exactamente quién es Responsable (R), Aprobador (A), Consultado (C) e Informado (I).
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-3 justify-center mb-12 text-xs font-mono">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-trebol/10 text-trebol font-bold border border-trebol/20">[R] Responsable</span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-carbon text-white font-bold">[A] Aprobador</span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100 text-carbon/60 font-bold border border-neutral-200">[C] Consultado</span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100 text-carbon/60 font-bold border border-neutral-200">[I] Informado</span>
        </div>

        <div className="max-w-4xl mx-auto space-y-3">
          {raciItems.map((item, idx) => (
            <motion.div
              key={item.decision}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white rounded-2xl border border-trebol/20 hover:border-trebol/60 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <div className="px-6 md:px-10 py-5 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div className="md:w-56 shrink-0">
                  <span className="text-[10px] font-mono font-bold text-trebol uppercase tracking-wider block mb-0.5">Decisión</span>
                  <h3 className="text-base md:text-lg font-bold text-carbon leading-tight">{item.decision}</h3>
                </div>
                <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                  <div className="bg-trebol/5 rounded-xl px-4 py-3 border border-trebol/15">
                    <span className="text-trebol font-black font-mono block text-[10px] uppercase tracking-wider mb-0.5">[R]</span>
                    <span className="text-carbon font-semibold font-sans text-sm block">{item.r}</span>
                  </div>
                  <div className="bg-carbon rounded-xl px-4 py-3">
                    <span className="text-trebol font-black font-mono block text-[10px] uppercase tracking-wider mb-0.5">[A]</span>
                    <span className="text-white font-semibold font-sans text-sm block">{item.a}</span>
                  </div>
                  <div className="bg-neutral-50 rounded-xl px-4 py-3 border border-neutral-200">
                    <span className="text-carbon/40 font-black font-mono block text-[10px] uppercase tracking-wider mb-0.5">[C]</span>
                    <span className="text-carbon font-semibold font-sans text-sm block">{item.c}</span>
                  </div>
                  <div className="bg-neutral-50 rounded-xl px-4 py-3 border border-neutral-200">
                    <span className="text-carbon/40 font-black font-mono block text-[10px] uppercase tracking-wider mb-0.5">[I]</span>
                    <span className="text-carbon font-semibold font-sans text-sm block">{item.i}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Contact CTA (mismo estilo que Home) ────────── */}
      <Contact />
    </main>
  );
}
