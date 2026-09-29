import Link from 'next/link';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { getCasosFromDB } from '@/lib/db';

export const revalidate = 300;

export default async function CasosDeExitoPage() {
  let casos = [];
  try {
    const all = await getCasosFromDB();
    casos = (all || []).filter((c) => c && c.status !== 'draft');
  } catch (err) {
    console.warn('[Casos Page Error]:', err.message);
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Casos de éxito de Trébol Digital',
    itemListElement: casos.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'CreativeWork',
        name: c.titulo,
        about: c.cliente || undefined,
        description: c.descripcion || undefined,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-hueso text-carbon font-sans pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <header className="max-w-3xl">
          <span className="text-xs font-mono font-bold text-trebol uppercase tracking-wider block mb-4">
            Casos de éxito
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-carbon leading-[1.05] tracking-tight">
            Resultados medibles, sin filtros
          </h1>
          <p className="mt-6 text-lg text-carbon/70 font-light leading-relaxed">
            Cada proyecto que cerramos documenta el problema de partida, lo que
            hicimos y qué número cambió. Sin testimonios inventados.
          </p>
        </header>

        {casos.length === 0 ? (
          <div className="mt-16 bg-white border border-neutral-200 rounded-3xl p-10 sm:p-14 text-center">
            <TrendingUp size={40} className="text-trebol mx-auto mb-4" />
            <h2 className="text-2xl font-black text-carbon mb-2">
              Estamos documentando los primeros casos
            </h2>
            <p className="text-sm text-carbon/60 font-light max-w-lg mx-auto leading-relaxed">
              Publicamos únicamente proyectos con resultados verificados y
              autorización del cliente. Mientras tanto, cuéntanos tu reto y te
              mostramos casos similares de forma privada.
            </p>
            <Link
              href="/agenda"
              className="inline-flex items-center gap-2 mt-8 px-7 py-4 rounded-full bg-trebol text-white font-bold text-sm hover:bg-carbon transition-colors"
            >
              <span>Agendar un diagnóstico</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        ) : (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {casos.map((caso) => (
              <article
                key={caso.id || caso.slug}
                className="bg-white border border-neutral-200 rounded-3xl overflow-hidden hover:border-trebol transition-colors"
              >
                {caso.imagenUrl && (
                  <img
                    src={caso.imagenUrl}
                    alt={caso.titulo}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-8 space-y-3">
                  {caso.categoria && (
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-trebol">
                      {caso.categoria}
                    </span>
                  )}
                  <h2 className="text-2xl font-black text-carbon leading-tight">
                    {caso.titulo}
                  </h2>
                  {caso.cliente && (
                    <p className="text-xs font-mono uppercase tracking-wider text-carbon/40">
                      {caso.cliente}
                    </p>
                  )}
                  {caso.descripcion && (
                    <p className="text-sm text-carbon/75 font-light leading-relaxed">
                      {caso.descripcion}
                    </p>
                  )}
                  {caso.resultado && (
                    <p className="pt-3 border-t border-neutral-100 text-sm font-bold text-trebol">
                      {caso.resultado}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
