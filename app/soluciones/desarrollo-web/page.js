'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, Laptop, Smartphone, Tablet, Gauge, CheckCircle2, 
  Code2, ShieldCheck, Zap, Layers, ChevronDown, Terminal, Cpu, Database, Globe
} from 'lucide-react';

const viewports = [
  { id: 'desktop', label: 'Desktop (1920px)', width: 'w-full', icon: Laptop },
  { id: 'tablet', label: 'Tablet (768px)', width: 'max-w-[768px]', icon: Tablet },
  { id: 'mobile', label: 'Móvil (375px)', width: 'max-w-[375px]', icon: Smartphone },
];

const techStack = [
  { name: 'Next.js 16', role: 'Framework React SSR/SSG', desc: 'Renderizado ultrarrápido del lado del servidor para SEO impecable.', icon: Globe },
  { name: 'React 19', role: 'UI Library', desc: 'Componentes interactivos de alto rendimiento y estado reactivo.', icon: Code2 },
  { name: 'Tailwind CSS v4', role: 'Design System', desc: 'Estilos atómicos sin peso extra para carga en milisegundos.', icon: Layers },
  { name: 'Sanity / Strapi', role: 'Headless CMS', desc: 'Panel de administración intuitivo para que edites tu contenido sin programar.', icon: Database },
  { name: 'Vercel Edge CDN', role: 'Infraestructura', desc: 'Despliegue global en servidores de borde con 99.99% de disponibilidad.', icon: Cpu },
  { name: 'Stripe & MercadoPago', role: 'Pasarelas de Pago', desc: 'Integración segura de cobros con tarjeta, Apple Pay y métodos locales.', icon: ShieldCheck },
];

