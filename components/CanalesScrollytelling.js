'use client';

import { useRef, useState, useEffect } from 'react';
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

// ── TEXTURA DE TITANIO MATE CEPILLADO CON RUIDO VECTORIAL ─────────────────────
const titaniumTexture = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.52 0 0 0 0 0.50 0 0 0 0 0.47 0 0 0 0.08 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;

// ── TEXTURA DE VIDRIO ESMERILADO SATINADO DE ALTA GAMA ─────────────────────
const satinFrostedGlassTexture = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='satinNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.98' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 0.04 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23satinNoise)'/%3E%3C/svg%3E")`;

// ── ISOTIPO VECTORIAL TRÉBOL DIGITAL (LUMINOSO Y REALISTA) ─────────────────────
function TrebolLogoSVG({ className = "w-10 h-10" }) {
  return (
    <svg
      viewBox="0 0 500 500"
      className={`${className} shrink-0`}
      style={{ transformStyle: 'preserve-3d', transform: 'translateZ(2px)' }}
    >
      <g transform="translate(250, 250)">
        {/* Pin Superior Izquierdo (-135°) */}
        <g transform="rotate(-135)">
          <path d="M 0,0 C -35,-55 -65,-95 -65,-140 A 65,65 0 0,1 65,-140 C 65,-95 35,-55 0,0 Z" fill="#84C638" stroke="#84C638" strokeWidth="30" strokeLinejoin="round" />
          <circle cx="0" cy="-140" r="48" fill="#FFFFFF" />
          <circle cx="0" cy="-140" r="37" fill="#2B2D2E" />
        </g>

        {/* Pin Superior Derecho (-45°) */}
        <g transform="rotate(-45)">
          <path d="M 0,0 C -35,-55 -65,-95 -65,-140 A 65,65 0 0,1 65,-140 C 65,-95 35,-55 0,0 Z" fill="#84C638" stroke="#84C638" strokeWidth="30" strokeLinejoin="round" />
          <circle cx="0" cy="-140" r="48" fill="#FFFFFF" />
          <circle cx="0" cy="-140" r="37" fill="#529B3C" />
        </g>

        {/* Pin Inferior Izquierdo (135°) */}
        <g transform="rotate(135)">
          <path d="M 0,0 C -35,-55 -65,-95 -65,-140 A 65,65 0 0,1 65,-140 C 65,-95 35,-55 0,0 Z" fill="#84C638" stroke="#84C638" strokeWidth="30" strokeLinejoin="round" />
          <circle cx="0" cy="-140" r="48" fill="#FFFFFF" />
          <circle cx="0" cy="-140" r="37" fill="#529B3C" />
        </g>

        {/* Pin Inferior Derecho (45°) */}
        <g transform="rotate(45)">
          <path d="M 0,0 C -35,-55 -65,-95 -65,-140 A 65,65 0 0,1 65,-140 C 65,-95 35,-55 0,0 Z" fill="#84C638" stroke="#84C638" strokeWidth="30" strokeLinejoin="round" />
          <circle cx="0" cy="-140" r="48" fill="#FFFFFF" />
          <circle cx="0" cy="-140" r="37" fill="#529B3C" />
        </g>
      </g>
    </svg>
  );
}

