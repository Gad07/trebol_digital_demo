'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight, Target, Zap, BarChart3,
  Users, Bot, CheckCircle2, TrendingUp, Sparkles, Plus, Minus
} from 'lucide-react';
import CanalesScrollytelling from '@/components/CanalesScrollytelling';
import Contact from '@/components/Contact';

const roadmapSteps = [
  {
    num: "01",
    titulo: "Atracción Hipersegmentada",
    descripcion: "Pauta activa en Google Search (intención alta) y Meta/TikTok Ads (descubrimiento visual) dirigida exclusivamente a tomadores de decisión y perfiles AB/C+.",
    icono: Target,
    metricas: [
      "CPC Optimizado: ~$14 MXN",
      "Segmentación Psicográfica"
    ]
  },
  {
    num: "02",
    titulo: "Landings de Alta Conversión",
    descripcion: "Páginas de aterrizaje optimizadas con copywriting persuasivo, velocidad de carga de nivel editorial y prueba social que multiplican las conversiones.",
    icono: Zap,
    metricas: [
      "18.4% Tasa de Conversión",
      "Carga &lt; 1.2 segundos"
    ]
  },
  {
    num: "03",
    titulo: "Calificación Instantánea",
    descripcion: "Sincronización automática con tu CRM y alertas inmediatas por WhatsApp para que tu equipo comercial contacte y cierre los prospectos en minutos.",
    icono: Bot,
    metricas: [
      "Alertas WhatsApp & CRM",
      "Filtro de Leads Basura"
    ]
  },
  {
    num: "04",
    titulo: "Escalado & Atribución 4.8×",
    descripcion: "Reasignación diaria de pauta hacia las palabras clave y anuncios con mayor ROAS para maximizar el retorno sobre inversión publicitaria.",
    icono: TrendingUp,
    metricas: [
      "4.8× ROAS Promedio",
      "Optimización Diaria"
    ]
  }
];

const faqItems = [
  {
    pregunta: "¿En cuánto tiempo se comienzan a ver los primeros prospectos calificados?",
    respuesta: "Las campañas en Google Search Ads y Meta Ads comienzan a generar impresiones y prospectos desde los primeros 3 a 5 días tras el despliegue de la pauta. Durante los primeros 14 días realizamos optimizaciones algorítmicas diarias de palabras clave y audiencias para estabilizar el Costo por Lead (CPL)."
  },
  {
    pregunta: "¿Cuál es la inversión mínima recomendada en pauta publicitaria?",
    respuesta: "Recomendamos una inversión en pauta a partir de $15,000 MXN mensuales directos a las plataformas. Esto garantiza un volumen de datos suficiente para que los algoritmos de pujas inteligentes de Google y Meta optimicen las conversiones y logren un ROAS promedio de 4.8×."
  },
  {
    pregunta: "¿Cómo garantizan que los prospectos sean calificados y no leads basura?",
    respuesta: "Implementamos formularios interactivos con preguntas de filtro (rol comercial, tamaño de empresa, presupuesto disponible) y validación anti-spam. Además, integramos alertas automáticas con tu CRM y WhatsApp para que tu equipo valore y cierre los prospectos en minutos."
  },
  {
    pregunta: "¿Los costos de pauta se pagan directamente a las plataformas?",
    respuesta: "Sí, con 100% de transparencia. La inversión en anuncios se cobra directamente desde tu tarjeta de crédito/débito a tus propias cuentas publicitarias en Google Ads, Meta Ads y TikTok Ads. Trébol Digital únicamente administra, optimiza y crea la estrategia por una tarifa de gestión fija."
  },
  {
    pregunta: "¿Qué incluye el Laboratorio de Creativos & Video UGC?",
    respuesta: "Incluye la redacción continua de guiones persuasivos de copywriting, producción/edición de anuncios en video vertical 9:16 para Instagram Reels y TikTok Ads, diseño de carruseles estáticos y pruebas A/B constantes para evitar la fatiga publicitaria."
  }
];

