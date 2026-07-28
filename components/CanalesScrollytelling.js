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

// ── ISOTIPO VECTORIAL TRÉBOL DIGITAL (LUMINOSO Y REALISTA) ─────────────────────
function TrebolLogoSVG({ className = "w-10 h-10" }) {
  return (
    <div className={`grid grid-cols-2 gap-1 items-center justify-center shrink-0 ${className}`}>
      <span className="w-full h-full rounded-full bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.6)]" />
      <span className="w-full h-full rounded-full bg-[#2ecc71] shadow-[0_0_14px_rgba(46,204,113,0.9)]" />
      <span className="w-full h-full rounded-full bg-[#2ecc71] shadow-[0_0_14px_rgba(46,204,113,0.9)]" />
      <span className="w-full h-full rounded-full bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.6)]" />
    </div>
  );
}

// ── MÓDULO HYPER-REALISTA DE TRIPLE CÁMARA TRASERA IPHONE PRO ──────
function TripleCameraModule() {
  return (
    <div 
      className="w-[132px] h-[137px] bg-[#222328]/90 backdrop-blur-2xl rounded-[2.2rem] border-2 border-white/20 p-2.5 shadow-[10px_20px_40px_rgba(0,0,0,0.95),inset_0_1px_2px_rgba(255,255,255,0.3)] relative grid grid-cols-2 gap-2 items-center"
      style={{ transform: 'translateZ(16px)', transformStyle: 'preserve-3d' }}
    >
      {/* Bisel de cristal superior con destello */}
      <div className="absolute inset-0 rounded-[2.2rem] border border-white/10 pointer-events-none" />

      {/* Lente 1 (Top-Left): Wide Camera Pro (Cilindro Biselado con Capas de Zafiro) */}
      <div 
        className="w-11 h-11 rounded-full bg-gradient-to-br from-[#52545c] via-[#2c2d33] to-[#151619] p-[2.5px] shadow-[5px_10px_20px_rgba(0,0,0,0.95)] flex items-center justify-center relative border border-white/25"
        style={{ transform: 'translateZ(10px)', transformStyle: 'preserve-3d' }}
      >
        <div className="w-full h-full rounded-full bg-[#090a0e] border border-neutral-600/80 p-0.5 flex items-center justify-center relative shadow-inner">
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-neutral-950 via-[#0a1226] to-[#141d33] border border-neutral-700 flex items-center justify-center relative">
            <div className="w-4 h-4 rounded-full bg-[#030714] border border-cyan-400/80 shadow-[0_0_14px_rgba(6,182,212,0.9)] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_7px_rgba(103,232,249,1)]" />
            </div>
            <div className="absolute top-1 left-1.5 w-2.5 h-1 bg-white/80 rounded-full blur-[0.2px] -rotate-45" />
          </div>
        </div>
      </div>

      {/* Flash TrueTone & LiDAR Sensor */}
      <div className="flex flex-col justify-between h-full py-1 items-center" style={{ transform: 'translateZ(6px)' }}>
        {/* Flash TrueTone con Difusor Dorado */}
        <div className="w-5.5 h-5.5 rounded-full bg-gradient-to-br from-amber-100 via-amber-200 to-amber-400 border border-amber-400/90 shadow-[0_0_16px_rgba(251,191,36,0.9)] flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-white/90 blur-[0.3px]" />
        </div>
        {/* Sensor LiDAR de Cristal Negro */}
        <div className="w-4.5 h-4.5 rounded-full bg-[#050507] border border-neutral-700 shadow-inner flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-[#020204]" />
        </div>
      </div>

      {/* Lente 2 (Bottom-Left): Ultra Wide Camera Pro */}
      <div 
        className="w-11 h-11 rounded-full bg-gradient-to-br from-[#52545c] via-[#2c2d33] to-[#151619] p-[2.5px] shadow-[5px_10px_20px_rgba(0,0,0,0.95)] flex items-center justify-center relative border border-white/25"
        style={{ transform: 'translateZ(10px)', transformStyle: 'preserve-3d' }}
      >
        <div className="w-full h-full rounded-full bg-[#090a0e] border border-neutral-600/80 p-0.5 flex items-center justify-center relative shadow-inner">
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-neutral-950 via-[#190a28] to-[#261238] border border-neutral-700 flex items-center justify-center relative">
            <div className="w-4 h-4 rounded-full bg-[#0c0316] border border-purple-400/80 shadow-[0_0_14px_rgba(168,85,247,0.9)] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-300 shadow-[0_0_7px_rgba(165,180,252,1)]" />
            </div>
            <div className="absolute top-1 left-1.5 w-2.5 h-1 bg-white/80 rounded-full blur-[0.2px] -rotate-45" />
          </div>
        </div>
      </div>

      {/* Lente 3 (Right Center): Telephoto Camera Pro */}
      <div 
        className="w-11 h-11 rounded-full bg-gradient-to-br from-[#52545c] via-[#2c2d33] to-[#151619] p-[2.5px] shadow-[5px_10px_20px_rgba(0,0,0,0.95)] flex items-center justify-center relative border border-white/25"
        style={{ transform: 'translateZ(10px)', transformStyle: 'preserve-3d' }}
      >
        <div className="w-full h-full rounded-full bg-[#090a0e] border border-neutral-600/80 p-0.5 flex items-center justify-center relative shadow-inner">
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-neutral-950 via-[#0a1b28] to-[#12283b] border border-neutral-700 flex items-center justify-center relative">
            <div className="w-4 h-4 rounded-full bg-[#031118] border border-blue-400/80 shadow-[0_0_14px_rgba(59,130,246,0.9)] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-300 shadow-[0_0_7px_rgba(147,197,253,1)]" />
            </div>
            <div className="absolute top-1 left-1.5 w-2.5 h-1 bg-white/80 rounded-full blur-[0.2px] -rotate-45" />
          </div>
        </div>
      </div>

    </div>
  );
}

// ── CONTENIDO 1: GOOGLE ADS ────────────────
function GoogleAdsContent() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-neutral-950 flex items-center justify-center">
      <img
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
        alt="Google Search Ads"
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
}

// ── CONTENIDO 2: META ADS ────────────────────
function MetaAdsContent() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-neutral-950 flex items-center justify-center">
      <img
        src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80"
        alt="Meta Ads Reels"
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
}

// ── CONTENIDO 3: TIKTOK ADS ─────────────────────
function TikTokAdsContent() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-neutral-950 flex items-center justify-center">
      <img
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
        alt="TikTok Ads"
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
}

