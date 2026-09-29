import { notFound } from 'next/navigation';
import BusinessCard3D from '../../../components/BusinessCard3D';
import Link from 'next/link';
import { ArrowUpRight, Calendar, Quote, BookOpen, Clock } from 'lucide-react';
import { getTarjetaBySlugFromDB, getBlogsFromDB } from '@/lib/db';

export const revalidate = 300;

export default async function DynamicTarjetaPage({ params }) {
  const { slug } = await params;

  let tarjeta = null;
  try {
    tarjeta = await getTarjetaBySlugFromDB(slug);
  } catch (err) {
    console.warn('[Tarjeta Page Error]:', err.message);
  }

  if (!tarjeta) notFound();

  let blogs = [];
  try {
    const all = await getBlogsFromDB();
    blogs = (all || []).slice(0, 3);
  } catch (err) {
    console.warn('[Tarjeta Blogs Error]:', err.message);
  }

  return (
    <main className="min-h-screen bg-hueso text-carbon font-sans selection:bg-trebol selection:text-white flex flex-col justify-between">
      {/* ─────────────────────────────────────────────────────────────
          1. PERFIL PRINCIPAL DINÁMICO DESDE LA BASE DE DATOS
         ───────────────────────────────────────────────────────────── */}
      <section className="w-full max-w-6xl mx-auto px-5 sm:px-8 pt-28 sm:pt-36 pb-12 flex flex-col items-center justify-center">
        <BusinessCard3D
          firstName={tarjeta.firstName}
          lastName={tarjeta.lastName}
          title={tarjeta.title}
          company={tarjeta.company}
          bio={tarjeta.bio}
          phone={tarjeta.phone}
          email={tarjeta.email}
          website={tarjeta.website}
          websiteUrl={tarjeta.websiteUrl}
          whatsappUrl={tarjeta.whatsappUrl}
          photoUrl={tarjeta.photoUrl}
        />
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. SECCIÓN SEMBLANZA EJECUTIVA Y CITA
         ───────────────────────────────────────────────────────────── */}
      {(tarjeta.semblanzaP1 || tarjeta.semblanzaP2 || tarjeta.citaTexto) && (
        <section className="w-full max-w-6xl mx-auto px-5 sm:px-8 py-10">
          <div className="space-y-8">

            <div className="border-b border-carbon/15 pb-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-trebol uppercase tracking-wider block">Trayectoria & Experiencia</span>
                <h2 className="text-2xl sm:text-3xl font-black text-carbon">Semblanza Ejecutiva</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

              <div className="md:col-span-7 space-y-4 text-base text-carbon/80 font-light leading-relaxed font-sans">
                {tarjeta.semblanzaP1 && <p>{tarjeta.semblanzaP1}</p>}
                {tarjeta.semblanzaP2 && <p>{tarjeta.semblanzaP2}</p>}
              </div>

              {/* Cita en bloque destacado */}
              {tarjeta.citaTexto && (
                <div className="md:col-span-5 bg-white border border-neutral-200 rounded-3xl p-7 relative">
                  <Quote size={28} className="text-trebol mb-2 opacity-50" />
                  <p className="text-xs font-serif italic text-carbon/90 leading-relaxed mb-5">
                    "{tarjeta.citaTexto}"
                  </p>

                  <Link
                    href="/agenda"
                    className="w-full py-4 px-5 rounded-2xl bg-trebol text-white font-bold text-xs font-mono uppercase tracking-wider hover:bg-carbon transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar size={15} />
                    <span>Agendar Cita 1a1</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              )}

            </div>

          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          3. SECCIÓN PUBLICACIONES & BLOGS (SOLO SI HAY PUBLICACIONES EN LA BASE DE DATOS)
         ───────────────────────────────────────────────────────────── */}
      {blogs.length > 0 && (
        <section className="w-full max-w-6xl mx-auto px-5 sm:px-8 py-12">
          <div className="space-y-6">

            <div className="border-b border-carbon/15 pb-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-trebol uppercase tracking-wider block">Insights & Publicaciones</span>
                <h2 className="text-2xl sm:text-3xl font-black text-carbon">Publicaciones Recientes</h2>
              </div>
              <Link
                href="/insights/blog"
                className="inline-flex items-center gap-1 text-xs font-mono font-bold text-trebol hover:text-carbon transition-colors"
              >
                <span>Ver todos los artículos</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((art) => (
                <Link key={art.slug || art.id} href={`/insights/blog/${art.slug}`}>
                  <div className="group bg-white rounded-3xl border border-neutral-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-trebol transition-all duration-300 flex flex-col h-full cursor-pointer">
                    <div className="relative h-44 overflow-hidden bg-neutral-100">
                      {art.imagen || art.imagenUrl ? (
                        <img
                          src={art.imagen || art.imagenUrl}
                          alt={art.titulo}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-neutral-100 flex items-center justify-center text-carbon/30">
                          <BookOpen size={32} />
                        </div>
                      )}
                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-white/95 text-trebol px-3 py-1 rounded-full border border-neutral-200 shadow-sm">
                          {art.categoria || 'Artículos'}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs font-mono text-carbon/40">
                          <Clock size={12} />
                          <span>{art.tiempo || art.tiempoLectura || '4 min'} lectura</span>
                        </div>

                        <h3 className="text-xl font-bold text-carbon group-hover:text-trebol transition-colors leading-snug">
                          {art.titulo}
                        </h3>

                        <p className="text-xs sm:text-sm text-carbon/70 font-light leading-relaxed line-clamp-2">
                          {art.extracto || art.subtitulo}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-mono font-bold text-trebol">
                        <span>Leer artículo</span>
                        <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>
      )}

    </main>
  );
}
