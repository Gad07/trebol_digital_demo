'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// ── LOGO VECTORIAL SÓLIDO OFICIAL DE WHATSAPP ──
function WhatsAppIconSVG({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 32 32" className={`${className} shrink-0`}>
      <path
        fill="#FFFFFF"
        d="M16 0C7.163 0 0 7.163 0 16c0 2.825.733 5.56 2.122 7.965L.05 32l8.225-2.032A15.934 15.934 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0z"
      />
      <path
        fill="#141614"
        d="M23.51 19.866c-.354-.177-2.095-1.034-2.42-1.152-.325-.118-.561-.177-.797.177-.236.354-.916 1.152-1.123 1.388-.207.236-.413.266-.767.089-.354-.177-1.497-.552-2.852-1.76-1.054-.94-1.765-2.102-1.972-2.456-.207-.354-.022-.545.155-.722.159-.159.354-.413.531-.62.177-.207.236-.354.354-.59.118-.236.059-.443-.03-.62-.089-.177-.797-1.92-1.092-2.63-.288-.693-.58-.598-.797-.609l-.679-.012c-.236 0-.62.089-.945.443s-1.24 1.211-1.24 2.955c0 1.744 1.27 3.428 1.447 3.664.177.236 2.497 3.813 6.05 5.348.845.365 1.505.583 2.02.746.848.27 1.62.232 2.23.141.681-.102 2.095-.856 2.39-1.683.295-.827.295-1.536.207-1.683-.088-.147-.324-.236-.678-.413z"
      />
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

            <div className="pt-4">
              <a
                href="https://wa.me/525564929081"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-xs md:text-sm font-bold text-white bg-white/10 hover:bg-trebol border border-white/15 hover:border-trebol px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm"
              >
                <WhatsAppIconSVG className="w-5 h-5" />
                <span>WhatsApp: +52 55 6492 9081</span>
              </a>
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
