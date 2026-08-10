'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll } from 'framer-motion';
import Process from '@/components/Process';
import { 
  ArrowUpRight, CheckCircle2, Activity, Check, UserPlus, GitMerge, Rocket, Sparkles, Layers, Users, Cpu, BarChart3
} from 'lucide-react';
import OrgStructureCanvas from '@/components/OrgStructureCanvas';
import Contact from '@/components/Contact';

const raciItems = [
  {
    decision: 'Alineación de Metas de Ventas & Captación Marketing',
    r: 'Dirección Comercial & Marketing',
    a: 'Dirección General',
    c: 'Equipo de IT / Sistemas',
    i: 'Toda la Empresa',
  },
  {
    decision: 'Implementación de Plataformas & CRM para Ventas',
    r: 'Equipo de IT & Sistemas',
    a: 'Director Comercial',
    c: 'Equipo de Marketing & Ventas',
    i: 'Operaciones',
  },
  {
    decision: 'Automatización de Embudos & Calificación de Leads',
    r: 'Marketing & IT',
    a: 'Gerente de Ventas',
    c: 'Fuerza Comercial',
    i: 'Dirección General',
  },
  {
    decision: 'Medición de KPIs Comerciales & Dashboard BI',
    r: 'Equipo de IT / Analítica',
    a: 'Dirección Comercial & Marketing',
    c: 'Líderes de Área',
    i: 'Toda la Organización',
  }
];

const sintomas = [
  { id: 1, texto: 'Falta de alineación entre las campañas de Marketing y las metas de Ventas.', peso: 20 },
  { id: 2, texto: 'El equipo de IT no cuenta con prioridad clara para respaldar procesos comerciales.', peso: 20 },
  { id: 3, texto: 'Fricción en el traspaso de prospectos desde Marketing hacia los ejecutivos de Ventas.', peso: 20 },
  { id: 4, texto: 'Sistemas tecnológicos y CRM desactualizados que alentan el cierre de ventas.', peso: 20 },
  { id: 5, texto: 'Métricas dispersas sin una visión unificada entre Ventas, Marketing e IT.', peso: 20 },
];

const consejos = {
  alto: 'Excelente alineación. Te ayudamos a mantener el ritmo con revisiones trimestrales de KPIs.',
  medio: 'Agenda un diagnóstico gratuito. Identificaremos las 3 principales fricciones entre Mkt, Sales e IT.',
  bajo: 'Tus áreas comerciales e IT necesitan alineación urgente. Podemos sincronizarlas en 8 semanas.',
};

const roadmapOrgSteps = [
  { 
    number: '01', 
    title: 'Diagnóstico & Salud', 
    tagline: 'Alineación Ventas, Mkt & IT',
    description: 'Auditamos la interacción entre tus equipos comerciales, campañas de captación y herramientas de IT para detectar cuellos de botella.',
    tecnologias: ['Reporte de Fricción Comercial', 'Auditoría de Sistemas IT', 'Análisis de Embudo Mkt-Sales'],
    icon: Users,
    metrica: 'Diagnóstico 100% Personalizado'
  },
  { 
    number: '02', 
    title: 'Matriz RACI & Roles', 
    tagline: 'Definición de Responsabilidades',
    description: 'Definimos roles precisos para cada etapa de la jornada del cliente, eliminando silencios y duplicidad entre Ventas, Marketing e IT.',
    tecnologias: ['Manual RACI Interdepartamental', 'Mapa de Procesos', 'Organigrama Funcional'],
    icon: Layers,
    metrica: 'Manual RACI Completo'
  },
  { 
    number: '03', 
    title: 'Alineación CRM & IT', 
    tagline: 'Sincronización de Herramientas',
    description: 'Sincronizamos tus plataformas tecnológicas para que IT proporcione las herramientas óptimas que potencien a Marketing y Ventas.',
    tecnologias: ['Integración de CRM Nativo', 'Flujos Automatizados', 'Tableros de Prospección'],
    icon: Cpu,
    metrica: 'Integración Tecnológica Activa'
  },
  { 
    number: '04', 
    title: 'KPIs & Capacitación', 
    tagline: 'Medición Unificada & Autonomía',
    description: 'Formamos a los líderes de cada área en cultura de colaboración y configuramos tableros unificados de control de ingresos.',
    tecnologias: ['Dashboard de KPIs Unificados', 'Mentoring Directivo', 'Talleres de Liderazgo'],
    icon: BarChart3,
    metrica: 'Autonomía & Crecimiento Medible'
  },
];

