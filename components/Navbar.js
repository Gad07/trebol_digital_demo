'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  ChevronDown,
  Target,
  Bot,
  Network,
  Globe,
  BookOpen,
  Download,
  GraduationCap,
  Menu,
  X,
  ArrowUpRight,
  QrCode,
} from 'lucide-react';

// ── ISOTIPO OFICIAL TRÉBOL DIGITAL (PNG) ──
function TrebolLogoSVG({ className = "w-6 h-6", variant = "color" }) {
  return (
    <img
      src={variant === "white" ? "/images/TREBOL_BLANCO.png" : "/images/TREBOL_01.png"}
      alt="Trébol Digital"
      className={`${className} shrink-0 object-contain`}
    />
  );
}

const solucionesItems = [
  {
    title: 'Marketing Estratégico',
    desc: 'Posicionamiento, redes sociales, pauta y adquisición de clientes',
    href: '/soluciones/marketing-estrategico',
    icon: Target,
  },
  {
    title: 'IA Aplicada & Agentes',
    desc: 'Automatización de procesos, chatbots 24/7 y análisis predictivo',
    href: '/soluciones/ia-aplicada',
    icon: Bot,
  },
  {
    title: 'Desarrollo Web & Apps',
    desc: 'Sitios en Next.js, SEO técnico, velocidad y diseño de alta conversión',
    href: '/soluciones/desarrollo-web',
    icon: Globe,
  },
  {
    title: 'Desarrollo Organizacional',
    desc: 'Estructura empresarial, procesos y alineación de equipos',
    href: '/soluciones/desarrollo-organizacional',
    icon: Network,
  }
];

const insightsItems = [
  {
    title: 'Blog & Editorial',
    desc: 'Artículos de fondo sobre marketing, IA y estrategia',
    href: '/insights/blog',
    icon: BookOpen,
  },
  {
    title: 'Recursos Descargables',
    desc: 'Guías, plantillas y e-books de libre acceso',
    href: '/insights/recursos',
    icon: Download,
  },
  {
    title: 'Talleres & Cursos',
    desc: 'Formación práctica para capacitar a tus líderes',
    href: '/insights/talleres',
    icon: GraduationCap,
  }
];

