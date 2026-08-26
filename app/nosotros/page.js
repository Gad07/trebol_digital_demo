'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Quote, ChevronLeft, ChevronRight, Star, ShieldCheck, CheckCircle2 } from 'lucide-react';
import WhyUs from '@/components/WhyUs';
import ClientLogosBanner from '@/components/ClientLogosBanner';
import Contact from '@/components/Contact';

const DEFAULT_RESEÑAS = [
  {
    id: 'resena_1',
    cliente: 'Carlos Mendoza',
    cargo: 'Director de Operaciones',
    empresa: 'Logística Nexo Industrial',
    quote: 'Trébol Digital transformó nuestra captación B2B. En 60 días reducimos nuestro costo de adquisición en un 42% e integramos agentes de IA que atienden consultas de clientes 24/7 sin fallas.',
    rating: 5,
    clienteImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'resena_2',
    cliente: 'Valeria Sotomayor',
    cargo: 'CEO & Fundadora',
    empresa: 'Innova Retail Latam',
    quote: 'Lo que más valoramos de Trébol es su filosofía de autonomía. Nos capacitaron y desarrollaron una plataforma en Next.js tan sólida que nuestro equipo controla todo internamente sin depender de agencias.',
    rating: 5,
    clienteImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'resena_3',
    cliente: 'Roberto Garza',
    cargo: 'Director Comercial',
    empresa: 'Finova Capital Group',
    quote: 'La combinación entre embudos de venta de alta precisión e Inteligencia Artificial multiplicó por 3 nuestra tasa de conversión de agendamientos calificados. Excelentes profesionales.',
    rating: 5,
    clienteImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
  }
];

