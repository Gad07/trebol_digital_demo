'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap, MessageSquare, ArrowRight, CheckCircle2, ShieldCheck, Globe, Star, Sparkles, Cpu, Award,
  Newspaper, Bookmark, Share2, Clock, User, ChevronRight, Check, HelpCircle, ChevronDown, MessageCircle,
  Play, ChevronLeft, Video, Image as ImageIcon, BarChart, XCircle, ArrowUpRight, Target, Users, BookOpen, HeartHandshake, Layers, BarChart3
} from 'lucide-react';

// IMPORTAR COMPONENTES REUTILIZABLES NATIVOS DEL SITIO WEB
import Contact from './Contact';
import ClientLogosBanner from './ClientLogosBanner';
import Process from './Process';
import Services from './Services';
import WhyUs from './WhyUs';

function OriginalAnimatedTrebolLogo({ className = "w-12 h-12" }) {
  return (
    <div className="relative inline-flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-2 bg-trebol/30 rounded-full blur-xl pointer-events-none"
      />
      <motion.img
        src="/images/TREBOL_01.png"
        alt="Trébol Digital Isotipo Animado"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        whileHover={{ scale: 1.15, rotate: 180 }}
        className={`${className} relative z-10 object-contain drop-shadow-md cursor-pointer`}
      />
    </div>
  );
}

