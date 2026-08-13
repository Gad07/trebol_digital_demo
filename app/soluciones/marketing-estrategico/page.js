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
import ClientLogosBanner from '@/components/ClientLogosBanner';
import { PhoneFrame } from '@/components/CanalesScrollytelling';

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
          <span className="text-xs md:text-sm font-mono font-bold text-trebol uppercase tracking-wider">
            PROCESO INTEGRADO TRÉBOL DIGITAL
          </span>
        </div>
        <div className="text-xs md:text-sm font-mono text-neutral-300 hidden sm:flex items-center gap-3">
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
                className={`p-4 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between h-44 cursor-pointer relative overflow-hidden ${isActive
                  ? 'bg-[#242724] border-2 border-trebol text-white'
                  : 'bg-[#181a18] border border-white/10 hover:border-white/25 text-neutral-300'
                  }`}
              >
                <div className="flex items-center justify-between w-full relative z-10">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-trebol' : 'text-neutral-400'}`}>
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
                  <p className="text-xs text-neutral-300 leading-snug font-sans">
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
            <span className="text-xs font-mono font-bold text-trebol uppercase tracking-wider block">
              Monitoreo Activo: Etapa {stages[activeStep].step} — {stages[activeStep].name}
            </span>
            <p className="text-sm md:text-base text-neutral-100 font-semibold">
              {stages[activeStep].detail}
            </p>
          </div>
        </div>

        <div className="text-right shrink-0">
          <span className="text-xs md:text-sm font-mono text-neutral-300 block">Tasa de Pérdida de Leads:</span>
          <span className="text-sm md:text-base font-mono font-bold text-trebol">0% (Proceso Integrado)</span>
        </div>
      </div>

      <div className="pt-2 text-center font-mono text-sm md:text-base text-neutral-200 font-medium">
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
  { icon: Smartphone, title: "Business Card NFC", desc: "Tarjetas de presentación NFC inteligentes con transferencia al instante." },
  { icon: Layers, title: "Propuestas Ejecutivas", desc: "Plantillas e itinerarios interactivos para el envío de propuestas comerciales." }
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

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTE SHOWCASE INTERACTIVO — ECOSISTEMA Y MARCA TRÉBOL
// ─────────────────────────────────────────────────────────────────────────────
function BrandEcosystemShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  const channels = [
    {
      id: 'whatsapp',
      title: 'WhatsApp Business API',
      subtitle: 'Atención & Conversión (<5 min)',
      icon: MessageSquare,
      desc: 'Configuramos perfiles profesionales de WhatsApp Business con menús de atención automatizada, respuestas rápidas, catálogo de servicios e integración directa al CRM para que ningún prospecto espere.',
      features: [
        'Respuesta automatizada en menos de 5 minutos las 24/7',
        'Menús de autoservicio y calificación inicial de prospectos',
        'Asignación automática al ejecutivo de ventas de turno'
      ],
      type: 'whatsapp'
    },
    {
      id: 'redes',
      title: 'Redes Sociales Corporativas',
      subtitle: 'Instagram, Facebook & LinkedIn B2B',
      icon: Share2,
      desc: 'Construimos una operación de contenidos con estética profesional, carruseles educativos, reels de alto impacto y campañas publicitarias (Paid Media) orientadas a la captación de leads calificados.',
      features: [
        'Diseño gráfico y línea visual consistente en todos los canales',
        'Parrillas estratégicas semanales & publicación programada',
        'Optimización diaria de pauta publicitaria en Meta & Google Ads'
      ],
      type: 'instagram'
    },
    {
      id: 'web',
      title: 'Plataforma Web Nativa',
      subtitle: 'Sitio Web Ultrarrápido & CRO',
      icon: Globe,
      desc: 'Desarrollamos páginas web de alta conversión en código nativo ultrarrápido, optimizadas para motores de búsqueda (SEO) y diseñadas con estética editorial que genera confianza inmediata.',
      features: [
        'Velocidad de carga ultrarrápida (<1 segundo en dispositivos móviles)',
        'Formularios inteligentes anti-spam conectados directo al CRM',
        'Arquitectura de conversión (CRO) orientada a la agenda de llamadas'
      ],
      type: 'web'
    },
    {
      id: 'catalogos',
      title: 'Catálogos & Decks B2B',
      subtitle: 'Herramientas de Apoyo a Ventas',
      icon: FileText,
      desc: 'Diseñamos presentaciones comerciales ejecutivas, catálogos digitales interactivos, tarjetas inteligentes NFC y fichas técnicas para que tus vendedores cierren propuestas con solidez.',
      features: [
        'Catálogos digitales interactivos con botones de contacto directo',
        'Presentaciones de alto impacto B2B para reuniones comerciales',
        'Recursos descargables (lead magnets) para captar datos de clientes'
      ],
      type: 'pdf'
    }
  ];

  const currentChannel = channels[activeTab];

  return (
    <div className="bg-white rounded-[3rem] p-6 md:p-10 border-2 border-neutral-200/90 shadow-xl space-y-8 relative overflow-hidden">

      {/* Header de Sección */}
      <div className="text-center max-w-4xl mx-auto space-y-2">
        <h2 className="text-3xl md:text-5xl font-black text-carbon tracking-tight leading-[1.12]">
          Un ecosistema consistente en todos los <span className="text-trebol">puntos de contacto.</span>
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-carbon/80 font-medium leading-relaxed max-w-2xl mx-auto font-sans">
          Alineamos tu presencia digital para construir una experiencia profesional uniforme desde el primer contacto en redes hasta la conversación comercial final.
        </p>
      </div>

      {/* BOTONES PEQUEÑOS EN UNA SOLA FILA */}
      <div className="w-full overflow-x-auto pb-2 scrollbar-none">
        <div className="flex items-center justify-start md:justify-center gap-2 min-w-max mx-auto">
          {channels.map((ch, idx) => {
            const isActive = activeTab === idx;
            const IconComp = ch.icon;
            return (
              <button
                key={ch.id}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold font-sans transition-all duration-300 cursor-pointer flex items-center gap-2 border ${isActive
                  ? 'bg-trebol border-trebol text-white shadow-md scale-[1.02]'
                  : 'bg-neutral-50 border-neutral-200/80 text-carbon/70 hover:bg-neutral-100 hover:text-carbon'
                  }`}
              >
                <IconComp size={16} className={isActive ? 'text-white' : 'text-trebol'} />
                <span>{ch.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* LAYOUT EN 2 COLUMNAS SIN LABELS NI MARCO EXTRA EXCESIVO */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-neutral-50/70 rounded-[2.5rem] p-6 md:p-8 border border-neutral-200/80 shadow-inner"
        >

          {/* COLUMNA IZQUIERDA: INFORMACIÓN Y BENEFICIOS (5 COLS) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-1">
              <h3 className="text-2xl md:text-3xl font-black text-carbon font-sans leading-tight">
                {currentChannel.title}
              </h3>
              <p className="text-xs md:text-sm font-mono text-trebol font-semibold">
                {currentChannel.subtitle}
              </p>
            </div>

            <p className="text-sm md:text-base text-carbon/80 font-normal leading-relaxed font-sans">
              {currentChannel.desc}
            </p>

            <div className="space-y-2.5 pt-3 border-t border-neutral-200">
              <span className="text-xs font-mono font-bold text-carbon/60 uppercase tracking-wider block">
                Beneficios clave del canal:
              </span>
              {currentChannel.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-trebol shrink-0 mt-0.5" />
                  <span className="text-xs md:text-sm font-semibold text-carbon/90 font-sans">{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="/agenda"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-carbon text-white font-bold text-xs md:text-sm hover:bg-trebol transition-colors duration-300 shadow-md cursor-pointer text-center"
              >
                <span>Solicitar implementación en mi empresa</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* COLUMNA DERECHA: MOCKUP DIRECTO CON EL MISMÍSIMO PHONE FRAME 3D DEL HOME */}
          <div className="lg:col-span-7 flex justify-center items-center py-4">

            {/* CONTENEDOR DEL TELÉFONO USANDO EL COMPONENTE PHONEFRAME REALISTA DEL HOME CON IMAGEN COMPLETA */}
            <div className="w-[300px] sm:w-[330px] md:w-[340px] h-[580px] sm:h-[620px] relative">
              <PhoneFrame>
                <div className="w-full h-full bg-black text-white font-sans relative overflow-hidden">

                  {/* MOCKUP 1: WHATSAPP IMAGEN COMPLETA PURA */}
                  {currentChannel.type === 'whatsapp' && (
                    <img
                      src="https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1000&auto=format&fit=crop"
                      alt="WhatsApp Business API"
                      className="w-full h-full object-cover block"
                    />
                  )}

                  {/* MOCKUP 2: INSTAGRAM / REDES IMAGEN COMPLETA PURA */}
                  {currentChannel.type === 'instagram' && (
                    <img
                      src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop"
                      alt="Redes Sociales Corporativas"
                      className="w-full h-full object-cover block"
                    />
                  )}

                  {/* MOCKUP 3: PLATAFORMA WEB IMAGEN COMPLETA PURA */}
                  {currentChannel.type === 'web' && (
                    <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
                      alt="Plataforma Web Nativa"
                      className="w-full h-full object-cover block"
                    />
                  )}

                  {/* MOCKUP 4: CATÁLOGOS & DECKS IMAGEN COMPLETA PURA */}
                  {currentChannel.type === 'pdf' && (
                    <img
                      src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop"
                      alt="Catálogos & Decks B2B"
                      className="w-full h-full object-cover block"
                    />
                  )}

                </div>
              </PhoneFrame>
            </div>

          </div>

        </motion.div>
      </AnimatePresence>

    </div>
  );
}

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

          <div className="text-center max-w-6xl mx-auto space-y-2">
            <h2 className="text-3xl md:text-5xl font-black text-carbon tracking-tight leading-[1.12]">
              No necesitas publicar más.<br /><span className="text-trebol">Necesitas conectar tu marketing con ventas.</span>
            </h2>
            <br />
            <p className="text-base md:text-lg lg:text-xl text-carbon/80 font-medium leading-relaxed max-w-2xl mx-auto font-sans">
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
            <p className="text-base md:text-lg lg:text-xl text-carbon/80 font-medium max-w-2xl mx-auto font-sans">
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
                <p className="text-carbon/80 text-base md:text-lg font-normal leading-relaxed font-sans">
                  Trabajamos temporalmente tu marketing para diseñar, implementar y optimizar la infraestructura necesaria. Generamos un Modelo de Implementación de Marketing Completo.
                </p>
                <ul className="space-y-2.5 pt-3 border-t border-neutral-100">
                  {["Diseño de embudo y landing pages", "Configuración de pauta en Google y Meta", "Puesta a punto de CRM y WhatsApp", "Generación de Modelo Completo"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm md:text-base font-semibold text-carbon font-sans">
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
                <p className="text-carbon/80 text-base md:text-lg font-normal leading-relaxed font-sans">
                  Podemos capacitar a tu equipo para trabajar con estrategia, procesos, herramientas y métricas claras que puedan continuar operando internamente.
                </p>
                <ul className="space-y-2.5 pt-3 border-t border-neutral-100">
                  {["Entrenamiento en herramientas y CRM", "Protocolos de atención en WhatsApp", "Medición autónoma de KPIs y CPL", "Transferencia total de capacidades"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm md:text-base font-semibold text-carbon font-sans">
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
            <p className="text-base md:text-lg text-white/80 font-normal font-sans">
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
                        <span className="text-sm md:text-base font-bold font-sans">
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

                    <p className="text-base md:text-lg text-white/90 font-normal leading-relaxed font-sans">
                      {ecosistemaEtapas[activeStage].subtitulo}
                    </p>

                    <div className="space-y-3 pt-2">
                      <span className="text-xs font-mono font-bold text-white/60 uppercase tracking-wider block">
                        Acciones Clave del Sistema:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                        {ecosistemaEtapas[activeStage].items.map((item, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 size={18} className="text-trebol shrink-0 mt-0.5" />
                            <span className="text-sm md:text-base font-medium text-white/90 font-sans leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 text-sm md:text-base lg:text-lg font-medium text-trebol flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-trebol shrink-0" />
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
              <p className="text-base md:text-lg lg:text-xl text-carbon/80 font-medium leading-relaxed font-sans">
                No gestionamos redes para perseguir tendencias o memes sin métricas de guía. Construimos una operación de contenidos alineada con los objetivos comerciales de tu negocio.
              </p>
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

          {/* Steps Flow Line (Abajo de todo en 1 sola línea horizontal) */}
          <div className="space-y-3 pt-6 border-t border-carbon/10">
            <span className="text-xs font-mono font-bold text-carbon/60 uppercase tracking-widest block text-center lg:text-left">
              OPERACIÓN DE CONTENIDO EN 7 PASOS
            </span>
            <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-2 text-xs md:text-sm font-sans font-semibold overflow-x-auto pb-2">
              {[
                "Estrategia",
                "Cronograma",
                "Parrillas",
                "Producción",
                "Publicación",
                "Medición",
                "Optimización"
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-2 shrink-0">
                  <span className="bg-white text-carbon border border-neutral-200/90 px-3.5 py-2 rounded-xl shadow-sm flex items-center gap-1.5 font-bold">
                    <span className="text-trebol font-mono font-bold">{idx + 1}.</span> {step}
                  </span>
                  <ArrowRight size={16} className="text-trebol shrink-0" />
                </div>
              ))}
              <span className="bg-trebol text-white px-5 py-2 rounded-xl shadow-md font-bold shrink-0">
                Ventas
              </span>
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
            <p className="text-base md:text-lg lg:text-xl text-carbon/80 font-medium leading-relaxed font-sans">
              Centralizamos y organizamos las oportunidades para facilitar su asignación y seguimiento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white rounded-[2.5rem] p-7 border-2 border-neutral-200/80 shadow-md space-y-3 hover:border-trebol transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-trebol/10 border border-trebol/20 flex items-center justify-center text-trebol">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-xl font-bold text-carbon">WhatsApp Business</h3>
              <p className="text-carbon/80 text-sm md:text-base leading-relaxed font-sans font-normal">
                Configuramos perfiles, mensajes, respuestas rápidas y flujos de atención para garantizar respuestas en &lt;5 minutos.
              </p>
            </div>

            <div className="bg-white rounded-[2.5rem] p-7 border-2 border-neutral-200/80 shadow-md space-y-3 hover:border-trebol transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-trebol/10 border border-trebol/20 flex items-center justify-center text-trebol">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-carbon">Proceso Comercial</h3>
              <p className="text-carbon/80 text-sm md:text-base leading-relaxed font-sans font-normal">
                Diseñamos criterios de atención, tiempos de respuesta, seguimiento, guiones y manejo estructurado de objeciones.
              </p>
            </div>

            <div className="bg-white rounded-[2.5rem] p-7 border-2 border-neutral-200/80 shadow-md space-y-3 hover:border-trebol transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-trebol/10 border border-trebol/20 flex items-center justify-center text-trebol">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-carbon">Automatización</h3>
              <p className="text-carbon/80 text-sm md:text-base leading-relaxed font-sans font-normal">
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
              Conoce más <ArrowRight size={16} />
            </a>
          </div>

          <div className="flex flex-wrap gap-5">
            {activosDigitales.map((activo, idx) => {
              const IconComp = activo.icon;
              return (
                <div
                  key={idx}
                  className="flex-1 min-w-[260px] sm:min-w-[280px] lg:min-w-[265px] max-w-full bg-white p-6 rounded-3xl border-2 border-neutral-200/80 hover:border-trebol transition-all duration-300 space-y-3 shadow-sm relative overflow-hidden group min-h-[140px] flex flex-col justify-between"
                >
                  {/* MARCA DE AGUA VECTORIAL CON OPACIDAD UNIFORME FLATTENED SIN PUNTOS NI CRUCES */}
                  <IconComp
                    size={90}
                    strokeWidth={1.8}
                    className="absolute -bottom-4 -right-4 text-trebol opacity-[0.18] pointer-events-none group-hover:scale-105 group-hover:opacity-30 transition-all duration-300"
                  />

                  <div className="space-y-2 relative z-10">
                    <h3 className="text-lg font-black text-carbon font-sans">{activo.title}</h3>
                    <p className="text-sm text-carbon/80 leading-relaxed font-sans font-normal max-w-[90%]">{activo.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 08 · SECCIÓN SHOWCASE INTERACTIVO DE MARCA TRÉBOL ── */}
      <section className="w-full max-w-[1300px] mx-auto px-6 md:px-12 py-16 relative z-10 border-t border-carbon/10">
        <BrandEcosystemShowcase />
      </section>

      {/* ── 09 · RUTA DE TRABAJO (ROADMAP INTERACTIVO DE AUTONOMÍA DE 6 PASOS) ── */}
      <section className="w-full max-w-[1350px] mx-auto px-6 md:px-12 py-16 relative z-10 border-t border-carbon/10">
        <div className="space-y-10">

          <div className="text-center max-w-4xl mx-auto space-y-2">
            <h2 className="text-3xl md:text-5xl font-black text-carbon tracking-tight leading-[1.12]">
              Ruta de Implementación: <span className="text-trebol">De la estrategia a la autonomía.</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-carbon/80 font-medium leading-relaxed max-w-2xl mx-auto font-sans">
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

                    <p className="text-sm md:text-base text-carbon/80 leading-relaxed font-sans font-normal max-w-[90%]">
                      {paso.desc}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center gap-2 text-xs font-mono text-carbon/70 relative z-10">
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
            <p className="text-sm md:text-base font-sans text-white font-semibold">
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
                      className="px-5 pb-5 text-carbon/80 text-sm md:text-base leading-relaxed border-t border-neutral-100 pt-3 font-sans"
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

          <p className="text-white/90 text-base md:text-lg font-normal max-w-xl mx-auto leading-relaxed font-sans">
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

            <span className="text-xs md:text-sm font-mono text-white/70">
              30 minutos · Sin costo · Para empresas y equipos que buscan mejorar su proceso comercial-digital
            </span>
          </div>

        </div>
      </section>

      {/* ── CLIENTES / LOGOS MARQUEE ────────────────────────────────────────── */}
      <ClientLogosBanner />

      {/* ── Contact Form Component ─────────────────────────────────────── */}
      <Contact />

    </main>
  );
}
