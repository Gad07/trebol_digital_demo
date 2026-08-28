'use client';

import { useState, useEffect, useMemo } from 'react';

const DEFAULT_SVGS = {
  'NEXO INDUSTRIAL': (
    <svg className="h-7 w-auto fill-current" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 5L20 25H15L10 15L5 25H0L10 5Z" />
      <text x="28" y="21" fontFamily="sans-serif" fontWeight="900" fontSize="16" letterSpacing="1">NEXO</text>
    </svg>
  ),
  'INNOVA RETAIL': (
    <svg className="h-7 w-auto fill-current" viewBox="0 0 140 30" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="15" r="9" fill="none" stroke="currentColor" strokeWidth="4" />
      <circle cx="12" cy="15" r="3" />
      <text x="28" y="21" fontFamily="sans-serif" fontWeight="800" fontSize="15" letterSpacing="1">INNOVA</text>
    </svg>
  ),
  'FINOVA CAPITAL': (
    <svg className="h-7 w-auto fill-current" viewBox="0 0 135 30" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 22L12 8L19 22H14L12 17L10 22H5Z" />
      <text x="26" y="21" fontFamily="sans-serif" fontWeight="900" fontSize="15" letterSpacing="1">FINOVA</text>
    </svg>
  ),
  'ALTURA REAL ESTATE': (
    <svg className="h-7 w-auto fill-current" viewBox="0 0 145 30" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4L22 24H2L12 4Z" />
      <text x="28" y="21" fontFamily="sans-serif" fontWeight="800" fontSize="15" letterSpacing="1">ALTURA</text>
    </svg>
  ),
  'SALUDPLUS': (
    <svg className="h-7 w-auto fill-current" viewBox="0 0 140 30" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 5V25M0 15H20" stroke="currentColor" strokeWidth="4" />
      <text x="28" y="21" fontFamily="sans-serif" fontWeight="900" fontSize="15" letterSpacing="1">SALUD+</text>
    </svg>
  ),
  'VANTAGE TECH': (
    <svg className="h-7 w-auto fill-current" viewBox="0 0 145 30" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 6L10 24L20 6H14L10 15L6 6H0Z" />
      <text x="26" y="21" fontFamily="sans-serif" fontWeight="800" fontSize="15" letterSpacing="1">VANTAGE</text>
    </svg>
  ),
  'TERRANOVA AGRO': (
    <svg className="h-7 w-auto fill-current" viewBox="0 0 160 30" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 4C5 12 5 24 10 24C15 24 15 12 10 4Z" />
      <text x="24" y="21" fontFamily="sans-serif" fontWeight="800" fontSize="15" letterSpacing="1">TERRANOVA</text>
    </svg>
  ),
  'KRATOS GROUP': (
    <svg className="h-7 w-auto fill-current" viewBox="0 0 140 30" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="6" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="4" />
      <text x="26" y="21" fontFamily="sans-serif" fontWeight="900" fontSize="15" letterSpacing="1">KRATOS</text>
    </svg>
  )
};

const DEFAULT_LOGOS = [
  { id: 'logo_suga', name: 'SUGA', category: 'Fabricación y distribución de suministros industriales', logoUrl: 'https://www.suga.mx/assets/img/logo/Logo_02_sf.png' },
  { id: 'logo_circulo', name: 'CÍRCULO DE EMPRESARIOS', category: 'Asociación Empresarial', logoUrl: 'https://circulodeempresarios.com.mx/assets/img/ciempre/logo-color-sf-01.png' }
];

