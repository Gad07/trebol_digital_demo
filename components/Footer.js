'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// ── LOGO VECTORIAL SÓLIDO OFICIAL DE WHATSAPP ──
function WhatsAppIconSVG({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} shrink-0`}>
      <path d="M17.472 14.382c-.301-.15-1.78-.877-2.056-.977-.276-.1-.477-.15-.678.15-.2.3-.777.977-.953 1.177-.176.2-.352.225-.653.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.085-.176-.3-.019-.462.132-.612.136-.135.301-.35.452-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.678-1.636-.93-2.241-.244-.589-.493-.509-.678-.519l-.578-.01c-.2 0-.527.075-.803.375-.276.3-1.054 1.03-1.054 2.511s1.079 2.912 1.23 3.112c.15.2 2.123 3.242 5.144 4.546.719.311 1.28.497 1.718.636.722.23 1.378.197 1.897.12.578-.087 1.78-.727 2.031-1.43.251-.703.251-1.306.176-1.43-.075-.125-.276-.2-.577-.35zM12.042 21.928c-1.792 0-3.548-.482-5.088-1.397l-.365-.216-3.78 1.002 1.026-3.684-.236-.376A9.882 9.882 0 0 1 2.15 12.042C2.15 6.586 6.587 2.15 12.044 2.15c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.002 5.459-4.441 9.886-9.883 9.886zM20.52 3.479A11.968 11.968 0 0 0 12.044 0C5.403 0 .004 5.399.004 12.042c0 2.12.552 4.187 1.602 6.008L0 24l6.136-1.61a11.98 11.98 0 0 0 5.906 1.538h.005c6.64 0 12.039-5.4 12.041-12.044a11.96 11.96 0 0 0-3.568-8.405z"/>
    </svg>
  );
}

// ── ISOTIPO VECTORIAL TRÉBOL DIGITAL OFICIAL ──
function TrebolLogoSVG({ className = "w-12 h-12", variant = "white" }) {
  return (
    <img
      src={variant === "white" ? "/images/TREBOL_BLANCO.png" : "/images/TREBOL_01.png"}
      alt="Trébol Digital"
      className={`${className} shrink-0 object-contain`}
    />
  );
}

export default function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <footer className="w-full bg-[#141614] text-white pt-16 pb-12 mt-0 relative z-10 font-sans border-t border-neutral-800">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Grid principal de 5 columnas en estilo negro/carbón */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-12 pb-12 border-b border-white/10">
          
          {/* Columna Marca, Logo Real, Slogan y Contacto */}
          <div className="md:col-span-2 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <Link href="/" className="inline-flex items-center gap-4 group">
                <TrebolLogoSVG variant="white" className="w-14 h-14 md:w-16 md:h-16 group-hover:rotate-180 transition-transform duration-700 ease-in-out" />
                <div className="flex flex-col justify-center">
                  <span className="text-3xl md:text-4xl font-black text-white tracking-tight leading-none">
                    Trébol Digital
                  </span>
                  <span className="text-xs font-mono font-bold text-trebol uppercase tracking-wider mt-1.5">
                    TENEMOS LA SUERTE DE ENCONTRARNOS
                  </span>
                </div>
              </Link>

              <p className="text-sm leading-relaxed text-neutral-400 font-light max-w-sm">
                Trébol Digital transforma negocios y emprendimientos en marcas visibles que atraen clientes.
              </p>
            </div>

            {/* Redes Sociales & Contacto (Iconos unificados) */}
            <div className="pt-2">
              <div className="flex items-center gap-3">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/525564929081"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white/80 hover:text-white hover:bg-[#25D366] border border-white/10 hover:border-[#25D366] transition-all duration-200 shadow-sm"
                >
                  <WhatsAppIconSVG className="w-5 h-5" />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/1Jj6UY2hQT/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white/80 hover:text-white hover:bg-[#1877F2] border border-white/10 hover:border-[#1877F2] transition-all duration-200 shadow-sm"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/treboldigital_?igsi=MTR6Zm92ZXBscHY0dQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white/80 hover:text-white hover:bg-[#E4405F] border border-white/10 hover:border-[#E4405F] transition-all duration-200 shadow-sm"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/tr%C3%A9bol-digital/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white/80 hover:text-white hover:bg-[#0A66C2] border border-white/10 hover:border-[#0A66C2] transition-all duration-200 shadow-sm"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Columna Soluciones */}
          <div className="flex flex-col justify-between">
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-extrabold uppercase tracking-wider text-trebol border-b border-white/10 pb-1.5 inline-block">
                Soluciones
              </h4>
              <ul className="space-y-2.5 text-sm text-neutral-300 font-medium">
                <li><Link href="/soluciones/marketing-estrategico" className="hover:text-trebol transition-colors">Marketing estratégico</Link></li>
                <li><Link href="/soluciones/ia-aplicada" className="hover:text-trebol transition-colors">IA aplicada al negocio</Link></li>
                <li><Link href="/soluciones/desarrollo-organizacional" className="hover:text-trebol transition-colors">Desarrollo organizacional</Link></li>
                <li><Link href="/soluciones/desarrollo-web" className="hover:text-trebol transition-colors">Desarrollo web</Link></li>
              </ul>
            </div>
          </div>

          {/* Columna Explorar */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-extrabold uppercase tracking-wider text-trebol border-b border-white/10 pb-1.5 inline-block">
              Explorar
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-300 font-medium">
              <li><Link href="/metodo" className="hover:text-trebol transition-colors">Método Trébol</Link></li>
              <li><Link href="/casos-de-exito" className="hover:text-trebol transition-colors">Casos de éxito</Link></li>
            </ul>
          </div>

          {/* Columna Insights (Última Columna) */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-extrabold uppercase tracking-wider text-trebol border-b border-white/10 pb-1.5 inline-block">
                Insights
              </h4>
              <ul className="space-y-2.5 text-sm text-neutral-300 font-medium">
                <li><Link href="/insights/blog" className="hover:text-trebol transition-colors">Blog</Link></li>
                <li><Link href="/insights/recursos" className="hover:text-trebol transition-colors">Recursos descargables</Link></li>
                <li><Link href="/insights/talleres" className="hover:text-trebol transition-colors">Talleres y cursos</Link></li>
              </ul>
            </div>
            <div className="pt-4">
              <Link
                href="/agenda"
                className="inline-flex items-center gap-1.5 text-xs md:text-sm font-bold text-white bg-trebol hover:bg-white hover:text-carbon px-5 py-2.5 rounded-full transition-all duration-300 shadow-md"
              >
                <span>Diagnóstico Gratuito ↗</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Barra inferior */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center text-xs font-mono text-neutral-500 gap-4">
          <div className="space-y-1 text-left">
            <p className="font-bold text-white">Todos los derechos reservados © {year} Trébol Digital.</p>
            <p className="text-neutral-400 font-normal">
              Desarrollado por <a href="https://portafolio-gadiel.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">Gadiel Palma</a>
            </p>
          </div>

          <div className="flex gap-6">
            <Link href="/politica-de-privacidad" className="hover:text-neutral-300 transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terminos-y-condiciones" className="hover:text-neutral-300 transition-colors">
              Términos y Condiciones
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
