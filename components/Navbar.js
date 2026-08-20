'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
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

  const hideNavbar = pathname?.startsWith('/v2') || pathname?.startsWith('/v3') || pathname?.startsWith('/admin');

  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    let currentScrolled = false;
    const handleScroll = () => {
      const y = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (!currentScrolled && y > 40) {
        currentScrolled = true;
        setScrolled(true);
      } else if (currentScrolled && y < 15) {
        currentScrolled = false;
        setScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

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

      <header
        ref={dropdownRef}
        className={`fixed left-0 right-0 top-0 z-50 flex flex-col items-center w-full isolate transform-gpu transition-all duration-300 ${
          scrolled ? 'lg:pt-4 lg:px-6' : 'pt-0 px-0'
        }`}
        style={{ transform: 'translateZ(0)' }}
      >
        <div
          className={`w-full flex items-center justify-between isolate transform-gpu transition-all duration-500 ${
            scrolled
              ? 'bg-white shadow-md lg:shadow-[0_20px_50px_rgba(0,0,0,0.12)] lg:rounded-full lg:max-w-[1200px] py-3 px-4 sm:px-6 md:px-10 border-b lg:border border-gray-200/80'
              : 'bg-white/95 lg:bg-white/90 border-b border-gray-200/60 rounded-none py-3 px-4 sm:px-6 md:px-12'
          }`}
          style={{ transform: 'translateZ(0)' }}
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
                    className="absolute left-0 top-full mt-3 w-[380px] bg-white/95 backdrop-blur-2xl rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-100 p-4 z-50"
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
                    className="absolute right-0 top-full mt-3 w-80 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-100 p-4 z-50"
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

          {/* CTA BUTTON DESKTOP */}
          <div className="hidden lg:flex items-center gap-3">
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
        </div>

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
      </header>
    </>
  );
}
