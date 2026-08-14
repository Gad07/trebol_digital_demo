'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Contact from '@/components/Contact';

const categorias = ['Todos', 'Marketing Estratégico', 'IA Aplicada', 'Desarrollo Organizacional', 'Desarrollo Web'];

const casos = [
  {
    id: 1,
    categoria: 'Marketing Estratégico',
    empresa: 'Distribuidora Familiar.',
    lugar: 'Guanajuato, México',
    reto: 'Empresa familiar con 15 años de trayectoria que dependía exclusivamente del boca a boca. Cero prospectos digitales y nula medición de retorno comercial.',
    solucion: 'Estrategia digital 360°: posicionamiento de marca, redes sociales, campañas en Meta & Google Ads y SEO local en 90 días.',
    resultados: [
      { stat: '+250%', label: 'Tráfico orgánico' },
      { stat: '3.8×', label: 'ROAS publicitario' },
      { stat: '90 días', label: 'Primeros resultados' },
    ],
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
    quote: 'Trébol Digital no solo nos diseñó la estrategia, se metieron de lleno a trabajar con nuestro equipo. Logramos multiplicar nuestros leads.',
    cliente: 'Ana López — Directora General',
    clienteImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    statHero: '+250% Leads',
    bgColor: 'bg-white/90 border-white',
  },
  {
    id: 2,
    categoria: 'IA Aplicada',
    empresa: 'Agencia de RRHH.',
    lugar: 'Ciudad de México',
    reto: 'El equipo invertía más de 20 horas a la semana revisando manualmente más de 200 currículums por vacante, retrasando contrataciones.',
    solucion: 'Agente de IA entrenado con criterios de selección que evalúa, clasifica y filtra candidatos automáticamente en minutos.',
    resultados: [
      { stat: '70%', label: 'Reducción en tiempo' },
      { stat: '5×', label: 'Candidatos procesados' },
      { stat: '20h', label: 'Liberadas a la semana' },
    ],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
    quote: 'El agente de IA que construyeron para nosotros le ahorra a mi equipo más de 80 horas al mes. El retorno fue inmediato.',
    cliente: 'Carlos Mendez — CEO',
    clienteImg: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
    statHero: '70% Tiempo Ahorrado',
    bgColor: 'bg-[#EEF7E6] border-trebol/30',
  },
  {
    id: 3,
    categoria: 'Desarrollo Organizacional',
    empresa: 'Constructora Regional.',
    lugar: 'Querétaro, México',
    reto: 'Crecimiento desorganizado, cuellos de botella constantes en aprobación de proyectos, falta de SLAs y alta rotación de personal.',
    solucion: 'Diagnóstico organizacional completo, matriz RACI de roles y responsabilidades y manuales operativos ágiles.',
    resultados: [
      { stat: '85%', label: 'Satisfacción del equipo' },
      { stat: '40%', label: 'Menos retrasos' },
      { stat: '60 días', label: 'Para orden operativo' },
    ],
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80',
    quote: 'Lograron ordenar nuestros procesos internos en menos de 60 días. Ahora podemos tomar nuevos proyectos sin el estrés de antes.',
    cliente: 'Roberto Garza — Director Operativo',
    clienteImg: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
    statHero: '85% Satisfacción',
    bgColor: 'bg-white/90 border-white',
  },
  {
    id: 4,
    categoria: 'Desarrollo Web',
    empresa: 'Boutique de Moda.',
    lugar: 'Toluca, México',
    reto: 'Sin tienda online. Dependían 100% de la venta en local físico y mensajes por Instagram sin control de inventario ni pagos automáticos.',
    solucion: 'Tienda Shopify personalizada integrada con catálogo en redes sociales y pasarelas de pago automatizadas.',
    resultados: [
      { stat: '+180%', label: 'Ventas en 90 días' },
      { stat: '< 2s', label: 'Tiempo de carga web' },
      { stat: '98/100', label: 'Puntaje de velocidad' },
    ],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    quote: 'El sitio web superó nuestras expectativas. Es rápido, elegante y las ventas online comenzaron desde la primera semana.',
    cliente: 'Sofia Ramírez — Fundadora',
    clienteImg: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    statHero: '+180% Ventas',
    bgColor: 'bg-[#EEF7E6] border-trebol/30',
  },
];