export default function MarketingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="w-full bg-hueso text-carbon min-h-screen">
      {/* ── HERO EDITORIAL CLARO CON LUZ AMBIENTAL ─────────────────────── */}
      <section className="relative w-full flex flex-col items-center justify-start pt-36 md:pt-44 pb-20 px-4 md:px-12 bg-hueso overflow-hidden border-b border-carbon/10">

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.85, 0.6] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -right-40 w-[40rem] h-[40rem] bg-trebol/25 rounded-full blur-[120px]"
          />
        </div>

        <div className="relative w-full max-w-[1400px] mx-auto text-center flex justify-center mb-16 md:mb-20 z-10">

          {/* Floating Glass Badge Original */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -6 }}
            animate={{ opacity: 1, y: [0, -6, 0], rotate: -2 }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 0.8, delay: 0.2 },
              rotate: { duration: 0.8, delay: 0.2 }
            }}
            className="absolute -top-10 md:-top-12 lg:right-[15%] right-0 z-20"
          >
            <div className="bg-white/70 backdrop-blur-md px-6 py-3 border border-white shadow-xl rounded-full text-sm md:text-lg text-carbon font-semibold">
              Marketing de Resultados
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl lg:text-[8.5rem] font-black text-carbon leading-[0.82] tracking-tighter"
          >
            Marketing con <br />
            Impacto <span className="text-trebol">Comercial.</span>
          </motion.h1>
        </div>

        {/* Hero Visual Image Banner - 100% CLEAN WITHOUT TEXT OVERLAYS */}
        <div className="w-[95%] max-w-[1500px] h-[55vh] md:h-[65vh] rounded-[3rem] overflow-hidden shadow-2xl relative border border-white z-10 group">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1800&q=80"
            alt="Marketing Estratégico Trébol"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          />
        </div>
      </section>

      {/* ── MATRIZ DE CANALES DE CONVERSIÓN (APPLE SCROLLYTELLING) ───── */}
      <CanalesScrollytelling />

      {/* ── SECCIÓN 4 PASOS: RUTA ESTRATÉGICA DE CAPTACIÓN (CLEAN WHITE EDITORIAL) ─────── */}
      <section className="w-full bg-white text-carbon py-28 px-6 md:px-12 relative z-10 border-t border-neutral-200">
        <div className="max-w-[1400px] mx-auto relative z-10">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl md:text-7xl font-black text-carbon tracking-tighter leading-[0.9]">
                Ruta Estratégica de <br />
                <span className="text-trebol">Captación Escalable.</span>
              </h2>
            </div>
            <p className="text-lg md:text-xl text-carbon/70 font-light max-w-xl leading-relaxed">
              Un sistema automatizado de 4 etapas que transforma la atención masiva en prospectos calificados y cierres comerciales medibles.
            </p>
          </div>

          {/* Línea Conectora Continua en Verde Trébol (Sin Neón) */}
          <div className="hidden md:block w-full h-1.5 bg-neutral-200 rounded-full mb-12 relative overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="h-full bg-trebol rounded-full"
            />
          </div>

          {/* Grid de 4 Pasos en Tarjetas Negras/Carbon Premium */}
          <div className="grid md:grid-cols-4 gap-6">
            {roadmapSteps.map((step, idx) => {
              const IconoComponente = step.icono;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="bg-carbon text-hueso border border-white/10 rounded-[2.5rem] p-8 hover:border-trebol/50 hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between h-full"
                >
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-4xl font-black font-mono text-trebol">
                        {step.num}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-trebol/10 border border-trebol/20 flex items-center justify-center text-trebol group-hover:bg-trebol group-hover:text-black transition-all duration-300">
                        <IconoComponente size={24} />
                      </div>
                    </div>

                    <h3 className="text-2xl font-black text-white group-hover:text-trebol transition-colors">
                      {step.titulo}
                    </h3>
                    <p className="text-sm text-neutral-300 font-light leading-relaxed">
                      {step.descripcion}
                    </p>
                  </div>

                  <div className="pt-8 border-t border-white/10 mt-8 space-y-2 text-xs font-mono text-neutral-300">
                    {step.metricas.map((m, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-trebol shrink-0" />
                        <span dangerouslySetInnerHTML={{ __html: m }} />
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── MÓDULO 2: DIFERENCIADORES Y GARANTÍAS DE PAUTA STRATÉGICA ─────── */}
      <section className="w-full bg-hueso py-28 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-carbon tracking-tighter leading-none mb-6">
              ¿Por qué las marcas líderes <br />
              <span className="text-trebol">eligen a Trébol Digital?</span>
            </h2>
            <p className="text-lg md:text-xl text-carbon/70 font-light leading-relaxed">
              Combinamos tecnología propia, copywriters expertos y análisis de datos en tiempo real para garantizar pauta con resultados comerciales comprobados.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgba(92,158,49,0.08)] border-2 border-trebol/40 hover:border-trebol hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-trebol/10 text-trebol flex items-center justify-center mb-8 border border-trebol/20">
                <BarChart3 size={28} />
              </div>
              <h3 className="text-2xl font-black text-carbon mb-4">
                Atribución Transparente en Tiempo Real
              </h3>
              <p className="text-carbon/70 text-sm leading-relaxed mb-6 font-light">
                Olvídate de reportes manuales en PDF a fin de mes. Tendrás acceso 24/7 a un Dashboard centralizado donde verás cada peso invertido y cada lead generado en vivo.
              </p>
              <ul className="space-y-2 text-xs font-mono text-carbon/80 border-t border-neutral-100 pt-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-trebol shrink-0" />
                  <span>Sin reportes inflados ni vanidad</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-trebol shrink-0" />
                  <span>Métricas CPL, CPA y ROAS exactas</span>
                </li>
              </ul>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgba(92,158,49,0.08)] border-2 border-trebol/40 hover:border-trebol hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-trebol/10 text-trebol flex items-center justify-center mb-8 border border-trebol/20">
                <Sparkles size={28} />
              </div>
              <h3 className="text-2xl font-black text-carbon mb-4">
                Laboratorio de Creativos & Video UGC
              </h3>
              <p className="text-carbon/70 text-sm leading-relaxed mb-6 font-light">
                Producimos variaciones continuas de anuncios en video corto para Reels/TikTok y carruseles estáticos. Probamos ángulos emocionales y racionales sin costo adicional.
              </p>
              <ul className="space-y-2 text-xs font-mono text-carbon/80 border-t border-neutral-100 pt-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-trebol shrink-0" />
                  <span>Guiones persuasivos de Copywriting</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-trebol shrink-0" />
                  <span>Formato vertical 9:16 nativo</span>
                </li>
              </ul>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgba(92,158,49,0.08)] border-2 border-trebol/40 hover:border-trebol hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-trebol/10 text-trebol flex items-center justify-center mb-8 border border-trebol/20">
                <Users size={28} />
              </div>
              <h3 className="text-2xl font-black text-carbon mb-4">
                Estrategas Senior Dedicados
              </h3>
              <p className="text-carbon/70 text-sm leading-relaxed mb-6 font-light">
                Tu cuenta estará a cargo de un Media Buyer Senior con años de experiencia manejando presupuestos de alta escala B2B y B2C. Comunicación constante por Slack o WhatsApp.
              </p>
              <ul className="space-y-2 text-xs font-mono text-carbon/80 border-t border-neutral-100 pt-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-trebol shrink-0" />
                  <span>Reuniones semanales de seguimiento</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-trebol shrink-0" />
                  <span>Alineación constante con tu equipo</span>
                </li>
              </ul>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ── MÓDULO 3: PREGUNTAS FRECUENTES (FAQ ACORDEÓN) ─────────────────── */}
      <section className="w-full bg-white py-28 px-6 md:px-12 border-t border-neutral-200/80 relative">
        <div className="max-w-[1100px] mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-carbon tracking-tighter leading-none mb-4">
              Preguntas <span className="text-trebol">Frecuentes.</span>
            </h2>
            <p className="text-lg text-carbon/70 font-light max-w-xl mx-auto">
              Respuestas claras a las inquietudes más comunes sobre la gestión de pauta y resultados comerciales.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`rounded-3xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-trebol bg-[#f8fcf6] shadow-lg' : 'border-neutral-200 bg-white hover:border-neutral-300'
                    }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 md:p-8 flex items-center justify-between gap-6 text-left focus:outline-none"
                  >
                    <span className="text-lg md:text-xl font-bold text-carbon tracking-tight">
                      {item.pregunta}
                    </span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'bg-trebol text-[#000000] rotate-180 font-bold' : 'bg-neutral-100 text-carbon'
                      }`}>
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 md:px-8 pb-8 pt-2 text-carbon/70 text-base md:text-lg font-light leading-relaxed border-t border-trebol/10">
                          {item.respuesta}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── Contact CTA (mismo estilo que Home) ────────── */}
      <Contact />
    </main>
  );
}
