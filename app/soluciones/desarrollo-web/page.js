'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll } from 'framer-motion';
import { 
  ArrowUpRight, Laptop, Smartphone, Tablet, Gauge, CheckCircle2, 
  Code2, ShieldCheck, Zap, Layers, ChevronDown, Terminal, Cpu, Database, Globe, Sparkles, Check, X,
  MoveHorizontal, AlertTriangle, ArrowRight, Star, ShoppingBag, CreditCard, BarChart3, Lock,
  Search, User, ShoppingCart, Calendar, FileText, Activity, Server, Filter, Sparkle, Grid, ArrowDownRight,
  Download, MessageSquare, Compass, Rocket
} from 'lucide-react';

import { BadOldWebMockup } from '../../../components/desarrollo-web/mockups/BadOldWebMockup';
import { SwissMockup } from '../../../components/desarrollo-web/mockups/SwissMockup';
import { BrutalistMockup } from '../../../components/desarrollo-web/mockups/BrutalistMockup';
import { LuxuryMockup } from '../../../components/desarrollo-web/mockups/LuxuryMockup';
import { SpeedometerGauge, LighthouseGauge, ConversionGauge } from '../../../components/desarrollo-web/PerformanceGauges';
import Contact from '@/components/Contact';

const capabilitiesList = [
  { name: 'Renderizado Ultrarrápido & SEO Impecable', role: 'Carga Instantánea & SEO', desc: 'Desarrollamos páginas de carga instantánea optimizadas para posicionar en los primeros lugares de Google.', icon: Globe },
  { name: 'Componentes Dinámicos & UI de Alto Rendimiento', role: 'Interfaces Dinámicas', desc: 'Creamos plataformas con interfaces dinámicas, animaciones fluidas y estados reactivos a la medida.', icon: Code2 },
  { name: 'Carga en Milisegundos Sin Pesos Extra', role: 'Código Nativo Optimizado', desc: 'Código ligero sin plantillas pesadas ni plugins vulnerables que alentan la experiencia del usuario.', icon: Zap },
  { name: 'Panel Autoadministrable Sin Depender de Código', role: 'Panel Autoadministrable', desc: 'Integramos gestores intuitivos para que tu equipo edite contenidos, blogs y productos fácilmente.', icon: Database },
  { name: 'Infraestructura Global con 99.99% Disponibilidad', role: 'Infraestructura en la Nube', desc: 'Despliegue distribuido en servidores capaces de soportar tráfico masivo sin caídas.', icon: Server },
  { name: 'Pasarelas de Pago & Cobros Automatizados', role: 'Pagos Digitales Integrados', desc: 'Integración segura de pagos digitales con tarjetas, suscripciones y cobros locales.', icon: CreditCard },
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
    titulo: 'Desarrollo Nativo & Arquitectura Moderna', 
    desc: 'Programamos tu sitio con código nativo sin plantillas pesadas ni plugins vulnerables, garantizando rendimiento absoluto.',
    entregable: 'Código Fuente & Componentes Reutilizables',
  },
  { 
    paso: '03', 
    titulo: 'Optimización Core Web Vitals & SEO', 
    desc: 'Auditamos tiempos de carga, estructuras de datos, metadatos y accesibilidad para alcanzar máximas puntuaciones.',
    entregable: 'Reporte de Certificación Google Lighthouse',
  },
  { 
    paso: '04', 
    titulo: 'Integración CMS & Despliegue CDN', 
    desc: 'Conectamos tu panel autoadministrable intuitivo y desplegamos la plataforma en infraestructura global de alta velocidad.',
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
              El activo comercial clave para hacer crecer tu empresa
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
            Sitio Tradicional vs Plataforma Trébol Digital
          </h2>
          <p className="text-xl text-carbon/70 font-light max-w-2xl mx-auto mt-4">
            Tu web o app es la primera impresión de tu marca. Compara cómo una infraestructura moderna convierte más visitantes en clientes.
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

      {/* ── SECCIÓN ÚNICA 2: DE WORDPRESS A UNA PLATAFORMA WEB A MEDIDA DEL USUARIO ─────────────────── */}
      <section className="w-full bg-hueso py-24 md:py-32 px-6 md:px-12 relative z-10 border-t border-carbon/10">
        <div className="max-w-[1400px] mx-auto space-y-16">
          
          {/* ENCABEZADO CON BADGE ELEGANTE Y TIPOGRAFÍA MONUMENTAL */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono text-trebol font-bold uppercase tracking-widest bg-trebol/10 border border-trebol/20 px-4 py-1.5 rounded-full inline-block">
              EVOLUCIÓN DIGITAL EMPRESARIAL
            </span>
            <h2 className="text-4xl md:text-7xl font-black text-carbon tracking-tighter leading-[0.95]">
              Por qué debes migrar <br />
              <span className="text-trebol">de WordPress a una Web App a Medida</span>
            </h2>
            <p className="text-lg md:text-xl text-carbon/70 font-light max-w-2xl mx-auto mt-4 leading-relaxed font-sans">
              Tu empresa necesita una plataforma viva, ultrarrápida, segura y construida a la medida exacta de tus clientes.
            </p>
          </div>

          {/* TARJETAS COMPARATIVAS DE ALTO IMPACTO (DISENO BLANCO CON ICONOS LUCIDE) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* TARJETA 1: SITIO TRADICIONAL EN WORDPRESS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 md:p-12 rounded-[3rem] bg-white border border-rose-200 shadow-[0_10px_35px_rgba(244,63,94,0.06)] relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <span className="px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-600 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    Sitio Tradicional (WordPress)
                  </span>
                  <span className="text-xs font-mono text-carbon/50 font-medium">Tecnología Legada</span>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight text-carbon mb-2">
                    Limitaciones que frenan a tu empresa
                  </h3>
                  <p className="text-sm text-carbon/60 font-light">
                    Plantillas rígidas, código lento y alta fricción comercial.
                  </p>
                </div>

                <div className="space-y-3.5 font-sans text-sm md:text-base text-carbon/80">
                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-rose-50/50 border border-rose-100">
                    <div className="w-6 h-6 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                      <X size={15} strokeWidth={3} />
                    </div>
                    <div>
                      <strong className="text-carbon font-bold">Lentitud de plugins:</strong> Cargas de 4-8s que pierden el 50% de visitantes móviles.
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-rose-50/50 border border-rose-100">
                    <div className="w-6 h-6 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                      <X size={15} strokeWidth={3} />
                    </div>
                    <div>
                      <strong className="text-carbon font-bold">Fallos y vulnerabilidades:</strong> Riesgo constante de hackeos y parches caídos.
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-rose-50/50 border border-rose-100">
                    <div className="w-6 h-6 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                      <X size={15} strokeWidth={3} />
                    </div>
                    <div>
                      <strong className="text-carbon font-bold">Experiencia pasiva:</strong> Formularios estáticos sin respuesta inmediata al cliente.
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-rose-50/50 border border-rose-100">
                    <div className="w-6 h-6 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                      <X size={15} strokeWidth={3} />
                    </div>
                    <div>
                      <strong className="text-carbon font-bold">Plantillas rígidas:</strong> Imposible adaptarlas a los flujos reales de tu usuario.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100 font-mono text-xs text-rose-600 flex items-center justify-between">
                <span className="font-medium">Pérdida de prospectos</span>
                <span className="font-bold bg-rose-100 px-3 py-1 rounded-full border border-rose-200">Speed Score: ~45/100</span>
              </div>
            </motion.div>

            {/* TARJETA 2: PLATAFORMA WEB A MEDIDA DEL USUARIO (TRÉBOL DIGITAL) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="p-8 md:p-12 rounded-[3rem] bg-white border-2 border-trebol shadow-[0_20px_50px_rgba(92,158,49,0.12)] relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <span className="px-4 py-1.5 rounded-full bg-trebol/10 border border-trebol/30 text-trebol font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-trebol animate-ping" />
                    Web App a Medida (Trébol Digital)
                  </span>
                  <span className="text-xs font-mono text-trebol font-extrabold">Alto Rendimiento</span>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight text-carbon mb-2">
                    Una plataforma viva para tu cliente
                  </h3>
                  <p className="text-sm text-carbon/60 font-light">
                    Código nativo, ultra velocidad y máxima conversión.
                  </p>
                </div>

                <div className="space-y-3.5 font-sans text-sm md:text-base text-carbon/80">
                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-trebol/5 border border-trebol/20">
                    <div className="w-6 h-6 rounded-lg bg-trebol text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <Check size={15} strokeWidth={3} />
                    </div>
                    <div>
                      <strong className="text-carbon font-bold">Carga ultrarrápida (&lt; 0.8s):</strong> Navegación instantánea y mejor SEO en Google.
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-trebol/5 border border-trebol/20">
                    <div className="w-6 h-6 rounded-lg bg-trebol text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <Check size={15} strokeWidth={3} />
                    </div>
                    <div>
                      <strong className="text-carbon font-bold">Seguridad enterprise:</strong> Código privado y cerrado, sin plugins ni parches.
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-trebol/5 border border-trebol/20">
                    <div className="w-6 h-6 rounded-lg bg-trebol text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <Check size={15} strokeWidth={3} />
                    </div>
                    <div>
                      <strong className="text-carbon font-bold">UX 100% a medida:</strong> Diseñada para convertir visitas en ventas reales.
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-trebol/5 border border-trebol/20">
                    <div className="w-6 h-6 rounded-lg bg-trebol text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <Check size={15} strokeWidth={3} />
                    </div>
                    <div>
                      <strong className="text-carbon font-bold">Ecosistema escalable:</strong> Conexión fluida a tu CRM y pasarelas de pago.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100 font-mono text-xs text-trebol flex items-center justify-between">
                <span className="font-bold">+300% conversión comercial</span>
                <span className="font-bold bg-trebol text-white px-3.5 py-1 rounded-full shadow-sm">Speed Score: ~98/100</span>
              </div>
            </motion.div>

          </div>

          {/* 3 PILARES DE VALOR RELEVANTES CON ICONOS LUCIDE */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-8 rounded-[2.5rem] bg-white border border-neutral-200/80 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-trebol/10 border border-trebol/20 flex items-center justify-center text-trebol">
                <Zap size={22} strokeWidth={2.2} />
              </div>
              <h4 className="text-xl font-bold text-carbon">Velocidad & SEO Superior</h4>
              <p className="text-sm text-carbon/70 font-light leading-relaxed">
                Código nativo que posiciona en los primeros lugares de Google con puntaje 98/100.
              </p>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-white border border-neutral-200/80 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-trebol/10 border border-trebol/20 flex items-center justify-center text-trebol">
                <Sparkles size={22} strokeWidth={2.2} />
              </div>
              <h4 className="text-xl font-bold text-carbon">Experiencia a Medida</h4>
              <p className="text-sm text-carbon/70 font-light leading-relaxed">
                Cada pantalla se construye para guiarlos a la compra o cotización inmediata.
              </p>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-white border border-neutral-200/80 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-trebol/10 border border-trebol/20 flex items-center justify-center text-trebol">
                <ShieldCheck size={22} strokeWidth={2.2} />
              </div>
              <h4 className="text-xl font-bold text-carbon">Cero Mantenimiento Molesto</h4>
              <p className="text-sm text-carbon/70 font-light leading-relaxed">
                Sin parches semanales ni riesgos de fallos por plugins descontinuados.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECCIÓN MOCKUPS COMPARATIVOS ADAPTABLES (POR TIPO DE PROYECTO: CORPORATIVA, LANDINGS, E-COMMERCE) ── */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 relative z-10 border-t border-carbon/10">
        <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-black text-carbon tracking-tighter leading-[0.95]">
            Te Llevamos al Siguiente Paso <br />
            <span className="text-trebol">Tecnológico.</span>
          </h2>
          <p className="text-lg md:text-xl text-carbon/70 font-light max-w-2xl mx-auto mt-4 leading-relaxed font-sans">
            Tu sitio web es el activo comercial más importante de tu empresa. Usa el comparador interactivo para visualizar el salto tecnológico en tu industria.
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
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-black text-carbon tracking-tighter leading-[0.95]">
            Por qué una Web Profesional es <br className="hidden md:block" /> el <span className="text-trebol">Motor de tu Empresa.</span>
          </h2>
          <p className="text-lg md:text-xl text-carbon/70 font-light max-w-2xl mx-auto mt-4 leading-relaxed font-sans">
            Tu sitio web es la vitrina comercial de tu marca las 24 horas del día. Una infraestructura moderna genera autoridad inmediata, posiciona tu negocio y convierte visitas en clientes reales.
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

      {/* ── Contact CTA (mismo estilo que Home) ────────── */}
      <Contact />
    </main>
  );
}
