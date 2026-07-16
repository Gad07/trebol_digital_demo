'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Clover, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#nosotros', label: '¿Por qué nosotros?' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className="pointer-events-none fixed top-0 z-50 flex w-full justify-center px-4 py-4 md:px-6">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`pointer-events-auto flex w-full max-w-5xl items-center gap-2 rounded-full bg-white/40 backdrop-blur-2xl border border-white/30 px-3 py-2 shadow-[0_8px_32px_rgba(31,38,135,0.07)] transition-all duration-300 md:gap-3 md:px-5 md:py-2.5 ${
          scrolled
            ? 'bg-white/60 shadow-[0_12px_40px_rgba(31,38,135,0.1)]'
            : ''
        }`}
        role="navigation"
        aria-label="Navegación principal"
      >
        <Link href="/" className="flex items-center gap-1.5 whitespace-nowrap" aria-label="Trébol Digital - Inicio">
          <Clover size={20} className="text-verde" strokeWidth={2.5} aria-hidden="true" />
          <span className="text-sm font-bold text-carbon">
            Trébol <span className="text-verde">Digital</span>
          </span>
        </Link>

        <div className="ml-auto hidden items-center gap-1 md:flex" role="menubar">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              role="menuitem"
              className="rounded-full px-3.5 py-2 text-[13px] font-normal text-gris transition-colors hover:bg-white/50 hover:text-carbon"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="#contacto"
            className="hidden rounded-full bg-verde px-5 py-2 text-xs font-bold text-white transition-all hover:bg-verde-hover hover:-translate-y-0.5 md:inline-flex"
          >
            Diagnóstico Gratuito
          </Link>
          <button
            className="flex rounded-lg p-2 text-carbon transition-colors hover:bg-white/50 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="pointer-events-auto fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="pointer-events-auto fixed right-0 top-0 z-50 flex h-dvh w-[min(300px,80vw)] flex-col gap-2 bg-white/40 backdrop-blur-2xl border-l border-white/30 shadow-[-4px_0_40px_rgba(31,38,135,0.08)] p-20"
            >
              {navLinks.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-base text-gris transition-colors hover:bg-white/50 hover:text-carbon"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
