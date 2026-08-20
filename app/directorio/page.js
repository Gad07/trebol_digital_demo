'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Phone, Mail, Globe, Send, ArrowRight, UserCheck, Briefcase, 
  ArrowUpRight, Sparkles, BookOpen, Clock, User2
} from 'lucide-react';

export default function DirectorioPage() {
  const [tarjetas, setTarjetas] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cargar todo el personal / tarjetas ejecutivas desde MySQL
    fetch('/api/tarjetas')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setTarjetas(data);
        }
      })
      .catch((err) => console.error('Error al cargar directorio:', err))
      .finally(() => setLoading(false));

    // Cargar blogs / insights
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
          1. HEADER DEL DIRECTORIO EJECUTIVO
         ───────────────────────────────────────────────────────────── */}
      <section className="w-full max-w-6xl mx-auto px-5 sm:px-8 pt-28 sm:pt-36 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 text-trebol text-xs font-mono font-bold uppercase tracking-wider shadow-sm mb-4">
          <Sparkles size={14} />
          <span>Equipo & Liderazgo Trébol</span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-black text-carbon tracking-tight mb-4">
          Directorio <span className="text-trebol italic font-serif font-normal">Ejecutivo</span>
        </h1>
        
        <p className="text-base sm:text-xl text-carbon/70 font-light max-w-2xl mx-auto leading-relaxed">
          Conoce al equipo de consultores, estrategas e ingenieros detrás de Trébol Digital. Contacta directamente con nuestros especialistas.
        </p>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. GRILLA DE TODO EL PERSONAL (TARJETAS INDIVIDUALES)
         ───────────────────────────────────────────────────────────── */}
      <section className="w-full max-w-6xl mx-auto px-5 sm:px-8 pb-16">
        {loading ? (
          <div className="text-center py-20 font-mono text-xs text-carbon/60 space-y-3">
            <div className="w-8 h-8 border-2 border-trebol border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p>Cargando Directorio Ejecutivo...</p>
          </div>
        ) : tarjetas.length === 0 ? (
          <div className="text-center py-16 bg-white border border-neutral-200 rounded-3xl p-8 max-w-md mx-auto space-y-3">
            <User2 size={36} className="text-carbon/40 mx-auto" />
            <h3 className="text-lg font-bold text-carbon">Directorio Vacío</h3>
            <p className="text-xs font-mono text-carbon/60">No se encontraron perfiles registrados en la base de datos.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {tarjetas.map((person) => (
              <div 
                key={person.id || person.slug}
                className="bg-white border border-neutral-200/90 rounded-[2.5rem] p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-trebol transition-all duration-300 group"
              >
                <div className="space-y-6">
                  
                  {/* Foto Retrato & Datos Principales */}
                  <div className="flex flex-col sm:flex-row gap-5 items-start">
                    <div className="relative w-full sm:w-36 h-48 sm:h-44 rounded-2xl overflow-hidden shrink-0 border border-neutral-200 bg-neutral-100">
                      <img 
                        src={person.photoUrl || person.photo_url || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"}
                        alt={`${person.firstName || person.first_name} ${person.lastName || person.last_name}`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="space-y-2 flex-1">
                      <span className="text-[10px] font-mono font-bold text-trebol uppercase tracking-wider block">
                        {person.company || "TRÉBOL DIGITAL"}
                      </span>
                      
                      <h2 className="text-2xl sm:text-3xl font-black text-carbon leading-none">
                        {person.firstName || person.first_name} <span className="text-trebol italic font-serif font-normal">{person.lastName || person.last_name}</span>
                      </h2>

                      <p className="text-xs font-mono font-extrabold text-carbon/80 uppercase tracking-wider">
                        {person.title}
                      </p>

                      <p className="text-xs text-carbon/70 font-light leading-relaxed line-clamp-3 pt-1">
                        {person.bio}
                      </p>
                    </div>
                  </div>

                  {/* Filas de Contacto Rápido */}
                  <div className="space-y-2 pt-2 border-t border-neutral-100 font-mono text-xs">
                    {person.email && (
                      <a 
                        href={`mailto:${person.email}`}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-hueso hover:bg-neutral-200/70 transition-colors text-carbon"
                      >
                        <div className="flex items-center gap-2 truncate">
                          <Mail size={14} className="text-trebol shrink-0" />
                          <span className="truncate">{person.email}</span>
                        </div>
                        <ArrowRight size={12} className="text-carbon/40 shrink-0" />
                      </a>
                    )}

                    {person.phone && (
                      <a 
                        href={`tel:${person.phone}`}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-hueso hover:bg-neutral-200/70 transition-colors text-carbon"
                      >
                        <div className="flex items-center gap-2">
                          <Phone size={14} className="text-trebol shrink-0" />
                          <span>{person.phone}</span>
                        </div>
                        <ArrowRight size={12} className="text-carbon/40 shrink-0" />
                      </a>
                    )}
                  </div>

                </div>

                {/* Botones de Acción Sólidos */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <Link
                    href={`/directorio/${person.slug}`}
                    className="py-3 px-4 rounded-xl bg-trebol text-white font-bold text-xs font-mono uppercase tracking-wider hover:bg-carbon transition-colors flex items-center justify-center gap-1.5 cursor-pointer text-center"
                  >
                    <span>Ver Perfil</span>
                    <ArrowUpRight size={14} />
                  </Link>

                  <a
                    href={person.whatsappUrl || person.whatsapp_url || `https://wa.me/${(person.phone || '').replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl bg-carbon text-white font-bold text-xs font-mono uppercase tracking-wider hover:bg-trebol transition-colors flex items-center justify-center gap-1.5 cursor-pointer text-center"
                  >
                    <Send size={14} />
                    <span>WhatsApp</span>
                  </a>
                </div>

              </div>
            ))}
          </div>
        )}
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. SECCIÓN PUBLICACIONES RECIENTES
         ───────────────────────────────────────────────────────────── */}
      {blogs.length > 0 && (
        <section className="w-full max-w-6xl mx-auto px-5 sm:px-8 py-12 border-t border-carbon/15">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-trebol uppercase tracking-wider block">Insights & Publicaciones</span>
                <h2 className="text-2xl sm:text-3xl font-black text-carbon">Artículos Recientes</h2>
              </div>
              <Link
                href="/insights/blog"
                className="inline-flex items-center gap-1 text-xs font-mono font-bold text-trebol hover:text-carbon transition-colors"
              >
                <span>Ver todos los artículos</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogs.map((art) => (
                <Link key={art.slug || art.id} href={`/insights/blog/${art.slug}`}>
                  <div className="group bg-white rounded-3xl border border-neutral-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-trebol transition-all duration-300 flex flex-col h-full cursor-pointer">
                    <div className="relative h-40 overflow-hidden bg-neutral-100">
                      {art.imagen || art.imagenUrl ? (
                        <img 
                          src={art.imagen || art.imagenUrl} 
                          alt={art.titulo} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                      ) : (
                        <div className="w-full h-full bg-neutral-100 flex items-center justify-center text-carbon/30">
                          <BookOpen size={30} />
                        </div>
                      )}
                    </div>
                    <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
                      <h3 className="text-base font-bold text-carbon group-hover:text-trebol transition-colors leading-snug line-clamp-2">
                        {art.titulo}
                      </h3>
                      <div className="flex items-center justify-between text-xs font-mono font-bold text-trebol pt-2 border-t border-neutral-100">
                        <span>Leer más</span>
                        <ArrowUpRight size={14} />
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
