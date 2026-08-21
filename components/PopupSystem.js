'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, Zap, MessageSquare, ArrowRight, CheckCircle2, Clock
} from 'lucide-react';

export const COLOR_PRESETS = [
  {
    id: 'preset-trebol-hueso',
    name: '1. Editorial Blanco & Verde (Oficial)',
    bgColor: '#FFFFFF',
    textColor: '#1A1C1A',
    subtitleColor: '#4A5568',
    badgeBg: '#5C9E43',
    badgeTextColor: '#FFFFFF',
    buttonBg: '#5C9E43',
    buttonTextColor: '#FFFFFF',
    bulletIconColor: '#5C9E43',
    useGradient: false,
  },
  {
    id: 'preset-dark-glass',
    name: '2. Glassmorphism Dark Hero',
    bgColor: '#111311',
    textColor: '#FFFFFF',
    subtitleColor: '#D1D5DB',
    badgeBg: '#5C9E43',
    badgeTextColor: '#000000',
    buttonBg: '#5C9E43',
    buttonTextColor: '#000000',
    bulletIconColor: '#5C9E43',
    useGradient: true,
  },
  {
    id: 'preset-degradado-tech',
    name: '3. Esmeralda Tech Gradient',
    bgColor: '#0F1F17',
    textColor: '#FFFFFF',
    subtitleColor: '#A3E635',
    badgeBg: '#8DC63F',
    badgeTextColor: '#0F1F17',
    buttonBg: '#8DC63F',
    buttonTextColor: '#0F1F17',
    bulletIconColor: '#8DC63F',
    useGradient: true,
  },
  {
    id: 'preset-blanco-minimal',
    name: '4. Minimalista Elegante',
    bgColor: '#FFFFFF',
    textColor: '#1F2937',
    subtitleColor: '#64748B',
    badgeBg: '#EAF4E5',
    badgeTextColor: '#5C9E43',
    buttonBg: '#1F2937',
    buttonTextColor: '#FFFFFF',
    bulletIconColor: '#5C9E43',
    useGradient: false,
  }
];

export const DEFAULT_POPUPS_LIST = [
  {
    id: 'popup-1',
    name: 'Diagnóstico IA (Centro)',
    isEnabled: true,
    position: 'center',          // 'center', 'bottom-right', 'bottom-left', 'bottom-bar'
    displayTrigger: 'delay',     // 'delay', 'scroll', 'exit-intent', 'instant'
    delaySeconds: 4,
    scrollThreshold: 40,
    targetPages: 'all',          // 'all' o cualquier ruta personalizada ej. '/soluciones/ia-aplicada'
    persistence: 'always',

    badgeText: 'OFERTA EXCLUSIVA DE IA',
    title: 'Diagnóstico Gratuito de IA para tu Empresa',
    subtitle: 'Analizamos tus procesos actuales y te mostramos cómo ahorrar hasta 15 horas semanales con Inteligencia Artificial.',
    bullet1: 'Evaluación directa de tus procesos operativos actuales',
    bullet2: 'Propuesta de automatización sin compromiso',
    bullet3: 'Demostración en vivo adaptada a tu sector',
    showBullets: true,
    
    showCtaButton: true,
    ctaText: 'Solicitar Diagnóstico por WhatsApp',
    ctaUrl: 'https://wa.me/525564929081?text=Hola,%20quisiera%20solicitar%20el%20Diagn%C3%B3stico%20Gratuito%20de%20IA.',
    whatsappPhone: '+52 55 6492 9081',
    
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    showImage: true,
    imagePosition: 'right-split',
    useImageGradientOverlay: true,

    showCountdown: true,
    countdownMinutes: 15,
    bgColor: '#FFFFFF',
    textColor: '#1A1C1A',
    subtitleColor: '#4A5568',
    badgeBg: '#5C9E43',
    badgeTextColor: '#FFFFFF',
    buttonBg: '#5C9E43',
    buttonTextColor: '#FFFFFF',
    bulletIconColor: '#5C9E43',
  },
  {
    id: 'popup-promo-bg',
    name: 'Promoción Exclusiva (Fondo BG Red)',
    isEnabled: true,
    position: 'center',
    displayTrigger: 'delay',
    delaySeconds: 3,
    targetPages: 'all',
    persistence: 'always',

    badgeText: 'PROMOCIÓN EXCLUSIVA',
    title: 'Nuevo Título Promocional',
    subtitle: 'Descripción personalizada para tu nueva campaña.',
    showBullets: false,
    
    showCtaButton: true,
    ctaText: 'Solicitar Información',
    ctaUrl: 'https://wa.me/525564929081?text=Hola,%20quisiera%20solicitar%20informaci%C3%B3n.',
    
    imageUrl: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80',
    showImage: true,
    imagePosition: 'full-bg',
    useImageGradientOverlay: true,

    showCountdown: false,
    bgColor: '#8B0000',
    textColor: '#FFFFFF',
    subtitleColor: '#E2E8F0',
    badgeBg: '#5C9E43',
    badgeTextColor: '#FFFFFF',
    buttonBg: '#5C9E43',
    buttonTextColor: '#FFFFFF',
  }
];