export default function CasosPage() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [activeTestimonio, setActiveTestimonio] = useState(0);

  const casosFiltrados = activeCategory === 'Todos'
    ? casos
    : casos.filter((c) => c.categoria === activeCategory);

  return (
    <main className="w-full bg-hueso min-h-screen overflow-hidden">
      {/* ── HERO ESPACIOSO CON LETRA GIGANTE E IMAGEN SIN CORTES ────── */}
      <section className="relative w-full min-h-screen min-h-[100dvh] flex flex-col items-center justify-center pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 px-5 sm:px-8 md:px-12 bg-hueso overflow-hidden border-b border-carbon/10">
        
        {/* Decorative Green Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-40 -left-40 w-[32rem] h-[32rem] bg-trebol/20 rounded-full blur-[110px] opacity-70"></div>
          <div className="absolute top-20 right-0 w-[28rem] h-[28rem] bg-trebol/10 rounded-full blur-[90px] opacity-60"></div>
          <div className="absolute -bottom-20 left-1/3 w-[35rem] h-[35rem] bg-trebol/15 rounded-full blur-[120px] opacity-60"></div>
        </div>

        {/* Container for Headline & Floating Glass Badge */}
        <div className="relative w-full max-w-[1400px] mx-auto text-center flex flex-col items-center justify-center mb-8 md:mb-12 z-10 space-y-6">
          
          {/* Floating Glass Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -10 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mb-2 sm:absolute sm:-top-10 md:-top-12 lg:right-[15%] sm:right-2 z-20"
          >
            <div className="bg-white/60 backdrop-blur-md px-5 sm:px-6 py-2.5 sm:py-3 border border-white/80 shadow-xl rounded-full text-xs sm:text-sm md:text-lg text-carbon font-semibold">
              Resultados Medibles Reales
            </div>
          </motion.div>

          {/* Massive Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-[7.5rem] font-black text-carbon leading-[0.95] sm:leading-[0.85] tracking-tighter"
          >
            Resultados Reales en <br className="hidden sm:block" />
            Empresas <span className="text-trebol">Reales.</span>
          </motion.h1>

          {/* Description Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-lg md:text-2xl text-carbon/80 font-light leading-relaxed max-w-3xl mx-auto font-sans"
          >
            Conoce cómo ayudamos a empresas en crecimiento a escalar sus ventas, optimizar su operación e implementar Inteligencia Artificial con resultados medibles desde el primer mes.
          </motion.p>
        </div>
      </section>

      {/* ── BARRA DE FILTROS POR CATEGORÍA ─────────────────────────── */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-16 relative z-10">
        <div className="flex flex-wrap justify-center gap-3">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-4 rounded-full font-bold text-sm md:text-base transition-all duration-300 shadow-md ${
                activeCategory === cat
                  ? 'bg-carbon text-hueso border-2 border-trebol shadow-xl scale-105'
                  : 'bg-white text-carbon/70 border border-gray-200 hover:border-trebol/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── MAGAZINE SPOTLIGHT CASE CARDS ───────────────────────────── */}
      <section className="w-full bg-hueso pb-32 px-6 md:px-12 relative z-10">
        <div className="max-w-[1400px] mx-auto space-y-16">
          <AnimatePresence mode="wait">
            {casosFiltrados.map((caso, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={caso.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`rounded-[3.5rem] p-8 md:p-14 border transition-all duration-500 grid md:grid-cols-12 gap-10 items-center hover:-translate-y-1 shadow-[0_20px_60px_rgba(0,0,0,0.05)] ${caso.bgColor}`}
                >
                  {/* Photo Side - Alternando Izquierda / Derecha */}
                  <div className={`md:col-span-5 h-80 md:h-[480px] rounded-[2.5rem] overflow-hidden relative shadow-2xl group ${
                    isEven ? 'md:order-first' : 'md:order-last'
                  }`}>
                    <img
                      src={caso.image}
                      alt={caso.empresa}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Content Side */}
                  <div className={`md:col-span-7 space-y-6 ${
                    isEven ? 'md:order-last' : 'md:order-first'
                  }`}>
                    <h2 className="text-4xl md:text-6xl font-black text-carbon tracking-tight leading-[0.9]">
                      {caso.empresa}
                    </h2>

                    <div className="space-y-4 pt-2">
                      <div className="p-5 rounded-2xl border bg-white/80 border-gray-200">
                        <p className="text-xs font-bold text-trebol uppercase tracking-wider mb-1">El Desafío Inicial</p>
                        <p className="text-base text-carbon/80 font-light leading-relaxed">{caso.reto}</p>
                      </div>

                      <div className="p-5 rounded-2xl border bg-[#EEF7E6] border-trebol/30">
                        <p className="text-xs font-bold text-trebol uppercase tracking-wider mb-1">La Solución Trébol</p>
                        <p className="text-base text-carbon/90 font-medium leading-relaxed">{caso.solucion}</p>
                      </div>
                    </div>

                    {/* Impact Metrics Grid */}
                    <div className="grid grid-cols-3 gap-3 pt-2">
                      {caso.resultados.map((r) => (
                        <div key={r.label} className="p-4 rounded-2xl text-center shadow-md bg-white border border-gray-200">
                          <p className="text-2xl md:text-3xl font-black text-trebol mb-0.5">{r.stat}</p>
                          <p className="text-[11px] text-carbon/60 font-light">{r.label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <Link
                        href="/agenda"
                        className="inline-flex items-center gap-2 bg-carbon text-hueso hover:bg-trebol font-bold px-10 py-5 rounded-full transition-colors duration-500 text-lg shadow-xl"
                      >
                        Quiero un resultado similar
                        <ArrowUpRight size={20} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* ── TESTIMONIALS CARRUSEL ──────────────────────── */}
      <section className="w-full bg-hueso py-24 px-6 md:px-12">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-carbon tracking-tighter leading-[0.85] mb-16">
            Lo que dicen nuestros <span className="text-trebol">clientes.</span>
          </h2>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveTestimonio(activeTestimonio === 0 ? casos.length - 1 : activeTestimonio - 1)}
              className="w-12 h-12 rounded-full flex items-center justify-center text-carbon hover:text-trebol transition-colors shrink-0"
            >
              <ChevronLeft size={28} />
            </button>

            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonio}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg flex h-[350px]"
                >
                  <div className="relative w-2/5 shrink-0 overflow-hidden">
                    <img
                      src={casos[activeTestimonio].clienteImg}
                      alt={casos[activeTestimonio].cliente}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white to-transparent" />
                  </div>
                  <div className="flex-1 p-10 md:p-14 text-left relative flex flex-col justify-center">
                    <Quote size={100} className="absolute -top-4 -left-2 text-trebol/10 pointer-events-none" />
                    <p className="text-lg md:text-2xl text-carbon/80 font-light leading-relaxed italic mb-8 relative z-10">
                      &ldquo;{casos[activeTestimonio].quote}&rdquo;
                    </p>
                    <div className="pt-4 border-t border-gray-100 relative z-10">
                      <p className="text-base font-bold text-carbon mb-0.5">{casos[activeTestimonio].cliente}</p>
                      <p className="text-xs text-trebol font-semibold">{casos[activeTestimonio].empresa}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={() => setActiveTestimonio(activeTestimonio === casos.length - 1 ? 0 : activeTestimonio + 1)}
              className="w-12 h-12 rounded-full flex items-center justify-center text-carbon hover:text-trebol transition-colors shrink-0"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Controles */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {casos.slice(0, 4).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonio(idx)}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  activeTestimonio === idx ? 'w-10 bg-trebol' : 'w-2.5 bg-trebol/30 hover:bg-trebol/60'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────── */}
      <Contact />
    </main>
  );
}