export default function NosotrosPage() {
  const [casos, setCasos] = useState([]);
  const [testimonios, setTestimonios] = useState(DEFAULT_RESEÑAS);
  const [loadingCasos, setLoadingCasos] = useState(true);
  const [loadingTestimonios, setLoadingTestimonios] = useState(true);
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [activeTestimonio, setActiveTestimonio] = useState(0);

  const [headerPrefix, setHeaderPrefix] = useState('Empresas que impulsan');
  const [headerMiddle, setHeaderMiddle] = useState('su crecimiento con');
  const [headerHighlight, setHeaderHighlight] = useState('Trébol Digital.');
  const [headerSubtitulo, setHeaderSubtitulo] = useState('Conoce cómo ayudamos a empresas en crecimiento a escalar sus ventas, optimizar su operación e implementar Inteligencia Artificial con resultados medibles desde el primer mes.');

  useEffect(() => {
    fetch('/api/casos')
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setCasos(data.filter((c) => c.visible !== false));
      })
      .catch(() => {})
      .finally(() => setLoadingCasos(false));

    fetch('/api/testimonios')
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const validos = data.filter((t) => t.visible !== false);
          if (validos.length > 0) {
            setTestimonios(validos.map(t => ({
              id: t.id,
              cliente: t.nombre || t.cliente || 'Cliente Trébol',
              cargo: t.cargo || '',
              empresa: t.empresa || '',
              quote: t.texto || t.quote || '',
              rating: t.rating || 5,
              clienteImg: t.avatar || t.clienteImg || ''
            })));
          }
        }
      })
      .catch(() => {})
      .finally(() => setLoadingTestimonios(false));

    fetch('/api/clientes')
      .then((r) => r.json())
      .then((data) => {
        if (data) {
          if (data.tituloPrefix !== undefined) setHeaderPrefix(data.tituloPrefix);
          if (data.tituloMiddle !== undefined) setHeaderMiddle(data.tituloMiddle);
          if (data.tituloHighlight !== undefined) setHeaderHighlight(data.tituloHighlight);
          if (data.subtitulo !== undefined) setHeaderSubtitulo(data.subtitulo);
        }
      })
      .catch(() => {});
  }, []);

  const categorias = ['Todos', ...Array.from(new Set(casos.map((c) => c.categoria).filter(Boolean)))];
  const casosFiltrados = activeCategory === 'Todos' ? casos : casos.filter((c) => c.categoria === activeCategory);

  return (
    <main className="w-full bg-hueso min-h-screen overflow-hidden">

      {/* 1. HERO NOSOTROS & CASOS DE ÉXITO */}
      <section className="relative w-full min-h-screen min-h-[100dvh] flex flex-col items-center justify-center pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 px-5 sm:px-8 md:px-12 bg-hueso border-b border-carbon/10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-40 -left-40 w-[38rem] h-[38rem] bg-trebol/20 rounded-full blur-[120px] opacity-70"></div>
          <div className="absolute top-20 right-0 w-[32rem] h-[32rem] bg-trebol/10 rounded-full blur-[100px] opacity-60"></div>
          <div className="absolute -bottom-20 left-1/3 w-[30rem] h-[30rem] bg-trebol/15 rounded-full blur-[110px] opacity-50"></div>
        </div>

        <div className="relative w-full max-w-[1400px] mx-auto text-center flex flex-col items-center justify-center z-10 space-y-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -10 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mb-2 sm:absolute sm:-top-10 md:-top-12 lg:right-[15%] sm:right-2 z-20"
          >
            <div className="bg-white/60 backdrop-blur-md px-5 sm:px-6 py-2.5 sm:py-3 border border-white/80 shadow-xl rounded-full text-xs sm:text-sm md:text-lg text-carbon font-semibold">
              Quiénes Somos & Casos de Éxito
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-[7.5rem] font-black text-carbon leading-[0.92] tracking-tighter"
          >
            {headerPrefix} {headerPrefix && <br className="hidden sm:block" />}
            {headerMiddle} <span className="text-trebol">{headerHighlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-carbon/80 font-light leading-relaxed max-w-4xl mx-auto font-sans"
          >
            {headerSubtitulo}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-2 flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/agenda"
              className="inline-flex items-center gap-2 bg-carbon text-hueso hover:bg-trebol font-bold px-9 py-4.5 rounded-full transition-all duration-300 shadow-xl text-base"
            >
              Agendar Diagnóstico Gratuito
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. HISTORIA & FILOSOFÍA (01 EL ORIGEN / 02 NUESTRA PROMESA + IMAGEN LIMPIA) */}
      <section className="w-full bg-white py-24 md:py-32 px-6 md:px-12 border-b border-carbon/10 relative z-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Columna Izquierda: Historia, Propósito y Esencia Institucional */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-carbon tracking-tighter leading-[0.95]">
                Infraestructura digital con <span className="text-trebol">autonomía real.</span>
              </h2>
            </div>

            <div className="space-y-8 text-carbon font-sans">
              {/* Bloque 1: Propósito & Esencia */}
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-carbon">Aceleración tecnológica para empresas en crecimiento</h3>
                <p className="text-base md:text-lg text-carbon/80 font-light leading-relaxed">
                  Trébol Digital es una firma consultora especializada en aceleración empresarial e ingeniería de software moderna. Transformamos organizaciones tradicionales en entidades altamente eficientes, uniendo marketing estratégico de alto rendimiento, desarrollo web a la medida e integración de Inteligencia Artificial.
                </p>
              </div>

              {/* Bloque 2: Filosofía & Autonomía */}
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-carbon">De la suerte al control absoluto de tu negocio</h3>
                <p className="text-base md:text-lg text-carbon/80 font-light leading-relaxed">
                  En un entorno competitivo, la verdadera ventaja no se deja al azar. Desarrollamos infraestructuras tecnológicas transparentes y capacitamos a tu equipo directivo para que sea dueño absoluto de sus plataformas, logrando resultados medibles desde el primer mes sin ataduras ni contratos forzados.
                </p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Logo Vertical Grande sin fondo de tarjeta */}
          <div className="lg:col-span-6 flex items-center justify-center py-6">
            <div className="relative w-full flex items-center justify-center group">
              {/* Resplandor verde ambiental muy suave detras del logo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-trebol/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-trebol/20 transition-all duration-700" />
              
              {/* Logo Oficial Vertical (Reducido 15%) */}
              <img
                src="/images/trebol_logo_vertical_user.png"
                alt="Trébol Digital Logo"
                className="relative z-10 w-full max-w-[340px] sm:max-w-[410px] md:max-w-[480px] lg:max-w-[525px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.06)] group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. LÍNEA DEL TIEMPO CRONOLÓGICA (TIMELINE AUTÉNTICO & ANIMADO) */}
      <section className="w-full bg-hueso py-24 md:py-36 px-6 md:px-12 border-b border-carbon/10 relative z-10 overflow-hidden">
        
        {/* Luces de fondo decorativas */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-trebol/10 rounded-full blur-[140px] pointer-events-none z-0" />

        <div className="max-w-[1150px] mx-auto space-y-20 relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 max-w-3xl mx-auto"
          >
            <span className="text-xs font-mono font-bold text-trebol uppercase tracking-widest block">Trayectoria e Hitos</span>
            <h2 className="text-4xl md:text-7xl font-black text-carbon tracking-tighter leading-[0.92]">
              La evolución de <span className="text-trebol">Trébol Digital.</span>
            </h2>
            <p className="text-base md:text-xl font-light text-carbon/80 leading-relaxed font-sans">
              De desafiar el modelo tradicional de agencias a consolidar la infraestructura tecnológica y de Inteligencia Artificial de las empresas líderes.
            </p>
          </motion.div>

          {/* TIMELINE VERTICAL ANIMADO */}
          <div className="relative border-l-4 border-trebol/40 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:-translate-x-1/2 md:before:top-0 md:before:bottom-0 md:before:w-1 md:before:bg-gradient-to-b md:before:from-trebol md:before:via-trebol/60 md:before:to-carbon space-y-14 md:space-y-20 pl-6 md:pl-0">
            
            {/* Hito 1 - 2021 (Izquierda) */}
            <motion.div
              initial={{ opacity: 0, y: 50, x: -30 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col md:flex-row items-center justify-between group"
            >
              {/* Punto indicador central */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 w-10 h-10 rounded-full bg-white border-4 border-trebol shadow-xl items-center justify-center z-20 group-hover:scale-125 group-hover:bg-trebol transition-all duration-500">
                <span className="w-3 h-3 rounded-full bg-trebol group-hover:bg-white transition-colors" />
              </div>
              <div className="md:hidden absolute -left-[33px] top-8 w-7 h-7 rounded-full bg-trebol border-4 border-white shadow-md" />

              {/* Contenido Card (Lado izquierdo) */}
              <div className="w-full md:w-[46%] bg-white p-8 md:p-12 rounded-[2.5rem] border border-neutral-200/90 shadow-xl hover:shadow-2xl hover:border-trebol/40 transition-all duration-500 relative overflow-hidden group/card">
                <div className="absolute top-6 right-8 text-6xl font-black font-mono text-neutral-100 select-none group-hover/card:text-trebol/10 transition-colors">
                  01
                </div>
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-4 py-1 rounded-full bg-trebol/10 border border-trebol/30 text-trebol font-mono font-black text-xs">
                      2021
                    </span>
                    <span className="text-xs font-bold text-carbon/50 uppercase tracking-widest font-mono">
                      Fase 01 · Fundación
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-carbon">
                    El Origen & La Ruptura
                  </h3>
                  <p className="text-base text-carbon/80 font-light leading-relaxed">
                    Trébol Digital nace para erradicar las métricas de vanidad de las agencias tradicionales. Establecemos el principio fundamental de entregar 100% de propiedad del código, datos e infraestructura a cada cliente.
                  </p>
                </div>
              </div>
              <div className="hidden md:block w-[46%]" />
            </motion.div>

            {/* Hito 2 - 2023 (Derecha) */}
            <motion.div
              initial={{ opacity: 0, y: 50, x: 30 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col md:flex-row-reverse items-center justify-between group"
            >
              {/* Punto indicador central */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 w-10 h-10 rounded-full bg-white border-4 border-trebol shadow-xl items-center justify-center z-20 group-hover:scale-125 group-hover:bg-trebol transition-all duration-500">
                <span className="w-3 h-3 rounded-full bg-trebol group-hover:bg-white transition-colors" />
              </div>
              <div className="md:hidden absolute -left-[33px] top-8 w-7 h-7 rounded-full bg-trebol border-4 border-white shadow-md" />

              {/* Contenido Card (Lado derecho) */}
              <div className="w-full md:w-[46%] bg-white p-8 md:p-12 rounded-[2.5rem] border border-neutral-200/90 shadow-xl hover:shadow-2xl hover:border-trebol/40 transition-all duration-500 relative overflow-hidden group/card">
                <div className="absolute top-6 right-8 text-6xl font-black font-mono text-neutral-100 select-none group-hover/card:text-trebol/10 transition-colors">
                  02
                </div>
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-4 py-1 rounded-full bg-trebol/10 border border-trebol/30 text-trebol font-mono font-black text-xs">
                      2023
                    </span>
                    <span className="text-xs font-bold text-carbon/50 uppercase tracking-widest font-mono">
                      Fase 02 · Escalamiento
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-carbon">
                    Aceleración B2B & Software Serverless
                  </h3>
                  <p className="text-base text-carbon/80 font-light leading-relaxed">
                    Consolidamos nuestras arquitecturas ultrarrápidas en Next.js y embudos de adquisición B2B de alta conversión, escalando la facturación y posicionamiento de decenas de empresas en México.
                  </p>
                </div>
              </div>
              <div className="hidden md:block w-[46%]" />
            </motion.div>

            {/* Hito 3 - 2025+ (Izquierda, Card Carbon Destacado) */}
            <motion.div
              initial={{ opacity: 0, y: 50, x: -30 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col md:flex-row items-center justify-between group"
            >
              {/* Punto indicador central */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 w-10 h-10 rounded-full bg-carbon border-4 border-trebol shadow-xl items-center justify-center z-20 group-hover:scale-125 transition-all duration-500">
                <span className="w-3 h-3 rounded-full bg-trebol animate-ping" />
              </div>
              <div className="md:hidden absolute -left-[33px] top-8 w-7 h-7 rounded-full bg-carbon border-4 border-white shadow-md" />

              {/* Contenido Card (Lado izquierdo, estilo carbon con brillo verde) */}
              <div className="w-full md:w-[46%] bg-carbon text-hueso p-8 md:p-12 rounded-[2.5rem] border border-trebol/30 shadow-2xl hover:shadow-[0_25px_60px_rgba(92,158,67,0.25)] transition-all duration-500 relative overflow-hidden group/card">
                <div className="absolute top-6 right-8 text-6xl font-black font-mono text-white/5 select-none group-hover/card:text-trebol/20 transition-colors">
                  03
                </div>
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-4 py-1 rounded-full bg-trebol text-white font-mono font-black text-xs shadow-md">
                      2025 - Presente
                    </span>
                    <span className="text-xs font-bold text-trebol uppercase tracking-widest font-mono">
                      Fase Actual · Liderazgo IA
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white">
                    Era de IA Aplicada & Autonomía Total
                  </h3>
                  <p className="text-base text-white/80 font-light leading-relaxed">
                    Integramos Agentes de IA 24/7 y sistemas predictivos, capacitando a los equipos directivos para que operen su infraestructura con total independencia tecnológica.
                  </p>
                </div>
              </div>
              <div className="hidden md:block w-[46%]" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. SECCIÓN CASOS DE ÉXITO */}
      <section className="w-full bg-white pt-24 pb-12 px-6 md:px-12 relative z-10 border-b border-carbon/10">
        <div className="max-w-[1400px] mx-auto text-center space-y-4">
          <span className="text-xs font-mono font-bold text-trebol uppercase tracking-widest block">Casos de Éxito & Resultados</span>
          <h2 className="text-4xl md:text-7xl font-black text-carbon tracking-tighter leading-[0.92]">
            {headerPrefix} <br className="hidden md:block" />
            {headerMiddle} <span className="text-trebol">{headerHighlight}</span>
          </h2>
          <p className="text-base md:text-xl text-carbon/80 font-light leading-relaxed max-w-3xl mx-auto font-sans pt-2">
            {headerSubtitulo}
          </p>
        </div>
      </section>

      {/* FILTROS Y TARJETAS DE CASOS DE ÉXITO */}
      {!loadingCasos && categorias.length > 1 && (
        <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-12 pb-8 relative z-10">
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
      )}

      <section className="w-full bg-hueso py-16 px-6 md:px-12 relative z-10 border-b border-carbon/10">
        <div className="max-w-[1400px] mx-auto space-y-16">
          {loadingCasos ? (
            [1, 2].map((i) => (
              <div key={i} className="rounded-[3.5rem] bg-white/60 border border-neutral-200 h-96 animate-pulse" />
            ))
          ) : (
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
                    className={`rounded-[3.5rem] p-8 md:p-14 border transition-all duration-500 grid md:grid-cols-12 gap-10 items-center hover:-translate-y-1 shadow-[0_20px_60px_rgba(0,0,0,0.05)] ${caso.bgColor || 'bg-white border-white'}`}
                  >
                    <div className={`md:col-span-5 h-80 md:h-[480px] rounded-[2.5rem] overflow-hidden relative shadow-2xl group ${isEven ? 'md:order-first' : 'md:order-last'}`}>
                      <img src={caso.image} alt={caso.empresa} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>

                    <div className={`md:col-span-7 space-y-6 ${isEven ? 'md:order-last' : 'md:order-first'}`}>
                      <div>
                        <span className="text-xs font-bold text-trebol uppercase tracking-widest font-mono">{caso.categoria} · {caso.lugar}</span>
                        <h3 className="text-4xl md:text-6xl font-black text-carbon tracking-tight leading-[0.9] mt-1">{caso.empresa}</h3>
                      </div>

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

                      <div className="grid grid-cols-3 gap-3 pt-2">
                        {(caso.resultados || []).map((r, i) => (
                          <div key={i} className="p-4 rounded-2xl text-center shadow-md bg-white border border-gray-200">
                            <p className="text-2xl md:text-3xl font-black text-trebol mb-0.5">{r.stat}</p>
                            <p className="text-[11px] text-carbon/60 font-light">{r.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          )}
        </div>
      </section>

      {/* 5. POR QUÉ ELEGIRNOS */}
      <WhyUs />

      {/* 6. LOGOS DE CLIENTES */}
      <ClientLogosBanner hideTitle />

      {/* 7. RESEÑAS & TESTIMONIOS DE CLIENTES */}
      {!loadingTestimonios && testimonios.length > 0 && (
        <section className="w-full bg-hueso py-24 px-6 md:px-12 border-t border-carbon/10 relative z-10">
          <div className="max-w-[1100px] mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-carbon tracking-tighter leading-[0.85] mb-16">
              Lo que dicen nuestros <span className="text-trebol">clientes.</span>
            </h2>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setActiveTestimonio(activeTestimonio === 0 ? testimonios.length - 1 : activeTestimonio - 1)}
                className="w-12 h-12 rounded-full flex items-center justify-center text-carbon hover:text-trebol transition-colors shrink-0 cursor-pointer"
                title="Testimonio anterior"
              >
                <ChevronLeft size={28} />
              </button>

              <div className="flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonio}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                    className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg flex flex-col md:flex-row min-h-[350px]"
                  >
                    {testimonios[activeTestimonio]?.clienteImg && (
                      <div className="relative w-full md:w-2/5 h-64 md:h-auto shrink-0 overflow-hidden">
                        <img
                          src={testimonios[activeTestimonio]?.clienteImg}
                          alt={testimonios[activeTestimonio]?.cliente}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1 p-8 md:p-14 text-left relative flex flex-col justify-center">
                      <Quote size={100} className="absolute -top-4 -left-2 text-trebol/10 pointer-events-none" />

                      <div className="flex items-center gap-1 mb-4 text-amber-500">
                        {Array.from({ length: testimonios[activeTestimonio]?.rating || 5 }).map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" />
                        ))}
                      </div>

                      <p className="text-lg md:text-2xl text-carbon/80 font-light leading-relaxed italic mb-8 relative z-10 font-sans">
                        &ldquo;{testimonios[activeTestimonio]?.quote}&rdquo;
                      </p>
                      <div className="pt-4 border-t border-gray-100 relative z-10 flex items-center justify-between">
                        <div>
                          <p className="text-base font-bold text-carbon mb-0.5">{testimonios[activeTestimonio]?.cliente}</p>
                          <p className="text-xs text-trebol font-semibold">
                            {testimonios[activeTestimonio]?.cargo ? `${testimonios[activeTestimonio].cargo} · ` : ''}
                            {testimonios[activeTestimonio]?.empresa}
                          </p>
                        </div>
                        <CheckCircle2 size={22} className="text-trebol opacity-80 shrink-0" />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <button
                onClick={() => setActiveTestimonio(activeTestimonio === testimonios.length - 1 ? 0 : activeTestimonio + 1)}
                className="w-12 h-12 rounded-full flex items-center justify-center text-carbon hover:text-trebol transition-colors shrink-0 cursor-pointer"
                title="Siguiente testimonio"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            <div className="flex items-center justify-center gap-3 mt-8">
              {testimonios.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonio(idx)}
                  className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${activeTestimonio === idx ? 'w-10 bg-trebol' : 'w-2.5 bg-trebol/30 hover:bg-trebol/60'}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. CONTACTO */}
      <Contact />
    </main>
  );
}
