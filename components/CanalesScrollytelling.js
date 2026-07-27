'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { 
  ArrowUpRight, Globe, CheckCircle2
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// ── CONTENIDO 1: GOOGLE ADS ────────────────
function GoogleAdsContent() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-neutral-950">
      <img
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
        alt="Google Search Ads"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

// ── CONTENIDO 2: META ADS ────────────────────
function MetaAdsContent() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-neutral-950">
      <img
        src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80"
        alt="Meta Ads Reels"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

// ── CONTENIDO 3: TIKTOK ADS ─────────────────────
function TikTokAdsContent() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-neutral-950">
      <img
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
        alt="TikTok Ads"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

// ── CONTENIDO 4: DASHBOARD FINAL ────────────────────
function DashboardFinalContent() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-neutral-950">
      <img
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
        alt="Trébol Dashboard Final"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

// ── MOCKUP DE TELÉFONO (SVG) ─────────────────────
function PhoneFrame({ children }) {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-neutral-700 via-neutral-800 to-neutral-900 p-[10px] shadow-2xl">
        <div className="w-full h-full rounded-[2.2rem] bg-black overflow-hidden relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[22px] bg-black rounded-b-2xl z-50 flex items-center justify-center gap-2">
            <div className="w-[45px] h-[4px] bg-neutral-800 rounded-full" />
            <div className="w-[6px] h-[6px] bg-neutral-700 rounded-full" />
          </div>
          <div className="w-full h-full relative">
            {children}
          </div>
        </div>
      </div>
      <div className="absolute right-[-2px] top-[90px] w-[3px] h-[50px] bg-neutral-600 rounded-r-md" />
      <div className="absolute right-[-2px] top-[150px] w-[3px] h-[30px] bg-neutral-600 rounded-r-md" />
      <div className="absolute left-[-2px] top-[100px] w-[3px] h-[35px] bg-neutral-600 rounded-l-md" />
      <div className="absolute left-[-2px] top-[145px] w-[3px] h-[35px] bg-neutral-600 rounded-l-md" />
      <div className="absolute inset-0 rounded-[2.5rem] pointer-events-none bg-gradient-to-tr from-white/5 via-transparent to-transparent z-40" />
    </div>
  );
}

// ── MOCKUP DE LAPTOP (SVG) ─────────────────────
function LaptopFrame({ children }) {
  return (
    <div className="relative w-full h-full flex flex-col">
      <div className="w-full h-full bg-neutral-950 rounded-t-xl p-2 border-t-2 border-x-2 border-neutral-800 shadow-2xl flex flex-col">
        <div className="w-full h-6 bg-neutral-900 rounded-t-md flex items-center px-3 mb-1.5 gap-2 py-1 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <div className="flex items-center gap-1.5 bg-neutral-950 px-3 py-1 rounded text-[10px] font-mono text-neutral-400 ml-2">
            <Globe size={12} className="text-[#2ecc71]" />
            <span>treboldigital.mx/dashboard</span>
          </div>
        </div>
        <div className="w-full flex-1 rounded bg-neutral-900 relative overflow-hidden">
          {children}
        </div>
        <div className="w-[108%] -ml-[4%] h-4 bg-gradient-to-b from-neutral-500 to-neutral-700 rounded-b-lg mt-1 flex justify-center items-center shadow-lg shrink-0">
          <div className="w-16 h-1 bg-neutral-800 rounded-full" />
        </div>
      </div>
    </div>
  );
}

