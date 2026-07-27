'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GraduationCap, ArrowUpRight, Calendar, Clock, MapPin, Users, CheckCircle2, Ticket, Sparkles } from 'lucide-react';

const talleres = [
  {
    id: 1,
    titulo: 'IA para no técnicos: Herramientas que cambian tu negocio',
    tipo: 'Taller Intensivo',
    modalidad: 'Online en Vivo',
    duracion: '4 Horas',
    fecha: '15 Agosto, 2026',
    hora: '10:00 AM – 2:00 PM (CST)',
    precio: 'Gratuito',
    cupos: 'Quedan 5 lugares',
    desc: 'Aprende a utilizar ChatGPT, Gemini, Make y agentes IA en la operación diaria de tu empresa. Cero código.',
    temas: ['Panorama IA 2026', 'ChatGPT para automatización de respuestas', 'Primer flujo Make en 30 min', 'Entrenamiento de Agentes IA'],
    color: '#2563EB',
    bg: 'bg-[#EFF6FF]',
  },
  {
    id: 2,
    titulo: 'Marketing Digital para PYMEs: De 0 a Estrategia en 1 Día',
    tipo: 'Workshop Presencial',
    modalidad: 'Presencial – Toluca',
    duracion: '6 Horas',
    fecha: '22 Agosto, 2026',
    hora: '9:00 AM – 3:00 PM (CST)',
    precio: '$1,500 MXN',
    cupos: 'Quedan 3 lugares',
    desc: 'Aprende a estructurar tu marca, crear contenido que vende y lanzar campañas de Google Ads rentables.',
    temas: ['Buyer Persona & Propuesta de Valor', 'Calendario Editorial & Copywriting', 'SEO Local Google Maps', 'Google Ads Básico'],
    color: '#5C9E31',
    bg: 'bg-[#EEF7E6]',
  },
  {
    id: 3,
    titulo: 'Comunicación Interna Efectiva para Equipos en Crecimiento',
    tipo: 'In-Company',
    modalidad: 'Presencial u Online',
    duracion: '3 Horas',
    fecha: 'A Convenir',
    hora: 'Flexible',
    precio: 'A Medida',
    cupos: 'Hasta 30 personas',
    desc: 'Taller práctico para mejorar la coordinación del equipo, reducir reuniones innecesarias y mejorar la claridad de roles.',
    temas: ['Auditoría de canales internos', 'Protocolos de comunicación asíncrona', 'Matriz de decisiones', 'Cultura de retroalimentación'],
    color: '#7C3AED',
    bg: 'bg-[#F5F3FF]',
  },
];

export default function TalleresPage() {
  const [expandedSyllabus, setExpandedSyllabus] = useState(null);

  return (
    <main className="w-full bg-hueso min-h-screen overflow-hidden">
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="w-full bg-hueso pt-44 pb-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-trebol/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#2563EB] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-[#2563EB]/20"
          >
            <GraduationCap size={14} />
            Talleres & Capacitaciones
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl lg:text-[7rem] font-black text-carbon leading-[0.9] tracking-tighter mb-8"
          >
            Aprende haciendo. <br />
            <span className="text-[#2563EB]">Aplica de inmediato.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-carbon/70 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Capacitaciones intensivas diseñadas para que tu equipo aprenda habilidades prácticas y salgan a aplicarlas ese mismo día.
          </motion.p>
        </div>
      </section>

      {/* ── NEW CARD LAYOUT: Event Ticket Pass Cards ─── */}
      <section className="w-full bg-hueso pb-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto space-y-8">
          {talleres.map((taller, idx) => (
            <motion.div
              key={taller.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/80 backdrop-blur-2xl border border-white/90 rounded-[3rem] p-8 md:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 grid md:grid-cols-12 gap-8 items-center relative overflow-hidden"
            >
              <div className="md:col-span-8 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[#EFF6FF] text-[#2563EB]">
                    {taller.tipo}
                  </span>
                  <span className="text-xs font-semibold text-gray-500 flex items-center gap-1">
                    <MapPin size={13} /> {taller.modalidad}
                  </span>
                  <span className="text-xs font-bold text-[#5C9E31] bg-[#EEF7E6] px-3 py-1 rounded-full">
                    🔥 {taller.cupos}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-black text-carbon tracking-tight leading-tight">
                  {taller.titulo}
                </h2>

                <p className="text-base text-carbon/70 font-light leading-relaxed">
                  {taller.desc}
                </p>

                <div className="flex flex-wrap gap-6 pt-2 text-xs font-semibold text-carbon/70">
                  <span className="flex items-center gap-1.5"><Calendar size={15} className="text-[#2563EB]" /> {taller.fecha}</span>
                  <span className="flex items-center gap-1.5"><Clock size={15} className="text-[#2563EB]" /> {taller.duracion} ({taller.hora})</span>
                </div>

                {/* Expandable syllabus */}
                <div className="pt-4 border-t border-gray-100">
                  <button
                    onClick={() => setExpandedSyllabus(expandedSyllabus === taller.id ? null : taller.id)}
                    className="text-xs font-bold uppercase tracking-wider text-[#2563EB] flex items-center gap-1 hover:underline"
                  >
                    {expandedSyllabus === taller.id ? 'Ocultar Temario ▲' : 'Ver Temario del Taller ▼'}
                  </button>

                  {expandedSyllabus === taller.id && (
                    <div className="grid sm:grid-cols-2 gap-2 mt-4 bg-gray-50 p-4 rounded-2xl">
                      {taller.temas.map((t) => (
                        <div key={t} className="flex items-center gap-2 text-xs text-carbon/80 font-medium">
                          <CheckCircle2 size={14} className="text-[#2563EB] shrink-0" />
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Price Pass Ticket Side */}
              <div className="md:col-span-4 bg-carbon text-hueso rounded-[2.5rem] p-8 flex flex-col justify-between items-center text-center space-y-6 shadow-xl border border-white/10">
                <Ticket size={32} className="text-[#2563EB]" />
                
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Precio de Entrada</p>
                  <p className="text-4xl font-black text-white">{taller.precio}</p>
                </div>

                <Link
                  href="/agenda"
                  className="inline-flex items-center justify-center gap-2 bg-[#2563EB] text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-carbon transition-all duration-500 text-sm w-full shadow-md"
                >
                  Reservar mi lugar
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── In-Company CTA ────────────────────────────── */}
      <section className="w-full bg-carbon text-hueso py-28 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-16 items-start md:items-center justify-between">
          <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] mb-4">
              ¿Quieres un taller <br />
              <span className="text-[#2563EB]">a la medida de tu equipo?</span>
            </h2>
            <p className="text-xl text-hueso/70 font-light max-w-lg">
              Diseñamos talleres in-company presenciales o remotos según los objetivos de tu empresa.
            </p>
          </div>
          <Link
            href="/agenda"
            className="inline-flex items-center gap-2 bg-[#2563EB] text-white font-bold px-10 py-5 rounded-full hover:bg-white hover:text-carbon transition-all duration-500 text-lg shrink-0 shadow-lg"
          >
            Solicitar cotización
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
