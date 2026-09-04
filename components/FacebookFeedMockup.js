'use client';

import React from 'react';
import { 
  Search, 
  MessageCircle, 
  Share2, 
  ThumbsUp, 
  MoreHorizontal, 
  Check, 
  Play, 
  Globe, 
  Send,
  Sparkles,
  ShieldCheck,
  Award,
  TrendingUp,
  Bookmark
} from 'lucide-react';

export default function FacebookFeedMockup() {
  return (
    <div className="w-full h-full bg-[#f0f2f5] text-carbon select-none overflow-y-auto scrollbar-none font-sans text-left">
      
      {/* ── TOP NAV BAR (FACEBOOK MOBILE APP HEADER) ── */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md px-3.5 py-2.5 flex items-center justify-between border-b border-neutral-200/80 shadow-xs">
        <div className="flex items-center gap-2">
          <span className="text-[#1877F2] font-black text-xl tracking-tighter">facebook</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-7 h-7 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-700 transition-colors">
            <Search size={14} />
          </div>
          <div className="w-7 h-7 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-700 transition-colors relative">
            <MessageCircle size={14} />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#E41E3F] rounded-full border border-white" />
          </div>
        </div>
      </div>

      {/* ── COVER BANNER & PROFILE INFO ── */}
      <div className="bg-white border-b border-neutral-200">
        {/* Cover Photo */}
        <div className="relative h-28 w-full bg-gradient-to-r from-[#0c1f15] via-[#112d1f] to-[#0c1f15] overflow-hidden flex items-center justify-between px-4">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#25D366_1px,transparent_1px)] [background-size:12px_12px]" />
          <div className="relative z-10 space-y-0.5">
            <div className="inline-flex items-center gap-1 bg-[#25D366]/20 border border-[#25D366]/40 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold text-[#25D366]">
              <Sparkles size={8} /> ESTRATEGIA COMERCIAL
            </div>
            <p className="text-white font-black text-sm tracking-tight leading-tight">
              TRÉBOL DIGITAL
            </p>
            <p className="text-white/70 text-[9px] font-light">
              Tenemos la suerte de encontrarnos.
            </p>
          </div>
          <div className="relative z-10 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center p-2">
            <img src="/images/TREBOL_BLANCO.png" alt="Trébol" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Profile Avatar & Details */}
        <div className="px-3.5 pb-3 relative">
          <div className="flex justify-between items-end -mt-6 mb-2">
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-white p-1 shadow-md border-2 border-white ring-2 ring-[#25D366]/30">
                <img 
                  src="/images/TREBOL_01.png" 
                  alt="Trébol Digital" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#1877F2] rounded-full flex items-center justify-center text-white text-[9px] font-bold border-2 border-white">
                ✓
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <div className="bg-[#25D366] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-sm">
                <span>Seguir</span>
              </div>
              <div className="bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-[11px] font-semibold px-2.5 py-1.5 rounded-lg border border-neutral-200">
                <span>Mensaje</span>
              </div>
            </div>
          </div>

          {/* Titles & Stats */}
          <div className="space-y-1">
            <div className="flex items-center gap-1.5">
              <h1 className="font-extrabold text-sm text-neutral-900 leading-tight">Trébol Digital</h1>
              <span className="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-1.5 py-0.2 rounded">Oficial</span>
            </div>
            <p className="text-[11px] text-neutral-600 font-medium">
              Agencia de Estrategia Digital, Contenido & Tecnología
            </p>
            <div className="flex items-center gap-2 text-[10px] text-neutral-500 font-medium pt-0.5">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                9 años de trayectoria
              </span>
              <span>•</span>
              <span>4.9 ★★★★★ (120+ clientes)</span>
            </div>
          </div>
        </div>

        {/* Profile Tabs */}
        <div className="flex items-center gap-4 px-3.5 border-t border-neutral-100 text-[11px] font-bold text-neutral-600">
          <span className="py-2 text-[#25D366] border-b-2 border-[#25D366]">Publicaciones</span>
          <span className="py-2 text-neutral-500">Reels</span>
          <span className="py-2 text-neutral-500">Servicios</span>
          <span className="py-2 text-neutral-500">Comunidad</span>
        </div>
      </div>

      {/* ── FEED POST 1: GESTIÓN DE CONTENIDO & ESTRATEGIA (PINNED) ── */}
      <div className="mt-2 bg-white border-y border-neutral-200 shadow-2xs">
        {/* Post Header */}
        <div className="p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white p-0.5 border border-neutral-200">
              <img src="/images/TREBOL_01.png" alt="Trébol" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-xs text-neutral-900">Trébol Digital</span>
                <span className="text-[#1877F2] text-[10px]">✓</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-neutral-500">
                <span>Fijado · 2 h</span>
                <span>•</span>
                <Globe size={10} />
              </div>
            </div>
          </div>
          <MoreHorizontal size={16} className="text-neutral-400" />
        </div>

        {/* Post Copy */}
        <div className="px-3 pb-2 text-xs text-neutral-800 leading-snug space-y-1">
          <p>
            🚀 <strong className="text-neutral-900 font-semibold">¿Tu contenido atrae likes o clientes reales?</strong>
          </p>
          <p className="text-neutral-600 text-[11px] font-normal">
            No publicamos por publicar. Diseñamos la operación completa: parrillas de contenido estratégico, producción audiovisual y segmentación comercial.
          </p>
        </div>

        {/* Post Graphic / Media Card (Crisp SVG / CSS High Resolution Card) */}
        <div className="relative w-full aspect-16/10 bg-gradient-to-br from-[#0c1f15] via-[#142e20] to-[#08140e] overflow-hidden flex flex-col justify-between p-4 text-white">
          {/* Subtle glow & mesh background */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#25D366]/25 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl" />
          
          <div className="relative z-10 flex justify-between items-start">
            <span className="bg-white/10 backdrop-blur-md border border-white/20 text-[#25D366] text-[9px] font-mono font-bold px-2 py-0.5 rounded-full">
              OPERACIÓN DE REDES
            </span>
            <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center p-1 border border-white/15">
              <img src="/images/TREBOL_BLANCO.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="relative z-10 space-y-1 my-auto py-2">
            <p className="text-[10px] text-[#25D366] font-mono font-semibold uppercase tracking-wider">
              Estrategia Comercial
            </p>
            <h3 className="text-base font-black text-white leading-tight tracking-tight">
              Gestión de Redes con Enfoque en Conversión
            </h3>
            <p className="text-[10px] text-white/80 font-light line-clamp-2">
              Transforma prospectos en clientes con contenidos de alto impacto y pauta segmentada.
            </p>
          </div>

          <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/10 text-[9px] text-white/70">
            <div className="flex items-center gap-1 font-mono text-[#25D366]">
              <TrendingUp size={11} /> +140% Interacción Comercial
            </div>
            <span className="font-semibold text-white">treboldigital.com.mx</span>
          </div>
        </div>

        {/* Reactions Counter */}
        <div className="px-3 py-1.5 flex items-center justify-between text-[10px] text-neutral-500 border-b border-neutral-100">
          <div className="flex items-center gap-1">
            <div className="flex -space-x-1">
              <span className="w-4 h-4 rounded-full bg-[#1877F2] text-white flex items-center justify-center text-[8px]">👍</span>
              <span className="w-4 h-4 rounded-full bg-[#E41E3F] text-white flex items-center justify-center text-[8px]">❤️</span>
              <span className="w-4 h-4 rounded-full bg-[#25D366] text-white flex items-center justify-center text-[8px]">🚀</span>
            </div>
            <span className="font-semibold text-neutral-700 ml-1">284</span>
          </div>
          <div className="flex gap-2">
            <span>42 comentarios</span>
            <span>•</span>
            <span>19 compartidos</span>
          </div>
        </div>

        {/* Action Buttons Bar */}
        <div className="px-2 py-1 flex items-center justify-around text-neutral-600 text-[11px] font-semibold">
          <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-md hover:bg-neutral-50 cursor-pointer">
            <ThumbsUp size={13} className="text-[#1877F2]" />
            <span className="text-[#1877F2] font-bold">Me gusta</span>
          </div>
          <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-md hover:bg-neutral-50 cursor-pointer">
            <MessageCircle size={13} />
            <span>Comentar</span>
          </div>
          <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-md hover:bg-neutral-50 cursor-pointer">
            <Share2 size={13} />
            <span>Compartir</span>
          </div>
        </div>
      </div>

      {/* ── FEED POST 2: REEL / VIDEO SPOTLIGHT ── */}
      <div className="mt-2 bg-white border-y border-neutral-200 shadow-2xs mb-4">
        <div className="p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white p-0.5 border border-neutral-200">
              <img src="/images/TREBOL_01.png" alt="Trébol" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-xs text-neutral-900">Trébol Digital</span>
                <span className="text-[#1877F2] text-[10px]">✓</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-neutral-500">
                <span>Ayer a las 18:30</span>
                <span>•</span>
                <Globe size={10} />
              </div>
            </div>
          </div>
          <MoreHorizontal size={16} className="text-neutral-400" />
        </div>

        <div className="px-3 pb-2 text-[11px] text-neutral-700">
          🎬 <strong>Video vertical & Reels de alto engagement:</strong> Creamos narrativa visual dinámica para captar atención en segundos.
        </div>

        {/* Video Card Container */}
        <div className="relative w-full aspect-16/9 bg-neutral-900 overflow-hidden flex items-center justify-center">
          <img 
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop" 
            alt="Producción Audiovisual" 
            className="w-full h-full object-cover opacity-60" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
          
          <div className="absolute w-11 h-11 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg transform transition hover:scale-110">
            <Play size={18} className="fill-white ml-0.5" />
          </div>

          <div className="absolute bottom-2 left-3 right-3 flex justify-between items-end text-white text-[10px]">
            <div>
              <p className="font-bold text-xs">Producción de Reels & Video</p>
              <p className="text-white/70 text-[9px]">1.4K reproducciones</p>
            </div>
            <span className="bg-black/60 backdrop-blur-xs px-1.5 py-0.5 rounded text-[9px] font-mono">0:45</span>
          </div>
        </div>

        {/* Quick Reaction */}
        <div className="px-3 py-2 flex items-center justify-between text-[10px] text-neutral-500">
          <span className="font-semibold text-neutral-700">❤️ 🔥 196 me gusta</span>
          <span>18 comentarios</span>
        </div>
      </div>

    </div>
  );
}