export default function DesarrolloOrgPage() {
  const [checkedSintomas, setCheckedSintomas] = useState([1, 3]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              Alineación Estratégica: Ventas, Marketing & IT
            </div>
          </motion.div>

          {/* Massive Headline with Stagger Spring Animation */}
          <motion.h1 
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 90, damping: 14 }}
            className="text-5xl md:text-8xl lg:text-[7.5rem] font-black text-carbon leading-[0.95] md:leading-[0.9] tracking-tighter"
          >
            Estructura tu Empresa <br className="hidden md:block" />
            para <span className="text-trebol">Crecer sin Caos.</span>
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

      {/* ── SECCIÓN 2: HOJA DE RUTA EN 4 PASOS CON ANIMACIÓN DEL TRÉBOL GIGANTE ── */}
      <Process 
        customSteps={roadmapOrgSteps}
        title="Hoja de Ruta en"
        titleGreen="4 Pasos."
        sectionId="roadmap-org"
      />

      {/* ── SECCIÓN ÚNICA 3: CREACIÓN VS ESTRUCTURACIÓN DE EQUIPOS ───────────── */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32 relative z-10 border-t border-carbon/10">
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono text-trebol font-bold uppercase tracking-widest bg-trebol/10 border border-trebol/20 px-4 py-1.5 rounded-full inline-block">
            DOS ESCENARIOS, UNA SOLUCIÓN
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-carbon tracking-tighter leading-[0.95]">
            Creación desde Cero <br />
            o <span className="text-trebol">Estructuración de Equipos.</span>
          </h2>
          <p className="text-lg md:text-xl text-carbon/70 font-light max-w-2xl mx-auto mt-4 leading-relaxed font-sans">
            Alineamos tu modelo organizativo a la etapa exacta de tus áreas de Ventas, Marketing e IT.
          </p>
        </div>

        {/* CONTENEDOR DE DOS TARJETAS DE ALTO IMPACTO (CREACIÓN VS ESTRUCTURACIÓN) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* TARJETA 1: CREACIÓN DESDE CERO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 md:p-12 rounded-[3rem] bg-white border border-neutral-200 shadow-xl relative overflow-hidden flex flex-col justify-between"
          >
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <span className="px-4 py-1.5 rounded-full bg-trebol/10 border border-trebol/30 text-trebol font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                  <UserPlus size={14} />
                  Si no tienes equipo
                </span>
                <span className="text-xs font-mono text-carbon/50 font-medium">Cimientos</span>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight text-carbon mb-2">
                  Creación de Equipos
                </h3>
                <p className="text-sm text-carbon/60 font-light">
                  Armamos la estructura inicial de Ventas, Mkt e IT.
                </p>
              </div>

              <div className="space-y-4 font-sans text-sm md:text-base text-carbon/80">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-trebol/5 border border-trebol/20">
                  <div className="w-6 h-6 rounded-lg bg-trebol text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check size={15} strokeWidth={3} />
                  </div>
                  <div>
                    <strong className="text-carbon block font-bold">Definición de Perfiles & Roles:</strong>
                    Identificamos el talento clave necesario para tus metas comerciales y tecnológicas.
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-trebol/5 border border-trebol/20">
                  <div className="w-6 h-6 rounded-lg bg-trebol text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check size={15} strokeWidth={3} />
                  </div>
                  <div>
                    <strong className="text-carbon block font-bold">Protocolos & Procesos Iniciales:</strong>
                    Establecemos manuales de operación y reglas de comunicación interdepartamental.
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-trebol/5 border border-trebol/20">
                  <div className="w-6 h-6 rounded-lg bg-trebol text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check size={15} strokeWidth={3} />
                  </div>
                  <div>
                    <strong className="text-carbon block font-bold">Implementación Tecnológica (CRM & IT):</strong>
                    Configuramos las herramientas base para que el nuevo equipo opere desde el día uno.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100 font-mono text-xs text-trebol flex items-center justify-between">
              <span className="font-bold">Resultado: Estructura sólida lista para operar</span>
              <span className="font-bold bg-trebol/10 px-3.5 py-1 rounded-full text-trebol border border-trebol/20">0 ➔ 100 Operativo</span>
            </div>
          </motion.div>

          {/* TARJETA 2: ESTRUCTURACIÓN DE EQUIPOS EXISTENTES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="p-8 md:p-12 rounded-[3rem] bg-white border-2 border-trebol shadow-[0_20px_50px_rgba(92,158,49,0.12)] relative overflow-hidden flex flex-col justify-between"
          >
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <span className="px-4 py-1.5 rounded-full bg-carbon text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                  <GitMerge size={14} className="text-trebol" />
                  Si ya tienes equipo
                </span>
                <span className="text-xs font-mono text-trebol font-extrabold">Alineación</span>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight text-carbon mb-2">
                  Estructuración & Escala
                </h3>
                <p className="text-sm text-carbon/60 font-light">
                  Eliminamos fricciones entre Ventas, Mkt e IT.
                </p>
              </div>

              <div className="space-y-4 font-sans text-sm md:text-base text-carbon/80">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-trebol/5 border border-trebol/20">
                  <div className="w-6 h-6 rounded-lg bg-trebol text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check size={15} strokeWidth={3} />
                  </div>
                  <div>
                    <strong className="text-carbon block font-bold">Diagnóstico de Fricción Interdepartamental:</strong>
                    Detectamos cuellos de botella entre Mkt, Ventas e IT en el traspaso de clientes.
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-trebol/5 border border-trebol/20">
                  <div className="w-6 h-6 rounded-lg bg-trebol text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check size={15} strokeWidth={3} />
                  </div>
                  <div>
                    <strong className="text-carbon block font-bold">Alineación de Responsabilidades:</strong>
                    Clarificamos quién aprueba, ejecuta y supervisa cada decisión clave del negocio.
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-trebol/5 border border-trebol/20">
                  <div className="w-6 h-6 rounded-lg bg-trebol text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check size={15} strokeWidth={3} />
                  </div>
                  <div>
                    <strong className="text-carbon block font-bold">Métricas & KPIs Unificados:</strong>
                    Conectamos la meta comercial de Ventas con el trabajo de Marketing e IT.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100 font-mono text-xs text-trebol flex items-center justify-between">
              <span className="font-bold">Resultado: Flujo continuo sin burocracia</span>
              <span className="font-bold bg-trebol text-white px-3.5 py-1 rounded-full shadow-sm">Eficiencia +200%</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Contact CTA (mismo estilo que Home) ────────── */}
      <Contact />
    </main>
  );
}
