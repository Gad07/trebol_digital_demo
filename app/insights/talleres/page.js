'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, ArrowUpRight, Calendar, Clock, MapPin, Sparkles, Award, Users, ChevronDown, CheckCircle2, Ticket } from 'lucide-react';
import Contact from '@/components/Contact';

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
    imagen: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
    temas: [
      'Panorama IA 2026 & Herramientas Clave',
      'ChatGPT & Claude para automatización operativa',
      'Construcción de tu primer flujo en Make (30 min)',
      'Entrenamiento de Agentes IA de atención y ventas'
    ],
  },
  {
    id: 2,
    titulo: 'Marketing Digital para PYMEs: De 0 a Estrategia en 1 Día',
    tipo: 'Workshop Presencial',
    modalidad: 'Presencial · Toluca',
    duracion: '6 Horas',
    fecha: '22 Agosto, 2026',
    hora: '9:00 AM – 3:00 PM (CST)',
    precio: '$1,500 MXN',
    cupos: 'Quedan 3 lugares',
    desc: 'Estructura tu marca, crea contenido que vende y lanza campañas de Google Ads rentables con resultados medibles.',
    imagen: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80',
    temas: [
      'Buyer Persona & Propuesta de Valor Única',
      'Calendario Editorial & Copywriting de Conversión',
      'SEO Local Google Maps & Optimización GMB',
      'Campañas Básicas de Google Ads B2B/B2C'
    ],
  },
  {
    id: 3,
    titulo: 'Comunicación Interna Efectiva para Equipos en Crecimiento',
    tipo: 'Programa In-Company',
    modalidad: 'Presencial u Online',
    duracion: '3 Horas',
    fecha: 'A Convenir',
    hora: 'Horario flexible',
    precio: 'A Medida',
    cupos: 'Hasta 30 personas',
    desc: 'Taller práctico para mejorar la coordinación del equipo, reducir reuniones innecesarias y mejorar la claridad de roles.',
    imagen: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
    temas: [
      'Auditoría & Diagnóstico de canales internos',
      'Protocolos de comunicación asíncrona',
      'Matriz de asignación de decisiones (RACI)',
      'Cultura de retroalimentación de alto impacto'
    ],
  },
];

const stats = [
  { valor: '100%', etiqueta: 'Práctico & Sin Paja', icon: Award },
  { valor: '+250', etiqueta: 'Profesionales Capacitados', icon: Users },
  { valor: '4.9/5', etiqueta: 'Satisfacción Promedio', icon: Sparkles },
];