// ── MÓDULO HYPER-REALISTA DE TRIPLE CÁMARA TRASERA IPHONE PRO ──────
function TripleCameraModule() {
  return (
    <div
      className="w-[130px] h-[130px] rounded-[2.2rem] absolute top-[20px] left-[20px]"
      style={{
        transform: 'translateZ(2px)',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* ── APILAMIENTO 3D PARA EL VOLUMEN DE LA BASE DE CRISTAL DE CÁMARAS ── */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`bump-${i}`}
          className="absolute inset-0 rounded-[2.2rem]"
          style={{
            transform: `translateZ(${i * 0.5}px)`,
            background: 'linear-gradient(135deg, rgba(70, 70, 69, 0.9) 0%, rgba(68, 65, 60, 0.95) 100%)',
            border: '0.5px solid rgba(255, 255, 255, 0.35)',
            boxShadow: i === 0 ? '5px 10px 30px rgba(0, 0, 0, 0.8)' : 'none'
          }}
        />
      ))}

      {/* ── CARA FRONTAL DEL MÓDULO (Donde se asientan los lentes) ── */}
      <div
        className="absolute inset-0 rounded-[2.2rem] shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.25)]"
        style={{
          transform: 'translateZ(6px)',
          transformStyle: 'preserve-3d',
          backgroundClip: 'padding-box, border-box',
          backgroundOrigin: 'padding-box, border-box',
          backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.02) 50%, rgba(0,0,0,0.85) 100%), linear-gradient(135deg, #3a3834 0%, #1e1d1b 50%, #0d0c0b 100%)`,
          border: '1.5px solid rgba(255,255,255,0.08)'
        }}
      >
        {/* Reflejo brillante diagonal */}
        <div className="absolute inset-0 rounded-[2.2rem] pointer-events-none overflow-hidden z-10" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.01) 45%, rgba(0,0,0,0.4) 100%)' }}>
          <div className="absolute top-[-30%] left-[-30%] w-[160%] h-[160%] bg-gradient-to-tr from-transparent via-white/12 to-transparent rotate-45 translate-x-[-10%] translate-y-[-10%] mix-blend-overlay" />
        </div>

        {/* Textura de Titanio de la base */}
        <div className="absolute inset-0 pointer-events-none rounded-[2.2rem]" style={{ backgroundImage: titaniumTexture, mixBlendMode: 'overlay', opacity: 0.18 }} />

        {/* ── LENTE 1 (Top-Left): CÁMARA PRINCIPAL ── */}
        <div className="w-[42px] h-[42px] rounded-full absolute top-[16px] left-[16px] flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
          {/* Cilindro exterior del bisel metálico (HUECO) */}
          {/* Cilindro exterior del bisel metálico (HUECO) */}
          {[...Array(32)].map((_, i) => (
            <div key={`l1-${i}`} className="absolute w-[42px] h-[42px] rounded-full border-[3px] border-[#3a3834] bg-transparent" style={{ transform: `translateZ(${i * 0.5}px)` }} />
          ))}

          {/* Cara frontal del anillo (Metal) */}
          <div
            className="absolute w-[42px] h-[42px] rounded-full flex items-center justify-center shadow-[4px_8px_16px_rgba(0,0,0,0.9),_inset_0_2px_3px_rgba(255,255,255,0.3)] border border-[#a39b8f]/40"
            style={{
              transform: 'translateZ(16px)',
              transformStyle: 'preserve-3d',
              background: 'radial-gradient(circle, transparent 16px, #111111 16.5px, #8a857b 17.5px, #ffffff 19.5px, #47433c 21px)'
            }}
          >
            {/* Hueco interno del bisel */}
            <div className="w-[36px] h-[36px] rounded-full bg-transparent flex items-center justify-center shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)]" style={{ transformStyle: 'preserve-3d' }}>

              {/* Cilindro interno oscuro para dar profundidad física al barril del lente */}
              {[...Array(12)].map((_, i) => (
                <div key={`l1-in-${i}`} className="absolute w-[36px] h-[36px] rounded-full border-[1.5px] border-[#000]/60 bg-transparent" style={{ transform: `translateZ(-${i * 0.5}px)` }} />
              ))}

              {/* Lente de Cristal (Físicamente hundido dentro del barril) */}
              <div className="w-[34px] h-[34px] rounded-full bg-[#08080a] relative flex items-center justify-center shadow-[inset_0_0_12px_rgba(0,0,0,1)]" style={{ transform: 'translateZ(-6px)', transformStyle: 'preserve-3d' }}>

                {/* Elemento de Apertura Interior (Más hundido todavía) */}
                <div
                  className="w-[16px] h-[16px] rounded-full flex items-center justify-center shadow-[0_0_8px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(255,255,255,0.05)]"
                  style={{
                    transform: 'translateZ(-8px)',
                    transformStyle: 'preserve-3d',
                    background: 'radial-gradient(circle at center, #020203 30%, #1a1c23 80%, #050608 100%)',
                    border: '1px solid rgba(255,255,255,0.03)'
                  }}
                >
                  {/* Sensor con reflejo azul */}
                  <div className="w-[8px] h-[8px] rounded-full bg-gradient-to-tr from-[#020202] to-[#0b101d] flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,1)]" style={{ transform: 'translateZ(-2px)', transformStyle: 'preserve-3d' }}>
                    <div className="absolute w-[2.5px] h-[2.5px] bg-blue-400/80 rounded-full blur-[0.3px]" style={{ transform: 'translateZ(1px)', top: '2px', left: '2px' }} />
                  </div>
                </div>

                {/* Contenedor 2D para reflejos superficiales del cristal */}
                <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none" style={{ transform: 'translateZ(1px)' }}>
                  {/* Reflejo curvado del domo */}
                  <div className="absolute top-[10%] left-[10%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-white/20 via-transparent to-transparent mix-blend-screen" />

                  {/* Brillo principal - Softbox de estudio */}
                  <div className="absolute top-[22%] left-[22%] w-[12px] h-[6px] bg-gradient-to-b from-white/80 to-white/10 rounded-full blur-[0.4px] rotate-[-35deg]" />

                  {/* Destello secundario */}
                  <div className="absolute bottom-[28%] right-[28%] w-[4px] h-[2px] bg-white/30 rounded-full blur-[0.2px] rotate-[-35deg]" />

                  {/* Recubrimiento óptico sutil */}
                  <div className="absolute bottom-[8%] right-[8%] w-[75%] h-[75%] rounded-full bg-gradient-to-tl from-cyan-500/10 via-indigo-500/5 to-transparent blur-[1.5px] mix-blend-screen" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── LENTE 2 (Bottom-Left): CÁMARA ULTRA GRAN ANGULAR ── */}
        <div className="w-[42px] h-[42px] rounded-full absolute bottom-[16px] left-[16px] flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
          {/* Cilindro exterior del bisel metálico (HUECO) */}
          {/* Cilindro exterior del bisel metálico (HUECO) */}
          {[...Array(32)].map((_, i) => (
            <div key={`l2-${i}`} className="absolute w-[42px] h-[42px] rounded-full border-[3px] border-[#3a3834] bg-transparent" style={{ transform: `translateZ(${i * 0.5}px)` }} />
          ))}

          {/* Cara frontal del anillo (Metal) */}
          <div
            className="absolute w-[42px] h-[42px] rounded-full flex items-center justify-center shadow-[4px_8px_16px_rgba(0,0,0,0.9),_inset_0_2px_3px_rgba(255,255,255,0.3)] border border-[#a39b8f]/40"
            style={{
              transform: 'translateZ(16px)',
              transformStyle: 'preserve-3d',
              background: 'radial-gradient(circle, transparent 16px, #111111 16.5px, #8a857b 17.5px, #ffffff 19.5px, #47433c 21px)'
            }}
          >
            {/* Hueco interno del bisel */}
            <div className="w-[36px] h-[36px] rounded-full bg-transparent flex items-center justify-center shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)]" style={{ transformStyle: 'preserve-3d' }}>

              {/* Cilindro interno oscuro para dar profundidad física al barril del lente */}
              {[...Array(12)].map((_, i) => (
                <div key={`l2-in-${i}`} className="absolute w-[36px] h-[36px] rounded-full border-[1.5px] border-[#000]/60 bg-transparent" style={{ transform: `translateZ(-${i * 0.5}px)` }} />
              ))}

              {/* Lente de Cristal (Físicamente hundido dentro del barril) */}
              <div className="w-[34px] h-[34px] rounded-full bg-[#08080a] relative flex items-center justify-center shadow-[inset_0_0_12px_rgba(0,0,0,1)]" style={{ transform: 'translateZ(-6px)', transformStyle: 'preserve-3d' }}>

                {/* Elemento de Apertura Interior (Más hundido todavía) */}
                <div
                  className="w-[16px] h-[16px] rounded-full flex items-center justify-center shadow-[0_0_8px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(255,255,255,0.05)]"
                  style={{
                    transform: 'translateZ(-8px)',
                    transformStyle: 'preserve-3d',
                    background: 'radial-gradient(circle at center, #020203 30%, #1a1c23 80%, #050608 100%)',
                    border: '1px solid rgba(255,255,255,0.03)'
                  }}
                >
                  {/* Sensor con reflejo azul */}
                  <div className="w-[8px] h-[8px] rounded-full bg-gradient-to-tr from-[#020202] to-[#0b101d] flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,1)]" style={{ transform: 'translateZ(-2px)', transformStyle: 'preserve-3d' }}>
                    <div className="absolute w-[2.5px] h-[2.5px] bg-blue-400/80 rounded-full blur-[0.3px]" style={{ transform: 'translateZ(1px)', top: '2px', left: '2px' }} />
                  </div>
                </div>

                {/* Contenedor 2D para reflejos superficiales del cristal */}
                <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none" style={{ transform: 'translateZ(1px)' }}>
                  {/* Reflejo curvado del domo */}
                  <div className="absolute top-[10%] left-[10%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-white/20 via-transparent to-transparent mix-blend-screen" />

                  {/* Brillo principal - Softbox de estudio */}
                  <div className="absolute top-[22%] left-[22%] w-[12px] h-[6px] bg-gradient-to-b from-white/80 to-white/10 rounded-full blur-[0.4px] rotate-[-35deg]" />

                  {/* Destello secundario */}
                  <div className="absolute bottom-[28%] right-[28%] w-[4px] h-[2px] bg-white/30 rounded-full blur-[0.2px] rotate-[-35deg]" />

                  {/* Recubrimiento óptico sutil */}
                  <div className="absolute bottom-[8%] right-[8%] w-[75%] h-[75%] rounded-full bg-gradient-to-tl from-cyan-500/10 via-indigo-500/5 to-transparent blur-[1.5px] mix-blend-screen" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── LENTE 3 (Middle-Right): CÁMARA TELEFOTO ── */}
        <div className="w-[42px] h-[42px] rounded-full absolute top-[44px] right-[16px] flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
          {/* Cilindro exterior del bisel metálico (HUECO) */}
          {[...Array(32)].map((_, i) => (
            <div key={`l3-${i}`} className="absolute w-[42px] h-[42px] rounded-full border-[3px] border-[#3a3834] bg-transparent" style={{ transform: `translateZ(${i * 0.5}px)` }} />
          ))}

          {/* Cara frontal del anillo (Metal) */}
          <div
            className="absolute w-[42px] h-[42px] rounded-full flex items-center justify-center shadow-[4px_8px_16px_rgba(0,0,0,0.9),_inset_0_2px_3px_rgba(255,255,255,0.3)] border border-[#a39b8f]/40"
            style={{
              transform: 'translateZ(16px)',
              transformStyle: 'preserve-3d',
              background: 'radial-gradient(circle, transparent 16px, #111111 16.5px, #8a857b 17.5px, #ffffff 19.5px, #47433c 21px)'
            }}
          >
            {/* Hueco interno del bisel */}
            <div className="w-[36px] h-[36px] rounded-full bg-transparent flex items-center justify-center shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)]" style={{ transformStyle: 'preserve-3d' }}>

              {/* Cilindro interno oscuro para dar profundidad física al barril del lente */}
              {[...Array(12)].map((_, i) => (
                <div key={`l3-in-${i}`} className="absolute w-[36px] h-[36px] rounded-full border-[1.5px] border-[#000]/60 bg-transparent" style={{ transform: `translateZ(-${i * 0.5}px)` }} />
              ))}

              {/* Lente de Cristal (Físicamente hundido dentro del barril) */}
              <div className="w-[34px] h-[34px] rounded-full bg-[#08080a] relative flex items-center justify-center shadow-[inset_0_0_12px_rgba(0,0,0,1)]" style={{ transform: 'translateZ(-6px)', transformStyle: 'preserve-3d' }}>

                {/* Elemento de Apertura Interior (Más hundido todavía, más pequeño para telefoto) */}
                <div
                  className="w-[13px] h-[13px] rounded-full flex items-center justify-center shadow-[0_0_8px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(255,255,255,0.05)]"
                  style={{
                    transform: 'translateZ(-8px)',
                    transformStyle: 'preserve-3d',
                    background: 'radial-gradient(circle at center, #020203 30%, #1a1c23 80%, #050608 100%)',
                    border: '1px solid rgba(255,255,255,0.03)'
                  }}
                >
                  {/* Sensor telefoto con reflejo azul */}
                  <div className="w-[6px] h-[6px] rounded-full bg-gradient-to-tr from-[#020202] to-[#0b101d] flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,1)]" style={{ transform: 'translateZ(-2px)', transformStyle: 'preserve-3d' }}>
                    <div className="absolute w-[2px] h-[2px] bg-blue-400/80 rounded-full blur-[0.3px]" style={{ transform: 'translateZ(1px)', top: '1.5px', left: '1.5px' }} />
                  </div>
                </div>

                {/* Contenedor 2D para reflejos superficiales del cristal */}
                <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none" style={{ transform: 'translateZ(1px)' }}>
                  {/* Reflejo curvado del domo */}
                  <div className="absolute top-[10%] left-[10%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-white/20 via-transparent to-transparent mix-blend-screen" />

                  {/* Brillo principal - Softbox de estudio */}
                  <div className="absolute top-[22%] left-[22%] w-[12px] h-[6px] bg-gradient-to-b from-white/80 to-white/10 rounded-full blur-[0.4px] rotate-[-35deg]" />

                  {/* Destello secundario */}
                  <div className="absolute bottom-[28%] right-[28%] w-[4px] h-[2px] bg-white/30 rounded-full blur-[0.2px] rotate-[-35deg]" />

                  {/* Recubrimiento óptico sutil */}
                  <div className="absolute bottom-[8%] right-[8%] w-[75%] h-[75%] rounded-full bg-gradient-to-tl from-cyan-500/10 via-indigo-500/5 to-transparent blur-[1.5px] mix-blend-screen" />
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* ── FLASH BLANCO PREMIUM (Top-Right) ── */}
        <div
          className="w-[24px] h-[24px] rounded-full absolute top-[19px] right-[25px] bg-gradient-to-br from-[#1b1a18] via-[#2f2d2a] to-[#121110] border border-[#a39b8f]/20 shadow-[0_2px_4px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.15)] flex items-center justify-center"
          style={{ transform: 'translateZ(1px)' }}
        >
          {/* Anillo de metal plateado con padding intermedio */}
          <div className="w-[20px] h-[20px] rounded-full p-[2px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.85)] flex items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f0f0f0 0%, #ffffff 50%, #d4d4d4 100%)' }}>
            {/* Difusor concéntrico (Lente Fresnel) */}
            <div className="w-full h-full rounded-full relative overflow-hidden flex items-center justify-center shadow-[inset_0_0_3px_rgba(0,0,0,0.15)]" style={{ backgroundImage: `radial-gradient(circle, transparent 20%, rgba(0,0,0,0.03) 21%, transparent 35%, rgba(0,0,0,0.03) 36%, transparent 50%, rgba(0,0,0,0.03) 51%, transparent 65%, rgba(0,0,0,0.03) 66%, transparent 100%)`, backgroundColor: '#fdfdfd' }}>

              {/* Núcleo LED blanco perlado */}
              <div className="w-[8px] h-[8px] rounded-full bg-[#ffffff] shadow-[0_0_4px_rgba(255,255,255,1),inset_0_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center">
                <div className="w-[3px] h-[3px] rounded-full bg-[#f8f9fa] blur-[0.5px]" />
              </div>

              {/* Brillos especulares de cristal templado */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-white/70 pointer-events-none" />
              <div className="absolute top-[1.5px] left-[2.5px] w-[10px] h-[3px] bg-gradient-to-b from-white/90 to-transparent rounded-full blur-[0.3px] -rotate-45" />
            </div>
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
function PhoneFrame({ children, backLightRef }) {
  return (
    <div className="relative w-full h-full select-none" style={{ transformStyle: 'preserve-3d' }}>

      {/* ── CAPAS INTERMEDIAS DEL CHASIS (Apilamiento 3D ultra-denso para volumen sólido) ── */}
      {/* ── CAPAS INTERMEDIAS DEL CHASIS (Optimizado a 8 capas para alto rendimiento de scroll) ── */}
      {[...Array(8)].map((_, i) => {
        const z = -6 + (i * 1.5); // Espaciado de alto rendimiento cada 1.5px (mismo volumen, 3 veces menos carga)
        return (
          <div
            key={i}
            className="absolute inset-0 rounded-[2.5rem] border-[4px] border-transparent"
            style={{
              transform: `translateZ(${z}px)`,
              pointerEvents: 'none',
              backgroundClip: 'padding-box, border-box',
              backgroundOrigin: 'padding-box, border-box',
              backgroundImage: `linear-gradient(#151619, #151619), linear-gradient(to right, #201e1b 0%, #7e7668 12%, #e5dac9 24%, #b4aa98 36%, #4b4841 55%, #cfc4b2 75%, #2a2825 88%, #6a6254 100%)`,
            }}
          />
        );
      })}

      {/* ── CARA FRONTAL: PANTALLA IPHONE PRO (Con bordes de titanio cepillado) ────────────────────────── */}
      <div
        className="absolute inset-0 rounded-[2.5rem] p-[8px] border-[4px] border-transparent shadow-[0_35px_80px_-15px_rgba(0,0,0,0.95),inset_0_1px_2px_rgba(255,255,255,0.2)]"
        style={{
          backfaceVisibility: 'hidden',
          transform: 'translateZ(6px)',
          backgroundClip: 'padding-box, border-box',
          backgroundOrigin: 'padding-box, border-box',
          backgroundImage: `linear-gradient(#151619, #151619), linear-gradient(var(--light-angle, 180deg), #d2c8b7 0%, #eee3d0 15%, #9b9281 40%, #504c43 70%, #7e7565 85%, #282622 100%)`,
        }}
      >
        {/* Textura de Titanio Cepillado en Frontal */}
        <div
          className="absolute inset-0 pointer-events-none rounded-[2.5rem] z-30"
          style={{
            backgroundImage: titaniumTexture,
            mixBlendMode: 'overlay',
            opacity: 0.55
          }}
        />

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
          <div
            className="absolute inset-0 pointer-events-none z-40"
            style={{
              background: 'linear-gradient(var(--screen-light-angle, 45deg), rgba(255,255,255,var(--light-opacity, 0.15)) 0%, rgba(255,255,255,0) 65%, rgba(0,0,0,0.2) 100%)',
              mixBlendMode: 'overlay'
            }}
          />
        </div>
      </div>

      {/* ── CARA TRASERA: VIDRIO ESMERILADO SATINADO CON CÁMARAS PRO Y LOGO TRÉBOL ────────────────────────── */}
      <div
        className="absolute inset-0 rounded-[2.5rem] p-6 border-[3.5px] border-transparent flex flex-col justify-between shadow-[inset_0_0_25px_rgba(0,0,0,0.95),_inset_0_1px_2px_rgba(255,255,255,0.18),_0_25px_60px_-15px_rgba(0,0,0,0.95)]"
        style={{
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg) translateZ(6.1px)',
          transformStyle: 'preserve-3d',
          backgroundClip: 'padding-box, padding-box, border-box',
          backgroundOrigin: 'padding-box, padding-box, border-box',
          backgroundColor: '#0a0a0a', // Color base Negro Titanio Puro (Space Black)
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), ${titaniumTexture}, ${satinFrostedGlassTexture}`
        }}
      >
        {/* Borde de Refracción de Cristal Pulido (Glass Bezel Edge Glint) */}
        <div
          className="absolute inset-[1px] rounded-[2.5rem] pointer-events-none z-30 border border-white/20 shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.45),inset_0_-1px_1px_rgba(0,0,0,0.4)]"
          style={{
            transform: 'translateZ(1px)'
          }}
        />

        {/* Base de pendiente de cristal 3D (Simula la transición curvada hacia la tapa del módulo en vidrio moldeado) */}
        <div
          className="w-[144px] h-[144px] rounded-[2.8rem] absolute top-[13px] left-[13px] bg-gradient-to-br from-white/10 via-neutral-800/10 to-black/85 shadow-[inset_-1px_-1px_3px_rgba(255,255,255,0.2),_3px_6px_20px_rgba(0,0,0,0.65)] blur-[1px] pointer-events-none"
          style={{
            transform: 'translateZ(1px)', // ajustado levemente para z-index correcto
            border: '1.5px solid rgba(255,255,255,0.06)'
          }}
        />

        {/* Módulo de Triple Cámara Trasera Pro en 3D */}
        <TripleCameraModule />

        {/* Isotipo Trébol Digital Premium Polished Metallic Inlay (Integrado/grabado bajo el cristal) */}
        <div
          className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-10"
          style={{
            transform: 'translateZ(1.5px)',
            transformStyle: 'preserve-3d',
            filter: 'drop-shadow(0.5px 0.5px 0px rgba(255,255,255,0.25)) drop-shadow(-0.5px -0.5px 0px rgba(0,0,0,0.55))'
          }}
        >
          <TrebolLogoSVG className="w-20 h-20" />
        </div>

        {/* Contenedor 2D para reflejos y dynamic lighting que cubren la tapa completa y el logotipo */}
        <div className="absolute inset-0 rounded-[2.5rem] pointer-events-none overflow-hidden z-20" style={{ transform: 'translateZ(2.5px)' }}>
          {/* Iluminación Dinámica Realista en la Tapa (Satin Specular Light) */}
          <div
            ref={backLightRef}
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(115deg, rgba(255, 255, 255, 0) 15%, rgba(255, 255, 255, 0.2) 38%, rgba(255, 255, 255, 0) 44%, rgba(255, 255, 255, 0.38) 50%, rgba(255, 255, 255, 0) 56%, rgba(255, 255, 255, 0.15) 62%, rgba(255, 255, 255, 0) 85%)',
              mixBlendMode: 'screen',
              opacity: 0.95
            }}
          />
          {/* Reflejo de Vidrio Templado Brillante (Glossy Glass Glaze) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0.05) 45%, rgba(0, 0, 0, 0.1) 60%, rgba(0, 0, 0, 0.65) 100%)',
              mixBlendMode: 'overlay',
              opacity: 0.9
            }}
          />
        </div>

        {/* Grabado de la Marca en la parte inferior - Nítido, Blanco y sin desenfoques en 3D */}
        <div
          className="absolute bottom-8 left-0 right-0 flex flex-col items-center justify-center select-none text-[9.5px] font-bold tracking-[0.25em] font-sans text-center uppercase z-20"
          style={{
            transform: 'translateZ(1px)',
            color: '#ffffff',
            WebkitFontSmoothing: 'antialiased',
            backfaceVisibility: 'hidden',
            filter: 'drop-shadow(0px 1px 1px rgba(0,0,0,0.95))'
          }}
        >
          <span className="font-extrabold text-white">Trébol Digital</span>
          <span className="text-[6.8px] font-medium mt-2 tracking-[0.18em] text-white/90 normal-case">Tenemos la suerte de encontrarnos</span>
        </div>
      </div>

      {/* ── BOTONES METÁLICOS LATERALES DE TITANIO EN 3D ── */}

      {/* Botón de Encendido / Lock (Derecha) */}
      <div className="absolute right-[-5px] top-[140px] w-[5px] h-[65px] rounded-r-[3px]" style={{ transform: 'translateZ(2px)', transformStyle: 'preserve-3d' }}>
        <div className="absolute inset-0 bg-[#201e1c] rounded-r-[3px]" style={{ transform: 'translateZ(-1px)' }} />
        <div className="absolute inset-0 bg-[#423f39] rounded-r-[3px]" style={{ transform: 'translateZ(0px)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#eee3d0] via-[#8c8475] to-[#252320] rounded-r-[3px] border-r border-[#eedfc9]/60 shadow-md" style={{ transform: 'translateZ(2px)' }} />
      </div>

      {/* Botón de Acción (Izquierda) */}
      <div className="absolute left-[-5px] top-[85px] w-[5px] h-[16px] rounded-l-[3px]" style={{ transform: 'translateZ(2px)', transformStyle: 'preserve-3d' }}>
        <div className="absolute inset-0 bg-[#201e1c] rounded-l-[3px]" style={{ transform: 'translateZ(-1px)' }} />
        <div className="absolute inset-0 bg-[#423f39] rounded-l-[3px]" style={{ transform: 'translateZ(0px)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#eee3d0] via-[#8c8475] to-[#252320] rounded-l-[3px] border-l border-[#eedfc9]/60 shadow-md" style={{ transform: 'translateZ(2px)' }} />
      </div>

      {/* Botón Volume      {/* Botón Volumen - (Izquierda) */}
      <div className="absolute left-[-5px] top-[165px] w-[5px] h-[40px] rounded-l-[3px]" style={{ transform: 'translateZ(2px)', transformStyle: 'preserve-3d' }}>
        <div className="absolute inset-0 bg-[#201e1c] rounded-l-[3px]" style={{ transform: 'translateZ(-1px)' }} />
        <div className="absolute inset-0 bg-[#423f39] rounded-l-[3px]" style={{ transform: 'translateZ(0px)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#eee3d0] via-[#8c8475] to-[#252320] rounded-l-[3px] border-l border-[#eedfc9]/60 shadow-md" style={{ transform: 'translateZ(2px)' }} />
      </div>
    </div>
  );
}

// ── MOCKUP DE LAPTOP MACBOOK PRO 3D ELEGANTE ─────────────────────
function LaptopFrame({ children }) {
  return (
    <div className="relative w-full h-full select-none" style={{ transformStyle: 'preserve-3d' }}>

      {/* ── CAPAS INTERMEDIAS DEL CHASIS (Optimizado a 10 capas para alto rendimiento de scroll) ── */}
      {[...Array(10)].map((_, i) => {
        const z = -8 + (i * 1.6); // Espaciado de alto rendimiento de 1.6px
        return (
          <div
            key={i}
            className="absolute inset-0 rounded-xl border-[2.5px] border-transparent"
            style={{
              transform: `translateZ(${z}px)`,
              pointerEvents: 'none',
              backgroundClip: 'padding-box, border-box',
              backgroundOrigin: 'padding-box, border-box',
              backgroundImage: `linear-gradient(#BFBFBF, #BFBFBF), linear-gradient(to right, #7f7f7f 0%, #a6a6a6 25%, #BFBFBF 50%, #8c8c8c 75%, #595959 100%)`,
            }}
          />
        );
      })}

      {/* ── CARA FRONTAL: PANTALLA Y BARRA DE NAVEGACIÓN ────────────────────────── */}
      <div
        className="absolute inset-0 w-full h-full flex flex-col rounded-xl overflow-hidden border border-[#BFBFBF]/90 shadow-2xl bg-neutral-950"
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
            <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a0e] border border-neutral-700 flex items-center justify-center">
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

        {/* Base de Aluminio de Laptop con Ranura Frontal (Gris Claro) */}
        <div className="w-full h-3.5 bg-gradient-to-b from-[#BFBFBF] via-[#dcdcdc] to-[#a6a6a6] border-t border-[#dcdcdc] flex justify-center items-center shrink-0">
          <div className="w-16 h-1 bg-[#8c8c8c] rounded-full" />
        </div>
      </div>

      {/* ── CARA TRASERA: TAPA DE ALUMINIO Y LOGO TRÉBOL ILUMINADO ────────────────────────── */}
      <div
        className="absolute inset-0 w-full h-full rounded-xl bg-gradient-to-br from-[#BFBFBF] via-[#d9d9d9] to-[#7f7f7f] border border-[#BFBFBF]/95 shadow-2xl p-6 flex flex-col justify-between items-center overflow-hidden"
        style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg) translateZ(8px)', transformStyle: 'preserve-3d' }}
      >
        <div className="w-20 h-1 bg-[#8c8c8c]/50 rounded-full" />

        {/* Isotipo Trébol Digital Iluminado en la Tapa de Aluminio de la Mac */}
        <div className="my-auto" style={{ transform: 'translateZ(6px)' }}>
          <TrebolLogoSVG className="w-16 h-16" />
        </div>

        <div className="w-24 h-1.5 bg-[#8c8c8c]/60 rounded-full" />

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
  const backLightRef = useRef(null);

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

    const getCoords = (rect) => {
      if (!containerRef.current) return { x: 0, y: 0, width: 0, height: 0 };
      const cRect = containerRef.current.getBoundingClientRect();
      return {
        x: rect.left - cRect.left,
        y: rect.top - cRect.top,
        width: rect.width,
        height: rect.height,
      };
    };

    // Estado Inicial: Izquierda (Google) — Teléfono vertical (Valores dinámicos basados en funciones)
    gsap.set(floatingDeviceRef.current, {
      x: () => getCoords(posLeftRef.current.getBoundingClientRect()).x,
      y: () => getCoords(posLeftRef.current.getBoundingClientRect()).y,
      width: () => getCoords(posLeftRef.current.getBoundingClientRect()).width,
      height: () => getCoords(posLeftRef.current.getBoundingClientRect()).height,
      borderRadius: '2.5rem',
      transformOrigin: 'center center',
      transformStyle: 'preserve-3d',
      '--light-angle': '180deg',
      '--screen-light-angle': '45deg',
      '--back-light-angle': '135deg',
      '--light-opacity': 0.15,
      '--shine-offset': '-50%'
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
        invalidateOnRefresh: true, // Fuerza a GSAP a recalcular las funciones de posición al cambiar el tamaño de ventana
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
      x: () => getCoords(posRightRef.current.getBoundingClientRect()).x,
      y: () => getCoords(posRightRef.current.getBoundingClientRect()).y,
      rotateY: 360,
      duration: 1.5,
      force3D: true,
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
      x: () => getCoords(posLeftRef.current.getBoundingClientRect()).x,
      y: () => getCoords(posLeftRef.current.getBoundingClientRect()).y,
      rotateY: 720,
      duration: 1.5,
      force3D: true,
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
      x: () => getCoords(posFinalRef.current.getBoundingClientRect()).x,
      y: () => getCoords(posFinalRef.current.getBoundingClientRect()).y,
      width: () => getCoords(posFinalRef.current.getBoundingClientRect()).width,
      height: () => getCoords(posFinalRef.current.getBoundingClientRect()).height,
      rotateY: 1080,
      borderRadius: '0.75rem',
      duration: 1.8,
      force3D: true,
      ease: 'power3.inOut',
    }, 3.6)
      .to(blackScreenRef.current, { opacity: 1, duration: 0.30 }, 4.0)
      .to(blackScreenRef.current, { opacity: 0, duration: 0.30 }, 4.8)
      .to(infoRef2.current, { opacity: 0, y: -30, duration: 0.5, ease: 'power2.in' }, 3.8)
      .to(infoRef3.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 4.3);

    // ── MOUSE MOVE ONLY FOR BACK COVER LIGHTING (TAPA) ──
    const onMouseMove = (e) => {
      if (!floatingDeviceRef.current || !backLightRef.current) return;
      const rect = floatingDeviceRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const pctX = (x / rect.width) * 100;

      backLightRef.current.style.background = `
        linear-gradient(115deg, 
          rgba(255, 255, 255, 0) ${pctX - 35}%, 
          rgba(255, 255, 255, 0.2) ${pctX - 12}%, 
          rgba(255, 255, 255, 0) ${pctX - 6}%, 
          rgba(255, 255, 255, 0.38) ${pctX}%, 
          rgba(255, 255, 255, 0) ${pctX + 6}%, 
          rgba(255, 255, 255, 0.15) ${pctX + 12}%, 
          rgba(255, 255, 255, 0) ${pctX + 35}%
        )
      `;
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
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
              className={`absolute top-1/2 -translate-y-1/2 max-w-xl ${canal.align === 'right' ? 'right-8 md:right-16 text-right' : 'left-8 md:left-16 text-left'
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
          <div ref={posLeftRef} className="w-[220px] sm:w-[260px] md:w-[300px] h-[430px] sm:h-[500px] md:h-[580px] opacity-0 shrink-0" />
          <div ref={posRightRef} className="w-[220px] sm:w-[260px] md:w-[300px] h-[430px] sm:h-[500px] md:h-[580px] opacity-0 shrink-0" />
        </div>
      </div>

      {/* Derecha Final: Laptop Target */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="max-w-[1400px] w-full flex justify-end items-center h-full px-8 md:px-16">
          <div ref={posFinalRef} className="w-[90vw] max-w-[580px] h-[60vw] max-h-[380px] opacity-0 shrink-0" />
        </div>
      </div>

      {/* DISPOSITIVO FLOTANTE ANIMADO CON VOLUMEN Y PROFUNDIDAD REALISTA EN 3D */}
      <div className="hidden md:block absolute inset-0 z-30 pointer-events-none" style={{ perspective: '1200px' }}>
        <div
          ref={floatingDeviceRef}
          className="absolute top-0 left-0 overflow-visible"
          style={{
            transformStyle: 'preserve-3d',
            willChange: 'transform, width, height, border-radius'
          }}
        >
          {/* Pantalla Negra Overlay para la transición */}
          <div ref={blackScreenRef} className="absolute inset-0 bg-black z-50 pointer-events-none opacity-0 rounded-[2.5rem]" />

          {/* Contenido con Mockup 3D optimizado (Ambos marcos persisten en el DOM para evitar desmontaje) */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: activeIndex < 3 ? 1 : 0,
              display: activeIndex < 3 ? 'block' : 'none',
              pointerEvents: activeIndex < 3 ? 'auto' : 'none',
              transformStyle: 'preserve-3d'
            }}
          >
            <PhoneFrame backLightRef={backLightRef}>
              {activeIndex === 0 && <GoogleAdsContent />}
              {activeIndex === 1 && <MetaAdsContent />}
              {activeIndex === 2 && <TikTokAdsContent />}
            </PhoneFrame>
          </div>

          <div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: activeIndex >= 3 ? 1 : 0,
              display: activeIndex >= 3 ? 'block' : 'none',
              pointerEvents: activeIndex >= 3 ? 'auto' : 'none',
              transformStyle: 'preserve-3d'
            }}
          >
            <LaptopFrame>
              <DashboardFinalContent />
            </LaptopFrame>
          </div>
        </div>
      </div>

    </section>
  );
}
