'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Quote, Building2, Sparkles } from 'lucide-react';

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

  const casosFiltrados = activeCategory === 'Todos'
    ? casos
    : casos.filter((c) => c.categoria === activeCategory);

  return (
    <main className="w-full bg-hueso min-h-screen overflow-hidden">
      {/* ── HERO ESPACIOSO CON LETRA GIGANTE E IMAGEN SIN CORTES ────── */}
      <section className="relative w-full flex flex-col items-center justify-start pt-36 md:pt-44 pb-20 px-4 md:px-12 bg-hueso overflow-hidden">
        
        {/* Decorative Green Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-40 -left-40 w-[32rem] h-[32rem] bg-trebol/20 rounded-full blur-[110px] opacity-70"></div>
          <div className="absolute top-20 right-0 w-[28rem] h-[28rem] bg-trebol/10 rounded-full blur-[90px] opacity-60"></div>
          <div className="absolute -bottom-20 left-1/3 w-[35rem] h-[35rem] bg-trebol/15 rounded-full blur-[120px] opacity-60"></div>
        </div>

        {/* Container for Headline & Floating Glass Badge */}
        <div className="relative w-full max-w-[1400px] mx-auto text-center flex justify-center mb-16 md:mb-20 z-10">
          
          {/* Floating Glass Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -10 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute -top-10 md:-top-12 lg:right-[15%] right-0 z-20"
          >
            <div className="bg-white/40 backdrop-blur-md px-6 py-3 border border-white/60 shadow-xl rounded-full text-sm md:text-lg text-carbon font-semibold">
              Resultados Medibles Reales
            </div>
          </motion.div>

          {/* Massive Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl lg:text-[8rem] font-black text-carbon leading-[0.85] tracking-tighter"
          >
            Resultados Reales en <br/>
            Empresas <span className="text-trebol">Reales.</span>
          </motion.h1>
        </div>

        {/* Spacious Full-Sized Panoramic Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-[95%] max-w-[1600px] h-[55vh] md:h-[65vh] min-h-[420px] relative rounded-3xl overflow-hidden shadow-2xl z-10"
        >
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1800&q=80" 
            alt="Casos de Éxito Trébol Digital"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
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
                    <div className="absolute top-6 left-6 bg-carbon/90 backdrop-blur-md text-trebol text-xs font-black px-4 py-2 rounded-full shadow-lg">
                      {caso.categoria}
                    </div>
                    <div className="absolute bottom-6 left-6 bg-trebol text-white font-black text-sm px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2">
                      <Sparkles size={16} />
                      <span>{caso.statHero}</span>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`md:col-span-7 space-y-6 ${
                    isEven ? 'md:order-last' : 'md:order-first'
                  }`}>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-trebol">
                      <Building2 size={16} />
                      <span>{caso.empresa} — {caso.lugar}</span>
                    </div>

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

      {/* ── CLIENT TESTIMONIAL QUOTES CON FOTOGRAFÍAS DE CLIENTES ────── */}
      <section className="w-full bg-[#EEF7E6] text-carbon py-32 px-6 md:px-12 rounded-[3.5rem] max-w-[1500px] mx-auto mb-32 shadow-xl border border-trebol/20">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-trebol bg-white px-4 py-1.5 rounded-full mb-4 inline-block shadow-sm">
              Testimonios Directos
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-carbon tracking-tighter leading-[0.85]">
              Lo que dicen nuestros clientes.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {casos.slice(0, 3).map((c) => (
              <div key={c.cliente} className="bg-white border border-trebol/20 p-8 md:p-10 rounded-[2.5rem] flex flex-col justify-between shadow-lg">
                <div>
                  <Quote size={36} className="text-trebol mb-6 opacity-70" />
                  <p className="text-lg md:text-xl text-carbon/80 font-light leading-relaxed italic mb-8">
                    &ldquo;{c.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 flex items-center gap-4">
                  <img
                    src={c.clienteImg}
                    alt={c.cliente}
                    className="w-12 h-12 rounded-full object-cover border-2 border-trebol shadow-md shrink-0"
                  />
                  <div>
                    <p className="text-base font-bold text-carbon mb-0.5">{c.cliente}</p>
                    <p className="text-xs text-trebol font-semibold">{c.empresa}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA Editorial ────────────────────── */}
      <section className="w-full bg-hueso pb-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto bg-white/60 backdrop-blur-2xl border border-white/80 rounded-[3rem] p-12 md:p-20 shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div>
              <h2 className="text-5xl md:text-7xl font-black text-carbon tracking-tighter leading-[0.9] mb-6">
                Tu caso de éxito <br />
                <span className="text-trebol">empieza hoy.</span>
              </h2>
              <p className="text-2xl text-carbon/70 font-light max-w-xl leading-relaxed">
                Agenda un diagnóstico gratuito de 30 minutos y construyamos los siguientes resultados para tu empresa.
              </p>
            </div>

            <Link
              href="/agenda"
              className="inline-flex items-center gap-2 bg-carbon text-hueso font-bold px-10 py-6 rounded-full hover:bg-trebol transition-colors duration-500 text-xl shrink-0 shadow-xl"
            >
              Agendar diagnóstico
              <ArrowUpRight size={22} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