export default function DesarrolloWebPage() {
  const [activeViewport, setActiveViewport] = useState(0);
  const [isBefore, setIsBefore] = useState(false);
  const currentViewport = viewports[activeViewport];

  return (
    <main className="w-full bg-hueso text-carbon min-h-screen overflow-hidden">
      {/* ── HERO ESPACIOSO CON FONDO HUESO Y LUZ AMBIENTAL ───────────── */}
      <section className="relative w-full flex flex-col items-center justify-start pt-36 md:pt-44 pb-20 px-4 md:px-12 bg-hueso overflow-hidden border-b border-carbon/10">
        
        {/* Glowing Tech Ambient Light */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 left-1/4 w-[36rem] h-[36rem] bg-trebol/25 rounded-full blur-[130px]"
          />
        </div>

        <div className="relative w-full max-w-[1400px] mx-auto text-center flex flex-col items-center mb-12 z-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-trebol bg-trebol/10 px-4 py-2 rounded-full mb-6 border border-trebol/30">
            &lt; Next.js 16 & React Architecture /&gt;
          </span>
          <h1 className="text-5xl md:text-8xl lg:text-[7.5rem] font-black text-carbon leading-[0.85] tracking-tighter mb-8">
            Ingeniería Web de <br />
            <span className="text-trebol">Alto Rendimiento.</span>
          </h1>
          <p className="text-xl md:text-2xl text-carbon/70 font-light max-w-3xl leading-relaxed">
            Construimos plataformas web ultrarrápidas, personalizadas y diseñadas para convertir visitantes en clientes activos. Sin plantillas pesadas.
          </p>
        </div>

        {/* Live Code Console Banner */}
        <div className="w-[95%] max-w-[1200px] bg-carbon text-hueso rounded-3xl border border-white/15 p-6 md:p-8 shadow-2xl font-mono text-sm relative overflow-hidden z-10">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-trebol" />
              <span className="text-xs text-gray-400 ml-2">trebol-web-config.ts</span>
            </div>
            <span className="text-xs text-trebol font-bold">● Production Ready (1.1s TFB)</span>
          </div>

          <div className="space-y-2 text-gray-300">
            <p className="text-gray-500">// Arquitectura nativa en Next.js con Server-Side Rendering</p>
            <p><span className="text-purple-400">export default async function</span> <span className="text-yellow-300">Platform</span>() &#123;</p>
            <p className="pl-6"><span className="text-purple-400">const</span> performance = <span className="text-purple-400">await</span> <span className="text-blue-400">optimizeCoreWebVitals</span>(&#123; speed: <span className="text-trebol">&quot;99/100&quot;</span>, security: <span className="text-trebol">&quot;SSL-AES256&quot;</span> &#125;);</p>
            <p className="pl-6"><span className="text-purple-400">return</span> &lt;<span className="text-trebol">HighConversionEngine</span> data=&#123;performance&#125; /&gt;</p>
            <p>&#125;</p>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN ÚNICA 1: COMPARADOR ANTES vs DESPUÉS (SLIDER DE RENDIMIENTO) ── */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-28 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-trebol bg-trebol/10 px-4 py-1.5 rounded-full mb-4 inline-block border border-trebol/20">
            Demostración de Impacto Real
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-carbon tracking-tighter">
            Sitio Tradicional vs Trébol Next.js
          </h2>
          <p className="text-xl text-carbon/70 font-light max-w-2xl mx-auto mt-4">
            Compara la diferencia entre un sitio web genérico en WordPress y una plataforma optimizada.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1.5 rounded-full border border-gray-200 shadow-md flex items-center gap-2">
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
        <div className="bg-carbon text-hueso border border-white/10 rounded-[3rem] p-8 md:p-14 shadow-2xl grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left space-y-2">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block">Velocidad de Carga</span>
            <span className={`text-6xl md:text-7xl font-black ${isBefore ? 'text-red-400' : 'text-trebol'}`}>
              {isBefore ? '5.8s' : '1.1s'}
            </span>
            <p className="text-sm text-gray-400">
              {isBefore ? 'Lento. El 40% de los usuarios abandona la página antes de cargar.' : 'Ultrarrápido. Carga instantánea que retiene al usuario.'}
            </p>
          </div>

          <div className="text-center md:text-left space-y-2 border-y md:border-y-0 md:border-x border-white/10 py-6 md:py-0 md:px-8">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block">Google Speed Index</span>
            <span className={`text-6xl md:text-7xl font-black ${isBefore ? 'text-yellow-400' : 'text-trebol'}`}>
              {isBefore ? '42/100' : '99/100'}
            </span>
            <p className="text-sm text-gray-400">
              {isBefore ? 'Penalizado por algoritmos de búsqueda por sobrecarga de plugins.' : 'Calificación perfecta en Google Lighthouse.'}
            </p>
          </div>

          <div className="text-center md:text-left space-y-2">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block">Tasa de Conversión</span>
            <span className={`text-6xl md:text-7xl font-black ${isBefore ? 'text-gray-500' : 'text-trebol'}`}>
              {isBefore ? '1.2%' : '4.8%'}
            </span>
            <p className="text-sm text-gray-400">
              {isBefore ? 'Baja conversión de visitantes en prospectos.' : '4 veces más prospectos generados con el mismo tráfico.'}
            </p>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN ÚNICA 2: STACK TECNOLÓGICO MATRIZ ────────────────── */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-20 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-trebol bg-trebol/10 px-4 py-1.5 rounded-full mb-4 inline-block border border-trebol/20">
            Nuestra Arquitectura Tecnológica
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-carbon tracking-tighter">
            Tecnologías de Clase Mundial.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techStack.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="bg-white/80 backdrop-blur-2xl border border-white rounded-3xl p-8 hover:border-trebol/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-trebol/10 border border-trebol/30 flex items-center justify-center text-trebol mb-6">
                    <Icon size={24} />
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

      {/* ── SECCIÓN ÚNICA 3: SANDBOX RESPONSIVO MACOS ──────────────── */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 mb-32 relative z-10">
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-trebol bg-trebol/10 px-4 py-1.5 rounded-full mb-4 inline-block border border-trebol/20">
            Prueba de Adaptabilidad
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-carbon tracking-tighter">
            Prueba en Todos los Dispositivos.
          </h2>
        </div>

        {/* Viewport Control Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {viewports.map((v, idx) => {
            const Icon = v.icon;
            return (
              <button
                key={v.id}
                onClick={() => setActiveViewport(idx)}
                className={`px-6 py-3 rounded-full font-bold text-sm transition-all flex items-center gap-2.5 ${
                  activeViewport === idx
                    ? 'bg-carbon text-hueso shadow-lg scale-105 border-2 border-trebol'
                    : 'bg-white text-carbon/70 border border-gray-200 hover:border-trebol/50'
                }`}
              >
                <Icon size={18} />
                <span>{v.label}</span>
              </button>
            );
          })}
        </div>

        {/* macOS Sandbox */}
        <div className="bg-carbon text-hueso rounded-[3.5rem] p-6 md:p-10 shadow-2xl border border-white/10 flex flex-col items-center overflow-hidden">
          <div className="w-full flex items-center justify-between border-b border-white/10 pb-4 mb-8">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-red-500/80" />
              <span className="w-3.5 h-3.5 rounded-full bg-yellow-500/80" />
              <span className="w-3.5 h-3.5 rounded-full bg-trebol" />
            </div>
            <span className="text-xs font-mono text-gray-400 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
              https://trebol.digital [{currentViewport.id}]
            </span>
          </div>

          <motion.div
            layout
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`${currentViewport.width} h-[400px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl relative border border-white/20`}
          >
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80"
              alt="Live Web Preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-carbon/90 backdrop-blur-md p-4 rounded-xl border border-white/10 flex justify-between items-center text-xs">
              <div className="flex items-center gap-2">
                <Gauge size={16} className="text-trebol" />
                <span>Google Speed: <strong className="text-trebol font-mono">99/100</strong></span>
              </div>
              <span className="text-gray-400 font-mono">⚡ 1.1s</span>
            </div>
          </motion.div>
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
