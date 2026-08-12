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
    desc: 'Posicionamiento, redes sociales y campañas de alto impacto',
    href: '/soluciones/marketing-estrategico',
    icon: Target,
  },
  {
    title: 'IA Aplicada al Negocio',
    desc: 'Automatización de procesos, agentes IA y talleres prácticos',
    href: '/soluciones/ia-aplicada',
    icon: Bot,
  },
  {
    title: 'Desarrollo Organizacional',
    desc: 'Estructura empresarial, procesos y capacitación de equipos',
    href: '/soluciones/desarrollo-organizacional',
    icon: Network,
  },
  {
    title: 'Desarrollo Web & Apps',
    desc: 'Plataformas web corporativas, tiendas online y portales SaaS',
    href: '/soluciones/desarrollo-web',
    icon: Globe,
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

  const isV2orV3 = pathname?.startsWith('/v2') || pathname?.startsWith('/v3');

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setScrolled(y > 20);
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
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (isV2orV3) return null;

  return (
    <motion.header
      ref={dropdownRef}
      initial={false}
      animate={{
        top: scrolled ? '1rem' : '0rem',
        paddingLeft: scrolled ? '1.5rem' : '0rem',
        paddingRight: scrolled ? '1.5rem' : '0rem',
      }}
      transition={{ type: 'spring', stiffness: 260, damping: 25 }}
      className="fixed left-0 right-0 z-50 flex justify-center w-full"
    >
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 260, damping: 25 }}
        className={`w-full flex items-center justify-between transition-colors duration-500 ${scrolled
          ? 'max-w-[1200px] bg-white/90 backdrop-blur-2xl border border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-full py-3 px-6 md:px-10'
          : 'max-w-full bg-white/40 backdrop-blur-md border-b border-white/50 rounded-none py-4 px-6 md:px-12'
          }`}
      >

        {/* BRAND LOGO */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Trébol Digital">
          <TrebolLogoSVG className="w-10 h-10 group-hover:rotate-180 transition-transform duration-700 ease-in-out" />
          <div className="flex flex-col">
            <span className="text-[15px] font-black tracking-tight text-[#2D2E2D] leading-none group-hover:text-[#5C9E43] transition-colors">
              Trébol Digital
            </span>
            <span className="text-[6.5px] font-bold text-gray-400 tracking-[0.03em] uppercase mt-1">
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

        {/* CTA BUTTON */}
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
          className="p-2 text-[#2D2E2D] hover:bg-gray-100/60 rounded-full lg:hidden transition-colors"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.div>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden pointer-events-auto"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="fixed top-0 right-0 z-50 w-full max-w-sm h-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto lg:hidden pointer-events-auto"
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <TrebolLogoSVG className="w-9 h-9" />
                    <div className="flex flex-col">
                      <span className="text-sm font-black text-[#2D2E2D] leading-none">Trébol Digital</span>
                      <span className="text-[5.5px] font-bold text-gray-400 uppercase mt-1 tracking-[0.03em]">Tenemos la suerte de encontrarnos</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="flex flex-col gap-2">
                  <Link
                    href="/"
                    onClick={() => setMenuOpen(false)}
                    className="px-4 py-3 text-base font-bold text-[#2D2E2D] hover:bg-gray-50 rounded-2xl"
                  >
                    Inicio
                  </Link>

                  <div className="flex flex-col">
                    <button
                      onClick={() => setMobileAccordion(mobileAccordion === 'soluciones' ? null : 'soluciones')}
                      className="flex items-center justify-between w-full px-4 py-3 text-base font-bold text-[#2D2E2D] hover:bg-gray-50 rounded-2xl"
                    >
                      Soluciones
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${mobileAccordion === 'soluciones' ? 'rotate-180 text-[#5C9E43]' : 'text-gray-400'}`}
                      />
                    </button>
                    {mobileAccordion === 'soluciones' && (
                      <div className="pl-4 pr-2 py-3 flex flex-col gap-2 bg-[#EEF7E6]/60 rounded-2xl my-1">
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
                              <p className="text-xs text-gray-500 leading-tight">{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <Link
                    href="/metodo"
                    onClick={() => setMenuOpen(false)}
                    className="px-4 py-3 text-base font-bold text-[#2D2E2D] hover:bg-gray-50 rounded-2xl"
                  >
                    Método
                  </Link>

                  <Link
                    href="/casos-de-exito"
                    onClick={() => setMenuOpen(false)}
                    className="px-4 py-3 text-base font-bold text-[#2D2E2D] hover:bg-gray-50 rounded-2xl"
                  >
                    Casos de éxito
                  </Link>

                  <div className="flex flex-col">
                    <button
                      onClick={() => setMobileAccordion(mobileAccordion === 'insights' ? null : 'insights')}
                      className="flex items-center justify-between w-full px-4 py-3 text-base font-bold text-[#2D2E2D] hover:bg-gray-50 rounded-2xl"
                    >
                      Insights
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${mobileAccordion === 'insights' ? 'rotate-180 text-[#5C9E43]' : 'text-gray-400'}`}
                      />
                    </button>
                    {mobileAccordion === 'insights' && (
                      <div className="pl-4 pr-2 py-3 flex flex-col gap-2 bg-[#EEF7E6]/60 rounded-2xl my-1">
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
                              <p className="text-xs text-gray-500 leading-tight">{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 flex flex-col gap-3">
                <Link
                  href="/agenda"
                  onClick={() => setMenuOpen(false)}
                  className="w-full py-3.5 bg-[#5C9E43] text-white font-bold rounded-2xl text-center shadow-lg shadow-[#5C9E43]/20 flex items-center justify-center gap-2 text-sm"
                >
                  Diagnóstico Gratuito
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
