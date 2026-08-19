'use client';

const clientLogos = [
  {
    name: 'NEXO INDUSTRIAL',
    category: 'Logística & Cadena de Suministro',
    svg: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 5L20 25H15L10 15L5 25H0L10 5Z" />
        <text x="28" y="21" fontFamily="sans-serif" fontWeight="900" fontSize="16" letterSpacing="1">NEXO</text>
      </svg>
    )
  },
  {
    name: 'INNOVA RETAIL',
    category: 'E-Commerce & Retail',
    svg: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 140 30" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="15" r="9" fill="none" stroke="currentColor" strokeWidth="4" />
        <circle cx="12" cy="15" r="3" />
        <text x="28" y="21" fontFamily="sans-serif" fontWeight="800" fontSize="15" letterSpacing="1">INNOVA</text>
      </svg>
    )
  },
  {
    name: 'FINOVA CAPITAL',
    category: 'Fintech & Banca',
    svg: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 135 30" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 22L12 8L19 22H14L12 17L10 22H5Z" />
        <text x="26" y="21" fontFamily="sans-serif" fontWeight="900" fontSize="15" letterSpacing="1">FINOVA</text>
      </svg>
    )
  },
  {
    name: 'ALTURA REAL ESTATE',
    category: 'Desarrollos Inmobiliarios',
    svg: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 145 30" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4L22 24H2L12 4Z" />
        <text x="28" y="21" fontFamily="sans-serif" fontWeight="800" fontSize="15" letterSpacing="1">ALTURA</text>
      </svg>
    )
  },
  {
    name: 'SALUDPLUS',
    category: 'Red de Salud & Clínicas',
    svg: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 140 30" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 5V25M0 15H20" stroke="currentColor" strokeWidth="4" />
        <text x="28" y="21" fontFamily="sans-serif" fontWeight="900" fontSize="15" letterSpacing="1">SALUD+</text>
      </svg>
    )
  },
  {
    name: 'VANTAGE TECH',
    category: 'Software & Cloud',
    svg: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 145 30" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 6L10 24L20 6H14L10 15L6 6H0Z" />
        <text x="26" y="21" fontFamily="sans-serif" fontWeight="800" fontSize="15" letterSpacing="1">VANTAGE</text>
      </svg>
    )
  },
  {
    name: 'TERRANOVA AGRO',
    category: 'Agroindustria B2B',
    svg: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 160 30" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 4C5 12 5 24 10 24C15 24 15 12 10 4Z" />
        <text x="24" y="21" fontFamily="sans-serif" fontWeight="800" fontSize="15" letterSpacing="1">TERRANOVA</text>
      </svg>
    )
  },
  {
    name: 'KRATOS GROUP',
    category: 'Manufactura Avanzada',
    svg: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 140 30" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="6" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="4" />
        <text x="26" y="21" fontFamily="sans-serif" fontWeight="900" fontSize="15" letterSpacing="1">KRATOS</text>
      </svg>
    )
  }
];

export default function ClientLogosBanner({ isLanding }) {
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section id="section-clientes" className={`relative z-10 w-full py-24 md:py-32 px-6 md:px-12 overflow-visible ${isLanding ? 'bg-transparent text-inherit' : 'bg-white text-carbon'}`}>

      <div className="max-w-[1400px] w-full mx-auto relative z-10 mb-16 md:mb-20">
        <h2 className={`text-4xl md:text-7xl font-black tracking-tighter leading-[0.92] text-center ${isLanding ? 'text-inherit' : 'text-carbon'}`}>
          Empresas que impulsan <br className="hidden md:block" />
          su crecimiento con <span className="text-trebol">Trébol Digital.</span>
        </h2>
      </div>

      {/* CINTA DESLIZANTE DE LOGOS MARQUEE */}
      <div className="relative w-full overflow-hidden py-6 z-10">

        {/* Máscaras de degradado a los lados */}
        {!isLanding && (
          <>
            <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          </>
        )}

        <div className="flex w-max animate-marquee space-x-16 md:space-x-24 items-center">
          {duplicatedLogos.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className={`flex items-center gap-3 transition-all duration-300 cursor-pointer shrink-0 ${
                isLanding ? 'opacity-80 hover:opacity-100 hover:text-trebol' : 'text-carbon/50 hover:text-trebol opacity-70 hover:opacity-100'
              }`}
            >
              <div className="scale-110 md:scale-125">
                {client.svg}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
