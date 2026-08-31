'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const REDES = [
  {
    id: 'facebook',
    name: 'Facebook',
    image: '/redes/facebook.png',
    color: '#1877F2',
    bgBadge: 'bg-[#1877F2]/15 text-[#1877F2] border-[#1877F2]/30'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    image: '/redes/instagram.png',
    color: '#E4405F',
    bgBadge: 'bg-[#E4405F]/15 text-[#E4405F] border-[#E4405F]/30'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    image: '/redes/linkendln.png',
    color: '#0A66C2',
    bgBadge: 'bg-[#0A66C2]/15 text-[#0A66C2] border-[#0A66C2]/30'
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    image: '/redes/whatsapp.png',
    color: '#25D366',
    bgBadge: 'bg-[#25D366]/15 text-[#25D366] border-[#25D366]/30'
  }
];

export default function RedesSliderMockup() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REDES.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered]);

  const currentRed = REDES[currentIndex];

  return (
    <div 
      className="w-full h-full relative overflow-hidden bg-black flex flex-col justify-between select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ── IMÁGENES CON TRANSICIÓN SUAVE ── */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-neutral-950">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRed.id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden"
          >
            <img
              src={currentRed.image}
              alt={currentRed.name}
              className="w-full h-full object-cover object-top block"
              loading="eager"
              style={{
                imageRendering: '-webkit-optimize-contrast',
                WebkitBackfaceVisibility: 'hidden',
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0.1px)',
                WebkitFontSmoothing: 'antialiased',
                filter: 'contrast(1.03) brightness(1.02)',
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── HEADER SUTIL CON NAVEGACIÓN DE PESTAÑAS / PILLS ── */}
      <div className="relative z-20 w-full pt-10 px-3 pb-2 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-auto">
        <div className="flex items-center justify-center gap-1.5 bg-black/60 backdrop-blur-md p-1 rounded-full border border-white/10 shadow-lg">
          {REDES.map((red, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={red.id}
                onClick={() => setCurrentIndex(idx)}
                className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide transition-all duration-300 flex items-center gap-1 cursor-pointer ${
                  isActive
                    ? 'bg-white text-black shadow-md scale-105'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                <span 
                  className="w-1.5 h-1.5 rounded-full" 
                  style={{ backgroundColor: red.color }} 
                />
                <span>{red.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── BARRA DE PROGRESO INFERIOR ── */}
      <div className="relative z-20 w-full px-4 pb-4 pt-6 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none">
        <div className="flex items-center justify-between gap-1.5">
          {REDES.map((red, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div
                key={red.id}
                className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden"
              >
                {isActive && (
                  <motion.div
                    key={currentRed.id}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 3.5, ease: 'linear' }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: red.color }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
