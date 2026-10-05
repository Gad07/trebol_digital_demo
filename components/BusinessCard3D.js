'use client';

import Link from 'next/link';
import { 
  Phone, Mail, Globe, Send, ArrowRight, Briefcase, ArrowUpRight
} from 'lucide-react';

function LinkedInIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 1 0 1.6 1.6 1.6 1.6 0 0 0-1.6-1.6z"/>
    </svg>
  );
}

export default function BusinessCard3D({ 
  firstName = "SANDRA",
  lastName = "CUEVAS GUEVARA",
  title = "Marketing Digital · Estructura empresarial · IA aplicada a negocios",
  company = "TRÉBOL DIGITAL",
  bio = "Convierto objetivos de negocio en estrategias de marketing que generan oportunidades, crecimiento y resultados.",
  experienciaBadge = "+9 años de experiencia en marketing digital",
  pilaresTags = ["Branding", "Estrategia", "Performance", "Contenidos", "Leads", "Proyectos Digitales"],
  phone = "+52 55 5555 1234",
  email = "sandra@treboldigital.com",
  website = "treboldigital.com.mx",
  websiteUrl = "https://treboldigital.com.mx",
  whatsappUrl = "https://wa.me/525555551234",
  linkedinUrl = "https://linkedin.com",
  portfolioUrl = "/casos-de-exito",
  showPortfolio = true,
  photoUrl = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=95"
}) {
  const tagsList = Array.isArray(pilaresTags) 
    ? pilaresTags 
    : (typeof pilaresTags === 'string' ? pilaresTags.split(/[·,]/).map(s => s.trim()).filter(Boolean) : []);

  const lastNameWords = (lastName || '').trim().split(/\s+/).filter(Boolean);
  const isMultipleLastName = lastNameWords.length > 1;

  const trimmedPortfolio = (portfolioUrl || '').trim();
  const isInternalPortfolio = trimmedPortfolio.startsWith('/') || trimmedPortfolio.startsWith('#');
  const formattedPortfolioUrl = isInternalPortfolio
    ? (trimmedPortfolio || '/casos-de-exito')
    : (trimmedPortfolio.startsWith('http://') || trimmedPortfolio.startsWith('https://')
        ? trimmedPortfolio
        : (trimmedPortfolio ? `https://${trimmedPortfolio}` : '/casos-de-exito'));

  return (
    <div className="w-full font-sans">
      
      {/* ─────────────────────────────────────────────────────────────
          DISTRIBUCIÓN 2 COLUMNAS DIRECTA SOBRE EL FONDO
         ───────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
        
        {/* ─────────────────────────────────────────────────────────────
            COLUMNA 1 (IZQUIERDA): FOTO RETRATO MÁS ALTA SIN SOMBRA
           ───────────────────────────────────────────────────────────── */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-full max-w-[420px] md:max-w-none h-[540px] sm:h-[640px] lg:h-[680px] rounded-[2.5rem] overflow-hidden group border border-neutral-200/80 bg-white shadow-sm">
            <img 
              src={photoUrl} 
              alt={`${firstName} ${lastName}`} 
              className="w-full h-full object-cover object-top filter contrast-[1.02] transition-transform duration-700 group-hover:scale-105" 
            />
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            COLUMNA 2 (DERECHA): INFORMACIÓN Y DATOS DE CONTACTO
           ───────────────────────────────────────────────────────────── */}
        <div className="space-y-6 text-center md:text-left">
          
          {/* NOMBRE: SI TIENE 2 O MÁS APELLIDOS VAN ABAJO Y MÁS PEQUEÑOS; SI TIENE 1 SOLO SE MANTIENE EN LA MISMA LÍNEA */}
          <div>
            {isMultipleLastName ? (
              <>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none text-carbon">
                  {firstName}
                </h1>
                <span className="text-2xl sm:text-3xl lg:text-4xl text-trebol italic font-serif font-normal block mt-1.5 tracking-normal">
                  {lastName}
                </span>
              </>
            ) : (
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none text-carbon">
                {firstName} <span className="text-trebol italic font-serif font-normal">{lastName}</span>
              </h1>
            )}
            <div className="border-t border-carbon/15 pt-3 mt-3">
              <p className="text-xs sm:text-sm font-mono font-extrabold text-carbon/80 tracking-wider uppercase leading-relaxed">
                {title} <span className="text-trebol font-bold">|</span> {company}
              </p>
            </div>
          </div>

          {/* PROPUESTA DE VALOR / BIO */}
          <p className="text-base sm:text-lg text-carbon/85 font-light leading-relaxed font-sans max-w-xl">
            {bio}
          </p>

          {/* PILARES / TAGS */}
          {tagsList.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1 justify-center md:justify-start">
              {tagsList.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white border border-neutral-200 text-carbon/80 hover:border-trebol hover:text-trebol transition-colors shadow-2xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              FILAS DE DATOS DE CONTACTO DIRECTO
             ───────────────────────────────────────────────────────────── */}
          <div className="space-y-2.5 pt-1">
            
            {/* Correo */}
            {email && (
              <a
                href={`mailto:${email}`}
                className="p-3.5 rounded-2xl bg-white hover:bg-neutral-50 border border-neutral-200/90 hover:border-trebol transition-all duration-300 flex items-center justify-between group cursor-pointer text-left shadow-2xs"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-hueso border border-neutral-200 flex items-center justify-center text-trebol shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono text-carbon/50 uppercase tracking-widest block">Correo Electrónico</span>
                    <span className="text-sm font-bold text-carbon group-hover:text-trebol transition-colors truncate block">{email}</span>
                  </div>
                </div>
                <ArrowRight size={18} className="text-carbon/40 group-hover:text-trebol group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </a>
            )}

            {/* Teléfono */}
            {phone && (
              <a
                href={`tel:${phone}`}
                className="p-3.5 rounded-2xl bg-white hover:bg-neutral-50 border border-neutral-200/90 hover:border-trebol transition-all duration-300 flex items-center justify-between group cursor-pointer text-left shadow-2xs"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-hueso border border-neutral-200 flex items-center justify-center text-trebol shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-carbon/50 uppercase tracking-widest block">Teléfono / WhatsApp</span>
                    <span className="text-sm font-bold text-carbon group-hover:text-trebol transition-colors">{phone}</span>
                  </div>
                </div>
                <ArrowRight size={18} className="text-carbon/40 group-hover:text-trebol group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </a>
            )}

            {/* Sitio Web */}
            {website && (
              <a
                href={websiteUrl || `https://${website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-white hover:bg-neutral-50 border border-neutral-200/90 hover:border-trebol transition-all duration-300 flex items-center justify-between group cursor-pointer text-left shadow-2xs"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-hueso border border-neutral-200 flex items-center justify-center text-trebol shrink-0">
                    <Globe size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-carbon/50 uppercase tracking-widest block">Sitio Web Oficial</span>
                    <span className="text-sm font-bold text-carbon group-hover:text-trebol transition-colors">{website}</span>
                  </div>
                </div>
                <ArrowRight size={18} className="text-carbon/40 group-hover:text-trebol group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </a>
            )}

          </div>

          {/* ─────────────────────────────────────────────────────────────
              BOTONES DE ACCIÓN SÓLIDOS CON COLORES DE TRÉBOL
             ───────────────────────────────────────────────────────────── */}
          <div className={`grid grid-cols-1 ${showPortfolio ? 'sm:grid-cols-3' : 'sm:grid-cols-2'} gap-3 pt-2`}>
            
            {/* WhatsApp Button (Sólido Verde Trébol) */}
            <a
              href={whatsappUrl || `https://wa.me/${(phone || '').replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-5 rounded-2xl bg-trebol text-white font-bold text-xs font-mono uppercase tracking-wider hover:bg-carbon transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <Send size={16} />
              <span>WhatsApp</span>
            </a>

            {/* LinkedIn Button (Sólido Carbón Trébol) */}
            <a
              href={linkedinUrl || "https://linkedin.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-5 rounded-2xl bg-carbon text-white font-bold text-xs font-mono uppercase tracking-wider hover:bg-trebol transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <LinkedInIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            {/* Portafolio Button (Opcional configurable en Admin: externo o interno) */}
            {showPortfolio && (
              !isInternalPortfolio ? (
                <a
                  href={formattedPortfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 px-5 rounded-2xl bg-white border border-neutral-200 text-carbon hover:text-trebol hover:border-trebol font-bold text-xs font-mono uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Briefcase size={16} />
                  <span>Portafolio</span>
                  <ArrowUpRight size={14} />
                </a>
              ) : (
                <Link
                  href={formattedPortfolioUrl}
                  className="py-4 px-5 rounded-2xl bg-white border border-neutral-200 text-carbon hover:text-trebol hover:border-trebol font-bold text-xs font-mono uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Briefcase size={16} />
                  <span>Portafolio</span>
                  <ArrowUpRight size={14} />
                </Link>
              )
            )}

          </div>

        </div>

      </div>

    </div>
  );
}