// ── CONTENIDO 4: DASHBOARD FINAL ────────────────────
function DashboardFinalContent() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-neutral-950 flex items-center justify-center">
      <img
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
        alt="Trébol Dashboard Final"
        className="w-full h-full object-cover object-left-top"
      />
    </div>
  );
}

// ── MOCKUP DE TELÉFONO 3D HYPER-REALISTA IPHONE 15 PRO ─────────────────────
function PhoneFrame({ children }) {
  return (
    <div className="relative w-full h-full select-none" style={{ transformStyle: 'preserve-3d' }}>
      
      {/* ── CARA FRONTAL: PANTALLA IPHONE PRO ────────────────────────── */}
      <div 
        className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-neutral-700 via-neutral-800 to-neutral-950 p-[8px] border-[4px] border-[#383a3f] shadow-[0_35px_80px_-15px_rgba(0,0,0,0.95),inset_0_1px_2px_rgba(255,255,255,0.2)]"
        style={{ backfaceVisibility: 'hidden', transform: 'translateZ(6px)' }}
      >
        <div className="w-full h-full rounded-[2.1rem] bg-black overflow-hidden relative border border-neutral-900">
          
          {/* Dynamic Island */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[95px] h-[24px] bg-black rounded-full z-50 flex items-center justify-between px-3 border border-neutral-800/80 shadow-md">
            <div className="w-3 h-3 rounded-full bg-[#0a0a0d] border border-neutral-700 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-950 border border-cyan-500/60 shadow-[0_0_4px_rgba(0,242,254,0.5)]" />
            </div>
            <div className="w-7 h-[3px] bg-neutral-800 rounded-full" />
            <div className="w-2 h-2 rounded-full bg-[#0d0d10] border border-neutral-800" />
          </div>

          {/* Contenido de Pantalla */}
          <div className="w-full h-full relative overflow-hidden">
            {children}
          </div>

          {/* Reflejo Cristalino de Pantalla */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 via-transparent to-transparent z-40" />
        </div>
      </div>

      {/* ── CARA TRASERA: CRISTAL MATE TITANIO CON CÁMARAS PRO Y LOGO TRÉBOL ────────────────────────── */}
      <div 
        className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#24252a] via-[#1a1b1f] to-[#101114] p-6 border-[4px] border-[#383a3f] flex flex-col justify-between overflow-hidden shadow-[0_35px_80px_-15px_rgba(0,0,0,0.95),inset_0_1px_2px_rgba(255,255,255,0.2)]"
        style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg) translateZ(6px)', transformStyle: 'preserve-3d' }}
      >
        {/* Módulo de Triple Cámara Trasera Pro en 3D */}
        <TripleCameraModule />

        {/* Isotipo Trébol Digital Luminous Icon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ transform: 'translateZ(6px)' }}>
          <TrebolLogoSVG className="w-12 h-12" />
        </div>

        {/* Reflejo Cristalino sobre el Cristal Trasero Mate */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 via-transparent to-transparent z-40" />
      </div>

      {/* Botones Metálicos Laterales de Titanio */}
      <div className="absolute right-[-4px] top-[95px] w-[4px] h-[50px] bg-gradient-to-b from-neutral-400 via-neutral-600 to-neutral-900 rounded-r-md shadow-lg" style={{ transform: 'translateZ(3px)' }} />
      <div className="absolute right-[-4px] top-[155px] w-[4px] h-[30px] bg-gradient-to-b from-neutral-400 via-neutral-600 to-neutral-900 rounded-r-md shadow-lg" style={{ transform: 'translateZ(3px)' }} />
      <div className="absolute left-[-4px] top-[105px] w-[4px] h-[35px] bg-gradient-to-b from-neutral-400 via-neutral-600 to-neutral-900 rounded-l-md shadow-lg" style={{ transform: 'translateZ(3px)' }} />
      <div className="absolute left-[-4px] top-[150px] w-[4px] h-[35px] bg-gradient-to-b from-neutral-400 via-neutral-600 to-neutral-900 rounded-l-md shadow-lg" style={{ transform: 'translateZ(3px)' }} />
    </div>
  );
}

// ── MOCKUP DE LAPTOP MACBOOK PRO 3D ELEGANTE ─────────────────────
function LaptopFrame({ children }) {
  return (
    <div className="relative w-full h-full select-none" style={{ transformStyle: 'preserve-3d' }}>
      
      {/* ── PARED DE GROSOR DE BASE ALUMINIO 3D ─────────────── */}
      <div 
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-neutral-600 via-neutral-800 to-neutral-950 border-2 border-neutral-500 shadow-[0_35px_80px_-10px_rgba(0,0,0,0.95)]"
        style={{ transform: 'translateZ(0px)' }}
      />

      {/* ── CARA FRONTAL: PANTALLA Y BARRA DE NAVEGACIÓN ────────────────────────── */}
      <div 
        className="absolute inset-0 w-full h-full flex flex-col rounded-xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-950"
        style={{ backfaceVisibility: 'hidden', transform: 'translateZ(8px)' }}
      >
        {/* Barra de Encabezado MacBook Pro con Cámara Web */}
        <div className="w-full h-7 bg-neutral-900 border-b border-neutral-800/90 flex items-center justify-between px-3 shrink-0">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>

          {/* Barra de Dirección URL con Cámara Web Integrada */}
          <div className="flex items-center gap-2 bg-neutral-950 px-4 py-1 rounded-md border border-neutral-800 text-[11px] font-mono text-neutral-300 shadow-inner">
            <div className="w-2 h-2 rounded-full bg-[#0a0a0e] border border-neutral-700 flex items-center justify-center">
              <div className="w-0.5 h-0.5 rounded-full bg-blue-400" />
            </div>
            <Globe size={12} className="text-[#2ecc71]" />
            <span>treboldigital.mx/dashboard</span>
          </div>

          <div className="w-12" />
        </div>

        {/* Contenedor Principal de Pantalla */}
        <div className="w-full flex-1 relative bg-neutral-950 overflow-hidden">
          {children}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 via-transparent to-transparent z-40" />
        </div>

        {/* Base de Aluminio de Laptop con Ranura Frontal */}
        <div className="w-full h-3.5 bg-gradient-to-b from-neutral-800 via-neutral-850 to-neutral-900 border-t border-neutral-700/60 flex justify-center items-center shrink-0">
          <div className="w-16 h-1 bg-neutral-700/80 rounded-full" />
        </div>
      </div>

      {/* ── CARA TRASERA: TAPA DE ALUMINIO Y LOGO TRÉBOL ILUMINADO ────────────────────────── */}
      <div 
        className="absolute inset-0 w-full h-full rounded-xl bg-gradient-to-br from-neutral-800 via-neutral-900 to-[#121215] border border-neutral-700/90 shadow-2xl p-6 flex flex-col justify-between items-center overflow-hidden"
        style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg) translateZ(8px)', transformStyle: 'preserve-3d' }}
      >
        <div className="w-20 h-1 bg-neutral-700/60 rounded-full" />

        {/* Isotipo Trébol Digital Iluminado en la Tapa de Aluminio de la Mac */}
        <div className="my-auto" style={{ transform: 'translateZ(6px)' }}>
          <TrebolLogoSVG className="w-16 h-16" />
        </div>

        <div className="w-24 h-1.5 bg-neutral-700/80 rounded-full" />

        {/* Reflejo Cristalino sobre el Aluminio del reverso */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 via-transparent to-transparent z-40" />
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
    // Giro 360° en 3D con bordes curvados perfectos
    // ==========================================
    tl.to(floatingDeviceRef.current, {
      x: posR.x, 
      y: posR.y,
      rotateY: 360,
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
      rotateY: 720,
      duration: 1.5, 
      ease: 'power2.inOut',
    }, 1.8)
    .to(blackScreenRef.current, { opacity: 1, duration: 0.25 }, 2.15)
    .to(blackScreenRef.current, { opacity: 0, duration: 0.25 }, 2.75)
    .to(infoRef1.current, { opacity: 0, y: -30, duration: 0.5, ease: 'power2.in' }, 2.0)
    .to(infoRef2.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 2.5);

    // ==========================================
    // TRANSICIÓN 3: Izquierda → Derecha Final (TikTok → Dashboard Laptop)
    // ==========================================
    tl.to(floatingDeviceRef.current, {
      x: posF.x, 
      y: posF.y, 
      width: posF.width, 
      height: posF.height,
      rotateY: 1080,
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
    <section ref={containerRef} className="relative h-screen w-full bg-[#0a0a0c] text-white overflow-hidden select-none" style={{ perspective: '1200px' }}>
      
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

      {/* DISPOSITIVO FLOTANTE ANIMADO CON VOLUMEN Y PROFUNDIDAD REALISTA EN 3D */}
      <div className="absolute inset-0 z-30 pointer-events-none" style={{ perspective: '1200px' }}>
        <div
          ref={floatingDeviceRef}
          className="absolute top-0 left-0 will-change-transform overflow-visible"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Pantalla Negra Overlay para la transición */}
          <div ref={blackScreenRef} className="absolute inset-0 bg-black z-50 pointer-events-none opacity-0 rounded-[2.5rem]" />

          {/* Contenido con Mockup 3D */}
          {activeIndex < 3 ? (
            <PhoneFrame>
              {activeIndex === 0 && <GoogleAdsContent />}
              {activeIndex === 1 && <MetaAdsContent />}
              {activeIndex === 2 && <TikTokAdsContent />}
            </PhoneFrame>
          ) : (
            <LaptopFrame>
              <DashboardFinalContent />
            </LaptopFrame>
          )}
        </div>
      </div>

    </section>
  );
}