export function getThemeClasses(themeStyle) {
  if (themeStyle === 'v2' || themeStyle === 'cinematic' || themeStyle === 'dark_cinematic') {
    return {
      wrapper: 'bg-black text-white font-sans selection:bg-trebol selection:text-white',
      sectionBg: 'bg-black',
      sectionBgAlt: 'bg-[#090a0f]',
      heroBg: 'from-black via-black/90 via-70% to-transparent',
      accentText: 'text-trebol font-bold drop-shadow-[0_0_20px_rgba(92,158,49,0.5)]',
      badge: 'inline-block px-5 py-2 bg-white/5 backdrop-blur-3xl border border-white/10 text-white/80 font-mono font-bold tracking-widest uppercase rounded-full text-xs shadow-[0_0_20px_rgba(255,255,255,0.05)]',
      buttonPrimary: 'bg-white text-black hover:bg-trebol hover:text-white font-extrabold shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(92,158,49,0.5)] rounded-full transition-all duration-500 cursor-pointer',
      buttonSecondary: 'bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-white/10 font-bold rounded-full transition-all cursor-pointer',
      card: 'bg-white/5 backdrop-blur-xl border border-white/10 hover:border-trebol shadow-[0_0_40px_rgba(0,0,0,0.8)] rounded-3xl transition-all',
      border: 'border-white/10',
      heading: 'font-sans font-black tracking-tighter text-white',
      glowColor: 'bg-trebol/30'
    };
  }
  if (themeStyle === 'dark' || themeStyle === 'darkmode') {
    return {
      wrapper: 'bg-[#14161A] text-slate-100 font-sans',
      sectionBg: 'bg-[#14161A]',
      sectionBgAlt: 'bg-[#1B1E24]',
      heroBg: 'from-[#14161A] via-[#14161A]/95 via-70% to-transparent',
      accentText: 'text-trebol-claro font-bold',
      badge: 'inline-block px-4 py-1.5 bg-trebol-claro/15 text-trebol-claro border border-trebol-claro/40 font-mono font-bold tracking-wider rounded-full text-xs shadow-sm',
      buttonPrimary: 'bg-trebol-claro text-carbon hover:bg-trebol hover:text-white font-extrabold shadow-lg shadow-trebol-claro/25 rounded-2xl transition-all',
      buttonSecondary: 'bg-[#1B1E24] border-neutral-700 text-slate-200 hover:border-trebol-claro hover:text-white rounded-2xl transition-all',
      card: 'bg-[#1E222A]/90 backdrop-blur-md border border-neutral-700/70 hover:border-trebol-claro shadow-2xl rounded-3xl transition-all',
      border: 'border-neutral-800',
      heading: 'font-sans font-black tracking-tight text-white',
      glowColor: 'bg-trebol-claro/15'
    };
  }
  if (themeStyle === 'tech') {
    return {
      wrapper: 'bg-[#020406] text-slate-100 font-mono selection:bg-[#8DC63F] selection:text-black',
      sectionBg: 'bg-[#020406]',
      sectionBgAlt: 'bg-[#070D09]',
      heroBg: 'from-[#020406] via-[#020406]/95 via-70% to-transparent',
      accentText: 'text-[#8DC63F] font-mono font-bold drop-shadow-[0_0_12px_rgba(141,198,63,0.5)]',
      badge: 'inline-block px-4 py-1.5 bg-[#8DC63F]/15 text-[#8DC63F] border border-[#8DC63F]/60 font-mono font-bold tracking-widest uppercase text-xs shadow-[0_0_15px_rgba(141,198,63,0.25)] rounded-none',
      buttonPrimary: 'bg-[#8DC63F] text-slate-950 hover:bg-white hover:text-slate-950 font-mono font-black tracking-widest uppercase shadow-[0_0_30px_rgba(141,198,63,0.5)] rounded-none border border-[#8DC63F] transition-all cursor-pointer',
      buttonSecondary: 'bg-[#070D09] border border-[#8DC63F]/60 text-[#8DC63F] hover:bg-[#8DC63F]/20 hover:text-white font-mono font-bold tracking-widest uppercase rounded-none transition-all cursor-pointer',
      card: 'bg-[#070D09]/90 backdrop-blur-xl border border-[#8DC63F]/40 hover:border-[#8DC63F] shadow-[0_0_30px_rgba(141,198,63,0.2)] rounded-none font-mono transition-all',
      border: 'border-[#8DC63F]/30',
      heading: 'font-mono font-black tracking-tighter text-white uppercase',
      glowColor: 'bg-[#8DC63F]/25'
    };
  }
  if (themeStyle === 'fashion' || themeStyle === 'editorial_moda') {
    return {
      wrapper: 'bg-[#F5F2EB] text-[#1C1C1C] font-serif',
      sectionBg: 'bg-[#F5F2EB]',
      sectionBgAlt: 'bg-[#FAF7F2]',
      heroBg: 'from-[#F5F2EB] via-[#F5F2EB]/95 via-70% to-transparent',
      accentText: 'text-[#8C6D2D] font-serif italic font-bold',
      badge: 'inline-block px-4 py-1.5 bg-[#1C1C1C] text-white border border-[#8C6D2D] font-serif font-bold tracking-[0.3em] uppercase text-[9px] rounded-none shadow-sm',
      buttonPrimary: 'bg-[#1C1C1C] text-white hover:bg-[#8C6D2D] hover:text-white font-serif font-bold tracking-[0.18em] uppercase rounded-none shadow-2xl transition-all',
      buttonSecondary: 'bg-transparent border border-[#1C1C1C] text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-white font-serif font-bold tracking-[0.18em] uppercase rounded-none transition-all',
      card: 'bg-[#FAF7F2] border border-[#1C1C1C]/20 hover:border-[#8C6D2D] shadow-2xl rounded-none p-10 font-serif transition-all',
      border: 'border-[#1C1C1C]/20',
      heading: 'font-serif font-normal tracking-wider italic text-[#1C1C1C]',
      glowColor: 'bg-[#8C6D2D]/15'
    };
  }
  // Default Original (Trébol Hueso Editorial)
  return {
    wrapper: 'bg-hueso text-carbon font-sans',
    sectionBg: 'bg-hueso',
    sectionBgAlt: 'bg-white',
    heroBg: 'from-hueso via-hueso/95 via-70% md:via-60% to-hueso/20',
    accentText: 'text-trebol font-bold',
    badge: 'inline-block px-4 py-1.5 bg-trebol/10 text-trebol border border-trebol/30 font-mono font-bold rounded-full text-xs shadow-sm',
    buttonPrimary: 'bg-trebol text-white hover:bg-carbon font-extrabold shadow-xl shadow-trebol/20 rounded-2xl transition-all',
    buttonSecondary: 'bg-white border-neutral-300 text-carbon font-bold hover:border-trebol hover:text-trebol shadow-sm rounded-2xl transition-all',
    card: 'bg-white border border-neutral-200 hover:border-trebol shadow-sm hover:shadow-xl rounded-3xl transition-all',
    border: 'border-neutral-200/80',
    heading: 'font-sans font-black tracking-tight text-carbon',
    glowColor: 'bg-trebol/20'
  };
}

