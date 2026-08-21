'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Download, ArrowUpRight, FileText, Table, BookOpen, CheckCircle2, Sparkles, FileSpreadsheet, Check, Share2, Eye, Filter } from 'lucide-react';
import Contact from '@/components/Contact';

const recursos = [
  {
    icon: Table,
    tipo: 'Plantilla',
    formato: '.XLSX',
    descargas: '1,420 descargas',
    titulo: 'Calendario Editorial Mensual',
    desc: 'Organiza todo tu contenido del mes en un sistema simple y efectivo. Incluye columnas para canal, formato, tema, copy y estado.',
    tags: ['Marketing', 'Contenido', 'Redes'],
    color: '#84C638',
    bg: 'bg-trebol/10',
  },
  {
    icon: BookOpen,
    tipo: 'Guía Práctica',
    formato: '.PDF',
    descargas: '2,100 descargas',
    titulo: 'Cómo Usar ChatGPT en tu Empresa',
    desc: 'Guía de 30 páginas con prompts probados, casos de uso reales y un plan de implementación por área de negocio.',
    tags: ['IA', 'Productividad', 'Prompts'],
    color: '#84C638',
    bg: 'bg-trebol/10',
  },
  {
    icon: CheckCircle2,
    tipo: 'Checklist',
    formato: '.NOTION',
    descargas: '980 descargas',
    titulo: 'Auditoría de Presencia Digital',
    desc: '47 puntos de revisión para evaluar el estado actual de tu negocio digital: web, redes, SEO, contenido y conversión.',
    tags: ['Marketing', 'Diagnóstico'],
    color: '#84C638',
    bg: 'bg-trebol/10',
  },
  {
    icon: FileText,
    tipo: 'Framework',
    formato: '.PDF',
    descargas: '1,850 descargas',
    titulo: 'Plan Estratégico a 90 Días',
    desc: 'Marco de trabajo para definir objetivos, métricas, acciones y responsables. El mismo que usamos con nuestros clientes.',
    tags: ['Estrategia', 'Planeación'],
    color: '#84C638',
    bg: 'bg-trebol/10',
  },
  {
    icon: FileSpreadsheet,
    tipo: 'Dashboard',
    formato: '.SLIDES',
    descargas: '890 descargas',
    titulo: 'Reporte de Métricas Mensual',
    desc: 'Dashboard pre-armado para reportar tus KPIs de marketing digital de forma clara y profesional a tu equipo o clientes.',
    tags: ['Analytics', 'Reportes'],
    color: '#84C638',
    bg: 'bg-trebol/10',
  },
  {
    icon: BookOpen,
    tipo: 'E-book',
    formato: '.PDF',
    descargas: '3,200 descargas',
    titulo: 'Guía de IA para PYMEs 2026',
    desc: 'Un recorrido completo por las herramientas de IA más útiles para empresas pequeñas y medianas en México.',
    tags: ['IA', 'PYMEs', 'Herramientas'],
    color: '#84C638',
    bg: 'bg-trebol/10',
  },
];