export default function PopupSystem() {
  const [popupsList, setPopupsList] = useState(DEFAULT_POPUPS_LIST);
  const [activePopup, setActivePopup] = useState(null);
  const [countdown, setCountdown] = useState(900);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('trebol_popups_list_v3');
      if (saved) {
        setPopupsList(JSON.parse(saved));
      }
    } catch (e) {
      console.warn('Error loading popups list', e);
    }

    // Listener para disparo manual desde el panel de administración
    const handlePreview = (e) => {
      const popupData = e.detail;
      if (popupData) {
        setActivePopup({ ...popupData, isEnabled: true });
        setCountdown((popupData.countdownMinutes || 15) * 60);
      }
    };
    window.addEventListener('trebol:preview-popup', handlePreview);
    return () => window.removeEventListener('trebol:preview-popup', handlePreview);
  }, []);

  // Lógica de Triggers: Buscar ÚNICAMENTE EL ÚNICO POPUP ACTIVO
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const currentPath = window.location.pathname;

    const enabledPopup = popupsList.find((p) => p.isEnabled);
    if (!enabledPopup) return;

    // Verificar filtro de página objetivo (Soporta coincidencia parcial o texto libre de ruta)
    const target = (enabledPopup.targetPages || 'all').trim();
    if (target !== 'all' && target !== '' && !currentPath.toLowerCase().includes(target.toLowerCase())) {
      return;
    }

    // Verificar persistencia de sesión
    if (enabledPopup.persistence === 'once-per-session') {
      const shown = sessionStorage.getItem(`trebol_popup_shown_${enabledPopup.id}`);
      if (shown) return;
    }

    const showPopupNow = () => {
      setActivePopup(enabledPopup);
      setCountdown((enabledPopup.countdownMinutes || 15) * 60);
      if (enabledPopup.persistence === 'once-per-session') {
        sessionStorage.setItem(`trebol_popup_shown_${enabledPopup.id}`, 'true');
      }
    };

    // Trigger 1: DELAY / INSTANT
    if (enabledPopup.displayTrigger === 'instant' || enabledPopup.displayTrigger === 'delay') {
      const delayMs = enabledPopup.displayTrigger === 'instant' ? 200 : (enabledPopup.delaySeconds || 4) * 1000;
      const timer = setTimeout(showPopupNow, delayMs);
      return () => clearTimeout(timer);
    }

    // Trigger 2: SCROLL
    if (enabledPopup.displayTrigger === 'scroll') {
      const handleScroll = () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const currentScroll = window.scrollY;
        const percent = totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0;

        if (percent >= (enabledPopup.scrollThreshold || 40)) {
          showPopupNow();
          window.removeEventListener('scroll', handleScroll);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }

    // Trigger 3: EXIT INTENT
    if (enabledPopup.displayTrigger === 'exit-intent') {
      const handleMouseLeave = (e) => {
        if (e.clientY <= 5) {
          showPopupNow();
          document.removeEventListener('mouseleave', handleMouseLeave);
        }
      };
      document.addEventListener('mouseleave', handleMouseLeave);
      return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }
  }, [popupsList]);

  // Temporizador regresivo único
  useEffect(() => {
    if (!activePopup) return;
    const interval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : (activePopup.countdownMinutes || 15) * 60));
    }, 1000);
    return () => clearInterval(interval);
  }, [activePopup]);

  const handleClose = () => {
    setActivePopup(null);
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  if (!activePopup || !activePopup.isEnabled) return null;

  const pos = activePopup.position || 'center';
  const isLeftSplit = activePopup.showImage && activePopup.imagePosition === 'left-split';
  const isRightSplit = activePopup.showImage && activePopup.imagePosition === 'right-split';
  const isFullBackground = activePopup.showImage && (activePopup.imagePosition === 'full-bg' || activePopup.imagePosition === 'full-background');
  const isTopBanner = activePopup.showImage && activePopup.imagePosition === 'top-banner';
  const currentBgColor = activePopup.bgColor || '#FFFFFF';

  // 1. RENDERIZADO SI ES MODAL CENTRO
  if (pos === 'center') {
    return (
      <AnimatePresence>
        <div className="fixed inset-0 z-[99990] flex items-center justify-center p-4 md:p-6 bg-slate-950/70 backdrop-blur-md font-sans">
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            style={{ backgroundColor: isFullBackground ? 'transparent' : currentBgColor }}
            className={`rounded-[2rem] shadow-[0_30px_70px_rgba(0,0,0,0.3)] border border-white/20 relative overflow-hidden transition-all duration-300 w-full ${
              (isLeftSplit || isRightSplit) ? 'max-w-3xl flex flex-col md:flex-row' : 'max-w-lg'
            }`}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center cursor-pointer transition-colors z-40 backdrop-blur-sm"
            >
              <X size={16} />
            </button>

            {/* CASO: FULL BACKGROUND */}
            {isFullBackground && activePopup.imageUrl && (
              <>
                <div
                  className="absolute inset-0 bg-cover bg-center z-0 scale-105"
                  style={{ backgroundImage: `url(${activePopup.imageUrl})` }}
                />
                <div
                  className="absolute inset-0 z-0 backdrop-blur-[2px]"
                  style={{
                    background: activePopup.useImageGradientOverlay !== false
                      ? 'linear-gradient(to right, rgba(15, 23, 42, 0.92) 0%, rgba(15, 23, 42, 0.65) 50%, rgba(15, 23, 42, 0.15) 100%)'
                      : 'rgba(15, 23, 42, 0.5)'
                  }}
                />
              </>
            )}

            {/* CASO: IZQUIERDA SPLIT */}
            {isLeftSplit && activePopup.imageUrl && (
              <div className="md:w-1/2 relative min-h-[260px] md:min-h-full overflow-hidden bg-neutral-100">
                <img
                  src={activePopup.imageUrl}
                  alt="Modal Visual"
                  className="w-full h-full object-cover absolute inset-0"
                />
                {activePopup.useImageGradientOverlay && (
                  <div
                    className="absolute inset-y-0 right-0 w-24 hidden md:block pointer-events-none"
                    style={{ background: `linear-gradient(to left, ${currentBgColor}, transparent)` }}
                  />
                )}
              </div>
            )}

            {/* CONTENIDO TEXTO */}
            <div
              className={`p-7 md:p-9 space-y-5 relative z-10 flex-1 flex flex-col justify-center ${
                (isLeftSplit || isRightSplit) ? 'md:w-1/2' : 'w-full'
              }`}
            >
              {isTopBanner && activePopup.imageUrl && (
                <div className="w-full h-36 md:h-44 rounded-2xl overflow-hidden mb-2 shadow-sm border border-neutral-100 relative">
                  <img
                    src={activePopup.imageUrl}
                    alt="Banner Visual"
                    className="w-full h-full object-cover"
                  />
                  {activePopup.useImageGradientOverlay && (
                    <div
                      className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
                      style={{ background: `linear-gradient(to top, ${currentBgColor}, transparent)` }}
                    />
                  )}
                </div>
              )}

              <div className="flex flex-wrap items-center gap-2">
                {activePopup.badgeText && (
                  <span
                    style={{
                      backgroundColor: activePopup.badgeBg || '#5C9E43',
                      color: activePopup.badgeTextColor || '#FFFFFF',
                    }}
                    className="px-3.5 py-1 rounded-full font-mono font-black text-[10px] uppercase tracking-wider shadow-sm flex items-center gap-1"
                  >
                    <Zap size={12} />
                    {activePopup.badgeText}
                  </span>
                )}

                {activePopup.showCountdown && (
                  <span
                    style={{ color: isFullBackground ? '#FFFFFF' : (activePopup.bulletIconColor || '#5C9E43') }}
                    className="text-[11px] font-mono font-bold flex items-center gap-1 bg-black/10 px-3 py-1 rounded-full"
                  >
                    <Clock size={12} /> Expira en {formatTime(countdown)}
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <h3
                  style={{ color: isFullBackground ? '#FFFFFF' : (activePopup.textColor || '#1A1C1A') }}
                  className="text-2xl md:text-3xl font-black leading-tight tracking-tight"
                >
                  {activePopup.title}
                </h3>
                <p
                  style={{ color: isFullBackground ? '#E2E8F0' : (activePopup.subtitleColor || '#4A5568') }}
                  className="text-sm font-normal leading-relaxed"
                >
                  {activePopup.subtitle}
                </p>
              </div>

              {activePopup.showBullets && (
                <div className={`p-4 rounded-2xl border space-y-2 ${isFullBackground ? 'bg-black/40 border-white/20' : 'bg-black/5 border-black/10'}`}>
                  {activePopup.bullet1 && (
                    <div className="flex items-center gap-2 text-xs font-medium" style={{ color: isFullBackground ? '#FFFFFF' : (activePopup.textColor || '#1A1C1A') }}>
                      <CheckCircle2 size={15} style={{ color: activePopup.bulletIconColor || '#5C9E43' }} className="shrink-0" />
                      <span>{activePopup.bullet1}</span>
                    </div>
                  )}
                  {activePopup.bullet2 && (
                    <div className="flex items-center gap-2 text-xs font-medium" style={{ color: isFullBackground ? '#FFFFFF' : (activePopup.textColor || '#1A1C1A') }}>
                      <CheckCircle2 size={15} style={{ color: activePopup.bulletIconColor || '#5C9E43' }} className="shrink-0" />
                      <span>{activePopup.bullet2}</span>
                    </div>
                  )}
                </div>
              )}

              {/* BOTÓN CTA OPCIONAL */}
              {activePopup.showCtaButton !== false && activePopup.ctaText && (
                <a
                  href={activePopup.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClose}
                  style={{
                    backgroundColor: activePopup.buttonBg || '#5C9E43',
                    color: activePopup.buttonTextColor || '#FFFFFF',
                  }}
                  className="w-full py-4 px-6 rounded-2xl font-black text-sm md:text-base transition-all flex items-center justify-center gap-2.5 shadow-lg cursor-pointer hover:opacity-90 active:scale-[0.98] group"
                >
                  <MessageSquare size={18} />
                  <span>{activePopup.ctaText}</span>
                  <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                </a>
              )}
            </div>

            {/* CASO: DERECHA SPLIT */}
            {isRightSplit && activePopup.imageUrl && (
              <div className="md:w-1/2 relative min-h-[260px] md:min-h-full overflow-hidden bg-neutral-100">
                <img
                  src={activePopup.imageUrl}
                  alt="Modal Visual"
                  className="w-full h-full object-cover absolute inset-0"
                />
                {activePopup.useImageGradientOverlay && (
                  <div
                    className="absolute inset-y-0 left-0 w-24 hidden md:block pointer-events-none"
                    style={{ background: `linear-gradient(to right, ${currentBgColor}, transparent)` }}
                  />
                )}
              </div>
            )}
          </motion.div>
        </div>
      </AnimatePresence>
    );
  }

  // 2. RENDERIZADO SI ES POSICIÓN FLOTANTE (bottom-right / bottom-left / bottom-bar)
  const posClass = pos === 'bottom-right'
    ? 'bottom-6 right-6 max-w-sm'
    : pos === 'bottom-left'
    ? 'bottom-6 left-6 max-w-sm'
    : 'bottom-6 left-6 right-6 max-w-4xl mx-auto';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        style={{ backgroundColor: currentBgColor, borderColor: activePopup.borderColor || '#5C9E43' }}
        className={`fixed z-[99990] p-6 rounded-3xl border-2 shadow-2xl font-sans ${posClass}`}
      >
        <div className="flex items-center justify-between gap-3 mb-2">
          {activePopup.badgeText && (
            <span
              style={{ backgroundColor: activePopup.badgeBg || '#5C9E43', color: activePopup.badgeTextColor || '#FFFFFF' }}
              className="text-[9.5px] font-mono font-black px-2.5 py-0.5 rounded-full uppercase"
            >
              {activePopup.badgeText}
            </span>
          )}
          <button onClick={handleClose} className="text-neutral-400 hover:text-carbon cursor-pointer">
            <X size={16} />
          </button>
        </div>

        <h4 className="font-extrabold text-base text-carbon mb-1" style={{ color: activePopup.textColor || '#1A1C1A' }}>
          {activePopup.title}
        </h4>
        <p className="text-xs text-neutral-600 font-light mb-4" style={{ color: activePopup.subtitleColor || '#4A5568' }}>
          {activePopup.subtitle}
        </p>

        {activePopup.showCtaButton !== false && activePopup.ctaText && (
          <a
            href={activePopup.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClose}
            style={{ backgroundColor: activePopup.buttonBg || '#5C9E43', color: activePopup.buttonTextColor || '#FFFFFF' }}
            className="w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <MessageSquare size={15} />
            <span>{activePopup.ctaText}</span>
          </a>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