// ─────────────────────────────────────────────────────────────
// HERO ORIGINAL DE TRÉBOL DIGITAL
// ─────────────────────────────────────────────────────────────
function OriginalTrebolHero({ sec, themeStyle }) {
  const bgImageUrl = sec.bgImageUrl || 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2200&q=95';
  const cta2Text = sec.cta2Text !== undefined ? sec.cta2Text : 'Descubre cómo funciona ↓';
  const cta2Url = sec.cta2Url || '#contacto';
  const guaranteeText = sec.guaranteeText !== undefined ? sec.guaranteeText : '30 minutos · Sin costo · Identificamos oportunidades para tu negocio';

  const theme = getThemeClasses(themeStyle);

  return (
    <section className={`relative w-full min-h-screen min-h-[100dvh] pt-24 sm:pt-28 md:pt-32 pb-16 px-6 md:px-12 overflow-hidden flex items-center border-b ${theme.border} ${theme.wrapper}`}>
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={bgImageUrl}
          alt="Trébol Digital Hero"
          className="w-full h-full object-cover object-center md:object-right opacity-30 md:opacity-40"
        />
        <div className={`absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r ${theme.heroBg}`} />
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute -top-40 -left-40 w-[28rem] h-[28rem] rounded-full blur-[100px] ${theme.glowColor}`}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className={`absolute top-20 right-0 w-[24rem] h-[24rem] rounded-full blur-[80px] ${theme.glowColor}`}
        />
      </div>

      <div className="max-w-[1350px] mx-auto relative z-10 w-full">
        <div className="max-w-3xl space-y-6 text-left">
          {sec.badge && (
            <div className="flex items-center gap-2">
              <span className={`px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider border shadow-sm ${theme.badge}`}>
                {sec.badge}
              </span>
            </div>
          )}

          <h1 className={`text-4xl md:text-6xl lg:text-[4.2rem] leading-[1.05] ${theme.heading}`}>
            {sec.title || 'Tu negocio tiene potencial. Trébol lo convierte en crecimiento real.'}
          </h1>

          <p className="text-base md:text-xl opacity-80 font-light leading-relaxed max-w-2xl">
            {sec.subtitle || 'Integramos estrategia digital, inteligencia artificial y desarrollo organizacional para que tu empresa venda mejor sin perder el enfoque humano.'}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            {sec.ctaText && (
              <a
                href={sec.ctaUrl || 'https://wa.me/525564929081'}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-7 py-4 rounded-2xl text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${theme.buttonPrimary}`}
              >
                <span>{sec.ctaText}</span>
                <ArrowUpRight size={18} />
              </a>
            )}

            {cta2Text && (
              <a
                href={cta2Url}
                className={`px-7 py-4 rounded-2xl text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2 ${theme.buttonSecondary}`}
              >
                <span>{cta2Text}</span>
              </a>
            )}
          </div>

          {guaranteeText && (
            <div className="text-xs font-mono opacity-60 flex items-center gap-2 pt-1 font-semibold">
              <span>{guaranteeText}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// COMPONENTE: SERVICIOS TRÉBOL
// ─────────────────────────────────────────────────────────────
function ServicesCustomSection({ sec, themeStyle }) {
  const theme = getThemeClasses(themeStyle);
  return (
    <div className={`${theme.sectionBg} ${theme.wrapper} transition-colors border-b ${theme.border}`}>
      <Services sec={sec} />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// COMPONENTE: POR QUÉ ELEGIRNOS
// ─────────────────────────────────────────────────────────────
function WhyUsCustomSection({ sec, themeStyle }) {
  const theme = getThemeClasses(themeStyle);
  return (
    <div className={`${theme.sectionBgAlt} ${theme.wrapper} transition-colors border-b ${theme.border}`}>
      <WhyUs sec={sec} />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// COMPONENTE: PROCESO 4 PASOS
// ─────────────────────────────────────────────────────────────
function ProcessCustomSection({ sec, themeStyle }) {
  const theme = getThemeClasses(themeStyle);
  return (
    <div className={`${theme.sectionBg} ${theme.wrapper} transition-colors border-b ${theme.border}`}>
      <Process customSteps={sec?.items} title={sec?.title || "Cómo"} titleGreen={sec?.subtitle || "trabajamos."} />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// COMPONENTE: TABLA COMPARATIVA
// ─────────────────────────────────────────────────────────────
function ComparisonTableSection({ sec, themeStyle }) {
  const beforeItems = sec.beforeItems || [
    'Procesos manuales lentos e ineficientes',
    'Falta de seguimiento a prospectos',
    'Dependencia total de agencias externas',
    'Ventas estancadas por falta de visibilidad'
  ];

  const afterItems = sec.afterItems || [
    'Automatización con IA y respuestas inmediatas 24/7',
    'Embudo de ventas optimizado y seguimiento constante',
    'Autonomía total para tu equipo sin intermediarios',
    'Crecimiento predecible y aceleración de ingresos'
  ];

  const theme = getThemeClasses(themeStyle);

  return (
    <section className={`py-20 px-6 md:px-12 border-b ${theme.border} ${theme.sectionBgAlt} ${theme.wrapper} relative overflow-hidden`}>
      <div className="max-w-[1200px] mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-3">
          <span className={`text-xs block ${theme.badge}`}>
            ✦ Comparativa de Resultados
          </span>
          <h2 className={`text-3xl md:text-5xl ${theme.heading}`}>
            {sec.title || 'El Antes y Después en tu Empresa'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`p-8 md:p-10 ${theme.card} space-y-5 border-rose-500/40`}>
            <div className="flex items-center gap-2 text-rose-500 font-bold text-sm">
              <XCircle size={20} />
              <span>SIN TRÉBOL DIGITAL (MÉTODO ANTERIOR)</span>
            </div>
            <ul className="space-y-3">
              {beforeItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm opacity-80">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`p-8 md:p-10 ${theme.card} space-y-5 border-emerald-500/50 shadow-2xl`}>
            <div className={`flex items-center gap-2 font-bold text-sm ${theme.accentText}`}>
              <CheckCircle2 size={20} />
              <span>CON TRÉBOL DIGITAL (ECOSISTEMA INTEGRADO)</span>
            </div>
            <ul className="space-y-3">
              {afterItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm font-bold">
                  <Check size={18} className={`shrink-0 mt-0.5 ${theme.accentText}`} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// COMPONENTE: BLOQUE DE TEXTO LIBRE EDITORIAL
// ─────────────────────────────────────────────────────────────
function TextBlockSection({ sec, themeStyle }) {
  const theme = getThemeClasses(themeStyle);
  return (
    <section className={`py-20 px-6 md:px-12 max-w-[1000px] mx-auto space-y-6 ${theme.wrapper}`}>
      {sec.badge && (
        <span className={`text-xs block ${theme.badge}`}>
          {sec.badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl leading-tight ${theme.heading}`}>
        {sec.title || 'Título del Bloque Informativo'}
      </h2>
      <p className="text-base md:text-lg leading-relaxed opacity-85 font-light">
        {sec.content || sec.subtitle || 'Ingresa aquí el texto explicativo o el mensaje detallado para tus prospectos.'}
      </p>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// COMPONENTE: CARRUSEL DE IMÁGENES
// ─────────────────────────────────────────────────────────────
function ImageCarouselSection({ sec, themeStyle }) {
  const images = sec.images && sec.images.length > 0 ? sec.images : [
    { url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80', title: 'Consultoría en IA', caption: 'Sesión estratégica con equipos de dirección.' },
    { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80', title: 'Panel de Métricas', caption: 'Monitoreo de conversión y automatizaciones en vivo.' },
    { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80', title: 'Equipos Capacitados', caption: 'Adopción tecnológica en áreas comerciales.' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const theme = getThemeClasses(themeStyle);

  return (
    <section className={`py-20 px-6 md:px-12 border-y ${theme.border} ${theme.sectionBg} ${theme.wrapper} relative overflow-hidden`}>
      <div className="max-w-[1200px] mx-auto space-y-8 relative z-10">
        <div className="text-center space-y-2">
          <span className={`text-xs block ${theme.badge}`}>
            ✦ Galería Visual
          </span>
          <h2 className={`text-3xl ${theme.heading}`}>
            {sec.title || 'Galería de Proyectos & Casos de Éxito'}
          </h2>
        </div>

        <div className={`relative overflow-hidden shadow-2xl aspect-[16/9] md:aspect-[21/9] group ${theme.card}`}>
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex].url}
              alt={images[currentIndex].title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-10 text-white">
            <h3 className="text-2xl font-bold">{images[currentIndex].title}</h3>
            <p className="text-sm opacity-80 font-light">{images[currentIndex].caption}</p>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// COMPONENTE: REPRODUCTOR DE VIDEO
// ─────────────────────────────────────────────────────────────
function VideoEmbedSection({ sec, themeStyle }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoUrl = sec.videoUrl || 'https://www.youtube.com/embed/dQw4w9WgXcQ';
  const theme = getThemeClasses(themeStyle);

  return (
    <section className={`py-20 px-6 md:px-12 max-w-[1200px] mx-auto space-y-8 text-center ${theme.wrapper}`}>
      <div className="space-y-2">
        <span className={`text-xs block ${theme.badge}`}>
          ✦ Demostración en Vivo
        </span>
        <h2 className={`text-3xl ${theme.heading}`}>
          {sec.title || 'Conoce cómo funciona en este video'}
        </h2>
        {sec.subtitle && <p className="text-sm opacity-70 max-w-xl mx-auto">{sec.subtitle}</p>}
      </div>

      <div className={`relative overflow-hidden shadow-2xl aspect-video max-w-4xl mx-auto bg-black ${theme.card}`}>
        {isPlaying ? (
          <iframe
            src={`${videoUrl}?autoplay=1`}
            title="Video Demostración"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div
            onClick={() => setIsPlaying(true)}
            className="w-full h-full bg-cover bg-center flex items-center justify-center relative cursor-pointer group"
            style={{ backgroundImage: `url(${sec.thumbnailUrl || 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80'})` }}
          >
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/25 transition-all" />
            <div className={`w-20 h-20 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform relative z-10 ${theme.buttonPrimary}`}>
              <Play size={32} className="ml-1" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// COMPONENTE: BANNER DE ESTADÍSTICAS
// ─────────────────────────────────────────────────────────────
function StatsBannerSection({ sec, themeStyle }) {
  const stats = sec.stats || [
    { value: '+150%', label: 'Aumento en Conversión' },
    { value: '15 hrs', label: 'Ahorradas Semanalmente' },
    { value: '+45', label: 'Empresas Transformadas' },
    { value: '99.8%', label: 'Disponibilidad del Sistema' }
  ];

  const theme = getThemeClasses(themeStyle);

  return (
    <section className={`py-16 px-6 md:px-12 border-y ${theme.border} ${theme.sectionBgAlt} ${theme.wrapper} relative overflow-hidden`}>
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
        {stats.map((st, i) => (
          <div key={i} className="space-y-2">
            <span className={`text-4xl md:text-5xl tracking-tight block ${theme.accentText}`}>
              {st.value}
            </span>
            <span className="text-xs opacity-75 uppercase tracking-wider block font-mono">{st.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// COMPONENTE: TESTIMONIOS & CASOS REALES DE ÉXITO
// ─────────────────────────────────────────────────────────────
function TestimonialsSection({ sec, themeStyle }) {
  const defaultTestimonials = [
    {
      author: 'Carlos Mendoza',
      role: 'CEO & Fundador',
      company: 'Grupo Industrial B2B',
      text: 'Trébol Digital transformó por completo nuestra prospección. Implementaron el sitio nativo Next.js y el agente de IA, incrementando nuestros prospectos calificados en un 240% el primer mes.',
      rating: 5,
    },
    {
      author: 'Valeria Sotomayor',
      role: 'Directora de Marketing',
      company: 'Logística & Distribución CDMX',
      text: 'La velocidad de carga del sitio y la arquitectura CRO marcaron un antes y un después. El equipo es súper transparente y nos capacitaron para operar todo sin depender de nadie.',
      rating: 5,
    },
    {
      author: 'Ing. Roberto Garza',
      role: 'Director General',
      company: 'Servicios Financieros Toluca',
      text: 'Buscábamos una firma que combinara diseño editorial con tecnología real. Trébol logró reducir nuestro costo por lead a la mitad y automatizó el seguimiento de prospectos en WhatsApp.',
      rating: 5,
    },
  ];

  const items = sec.items && sec.items.length > 0 ? sec.items : defaultTestimonials;
  const theme = getThemeClasses(themeStyle);

  return (
    <section className={`py-24 px-6 md:px-12 border-b ${theme.border} ${theme.sectionBg} ${theme.wrapper} relative overflow-hidden`}>
      <div className="max-w-[1400px] mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className={`text-xs block ${theme.badge}`}>
            ✦ Casos Reales & Testimonios
          </span>
          <h2 className={`text-3xl md:text-5xl ${theme.heading}`}>{sec.title || 'Lo que dicen nuestros clientes'}</h2>
          {sec.subtitle && <p className="text-base opacity-75">{sec.subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((t, i) => (
            <div
              key={i}
              className={`p-8 md:p-10 flex flex-col justify-between space-y-6 transition-all duration-300 hover:-translate-y-1 ${theme.card}`}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating || 5)].map((_, s) => (
                    <Star key={s} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm md:text-base opacity-90 italic leading-relaxed font-light">
                  "{t.text || t.quote || t.description}"
                </p>
              </div>

              <div className="pt-4 border-t border-current/10 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm">{t.author || t.name}</h4>
                  <p className="text-xs opacity-60 font-mono">{t.role || t.title} — <span className={theme.accentText}>{t.company}</span></p>
                </div>
                <ShieldCheck size={20} className={theme.accentText} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// COMPONENTE: PRICING / TARIFARIO DE PAQUETES
// ─────────────────────────────────────────────────────────────
function PricingSection({ sec, themeStyle }) {
  const defaultPlans = [
    {
      name: 'Plan Aceleración B2B',
      price: '$18,500',
      period: 'MXN / pago único',
      desc: 'Ideal para empresas que requieren un sitio nativo de alto impacto y captación comercial inmediata.',
      popular: false,
      features: [
        'Desarrollo Nativo Next.js 15',
        'Arquitectura CRO + SEO Técnico',
        'Formulario Prospección CRM',
        'Optimización Velocidad (99/100)',
        'Soporte & Garantía por 6 Meses'
      ],
      buttonText: 'Comenzar Proyecto',
    },
    {
      name: 'Plan Full Ecosistema + IA',
      price: '$32,000',
      period: 'MXN / proyecto integral',
      desc: 'Para marcas que buscan liderar su sector con Agentes de IA 24/7 y embudo multicanal automatizado.',
      popular: true,
      features: [
        'Todo lo del Plan Aceleración',
        'Agente IA 24/7 para WhatsApp & Web',
        'Integración CRM + Automatizaciones',
        'Estrategia Pauta Meta & Google Ads',
        'Capacitación Presencial/Online a Equipo',
        'Autonomía Total Administrable'
      ],
      buttonText: 'Solicitar Asesoría IA',
    },
  ];

  const plans = sec.items && sec.items.length > 0 ? sec.items : defaultPlans;
  const theme = getThemeClasses(themeStyle);

  return (
    <section className={`py-24 px-6 md:px-12 border-b ${theme.border} ${theme.sectionBgAlt} ${theme.wrapper}`}>
      <div className="max-w-[1400px] mx-auto space-y-16">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className={`text-xs block ${theme.badge}`}>
            ✦ Paquetes & Planes de Inversión
          </span>
          <h2 className={`text-3xl md:text-5xl ${theme.heading}`}>{sec.title || 'Planes Diseñados para Escalar'}</h2>
          {sec.subtitle && <p className="text-base opacity-75">{sec.subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <div
              key={i}
              className={`p-8 md:p-12 border relative flex flex-col justify-between space-y-8 transition-all duration-300 ${
                p.popular
                  ? `${theme.buttonPrimary} border-emerald-400 scale-[1.02] shadow-2xl`
                  : theme.card
              }`}
            >
              {p.popular && (
                <div className="absolute -top-4 right-8 bg-carbon text-white font-mono text-[10px] font-extrabold uppercase px-4 py-1.5 rounded-full tracking-widest shadow-md">
                  ★ MÁS POPULAR
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className={`text-2xl ${p.popular ? 'font-black' : theme.heading}`}>{p.name || p.title}</h3>
                  <p className={`text-xs mt-2 leading-relaxed ${p.popular ? 'opacity-90' : 'opacity-70'}`}>{p.desc}</p>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-black font-mono">{p.price}</span>
                  <span className="text-xs opacity-70 font-mono">{p.period}</span>
                </div>

                <ul className="space-y-3 pt-4 border-t border-current/10">
                  {(p.features || []).map((f, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-xs md:text-sm font-medium">
                      <CheckCircle2 size={16} className="shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={p.url || 'https://wa.me/525564929081'}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 font-bold text-sm text-center transition-all cursor-pointer block ${
                  p.popular
                    ? 'bg-white text-carbon hover:bg-hueso shadow-lg rounded-xl'
                    : theme.buttonPrimary
                }`}
              >
                {p.buttonText || 'Comenzar Ahora'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// COMPONENTE: TECH STACK & ECOSISTEMA DE INTEGRACIONES
// ─────────────────────────────────────────────────────────────
function TechStackSection({ sec, themeStyle }) {
  const defaultStack = [
    { name: 'Next.js 15', category: 'Frontend Nativo High-Speed', icon: Zap },
    { name: 'OpenAI GPT-4o', category: 'Inteligencia Artificial & RAG', icon: Cpu },
    { name: 'WhatsApp Business API', category: 'Prospección Comercial 24/7', icon: MessageSquare },
    { name: 'Meta & Google Ads', category: 'Pauta Comercial Multicanal', icon: Target },
    { name: 'HubSpot / CRM', category: 'Gestión & Automatización', icon: Users },
    { name: 'Google Cloud Platform', category: 'Infraestructura & Seguridad', icon: Globe },
  ];

  const items = sec.items && sec.items.length > 0 ? sec.items : defaultStack;
  const theme = getThemeClasses(themeStyle);

  return (
    <section className={`py-20 px-6 md:px-12 border-b ${theme.border} ${theme.sectionBg} ${theme.wrapper}`}>
      <div className="max-w-[1400px] mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className={`text-xs block ${theme.badge}`}>
            ✦ Ecosistema Tecnológico Nativo
          </span>
          <h2 className={`text-3xl md:text-5xl ${theme.heading}`}>{sec.title || 'Infraestructura de Clase Mundial'}</h2>
          {sec.subtitle && <p className="text-base opacity-75">{sec.subtitle}</p>}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((st, i) => {
            const Icon = st.icon || Sparkles;
            return (
              <div
                key={i}
                className={`p-6 text-center space-y-3 shadow-sm hover:shadow-md transition-all ${theme.card}`}
              >
                <div className={`w-10 h-10 mx-auto flex items-center justify-center rounded-xl bg-current/10 ${theme.accentText}`}>
                  <Icon size={20} />
                </div>
                <h4 className="font-bold text-sm truncate">{st.name || st.title}</h4>
                <p className="text-[10px] opacity-60 line-clamp-1">{st.category || st.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// COMPONENTE: PREGUNTAS FRECUENTES (FAQ ACCORDION)
// ─────────────────────────────────────────────────────────────
function FAQSection({ sec, themeStyle }) {
  const [openIdx, setOpenIdx] = useState(0);

  const items = sec.items || [
    { q: '¿En cuánto tiempo queda lista mi página web?', a: 'El tiempo promedio de desarrollo para un sitio corporativo de alto rendimiento es de 2 a 3 semanas.' },
    { q: '¿El código fuente y la propiedad intelectual son míos?', a: 'Sí, al 100%. Te entregamos el código nativo Next.js completo sin licencias ocultas.' },
    { q: '¿Puedo actualizar el contenido después sin programador?', a: 'Sí, te capacitamos a ti y a tu equipo para que puedas editar textos e imágenes con autonomía total.' }
  ];

  const theme = getThemeClasses(themeStyle);

  return (
    <section className={`py-24 px-6 md:px-12 border-b ${theme.border} ${theme.sectionBgAlt} ${theme.wrapper}`}>
      <div className="max-w-[1000px] mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className={`text-xs block ${theme.badge}`}>
            ✦ Respuestas Claras & Transparencia
          </span>
          <h2 className={`text-3xl md:text-5xl ${theme.heading}`}>{sec.title || 'Preguntas Frecuentes'}</h2>
          {sec.subtitle && <p className="text-base opacity-75">{sec.subtitle}</p>}
        </div>

        <div className="space-y-4">
          {items.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className={`border transition-all overflow-hidden ${
                  isOpen ? `${theme.card} border-current` : theme.card
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base md:text-lg cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle size={20} className={theme.accentText} />
                    <span>{item.q || item.title}</span>
                  </span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-trebol' : 'opacity-50'}`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 text-sm md:text-base opacity-80 leading-relaxed font-light border-t border-current/10 mt-2">
                        {item.a || item.desc || item.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// RENDERIZADOR PRINCIPAL DE LANDING PAGES DINÁMICAS
// ─────────────────────────────────────────────────────────────
export default function DynamicLandingRenderer({ landingData, landing }) {
  const data = landingData || landing || {};
  const themeStyle = data.themeStyle || 'original';
  const sections = data.sections || [
    { id: 'sec-hero', type: 'hero', enabled: true },
    { id: 'sec-services', type: 'services', enabled: true },
    { id: 'sec-process', type: 'process', enabled: true },
    { id: 'sec-why_us', type: 'why_us', enabled: true },
    { id: 'sec-contact', type: 'contact_form', enabled: true }
  ];

  const activeSections = sections.filter((s) => s.enabled !== false);
  const theme = getThemeClasses(themeStyle);

  return (
    <div className={`min-h-screen ${theme.wrapper}`}>
      <div className="relative z-10">
        {activeSections.map((sec, idx) => {
          if (sec.type === 'hero') return <OriginalTrebolHero key={sec.id || idx} sec={sec} themeStyle={themeStyle} />;
          if (sec.type === 'services') return <ServicesCustomSection key={sec.id || idx} sec={sec} themeStyle={themeStyle} />;
          if (sec.type === 'why_us') return <WhyUsCustomSection key={sec.id || idx} sec={sec} themeStyle={themeStyle} />;
          if (sec.type === 'process') return <ProcessCustomSection key={sec.id || idx} sec={sec} themeStyle={themeStyle} />;
          if (sec.type === 'comparison_table') return <ComparisonTableSection key={sec.id || idx} sec={sec} themeStyle={themeStyle} />;
          if (sec.type === 'text_block') return <TextBlockSection key={sec.id || idx} sec={sec} themeStyle={themeStyle} />;
          if (sec.type === 'image_carousel') return <ImageCarouselSection key={sec.id || idx} sec={sec} themeStyle={themeStyle} />;
          if (sec.type === 'video_embed') return <VideoEmbedSection key={sec.id || idx} sec={sec} themeStyle={themeStyle} />;
          if (sec.type === 'stats_banner') return <StatsBannerSection key={sec.id || idx} sec={sec} themeStyle={themeStyle} />;
          if (sec.type === 'client_logos') return <ClientLogosBanner key={sec.id || idx} isLanding={true} />;
          if (sec.type === 'contact_form') return <Contact key={sec.id || idx} isLanding={true} />;
          if (sec.type === 'testimonials') return <TestimonialsSection key={sec.id || idx} sec={sec} themeStyle={themeStyle} />;
          if (sec.type === 'pricing') return <PricingSection key={sec.id || idx} sec={sec} themeStyle={themeStyle} />;
          if (sec.type === 'tech_stack') return <TechStackSection key={sec.id || idx} sec={sec} themeStyle={themeStyle} />;
          if (sec.type === 'faq') return <FAQSection key={sec.id || idx} sec={sec} themeStyle={themeStyle} />;

          if (sec.type === 'benefits') {
            return (
              <section key={sec.id || idx} className={`py-20 px-6 md:px-12 border-y ${theme.border} ${theme.sectionBgAlt} ${theme.wrapper}`}>
                <div className="max-w-[1400px] mx-auto space-y-12">
                  <div className="text-center space-y-3 max-w-2xl mx-auto">
                    <span className={`text-xs block ${theme.badge}`}>
                      ✦ Ventajas de nuestra solución
                    </span>
                    <h2 className={`text-3xl ${theme.heading}`}>{sec.title}</h2>
                    {sec.subtitle && <p className="text-sm opacity-70">{sec.subtitle}</p>}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {(sec.items || []).map((item, i) => (
                      <div key={i} className={`p-8 space-y-4 transition-all group ${theme.card}`}>
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg bg-current/10 ${theme.accentText}`}>
                          0{i + 1}
                        </div>
                        <h3 className="text-xl font-bold">{typeof item === 'string' ? item : item.title}</h3>
                        {typeof item === 'object' && item.desc && <p className="text-sm opacity-80 leading-relaxed">{item.desc}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          }

          if (sec.type === 'cta') {
            return (
              <section key={sec.id || idx} className={`py-20 px-6 md:px-12 max-w-[1400px] mx-auto text-center ${theme.wrapper}`}>
                <div className={`p-10 md:p-16 border space-y-6 shadow-2xl relative overflow-hidden ${theme.card}`}>
                  <h2 className={`text-3xl md:text-5xl ${theme.heading}`}>{sec.title}</h2>
                  {sec.subtitle && <p className="opacity-80 max-w-2xl mx-auto text-base">{sec.subtitle}</p>}
                  {sec.ctaText && (
                    <a
                      href={sec.ctaUrl || 'https://wa.me/525564929081'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-3 px-8 py-4 font-bold text-base transition-all shadow-lg cursor-pointer ${theme.buttonPrimary}`}
                    >
                      <MessageSquare size={20} />
                      <span>{sec.ctaText}</span>
                    </a>
                  )}
                </div>
              </section>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
}
