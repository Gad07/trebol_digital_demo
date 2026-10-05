import { notFound } from 'next/navigation';
import BusinessCard3D from '../../../components/BusinessCard3D';
import Link from 'next/link';
import { 
  ArrowUpRight, Calendar, Quote, BookOpen, Clock, 
  Target, TrendingUp, Layers, Bot, Send, CheckCircle2
} from 'lucide-react';
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

  // Servicios por defecto si no están configurados en BD
  const defaultServices = [
    {
      titulo: 'Estrategia',
      descripcion: 'Marketing digital · Branding · Desarrollo Empresarial · Posicionamiento',
      icon: 'target'
    },
    {
      titulo: 'Performance',
      descripcion: 'Campañas · Leads · Conversión · KPIs',
      icon: 'trending'
    },
    {
      titulo: 'Proyectos digitales',
      descripcion: 'CRM · Automatización · Gestión de equipos · Agencias',
      icon: 'layers'
    },
    {
      titulo: 'IA para tu negocio',
      descripcion: 'Uso y aplicación · Automatizaciones · Gestión con ética · Enfoque de aplicación',
      icon: 'ia'
    }
  ];

  const serviciosList = (Array.isArray(tarjeta.servicios) && tarjeta.servicios.length > 0)
    ? tarjeta.servicios
    : defaultServices;

  return (
    <main className="min-h-screen bg-hueso text-carbon font-sans selection:bg-trebol selection:text-white flex flex-col justify-between">
      
      {/* ─────────────────────────────────────────────────────────────
          01 — HERO / PRIMERA IMPRESIÓN DINÁMICA
         ───────────────────────────────────────────────────────────── */}
      <section className="w-full max-w-6xl mx-auto px-5 sm:px-8 pt-28 sm:pt-36 pb-12 flex flex-col items-center justify-center">
        <BusinessCard3D
          firstName={tarjeta.firstName}
          lastName={tarjeta.lastName}
          title={tarjeta.title}
          company={tarjeta.company}
          bio={tarjeta.bio}
          experienciaBadge={tarjeta.experienciaBadge}
          pilaresTags={tarjeta.pilaresTags}
          phone={tarjeta.phone}
          email={tarjeta.email}
          website={tarjeta.website}
          websiteUrl={tarjeta.websiteUrl}
          whatsappUrl={tarjeta.whatsappUrl}
          linkedinUrl={tarjeta.linkedinUrl}
          portfolioUrl={tarjeta.portfolioUrl || tarjeta.portfolio_url || '/casos-de-exito'}
          showPortfolio={tarjeta.showPortfolio !== undefined ? Boolean(tarjeta.showPortfolio) : (tarjeta.show_portfolio !== undefined ? Boolean(tarjeta.show_portfolio) : true)}
          photoUrl={tarjeta.photoUrl}
        />
      </section>

      {/* ─────────────────────────────────────────────────────────────
          PRESENTACIÓN & ENFOQUE
         ───────────────────────────────────────────────────────────── */}
      <section id="presentacion" className="w-full max-w-6xl mx-auto px-5 sm:px-8 py-12 scroll-mt-24 border-t border-carbon/10">
        <div className="space-y-8">

          <div className="border-b border-carbon/15 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-mono font-bold text-trebol uppercase tracking-wider block">
                Trayectoria & Enfoque Ejecutivo
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-carbon tracking-tight">
                Presentación
              </h2>
            </div>
            <span className="text-xs font-mono text-carbon/50">
              {tarjeta.company || 'Trébol Digital'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Párrafos de Semblanza */}
            <div className="md:col-span-7 space-y-4 text-base sm:text-lg text-carbon/85 font-light leading-relaxed font-sans">
              {tarjeta.semblanzaP1 && <p>{tarjeta.semblanzaP1}</p>}
              {tarjeta.semblanzaP2 && <p>{tarjeta.semblanzaP2}</p>}
              {tarjeta.semblanzaP3 && <p>{tarjeta.semblanzaP3}</p>}
            </div>

            {/* Cita de Enfoque Destacado & Agenda */}
            <div className="md:col-span-5 bg-white border border-neutral-200/90 rounded-[2rem] p-7 sm:p-8 relative shadow-sm space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-trebol/10 flex items-center justify-center text-trebol">
                <Quote size={24} />
              </div>

              <div>
                <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-trebol block mb-2">
                  Visión & Metodología
                </span>
                <p className="text-base sm:text-lg font-serif italic text-carbon leading-relaxed">
                  "{tarjeta.enfoqueDestacado || tarjeta.citaTexto || 'Mi enfoque: entender el negocio primero. Después, construir el marketing que necesita.'}"
                </p>
              </div>

              <div className="pt-2 border-t border-neutral-100">
                <Link
                  href="/agenda"
                  className="w-full py-4 px-5 rounded-2xl bg-trebol text-white font-bold text-xs font-mono uppercase tracking-wider hover:bg-carbon transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Calendar size={16} />
                  <span>Agendar Cita</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          ¿EN QUÉ PUEDO AYUDARTE? / SERVICIOS & ESPECIALIDADES
         ───────────────────────────────────────────────────────────── */}
      <section className="w-full max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="space-y-8">

          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-5xl font-black text-carbon tracking-tight">
              ¿En qué puedo ayudarte?
            </h2>
            <p className="text-sm sm:text-base text-carbon/70 font-light">
              Acompañamiento estratégico, metodológico y técnico para detonar el crecimiento de tu empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {serviciosList.map((item, index) => {
              const iconsMap = {
                0: <Target size={24} className="text-trebol" />,
                1: <TrendingUp size={24} className="text-trebol" />,
                2: <Layers size={24} className="text-trebol" />,
                3: <Bot size={24} className="text-trebol" />
              };
              const itemIcon = iconsMap[index % 4];

              return (
                <div
                  key={index}
                  className="bg-white border border-neutral-200/90 rounded-[2.2rem] p-7 sm:p-8 hover:border-trebol hover:shadow-lg transition-all duration-300 group flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-hueso border border-neutral-200 flex items-center justify-center group-hover:bg-trebol/10 transition-colors">
                      {itemIcon}
                    </div>

                    <h3 className="text-2xl font-black text-carbon group-hover:text-trebol transition-colors tracking-tight">
                      {item.titulo}
                    </h3>

                    <p className="text-sm sm:text-base text-carbon/80 font-light leading-relaxed">
                      {item.descripcion}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-mono font-bold text-trebol">
                    <span>Especialidad Trébol</span>
                    <CheckCircle2 size={16} />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          ¿TIENES UN RETO DE MARKETING? / LLAMADO A LA ACCIÓN & AGENDA
         ───────────────────────────────────────────────────────────── */}
      <section className="w-full max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="bg-white border border-neutral-200/90 rounded-[2.5rem] p-8 sm:p-12 lg:p-14 shadow-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <h2 className="text-3xl sm:text-5xl font-black text-carbon tracking-tight leading-tight">
                {tarjeta.ctaTitulo || '¿Tienes un reto de marketing?'}
              </h2>

              <p className="text-base sm:text-lg text-carbon/80 font-light leading-relaxed max-w-xl">
                {tarjeta.ctaSubtitulo || 'Tengamos una sesión sin costo. Si buscas fortalecer tu marca, generar más oportunidades para tu negocio o acelerar con IA, conversemos hoy mismo.'}
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
              
              {/* Botón Agendar Cita */}
              <Link
                href="/agenda"
                className="py-4 px-6 rounded-2xl bg-trebol text-white font-bold text-xs font-mono uppercase tracking-wider hover:bg-carbon transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Calendar size={18} />
                <span>Agendar Sesión sin Costo</span>
                <ArrowUpRight size={16} />
              </Link>

              {/* Botón WhatsApp */}
              <a
                href={tarjeta.whatsappUrl || `https://wa.me/${(tarjeta.phone || '').replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 px-6 rounded-2xl bg-carbon text-white font-bold text-xs font-mono uppercase tracking-wider hover:bg-trebol transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Send size={18} />
                <span>Contáctame por WhatsApp</span>
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECCIÓN PUBLICACIONES & BLOGS
         ───────────────────────────────────────────────────────────── */}
      {blogs.length > 0 && (
        <section className="w-full max-w-6xl mx-auto px-5 sm:px-8 py-12 border-t border-carbon/15">
          <div className="space-y-6">

            <div className="border-b border-carbon/15 pb-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-trebol uppercase tracking-wider block">
                  Insights & Publicaciones
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-carbon">
                  Publicaciones Recientes
                </h2>
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
