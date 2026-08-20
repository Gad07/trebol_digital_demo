'use client';

import { useState, useEffect } from 'react';
import BusinessCard3D from '../../components/BusinessCard3D';
import Link from 'next/link';
import { ArrowUpRight, Calendar, Quote, BookOpen, Clock } from 'lucide-react';

export default function TarjetaPage() {
  const [tarjeta, setTarjeta] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Obtener la tarjeta por defecto (gadiel-palma o la primera en la DB)
    fetch('/api/tarjetas/gadiel-palma')
      .then((res) => res.json())
      .then((data) => {
        if (data && !data.error) {
          setTarjeta(data);
        } else {
          // Si no existe, intentar obtener la primera lista
          fetch('/api/tarjetas')
            .then((r) => r.json())
            .then((list) => {
              if (Array.isArray(list) && list.length > 0) {
                setTarjeta(list[0]);
              }
            });
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));

    // Obtener publicaciones
    fetch('/api/blogs')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setBlogs(data.slice(0, 3));
        }
      })
      .catch(() => setBlogs([]));
  }, []);

  return (
    <main className="min-h-screen bg-hueso text-carbon font-sans selection:bg-trebol selection:text-white flex flex-col justify-between">
      {/* ─────────────────────────────────────────────────────────────
          1. PERFIL PRINCIPAL DIRECTO SOBRE EL FONDO
         ───────────────────────────────────────────────────────────── */}
      <section className="w-full max-w-6xl mx-auto px-5 sm:px-8 pt-28 sm:pt-36 pb-12 flex flex-col items-center justify-center">
        <BusinessCard3D 
          firstName={tarjeta?.firstName || "GADIEL"}
          lastName={tarjeta?.lastName || "PALMA"}
          title={tarjeta?.title || "DESARROLLADOR & ESPECIALISTA EN IA"}
          company={tarjeta?.company || "TRÉBOL DIGITAL"}
          bio={tarjeta?.bio || "Desarrollador Web y Especialista en Inteligencia Artificial. Integramos aplicaciones web de alto rendimiento en Next.js, agentes conversacionales 24/7 y automatización inteligente para empresas."}
          phone={tarjeta?.phone || "+52 55 6492 9081"}
          email={tarjeta?.email || "gadiel@treboldigital.com"}
          website={tarjeta?.website || "treboldigital.com"}
          websiteUrl={tarjeta?.websiteUrl || "https://treboldigital.com"}
          whatsappUrl={tarjeta?.whatsappUrl || "https://wa.me/525564929081?text=Hola%20Gadiel,%20vi%20tu%20perfil%20y%20me%20gustar%C3%ADa%20platicar."}
          photoUrl={tarjeta?.photoUrl || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=95"}
        />
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. SECCIÓN SEMBLANZA EJECUTIVA & CITA DE AGENDAMIENTO
         ───────────────────────────────────────────────────────────── */}
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
              <p>
                {tarjeta?.semblanzaP1 || "Gadiel Palma es Desarrollador Web y Especialista en Inteligencia Artificial en Trébol Digital. Ha diseñado e implementado arquitecturas serverless en Next.js, agentes conversacionales 24/7 y soluciones de automatización inteligente."}
              </p>
              <p>
                {tarjeta?.semblanzaP2 || "Su enfoque combina ingeniería de software de alto rendimiento, optimización de velocidad de carga y experiencia de usuario fluida orientada a resultados de negocio."}
              </p>
            </div>

            {/* Cita en bloque destacado */}
            <div className="md:col-span-5 bg-white border border-neutral-200 rounded-3xl p-7 relative">
              <Quote size={28} className="text-trebol mb-2 opacity-50" />
              <p className="text-xs font-serif italic text-carbon/90 leading-relaxed mb-5">
                "{tarjeta?.citaTexto || "La ingeniería de software y la inteligencia artificial unidas transforman ideas complejas en experiencias digitales de alto impacto."}"
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

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. SECCIÓN PUBLICACIONES & BLOGS (SOLO SI EXISTEN REGISTROS)
         ───────────────────────────────────────────────────────────── */}
      {!loading && blogs.length > 0 && (
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
