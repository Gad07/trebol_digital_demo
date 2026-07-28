'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll } from 'framer-motion';
import { 
  ArrowUpRight, Laptop, Smartphone, Tablet, Gauge, CheckCircle2, 
  Code2, ShieldCheck, Zap, Layers, ChevronDown, Terminal, Cpu, Database, Globe, Sparkles, Check,
  MoveHorizontal, AlertTriangle, ArrowRight, Star, ShoppingBag, CreditCard, BarChart3, Lock,
  Search, User, ShoppingCart, Calendar, FileText, Activity, Server, Filter, Sparkle, Grid, ArrowDownRight,
  Download, MessageSquare, Compass, Rocket
} from 'lucide-react';

import { BadOldWebMockup } from '../../../components/desarrollo-web/mockups/BadOldWebMockup';
import { SwissMockup } from '../../../components/desarrollo-web/mockups/SwissMockup';
import { BrutalistMockup } from '../../../components/desarrollo-web/mockups/BrutalistMockup';
import { LuxuryMockup } from '../../../components/desarrollo-web/mockups/LuxuryMockup';
import { SpeedometerGauge, LighthouseGauge, ConversionGauge } from '../../../components/desarrollo-web/PerformanceGauges';

const capabilitiesList = [
  { name: 'Renderizado Ultrarrápido & SEO Impecable', role: 'Next.js 16 SSR/SSG', desc: 'Desarrollamos páginas de carga instantánea optimizadas para posicionar en los primeros lugares de Google.', icon: Globe },
  { name: 'Componentes Dinámicos & UI de Alto Rendimiento', role: 'React 19 Interactive UI', desc: 'Creamos plataformas con interfaces dinámicas, animaciones fluidas y estados reactivos a la medida.', icon: Code2 },
  { name: 'Carga en Milisegundos Sin Pesos Extra', role: 'Diseño Nativo Atomizado', desc: 'Código ligero sin plantillas pesadas ni plugins vulnerables que alentan la experiencia del usuario.', icon: Zap },
  { name: 'Panel Autoadministrable Sin Depender de Código', role: 'Headless CMS (Sanity / Strapi)', desc: 'Integramos gestores intuitivos para que tu equipo edite contenidos, blogs y productos fácilmente.', icon: Database },
  { name: 'Infraestructura Global con 99.99% Disponibilidad', role: 'Vercel Edge CDN Network', desc: 'Despliegue distribuido en servidores de borde capaces de soportar tráfico masivo sin caídas.', icon: Server },
  { name: 'Pasarelas de Pago & Cobros Automatizados', role: 'Stripe & MercadoPago', desc: 'Integración segura de pagos digitales con tarjetas, Apple Pay, suscripciones y cobros locales.', icon: CreditCard },
];

const roadmapWeb = [
  { 
    paso: '01', 
    titulo: 'Arquitectura & Prototipado UX/UI', 
    desc: 'Diseñamos la estructura de navegación y prototipos interactivos en Figma centrados en la conversión de tus usuarios.',
    entregable: 'Prototipo Interactivo de Alta Fidelidad',
  },
  { 
    paso: '02', 
    titulo: 'Desarrollo Nativo Next.js & React 19', 
    desc: 'Programamos tu sitio con código nativo sin plantillas pesadas ni plugins vulnerables, garantizando rendimiento absoluto.',
    entregable: 'Código Fuente & Componentes Reutilizables',
  },
  { 
    paso: '03', 
    titulo: 'Optimización Core Web Vitals & SEO', 
    desc: 'Auditamos tiempos de carga, estructuras de datos Schema.org, metadatos y accesibilidad para alcanzar 99/100 en Google Lighthouse.',
    entregable: 'Reporte de Certificación Google Lighthouse',
  },
  { 
    paso: '04', 
    titulo: 'Integración CMS & Despliegue CDN', 
    desc: 'Conectamos tu panel autoadministrable Sanity/Strapi y desplegamos la plataforma en infraestructura de borde Vercel Edge.',
    entregable: 'Panel Autoadministrable & Capacitación',
  },
];

const projectTypes = [
  { id: 'corporativa', label: '1. Página Web Corporativa' },
  { id: 'landing', label: '2. Landing Page de Alta Conversión' },
  { id: 'ecommerce', label: '3. E-Commerce / Tienda Online' },
];

