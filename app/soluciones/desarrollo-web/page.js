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
import ClientLogosBanner from '@/components/ClientLogosBanner';

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
            className="text-5xl md:text-8xl lg:text-[7.5rem] font-black text-carbon leading-[0.95] md:leading-[0.9] tracking-tighter"
          >
            Sitios Web Profesionales <br className="hidden md:block" />
            que Atraen y Convierten <span className="text-trebol">Clientes.</span>
          </motion.h1>
        </div>

        {/* Panoramic Hero Image Banner */}
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

      {/* ── SECCIÓN COMPARATIVA EN 2 COLUMNAS PERFECTAS ── */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 relative z-10 border-t border-carbon/10">
        <div className="space-y-12">

          {/* ENCABEZADO CON TIPOGRAFÍA MONUMENTAL */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl md:text-7xl font-black text-carbon tracking-tighter leading-[0.95]">
              Por qué tu empresa necesita <br />
              <span className="text-trebol">una Web App a Medida</span>
            </h2>
            <p className="text-lg md:text-xl text-carbon/70 font-light max-w-2xl mx-auto mt-4 leading-relaxed font-sans">
              Tu empresa necesita una plataforma viva, ultrarrápida, segura y construida a la medida exacta de tus clientes.
            </p>
          </div>

          {/* Toggle Switch de Estado */}
          <div className="flex justify-center">
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

          {/* GRID PRINCIPAL DE 2 COLUMNAS (6 COLS IZQUIERDA + 6 COLS DERECHA) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* COLUMNA 1 IZQUIERDA (TELEMETRÍA DE RENDIMIENTO CON TÍTULO) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 bg-white border-2 border-neutral-200/90 rounded-[3rem] p-8 md:p-10 shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight text-carbon mb-2">
                    Telemetría de Rendimiento
                  </h3>
                  <p className="text-sm text-carbon/75 font-medium">
                    Monitoreo en tiempo real de velocidad, Core Web Vitals y tasa de conversión.
                  </p>
                </div>

                {/* Fila Superior: 2 Medidores Amplios en 2 Columnas */}
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-neutral-100">
                  <div className="flex justify-center border-r border-neutral-100 pr-2">
                    <SpeedometerGauge isBefore={isBefore} />
                  </div>
                  <div className="flex justify-center pl-2">
                    <LighthouseGauge isBefore={isBefore} />
                  </div>
                </div>

                {/* Fila Inferior: Tasa de Conversión a todo el ancho */}
                <div>
                  <ConversionGauge isBefore={isBefore} />
                </div>
              </div>
            </motion.div>

            {/* COLUMNA 2 DERECHA (TARJETA DINÁMICA QUE CAMBIA SEGÚN EL TOGGLE) */}
            <motion.div
              key={isBefore ? 'before-card' : 'after-card'}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className={`lg:col-span-6 p-8 md:p-10 rounded-[3rem] bg-white border-2 transition-all duration-500 shadow-xl relative overflow-hidden flex flex-col justify-between ${
                isBefore
                  ? 'border-red-500 shadow-[0_20px_50px_rgba(220,38,38,0.15)] bg-rose-50/20'
                  : 'border-trebol shadow-[0_20px_50px_rgba(92,158,49,0.15)] bg-trebol/5'
              }`}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight text-carbon mb-2">
                    {isBefore ? 'Plataforma rígida y vulnerable' : 'Una plataforma viva para tu cliente'}
                  </h3>
                  <p className="text-sm text-carbon/75 font-medium">
                    {isBefore
                      ? 'Arquitectura obsoleta, carga lenta y pérdida masiva de ventas.'
                      : 'Arquitectura moderna, ultra velocidad y máxima conversión.'}
                  </p>
                </div>

                <div className="space-y-3.5 font-sans text-sm md:text-base text-carbon">
                  {isBefore ? (
                    <>
                      <div className="flex items-start gap-3 p-3 rounded-2xl bg-rose-100/70 border border-rose-200">
                        <div className="w-6 h-6 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                          <X size={15} strokeWidth={3} />
                        </div>
                        <div>
                          <strong className="text-rose-950 font-bold">Carga lenta (&gt; 5.8s):</strong> Abandono masivo de usuarios antes de ver tus productos.
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 rounded-2xl bg-rose-100/70 border border-rose-200">
                        <div className="w-6 h-6 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                          <X size={15} strokeWidth={3} />
                        </div>
                        <div>
                          <strong className="text-rose-950 font-bold">Vulnerabilidades de seguridad:</strong> Riesgo constante de caídas por componentes desactualizados.
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 rounded-2xl bg-rose-100/70 border border-rose-200">
                        <div className="w-6 h-6 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                          <X size={15} strokeWidth={3} />
                        </div>
                        <div>
                          <strong className="text-rose-950 font-bold">Diseño rígido:</strong> Apariencia genérica e inflexible igual a cientos de sitios.
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 rounded-2xl bg-rose-100/70 border border-rose-200">
                        <div className="w-6 h-6 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                          <X size={15} strokeWidth={3} />
                        </div>
                        <div>
                          <strong className="text-rose-950 font-bold">Fugas en el embudo:</strong> Pérdida de hasta el 75% del tráfico pagado.
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-start gap-3 p-3 rounded-2xl bg-trebol/10 border border-trebol/20">
                        <div className="w-6 h-6 rounded-lg bg-trebol text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                          <Check size={15} strokeWidth={3} />
                        </div>
                        <div>
                          <strong className="text-carbon font-bold">Carga ultrarrápida (&lt; 0.8s):</strong> Navegación instantánea y mejor SEO en Google.
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 rounded-2xl bg-trebol/10 border border-trebol/20">
                        <div className="w-6 h-6 rounded-lg bg-trebol text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                          <Check size={15} strokeWidth={3} />
                        </div>
                        <div>
                          <strong className="text-carbon font-bold">Seguridad enterprise:</strong> Código privado y cerrado, máxima protección de datos.
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 rounded-2xl bg-trebol/10 border border-trebol/20">
                        <div className="w-6 h-6 rounded-lg bg-trebol text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                          <Check size={15} strokeWidth={3} />
                        </div>
                        <div>
                          <strong className="text-carbon font-bold">UX 100% a medida:</strong> Diseñada para convertir visitas en ventas reales.
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 rounded-2xl bg-trebol/10 border border-trebol/20">
                        <div className="w-6 h-6 rounded-lg bg-trebol text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                          <Check size={15} strokeWidth={3} />
                        </div>
                        <div>
                          <strong className="text-carbon font-bold">Ecosistema escalable:</strong> Conexión fluida a tu CRM y pasarelas de pago.
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-neutral-200/80 font-mono text-xs flex items-center justify-between transition-colors">
                <span className={`font-bold ${isBefore ? 'text-red-600' : 'text-trebol'}`}>
                  {isBefore ? 'Pérdida masiva de prospectos' : '+300% conversión comercial'}
                </span>
                <span className={`font-bold text-white px-3.5 py-1 rounded-full shadow-sm ${
                  isBefore ? 'bg-red-600' : 'bg-trebol'
                }`}>
                  {isBefore ? 'Speed Score: ~42/100' : 'Speed Score: ~98/100'}
                </span>
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
              className={`p-4 md:p-5 rounded-2xl font-bold text-sm md:text-base transition-all text-center border flex items-center justify-center h-16 cursor-pointer ${activeMode === idx
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
                treboldigital.com/demo — {projectTypes[activeMode].label}
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
            <div className="absolute inset-0 w-full h-full overflow-hidden font-sans z-0 isolate">
              <div className="w-full h-full min-w-[1000px] relative z-0">
                {renderModernMockup(activeMode)}
              </div>
            </div>

            {/* 2. LADO IZQUIERDO: EL SITIO VIEJO TRADICIONAL Y OBSOLETO ADAPTADO AL TIPO DE PROYECTO */}
            <div
              className="absolute top-0 left-0 bottom-0 overflow-hidden z-20 isolate bg-[#e3e8f0] border-r-4 border-white shadow-[15px_0_35px_rgba(0,0,0,0.8)]"
              style={{ width: `${sliderPos}%` }}
            >
              <div className="w-full h-full min-w-[1000px] relative z-10">
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
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-carbon/95 text-white text-[11px] font-mono font-bold px-4 py-2 rounded-full shadow-2xl border-2 border-trebol flex items-center gap-2 z-40 pointer-events-none">
                <span>↔ Mueve la barra para comparar antes y después</span>
              </div>
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

      {/* ── BANNER CTA ESPECÍFICO WEB ────────── */}
      <section className="w-full bg-carbon relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left — headline */}
            <div className="flex flex-col gap-6 max-w-2xl">

              <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.92]">
                ¿Listo para transformar<br />
                tu <span className="text-trebol">presencia</span> en línea?
              </h3>
              <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed max-w-lg">
                Analizamos tu sitio actual y te decimos exactamente qué necesita — sin compromiso.
              </p>
            </div>

            {/* Right — CTA */}
            <div className="flex flex-col gap-3 shrink-0">
              <a
                href="/agenda"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-trebol text-white font-bold text-base rounded-full hover:bg-white hover:text-carbon transition-all duration-300 shadow-sm cursor-pointer whitespace-nowrap"
              >
                Agenda tu diagnóstico gratuito
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* ── CLIENTES / LOGOS MARQUEE ────────── */}
      <ClientLogosBanner />

      {/* ── Contact CTA (mismo estilo que Home) ────────── */}
      <Contact />
    </main>
  );
}