export default function Navbar() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  // scrolled sigue sirviendo solo para lógica de dropdowns móviles
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || 0;
      setScrolled(y > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const hideNavbar = pathname?.startsWith('/v2') || pathname?.startsWith('/v3') || pathname?.startsWith('/admin');

  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const { scrollY } = useScroll();

  // Interpolación progresiva frame por frame (0 a 80px de scroll)
  const rawPadTop  = useTransform(scrollY, [0, 80], [0, 14]);
  const rawPadSide = useTransform(scrollY, [0, 80], [0, 16]);
  const rawRadius  = useTransform(scrollY, [0, 80], [0, 9999]);
  const rawPY      = useTransform(scrollY, [0, 80], [14, 10]);
  const rawPX      = useTransform(scrollY, [0, 80], [44, 32]);
  const rawMaxWidth = useTransform(scrollY, [0, 80], [1600, 1200]);
  const rawBg      = useTransform(scrollY, [0, 80], ['rgba(255,255,255,0.92)', 'rgba(255,255,255,0.98)']);
  const rawBorder  = useTransform(scrollY, [0, 80], ['rgba(229,231,235,0.4)', 'rgba(209,213,219,0.9)']);
  const rawShadow  = useTransform(scrollY, [0, 80], [
    '0px 1px 0px rgba(0,0,0,0.04)',
    '0px 18px 45px rgba(0,0,0,0.12), 0px 4px 12px rgba(0,0,0,0.05)'
  ]);

  // Spring con física ultra-suave sin brincos de layout
  const sCfg = { stiffness: 150, damping: 25, mass: 0.5 };
  const padTop  = useSpring(rawPadTop, sCfg);
  const padSide = useSpring(rawPadSide, sCfg);
  const radius  = useSpring(rawRadius, sCfg);
  const padY    = useSpring(rawPY, sCfg);
  const padX    = useSpring(rawPX, sCfg);
  const maxWidth = useSpring(rawMaxWidth, sCfg);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (hideNavbar) return null;

  return (
    <>
      {/* TELÓN DE FONDO CON BLUR AL ESTAR ABIERTO EL MENÚ MÓVIL */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md lg:hidden pointer-events-auto cursor-pointer"
          />
        )}
      </AnimatePresence>

      <motion.header
        ref={dropdownRef}
        className="fixed left-0 right-0 top-0 z-50 flex flex-col items-center w-full isolate"
        style={{ paddingLeft: padSide, paddingRight: padSide, paddingTop: padTop }}
      >
        <motion.div
          className="w-full flex items-center justify-between"
          style={{
            maxWidth,
            borderRadius: radius,
            paddingTop: padY,
            paddingBottom: padY,
            paddingLeft: padX,
            paddingRight: padX,
            backgroundColor: rawBg,
            borderColor: rawBorder,
            borderWidth: 1,
            borderStyle: 'solid',
            boxShadow: rawShadow,
          }}
        >

          {/* BRAND LOGO */}
          <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2.5 sm:gap-3 group" aria-label="Trébol Digital">
            <TrebolLogoSVG className="w-8 h-8 sm:w-10 sm:h-10 group-hover:rotate-180 transition-transform duration-700 ease-in-out shrink-0" />
            <div className="flex flex-col justify-center">
              <span className="text-base sm:text-[15px] font-black tracking-tight text-[#2D2E2D] leading-none group-hover:text-[#5C9E43] transition-colors">
                Trébol Digital
              </span>
              <span className="text-[6.5px] font-bold text-gray-400 tracking-[0.03em] uppercase mt-1 hidden sm:block">
                Tenemos la suerte de encontrarnos
              </span>
            </div>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">

            <Link
              href="/"
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${pathname === '/'
                ? 'bg-[#2D2E2D] text-white shadow-sm'
                : 'text-[#2D2E2D]/80 hover:text-[#5C9E43] hover:bg-white/60'
                }`}
            >
              Inicio
            </Link>

            {/* Soluciones Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('soluciones')}
            >
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'soluciones' ? null : 'soluciones')}
                className={`flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${pathname?.startsWith('/soluciones') || activeDropdown === 'soluciones'
                  ? 'bg-[#5C9E43]/10 text-[#5C9E43]'
                  : 'text-[#2D2E2D]/80 hover:text-[#5C9E43] hover:bg-white/60'
                  }`}
              >
                Soluciones
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-300 ${activeDropdown === 'soluciones' ? 'rotate-180 text-[#5C9E43]' : 'text-gray-400'
                    }`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === 'soluciones' && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute left-0 top-full mt-3 w-[380px] bg-white rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.20)] border border-gray-200 p-4 z-50"
                  >
                    <div className="flex items-center justify-between px-3 pb-2.5 mb-2 border-b border-gray-100">
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                        Nuestras Soluciones
                      </span>
                      <span className="w-2 h-2 rounded-full bg-[#5C9E43] animate-pulse" />
                    </div>

                    <div className="flex flex-col gap-1">
                      {solucionesItems.map((item) => {
                        const IconComp = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-3.5 p-2.5 rounded-2xl hover:bg-[#EEF7E6] transition-all duration-300 group/item hover:translate-x-1"
                          >
                            <div className="w-9 h-9 rounded-xl bg-[#EEF7E6] flex items-center justify-center shrink-0 group-hover/item:bg-[#5C9E43] transition-colors shadow-sm">
                              <IconComp size={18} className="text-[#5C9E43] group-hover/item:text-white transition-colors" />
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-[#2D2E2D] group-hover/item:text-[#5C9E43] transition-colors">
                                {item.title}
                              </h4>
                              <p className="text-[11px] text-gray-500 leading-tight mt-0.5 font-light">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/metodo"
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${pathname === '/metodo'
                ? 'bg-[#2D2E2D] text-white shadow-sm'
                : 'text-[#2D2E2D]/80 hover:text-[#5C9E43] hover:bg-white/60'
                }`}
            >
              Método
            </Link>

            <Link
              href="/casos-de-exito"
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${pathname === '/casos-de-exito'
                ? 'bg-[#2D2E2D] text-white shadow-sm'
                : 'text-[#2D2E2D]/80 hover:text-[#5C9E43] hover:bg-white/60'
                }`}
            >
              Casos de éxito
            </Link>

            {/* Insights Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('insights')}
            >
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'insights' ? null : 'insights')}
                className={`flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${pathname?.startsWith('/insights') || activeDropdown === 'insights'
                  ? 'bg-[#5C9E43]/10 text-[#5C9E43]'
                  : 'text-[#2D2E2D]/80 hover:text-[#5C9E43] hover:bg-white/60'
                  }`}
              >
                Insights
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-300 ${activeDropdown === 'insights' ? 'rotate-180 text-[#5C9E43]' : 'text-gray-400'
                    }`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === 'insights' && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute right-0 top-full mt-3 w-80 bg-white rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.20)] border border-gray-200 p-4 z-50"
                  >
                    <div className="flex items-center justify-between px-3 pb-2.5 mb-2 border-b border-gray-100">
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                        Recursos & Conocimiento
                      </span>
                      <span className="w-2 h-2 rounded-full bg-[#5C9E43] animate-pulse" />
                    </div>

                    <div className="flex flex-col gap-1">
                      {insightsItems.map((item) => {
                        const IconComp = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-3.5 p-2.5 rounded-2xl hover:bg-[#EEF7E6] transition-all duration-300 group/item hover:translate-x-1"
                          >
                            <div className="w-9 h-9 rounded-xl bg-[#EEF7E6] flex items-center justify-center shrink-0 group-hover/item:bg-[#5C9E43] transition-colors shadow-sm">
                              <IconComp size={18} className="text-[#5C9E43] group-hover/item:text-white transition-colors" />
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-[#2D2E2D] group-hover/item:text-[#5C9E43] transition-colors">
                                {item.title}
                              </h4>
                              <p className="text-[11px] text-gray-500 leading-tight mt-0.5 font-light">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* CTA BUTTON + SOCIAL DESKTOP */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Redes Sociales */}
            <div className="flex items-center gap-1.5">
              <a
                href="https://www.facebook.com/share/1Jj6UY2hQT/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 flex items-center justify-center rounded-full text-[#2D2E2D]/50 hover:text-[#5C9E43] hover:bg-[#EEF7E6] transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href="https://www.instagram.com/treboldigital_?igsi=MTR6Zm92ZXBscHY0dQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 flex items-center justify-center rounded-full text-[#2D2E2D]/50 hover:text-[#5C9E43] hover:bg-[#EEF7E6] transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </a>
              <a
                href="https://www.linkedin.com/company/tr%C3%A9bol-digital/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 flex items-center justify-center rounded-full text-[#2D2E2D]/50 hover:text-[#5C9E43] hover:bg-[#EEF7E6] transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>

            <div className="w-px h-5 bg-gray-200" />

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/agenda"
                className="inline-flex items-center gap-1.5 bg-[#5C9E43] hover:bg-[#2D2E2D] text-white font-bold text-xs px-5 py-2 rounded-full shadow-md hover:shadow-xl transition-all duration-300"
              >
                <span>Diagnóstico Gratuito</span>
                <ArrowUpRight size={14} />
              </Link>
            </motion.div>
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2.5 text-[#2D2E2D] bg-neutral-100/90 border border-neutral-200/80 hover:bg-neutral-200/80 rounded-full lg:hidden transition-all active:scale-95 shadow-sm"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.div>

        {/* DESPLEGABLE MÓVIL DIRECTO SOBRE EL MISMO NAVBAR */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-full bg-white/98 backdrop-blur-2xl border-t border-gray-100 shadow-2xl rounded-b-3xl px-5 py-6 flex flex-col gap-6 lg:hidden overflow-hidden max-h-[85vh] overflow-y-auto"
            >
              {/* Navigation Links */}
              <div className="flex flex-col gap-1.5 font-sans">
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className={`px-5 py-3 text-base font-bold rounded-2xl transition-colors ${
                    pathname === '/' ? 'bg-[#5C9E43]/10 text-[#5C9E43]' : 'text-[#2D2E2D] hover:bg-gray-50'
                  }`}
                >
                  Inicio
                </Link>

                <div className="flex flex-col">
                  <button
                    onClick={() => setMobileAccordion(mobileAccordion === 'soluciones' ? null : 'soluciones')}
                    className={`flex items-center justify-between w-full px-5 py-3 text-base font-bold rounded-2xl transition-colors ${
                      pathname?.startsWith('/soluciones') ? 'bg-[#5C9E43]/10 text-[#5C9E43]' : 'text-[#2D2E2D] hover:bg-gray-50'
                    }`}
                  >
                    <span>Soluciones</span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${mobileAccordion === 'soluciones' ? 'rotate-180 text-[#5C9E43]' : 'text-gray-400'}`}
                    />
                  </button>
                  {mobileAccordion === 'soluciones' && (
                    <div className="pl-4 pr-3 py-3 flex flex-col gap-2 bg-[#EEF7E6]/60 rounded-2xl my-1 border border-[#5C9E43]/20">
                      {solucionesItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white transition-colors"
                        >
                          <item.icon size={18} className="text-[#5C9E43] mt-0.5 shrink-0" />
                          <div>
                            <p className="text-sm font-bold text-[#2D2E2D]">{item.title}</p>
                            <p className="text-xs text-gray-500 leading-tight mt-0.5">{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/metodo"
                  onClick={() => setMenuOpen(false)}
                  className={`px-5 py-3 text-base font-bold rounded-2xl transition-colors ${
                    pathname === '/metodo' ? 'bg-[#5C9E43]/10 text-[#5C9E43]' : 'text-[#2D2E2D] hover:bg-gray-50'
                  }`}
                >
                  Método
                </Link>

                <Link
                  href="/casos-de-exito"
                  onClick={() => setMenuOpen(false)}
                  className={`px-5 py-3 text-base font-bold rounded-2xl transition-colors ${
                    pathname === '/casos-de-exito' ? 'bg-[#5C9E43]/10 text-[#5C9E43]' : 'text-[#2D2E2D] hover:bg-gray-50'
                  }`}
                >
                  Casos de éxito
                </Link>

                <div className="flex flex-col">
                  <button
                    onClick={() => setMobileAccordion(mobileAccordion === 'insights' ? null : 'insights')}
                    className={`flex items-center justify-between w-full px-5 py-3 text-base font-bold rounded-2xl transition-colors ${
                      pathname?.startsWith('/insights') ? 'bg-[#5C9E43]/10 text-[#5C9E43]' : 'text-[#2D2E2D] hover:bg-gray-50'
                    }`}
                  >
                    <span>Insights</span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${mobileAccordion === 'insights' ? 'rotate-180 text-[#5C9E43]' : 'text-gray-400'}`}
                    />
                  </button>
                  {mobileAccordion === 'insights' && (
                    <div className="pl-4 pr-3 py-3 flex flex-col gap-2 bg-[#EEF7E6]/60 rounded-2xl my-1 border border-[#5C9E43]/20">
                      {insightsItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white transition-colors"
                        >
                          <item.icon size={18} className="text-[#5C9E43] mt-0.5 shrink-0" />
                          <div>
                            <p className="text-sm font-bold text-[#2D2E2D]">{item.title}</p>
                            <p className="text-xs text-gray-500 leading-tight mt-0.5">{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom CTA in Mobile Menu */}
              <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                {/* Redes Sociales Mobile */}
                <div className="flex items-center justify-center gap-4 py-1">
                  <a
                    href="https://www.facebook.com/share/1Jj6UY2hQT/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#EEF7E6] text-[#5C9E43] hover:bg-[#5C9E43] hover:text-white transition-all duration-200"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a
                    href="https://www.instagram.com/treboldigital_?igsi=MTR6Zm92ZXBscHY0dQ%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#EEF7E6] text-[#5C9E43] hover:bg-[#5C9E43] hover:text-white transition-all duration-200"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/tr%C3%A9bol-digital/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#EEF7E6] text-[#5C9E43] hover:bg-[#5C9E43] hover:text-white transition-all duration-200"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                </div>

                <Link
                  href="/agenda"
                  onClick={() => setMenuOpen(false)}
                  className="w-full py-3.5 bg-[#5C9E43] text-white font-bold rounded-2xl text-center shadow-lg shadow-[#5C9E43]/25 flex items-center justify-center gap-2 text-base hover:bg-[#2D2E2D] transition-colors cursor-pointer"
                >
                  <span>Agendar Diagnóstico Gratuito</span>
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