export default function DesarrolloWebPage() {
  const [isBefore, setIsBefore] = useState(false);
  const [activeMode, setActiveMode] = useState(1); // Defaulting to Landing Page
  const [sliderPos, setSliderPos] = useState(50);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Ref para el progreso de scroll progresivo de la barra continua
  const roadmapRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: roadmapRef,
    offset: ["start 65%", "end 75%"]
  });

  const renderModernMockup = (modeIndex) => {
    switch (modeIndex) {
      case 0:
        return <SwissMockup />;
      case 1:
        return <BrutalistMockup />;
      case 2:
        return <LuxuryMockup />;
      default:
        return <SwissMockup />;
    }
  };

  return (
    <main className="w-full bg-hueso text-carbon min-h-screen overflow-hidden">
      {/* ── HERO EXACTO ESTILO HOME CON BADGE FLOTANTE & LUZ AMBIENTAL ── */}
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
            className="absolute -top-10 md:-top-12 lg:right-[14%] right-0 z-20"
          >
            <div className="bg-white/50 backdrop-blur-md px-6 py-3 border border-white/70 shadow-xl rounded-full text-sm md:text-lg text-carbon font-semibold">
              Arquitectura Next.js 16 & React 19
            </div>
          </motion.div>

          {/* Massive Headline with Stagger Spring Animation */}
          <motion.h1 
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 90, damping: 14 }}
            className="text-5xl md:text-8xl lg:text-[8rem] font-black text-carbon leading-[0.85] tracking-tighter"
          >
            Ingeniería Web de <br />
            Alto <span className="text-trebol">Rendimiento.</span>
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
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1800&q=80"
            alt="Desarrollo Web Trébol Digital"
            className="w-full h-full object-cover object-center transition-transform duration-700"
          />
        </motion.div>
      </section>

      {/* ── SECCIÓN ÚNICA 1: COMPARADOR ANTES vs DESPUÉS (SLIDER DE RENDIMIENTO) ── */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-28 relative z-10 border-t border-carbon/10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-black text-carbon tracking-tighter">
            Sitio Tradicional vs Trébol Next.js
          </h2>
          <p className="text-xl text-carbon/70 font-light max-w-2xl mx-auto mt-4">
            Compara la diferencia entre un sitio web genérico en WordPress y una plataforma optimizada en código nativo.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-2 rounded-full border border-neutral-200 shadow-md flex items-center gap-2">
            <button
              onClick={() => setIsBefore(true)}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all cursor-pointer ${
                isBefore ? 'bg-red-500/20 text-red-600 border border-red-500/40' : 'text-carbon/60 hover:text-carbon'
              }`}
            >
              Sin Trébol Digital
            </button>
            <button
              onClick={() => setIsBefore(false)}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all cursor-pointer ${
                !isBefore ? 'bg-trebol text-white shadow-lg' : 'text-carbon/60 hover:text-carbon'
              }`}
            >
              Con Trébol Digital
            </button>
          </div>
        </div>

        {/* Comparison Display Panel with Speedometers & Animated Gauges (White Glassmorphism UI) */}
        <div className="bg-white/70 backdrop-blur-2xl text-carbon border border-white/90 rounded-[3.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.06)] grid grid-cols-1 md:grid-cols-3 gap-8 items-center font-sans relative z-10">
          <div className="flex justify-center border-b md:border-b-0 md:border-r border-neutral-200 pb-6 md:pb-0 md:pr-6">
            <SpeedometerGauge isBefore={isBefore} />
          </div>

          <div className="flex justify-center border-b md:border-b-0 md:border-r border-neutral-200 py-6 md:py-0 md:px-6">
            <LighthouseGauge isBefore={isBefore} />
          </div>

          <div className="flex justify-center pt-6 md:pt-0 md:pl-6">
            <ConversionGauge isBefore={isBefore} />
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
              Un proceso estructurado de 4 fases para crear tu plataforma web sin retrasos y con arquitectura de nivel enterprise.
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

            {roadmapWeb.map((r) => (
              <div
                key={r.paso}
                className="flex items-start gap-6 md:gap-10 group relative z-10 opacity-100"
              >
                {/* COLUMNA 1: Círculos 100% Sólidos */}
                <div className="w-16 md:w-20 shrink-0 flex justify-center pt-8">
                  <motion.div 
                    initial={{ backgroundColor: '#2D2D2D', color: '#ffffff', borderColor: '#F5F5F5' }}
                    whileInView={{ 
                      backgroundColor: '#5C9E31', 
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
                    borderColor: '#5C9E31',
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

      {/* ── SECCIÓN MOCKUPS COMPARATIVOS ADAPTABLES (POR TIPO DE PROYECTO: CORPORATIVA, LANDINGS, E-COMMERCE) ── */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 relative z-10 border-t border-carbon/10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-black text-carbon tracking-tighter">
            Una <span className="text-trebol">Web dentro de Otra Web.</span>
          </h2>
          <p className="text-xl text-carbon/70 font-light max-w-2xl mx-auto mt-4">
            Selecciona el tipo de proyecto web de tu interés y recorta con el deslizador para comparar un sitio viejo y obsoleto vs la plataforma nativa Trébol.
          </p>
        </div>

        {/* Modalidad Selector Tabs - 3 Project Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {projectTypes.map((m, idx) => (
            <button
              key={m.id}
              onClick={() => setActiveMode(idx)}
              className={`p-4 md:p-5 rounded-2xl font-bold text-sm md:text-base transition-all text-center border flex items-center justify-center h-16 cursor-pointer ${
                activeMode === idx
                  ? 'bg-carbon text-hueso shadow-xl border-2 border-trebol scale-[1.02]'
                  : 'bg-white text-carbon/70 border-neutral-200 hover:border-trebol/50 shadow-sm'
              }`}
            >
              <span className="font-black leading-tight">{m.label}</span>
            </button>
          ))}
        </div>

        {/* CONTENEDOR MARCO NAVEGADOR MACOS CON WEBS REALES */}
        <div className="bg-[#0b0c0e] text-neutral-100 rounded-[3.5rem] p-6 md:p-10 shadow-2xl border border-trebol/30 relative overflow-hidden flex flex-col items-center">
          
          {/* Header Bar Browser MacOS */}
          <div className="w-full flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="w-3.5 h-3.5 rounded-full bg-red-500/90 shadow-sm" />
              <span className="w-3.5 h-3.5 rounded-full bg-yellow-500/90 shadow-sm" />
              <span className="w-3.5 h-3.5 rounded-full bg-trebol shadow-sm" />
              <span className="text-xs font-mono text-neutral-400 ml-2">
                design-system-renderer — project_type: {projectTypes[activeMode].id}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-trebol font-bold bg-trebol/10 px-4 py-1.5 rounded-full border border-trebol/30">
                ◄ Desliza para revelar el salto de calidad ►
              </span>
            </div>
          </div>

          {/* VIEWPORT INTERACTIVO CON MOCKUPS ADAPTABLES SEGÚN EL TIPO DE PROYECTO */}
          <div className="relative w-full h-[580px] md:h-[650px] rounded-3xl overflow-hidden shadow-2xl border border-white/20 select-none bg-[#0a0a0a]">
            
            {/* 1. LADO DERECHO: LA NUEVA PLATAFORMA TRÉBOL EN CÓDIGO NATIVO */}
            <div className="absolute inset-0 w-full h-full overflow-hidden font-sans">
              {renderModernMockup(activeMode)}
            </div>

            {/* 2. LADO IZQUIERDO: EL SITIO VIEJO TRADICIONAL Y OBSOLETO ADAPTADO AL TIPO DE PROYECTO */}
            <div 
              className="absolute top-0 left-0 bottom-0 overflow-hidden z-10 border-r-4 border-white shadow-[15px_0_35px_rgba(0,0,0,0.8)]"
              style={{ width: `${sliderPos}%` }}
            >
              <div 
                className="w-full h-full"
                style={{ width: '1200px', maxWidth: 'none' }}
              >
                <BadOldWebMockup type={projectTypes[activeMode].id} styleName={projectTypes[activeMode].label} />
              </div>
            </div>

            {/* Range Input for Dragging */}
            <input
              type="range"
              min="5"
              max="95"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            />

            {/* Vertical Handle Line */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white pointer-events-none z-20 shadow-[0_0_20px_rgba(255,255,255,1)]"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white text-carbon font-bold flex items-center justify-center shadow-2xl border-2 border-trebol">
                <MoveHorizontal size={20} className="text-carbon" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── SECCIÓN CAPACIDADES: LO QUE PODEMOS HACER POR TU EMPRESA ────────────────── */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 relative z-10 border-t border-carbon/10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-black text-carbon tracking-tighter">
            Capacidades & Soluciones <br className="hidden md:block" /> de <span className="text-trebol">Clase Mundial.</span>
          </h2>
          <p className="text-xl text-carbon/70 font-light max-w-2xl mx-auto mt-4">
            Transformamos requerimientos técnicos y de negocio en soluciones digitales rentables de alta velocidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilitiesList.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="bg-white rounded-[2.5rem] p-8 border-2 border-trebol/40 hover:border-trebol shadow-[0_20px_50px_rgba(92,158,49,0.08)] hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-400 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-trebol/10 border border-trebol/30 flex items-center justify-center text-trebol mb-6">
                    <Icon size={28} />
                  </div>
                  <span className="text-xs font-mono text-trebol font-bold uppercase tracking-widest block mb-2">{item.role}</span>
                  <h3 className="text-2xl font-bold text-carbon mb-3">{item.name}</h3>
                  <p className="text-carbon/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Contact CTA Editorial ────────────────────── */}
      <section className="w-full bg-hueso pb-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto bg-white/60 backdrop-blur-2xl border border-white/80 rounded-[3rem] p-12 md:p-20 shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div>
              <h2 className="text-5xl md:text-7xl font-black text-carbon tracking-tighter leading-[0.9] mb-6">
                Construyamos tu <br />
                <span className="text-trebol">sitio web.</span>
              </h2>
              <p className="text-2xl text-carbon/70 font-light max-w-xl leading-relaxed">
                En 30 minutos cotizamos la arquitectura ideal para las necesidades de tu empresa.
              </p>
            </div>

            <Link
              href="/agenda"
              className="inline-flex items-center gap-2 bg-carbon text-hueso font-bold px-10 py-6 rounded-full hover:bg-trebol transition-colors duration-500 text-xl shrink-0 shadow-xl"
            >
              Solicitar propuesta web
              <ArrowUpRight size={22} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
