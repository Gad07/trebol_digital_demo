'use client';

export function BrutalistMockup({ compact = false }) {
  return (
    <div
      className="w-full h-full min-h-[520px] text-black font-sans select-none relative overflow-hidden"
      style={{ background: '#FFFFFF' }}
    >
      {/* ── TOP NAV ── */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-start justify-between px-5 pt-4 text-[9px] font-mono font-bold uppercase tracking-wider">
        {/* Brand + time */}
        <div className="leading-tight">
          <div className="font-black text-[10px]">CAPTURE PHOTO STUDIO</div>
          <div className="text-black/60 font-normal">11:25 AM, ET — NYC / CDMX</div>
        </div>

        {/* Sound indicator */}
        <div className="flex items-center gap-1.5 mt-0.5 text-black/60">
          <span className="text-[14px] leading-none">——</span>
          <span>PORTFOLIO: ON</span>
        </div>

        {/* Center nav */}
        <div className="flex items-start gap-10 text-black/60">
          <div className="leading-tight text-center">
            <div className="font-black text-black hover:opacity-60 cursor-pointer">GALERÍA</div>
            <div className="hover:opacity-60 cursor-pointer">EDITORIALES</div>
          </div>
          <div className="leading-tight text-center">
            <div className="font-black text-black hover:opacity-60 cursor-pointer">SESIONES</div>
            <div className="hover:opacity-60 cursor-pointer">PRÓXIMAMENTE</div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-1 font-black text-[10px] cursor-pointer hover:opacity-60 mt-0.5">
          <span>AGENDAR SESIÓN</span>
          <span>↗</span>
        </div>
      </div>

      {/* ── GIANT TITLE TEXT — full bleed ── */}
      <div className="absolute inset-0 flex items-start justify-center" style={{ paddingTop: '11%' }}>
        <h1
          className="font-black uppercase text-black leading-none text-center w-full"
          style={{
            fontSize: 'clamp(5rem, 18vw, 14rem)',
            letterSpacing: '-0.03em',
            lineHeight: 0.88,
          }}
        >
          CAPTURE
        </h1>
      </div>

      {/* ── FOREGROUND IMAGE — centered, overlapping the text ── */}
      <div className="absolute inset-0 flex items-end justify-center z-20" style={{ transform: 'translateY(8%)' }}>
        <img
          src="https://i.ibb.co/twxtSM4G/269182220-11246726.png"
          alt="Studio foreground element"
          className="object-contain object-bottom pointer-events-none"
          style={{
            height: '92%',
            maxWidth: '60%',
          }}
        />
      </div>

      {/* ── BOTTOM LEFT — studio info ── */}
      <div className="absolute bottom-4 left-5 z-30 text-[8px] font-mono font-bold uppercase leading-tight text-black">
        <div>CAPTURE PHOTO STUDIO,</div>
        <div className="text-black/60">FOTOGRAFÍA DE MODA & RETRATO</div>
        <div className="text-black/60">BASADO EN CDMX & NYC</div>
      </div>

      {/* ── BOTTOM RIGHT — scroll CTA ── */}
      <div className="absolute bottom-4 right-5 z-30 text-[8px] font-mono font-bold uppercase text-black/60 tracking-widest cursor-pointer hover:text-black">
        VER PORTAFOLIO ↘
      </div>
    </div>
  );
}
