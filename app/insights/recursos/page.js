'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Download, ArrowUpRight, FileText, Table, BookOpen, CheckCircle2, Sparkles, FileSpreadsheet } from 'lucide-react';

const recursos = [
  {
    icon: Table,
    tipo: 'Plantilla',
    formato: '.XLSX',
    descargas: '1,420 descargas',
    titulo: 'Calendario Editorial Mensual',
    desc: 'Organiza todo tu contenido del mes en un sistema simple y efectivo. Incluye columnas para canal, formato, tema, copy y estado.',
    tags: ['Marketing', 'Contenido', 'Redes'],
    color: '#5C9E43',
    bg: 'bg-[#EEF7E6]',
  },
  {
    icon: BookOpen,
    tipo: 'Guía Práctica',
    formato: '.PDF',
    descargas: '2,100 descargas',
    titulo: 'Cómo Usar ChatGPT en tu Empresa',
    desc: 'Guía de 30 páginas con prompts probados, casos de uso reales y un plan de implementación por área de negocio.',
    tags: ['IA', 'Productividad', 'Prompts'],
    color: '#2563EB',
    bg: 'bg-[#EFF6FF]',
  },
  {
    icon: CheckCircle2,
    tipo: 'Checklist',
    formato: '.NOTION',
    descargas: '980 descargas',
    titulo: 'Auditoría de Presencia Digital',
    desc: '47 puntos de revisión para evaluar el estado actual de tu negocio digital: web, redes, SEO, contenido y conversión.',
    tags: ['Marketing', 'Diagnóstico'],
    color: '#0891B2',
    bg: 'bg-[#ECFEFF]',
  },
  {
    icon: FileText,
    tipo: 'Framework',
    formato: '.PDF',
    descargas: '1,850 descargas',
    titulo: 'Plan Estratégico a 90 Días',
    desc: 'Marco de trabajo para definir objetivos, métricas, acciones y responsables. El mismo que usamos con nuestros clientes.',
    tags: ['Estrategia', 'Planeación'],
    color: '#7C3AED',
    bg: 'bg-[#F5F3FF]',
  },
  {
    icon: FileSpreadsheet,
    tipo: 'Dashboard',
    formato: '.SLIDES',
    descargas: '890 descargas',
    titulo: 'Reporte de Métricas Mensual',
    desc: 'Dashboard pre-armado para reportar tus KPIs de marketing digital de forma clara y profesional a tu equipo o clientes.',
    tags: ['Analytics', 'Reportes'],
    color: '#5C9E43',
    bg: 'bg-[#EEF7E6]',
  },
  {
    icon: BookOpen,
    tipo: 'E-book',
    formato: '.PDF',
    descargas: '3,200 descargas',
    titulo: 'Guía de IA para PYMEs 2026',
    desc: 'Un recorrido completo por las herramientas de IA más útiles para empresas pequeñas y medianas en México.',
    tags: ['IA', 'PYMEs', 'Herramientas'],
    color: '#2563EB',
    bg: 'bg-[#EFF6FF]',
  },
];

export default function RecursosPage() {
  const [downloadedItem, setDownloadedItem] = useState(null);

  const handleDownload = (rec) => {
    setDownloadedItem(rec.titulo);
    setTimeout(() => setDownloadedItem(null), 3000);
  };

  return (
    <main className="w-full bg-hueso min-h-screen overflow-hidden">
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="w-full bg-hueso pt-44 pb-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-trebol/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#EEF7E6] text-[#5C9E43] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-[#5C9E43]/20"
          >
            <Download size={14} />
            Recursos Descargables Gratuitos
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl lg:text-[7rem] font-black text-carbon leading-[0.9] tracking-tighter mb-8"
          >
            Herramientas listas <br />
            <span className="text-[#5C9E43]">para usar en tu negocio.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-carbon/70 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Todo lo que descargues aquí es 100% gratuito. Plantillas, guías y tableros diseñados para implementar hoy mismo.
          </motion.p>
        </div>
      </section>

      {/* Alert toast for download simulator */}
      {downloadedItem && (
        <div className="fixed bottom-8 right-8 z-50 bg-carbon text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/10">
          <Sparkles size={18} className="text-[#5C9E43]" />
          <span className="text-sm font-semibold">¡Descarga iniciada: {downloadedItem}!</span>
        </div>
      )}

      {/* ── 3D Digital Product Cards ─────────────────── */}
      <section className="w-full bg-hueso pb-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recursos.map((rec, idx) => {
            const Icon = rec.icon;
            return (
              <motion.div
                key={rec.titulo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="group bg-white/70 backdrop-blur-2xl border border-white/90 rounded-[2.5rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:border-[#5C9E43]/40 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${rec.bg} flex items-center justify-center`}>
                      <Icon size={26} style={{ color: rec.color }} />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-gray-100 text-carbon/70">
                        {rec.formato}
                      </span>
                    </div>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2 block">
                    {rec.tipo} — {rec.descargas}
                  </span>

                  <h3 className="text-2xl font-black text-carbon mb-3 group-hover:text-[#5C9E43] transition-colors leading-tight">
                    {rec.titulo}
                  </h3>

                  <p className="text-sm text-carbon/70 font-light leading-relaxed mb-6">
                    {rec.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {rec.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-gray-100 text-carbon/70 font-medium px-3 py-1 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleDownload(rec)}
                  className="inline-flex items-center justify-center gap-2 bg-carbon hover:bg-[#5C9E43] text-hueso font-bold px-6 py-3.5 rounded-2xl transition-all duration-300 text-sm shadow-md"
                >
                  <Download size={16} />
                  Descargar recurso gratis
                </button>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────── */}
      <section className="w-full bg-carbon text-hueso py-28 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-16 items-start md:items-center justify-between">
          <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] mb-4">
              ¿Buscas acompañamiento <br />
              <span className="text-[#5C9E43]">personalizado?</span>
            </h2>
            <p className="text-xl text-hueso/70 font-light max-w-lg">
              Los recursos son el punto de partida. En un diagnóstico de 30 min construimos tu plan a medida.
            </p>
          </div>
          <Link
            href="/agenda"
            className="inline-flex items-center gap-2 bg-[#5C9E43] text-white font-bold px-10 py-5 rounded-full hover:bg-white hover:text-carbon transition-all duration-500 text-lg shrink-0"
          >
            Agendar diagnóstico
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
