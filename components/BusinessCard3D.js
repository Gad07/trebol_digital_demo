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
  firstName = "GADIEL",
  lastName = "PALMA",
  title = "DESARROLLADOR & ESPECIALISTA EN IA",
  company = "TRÉBOL DIGITAL",
  bio = "Desarrollador Web y Especialista en Inteligencia Artificial. Integramos aplicaciones web de alto rendimiento en Next.js, agentes conversacionales 24/7 y automatización inteligente para empresas.",
  phone = "+52 55 6492 9081",
  email = "gadiel@treboldigital.com",
  website = "treboldigital.com",
  websiteUrl = "https://treboldigital.com",
  whatsappUrl = "https://wa.me/525564929081?text=Hola%20Gadiel,%20vi%20tu%20perfil%20y%20me%20gustar%C3%ADa%20platicar.",
  photoUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=95"
}) {
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
          <div className="relative w-full max-w-[400px] md:max-w-none h-[520px] sm:h-[620px] lg:h-[660px] rounded-[2.5rem] overflow-hidden group border border-neutral-200/80 bg-white">
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
          
          {/* NOMBRE: PRIMER NOMBRE EN NEGRO / APELLIDO EN VERDE ITALIC */}
          <div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none text-carbon">
              {firstName} <span className="text-trebol italic font-serif font-normal">{lastName}</span>
            </h1>
            <div className="border-t border-carbon/15 pt-3 mt-3">
              <p className="text-xs sm:text-sm font-mono font-extrabold text-carbon/80 tracking-widest uppercase">
                {title} <span className="text-trebol">|</span> {company}
              </p>
            </div>
          </div>

          <p className="text-base sm:text-lg text-carbon/80 font-light leading-relaxed font-sans max-w-xl">
            {bio}
          </p>

          {/* ─────────────────────────────────────────────────────────────
              FILAS DE DATOS DE CONTACTO DIRECTO
             ───────────────────────────────────────────────────────────── */}
          <div className="space-y-3 pt-2">
            
            {/* Correo */}
            <a
              href={`mailto:${email}`}
              className="p-4 rounded-2xl bg-white hover:bg-neutral-50 border border-neutral-200/90 hover:border-trebol transition-all duration-300 flex items-center justify-between group cursor-pointer text-left"
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

            {/* Teléfono */}
            <a
              href={`tel:${phone}`}
              className="p-4 rounded-2xl bg-white hover:bg-neutral-50 border border-neutral-200/90 hover:border-trebol transition-all duration-300 flex items-center justify-between group cursor-pointer text-left"
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

            {/* Sitio Web */}
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-white hover:bg-neutral-50 border border-neutral-200/90 hover:border-trebol transition-all duration-300 flex items-center justify-between group cursor-pointer text-left"
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

          </div>

          {/* ─────────────────────────────────────────────────────────────
              BOTONES DE ACCIÓN SÓLIDOS CON COLORES DE TRÉBOL
             ───────────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            
            {/* WhatsApp Button (Sólido Verde Trébol) */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-5 rounded-2xl bg-trebol text-white font-bold text-xs font-mono uppercase tracking-wider hover:bg-carbon transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send size={16} />
              <span>WhatsApp</span>
            </a>

            {/* LinkedIn Button (Sólido Carbón Trébol) */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-5 rounded-2xl bg-carbon text-white font-bold text-xs font-mono uppercase tracking-wider hover:bg-trebol transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <LinkedInIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            {/* Portafolio Button (Sólido Verde Trébol) */}
            <Link
              href="/casos-de-exito"
              className="py-4 px-5 rounded-2xl bg-trebol text-white font-bold text-xs font-mono uppercase tracking-wider hover:bg-carbon transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Briefcase size={16} />
              <span>Portafolio</span>
              <ArrowUpRight size={14} />
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}
