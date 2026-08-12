'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight, ArrowRight, CheckCircle2, Zap, MessageSquare, BarChart3, Users,
  Globe, Code2, Database, ShieldCheck, Clock, Cpu, Sparkles, ChevronDown,
  Target, Rocket, TrendingUp, Layers, Share2, HelpCircle, PhoneCall,
  Smartphone, QrCode, FileText, Layout, Award, Lightbulb, Compass, ArrowDown,
  CircleDollarSign
} from 'lucide-react';
import Contact from '@/components/Contact';

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTE DFD ANIMADO (DIAGRAMA DE FLUJO DE DATOS EN TIEMPO REAL)
// ─────────────────────────────────────────────────────────────────────────────
function AnimatedProcessDFD() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 6);
    }, 2800);
    return () => clearInterval(interval);
  }, [isPaused]);

  const stages = [
    { step: "01", name: "Contenido y Campañas", desc: "Atracción de tráfico", detail: "Ads en Meta & Google + Contenido Orgánico", icon: Target },
    { step: "02", name: "Leads", desc: "Captación de datos", detail: "Formularios inteligentes anti-spam", icon: Users },
    { step: "03", name: "CRM", desc: "Organización & Scoring", detail: "Asignación automática a ejecutivos", icon: Database },
    { step: "04", name: "WhatsApp / Seguimiento", desc: "Contacto en <5 min", detail: "Respuesta inmediata y guiones de venta", icon: MessageSquare },
    { step: "05", name: "Oportunidad Comercial", desc: "Propuesta y cotización", detail: "Presentación ejecutiva y propuesta", icon: BarChart3 },
    { step: "06", name: "Venta Cerrada", desc: "Ingreso real", detail: "Conversión a cliente recurrente", icon: CircleDollarSign }
  ];

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="bg-carbon text-white rounded-[2.5rem] p-6 md:p-10 border border-neutral-700/80 relative overflow-hidden space-y-6"
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4 relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-trebol" />
          <span className="text-xs font-mono font-bold text-trebol uppercase tracking-wider">
            PROCESO INTEGRADO TRÉBOL DIGITAL
          </span>
        </div>
        <div className="text-xs font-mono text-neutral-400 hidden sm:flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-trebol">
            <span className="w-2 h-2 rounded-full bg-trebol" />
            Flujo Activo
          </span>
          <span>(Pasa el cursor para pausar)</span>
        </div>
      </div>

      {/* DFD Nodes Chain Container */}
      <div className="relative pt-2 pb-2 z-10">
        {/* Connecting Line underneath */}
        <div className="hidden md:block absolute top-[52px] left-8 right-8 h-1 bg-white/10 rounded-full overflow-hidden z-0">
          <motion.div
            className="h-full bg-trebol rounded-full"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Nodes Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 relative z-10">
          {stages.map((item, idx) => {
            const isActive = activeStep === idx;
            const IconComponent = item.icon;
            return (
              <button
                key={item.step}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between h-40 cursor-pointer relative overflow-hidden ${isActive
                  ? 'bg-[#242724] border-2 border-trebol text-white'
                  : 'bg-[#181a18] border border-white/10 hover:border-white/25 text-neutral-300'
                  }`}
              >
                <div className="flex items-center justify-between w-full relative z-10">
                  <span className={`text-[11px] font-mono font-bold ${isActive ? 'text-trebol' : 'text-neutral-400'}`}>
                    ETAPA {item.step}
                  </span>
                  <div className={`p-1.5 rounded-lg ${isActive ? 'bg-trebol text-white' : 'bg-white/5 text-neutral-400'}`}>
                    <IconComponent size={14} />
                  </div>
                </div>

                <div className="space-y-1 relative z-10">
                  <h3 className={`text-xs md:text-sm font-bold leading-tight font-sans ${isActive ? 'text-white' : 'text-neutral-200'}`}>
                    {item.name}
                  </h3>
                  <p className="text-[11px] text-neutral-400 leading-snug font-sans">
                    {item.desc}
                  </p>
                </div>

                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-2 relative z-10">
                  {isActive && (
                    <motion.div
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 2.8, ease: "linear" }}
                      className="h-full bg-trebol"
                    />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Step Live Monitor Detail Banner */}
      <div className="bg-[#1e211e] border border-neutral-700/80 rounded-2xl p-4 md:p-5 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10 font-sans">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-trebol/10 border border-trebol/30 flex items-center justify-center text-trebol shrink-0">
            <Zap size={20} />
          </div>
          <div>
            <span className="text-[11px] font-mono font-bold text-trebol uppercase tracking-wider block">
              Monitoreo Activo: Etapa {stages[activeStep].step} — {stages[activeStep].name}
            </span>
            <p className="text-xs md:text-sm text-neutral-200 font-semibold">
              {stages[activeStep].detail}
            </p>
          </div>
        </div>

        <div className="text-right shrink-0">
          <span className="text-[11px] font-mono text-neutral-400 block">Tasa de Pérdida de Leads:</span>
          <span className="text-xs font-mono font-bold text-trebol">0% (Proceso Integrado)</span>
        </div>
      </div>

      <div className="pt-1 text-center font-mono text-xs text-neutral-400">
        De punta a punta: El prospecto pasa de la red social al CRM y al cierre sin perder el rastro.
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DATA ESTRUCTURADA — ECOSISTEMA 6 ETAPAS
// ─────────────────────────────────────────────────────────────────────────────
const ecosistemaEtapas = [
  {
    num: "01",
    titulo: "Atracción",
    subtitulo: "Captación de atención masiva e intención de búsqueda calificada",
    items: [
      "Estrategia de contenidos multi-canal",
      "Gestión de redes sociales corporativas",
      "Producción de contenido orgánico",
      "Paid Media (Google & Meta Ads)",
      "Posicionamiento SEO / SEM"
    ]
  },
  {
    num: "02",
    titulo: "Captación",
    subtitulo: "Transformación de visitas en prospectos calificados e identificados",
    items: [
      "Landing pages de alta conversión",
      "Formularios inteligentes anti-spam",
      "WhatsApp Business integrado",
      "Lead magnets & Recursos descargables",
      "CTAs de alto impacto comercial"
    ]
  },
  {
    num: "03",
    titulo: "Organización",
    subtitulo: "Centralización y calificación inteligente de oportunidades en CRM",
    items: [
      "Implementación & configuración de CRM",
      "Estructuración de bases de datos calificados",
      "Asignación automática de leads por zona/vendedor",
      "Flujos de automatización de tareas y recordatorios"
    ]
  },
  {
    num: "04",
    titulo: "Seguimiento Comercial",
    subtitulo: "Protocolos y tiempos de respuesta inmediata para evitar fugas",
    items: [
      "Definición del ciclo de vida del lead",
      "Tiempos de respuesta inmediata (<5 min)",
      "Guiones de atención y venta por canal",
      "Manejo estructurado de objeciones",
      "Método de contacto y seguimiento recurrente"
    ]
  },
  {
    num: "05",
    titulo: "Conversión",
    subtitulo: "Herramientas de venta que aceleran el cierre de propuestas",
    items: [
      "Materiales comerciales interactivos B2B",
      "Catálogos digitales dinámicos",
      "Páginas de producto / servicio",
      "Plantillas de propuestas ejecutivas",
      "Herramientas de apoyo a ejecutivos de venta"
    ]
  },
  {
    num: "06",
    titulo: "Optimización",
    subtitulo: "Medición del retorno sobre inversión y refinamiento continuo",
    items: [
      "KPIs & Dashboards ejecutivos en tiempo real",
      "Evaluación continua de calidad de leads",
      "Control estricto de CPL & ROAS",
      "Seguimiento de tasa de conversión por canal",
      "Optimización continua de pauta publicitaria"
    ]
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// DATA ESTRUCTURADA — ACTIVOS DIGITALES
// ─────────────────────────────────────────────────────────────────────────────
const activosDigitales = [
  { icon: Layout, title: "Landing Pages", desc: "Páginas de aterrizaje enfocadas 100% en conversión de campañas." },
  { icon: FileText, title: "Catálogos Digitales", desc: "Presentaciones interactivas de producto con enlaces de compra." },
  { icon: Sparkles, title: "Presentaciones Comerciales", desc: "Decks ejecutivos de alto impacto para reuniones B2B." },
  { icon: Award, title: "Materiales para Ventas", desc: "Fichas técnicas, comparativos y guías de decisión para clientes." },
  { icon: QrCode, title: "Códigos QR Vinculados", desc: "Acceso instantáneo a catálogos o chats desde eventos físicos." },
  { icon: Lightbulb, title: "Recursos Descargables", desc: "Ebooks, plantillas y lead magnets que capturan datos de contacto." },
  { icon: Smartphone, title: "Business Card NFC", desc: "Tarjetas de presentación NFC inteligentes con transferencia al instante." }
];

// ─────────────────────────────────────────────────────────────────────────────
// DATA ESTRUCTURADA — FAQS (SEO + OBJECIONES)
// ─────────────────────────────────────────────────────────────────────────────
const faqsMarketing = [
  {
    q: "¿Trébol puede administrar las redes sociales de mi empresa?",
    a: "Sí, pero con un enfoque estrictamente estratégico. No gestionamos redes para perseguir tendencias o memes sin métricas de guía; construimos una operación de contenidos alineada con los objetivos comerciales de tu negocio, respaldada por calendarios de producción y medición de conversión."
  },
  {
    q: "¿Pueden capacitar a nuestro equipo de marketing?",
    a: "Absolutamente. Diseñamos un programa de capacitación y transferencia donde formamos a tu equipo en procesos, herramientas, CRM y metodologías de medición para que puedan continuar operando internamente de forma 100% autónoma."
  },
  {
    q: "¿Pueden implementar un CRM para gestionar nuestros leads?",
    a: "Sí. Seleccionamos, configuramos e integramos la plataforma de CRM idónea para tu empresa (como HubSpot, Zoho o ActiveCampaign), automatizando la asignación de prospectos y organizando las etapas de tu embudo de ventas."
  },
  {
    q: "¿Trabajan con WhatsApp Business y automatización?",
    a: "Así es. Configuramos perfiles profesionales de WhatsApp Business API, creamos respuestas rápidas, catálogos, enlaces de rastreo y flujos de automatización que garantizan atención inmediata en menos de 5 minutos las 24 horas del día."
  },
  {
    q: "¿Necesito contratar todos los servicios?",
    a: "No. En nuestro diagnóstico inicial identificamos la etapa exacta en la que se encuentra tu empresa y recomendamos únicamente los módulos e infraestructura que requieres para destrabar el crecimiento de tus ventas."
  },
  {
    q: "¿Cuánto tiempo requiere implementar una estrategia de marketing digital?",
    a: "Nuestros proyectos de implementación y puesta a punto de infraestructura toman habitualmente entre 3 y 6 semanas. Las campañas publicitarias comienzan a generar prospectos calificados desde los primeros 5 días de pauta activa."
  },
  {
    q: "¿Trabajan con el equipo comercial de la empresa?",
    a: "Sí. Para nosotros el marketing no termina en el clic. Trabajamos directamente con tus ejecutivos comerciales para definir tiempos de respuesta, guiones de contacto, manejo de objeciones y formatos de seguimiento."
  }
];

export default function MarketingEstrategicoPage() {
  const [activeStage, setActiveStage] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <main className="w-full bg-hueso text-carbon min-h-screen overflow-hidden lg:overflow-visible font-sans">

      {/* ── HERO EN 2 COLUMNAS ── */}
      <section className="relative w-full pt-32 md:pt-40 pb-16 px-6 md:px-12 bg-hueso overflow-hidden lg:overflow-visible border-b border-carbon/10">

        {/* Ambient Light Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -left-40 w-[28rem] h-[28rem] bg-trebol/20 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-20 right-0 w-[24rem] h-[24rem] bg-trebol/10 rounded-full blur-[80px]"
          />
        </div>

        <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">

          {/* COLUMNA IZQUIERDA: TITULAR, DESCRIPCIÓN Y CTAS */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 90, damping: 14 }}
              className="text-3xl md:text-5xl lg:text-[3.2rem] font-black text-carbon leading-[1.1] tracking-tight max-w-2xl"
            >
              Marketing que atrae oportunidades y las convierte en <span className="text-trebol">ventas reales.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-base md:text-lg text-carbon/80 font-light leading-relaxed max-w-xl font-sans"
            >
              Diseñamos e implementamos estrategias que conectan contenido, campañas, CRM, WhatsApp Business y seguimiento comercial para construir un proceso de captación medible y sostenible.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1"
            >
              <a
                href="/agenda"
                className="px-7 py-3.5 rounded-2xl bg-trebol text-white font-bold text-sm md:text-base hover:bg-carbon transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                Solicita tu diagnóstico gratuito <ArrowUpRight size={18} />
              </a>

              <a
                href="#embudo"
                className="px-7 py-3.5 rounded-2xl bg-white border border-neutral-300 text-carbon font-semibold text-sm md:text-base hover:border-trebol hover:text-trebol transition-all duration-300 shadow-sm flex items-center justify-center gap-2"
              >
                Descubre cómo funciona ↓
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="text-xs font-mono text-carbon/60 flex items-center gap-2 pt-1"
            >
              <span>30 minutos · Sin costo · Identificamos oportunidades para tu negocio</span>
            </motion.div>
          </div>

          {/* COLUMNA DERECHA: TARJETA INTERACTIVA DE PROCESO COMPLETO */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white rounded-[2.5rem] p-7 md:p-8 shadow-2xl border border-neutral-200/90 space-y-4 relative lg:overflow-visible overflow-hidden"
            >
              <div className="border-b border-neutral-100 pb-3">
                <span className="text-[11px] font-mono font-bold text-carbon/50 uppercase tracking-widest block">
                  ASÍ FUNCIONA EL PROCESO COMPLETO
                </span>
              </div>

              <div className="space-y-3 relative">
                {/* Paso 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-trebol/10 border-2 border-trebol flex items-center justify-center text-trebol shrink-0 mt-0.5 shadow-sm">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-carbon leading-snug font-sans">
                      Estrategia de contenidos y campañas
                    </h4>
                  </div>
                </div>

                <div className="w-0.5 h-2.5 bg-trebol/30 ml-4" />

                {/* Paso 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-trebol/10 border-2 border-trebol flex items-center justify-center text-trebol shrink-0 mt-0.5 shadow-sm">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-carbon leading-snug font-sans">
                      Captación de leads en CRM
                    </h4>
                  </div>
                </div>

                <div className="w-0.5 h-2.5 bg-trebol/30 ml-4" />

                {/* Paso 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-trebol/10 border-2 border-trebol flex items-center justify-center text-trebol shrink-0 mt-0.5 shadow-sm">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-carbon leading-snug font-sans">
                      Seguimiento por WhatsApp Business
                    </h4>
                  </div>
                </div>

                <div className="w-0.5 h-2.5 bg-trebol/30 ml-4" />

                {/* Paso 4 */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-trebol/10 border-2 border-trebol flex items-center justify-center text-trebol shrink-0 mt-0.5 shadow-sm">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-carbon leading-snug font-sans">
                      Atención comercial estructurada
                    </h4>
                  </div>
                </div>

                <div className="w-0.5 h-2.5 bg-trebol/30 ml-4" />

                {/* Resultado Final Pill */}
                <div className="bg-trebol text-white font-bold text-xs md:text-sm px-5 py-3 rounded-2xl flex items-center justify-center gap-2 shadow-md font-sans">
                  <CheckCircle2 size={18} className="text-white" />
                  <span>Oportunidad convertida en venta</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ── 02 · EMBUDO ANIMADO DFD ────────────────────────────────────── */}
      <section id="embudo" className="w-full max-w-[1300px] mx-auto px-6 md:px-12 py-16 relative z-10 border-t border-carbon/10">
        <div className="space-y-8">

          <div className="text-center max-w-4xl mx-auto space-y-2">
            <h2 className="text-3xl md:text-5xl font-black text-carbon tracking-tight leading-[1.12]">
              No necesitas publicar más. Necesitas <span className="text-trebol">conectar tu marketing con ventas.</span>
            </h2>
            <p className="text-sm md:text-base text-carbon/70 font-light leading-relaxed max-w-xl mx-auto font-sans">
              Muchas empresas invierten en publicidad o redes, pero pierden oportunidades porque cada parte funciona de forma aislada. Trébol conecta todo el proceso.
            </p>
          </div>

          {/* COMPONENTE DFD ANIMADO */}
          <AnimatedProcessDFD />

        </div>
      </section>

      {/* ── 03 · DUALIDAD DEL MODELO ────────────────────────────────────── */}
      <section className="w-full max-w-[1300px] mx-auto px-6 md:px-12 py-16 relative z-10 border-t border-carbon/10">
        <div className="space-y-10">

          <div className="text-center max-w-4xl mx-auto space-y-2">
            <h2 className="text-3xl md:text-5xl font-black text-carbon tracking-tight leading-[1.12]">
              Operación delegada o <span className="text-trebol">capacitación interna.</span>
            </h2>
            <p className="text-sm md:text-base text-carbon/70 font-light max-w-xl mx-auto font-sans">
              Te brindamos la flexibilidad que tu empresa necesita según la madurez de tu equipo actual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

            {/* Opción 1: Implementación y Gestión */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border-2 border-neutral-200/90 shadow-lg hover:border-trebol transition-all duration-400 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold text-trebol bg-trebol/10 px-4 py-1.5 rounded-full uppercase tracking-wider inline-block">
                  01. OPERACIÓN Y GESTIÓN
                </span>
                <h3 className="text-2xl font-black text-carbon">
                  Implementación y Gestión Delegada
                </h3>
                <p className="text-carbon/70 text-sm md:text-base font-light leading-relaxed font-sans">
                  Trabajamos temporalmente tu marketing para diseñar, implementar y optimizar la infraestructura necesaria. Generamos un Modelo de Implementación de Marketing Completo.
                </p>
                <ul className="space-y-2.5 pt-3 border-t border-neutral-100">
                  {["Diseño de embudo y landing pages", "Configuración de pauta en Google y Meta", "Puesta a punto de CRM y WhatsApp", "Generación de Modelo Completo"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs md:text-sm font-semibold text-carbon font-sans">
                      <CheckCircle2 size={16} className="text-trebol shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="/agenda"
                className="w-full py-3.5 rounded-2xl bg-carbon text-white font-bold text-sm hover:bg-trebol transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md text-center"
              >
                Quiero fortalecer mi marketing <ArrowRight size={16} />
              </a>
            </div>

            {/* Opción 2: Capacitación y Transferencia */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border-2 border-trebol/40 shadow-lg hover:border-trebol transition-all duration-400 flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-trebol/10 rounded-bl-full pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <span className="text-xs font-mono font-bold text-white bg-trebol px-4 py-1.5 rounded-full uppercase tracking-wider inline-block">
                  02. AUTONOMÍA Y EQUIPO
                </span>
                <h3 className="text-2xl font-black text-carbon">
                  Capacitación y Transferencia Interna
                </h3>
                <p className="text-carbon/70 text-sm md:text-base font-light leading-relaxed font-sans">
                  Podemos capacitar a tu equipo para trabajar con estrategia, procesos, herramientas y métricas claras que puedan continuar operando internamente.
                </p>
                <ul className="space-y-2.5 pt-3 border-t border-neutral-100">
                  {["Entrenamiento en herramientas y CRM", "Protocolos de atención en WhatsApp", "Medición autónoma de KPIs y CPL", "Transferencia total de capacidades"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs md:text-sm font-semibold text-carbon font-sans">
                      <CheckCircle2 size={16} className="text-trebol shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="/agenda"
                className="w-full py-3.5 rounded-2xl bg-trebol text-white font-bold text-sm hover:bg-carbon transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md text-center"
              >
                Quiero fortalecer a mi equipo <ArrowRight size={16} />
              </a>
            </div>

          </div>

          {/* Microcopy Promesa */}
          <div className="bg-trebol text-white p-5 rounded-2xl text-center max-w-xl mx-auto shadow-lg space-y-1">
            <span className="text-xs font-mono font-bold text-white/90 uppercase tracking-wider block">NUESTRA FILOSOFÍA</span>
            <p className="text-xs md:text-sm font-sans text-white font-semibold">
              No queremos hacerte dependiente de Trébol. Nuestro objetivo es dejar capacidad instalada en tu empresa.
            </p>
          </div>

        </div>
      </section>

      {/* ── 04 · ECOSISTEMA 6 ETAPAS INTERACTIVO EN 2 COLUMNAS ────────────── */}
      <section className="w-full bg-carbon text-white py-16 px-6 md:px-12 relative z-10">
        <div className="max-w-[1350px] mx-auto space-y-8">

          {/* Header de Sección Ultra Corto (1-2 Líneas Máx) */}
          <div className="text-center max-w-4xl mx-auto space-y-2">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-[1.12]">
              Creamos tu <span className="text-trebol">ecosistema comercial completo.</span>
            </h2>
            <p className="text-xs md:text-sm text-white/70 font-light font-sans">
              Haz clic sobre cada etapa para explorar las acciones concretas del sistema.
            </p>
          </div>

          {/* Grid de 2 Columnas: Selector a la Izquierda, Detalle a la Derecha */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* COLUMNA IZQUIERDA: 6 BOTONES VERTICALES DE ETAPA (5 COLS) */}
            <div className="lg:col-span-5 space-y-2">
              <div className="space-y-2">
                {ecosistemaEtapas.map((etapa, idx) => {
                  const isActive = activeStage === idx;
                  return (
                    <button
                      key={etapa.num}
                      onClick={() => setActiveStage(idx)}
                      className={`w-full p-3.5 rounded-2xl text-left transition-all duration-300 border flex items-center justify-between cursor-pointer ${isActive
                        ? 'bg-trebol border-trebol text-white font-bold shadow-lg scale-[1.01]'
                        : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`font-mono text-xs font-bold px-2.5 py-1 rounded-lg ${isActive ? 'bg-white/20 text-white' : 'bg-white/5 text-neutral-400'}`}>
                          {etapa.num}
                        </span>
                        <span className="text-xs md:text-sm font-bold font-sans">
                          {etapa.titulo}
                        </span>
                      </div>
                      <ArrowRight size={15} className={`transition-transform ${isActive ? 'translate-x-1 text-white' : 'text-neutral-500 opacity-40'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* COLUMNA DERECHA: TARJETA DE DETALLE EXPANDIDA (7 COLS) */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#1a1c1a] border-2 border-white/10 rounded-[2.5rem] p-6 md:p-8 space-y-5 shadow-2xl min-h-[380px] flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="border-b border-white/10 pb-3 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-trebol font-bold uppercase tracking-widest block mb-0.5">
                          ETAPA {ecosistemaEtapas[activeStage].num} DEL SISTEMA
                        </span>
                        <h3 className="text-xl md:text-2xl font-black text-white font-sans">
                          {ecosistemaEtapas[activeStage].titulo}
                        </h3>
                      </div>
                      <span className="w-8 h-8 rounded-full bg-trebol/10 text-trebol flex items-center justify-center font-mono text-xs font-bold shrink-0">
                        {ecosistemaEtapas[activeStage].num}
                      </span>
                    </div>

                    <p className="text-xs md:text-sm text-white/80 font-light leading-relaxed font-sans">
                      {ecosistemaEtapas[activeStage].subtitulo}
                    </p>

                    <div className="space-y-2 pt-1">
                      <span className="text-[11px] font-mono font-bold text-white/50 uppercase tracking-wider block">
                        Acciones Clave del Sistema:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {ecosistemaEtapas[activeStage].items.map((item, i) => (
                          <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-start gap-2.5">
                            <CheckCircle2 size={15} className="text-trebol shrink-0 mt-0.5" />
                            <span className="text-xs font-semibold text-white/90 font-sans leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-trebol flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-trebol" />
                    <span>Tu marketing dejará de ser publicaciones aisladas y funcionará como un sistema.</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* ── 05 · SECCIÓN CON IMAGEN DE IMPACTO DE GESTIÓN DE REDES ───────── */}
      <section className="w-full max-w-[1300px] mx-auto px-6 md:px-12 py-16 relative z-10 border-t border-carbon/10">
        <div className="space-y-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-3xl md:text-5xl font-black text-carbon tracking-tight leading-[1.12]">
                Gestión de redes sociales <span className="text-trebol">con estrategia comercial.</span>
              </h2>
              <p className="text-sm md:text-base text-carbon/70 font-light leading-relaxed font-sans">
                No gestionamos redes para perseguir tendencias o memes sin métricas de guía. Construimos una operación de contenidos alineada con los objetivos comerciales de tu negocio.
              </p>

              {/* Steps Flow Grid */}
              <div className="space-y-2 pt-1">
                <span className="text-[11px] font-mono font-bold text-carbon/60 uppercase tracking-widest block">
                  OPERACIÓN DE CONTENIDO EN 7 PASOS
                </span>
                <div className="flex flex-wrap gap-1.5 text-xs font-mono font-bold">
                  {["Estrategia", "Cronograma", "Parrillas", "Producción", "Publicación", "Medición", "Optimización"].map((step, idx) => (
                    <span key={idx} className="bg-white text-carbon border border-neutral-200 px-3 py-1 rounded-xl shadow-sm">
                      {idx + 1}. {step}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* FOTO / SECCIÓN GRÁFICA DE IMPACTO */}
            <div className="lg:col-span-6">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-neutral-200/80">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                  alt="Estrategia de Redes Sociales y Marketing Trébol"
                  className="w-full h-[340px] object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 06 · INFRAESTRUCTURA - CRM & WHATSAPP ───────────────────────── */}
      <section className="w-full max-w-[1300px] mx-auto px-6 md:px-12 py-16 relative z-10 border-t border-carbon/10">
        <div className="space-y-10">

          <div className="text-center max-w-4xl mx-auto space-y-2">
            <h2 className="text-3xl md:text-5xl font-black text-carbon tracking-tight leading-[1.12]">
              Lo que ocurre después del clic también es <span className="text-trebol">marketing.</span>
            </h2>
            <p className="text-sm md:text-base text-carbon/70 font-light leading-relaxed font-sans">
              Centralizamos y organizamos las oportunidades para facilitar su asignación y seguimiento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white rounded-[2.5rem] p-7 border-2 border-neutral-200/80 shadow-md space-y-3 hover:border-trebol transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-trebol/10 border border-trebol/20 flex items-center justify-center text-trebol">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-xl font-bold text-carbon">WhatsApp Business</h3>
              <p className="text-carbon/70 text-xs md:text-sm leading-relaxed font-sans">
                Configuramos perfiles, mensajes, respuestas rápidas y flujos de atención para garantizar respuestas en &lt;5 minutos.
              </p>
            </div>

            <div className="bg-white rounded-[2.5rem] p-7 border-2 border-neutral-200/80 shadow-md space-y-3 hover:border-trebol transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-trebol/10 border border-trebol/20 flex items-center justify-center text-trebol">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-carbon">Proceso Comercial</h3>
              <p className="text-carbon/70 text-xs md:text-sm leading-relaxed font-sans">
                Diseñamos criterios de atención, tiempos de respuesta, seguimiento, guiones y manejo estructurado de objeciones.
              </p>
            </div>

            <div className="bg-white rounded-[2.5rem] p-7 border-2 border-neutral-200/80 shadow-md space-y-3 hover:border-trebol transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-trebol/10 border border-trebol/20 flex items-center justify-center text-trebol">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-carbon">Automatización</h3>
              <p className="text-carbon/70 text-xs md:text-sm leading-relaxed font-sans">
                Cuando el proceso lo permite, conectamos herramientas para reducir tareas manuales y mejorar tiempos de respuesta.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ── 07 · ACTIVOS DIGITALES (PRODUCTOS DIGITALES LIMPIOS Y ELEGANTES) ── */}
      <section className="w-full max-w-[1300px] mx-auto px-6 md:px-12 py-16 relative z-10 border-t border-carbon/10">
        <div className="space-y-10">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="space-y-2 max-w-xl">
              <h2 className="text-3xl md:text-5xl font-black text-carbon tracking-tight leading-[1.12]">
                Herramientas digitales de <span className="text-trebol">apoyo a ventas.</span>
              </h2>
            </div>
            <a
              href="/soluciones/desarrollo-web"
              className="px-7 py-3.5 rounded-2xl bg-carbon text-white font-bold text-xs md:text-sm hover:bg-trebol transition-colors flex items-center gap-2 cursor-pointer shadow-md shrink-0"
            >
              Conoce nuestras soluciones digitales <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {activosDigitales.map((activo, idx) => {
              const IconComp = activo.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-3xl border-2 border-neutral-200/80 hover:border-trebol transition-all duration-300 space-y-3 shadow-sm relative overflow-hidden group min-h-[140px] flex flex-col justify-between"
                >
                  {/* MARCA DE AGUA VECTORIAL CON OPACIDAD UNIFORME FLATTENED SIN PUNTOS NI CRUCES */}
                  <IconComp
                    size={90}
                    strokeWidth={1.8}
                    className="absolute -bottom-4 -right-4 text-trebol opacity-[0.18] pointer-events-none group-hover:scale-105 group-hover:opacity-30 transition-all duration-300"
                  />

                  <div className="space-y-2 relative z-10">
                    <h3 className="text-lg font-black text-carbon font-sans">{activo.title}</h3>
                    <p className="text-xs text-carbon/75 leading-relaxed font-sans font-light max-w-[85%]">{activo.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 08 · SECCIÓN CON IMAGEN DE FONDO FULL-BLEED (CONSISTENCIA DE MARCA) ── */}
      <section className="w-full max-w-[1300px] mx-auto px-6 md:px-12 py-16 relative z-10 border-t border-carbon/10">
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-trebol/30 min-h-[380px] flex items-center p-8 md:p-12">
          {/* Section Image Background */}
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80"
            alt="Experiencia de Marca Trébol Digital"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-carbon via-carbon/95 to-carbon/75" />

          <div className="relative z-10 max-w-2xl space-y-5">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-[1.12]">
              Experiencia de marca <span className="text-trebol">consistente.</span>
            </h2>
            <p className="text-xs md:text-sm text-white/90 font-light leading-relaxed font-sans">
              Alineamos tu presencia digital para construir una experiencia profesional uniforme desde el primer contacto en redes hasta la conversación comercial final.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {["Web", "Redes", "WhatsApp", "Presentaciones", "Catálogos", "Publicidad", "Comunicación comercial"].map((pill, i) => (
                <span key={i} className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-white">
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 09 · MÉTODO TRÉBOL (ROADMAP INTERACTIVO DE AUTONOMÍA) ────────── */}
      <section className="w-full max-w-[1350px] mx-auto px-6 md:px-12 py-16 relative z-10 border-t border-carbon/10">
        <div className="space-y-10">

          <div className="text-center max-w-4xl mx-auto space-y-2">
            <h2 className="text-3xl md:text-5xl font-black text-carbon tracking-tight leading-[1.12]">
              Método Trébol: <span className="text-trebol">Diseño, implementación y capacitación.</span>
            </h2>
            <p className="text-sm md:text-base text-carbon/70 font-light leading-relaxed font-sans">
              Nuestro objetivo es dejar procesos, herramientas y capacidades que permanezcan en tu empresa.
            </p>
          </div>

          {/* 6 Steps Roadmap Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 relative">
            {[
              {
                step: "01",
                title: "Diagnóstico",
                desc: "Auditamos tus canales actuales, embudo de conversión e identificamos fugas comerciales.",
                hito: "Auditoría y hallazgos entregados",
                icon: Compass
              },
              {
                step: "02",
                title: "Estrategia",
                desc: "Diseñamos la arquitectura de contenidos, pauta publicitaria y atención comercial.",
                hito: "Embudo y arquitectura comercial",
                icon: Target
              },
              {
                step: "03",
                title: "Implementación",
                desc: "Configuramos CRM, landing pages, WhatsApp Business API y flujos de automatización.",
                hito: "CRM e infraestructura conectada",
                icon: Rocket
              },
              {
                step: "04",
                title: "Capacitación",
                desc: "Entrenamos a tu equipo en el uso de herramientas, procesos y guiones de venta.",
                hito: "Equipo entrenado en procesos",
                icon: Users
              },
              {
                step: "05",
                title: "Optimización",
                desc: "Medimos ROAS, CPL y tasa de conversión para ajustar y escalar resultados continuamente.",
                hito: "Dashboards de ROAS & CPL activos",
                icon: TrendingUp
              },
              {
                step: "06",
                title: "Autonomía Total",
                desc: "Transferimos la operación completa y las capacidades para que tu equipo opere 100% independiente.",
                hito: "Operación autónoma transferida",
                icon: ShieldCheck
              }
            ].map((paso, idx) => {
              const StepIcon = paso.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border-2 border-neutral-200/90 rounded-3xl p-6 hover:border-trebol transition-all duration-300 shadow-sm hover:shadow-xl group flex flex-col justify-between relative overflow-hidden min-h-[175px]"
                >
                  {/* MARCA DE AGUA VECTORIAL CON OPACIDAD UNIFORME FLATTENED SIN PUNTOS NI CRUCES */}
                  <StepIcon
                    size={105}
                    strokeWidth={1.8}
                    className="absolute -bottom-5 -right-5 text-trebol opacity-[0.18] pointer-events-none group-hover:scale-105 group-hover:opacity-30 transition-all duration-300"
                  />

                  {/* Contenido en primer plano */}
                  <div className="space-y-2.5 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-trebol bg-trebol/10 px-3 py-1 rounded-full border border-trebol/20">
                        PASO {paso.step}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-carbon font-sans">
                      {paso.title}
                    </h3>

                    <p className="text-xs md:text-sm text-carbon/75 leading-relaxed font-sans font-light max-w-[88%]">
                      {paso.desc}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-carbon/60 relative z-10">
                    <CheckCircle2 size={13} className="text-trebol shrink-0" />
                    <span>{paso.hito}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Microcopy Promesa */}
          <div className="bg-trebol text-white p-5 rounded-2xl text-center max-w-xl mx-auto shadow-lg space-y-1">
            <span className="text-xs font-mono font-bold text-white/90 uppercase tracking-wider block">OBJETIVO DE AUTONOMÍA</span>
            <p className="text-xs md:text-sm font-sans text-white font-semibold">
              Al finalizar el proceso, tu empresa contará con una operación de marketing funcional, autónoma y medible.
            </p>
          </div>

        </div>
      </section>

      {/* ── 11 · FAQ (SEO + OBJECIONES) ─────────────────────────────────── */}
      <section className="w-full max-w-[1300px] mx-auto px-6 md:px-12 py-16 relative z-10 border-t border-carbon/10">
        <div className="space-y-8 max-w-4xl mx-auto">

          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-4xl font-black text-carbon tracking-tight">
              Preguntas Frecuentes sobre Marketing
            </h2>
          </div>

          <div className="space-y-3">
            {faqsMarketing.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-neutral-200/90 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left font-bold text-base md:text-lg text-carbon flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-trebol transition-transform duration-300 shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-5 text-carbon/70 text-xs md:text-sm leading-relaxed border-t border-neutral-100 pt-3 font-sans"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CIERRE COMERCIAL (BLOQUE CARBON/DARK) ────────────────────────── */}
      <section className="w-full bg-carbon text-white py-20 px-6 md:px-12 relative z-10">
        <div className="max-w-[1200px] mx-auto text-center space-y-6">

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] max-w-3xl mx-auto">
            ¿Qué sucede con tus prospectos <span className="text-trebol">después del primer contacto?</span>
          </h2>

          <p className="text-white/80 text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed font-sans">
            Revisemos juntos tu proceso actual de marketing, captación y seguimiento e identifiquemos dónde existen oportunidades de mejora.
          </p>

          <div className="pt-2 flex flex-col items-center gap-3">
            <a
              href="/agenda"
              className="px-9 py-4 rounded-2xl bg-trebol text-white font-bold text-base hover:bg-white hover:text-carbon transition-all duration-300 shadow-xl flex items-center gap-2 cursor-pointer group"
            >
              Solicita tu diagnóstico digital gratuito
              <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <span className="text-xs font-mono text-white/60">
              30 minutos · Sin costo · Para empresas y equipos que buscan mejorar su proceso comercial-digital
            </span>
          </div>

        </div>
      </section>

      {/* ── Contact Form Component ─────────────────────────────────────── */}
      <Contact />

    </main>
  );
}
