import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Quote, User, Award, Calendar, Clock, BookOpen, ChevronRight } from 'lucide-react';
import Contact from '@/components/Contact';
import BlogVideoPlayer from '@/components/BlogVideoPlayer';
import { buildMetadata } from '@/lib/seo';
import { articulos, resolveArticulo } from '@/lib/articulos';

// ─────────────────────────────────────────────────────────────
// DB-DRIVEN TEMPLATE: renders an article from blogs_db.json
// ─────────────────────────────────────────────────────────────
function TemplateDynamic({ art }) {
  const content = art.content || {};
  return (
    <article className="max-w-[850px] mx-auto px-6 md:px-12 pt-36 pb-24 relative z-10">
      <div className="space-y-10">
        <BackLink />

        {/* Hero image */}
        {art.imagen && (
          <div className="rounded-[2.5rem] overflow-hidden aspect-video shadow-2xl border border-white/60 bg-white">
            <img src={art.imagen} alt={art.titulo} className="w-full h-full object-cover" />
          </div>
        )}

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
          <span className="px-3 py-1 rounded-full bg-trebol/10 text-trebol border border-trebol/20 font-bold uppercase tracking-wider">{art.categoria}</span>
          {art.destacado && <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 border border-amber-200 font-bold uppercase">★ Destacado</span>}
          <span className="text-carbon/40 flex items-center gap-1"><Clock size={12} /> {art.tiempo} lectura</span>
          <span className="text-carbon/40 flex items-center gap-1"><Calendar size={12} /> {art.fecha}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-carbon leading-[1.05] tracking-tight">{art.titulo}</h1>
        <p className="text-lg md:text-xl text-carbon/70 font-light leading-relaxed">{art.extracto}</p>

        {/* Introducción */}
        {content.introduccion && (
          <p className="text-base md:text-lg text-carbon/85 leading-[1.9] font-light border-l-4 border-trebol pl-6 italic bg-trebol/5 py-4 rounded-r-2xl">
            {content.introduccion}
          </p>
        )}

        {/* Secciones */}
        {(content.secciones || []).map((sec, i) => (
          <div key={i} className="space-y-4 pt-4">
            {sec.subtitulo && (
              <h2 className="text-2xl md:text-3xl font-black text-carbon tracking-tight border-t border-carbon/10 pt-8">{sec.subtitulo}</h2>
            )}
            {sec.texto && (
              <p className="text-base md:text-lg text-carbon/80 leading-[1.85] font-light">{sec.texto}</p>
            )}
            {sec.fraseDestacada && (
              <blockquote className="border-l-4 border-trebol bg-trebol/5 px-6 py-5 rounded-r-2xl my-6">
                <p className="text-lg font-semibold text-carbon italic leading-relaxed">&ldquo;{sec.fraseDestacada}&rdquo;</p>
              </blockquote>
            )}
            {(sec.bullets || []).length > 0 && (
              <ul className="space-y-3 pl-2">
                {sec.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-3 text-carbon/85 text-base font-light">
                    <span className="text-trebol font-black text-base mt-0.5 shrink-0">✓</span>
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Conclusión */}
        {content.conclusion && (
          <div className="bg-carbon rounded-[2.5rem] p-8 md:p-12 text-hueso space-y-3 my-10 shadow-xl">
            <p className="text-[10px] font-bold uppercase tracking-widest text-trebol font-mono">Conclusión</p>
            <p className="text-base md:text-lg leading-relaxed opacity-90 font-light">{content.conclusion}</p>
          </div>
        )}

        {/* CTA */}
        {content.ctaText && content.ctaUrl && (
          <div className="pt-6">
            <a
              href={content.ctaUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-trebol text-white font-black text-sm px-8 py-4 rounded-full hover:bg-carbon transition-all shadow-xl shadow-trebol/20"
            >
              <span>{content.ctaText}</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

function BackLink({ light }) {
  return (
    <Link
      href="/insights/blog"
      className={`inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors font-sans ${
        light ? 'text-white/60 hover:text-white' : 'text-gris hover:text-carbon'
      }`}
    >
      <ArrowLeft size={12} strokeWidth={2.5} />
      Volver al blog
    </Link>
  );
}

function Folio({ page, side = 'left' }) {
  return (
    <div className={`flex items-center gap-4 ${side === 'right' ? 'justify-end' : ''}`}>
      <span className="h-px w-8 bg-carbon" />
      <span className="text-[10px] font-mono tracking-widest text-gris uppercase">
        {side === 'left' ? `Pág. ${page}` : `${page} · Trébol`}
      </span>
    </div>
  );
}

function SectionLabel({ text }) {
  return (
    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-trebol border border-trebol/30 px-3 py-1 font-sans rounded-full">
      {text}
    </span>
  );
}

function ArticleHeader({ art }) {
  return (
    <section className="max-w-[900px] mx-auto px-6 md:px-12 pt-36 pb-8 text-center relative z-10">
      <div className="mb-4">
        <BackLink />
      </div>
      <div className="mb-4">
        <SectionLabel text={art.categoria} />
      </div>
      <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-black text-carbon leading-[1.1] tracking-tight mb-6">
        {art.titulo}
      </h1>
      <div className="flex items-center justify-center gap-4 text-xs text-gris font-sans mb-8">
        <span>{art.fecha}</span>
        <span className="w-1 h-1 bg-gris rounded-full" />
        <span>{art.tiempo} de lectura</span>
        <span className="w-1 h-1 bg-gris rounded-full" />
        <span>Por {art.autor}</span>
      </div>
      {art.imagen && (
        <div className="relative aspect-video w-full overflow-hidden rounded-[2.5rem] border border-white/60 shadow-xl bg-white mb-10">
          <img
            src={art.imagen}
            alt={art.titulo}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="border-b border-carbon/10 pb-2" />
    </section>
  );
}

/* ─── 1. PLANTILLA GENERAL ──────────────────────────────────────── */
function TemplateGeneral({ art }) {
  return (
    <article className="bg-hueso relative">
      <ArticleHeader art={art} />

      <div className="max-w-[900px] mx-auto px-6 md:px-12 pb-24 relative z-10">
        <div>
          {/* Excerpt editorial lead paragraph */}
          <div className="font-serif text-xl md:text-2xl text-carbon/80 italic leading-relaxed text-justify mb-10 pb-8 border-b border-carbon/10">
            {art.extracto}
          </div>

          <div className="space-y-6">
            {art.contenido.map((bloque, i) => {
              if (bloque.tipo === 'parrafo') {
                const isFirst = i === 0;
                return (
                  <p
                    key={i}
                    className="text-[16px] md:text-[17px] text-carbon/85 font-light leading-[1.8] text-justify mb-6 font-sans"
                  >
                    {isFirst && (
                      <span className="float-left font-serif text-[5rem] font-black text-trebol leading-[0.75] mr-3 mt-1">
                        {bloque.texto.charAt(0)}
                      </span>
                    )}
                    {isFirst ? bloque.texto.slice(1) : bloque.texto}
                  </p>
                );
              }
              if (bloque.tipo === 'subtitulo') {
                return (
                  <h2
                    key={i}
                    className="font-serif text-2xl md:text-4xl font-black text-carbon tracking-tight mt-12 mb-6 leading-tight border-t-2 border-carbon pt-6"
                  >
                    {bloque.texto}
                  </h2>
                );
              }
              if (bloque.tipo === 'pullquote') {
                return (
                  <div key={i} className="my-14 grid md:grid-cols-[1fr_2fr] gap-0 border border-white/70 bg-white/50 backdrop-blur-xl rounded-[2.5rem] shadow-[0_8px_32px_rgba(0,0,0,0.03)] overflow-hidden">
                    <div className="bg-trebol/10 p-8 md:p-12 flex items-center justify-center border-r border-carbon/5">
                      <Quote size={48} className="text-trebol" strokeWidth={1.5} />
                    </div>
                    <div className="p-8 md:p-12">
                      <p className="font-serif text-xl md:text-2xl font-bold text-carbon leading-snug italic mb-4">
                        &ldquo;{bloque.texto}&rdquo;
                      </p>
                      {bloque.autor && (
                        <p className="text-[10px] text-gris font-bold uppercase tracking-[0.2em] font-sans">
                          — {bloque.autor}
                        </p>
                      )}
                    </div>
                  </div>
                );
              }
              if (bloque.tipo === 'dato') {
                return (
                  <div key={i} className="my-14 bg-white/50 backdrop-blur-xl border border-white/60 rounded-[2.5rem] shadow-[0_8px_32px_rgba(0,0,0,0.03)] overflow-hidden">
                    <div className="grid md:grid-cols-[1fr_1.5fr]">
                      <div className="p-10 md:p-14 flex flex-col justify-center border-r border-carbon/10 bg-trebol/5">
                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-carbon mb-2 font-sans">
                          {bloque.label}
                        </span>
                        <p className="text-6xl md:text-7xl font-black text-trebol leading-none font-serif">
                          {bloque.valor}
                        </p>
                      </div>
                      <div className="p-10 md:p-14 flex items-center">
                        <p className="text-base text-carbon/70 font-light leading-relaxed font-sans">
                          {bloque.texto}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }
              if (bloque.tipo === 'imagen_break') {
                return (
                  <div key={i} className="my-14">
                    <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.03)]">
                      <span className="absolute top-0 right-0 bg-carbon text-white text-[10px] px-3 py-1.5 font-mono z-10 rounded-bl-3xl">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <img src={bloque.url} alt={bloque.alt} className="w-full h-64 md:h-[450px] object-cover" />
                    </div>
                    <p className="text-[10px] text-gris font-mono mt-3 uppercase tracking-widest text-right mr-4">
                      Fig. {String(i + 1).padStart(2, '0')} — {bloque.alt}
                    </p>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>

        <div className="mt-20 pt-6 border-t border-carbon/10 flex justify-between items-center">
          <Folio page={9} side="left" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gris font-sans">
            Trébol Digital Magazine
          </span>
        </div>
      </div>
    </article>
  );
}

/* ─── 2. PLANTILLA VIDEO ────────────────────────────────────────── */
function TemplateVideo({ art }) {
  return (
    <article className="bg-hueso relative">
      <ArticleHeader art={art} />

      <div className="max-w-[900px] mx-auto px-6 md:px-12 pb-32 relative z-10">
        <div>
          {/* Excerpt editorial lead paragraph */}
          <div className="font-serif text-xl md:text-2xl text-carbon/80 italic leading-relaxed text-justify mb-10 pb-8 border-b border-carbon/10">
            {art.extracto}
          </div>

          <BlogVideoPlayer imagen={art.imagen} titulo={art.titulo} />

          {/* Rest of Content */}
          <div className="space-y-8">
            {art.contenido.map((bloque, i) => {
              if (bloque.tipo === 'parrafo') {
                return (
                  <p key={i} className="text-[16px] md:text-[17px] text-carbon/85 font-light leading-[1.8] text-justify font-sans">
                    {bloque.texto}
                  </p>
                );
              }
              if (bloque.tipo === 'paso') {
                return (
                  <div key={i} className="border-t border-carbon/10 py-10">
                    <div className="grid md:grid-cols-[100px_1fr] gap-6">
                      <div className="text-right">
                        <span className="font-serif text-6xl font-black text-trebol/25 leading-none">
                          {String(bloque.numero).padStart(2, '0')}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-carbon mb-3 uppercase tracking-wide font-sans">
                          {bloque.titulo}
                        </h3>
                        <p className="text-[16px] text-carbon/80 font-light leading-[1.8] text-justify font-sans mb-4">
                          {bloque.texto}
                        </p>
                        {bloque.checklist && (
                          <ul className="space-y-2.5 border-l-2 border-trebol pl-5">
                            {bloque.checklist.map((item, ci) => (
                              <li key={ci} className="flex items-start gap-2.5 text-sm text-carbon/80 font-light font-sans">
                                <span className="text-trebol shrink-0 mt-1 text-[8px]">▪</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                );
              }
              if (bloque.tipo === 'checklist') {
                return (
                  <div key={i} className="bg-white/50 backdrop-blur-xl border border-white/60 p-8 rounded-[2.5rem] shadow-[0_8px_32px_rgba(0,0,0,0.03)] my-8">
                    {bloque.titulo && (
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-trebol mb-6 border-b border-carbon/5 pb-2.5 font-sans">
                        {bloque.titulo}
                      </h4>
                    )}
                    <div className="grid md:grid-cols-2 gap-x-6 gap-y-3">
                      {bloque.items.map((item, ci) => (
                        <div key={ci} className="flex items-start gap-2.5 text-sm text-carbon/80 font-light font-sans">
                          <div className="w-4 h-4 rounded-full border border-trebol flex items-center justify-center shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-trebol" />
                          </div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>

        <div className="mt-20 pt-6 border-t border-carbon/10 flex justify-between items-center">
          <Folio page={13} side="left" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gris font-sans">
            Trébol Digital Magazine
          </span>
        </div>
      </div>
    </article>
  );
}

/* ─── 3. PLANTILLA AUTOR ────────────────────────────────────────── */
function TemplateAutor({ art }) {
  return (
    <article className="bg-hueso relative">
      <div className="max-w-[900px] mx-auto px-6 md:px-12 pt-24 pb-32 relative z-10">
        <div className="flex justify-between items-end border-b border-carbon/10 pb-3 mb-12">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gris font-sans">
            Magazine / Firma Invitada
          </span>
          <Folio page={20} side="right" />
        </div>

        <div className="mb-10">
          <BackLink />
        </div>

        {/* Header entrevista — estilo editorial B&W */}
        <div className="border-b border-carbon/10 pb-8 mb-16">
          <div className="flex items-center gap-4 text-sm text-gris mb-4 font-sans">
            <span className="font-mono text-[10px] tracking-widest uppercase">{art.tiempo} de lectura</span>
            <span className="w-1 h-1 bg-gris rounded-full" />
            <span>{art.fecha}</span>
            <span className="w-1 h-1 bg-gris rounded-full" />
            <span>Por {art.autor}</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-black text-carbon leading-[0.95] tracking-tight">
            {art.titulo}
          </h1>
        </div>

        {/* Guest portrait cards layout - Home style rounded */}
        <div className="grid md:grid-cols-[40%_1fr] gap-0 mb-16 border border-white/60 bg-white/50 backdrop-blur-xl rounded-[2.5rem] shadow-[0_8px_32px_rgba(0,0,0,0.03)] overflow-hidden">
          <div className="relative border-r border-carbon/10 aspect-[3/4] md:aspect-auto">
            <img
              src={art.entrevistado?.foto || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"}
              alt={art.entrevistado?.nombre || art.autor}
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-trebol border border-trebol/30 px-3 py-1 font-sans rounded-full mb-3 self-start">
              Firma del Experto
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-black text-carbon mb-2 leading-none">
              {art.entrevistado?.nombre || art.autor}
            </h3>
            <p className="text-xs text-gris font-light mb-6 font-sans tracking-wide">
              {art.entrevistado?.rol || "Especialista en Estrategia Digital"}
            </p>
            <div className="w-12 h-1 bg-trebol mb-4" />
            <p className="text-base text-carbon/75 font-light leading-relaxed text-justify font-sans">
              {art.extracto}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-0">
          {art.contenido.map((bloque, i) => {
            if (bloque.tipo === 'intro') {
              return (
                <p key={i} className="text-xl md:text-2xl text-carbon font-light leading-snug mb-14 text-justify font-sans border-l-4 border-trebol pl-6">
                  {bloque.texto}
                </p>
              );
            }
            if (bloque.tipo === 'pregunta') {
              return (
                <div key={i} className="py-6 border-t border-carbon/10">
                  <div className="flex gap-4 items-start">
                    <span className="text-[10px] font-bold text-trebol shrink-0 w-8 pt-2 font-sans uppercase tracking-widest">
                      Ref.
                    </span>
                    <p className="font-serif text-xl md:text-2xl font-black text-carbon leading-tight">
                      {bloque.texto}
                    </p>
                  </div>
                </div>
              );
            }
            if (bloque.tipo === 'respuesta') {
              return (
                <div key={i} className="pb-10 pl-12 md:pl-16">
                  <div className="flex gap-4 items-start">
                    <span className="text-[10px] font-bold text-carbon shrink-0 w-8 pt-1 font-sans uppercase tracking-widest">
                      Det.
                    </span>
                    <p className="text-[16px] text-carbon/85 font-light leading-[1.8] text-justify font-sans">
                      {bloque.texto}
                    </p>
                  </div>
                </div>
              );
            }
            if (bloque.tipo === 'pullquote') {
              return (
                <div key={i} className="my-14 bg-white/50 backdrop-blur-xl border border-white/60 rounded-[2.5rem] shadow-[0_8px_32px_rgba(0,0,0,0.03)] overflow-hidden">
                  <div className="p-10 md:p-14 text-center">
                    <Quote size={40} className="text-trebol mx-auto mb-4" strokeWidth={1} />
                    <p className="font-serif text-xl md:text-3xl font-bold leading-snug italic max-w-2xl mx-auto">
                      &ldquo;{bloque.texto}&rdquo;
                    </p>
                    {bloque.autor && (
                      <p className="text-[10px] text-trebol font-bold mt-4 uppercase tracking-[0.25em] font-sans">
                        — {bloque.autor}
                      </p>
                    )}
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>

        <div className="mt-20 pt-6 border-t border-carbon/10 flex justify-between items-center">
          <Folio page={21} side="left" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gris font-sans">
            Trébol Digital Magazine
          </span>
        </div>
      </div>
    </article>
  );
}

/* ─── 4. PLANTILLA LOGROS ───────────────────────────────────────── */
function TemplateLogros({ art }) {
  return (
    <article className="bg-hueso relative">
      <ArticleHeader art={art} />

      <div className="max-w-[900px] mx-auto px-6 md:px-12 pb-32 relative z-10">
        <div>
          <div className="font-serif text-xl md:text-2xl text-carbon/80 italic leading-relaxed text-justify mb-10 pb-8 border-b border-carbon/10">
            {art.extracto}
          </div>

          {/* Timeline vertical elegante para logros */}
          <div className="relative">
            <div className="absolute left-[36px] md:left-[56px] top-0 bottom-0 w-px bg-carbon/25" />

            <div className="space-y-16">
              {art.contenido.map((bloque, i) => {
                if (bloque.tipo === 'parrafo') {
                  return (
                    <div key={i} className="relative pl-24 md:pl-36">
                      <div className="absolute left-[30px] md:left-[50px] top-3 w-3 h-3 bg-trebol border-2 border-hueso" />
                      <p className="text-[16px] text-carbon/85 font-light leading-[1.8] text-justify font-sans">
                        {bloque.texto}
                      </p>
                    </div>
                  );
                }
                if (bloque.tipo === 'item') {
                  return (
                    <div key={i} className="relative pl-24 md:pl-36 group/timeline">
                      <div className="absolute left-0 top-0 font-serif text-4xl md:text-6xl font-black text-trebol leading-none select-none w-16 md:w-24 text-center bg-white/70 border border-white rounded-3xl p-3 shadow-md">
                        {String(bloque.numero).padStart(2, '0')}
                      </div>
                      <div className="pt-2 md:pt-4 pl-4">
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <h3 className="text-2xl md:text-3xl font-black text-carbon leading-tight font-serif flex items-center gap-3">
                            <Award className="text-trebol" size={24} /> {bloque.titulo}
                          </h3>
                          {bloque.stat && (
                            <span className="shrink-0 text-[10px] font-bold text-white bg-trebol px-3.5 py-1.5 font-sans uppercase tracking-wider rounded-full shadow-[0_4px_12px_rgba(92,158,49,0.25)]">
                              {bloque.stat}
                            </span>
                          )}
                        </div>
                        <p className="text-[16px] text-carbon/80 font-light leading-[1.8] text-justify max-w-2xl font-sans mb-6">
                          {bloque.texto}
                        </p>

                        <div className="bg-white/50 backdrop-blur-xl border border-white/60 p-6 rounded-[2rem] shadow-sm max-w-xl mb-4">
                          <div className="flex justify-between items-center text-xs text-carbon/60 font-semibold mb-2 uppercase tracking-widest font-sans">
                            <span>Impacto estimado</span>
                            <span className="text-trebol font-bold">{bloque.stat || "100% éxito"}</span>
                          </div>
                          <div className="w-full h-2.5 bg-carbon/5 rounded-full overflow-hidden">
                            <div className="h-full bg-trebol rounded-full shadow-[0_0_10px_rgba(92,158,49,0.3)]" style={{ width: bloque.stat && bloque.stat.includes('%') ? bloque.stat.replace('%','') : '85%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>

        <div className="mt-24 pt-6 border-t border-carbon/10 flex justify-between items-center">
          <Folio page={17} side="left" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gris font-sans">
            Trébol Digital Magazine
          </span>
        </div>
      </div>
    </article>
  );
}

const templates = {
  feature: TemplateGeneral,
  guia: TemplateVideo,
  entrevista: TemplateAutor,
  listicle: TemplateLogros,
  dynamic: TemplateDynamic,
};

export const revalidate = 300;

export async function generateStaticParams() {
  const slugs = Object.keys(articulos);
  try {
    const { getBlogsFromDB } = await import('@/lib/db');
    const blogs = await getBlogsFromDB();
    for (const b of blogs || []) {
      if (b && b.slug && !slugs.includes(b.slug)) slugs.push(b.slug);
    }
  } catch (err) {
    console.warn('[Blog generateStaticParams Error]:', err.message);
  }
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const art = await resolveArticulo(slug);

  if (!art) {
    return buildMetadata({
      title: 'Artículo no encontrado | Trébol Digital',
      description: 'El artículo que buscas no existe o fue movido.',
      path: '/insights/blog',
      noindex: true,
    });
  }

  return buildMetadata({
    title: art.titulo,
    description: art.extracto,
    path: `/insights/blog/${slug}`,
    type: 'article',
    image: art.imagen
      ? { url: art.imagen, width: 1200, height: 630, alt: art.titulo }
      : undefined,
  });
}

export default async function ArticuloPage({ params }) {
  const { slug } = await params;
  const art = await resolveArticulo(slug);

  if (!art) {
    return (
      <main className="w-full bg-hueso min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-2xl font-black text-carbon">Artículo no encontrado</p>
          <Link href="/insights/blog" className="text-trebol font-bold hover:underline">← Volver al Blog</Link>
        </div>
      </main>
    );
  }

  // Si tiene content con secciones estructuradas, usa TemplateDynamic; sino usa la plantilla asignada
  const hasStructuredContent = Boolean(art.content && art.content.secciones && art.content.secciones.length > 0);
  const Template = hasStructuredContent ? TemplateDynamic : (templates[art.plantilla] || TemplateDynamic);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: art.titulo,
    description: art.extracto,
    image: art.imagen ? [art.imagen] : undefined,
    datePublished: art.created_at || undefined,
    author: { '@type': 'Person', name: art.autor || 'Trébol Digital' },
    publisher: {
      '@type': 'Organization',
      name: 'Trébol Digital',
      logo: { '@type': 'ImageObject', url: 'https://treboldigital.com.mx/images/TREBOL_01.png' },
    },
    mainEntityOfPage: `https://treboldigital.com.mx/insights/blog/${slug}`,
  };

  return (
    <main className="w-full bg-hueso min-h-screen relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Animated Green Ambient Light Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-40 left-0 w-[30rem] h-[30rem] bg-trebol/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-[28rem] h-[28rem] bg-trebol/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-40 left-10 w-[35rem] h-[35rem] bg-trebol/10 rounded-full blur-[130px]" />
      </div>

      <Template art={art} />

      <div className="max-w-[1100px] mx-auto px-6 md:px-12 pb-32 relative z-10">
        {/* Author bio */}
        <div className="bg-white/50 backdrop-blur-xl border border-white/60 p-8 md:p-10 rounded-[2.5rem] shadow-[0_8px_32px_rgba(0,0,0,0.03)] mb-12 relative overflow-hidden">
          <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-trebol/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 bg-carbon rounded-full flex items-center justify-center shrink-0 border border-carbon/10">
              <User size={24} className="text-trebol" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-trebol mb-1 font-sans">
                Sobre el autor
              </p>
              <p className="text-lg font-bold text-carbon font-serif">{art.autor}</p>
              {art.autorBio && (
                <p className="text-sm text-carbon/60 font-light mt-1 font-sans leading-relaxed">{art.autorBio}</p>
              )}
            </div>
          </div>
        </div>

        <Contact />
      </div>
    </main>
  );
}
