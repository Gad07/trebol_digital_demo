'use client';
import { Sparkle, Zap, Activity, ShieldCheck, ArrowRight } from 'lucide-react';

export function AuroraMockup({ compact = false }) {
  return (
    <div className="w-full bg-[#070414] text-purple-100 font-sans select-none overflow-x-hidden min-h-full flex flex-col justify-between relative p-6 md:p-10 border border-purple-500/30">
      {/* Background Aurora Blobs */}
      <div className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-gradient-to-br from-fuchsia-600/30 via-purple-600/20 to-indigo-500/15 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[26rem] h-[26rem] bg-gradient-to-tr from-cyan-500/25 via-blue-600/20 to-fuchsia-600/25 rounded-full blur-[110px] pointer-events-none" />

      {/* Top Bar */}
      <div className="bg-purple-950/60 backdrop-blur-xl border-b border-purple-500/20 py-2 px-4 text-xs font-mono flex items-center justify-between text-purple-300 relative z-10 rounded-xl mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-ping" />
          <span className="font-bold text-fuchsia-300">AURORA ENGINE v16.2</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[11px]">
          <span className="text-cyan-300">LATENCY: 12ms</span>
          <span className="text-fuchsia-300">QUANTUM ENCRYPTION: ACTIVE</span>
        </div>
      </div>

      {/* Futuristic Navbar */}
      <header className="flex items-center justify-between border-b border-purple-500/20 pb-4 relative z-10 bg-[#070414]/70 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 p-0.5 shadow-[0_0_20px_rgba(217,70,239,0.5)]">
            <div className="w-full h-full bg-[#070414] rounded-[10px] flex items-center justify-center text-fuchsia-300">
              <Sparkle size={18} />
            </div>
          </div>
          <span className="font-black text-xl tracking-tight text-white">
            COSMIC<span className="text-fuchsia-400">//</span>AURORA
          </span>
        </div>

        <button className="bg-gradient-to-r from-fuchsia-500 via-purple-600 to-cyan-400 text-white font-bold px-5 py-2 rounded-full text-xs hover:scale-105 transition-all shadow-[0_0_25px_rgba(217,70,239,0.5)] flex items-center gap-2">
          <span>INICIAR COSMOS</span>
          <ArrowRight size={14} />
        </button>
      </header>

      {/* Hero Section */}
      <div className="my-auto space-y-6 py-6 relative z-10">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 text-cyan-300 px-4 py-1.5 rounded-full font-mono text-xs font-bold border border-cyan-400/30 shadow-[0_0_20px_rgba(56,189,248,0.2)]">
          <Zap size={14} className="text-fuchsia-400" />
          <span>SPATIAL NEON ARCHITECTURE — POWERED BY NEXT.JS 16</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-[0.95] tracking-tight">
          Cosmic Aurora <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-300 to-cyan-300">
            Holographic Experience.
          </span>
        </h2>

        <p className="text-xs md:text-sm text-purple-200/80 font-light max-w-xl leading-relaxed">
          Plataforma web de estética espacial diseñada para proyectos Web3, Inteligencia Artificial y SaaS de próxima generación.
        </p>

        {/* Holographic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="bg-purple-950/40 backdrop-blur-2xl p-4 rounded-2xl border border-purple-500/30 shadow-[0_0_25px_rgba(168,85,247,0.15)] space-y-1">
            <span className="text-[10px] font-mono text-fuchsia-400 font-bold block">SPEED CORE</span>
            <h3 className="text-xl md:text-2xl font-black text-white font-mono">0.8s</h3>
            <p className="text-[11px] text-purple-200/70 font-light">Respuesta ultrabaja Vercel Edge.</p>
          </div>

          <div className="bg-purple-950/40 backdrop-blur-2xl p-4 rounded-2xl border border-purple-500/30 shadow-[0_0_25px_rgba(168,85,247,0.15)] space-y-1">
            <span className="text-[10px] font-mono text-cyan-300 font-bold block">FRAME RATE</span>
            <h3 className="text-xl md:text-2xl font-black text-cyan-300 font-mono">120 FPS</h3>
            <p className="text-[11px] text-purple-200/70 font-light">Animaciones nativas fluidas GPU.</p>
          </div>

          <div className="bg-purple-950/40 backdrop-blur-2xl p-4 rounded-2xl border border-purple-500/30 shadow-[0_0_25px_rgba(168,85,247,0.15)] space-y-1">
            <span className="text-[10px] font-mono text-fuchsia-400 font-bold block">LIGHTHOUSE</span>
            <h3 className="text-xl md:text-2xl font-black text-white font-mono">99 / 100</h3>
            <p className="text-[11px] text-purple-200/70 font-light">SEO técnico impecable.</p>
          </div>
        </div>
      </div>

      {/* Cyber Footer */}
      <footer className="border-t border-purple-500/20 pt-4 text-xs font-mono text-purple-300/80 flex justify-between items-center relative z-10">
        <span>COSMIC AURORA NEBULA © 2026</span>
        <span className="text-fuchsia-400 font-bold">NEÓN HOLOGRÁFICO MESH</span>
      </footer>
    </div>
  );
}