export default function RecursosPage() {
  const [recursosList, setRecursosList] = useState(recursos);
  const [downloadedItem, setDownloadedItem] = useState(null);
  const [filter, setFilter] = useState('Todos');

  useEffect(() => {
    fetch('/api/recursos')
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setRecursosList(data);
      })
      .catch((e) => console.warn('Error al cargar recursos:', e));
  }, []);

  const handleDownload = (rec) => {
    setDownloadedItem(rec.titulo);
    if (rec.downloadUrl && rec.downloadUrl !== '#') {
      window.open(rec.downloadUrl, '_blank');
    }
    setTimeout(() => setDownloadedItem(null), 3500);
  };

  const categories = ['Todos', 'Marketing', 'IA', 'Estrategia', 'Analytics'];

  const filteredRecursos = filter === 'Todos'
    ? recursosList
    : recursosList.filter(r => (r.tags || []).some(t => t.toLowerCase() === filter.toLowerCase()));

  return (
    <main className="w-full bg-hueso text-carbon min-h-screen overflow-hidden">

      {/* ── HERO CON BADGE, TITULAR, SUBTÍTULO Y FEATURE PILLS ── */}
      <section className="relative w-full flex flex-col items-center justify-start pt-36 md:pt-44 pb-20 px-6 md:px-12 bg-hueso overflow-hidden">
        
        {/* Animated Green Ambient Light Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <motion.div 
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.8, 0.6] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -left-40 w-[32rem] h-[32rem] bg-trebol/20 rounded-full blur-[110px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-20 right-0 w-[28rem] h-[28rem] bg-trebol/10 rounded-full blur-[90px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.75, 0.5] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            className="absolute -bottom-20 left-1/3 w-[35rem] h-[35rem] bg-trebol/15 rounded-full blur-[120px]"
          />
        </div>

        {/* Headline Container with Floating Glass Badge & Hero Description */}
        <div className="relative w-full max-w-[1400px] mx-auto text-center flex flex-col items-center justify-center z-10 space-y-6">
          
          {/* Floating Glass Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -6 }}
            animate={{ opacity: 1, y: [0, -6, 0], rotate: -2 }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 0.8, delay: 0.2 },
              rotate: { duration: 0.8, delay: 0.2 }
            }}
            className="absolute -top-10 md:-top-12 lg:right-[14%] right-0 z-20"
          >
            <div className="bg-white/50 backdrop-blur-md px-6 py-3 border border-white/70 shadow-xl rounded-full text-sm md:text-lg text-carbon font-semibold">
              Plantillas y herramientas 100% gratuitas
            </div>
          </motion.div>

          {/* Massive Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 90, damping: 14 }}
            className="text-5xl md:text-8xl lg:text-[7.5rem] font-black text-carbon leading-[0.95] md:leading-[0.9] tracking-tighter"
          >
            Herramientas Listas para <br className="hidden md:block" />
            Usar en tu <span className="text-trebol">Empresa.</span>
          </motion.h1>

          {/* Hero Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-carbon/70 font-light max-w-3xl text-center leading-relaxed"
          >
            Plantillas, guías, frameworks y tableros en Excel, PDF y Notion diseñados para implementar hoy mismo. Sin costo.
          </motion.p>
        </div>
      </section>

      {/* ── GRID DE RECURSOS DESCARGABLES ── */}
      <section className="w-full bg-hueso pb-32 px-6 md:px-12 relative z-10 border-t border-carbon/10 pt-16">
        <div className="max-w-[1400px] mx-auto space-y-10">

          {/* Section Header Limpio */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-6 border-b border-neutral-200">
            <div>
              <span className="text-xs font-mono text-trebol font-bold uppercase tracking-widest block mb-2">
                RECURSOS DESCARGABLES
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-carbon tracking-tighter">
                Explora la Librería
              </h2>
            </div>
            <p className="text-sm font-mono text-carbon/60">
              Selecciona una categoría para filtrar
            </p>
          </div>

          {/* ── FILTROS ── */}
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setFilter(cat)}
                whileTap={{ scale: 0.96 }}
                className={`px-6 py-2.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-[0.15em] transition-all duration-200 cursor-pointer border ${
                  filter === cat
                    ? 'bg-carbon text-white border-carbon shadow-md'
                    : 'bg-white text-carbon/60 border-carbon/15 hover:border-carbon/40 hover:text-carbon'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecursos.map((rec, idx) => {
            const Icon = rec.icon || (rec.formato === '.XLSX' || rec.formato === '.SLIDES' ? Table : (rec.tipo === 'Guía Práctica' || rec.tipo === 'E-book' ? BookOpen : (rec.tipo === 'Checklist' ? CheckCircle2 : FileText)));
            return (
              <motion.div
                key={rec.id || rec.titulo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="group bg-white/80 backdrop-blur-2xl border border-white/90 rounded-[2.5rem] p-8 md:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:border-trebol/50 transition-all duration-500 flex flex-col justify-between relative overflow-hidden"
              >

                {/* Círculo decorativo esquina superior derecha (solo visible en hover) */}
                <div className="absolute -top-7 -right-7 w-[125px] h-[125px] rounded-full bg-trebol opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 pointer-events-none z-10 flex items-center justify-center">
                  <Icon size={34} className="text-white stroke-[1.8] -translate-x-3 translate-y-3" />
                </div>

                <div className="relative z-10">
                  {/* Formato Badge */}
                  <div className="flex items-center mb-6">
                    <span className="text-xs font-mono font-bold px-3.5 py-1.5 rounded-full bg-carbon text-white tracking-widest uppercase shadow-sm">
                      {rec.formato}
                    </span>
                  </div>

                  {/* Título */}
                  <h3 className="text-2xl font-black text-trebol mb-3 leading-tight">
                    {rec.titulo}
                  </h3>

                  {/* Descripción */}
                  <p className="text-sm md:text-base text-carbon/70 font-light leading-relaxed mb-6">
                    {rec.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {(rec.tags || []).map((tag) => (
                      <span key={tag} className="text-xs font-mono bg-hueso border border-neutral-200 text-carbon/70 font-medium px-3 py-1 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botón Descargar */}
                <button
                  onClick={() => handleDownload(rec)}
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-carbon group-hover:bg-trebol text-white font-bold px-6 py-4 rounded-2xl transition-all duration-300 text-sm shadow-md cursor-pointer whitespace-nowrap"
                >
                  <Download size={16} />
                  Descargar recurso gratis
                </button>
              </motion.div>
            );
          })}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER INFERIOR ── */}
      <section className="w-full bg-carbon text-white py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col gap-4 max-w-2xl">
            <span className="text-[11px] font-mono text-trebol font-black uppercase tracking-[0.2em]">
              ✦ Acompañamiento Estratégico
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.92]">
              ¿Buscas acompañamiento <br />
              <span className="text-trebol">personalizado?</span>
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed">
              Los recursos son el punto de partida. En un diagnóstico de 30 minutos construimos el plan exacto para tu empresa.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/agenda"
              className="inline-flex items-center gap-3 px-10 py-5 bg-trebol text-white font-bold text-base rounded-full hover:bg-white hover:text-carbon transition-all duration-300 shadow-lg cursor-pointer whitespace-nowrap"
            >
              Agendar diagnóstico
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FORMULARIO DE CONTACTO ── */}
      <Contact />

    </main>
  );
}