export default function ClientLogosBanner({ isLanding, hideTitle = false }) {
  const [tituloPrefix, setTituloPrefix] = useState('Empresas que impulsan');
  const [tituloMiddle, setTituloMiddle] = useState('su crecimiento con');
  const [tituloHighlight, setTituloHighlight] = useState('Trébol Digital.');
  const [logosList, setLogosList] = useState(DEFAULT_LOGOS);

  useEffect(() => {
    fetch('/api/clientes')
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          if (data.tituloPrefix !== undefined) setTituloPrefix(data.tituloPrefix);
          if (data.tituloMiddle !== undefined) setTituloMiddle(data.tituloMiddle);
          if (data.tituloHighlight !== undefined) setTituloHighlight(data.tituloHighlight);
          if (Array.isArray(data.logos) && data.logos.length > 0) setLogosList(data.logos);
        }
      })
      .catch(() => {});
  }, []);

  // Adaptación dinámica de lista duplicada según la cantidad de logos (1, 2, 3, 4, 5...)
  const { duplicatedLogos, marqueeDuration } = useMemo(() => {
    const count = logosList.length;
    if (count === 0) return { duplicatedLogos: [], marqueeDuration: '30s' };

    const repeatTimes = Math.max(4, Math.ceil(24 / count));
    const list = [];
    for (let i = 0; i < repeatTimes; i++) {
      list.push(...logosList);
    }

    const durationSeconds = Math.max(20, Math.min(60, list.length * 2.2));

    return {
      duplicatedLogos: list,
      marqueeDuration: `${durationSeconds}s`
    };
  }, [logosList]);

  if (!logosList || logosList.length === 0) return null;

  return (
    <section id="section-clientes" className={`relative z-10 w-full py-24 md:py-32 px-6 md:px-12 overflow-visible ${isLanding ? 'bg-transparent text-inherit' : 'bg-white text-carbon'}`}>

      {!hideTitle && (
        <div className="max-w-[1400px] w-full mx-auto relative z-10 mb-16 md:mb-20">
          <h2 className={`text-4xl md:text-7xl font-black tracking-tighter leading-[0.92] text-center ${isLanding ? 'text-inherit' : 'text-carbon'}`}>
            {tituloPrefix} {tituloPrefix && <br className="hidden md:block" />}
            {tituloMiddle} <span className="text-trebol">{tituloHighlight}</span>
          </h2>
        </div>
      )}

      {/* CINTA DESLIZANTE DE LOGOS MARQUEE DINÁMICA */}
      <div className="relative w-full overflow-hidden py-6 z-10">

        {/* Máscaras de degradado a los lados */}
        {!isLanding && (
          <>
            <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          </>
        )}

        <div
          className="flex w-max animate-marquee space-x-16 md:space-x-24 items-center"
          style={{ animationDuration: marqueeDuration }}
        >
          {duplicatedLogos.map((client, idx) => {
            const svgKey = (client.name || '').trim().toUpperCase();
            const fallbackSvg = DEFAULT_SVGS[svgKey];
            const hasLogoImg = Boolean(client.logoUrl);

            return (
              <div
                key={`${client.name || client.id}-${idx}`}
                className={`flex items-center gap-3.5 transition-all duration-300 cursor-pointer shrink-0 ${
                  isLanding ? 'opacity-80 hover:opacity-100 hover:text-trebol' : 'text-carbon/50 hover:text-trebol opacity-70 hover:opacity-100'
                }`}
              >
                {/* 1. IMAGEN DE LOGO (SI EXISTE) */}
                {hasLogoImg && (
                  <img
                    src={client.logoUrl}
                    alt={client.name || 'Logo cliente'}
                    className="h-8 md:h-10 w-auto object-contain max-w-[160px] grayscale hover:grayscale-0 transition-all"
                  />
                )}

                {/* 2. SVG FALLBACK (SI NO HAY LOGOURL E IMAGEN) */}
                {!hasLogoImg && fallbackSvg && (
                  <div className="scale-110 md:scale-125">
                    {fallbackSvg}
                  </div>
                )}

                {/* 3. NOMBRE DE LA EMPRESA (SI EXISTE JUNTO A LA IMAGEN) */}
                {hasLogoImg && client.name && (
                  <span className="font-extrabold tracking-tight text-sm md:text-lg uppercase">
                    {client.name}
                  </span>
                )}

                {/* 4. NOMBRE DE LA EMPRESA SOLO (SI NO HAY NI LOGOURL NI SVG) */}
                {!hasLogoImg && !fallbackSvg && client.name && (
                  <span className="font-extrabold tracking-wider text-base md:text-xl uppercase border-b-2 border-trebol/40 pb-0.5">
                    {client.name}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
