'use client';
import { ShoppingBag, ArrowRight, Heart, Star, ChevronRight } from 'lucide-react';

export function LuxuryMockup({ compact = false }) {
  return (
    <div className="w-full h-full min-h-[520px] bg-[#F5F3EF] text-[#111] font-sans select-none overflow-hidden flex flex-col">

      {/* ── TOP BAR ── */}
      <div className="bg-[#111] text-white text-[9px] font-mono font-bold uppercase tracking-widest text-center py-1.5 shrink-0">
        ✦ Envío gratis en pedidos +$999 MXN · Entrega en 48h
      </div>

      {/* ── HEADER ── */}
      <header className="flex justify-between items-center px-6 md:px-8 py-3.5 bg-white border-b border-neutral-200 shrink-0">
        <button className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 hover:text-black transition-colors cursor-pointer">Menu</button>
        <span className="font-serif tracking-[0.4em] font-bold text-lg text-[#111]">AURA</span>
        <div className="flex items-center gap-3">
          <Heart size={15} className="text-neutral-500 hover:text-black cursor-pointer transition-colors" />
          <div className="relative cursor-pointer">
            <ShoppingBag size={15} className="text-[#111]" />
            <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-[#111] text-white text-[7px] font-black rounded-full flex items-center justify-center">2</span>
          </div>
        </div>
      </header>

      {/* ── MAIN SPLIT HERO ── */}
      <div className="flex flex-1 min-h-0 overflow-hidden">

        {/* LEFT — Product Image */}
        <div className="w-[52%] relative overflow-hidden shrink-0 bg-[#E8E4DC]">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=85"
            alt="Editorial Fashion"
            className="w-full h-full object-cover object-center"
          />
          {/* Floating badge */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
            Nueva Colección ✦
          </div>
          {/* Zoom hint */}
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-[8px] font-mono px-3 py-1 rounded-full">
            1 / 4 →
          </div>
        </div>

        {/* RIGHT — Product Detail */}
        <div className="flex-1 flex flex-col justify-between px-6 py-5 bg-[#F5F3EF]">

          {/* Brand + breadcrumb */}
          <div>
            <p className="text-[8px] font-mono uppercase tracking-[0.2em] text-neutral-400 mb-3 flex items-center gap-1">
              Mujer <ChevronRight size={8} /> Vestidos <ChevronRight size={8} /> <span className="text-[#111] font-bold">Primavera</span>
            </p>

            {/* Product Name */}
            <h2 className="font-serif text-2xl md:text-3xl font-normal text-[#111] leading-tight mb-1">
              Vestido Soie<br />
              <span className="italic text-neutral-500">Éditorial</span>
            </h2>

            {/* Stars */}
            <div className="flex items-center gap-1 mt-1.5 mb-3">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={9} className="fill-[#111] text-[#111]" />
              ))}
              <span className="text-[9px] text-neutral-400 ml-1 font-mono">4.9 (127 reseñas)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-2xl font-black text-[#111]">$3,200 MXN</span>
              <span className="text-sm line-through text-neutral-400 font-light">$4,100 MXN</span>
              <span className="text-[9px] bg-red-100 text-red-600 font-black px-2 py-0.5 rounded-full uppercase">-22%</span>
            </div>

            {/* Color selector */}
            <div className="mb-3">
              <p className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 mb-1.5">Color: <span className="text-[#111]">Crema</span></p>
              <div className="flex gap-2">
                {['#F0EBE1', '#2C2523', '#C4A882', '#8B7355'].map((c, i) => (
                  <div key={i} className={`w-5 h-5 rounded-full border-2 cursor-pointer ${i === 0 ? 'border-[#111]' : 'border-transparent'}`} style={{ background: c }} />
                ))}
              </div>
            </div>

            {/* Size selector */}
            <div className="mb-4">
              <p className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 mb-1.5">Talla</p>
              <div className="flex gap-1.5">
                {['XS', 'S', 'M', 'L', 'XL'].map((s, i) => (
                  <button key={s} className={`text-[9px] font-bold px-2.5 py-1 rounded-md border cursor-pointer transition-all ${i === 1 ? 'bg-[#111] text-white border-[#111]' : 'border-neutral-300 text-neutral-500 hover:border-[#111]'}`}>{s}</button>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-2">
            <button className="w-full bg-[#111] text-white text-[10px] font-black uppercase tracking-widest py-3.5 rounded-xl hover:bg-neutral-800 transition-colors cursor-pointer flex items-center justify-center gap-2">
              <ShoppingBag size={12} />
              Agregar al Carrito
            </button>
            <button className="w-full bg-transparent text-[#111] text-[10px] font-bold uppercase tracking-widest py-3 rounded-xl border border-neutral-300 hover:border-[#111] transition-colors cursor-pointer">
              Comprar Ahora · Apple Pay
            </button>
          </div>
        </div>
      </div>

      {/* ── MINI PRODUCT STRIP ── */}
      <div className="shrink-0 bg-white border-t border-neutral-200 px-6 py-3 flex items-center gap-3 overflow-hidden">
        <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-neutral-400 shrink-0">También te puede gustar</span>
        <div className="flex gap-2 flex-1 overflow-hidden">
          {[
            { img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=120&q=70', name: 'Reloj Silver', price: '$3,450' },
            { img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=120&q=70', name: 'Bolso Cobre', price: '$1,950' },
            { img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=120&q=70', name: 'Hi-Fi Gold', price: '$680' },
          ].map((p, i) => (
            <div key={i} className="flex items-center gap-2 bg-[#F5F3EF] rounded-xl px-2.5 py-1.5 cursor-pointer hover:bg-neutral-100 transition-colors shrink-0">
              <img src={p.img} alt={p.name} className="w-7 h-7 rounded-lg object-cover" />
              <div>
                <p className="text-[8px] font-bold text-[#111] leading-none">{p.name}</p>
                <p className="text-[8px] text-neutral-500 font-mono">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
        <ArrowRight size={14} className="text-neutral-400 shrink-0 cursor-pointer hover:text-black" />
      </div>

    </div>
  );
}