const canalesDinamicos = [
  { 
    id: 'google', 
    nombre: 'Google Search Ads', 
    subtitulo: 'Red de Búsqueda Activa con Alta Intención Comercial', 
    descripcion: 'Capturamos prospectos calificados en el momento preciso en que buscan tus servicios B2B. Estrategia de palabras clave transaccionales con landings optimizadas para conversión directa.',
    beneficios: [
      'Pujas inteligentes en tiempo real para optimizar CPC ($14 MXN)',
      'Tasa de conversión directa con prospectos de alta intención',
      'Atribución transparente y ROI medible desde el primer día'
    ],
    titleClass: 'text-[#F4B400]',
    buttonClass: 'bg-[#F4B400] text-black hover:bg-white',
    iconClass: 'text-[#F4B400]',
    glowBg: 'from-amber-500/40 via-blue-600/20 to-red-500/20',
    align: 'right' 
  },
  { 
    id: 'meta', 
    nombre: 'Meta Ads (Reels)', 
    subtitulo: 'Segmentación Hiperprecisa en Instagram & Facebook', 
    descripcion: 'Generamos descubrimiento acelerado y retención de marca mediante contenido dinámico en Reels y Stories. Impactamos directamente a tomadores de decisión y perfiles AB/C+.',
    beneficios: [
      'Segmentación psicográfica de tomadores de decisión',
      'Formatos inmersivos de video corto en Reels (9:16)',
      'Generación continua de leads calificados con CPL de $98 MXN'
    ],
    titleClass: 'text-[#0081FB]',
    buttonClass: 'bg-[#0081FB] text-white hover:bg-white hover:text-black',
    iconClass: 'text-[#0081FB]',
    glowBg: 'from-blue-600/40 via-indigo-600/30 to-purple-600/35',
    align: 'left' 
  },
  { 
    id: 'tiktok', 
    nombre: 'TikTok Ads', 
    subtitulo: 'Spark Ads & Contenido Viral UGC de Alto Impacto', 
    descripcion: 'Transformamos la atención masiva en resultados comerciales medibles. Aprovechamos las tendencias nativas de la plataforma para captar nuevas audiencias con un costo por mil impresiones óptimo.',
    beneficios: [
      'Formatos virales de video nativo UGC con 5.1% CTR',
      'Costo por vista (CPV) altamente eficiente de $0.04',
      'Conexión auténtica y rápida adopción de marca'
    ],
    titleClass: 'text-[#00F2FE]',
    buttonClass: 'bg-[#00F2FE] text-black hover:bg-white',
    iconClass: 'text-[#00F2FE]',
    glowBg: 'from-cyan-500/40 via-purple-900/20 to-pink-500/40',
    align: 'right' 
  },
  { 
    id: 'seo', 
    nombre: 'Caso de Éxito Final', 
    subtitulo: 'Ecosistema de Captación Multicanal Unificado', 
    descripcion: 'Sincronizamos la atracción de Google, el alcance de Meta y la viralidad de TikTok en un centro de control estratégico. Máximo rendimiento de pauta publicitaria y crecimiento comercial sostenible.',
    beneficios: [
      'Dashboard centralizado con métricas unificadas en tiempo real',
      'Retorno acumulado promedio de 4.8× sobre inversión publicitaria',
      'Sistema automatizado de captación y cierre de clientes'
    ],
    titleClass: 'text-[#2ecc71]',
    buttonClass: 'bg-[#2ecc71] text-black hover:bg-white',
    iconClass: 'text-[#2ecc71]',
    glowBg: 'from-emerald-500/40 to-[#2ecc71]/40',
    align: 'left' 
  },
];

