import os

code = ''''use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll } from 'framer-motion';
import { 
  ArrowUpRight, Laptop, Smartphone, Tablet, Gauge, CheckCircle2, 
  Code2, ShieldCheck, Zap, Layers, ChevronDown, Terminal, Cpu, Database, Globe, Sparkles, Check,
  MoveHorizontal, AlertTriangle, ArrowRight, Star, ShoppingBag, CreditCard, BarChart3, Lock,
  Search, User, ShoppingCart, Calendar, FileText, Activity, Server, Filter, Sparkle
} from 'lucide-react';

const techStack = [
  { name: 'Next.js 16', role: 'Framework React SSR/SSG', desc: 'Renderizado ultrarrápido del lado del servidor para un SEO impecable.', icon: Globe },
  { name: 'React 19', role: 'UI Library', desc: 'Componentes interactivos de alto rendimiento y estado reactivo.', icon: Code2 },
  { name: 'Tailwind CSS v4', role: 'Design System', desc: 'Estilos atómicos sin peso extra para tiempos de carga en milisegundos.', icon: Layers },
  { name: 'Sanity / Strapi', role: 'Headless CMS', desc: 'Panel de administración intuitivo para gestionar tu contenido sin tocar código.', icon: Database },
  { name: 'Vercel Edge CDN', role: 'Infraestructura Global', desc: 'Despliegue distribuido en servidores de borde con 99.99% de disponibilidad.', icon: Cpu },
  { name: 'Stripe & MercadoPago', role: 'Pasarelas de Pago', desc: 'Integración segura de cobros digitales, tarjetas, Apple Pay y pagos locales.', icon: ShieldCheck },
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

const designModes = [
  { id: 'b2b', label: '1. Portal B2B Enterprise (Nexus Tech)', metric: '+280% Conversión de Leads' },
  { id: 'ecommerce', label: '2. E-Commerce & Luxury (Aura Paris)', metric: '+3.4x Tasa de Finalización' },
  { id: 'saas', label: '3. Dashboard AI App (Vortex AI)', metric: '99/100 Google Lighthouse' },
  { id: 'institutional', label: '4. Portal Salud (Valo Health)', metric: 'Acceso Universal & SSL A+' },
];

export default function DesarrolloWebPage() {
  const [isBefore, setIsBefore] = useState(false);
  const [activeMode, setActiveMode] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);

  // Ref para el progreso de scroll progresivo de la barra continua
  const roadmapRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: roadmapRef,
    offset: ["start 65%", "end 75%"]
  });

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
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-trebol bg-trebol/10 px-4 py-1.5 rounded-full mb-4 inline-block border border-trebol/20">
            Demostración de Impacto Real
          </span>
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
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all ${
                isBefore ? 'bg-red-500/20 text-red-600 border border-red-500/40' : 'text-carbon/60 hover:text-carbon'
              }`}
            >
              Sitio Web Tradicional (WordPress)
            </button>
            <button
              onClick={() => setIsBefore(false)}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all ${
                !isBefore ? 'bg-trebol text-white shadow-lg' : 'text-carbon/60 hover:text-carbon'
              }`}
            >
              Trébol Web Next.js (Optimizado)
            </button>
          </div>
        </div>

        {/* Comparison Display Panel */}
        <div className="bg-carbon text-hueso border border-white/10 rounded-[3.5rem] p-8 md:p-14 shadow-2xl grid md:grid-cols-3 gap-8 items-center font-sans">
          <div className="text-center md:text-left space-y-2">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block">Velocidad de Carga</span>
            <span className={`text-6xl md:text-7xl font-black font-mono ${isBefore ? 'text-red-400' : 'text-trebol'}`}>
              {isBefore ? '5.8s' : '1.1s'}
            </span>
            <p className="text-sm text-neutral-300 font-light leading-relaxed">
              {isBefore ? 'Lento. El 40% de los usuarios abandona la página antes de cargar por completo.' : 'Ultrarrápido. Carga instantánea que retiene al 99% de tus visitantes.'}
            </p>
          </div>

          <div className="text-center md:text-left space-y-2 border-y md:border-y-0 md:border-x border-white/10 py-6 md:py-0 md:px-8">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block">Google Speed Index</span>
            <span className={`text-6xl md:text-7xl font-black font-mono ${isBefore ? 'text-yellow-400' : 'text-trebol'}`}>
              {isBefore ? '42/100' : '99/100'}
            </span>
            <p className="text-sm text-neutral-300 font-light leading-relaxed">
              {isBefore ? 'Penalizado en motores de búsqueda por sobrecarga de plugins y plantillas pesadas.' : 'Calificación perfecta en Google Lighthouse con SEO técnico impecable.'}
            </p>
          </div>

          <div className="text-center md:text-left space-y-2">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block">Tasa de Conversión</span>
            <span className={`text-6xl md:text-7xl font-black font-mono ${isBefore ? 'text-neutral-500' : 'text-trebol'}`}>
              {isBefore ? '1.2%' : '4.8%'}
            </span>
            <p className="text-sm text-neutral-300 font-light leading-relaxed">
              {isBefore ? 'Baja tasa de conversión de visitantes en prospectos calificados.' : '4 veces más prospectos generados con el mismo volumen de tráfico.'}
            </p>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN ÚNICA 2: HOJA DE RUTA EN 4 PASOS ─────────────────── */}
      <section ref={roadmapRef} className="w-full bg-hueso py-24 px-6 md:px-12 relative z-10 border-t border-carbon/10">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-trebol bg-trebol/10 px-4 py-2 rounded-full mb-4 inline-block border border-trebol/20">
              Metodología de Desarrollo
            </span>
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

      {/* ── SECCIÓN ÚNICA 3: MOCKUPS DE WEBS COMPLETAS CON IDENTIDAD Y ESTILO 100% ÚNICO POR INDUSTRIA ── */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 relative z-10 border-t border-carbon/10">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-trebol bg-trebol/10 px-4 py-1.5 rounded-full mb-4 inline-block border border-trebol/20">
            Showcase de Marcas & Arquitecturas Web Reales
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-carbon tracking-tighter">
            Una <span className="text-trebol">Web dentro de Otra Web.</span>
          </h2>
          <p className="text-xl text-carbon/70 font-light max-w-2xl mx-auto mt-4">
            Selecciona una industria y desliza la barra central para recortar entre la plantilla antigua en código y la web a medida con identidad propia.
          </p>
        </div>

        {/* Modalidad Selector Tabs - 4 TIPOS DE PROYECTO WEB CON IDENTIDAD PROPIA */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {designModes.map((m, idx) => (
            <button
              key={m.id}
              onClick={() => setActiveMode(idx)}
              className={`p-4 md:p-5 rounded-2xl font-bold text-xs md:text-sm transition-all text-left border flex flex-col justify-between h-24 ${
                activeMode === idx
                  ? 'bg-carbon text-hueso shadow-xl border-2 border-trebol scale-[1.02]'
                  : 'bg-white text-carbon/70 border-neutral-200 hover:border-trebol/50 shadow-sm'
              }`}
            >
              <span className="font-mono text-[10px] text-trebol font-bold uppercase tracking-wider">{m.id.toUpperCase()}</span>
              <span className="font-black leading-tight text-sm">{m.label}</span>
            </button>
          ))}
        </div>

        {/* CONTENEDOR MARCO NAVEGADOR MACOS CON DOS WEBS REALES RENDERIZADAS EN CÓDIGO NATIVO */}
        <div className="bg-[#0b0c0e] text-neutral-100 rounded-[3.5rem] p-6 md:p-10 shadow-2xl border border-trebol/30 relative overflow-hidden flex flex-col items-center">
          
          {/* Header Bar Browser MacOS */}
          <div className="w-full flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="w-3.5 h-3.5 rounded-full bg-red-500/90 shadow-sm" />
              <span className="w-3.5 h-3.5 rounded-full bg-yellow-500/90 shadow-sm" />
              <span className="w-3.5 h-3.5 rounded-full bg-trebol shadow-sm" />
              <span className="text-xs font-mono text-neutral-400 ml-2">live-web-renderer — brand: {designModes[activeMode].id}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-trebol font-bold bg-trebol/10 px-4 py-1.5 rounded-full border border-trebol/30">
                ◄ Desliza la barra para comparar el código ►
              </span>
            </div>
          </div>

          {/* VIEWPORT INTERACTIVO CON MOCKUPS WEBS 100% ÚNICAS EN ESTILO Y MARCA */}
          <div className="relative w-full h-[540px] md:h-[620px] rounded-3xl overflow-hidden shadow-2xl border border-white/20 select-none bg-[#0a0a0a]">
            
            {/* 1. LADO DERECHO: LA NUEVA WEB A MEDIDA CON SU PROPIA IDENTIDAD VISUAL DE MARCA */}
            <div className="absolute inset-0 w-full h-full overflow-hidden font-sans">

              {/* BRAND 1: NEXUS TECH B2B (Cyberpunk Fintech Style - Azul Eléctrico & Negro Profundo) */}
              {activeMode === 0 && (
                <div className="w-full h-full bg-[#050b14] text-sky-100 p-6 md:p-10 flex flex-col justify-between">
                  <div className="flex justify-between items-center border-b border-sky-900/50 pb-4">
                    <div className="flex items-center gap-2 font-mono font-bold text-sky-400 tracking-widest text-sm">
                      <span className="w-3 h-3 rounded-full bg-sky-400 animate-ping" />
                      NEXUS // ENTERPRISE
                    </div>
                    <div className="flex items-center gap-4 text-xs font-mono text-sky-300">
                      <span className="bg-sky-500/10 px-3 py-1 rounded border border-sky-500/30 text-sky-400">● API v4.2 Connected</span>
                      <button className="bg-sky-400 text-slate-950 font-bold px-4 py-1.5 rounded hover:bg-white transition-colors">
                        Launch Terminal ⚡
                      </button>
                    </div>
                  </div>

                  <div className="my-auto space-y-5">
                    <span className="text-[10px] font-mono text-sky-400 uppercase tracking-widest bg-sky-950 px-3 py-1 rounded border border-sky-800 inline-block">
                      Global Supply Chain Intelligence
                    </span>
                    <h3 className="text-3xl md:text-5xl font-black text-white leading-tight font-sans tracking-tight">
                      Next-Gen Enterprise <br />
                      <span className="text-sky-400">Logistics Network.</span>
                    </h3>
                    <p className="text-xs md:text-sm text-sky-200/80 max-w-lg leading-relaxed font-light">
                      Real-time telemetry and automated route optimization across 140 global distribution nodes.
                    </p>

                    <div className="grid grid-cols-3 gap-3 pt-2">
                      <div className="bg-sky-950/60 p-3.5 rounded-xl border border-sky-800/60 font-mono">
                        <span className="text-[10px] text-sky-400 block">THROUGHPUT</span>
                        <span className="text-sm font-bold text-white">4.2 TB/s</span>
                      </div>
                      <div className="bg-sky-950/60 p-3.5 rounded-xl border border-sky-800/60 font-mono">
                        <span className="text-[10px] text-sky-400 block">LATENCY</span>
                        <span className="text-sm font-bold text-sky-300">12ms Edge</span>
                      </div>
                      <div className="bg-sky-950/60 p-3.5 rounded-xl border border-sky-800/60 font-mono">
                        <span className="text-[10px] text-sky-400 block">UPTIME</span>
                        <span className="text-sm font-bold text-white">99.999%</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center border-t border-sky-900/50 pt-3 text-xs font-mono text-sky-400/80">
                    <span>Identity: Nexus Tech B2B Architecture</span>
                    <span>Status: Fully Operational</span>
                  </div>
                </div>
              )}

              {/* BRAND 2: AURA LUXURY FASHION (High-Fashion Editorial Style - Blanco Pulcro & Terracota) */}
              {activeMode === 1 && (
                <div className="w-full h-full bg-[#FAF8F5] text-[#2C2523] p-6 md:p-10 flex flex-col justify-between font-serif">
                  <div className="flex justify-between items-center border-b border-[#E5DFD9] pb-4 font-sans">
                    <span className="font-serif tracking-[0.3em] font-bold text-xl text-[#2C2523]">A U R A</span>
                    <div className="hidden md:flex gap-6 text-xs uppercase tracking-widest text-neutral-600">
                      <span>Collection 2026</span>
                      <span>Atelier</span>
                      <span>Runway</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-sans">
                      <span className="text-xs uppercase tracking-wider font-bold">Cart (0)</span>
                      <button className="bg-[#2C2523] text-white px-5 py-2 rounded-full text-xs font-sans tracking-wider uppercase">
                        Explore Store
                      </button>
                    </div>
                  </div>

                  <div className="my-auto space-y-4">
                    <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#B58A63] font-bold block">
                      Haute Couture — Spring Edition
                    </span>
                    <h3 className="text-3xl md:text-5xl font-serif text-[#2C2523] leading-tight font-normal">
                      Minimalist Organic <br />
                      <span className="italic font-light">Luxury Aesthetics.</span>
                    </h3>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4 font-sans">
                      <div className="bg-white p-3 rounded-xl border border-[#E5DFD9] space-y-2 shadow-sm">
                        <div className="w-full h-24 bg-[#F2EDE7] rounded-lg flex items-center justify-center text-[10px] text-neutral-500 uppercase tracking-widest font-bold">
                          Silk Trench Coat
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-bold">$2,800 USD</span>
                          <span className="text-[10px] text-[#B58A63] font-bold">In Stock</span>
                        </div>
                      </div>

                      <div className="bg-white p-3 rounded-xl border border-[#E5DFD9] space-y-2 shadow-sm">
                        <div className="w-full h-24 bg-[#F2EDE7] rounded-lg flex items-center justify-center text-[10px] text-neutral-500 uppercase tracking-widest font-bold">
                          Leather Booties
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-bold">$1,450 USD</span>
                          <span className="text-[10px] text-[#B58A63] font-bold">In Stock</span>
                        </div>
                      </div>

                      <div className="hidden md:block bg-white p-3 rounded-xl border border-[#E5DFD9] space-y-2 shadow-sm">
                        <div className="w-full h-24 bg-[#F2EDE7] rounded-lg flex items-center justify-center text-[10px] text-neutral-500 uppercase tracking-widest font-bold">
                          Cashmere Scarf
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-bold">$680 USD</span>
                          <span className="text-[10px] text-[#B58A63] font-bold">Limited</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center border-t border-[#E5DFD9] pt-3 text-xs font-sans text-neutral-500">
                    <span>Identity: Aura Paris Editorial Design</span>
                    <span>Checkout: Instant Apple Pay Ready</span>
                  </div>
                </div>
              )}

              {/* BRAND 3: VORTEX AI SAAS APP (Cyber Neon Style - Púrpura Neón & Magenta) */}
              {activeMode === 2 && (
                <div className="w-full h-full bg-[#0d0714] text-purple-100 p-6 md:p-10 flex flex-col justify-between font-sans">
                  <div className="flex justify-between items-center border-b border-purple-900/50 pb-4">
                    <div className="flex items-center gap-2 font-mono font-bold text-fuchsia-400 text-sm">
                      <Sparkle size={16} className="text-fuchsia-400 animate-spin" />
                      VORTEX AI ENGINE
                    </div>
                    <div className="flex items-center gap-3 text-xs font-mono">
                      <span className="bg-fuchsia-500/10 text-fuchsia-300 px-3 py-1 rounded-full border border-fuchsia-500/30">Node 1,024 Active</span>
                      <button className="bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white font-bold px-4 py-1.5 rounded-full text-xs shadow-lg">
                        Deploy Model 🚀
                      </button>
                    </div>
                  </div>

                  <div className="my-auto space-y-5">
                    <span className="text-[10px] font-mono text-fuchsia-400 uppercase tracking-widest bg-purple-950 px-3 py-1 rounded-full border border-purple-800 inline-block">
                      Neural Inference Dashboard
                    </span>
                    <h3 className="text-3xl md:text-5xl font-black text-white leading-tight">
                      Automated Machine <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400">Learning Pipeline.</span>
                    </h3>

                    <div className="grid grid-cols-3 gap-3 font-mono">
                      <div className="bg-purple-950/40 p-3.5 rounded-2xl border border-purple-800/40">
                        <span className="text-[10px] text-fuchsia-400 block">LATENCY</span>
                        <span className="text-lg font-black text-white">4.2ms</span>
                      </div>
                      <div className="bg-purple-950/40 p-3.5 rounded-2xl border border-purple-800/40">
                        <span className="text-[10px] text-fuchsia-400 block">ACCURACY</span>
                        <span className="text-lg font-black text-fuchsia-300">99.84%</span>
                      </div>
                      <div className="bg-purple-950/40 p-3.5 rounded-2xl border border-purple-800/40">
                        <span className="text-[10px] text-fuchsia-400 block">REQUESTS</span>
                        <span className="text-lg font-black text-white">84.2K/m</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center border-t border-purple-900/50 pt-3 text-xs font-mono text-purple-400">
                    <span>Identity: Vortex AI Cyber UI</span>
                    <span>GPU Acceleration: Enabled</span>
                  </div>
                </div>
              )}

              {/* BRAND 4: VALO HEALTHCARE (Clean Clinical Style - Turquesa Médico & Menta) */}
              {activeMode === 3 && (
                <div className="w-full h-full bg-[#F0FDFA] text-[#0F766E] p-6 md:p-10 flex flex-col justify-between font-sans">
                  <div className="flex justify-between items-center border-b border-teal-200 pb-4">
                    <div className="flex items-center gap-2 font-bold text-teal-900 text-lg">
                      <div className="w-7 h-7 rounded-lg bg-teal-600 text-white flex items-center justify-center font-black text-xs">+</div>
                      VALO HEALTH & CLINIC
                    </div>
                    <div className="flex items-center gap-3 text-xs font-medium">
                      <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full font-bold">● 24/7 Virtual Care</span>
                      <button className="bg-teal-700 text-white font-bold px-5 py-2 rounded-full text-xs hover:bg-teal-800 shadow">
                        Book Appointment 🗓️
                      </button>
                    </div>
                  </div>

                  <div className="my-auto space-y-4">
                    <span className="text-xs font-bold text-teal-700 uppercase tracking-widest bg-teal-100 px-3 py-1 rounded-full inline-block">
                      Patient Portal & Telemedicine
                    </span>
                    <h3 className="text-3xl md:text-5xl font-black text-teal-950 leading-tight">
                      Empowering Next-Gen <br />
                      <span className="text-teal-600">Clinical Excellence.</span>
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                      <div className="bg-white p-3.5 rounded-2xl border border-teal-200 shadow-sm space-y-1">
                        <span className="text-xs font-bold text-teal-950 block">Dr. Sarah Jenkins</span>
                        <span className="text-[10px] text-teal-600 block">Cardiology Specialist</span>
                        <span className="text-[10px] font-bold text-teal-700 block">Next Available: Today 14:00</span>
                      </div>
                      <div className="bg-white p-3.5 rounded-2xl border border-teal-200 shadow-sm space-y-1">
                        <span className="text-xs font-bold text-teal-950 block">Teleconsultation</span>
                        <span className="text-[10px] text-teal-600 block">HD Video & Encrypted</span>
                        <span className="text-[10px] font-bold text-teal-700 block">Instant Access</span>
                      </div>
                      <div className="hidden md:block bg-white p-3.5 rounded-2xl border border-teal-200 shadow-sm space-y-1">
                        <span className="text-xs font-bold text-teal-950 block">Lab Results</span>
                        <span className="text-[10px] text-teal-600 block">Automated Portal</span>
                        <span className="text-[10px] font-bold text-teal-700 block">SOC2 Compliant</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center border-t border-teal-200 pt-3 text-xs text-teal-700">
                    <span>Identity: Valo Health Clinical Architecture</span>
                    <span className="font-bold">WCAG AAA Accessibility Certified</span>
                  </div>
                </div>
              )}

            </div>

            {/* 2. LADO IZQUIERDO: LA WEB VIEJA TRADICIONAL MOCKUP EN CÓDIGO NATIVO (ANTES / WORDPRESS OBSOLETO) */}
            <div 
              className="absolute top-0 left-0 bottom-0 overflow-hidden z-10 border-r-4 border-white shadow-[15px_0_35px_rgba(0,0,0,0.8)]"
              style={{ width: `${sliderPos}%` }}
            >
              <div 
                className="w-full h-full bg-[#dce3ec] text-[#222222] p-6 md:p-10 flex flex-col justify-between font-serif border-r border-gray-400"
                style={{ width: '1000px', maxWidth: 'none' }}
              >
                {/* Clunky Old Web Header */}
                <div className="bg-[#1e3a8a] text-white p-3 rounded-md flex justify-between items-center text-xs font-sans">
                  <div className="flex items-center gap-2">
                    <span className="font-bold uppercase tracking-wider">Plantilla_Generica_{designModes[activeMode].id}_v2016.php</span>
                  </div>
                  <span className="bg-red-600 px-2.5 py-1 rounded text-[10px] font-mono font-bold">⚠️ WordPress 4.9 (Plugins Lentos)</span>
                </div>

                {/* Old Nav Bar Mockup */}
                <div className="bg-gray-200 text-gray-700 text-[11px] font-sans p-2 rounded flex gap-4 font-bold border border-gray-300">
                  <span>INICIO</span>
                  <span>NOSOTROS</span>
                  <span>SERVICIOS</span>
                  <span>PRODUCTOS</span>
                  <span>GALERÍA</span>
                  <span>CONTACTO</span>
                </div>

                {/* RENDERIZADO DINÁMICO DE PÁGINA VIEJA MOCKUP SEGÚN PESTAÑA */}
                {activeMode === 0 && (
                  <div className="my-auto space-y-4 font-sans bg-white p-6 rounded-xl border border-gray-300 shadow-md max-w-xl">
                    <span className="text-xs text-red-600 font-bold uppercase tracking-wider flex items-center gap-1">
                      <AlertTriangle size={14} /> Tiempo de Carga: 5.8 segundos (Error 404)
                    </span>
                    <h3 className="text-2xl font-bold text-[#1e3a8a] font-serif">
                      ¡Bienvenidos a Nuestra Empresa B2B!
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed font-sans">
                      Somos una empresa prestadora de servicios. Haga clic abajo para descargar nuestro catálogo en PDF (45 MB) o llamar por teléfono al conmutador.
                    </p>
                    <div className="pt-2">
                      <button className="bg-blue-800 text-white font-bold text-xs px-5 py-2.5 rounded shadow">
                        [ DESCARGAR CATÁLOGO PDF (45MB) ]
                      </button>
                    </div>
                  </div>
                )}

                {activeMode === 1 && (
                  <div className="my-auto space-y-4 font-sans bg-white p-6 rounded-xl border border-gray-300 shadow-md max-w-xl">
                    <span className="text-xs text-red-600 font-bold uppercase tracking-wider flex items-center gap-1">
                      <AlertTriangle size={14} /> ⚠️ Error 504: Pasarela de Pago Caída
                    </span>
                    <h3 className="text-2xl font-bold text-[#1e3a8a] font-serif">
                      Tienda Virtual de Productos
                    </h3>
                    <div className="border border-gray-300 p-3 rounded text-xs text-gray-500 font-mono">
                      Formulario de Checkout: 14 Campos requeridos (Nombre, Dirección, CP, RFC, Banco, Comprobante).
                    </div>
                    <button className="bg-gray-700 text-white font-bold text-xs px-5 py-2.5 rounded shadow">
                      [ ENVIAR SOLICITUD DE COMPRA ]
                    </button>
                  </div>
                )}

                {activeMode === 2 && (
                  <div className="my-auto space-y-4 font-sans bg-white p-6 rounded-xl border border-gray-300 shadow-md max-w-xl">
                    <span className="text-xs text-red-600 font-bold uppercase tracking-wider flex items-center gap-1">
                      <AlertTriangle size={14} /> ⚠️ 82 Plugins Sobrecargados
                    </span>
                    <h3 className="text-2xl font-bold text-[#1e3a8a] font-serif">
                      Sistema de Administración v1.0
                    </h3>
                    <div className="bg-gray-100 p-4 rounded text-xs font-mono text-gray-600 border border-gray-300">
                      Cargando datos del servidor... (Tiempo estimado de espera: 12 segundos)
                    </div>
                  </div>
                )}

                {activeMode === 3 && (
                  <div className="my-auto space-y-4 font-sans bg-white p-6 rounded-xl border border-gray-300 shadow-md max-w-xl">
                    <span className="text-xs text-red-600 font-bold uppercase tracking-wider flex items-center gap-1">
                      <AlertTriangle size={14} /> Sitio No Seguro (HTTP)
                    </span>
                    <h3 className="text-2xl font-bold text-[#1e3a8a] font-serif">
                      Directorio Institucional
                    </h3>
                    <p className="text-xs text-gray-600 font-sans">
                      Para solicitar atención o consultar información institucional, acuda a nuestras oficinas en horario de atención de Lunes a Viernes.
                    </p>
                  </div>
                )}

                {/* Old Footer */}
                <div className="bg-gray-300 p-3 rounded text-[11px] font-sans text-gray-700 flex justify-between">
                  <span>Copyright © 2016 Todos los Derechos Reservados</span>
                  <span className="text-red-700 font-mono font-bold">Google Speed Index: 42/100</span>
                </div>
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

          {/* Footer Bar */}
          <div className="w-full flex items-center justify-between border-t border-white/10 pt-4 mt-6 text-xs text-neutral-400 font-mono">
            <span>4 Marcas Reales con Estilo & Estética Única Renderizadas 100% en Código</span>
            <span className="text-trebol font-bold">⚡ Desliza para recortar</span>
          </div>

        </div>
      </section>

      {/* ── SECCIÓN ÚNICA 4: STACK TECNOLÓGICO MATRIZ ────────────────── */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 relative z-10 border-t border-carbon/10">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-trebol bg-trebol/10 px-4 py-1.5 rounded-full mb-4 inline-block border border-trebol/20">
            Nuestra Arquitectura Tecnológica
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-carbon tracking-tighter">
            Tecnologías de Clase Mundial.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techStack.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="bg-white/80 backdrop-blur-2xl border border-white rounded-[2.5rem] p-8 hover:border-trebol/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-trebol/10 border border-trebol/30 flex items-center justify-center text-trebol mb-6">
                    <Icon size={28} />
                  </div>
                  <span className="text-xs font-mono text-trebol font-bold uppercase tracking-widest block mb-2">{tech.role}</span>
                  <h3 className="text-2xl font-bold text-carbon mb-3">{tech.name}</h3>
                  <p className="text-carbon/70 text-sm leading-relaxed">{tech.desc}</p>
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
'''

with open(r'c:\Users\gadiel.palma\Downloads\trebol digital\trebol-digital-web\app\soluciones\desarrollo-web\page.js', 'w', encoding='utf-8') as f:
    f.write(code)

print("SUCCESS")
