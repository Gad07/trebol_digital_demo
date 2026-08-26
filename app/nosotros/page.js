'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Users,
  Target,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Code2,
  Cpu,
  Layers,
  Heart,
  Quote,
  ChevronLeft,
  ChevronRight,
  Star,
  Zap,
  Compass,
  BookOpen
} from 'lucide-react';
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

const DISCIPLINAS = [
  {
    id: 'estrategia',
    name: 'Estrategia',
    icon: Target,
    desc: 'Visión y modelo de negocio',
    detail: 'Alineamos objetivos comerciales, modelo de ingresos y hoja de ruta tecnológica para asegurar crecimiento sostenible.'
  },
  {
    id: 'marketing',
    name: 'Marketing',
    icon: TrendingUp,
    desc: 'Crecimiento y performance',
    detail: 'Estrategia multicanal, captación B2B/B2C, pauta optimizada y embudos de conversión con resultados medibles.'
  },
  {
    id: 'diseno',
    name: 'Diseño',
    icon: Sparkles,
    desc: 'UI/UX & Comunicación',
    detail: 'Interfaces intuitivas, comunicación de marca y experiencias de usuario que generan confianza e impacto.'
  },
  {
    id: 'desarrollo',
    name: 'Desarrollo',
    icon: Code2,
    desc: 'Software a la medida',
    detail: 'Código nativo moderno en Next.js y React, arquitecturas serverless ultrarrápidas y seguras.'
  },
  {
    id: 'tecnologia',
    name: 'Tecnología',
    icon: Layers,
    desc: 'Infraestructura robusta',
    detail: 'Integración de sistemas, bases de datos optimizadas y stacks tecnológicos preparados para escalar.'
  },
  {
    id: 'ia',
    name: 'IA',
    icon: Cpu,
    desc: 'Inteligencia Aplicada',
    detail: 'Agentes de atención 24/7, modelos generativos y automatización de procesos clave de negocio.'
  },
  {
    id: 'procesos',
    name: 'Procesos',
    icon: Compass,
    desc: 'Eficiencia operativa',
    detail: 'Optimizamos flujos de trabajo, eliminamos cuellos de botella y estandarizamos la operación interna.'
  },
  {
    id: 'personas',
    name: 'Personas',
    icon: Users,
    desc: 'Desarrollo organizacional',
    detail: 'Fomentamos la autonomía, capacitación continua y cultura colaborativa orientada al logro.'
  }
];

const PASOS_TRABAJO = [
  {
    num: '01',
    title: 'Entendemos',
    subtitle: 'Diagnóstico Integral',
    description: 'Analizamos primero a las personas, los procesos y los objetivos reales de tu organización antes de proponer cualquier solución.',
    icon: Compass
  },
  {
    num: '02',
    title: 'Diseñamos',
    subtitle: 'Estrategia & Arquitectura',
    description: 'Trazamos una estrategia integral combinando tecnología, marketing, IA y desarrollo organizacional a la medida.',
    icon: Target
  },
  {
    num: '03',
    title: 'Implementamos',
    subtitle: 'Ejecución & Tecnología',
    description: 'Construimos plataformas, activamos pauta estratégica e integramos herramientas digitales de alto rendimiento.',
    icon: Code2
  },
  {
    num: '04',
    title: 'Capacitamos',
    subtitle: 'Formación de Equipos',
    description: 'Entrenamos a tu equipo interno paso a paso para dominar las herramientas y ejecutar los procesos con solvencia.',
    icon: BookOpen
  },
  {
    num: '05',
    title: 'Transferimos',
    subtitle: 'Control & Propiedad',
    description: 'Entregamos el 100% del conocimiento, accesos, código y capacidades para garantizar tu independencia.',
    icon: Zap
  },
  {
    num: '06',
    title: 'Evolucionamos',
    subtitle: 'Autonomía Continua',
    description: 'Tu empresa continúa creciendo de forma autónoma, con la tranquilidad de estar mejor preparada que cuando llegamos.',
    icon: TrendingUp
  }
];