export default function TalleresPage() {
  const [expandedSyllabus, setExpandedSyllabus] = useState(null);

  return (
    <main className="w-full bg-hueso text-carbon min-h-screen overflow-hidden">
      {/* ── HERO CON BADGE, TITULAR, SUBTÍTULO Y BARRA DE ESTADÍSTICAS ── */}
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
              Capacitaciones intensivas para tu equipo
            </div>
          </motion.div>

          {/* Massive Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 90, damping: 14 }}
            className="text-5xl md:text-8xl lg:text-[8rem] font-black text-carbon leading-[0.85] tracking-tighter"
          >
            Aprende Haciendo. <br />
            Aplica en tu <span className="text-trebol">Empresa.</span>
          </motion.h1>

          {/* Hero Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-carbon/70 font-light max-w-3xl text-center leading-relaxed"
          >
            Capacitaciones intensivas diseñadas para que tu equipo adquiera habilidades reales y las ejecute desde el primer día.
          </motion.p>
        </div>
      </section>

      {/* ── TARJETAS DE TALLERES LIMPIAS ── */}
      <section className="w-full bg-hueso pb-32 px-6 md:px-12 relative z-10 border-t border-carbon/10 pt-16">
        <div className="max-w-[1400px] mx-auto space-y-12">

          {/* Section Header Limpio */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-6 border-b border-neutral-200">
            <div>
              <span className="text-xs font-mono text-trebol font-bold uppercase tracking-widest block mb-2">
                CATÁLOGO DE TALLERES
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-carbon tracking-tighter">
                Programas Disponibles
              </h2>
            </div>
            <p className="text-sm font-mono text-carbon/60">
              Presencial & Online In-Company
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {talleres.map((taller, idx) => (
              <motion.div
                key={taller.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: idx * 0.12, duration: 0.5 }}
                className="group bg-white/80 backdrop-blur-2xl border border-white/90 rounded-[2.5rem] p-8 shadow-[0_12px_40px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:border-trebol/40 transition-all duration-500 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Header Badges (Tipo, Fecha, Modalidad) */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono border-b border-neutral-100 pb-4">
                    <span className="font-bold uppercase tracking-widest px-3 py-1 bg-carbon text-white rounded-full">
                      {taller.tipo}
                    </span>
                    <span className="font-bold text-carbon/70 flex items-center gap-1">
                      <Calendar size={13} className="text-trebol" /> {taller.fecha}
                    </span>
                  </div>

                  {/* Título */}
                  <h3 className="text-2xl font-black text-carbon tracking-tight leading-tight group-hover:text-trebol transition-colors duration-300">
                    {taller.titulo}
                  </h3>

                  {/* Descripción */}
                  <p className="text-sm text-carbon/70 font-light leading-relaxed">
                    {taller.desc}
                  </p>

                  {/* Modalidad y Duración */}
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-2 border-t border-neutral-100">
                    <div className="flex items-center gap-1.5 text-carbon/70">
                      <MapPin size={14} className="text-trebol shrink-0" />
                      <span className="truncate">{taller.modalidad}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-carbon/70">
                      <Clock size={14} className="text-trebol shrink-0" />
                      <span className="truncate">{taller.duracion}</span>
                    </div>
                  </div>

                    {/* Temario Desplegable */}
                    <div className="pt-3">
                      <button
                        onClick={() => setExpandedSyllabus(expandedSyllabus === taller.id ? null : taller.id)}
                        className="w-full text-xs font-mono font-bold uppercase tracking-wider text-carbon hover:text-trebol flex items-center justify-between bg-hueso/80 border border-neutral-200/60 p-3 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-white"
                      >
                        <span className="flex items-center gap-2">
                          Temario ({taller.temas.length} Módulos)
                        </span>
                        <ChevronDown size={16} className={`text-trebol transition-transform duration-300 ${expandedSyllabus === taller.id ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {expandedSyllabus === taller.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="space-y-2 mt-3 bg-hueso/60 p-4 rounded-2xl border border-neutral-200/60"
                          >
                            {taller.temas.map((t, i) => (
                              <div key={i} className="flex items-start gap-2 text-xs text-carbon/80 font-medium">
                                <CheckCircle2 size={14} className="text-trebol shrink-0 mt-0.5" />
                                <span>{t}</span>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                {/* Footer de Precio y CTA */}
                <div className="p-8 pt-0 flex items-center justify-between border-t border-neutral-100 mt-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-carbon/50 block">Inversión</span>
                    <p className="text-2xl font-black text-carbon font-mono">{taller.precio}</p>
                  </div>

                  <Link
                    href="/agenda"
                    className="inline-flex items-center gap-2 bg-carbon group-hover:bg-trebol text-white font-bold px-6 py-3.5 rounded-2xl transition-all duration-300 text-sm shadow-md cursor-pointer whitespace-nowrap"
                  >
                    <span>Reservar</span>
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IN-COMPANY / A LA MEDIDA ── */}
      <section className="w-full bg-carbon text-white py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col gap-4 max-w-2xl">
            <span className="text-[11px] font-mono text-trebol font-black uppercase tracking-[0.2em]">
              Soluciones In-Company
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.92]">
              ¿Quieres un taller <br />
              <span className="text-trebol">a la medida de tu empresa?</span>
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed">
              Diseñamos capacitaciones presenciales o virtuales adaptadas 100% a los procesos, herramientas y objetivos estratégicos de tu equipo.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/agenda"
              className="inline-flex items-center gap-3 px-10 py-5 bg-trebol text-white font-bold text-base rounded-full hover:bg-white hover:text-carbon transition-all duration-300 shadow-lg cursor-pointer whitespace-nowrap"
            >
              Solicitar cotización
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
