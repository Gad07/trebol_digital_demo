'use client';
import { ShoppingBag, ArrowRight, ShieldCheck, CreditCard } from 'lucide-react';

export function LuxuryMockup({ compact = false }) {
  return (
    <div className="w-full bg-[#FAF8F5] text-[#2C2523] font-serif select-none overflow-x-hidden min-h-full flex flex-col justify-between p-6 md:p-10 border border-[#E5DFD9]">
      {/* Header E-Commerce */}
      <header className="flex justify-between items-center border-b border-[#E5DFD9] pb-4 font-sans">
        <span className="font-serif tracking-[0.3em] font-bold text-2xl text-[#2C2523]">A U R A</span>
        <div className="hidden md:flex gap-6 text-xs uppercase tracking-widest text-neutral-600">
          <span>Colección 2026</span>
          <span>Boutique</span>
          <span>Catálogo</span>
        </div>
        <div className="flex items-center gap-3 text-xs font-sans">
          <span className="text-xs uppercase tracking-wider font-bold text-[#B58A63] flex items-center gap-1">
            <ShoppingBag size={14} /> Carrito (2)
          </span>
          <button className="bg-[#2C2523] text-white px-5 py-2 rounded-full text-xs font-sans tracking-wider uppercase hover:bg-[#B58A63] transition-colors cursor-pointer">
            Pagar con Apple Pay
          </button>
        </div>
      </header>

      {/* Hero E-Commerce */}
      <div className="my-auto space-y-6 py-6">
        <div className="flex justify-between items-end">
          <div>
            <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#B58A63] font-bold block mb-1">
              E-Commerce de Lujo & Alta Velocidad
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#2C2523] leading-tight font-normal">
              Experiencia de Compra <br />
              <span className="italic font-light text-[#B58A63]">Ultra-Fluida & Segura.</span>
            </h2>
          </div>
          <div className="hidden lg:flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#E5DFD9] text-xs font-sans font-bold">
            <ShieldCheck size={16} className="text-[#B58A63]" />
            <span>Pasarela Stripe & SSL AAA</span>
          </div>
        </div>

        {/* Dynamic Products Grid with High-Quality Unsplash Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 font-sans">
          <div className="bg-white p-3.5 rounded-2xl border border-[#E5DFD9] space-y-3 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-full h-36 rounded-xl overflow-hidden relative bg-[#F2EDE7]">
              <img 
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80" 
                alt="Reloj de Lujo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-2 left-2 bg-[#2C2523] text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                Edición Limitada
              </span>
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-xs text-[#2C2523]">Reloj Cronógrafo Chrono Silver</h3>
              <div className="flex justify-between items-center text-xs">
                <span className="font-black text-[#2C2523]">$3,450 USD</span>
                <span className="text-[10px] text-[#B58A63] font-bold uppercase tracking-wider">Envío Gratis</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-[#E5DFD9] space-y-3 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-full h-36 rounded-xl overflow-hidden relative bg-[#F2EDE7]">
              <img 
                src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80" 
                alt="Bolso de Moda"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-2 left-2 bg-[#B58A63] text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                Bestseller
              </span>
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-xs text-[#2C2523]">Bolso Minimalista Piel de Cobre</h3>
              <div className="flex justify-between items-center text-xs">
                <span className="font-black text-[#2C2523]">$1,950 USD</span>
                <span className="text-[10px] text-[#B58A63] font-bold uppercase tracking-wider">En Stock</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-[#E5DFD9] space-y-3 shadow-sm hover:shadow-md transition-shadow group hidden sm:block">
            <div className="w-full h-36 rounded-xl overflow-hidden relative bg-[#F2EDE7]">
              <img 
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80" 
                alt="Auriculares Premium"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-2 left-2 bg-[#2C2523] text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                Wireless
              </span>
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-xs text-[#2C2523]">Auriculares Hi-Fi Estudio Gold</h3>
              <div className="flex justify-between items-center text-xs">
                <span className="font-black text-[#2C2523]">$680 USD</span>
                <span className="text-[10px] text-[#B58A63] font-bold uppercase tracking-wider">En Stock</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer E-Commerce */}
      <footer className="flex justify-between items-center border-t border-[#E5DFD9] pt-4 text-xs font-sans text-neutral-500">
        <span>AURA PARIS E-COMMERCE ENGINE</span>
        <span className="font-bold text-[#2C2523] flex items-center gap-1">
          <CreditCard size={14} className="text-[#B58A63]" /> Checkout: 1-Click Apple Pay & Tarjetas
        </span>
      </footer>
    </div>
  );
}
