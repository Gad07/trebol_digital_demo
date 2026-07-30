import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-gray-200/80 bg-white/70 backdrop-blur-lg pt-16 mt-20">
      <div className="mx-auto max-w-6xl px-6 pb-12 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Brand Col */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="grid grid-cols-2 gap-1 w-6 h-6 items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2D2E2D]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#5C9E43]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#5C9E43]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#2D2E2D]"></span>
            </div>
            <span className="text-lg font-bold text-[#2D2E2D]">Trébol Digital</span>
          </Link>
          <p className="text-sm font-semibold text-[#5C9E43] uppercase tracking-wider text-[11px]">
            TENEMOS LA SUERTE DE ENCONTRARNOS
          </p>
          <p className="text-sm leading-relaxed text-gray-600 max-w-sm">
            Consultoría estratégica en marketing, inteligencia artificial y desarrollo organizacional para impulsar el crecimiento real de tu negocio.
          </p>
        </div>

        {/* Soluciones Col */}
        <div className="flex flex-col gap-2">
          <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-[#2D2E2D]">Soluciones</h4>
          <Link href="/soluciones/marketing-estrategico" className="text-sm text-gray-600 hover:text-[#5C9E43] transition-colors">Marketing estratégico</Link>
          <Link href="/soluciones/ia-aplicada" className="text-sm text-gray-600 hover:text-[#5C9E43] transition-colors">IA aplicada al negocio</Link>
          <Link href="/soluciones/desarrollo-organizacional" className="text-sm text-gray-600 hover:text-[#5C9E43] transition-colors">Desarrollo organizacional</Link>
          <Link href="/soluciones/desarrollo-web" className="text-sm text-gray-600 hover:text-[#5C9E43] transition-colors">Desarrollo web</Link>
        </div>

        {/* Explorar Col */}
        <div className="flex flex-col gap-2">
          <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-[#2D2E2D]">Explorar</h4>
          <Link href="/metodo" className="text-sm text-gray-600 hover:text-[#5C9E43] transition-colors">Método Trébol</Link>
          <Link href="/casos-de-exito" className="text-sm text-gray-600 hover:text-[#5C9E43] transition-colors">Casos de éxito</Link>
          <Link href="/agenda" className="text-sm font-semibold text-[#5C9E43] hover:underline">Diagnóstico Gratuito ↗</Link>
        </div>

        {/* Insights Col */}
        <div className="flex flex-col gap-2">
          <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-[#2D2E2D]">Insights</h4>
          <Link href="/insights/blog" className="text-sm text-gray-600 hover:text-[#5C9E43] transition-colors">Blog</Link>
          <Link href="/insights/recursos" className="text-sm text-gray-600 hover:text-[#5C9E43] transition-colors">Recursos descargables</Link>
          <Link href="/insights/talleres" className="text-sm text-gray-600 hover:text-[#5C9E43] transition-colors">Talleres y cursos</Link>
        </div>
      </div>

      <div className="border-t border-gray-200/80 py-6 text-center text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-6 gap-4">
        <p>&copy; {year} Trébol Digital. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <span className="hover:text-[#5C9E43] cursor-pointer">Política de Privacidad</span>
          <span className="hover:text-[#5C9E43] cursor-pointer">Términos y Condiciones</span>
        </div>
      </div>
    </footer>
  );
}