export default function NosotrosPage() {
  const [casos, setCasos] = useState([]);
  const [testimonios, setTestimonios] = useState(DEFAULT_RESEÑAS);
  const [loadingCasos, setLoadingCasos] = useState(true);
  const [loadingTestimonios, setLoadingTestimonios] = useState(true);
  const [activeTestimonio, setActiveTestimonio] = useState(0);
  const [selectedDisciplina, setSelectedDisciplina] = useState(DISCIPLINAS[0]);
  const [activeStep, setActiveStep] = useState(0);

  // Estados originales del Hero
  const [headerPrefix, setHeaderPrefix] = useState('Empresas que impulsan');
  const [headerMiddle, setHeaderMiddle] = useState('su crecimiento con');
  const [headerHighlight, setHeaderHighlight] = useState('Trébol Digital.');
  const [headerSubtitulo, setHeaderSubtitulo] = useState(
    'Conoce cómo ayudamos a empresas en crecimiento a escalar sus ventas, optimizar su operación e implementar Inteligencia Artificial con resultados medibles desde el primer mes.'
  );

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
          const validos = data.filter((t) => t.visible !== false && t.status !== 'draft');
          if (validos.length > 0) {
            const defaultAvatars = [
              'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
              'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
              'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
            ];

            setTestimonios(
              validos.map((t, idx) => {
                const quoteText =
                  t.texto ||
                  t.quote ||
                  t.testimonio ||
                  t.contenido ||
                  t.descripcion ||
                  t.comentario ||
                  t.mensaje ||
                  t.resena ||
                  t.review ||
                  t.opinion ||
                  t.text ||
                  'Excelente servicio y acompañamiento estratégico por parte del equipo de Trébol Digital. Logramos escalar nuestros procesos con gran autonomía.';

                const clienteImgUrl =
                  t.avatar ||
                  t.clienteImg ||
                  t.imagen_url ||
                  t.imagenUrl ||
                  t.foto ||
                  t.image ||
                  t.avatar_url ||
                  defaultAvatars[idx % defaultAvatars.length];

                const clienteNombre = t.nombre || t.cliente || t.name || t.autor || 'Cliente Trébol';
                const clienteCargo = t.cargo || t.puesto || t.role || t.title || 'Director General';
                const clienteEmpresa = t.empresa || t.company || t.negocio || 'Empresa Aliada';

                return {
                  id: t.id || `testimonio_${idx}`,
                  cliente: clienteNombre,
                  cargo: clienteCargo,
                  empresa: clienteEmpresa,
                  quote: quoteText,
                  rating: Number(t.rating || t.estrellas || t.calificacion || 5) || 5,
                  clienteImg: clienteImgUrl
                };
              })
            );
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

  const SelectedIcon = selectedDisciplina.icon;
  const ActiveStepIcon = PASOS_TRABAJO[activeStep].icon;

  return (
    <main className="w-full bg-hueso min-h-screen overflow-hidden text-carbon font-sans">

      {/* ========================================================================= */}
      {/* HERO NOSOTROS */}
      {/* ========================================================================= */}
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
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-black text-carbon leading-[0.92] tracking-tighter"
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

      {/* ========================================================================= */}
      {/* BLOQUE 01 · HISTORIA */}
      {/* ========================================================================= */}
      <section id="historia" className="relative w-full py-24 md:py-36 px-5 sm:px-8 md:px-12 bg-white border-b border-carbon/10 overflow-hidden">
        <div className="relative w-full max-w-[1300px] mx-auto z-10 space-y-12">
          
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-carbon tracking-tight leading-[0.95]">
              Trébol nació en 2017. <br />
              <span className="text-trebol">Tenemos 9 años evolucionando.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Columna Izquierda: Narrativa del Mockup */}
            <div className="lg:col-span-7 space-y-6 text-carbon/80 font-light text-base sm:text-lg md:text-xl leading-relaxed">
              <div className="p-8 sm:p-10 bg-hueso rounded-[2.5rem] border border-carbon/10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-3 h-full bg-trebol" />
                <p className="font-semibold text-carbon text-lg sm:text-xl leading-relaxed">
                  Trébol Digital nació de una idea sencilla: ayudar a las empresas a aprovechar mejor las oportunidades que ofrecía el mundo digital, el internet y las redes sociales.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-hueso border border-carbon/10 space-y-3">
                <p className="text-carbon font-bold text-lg sm:text-xl">
                  Nueve años después, esa idea evoluciona.
                </p>
                <p className="text-carbon/80 text-base sm:text-lg font-light leading-relaxed">
                  Hoy combinamos experiencia en marketing, estrategia, tecnología, desarrollo web, inteligencia artificial y desarrollo organizacional para resolver problemas reales de negocio desde una perspectiva integral.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-hueso border border-carbon/10 space-y-3">
                <p className="text-carbon font-bold text-lg sm:text-xl">
                  Nuestra filosofía de implementación:
                </p>
                <p className="text-carbon/80 text-base sm:text-lg font-light leading-relaxed">
                  No creemos en implementar herramientas sólo porque están de moda. Creemos en entender primero a las personas, los procesos y los objetivos de cada organización para después construir la solución adecuada.
                </p>
              </div>

              {/* Remate de Historia */}
              <div className="p-6 md:p-8 rounded-[2rem] bg-[#EEF7E6] border border-trebol/40 text-carbon font-bold text-xl sm:text-2xl">
                <p className="text-trebol">
                  Crecimos. Aprendimos. Evolucionamos. Y volvimos a encontrarnos.
                </p>
              </div>
            </div>

            {/* Columna Derecha: Logo Vertical Oficial Limpio */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[480px] bg-hueso rounded-[3rem] p-8 sm:p-12 border border-carbon/10 space-y-8 text-center">
                <div className="relative w-full pt-4 flex justify-center items-center">
                  <img
                    src="/images/trebol_logo_vertical_user.png"
                    alt="Trébol Digital Logo"
                    className="w-full max-w-[340px] h-auto object-contain"
                  />
                </div>

                <div className="pt-6 border-t border-carbon/10 grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-2xl border border-carbon/5">
                    <p className="text-4xl font-black text-trebol">9 Años</p>
                    <p className="text-[11px] text-carbon/70 font-bold uppercase tracking-wider mt-1">Evolución Digital</p>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border border-carbon/5">
                    <p className="text-4xl font-black text-carbon">360°</p>
                    <p className="text-[11px] text-carbon/70 font-bold uppercase tracking-wider mt-1">Visión Integral</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOQUE 02 · QUIÉNES SOMOS */}
      {/* ========================================================================= */}
      <section className="w-full bg-hueso py-20 md:py-32 px-5 sm:px-8 md:px-12 border-b border-carbon/10 relative z-10">
        <div className="max-w-[1300px] mx-auto space-y-12">
          
          {/* Encabezado Conciso */}
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-carbon tracking-tight leading-tight">
              Quiénes <span className="text-trebol">Somos</span>
            </h2>
            <p className="text-base sm:text-lg font-light text-carbon/80 leading-relaxed max-w-3xl">
              Somos un grupo de especialistas apasionados por construir empresas más humanas, más inteligentes y más competitivas. Hoy en día Trébol funciona con una red de especialistas que integra diferentes disciplinas de acuerdo con las necesidades de cada proyecto.
            </p>
          </div>

          {/* Matriz Concisa de 8 Disciplinas */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {DISCIPLINAS.map((disc) => {
                const IconComp = disc.icon;
                const isSelected = selectedDisciplina.id === disc.id;
                return (
                  <button
                    key={disc.id}
                    onClick={() => setSelectedDisciplina(disc)}
                    className={`p-3.5 rounded-2xl border text-center transition-all duration-300 flex flex-col items-center justify-center gap-2 cursor-pointer min-h-[110px] ${
                      isSelected
                        ? 'bg-carbon text-hueso border-trebol shadow-lg scale-105 z-10'
                        : 'bg-white text-carbon border-carbon/10 hover:border-trebol/40'
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-trebol text-white' : 'bg-hueso text-trebol'
                    }`}>
                      <IconComp size={18} />
                    </div>
                    <h3 className={`font-bold text-xs ${isSelected ? 'text-white' : 'text-carbon'}`}>
                      {disc.name}
                    </h3>
                  </button>
                );
              })}
            </div>

            {/* Vista Concisa de la Disciplina Seleccionada */}
            <div className="p-6 sm:p-8 bg-white rounded-3xl border border-carbon/10 flex items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-trebol text-white flex items-center justify-center shrink-0 shadow-md">
                  {SelectedIcon && <SelectedIcon size={24} />}
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-carbon">
                    {selectedDisciplina.name} · <span className="text-trebol font-normal">{selectedDisciplina.desc}</span>
                  </h4>
                  <p className="text-sm text-carbon/80 font-light mt-0.5 max-w-3xl">
                    {selectedDisciplina.detail}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Manifiesto Trébol Conciso */}
          <div className="bg-carbon text-hueso p-8 sm:p-12 rounded-3xl border border-trebol/30 shadow-xl grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Unimos talento especializado para diseñar el futuro de tu negocio.
              </h3>
              <p className="text-base text-white/80 font-light">
                Creamos soluciones digitales más inteligentes, humanas y competitivas.
              </p>
            </div>

            <div className="md:col-span-5 bg-white/10 p-6 rounded-2xl border border-white/20 space-y-3">
              <Quote size={30} className="text-trebol" />
              <p className="text-sm sm:text-base text-white font-light italic leading-relaxed">
                &ldquo;Porque creemos que hoy no se necesita saber de todo. Se necesita identificar al especialista en cada materia para construir soluciones prácticas.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOQUE 03 · EXPERIENCIA (LISTADO EDITORIAL SIN CARDS/SIN PILLS) */}
      {/* ========================================================================= */}
      <section className="w-full bg-white py-20 md:py-32 px-5 sm:px-8 md:px-12 border-b border-carbon/10 relative z-10">
        <div className="max-w-[1300px] mx-auto z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Columna Izquierda: Editorial & Narrativa */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-carbon tracking-tight leading-tight">
                  Experiencia que nos ha <span className="text-trebol">fortalecido.</span>
                </h2>
              </div>

              <p className="text-base sm:text-lg text-carbon/80 font-light leading-relaxed">
                Detrás de cada proyecto existe experiencia construida durante años trabajando en cada área de expertise de manera colaborativa y multidisciplinaria, con estructuras ágiles y objetivos claros.
              </p>

              <div className="border-l-4 border-trebol pl-5 py-2">
                <p className="text-base sm:text-lg text-carbon font-semibold italic leading-relaxed">
                  &ldquo;Esa experiencia hoy converge en Trébol para desarrollar soluciones con una visión más completa del negocio.&rdquo;
                </p>
              </div>
            </div>

            {/* Columna Derecha: Listado Editorial Animado con Iconos (SIN NÚMEROS / SIN CARDS / SIN PILLS) */}
            <div className="lg:col-span-7 divide-y divide-carbon/10 border-t border-b border-carbon/10">
              {[
                {
                  icon: TrendingUp,
                  title: '+8 años en Marketing Digital',
                  desc: 'Gestión de campañas de alta precisión, atracción de prospectos calificados y crecimiento de marca.'
                },
                {
                  icon: CheckCircle2,
                  title: 'Gestión de proyectos',
                  desc: 'Estructuras ágiles, sprints iterativos, objetivos claros y comunicación continua sin burocracia.'
                },
                {
                  icon: Target,
                  title: 'Estrategia y performance',
                  desc: 'Optimización permanente orientada al retorno de inversión y rentabilidad real del negocio.'
                },
                {
                  icon: Code2,
                  title: 'Desarrollo Web',
                  desc: 'Ingeniería de software serverless nativa en Next.js, plataformas ultrarrápidas y accesibles.'
                },
                {
                  icon: Sparkles,
                  title: 'Diseño y comunicación',
                  desc: 'Identidad visual memorable y arquitectura de contenido pensada para la máxima conversión.'
                },
                {
                  icon: Cpu,
                  title: 'IA aplicada al negocio',
                  desc: 'Implementación práctica de agentes inteligentes, flujos automatizados e IA de valor práctico.'
                }
              ].map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    whileHover={{ x: 6 }}
                    className="py-6 flex items-center justify-between gap-4 group hover:bg-hueso/60 px-3 sm:px-5 rounded-2xl transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl bg-hueso text-trebol border border-carbon/10 flex items-center justify-center shrink-0 group-hover:bg-trebol group-hover:text-white group-hover:border-trebol transition-colors duration-300 shadow-sm">
                        <IconComp size={20} />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg sm:text-xl font-bold text-carbon group-hover:text-trebol transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-sm text-carbon/70 font-light leading-relaxed max-w-xl">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOQUE 04 · NUESTRO ENFOQUE - VALORES */}
      {/* ========================================================================= */}
      <section className="w-full bg-hueso py-20 md:py-32 px-5 sm:px-8 md:px-12 border-b border-carbon/10 relative z-10">
        <div className="max-w-[1300px] mx-auto space-y-12">
          
          <div className="space-y-3 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-carbon tracking-tight leading-tight">
              Nuestro Enfoque <span className="text-trebol">& Valores</span>
            </h2>
            <p className="text-base sm:text-lg font-light text-carbon/80 leading-relaxed">
              Creemos que los mejores resultados se construyen en ambientes donde las personas pueden proponer, aprender, crear y hacer bien su trabajo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4 border-l-2 border-trebol pl-6 py-2"
            >
              <div className="w-10 h-10 rounded-xl bg-white text-trebol border border-carbon/10 flex items-center justify-center shadow-sm">
                <ShieldCheck size={22} />
              </div>
              <h3 className="text-xl font-bold text-carbon">Confianza & Respeto</h3>
              <p className="text-base text-carbon/80 font-light leading-relaxed">
                Buscamos relaciones basadas en <strong className="font-semibold text-carbon">confianza, responsabilidad, comunicación y respeto</strong>, tanto con nuestros clientes como con quienes colaboran con nosotros.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4 border-l-2 border-trebol pl-6 py-2"
            >
              <div className="w-10 h-10 rounded-xl bg-white text-trebol border border-carbon/10 flex items-center justify-center shadow-sm">
                <Target size={22} />
              </div>
              <h3 className="text-xl font-bold text-carbon">Autonomía & Claridad</h3>
              <p className="text-base text-carbon/80 font-light leading-relaxed">
                Nos gustan los <strong className="font-semibold text-carbon">objetivos claros, las buenas ideas, la autonomía</strong> y los equipos que disfrutan construir juntos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 border-l-2 border-trebol pl-6 py-2"
            >
              <div className="w-10 h-10 rounded-xl bg-white text-trebol border border-carbon/10 flex items-center justify-center shadow-sm">
                <Heart size={22} />
              </div>
              <h3 className="text-xl font-bold text-carbon">Impacto Positivo</h3>
              <p className="text-base text-carbon/80 font-light leading-relaxed">
                Queremos que trabajar con Trébol <strong className="font-semibold text-carbon">sume, a las empresas y a las personas</strong>. Generar un entorno transparente de crecimiento mutuo.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOQUE 05 · FORMA DE TRABAJAR */}
      {/* ========================================================================= */}
      <section className="w-full bg-white py-20 md:py-32 px-5 sm:px-8 md:px-12 border-b border-carbon/10 relative z-10">
        <div className="max-w-[1300px] mx-auto space-y-12">
          
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-carbon tracking-tight leading-tight">
              Forma de <span className="text-trebol">Trabajar</span>
            </h2>
            <p className="text-xl sm:text-2xl font-bold text-carbon">
              Construimos autonomía, no dependencia.
            </p>
            <p className="text-base sm:text-lg font-light text-carbon/80 leading-relaxed">
              Entramos a los proyectos para aportar conocimiento, estrategia y herramientas; implementamos, capacitamos y transferimos capacidades para que cada empresa pueda continuar evolucionando.
            </p>
            <div className="border-l-4 border-trebol pl-5 py-2 mt-2">
              <p className="text-base sm:text-lg text-trebol font-semibold italic">
                &ldquo;Nuestro éxito no consiste en volvernos indispensables. Consiste en dejar a nuestros clientes mejor preparados que cuando llegamos.&rdquo;
              </p>
            </div>
          </div>

          {/* Diagrama de 6 Pasos Interactivo Minimalista */}
          <div className="space-y-8 pt-4">
            <div className="border-b border-carbon/10 pb-3 flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-carbon/60 uppercase tracking-widest">
                Flujo Continuo en 6 Pasos
              </span>
              <span className="text-xs font-mono font-bold text-trebol uppercase">
                Paso {PASOS_TRABAJO[activeStep].num} de 06
              </span>
            </div>

            {/* Selector de Pasos en Línea Horizontal */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {PASOS_TRABAJO.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={step.num}
                    onClick={() => setActiveStep(idx)}
                    className={`p-3.5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                      isActive
                        ? 'bg-carbon text-hueso border-trebol shadow-md scale-105 z-10'
                        : 'bg-hueso text-carbon border-carbon/10 hover:border-trebol/40'
                    }`}
                  >
                    <span className={`text-xs font-mono font-black ${isActive ? 'text-trebol' : 'text-carbon/40'}`}>
                      {step.num}
                    </span>
                    <h3 className={`font-bold text-sm mt-2 ${isActive ? 'text-white' : 'text-carbon'}`}>
                      {step.title}
                    </h3>
                  </button>
                );
              })}
            </div>

            {/* Detalle del Paso Seleccionado Editorial */}
            <div className="p-6 sm:p-10 bg-hueso rounded-3xl border border-carbon/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-black text-carbon">
                  {PASOS_TRABAJO[activeStep].title} · <span className="text-trebol">{PASOS_TRABAJO[activeStep].subtitle}</span>
                </h3>
                <p className="text-base sm:text-lg text-carbon/80 font-light leading-relaxed max-w-3xl">
                  {PASOS_TRABAJO[activeStep].description}
                </p>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-trebol text-white flex items-center justify-center shrink-0 shadow-md">
                {ActiveStepIcon && <ActiveStepIcon size={28} />}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOQUE 06 · QUIÉNES HAN CONFIADO EN NOSOTROS */}
      {/* ========================================================================= */}
      <section className="w-full bg-hueso py-20 md:py-32 px-5 sm:px-8 md:px-12 border-b border-carbon/10 relative z-10">
        <div className="max-w-[1300px] mx-auto space-y-12">
          
          <div className="space-y-3 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-carbon tracking-tight leading-tight">
              Clientes & <span className="text-trebol">Casos de Éxito</span>
            </h2>
            <p className="text-base sm:text-lg font-light text-carbon/80 leading-relaxed">
              Gracias por confiar en nosotros desde el comienzo. Cada empresa que nos abre sus puertas también nos permite aprender, mejorar y construir la siguiente etapa de Trébol.
            </p>
          </div>

          {/* Banner Oficial de Logos de Clientes */}
          <ClientLogosBanner hideTitle />

          {/* Reseñas & Testimonios de Clientes (Restauración Exacta de la Versión Original de Git) */}
          {!loadingTestimonios && testimonios.length > 0 && (
            <div className="pt-6">
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
                        <div className="relative w-full md:w-2/5 h-64 md:h-auto shrink-0 overflow-hidden bg-neutral-100 flex items-center justify-center">
                          <img
                            src={testimonios[activeTestimonio]?.clienteImg}
                            alt={testimonios[activeTestimonio]?.cliente}
                            className="w-full h-full object-cover object-top md:object-center transition-transform duration-500"
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
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BLOQUE 07 · CIERRE (FONDO OSCURO) */}
      {/* ========================================================================= */}
      <section className="w-full bg-carbon text-hueso py-28 md:py-44 px-5 sm:px-8 md:px-12 relative z-10 overflow-hidden">
        <div className="max-w-[1150px] mx-auto text-center space-y-12 relative z-10">
          
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.88]">
              Tenemos mucho por <span className="text-trebol">construir.</span>
            </h2>
            <p className="text-lg sm:text-2xl md:text-3xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto">
              Cuéntanos qué está pasando en tu empresa y descubramos dónde podemos generar una oportunidad de mejora.
            </p>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/agenda"
              className="inline-flex items-center gap-3 bg-trebol text-white hover:bg-white hover:text-carbon font-bold px-10 py-5 rounded-full transition-all duration-300 shadow-2xl text-lg sm:text-xl group"
            >
              Solicita tu diagnóstico gratuito
              <ArrowRight size={22} className="group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>

          {/* Firma y Cierre Inferior */}
          <div className="pt-20 border-t border-white/10 space-y-3">
            <h3 className="text-3xl font-black text-white tracking-tight">Trébol Digital</h3>
            <p className="text-xl text-trebol font-semibold italic">
              Tenemos la suerte de encontrarnos.
            </p>
          </div>
        </div>
      </section>

      {/* Componente Global de Contacto */}
      <Contact />
    </main>
  );
}
