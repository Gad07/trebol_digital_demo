import { Clover } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/30 pt-16">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-12 px-6 pb-12 md:flex-row md:gap-8">
        <div className="max-w-[260px]">
          <div className="mb-2.5 flex items-center gap-1.5 text-sm font-bold text-verde">
            <Clover size={18} strokeWidth={2.5} aria-hidden="true" />
            <span>Trébol <strong className="text-carbon">Digital</strong></span>
          </div>
          <p className="text-sm leading-relaxed text-gris">Tenemos la suerte de encontrarnos.</p>
        </div>

        <div className="flex gap-16">
          <div className="flex flex-col gap-2">
            <h4 className="mb-1 text-[11px] font-bold uppercase tracking-[0.1em] text-gris">Servicios</h4>
            {['Crecimiento Digital', 'Inteligencia Artificial', 'Desarrollo Organizacional'].map((t) => (
              <a key={t} href="#servicios" className="text-sm text-gris transition-colors hover:text-verde">{t}</a>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="mb-1 text-[11px] font-bold uppercase tracking-[0.1em] text-gris">Empresa</h4>
            {[
              { label: 'Nuestro Proceso', href: '#proceso' },
              { label: '¿Por qué nosotros?', href: '#nosotros' },
              { label: 'Contacto', href: '#contacto' },
            ].map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-gris transition-colors hover:text-verde">{l.label}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/30 py-5 text-center text-[13px] text-gris">
        <p>&copy; {year} Trébol Digital. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