export default function CanalesScrollytelling() {
  const containerRef = useRef(null);
  const floatingDeviceRef = useRef(null);
  const blackScreenRef = useRef(null);
  
  const posLeftRef = useRef(null);
  const posRightRef = useRef(null);
  const posFinalRef = useRef(null);

  const infoRef0 = useRef(null);
  const infoRef1 = useRef(null);
  const infoRef2 = useRef(null);
  const infoRef3 = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const current = canalesDinamicos[activeIndex];

  useGSAP(() => {
    if (!containerRef.current || !floatingDeviceRef.current || !posLeftRef.current || !posRightRef.current || !posFinalRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    
    const getCoords = (rect) => ({
      x: rect.left - containerRect.left,
      y: rect.top - containerRect.top,
      width: rect.width,
      height: rect.height,
    });

    const posL = getCoords(posLeftRef.current.getBoundingClientRect());
    const posR = getCoords(posRightRef.current.getBoundingClientRect());
    const posF = getCoords(posFinalRef.current.getBoundingClientRect());

    // Estado Inicial: Izquierda (Google) — Teléfono vertical
    gsap.set(floatingDeviceRef.current, {
      x: posL.x, 
      y: posL.y, 
      width: posL.width, 
      height: posL.height,
      borderRadius: '2.5rem', 
      transformOrigin: 'center center',
      transformStyle: 'preserve-3d',
    });

    if (blackScreenRef.current) {
      gsap.set(blackScreenRef.current, { opacity: 0 });
    }

    gsap.set(infoRef0.current, { opacity: 1, y: 0 });
    gsap.set([infoRef1.current, infoRef2.current, infoRef3.current], { opacity: 0, y: 35 });

    const hideHeader = () => {
      const header = document.querySelector('header');
      if (header) {
        header.style.setProperty('transform', 'translateY(-180%)', 'important');
        header.style.setProperty('opacity', '0', 'important');
        header.style.setProperty('pointer-events', 'none', 'important');
        header.style.setProperty('transition', 'transform 0.4s ease, opacity 0.4s ease', 'important');
      }
    };

    const showHeader = () => {
      const header = document.querySelector('header');
      if (header) {
        header.style.setProperty('transform', 'translateY(0)', 'important');
        header.style.setProperty('opacity', '1', 'important');
        header.style.setProperty('pointer-events', 'auto', 'important');
      }
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=500%',
        scrub: 1.2,
        pin: true,
        onToggle: (self) => {
          if (self.isActive) hideHeader();
          else showHeader();
        },
        onEnter: hideHeader,
        onLeave: showHeader,
        onEnterBack: hideHeader,
        onLeaveBack: showHeader,
        onUpdate: (self) => {
          if (self.isActive) hideHeader();
          const p = self.progress;
          if (p < 0.25) setActiveIndex(0);
          else if (p < 0.50) setActiveIndex(1);
          else if (p < 0.75) setActiveIndex(2);
          else setActiveIndex(3);
        },
      },
    });

    // ==========================================
    // TRANSICIÓN 1: Izquierda → Derecha (Google → Meta)
    // ==========================================
    tl.to(floatingDeviceRef.current, {
      x: posR.x, 
      y: posR.y,
      rotateY: '+=360',
      duration: 1.5, 
      ease: 'power2.inOut',
    }, 0)
    .to(blackScreenRef.current, { opacity: 1, duration: 0.25 }, 0.35)
    .to(blackScreenRef.current, { opacity: 0, duration: 0.25 }, 0.95)
    .to(infoRef0.current, { opacity: 0, y: -30, duration: 0.5, ease: 'power2.in' }, 0.2)
    .to(infoRef1.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 0.7);

    // ==========================================
    // TRANSICIÓN 2: Derecha → Izquierda (Meta → TikTok)
    // ==========================================
    tl.to(floatingDeviceRef.current, {
      x: posL.x, 
      y: posL.y,
      rotateY: '+=360',
      duration: 1.5, 
      ease: 'power2.inOut',
    }, 1.8)
    .to(blackScreenRef.current, { opacity: 1, duration: 0.25 }, 2.15)
    .to(blackScreenRef.current, { opacity: 0, duration: 0.25 }, 2.75)
    .to(infoRef1.current, { opacity: 0, y: -30, duration: 0.5, ease: 'power2.in' }, 2.0)
    .to(infoRef2.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 2.5);

    // ==========================================
    // TRANSICIÓN 3: Izquierda → Derecha Final (TikTok → Dashboard)
    // ==========================================
    tl.to(floatingDeviceRef.current, {
      x: posF.x, 
      y: posF.y, 
      width: posF.width, 
      height: posF.height,
      rotateY: '+=360',
      borderRadius: '0.75rem',
      duration: 1.8, 
      ease: 'power3.inOut',
    }, 3.6)
    .to(blackScreenRef.current, { opacity: 1, duration: 0.30 }, 4.0)
    .to(blackScreenRef.current, { opacity: 0, duration: 0.30 }, 4.8)
    .to(infoRef2.current, { opacity: 0, y: -30, duration: 0.5, ease: 'power2.in' }, 3.8)
    .to(infoRef3.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 4.3);

    return () => {
      showHeader();
    };

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-[#0a0a0c] text-white overflow-hidden select-none" style={{ perspective: '1000px' }}>
      
      {/* Background Glow Dinámico de la Marca */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
        <div className={`w-[50rem] h-[50rem] rounded-full blur-[180px] bg-gradient-to-tr ${current.glowBg} transition-all duration-1000 opacity-40`} />
      </div>

      {/* ── NAVEGACIÓN Y TÍTULOS CON COLORES IDENTIFICATIVOS DE CADA MARCA ────── */}
      <div className="absolute inset-0 z-10 pointer-events-none p-8 md:p-16 max-w-[1400px] mx-auto relative h-full">
        {canalesDinamicos.map((canal, idx) => {
          const refMap = [infoRef0, infoRef1, infoRef2, infoRef3];
          return (
            <div
              key={canal.id}
              className={`absolute top-1/2 -translate-y-1/2 max-w-xl ${
                canal.align === 'right' ? 'right-8 md:right-16 text-right' : 'left-8 md:left-16 text-left'
              }`}
            >
              <div ref={refMap[idx]} className="will-change-transform">
                <h2 className={`text-4xl md:text-6xl font-black tracking-tighter leading-none mb-3 drop-shadow-md ${canal.titleClass}`}>
                  {canal.nombre}
                </h2>
                <p className="text-base md:text-lg text-white font-medium mb-3">
                  {canal.subtitulo}
                </p>
                <p className="text-xs md:text-sm text-neutral-400 font-light leading-relaxed mb-5">
                  {canal.descripcion}
                </p>

                <ul className="space-y-2 mb-8 text-xs font-mono text-neutral-300">
                  {canal.beneficios.map((b, i) => (
                    <li key={i} className={`flex items-center gap-2 ${canal.align === 'right' ? 'justify-end' : 'justify-start'}`}>
                      {canal.align !== 'right' && <CheckCircle2 size={13} className={`${canal.iconClass} shrink-0`} />}
                      <span>{b}</span>
                      {canal.align === 'right' && <CheckCircle2 size={13} className={`${canal.iconClass} shrink-0`} />}
                    </li>
                  ))}
                </ul>

                <div className={`flex ${canal.align === 'right' ? 'justify-end' : 'justify-start'}`}>
                  <Link href="/agenda" className={`pointer-events-auto inline-flex items-center gap-2 font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-2xl shrink-0 ${canal.buttonClass}`}>
                    Agendar Diagnóstico
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ANCLAS INVISIBLES (IZQUIERDA Y DERECHA) */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="max-w-[1400px] w-full flex justify-between items-center h-full px-8 md:px-16">
          <div ref={posLeftRef} className="w-[300px] h-[580px] opacity-0 shrink-0" />
          <div ref={posRightRef} className="w-[300px] h-[580px] opacity-0 shrink-0" />
        </div>
      </div>

      {/* Derecha Final: Laptop Target */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="max-w-[1400px] w-full flex justify-end items-center h-full px-8 md:px-16">
          <div ref={posFinalRef} className="w-[580px] h-[380px] opacity-0 shrink-0" />
        </div>
      </div>

      {/* DISPOSITIVO FLOTANTE ANIMADO */}
      <div className="absolute inset-0 z-30 pointer-events-none" style={{ perspective: '1200px' }}>
        <div
          ref={floatingDeviceRef}
          className="absolute top-0 left-0 will-change-transform overflow-hidden bg-neutral-900 border border-neutral-800/80 shadow-2xl"
        >
          {/* Pantalla Negra Overlay para la transición */}
          <div ref={blackScreenRef} className="absolute inset-0 bg-black z-50 pointer-events-none opacity-0" />

          {/* Contenido dinámico renderizado */}
          <PhoneFrame><GoogleAdsContent /></PhoneFrame>
        </div>
      </div>

    </section>
  );
}
