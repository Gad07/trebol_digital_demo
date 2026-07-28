'use client';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Quote, User, Play, Award, Calendar, Clock, Video } from 'lucide-react';
import { use, useState } from 'react';
import Contact from '@/components/Contact';

const articulos = {
  'ia-en-tu-negocio-hoy': {
    plantilla: 'feature',
    titulo: '5 formas de usar IA en tu negocio hoy mismo',
    categoria: 'Inteligencia Artificial',
    tiempo: '8 min',
    fecha: '22 julio, 2026',
    autor: 'Trébol Digital',
    autorBio: 'Expertos en marketing y desarrollo tecnológico.',
    extracto: 'La inteligencia artificial ya no es exclusiva para grandes corporativos. Te mostramos 5 herramientas prácticas que puedes implementar esta semana sin presupuesto millonario.',
    imagen: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1800&q=80',
    contenido: [
      { tipo: 'subtitulo', texto: '1. Automatiza tu atención al cliente con ChatGPT' },
      { tipo: 'parrafo', texto: 'Configura un asistente de IA que responda preguntas frecuentes de tus clientes 24/7. Herramientas como ChatGPT, Claude o Gemini pueden entrenarse con la información de tu negocio para dar respuestas precisas y en el tono de tu marca.' },
      { tipo: 'subtitulo', texto: '2. Genera contenido con ayuda de la IA' },
      { tipo: 'parrafo', texto: 'No se trata de que la IA escriba por ti, sino de que te ayude a estructurar ideas, crear borradores y superar el bloqueo creativo. Puedes generar el 80% del contenido con IA y darle el 20% de tu toque humano.' },
      { tipo: 'subtitulo', texto: '3. Automatiza flujos repetitivos con Make o Zapier' },
      { tipo: 'parrafo', texto: 'Conecta tus herramientas para que trabajen juntas sin intervención manual. Por ejemplo: cuando llega un lead en tu formulario web, que automáticamente se agregue a tu CRM y dispare un correo.' },
      { tipo: 'subtitulo', texto: '4. Analiza datos con IA sin ser experto' },
      { tipo: 'parrafo', texto: 'Herramientas como Julius AI o ChatGPT con Code Interpreter te permiten subir una hoja de cálculo y hacer preguntas en lenguaje natural obteniendo respuestas visuales en segundos.' },
      { tipo: 'subtitulo', texto: '5. Crea imágenes y videos con IA para tus redes' },
      { tipo: 'parrafo', texto: 'Midjourney, DALL-E o Canva AI te permiten crear imágenes profesionales para tus publicaciones sin necesidad de diseñador.' },
    ],
  },
  'estrategia-de-contenido': {
    plantilla: 'guia',
    titulo: 'Cómo construir una estrategia de contenido desde cero',
    categoria: 'Marketing',
    tiempo: '10 min',
    fecha: '15 julio, 2026',
    autor: 'Trébol Digital',
    autorBio: 'Expertos en marketing y desarrollo tecnológico.',
    extracto: 'Un paso a paso para crear contenido que atraiga, conecte y convierta sin necesitar un equipo enorme ni presupuesto de agencia.',
    imagen: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1800&q=80',
    contenido: [
      { tipo: 'parrafo', texto: 'Antes de escribir una sola palabra, necesitas saber exactamente a quién va dirigido tu contenido. Es una persona con un problema específico que tu negocio puede resolver.' },
      { tipo: 'paso', numero: 1, titulo: 'Primero: define a quién le hablas', texto: 'Antes de escribir una sola palabra, necesitas saber exactamente a quién va dirigido tu contenido. Es una persona con un problema específico que tu negocio puede resolver.', checklist: ['Investiga a tu cliente ideal', 'Crea su perfil demográfico', 'Identifica sus mayores frustraciones'] },
      { tipo: 'paso', numero: 2, titulo: 'Segundo: decide en qué canales vas a estar', texto: 'No necesitas estar en todos lados. Es mejor hacer bien 1 o 2 canales que hacer mal 5. Elige los canales donde está tu cliente ideal.', checklist: ['LinkedIn para B2B', 'Instagram/TikTok para B2C', 'Email marketing para conversiones'] },
      { tipo: 'paso', numero: 3, titulo: 'Tercero: crea un calendario editorial', texto: 'La consistencia gana a la perfección. Un calendario editorial te ayuda a planificar, no improvisar.', checklist: ['Define frecuencia de publicación', 'Prepara contenido con 2 semanas de anticipación', 'Mide y optimiza el rendimiento'] },
    ],
  },
  'seo-local-pymes': {
    plantilla: 'listicle',
    titulo: 'SEO local: la guía definitiva para PYMEs',
    categoria: 'Marketing',
    tiempo: '12 min',
    fecha: '8 julio, 2026',
    autor: 'Trébol Digital',
    autorBio: 'Equipo de estrategia digital.',
    extracto: 'Cómo aparecer primero en Google cuando alguien busca tu servicio en tu ciudad.',
    imagen: 'https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&w=1800&q=80',
    contenido: [
      { tipo: 'parrafo', texto: 'El SEO local es la herramienta más poderosa y subestimada para negocios que atienden en una ubicación específica. Mientras todos compiten por palabras clave genéricas, tú puedes dominar las búsquedas de tu ciudad.' },
      { tipo: 'item', numero: 1, titulo: 'Google Business Profile', texto: 'Completar tu perfil al 100% aumenta drásticamente tus posibilidades de aparecer en el map pack. Sube fotos nuevas cada semana.', stat: '76%' },
      { tipo: 'item', numero: 2, titulo: 'Palabras clave locales', texto: 'En lugar de competir por "abogado", compite por "abogado laboral en Guadalajara". Las keywords con ubicación tienen menos competencia.', stat: '3x' },
      { tipo: 'item', numero: 3, titulo: 'Reseñas de clientes', texto: 'El 87% de los consumidores lee reseñas antes de decidirse. Responde a todas, tanto positivas como negativas.', stat: '87%' },
      { tipo: 'item', numero: 4, titulo: 'Contenido geolocalizado', texto: 'Escribe sobre eventos locales, colabora con otros negocios de tu zona. El contenido localizado genera 2.5x más tráfico orgánico.', stat: '2.5x' },
      { tipo: 'item', numero: 5, titulo: 'Backlinks locales', texto: 'Aparecer en directorios locales, páginas de cámaras de comercio y medios locales construye señales de confianza para Google.', stat: '43%' },
    ],
  },
  'cultura-empresarial': {
    plantilla: 'entrevista',
    titulo: 'Por qué la cultura empresarial es tu mayor activo',
    categoria: 'Organizacional',
    tiempo: '7 min',
    fecha: '1 julio, 2026',
    autor: 'Ana Sofía Guerra',
    autorBio: 'Consultora en cultura organizacional.',
    extracto: 'Las empresas que crecen de forma sostenida tienen una cultura clara. Te explicamos cómo construirla aunque seas una PYME.',
    imagen: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1800&q=80',
    entrevistado: {
      nombre: 'Ana Sofía Guerra',
      rol: 'Consultora en Cultura Organizacional',
      foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    },
    contenido: [
      { tipo: 'intro', texto: 'Hablamos con Ana Sofía Guerra sobre por qué las PYMEs deberían prestar atención a su cultura empresarial desde el día uno.' },
      { tipo: 'pregunta', texto: '¿Por qué la cultura importa tanto en una PYME?' },
      { tipo: 'respuesta', texto: 'Porque en una PYME no hay capas de gestión que absorban los problemas. Si la cultura es mala, se siente de inmediato. En una empresa de 10 personas, una persona tóxica representa el 10% del ambiente.' },
      { tipo: 'pullquote', texto: 'En una PYME, una persona tóxica representa el 10% del ambiente. En una corporación de 1000, es solo el 0.1%.', autor: 'Ana Sofía Guerra' },
      { tipo: 'pregunta', texto: '¿Cómo se empieza a construir cultura desde cero?' },
      { tipo: 'respuesta', texto: 'Lo primero es aceptar que ya tienes cultura, te guste o no. Tus equipos ya tienen formas de trabajar, comunicarse y resolver conflictos. El primer paso es hacer consciente lo que ya existe.' },
      { tipo: 'pregunta', texto: '¿Qué recomiendas con presupuesto limitado?' },
      { tipo: 'respuesta', texto: 'Tres cosas gratis: define tus valores en una frase que cualquier miembro del equipo pueda recordar. Celebra los aciertos en público y corrige en privado. Pide retroalimentación semanal con una sola pregunta.' },
    ],
  },
  'automatizacion-sin-codigo': {
    plantilla: 'guia',
    titulo: 'Automatización sin código explicada',
    categoria: 'Inteligencia Artificial',
    tiempo: '9 min',
    fecha: '24 junio, 2026',
    autor: 'Diego Ramírez',
    autorBio: 'Ingeniero de automatización.',
    extracto: 'Tres herramientas de automatización explicadas sin tecnicismos.',
    imagen: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=1800&q=80',
    contenido: [
      { tipo: 'parrafo', texto: 'La automatización no requiere saber programar. Con estas tres herramientas, cualquier persona puede conectar aplicaciones y eliminar tareas repetitivas en minutos.' },
      { tipo: 'paso', numero: 1, titulo: 'Identifica procesos repetitivos', texto: 'Durante una semana, anota cada tarea que haces de forma repetitiva: enviar correos, actualizar hojas de cálculo, mover archivos.', checklist: ['Tareas que haces +3 veces por semana', 'Calcula el tiempo que te toma', 'Pregúntate si necesita un humano'] },
      { tipo: 'paso', numero: 2, titulo: 'Elige la herramienta', texto: 'Cada herramienta tiene un superpoder diferente. Make es visual y potente. Zapier es el más fácil. n8n es ideal si necesitas control total.', checklist: ['Make: flujos visuales complejos', 'Zapier: fácil para empezar', 'n8n: auto-hosteado'] },
      { tipo: 'dato', label: 'Ahorro', valor: '30h', texto: 'por semana es el ahorro promedio reportado por equipos que automatizan al menos 3 procesos clave.' },
      { tipo: 'paso', numero: 3, titulo: 'Prueba tu primer flujo', texto: 'Empieza con algo pequeño: cuando recibas un correo con un adjunto, que se guarde automáticamente en Drive. Una vez que funcione, escala.', checklist: ['Flujo simple de 2 pasos', 'Prueba con datos reales', 'Itera antes de escalar'] },
    ],
  },
  'metricas-que-importan': {
    plantilla: 'listicle',
    titulo: 'Las métricas que realmente importan',
    categoria: 'Estrategia',
    tiempo: '11 min',
    fecha: '17 junio, 2026',
    autor: 'Trébol Digital',
    autorBio: 'Equipo de estrategia.',
    extracto: 'No todas las métricas son iguales. Separamos los vanity metrics de los que realmente importan.',
    imagen: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=80',
    contenido: [
      { tipo: 'parrafo', texto: 'El mayor error que cometen los negocios al medir su desempeño es confundir actividad con progreso. Tener muchos seguidores no significa tener una marca fuerte. Recibir muchos correos no significa tener ventas.' },
      { tipo: 'parrafo', texto: 'Las vanity metrics son aquellas que se ven bien en informes pero no te ayudan a tomar decisiones. Ejemplos: seguidores en redes, visitas al sitio web, descargas de una app.' },
      { tipo: 'item', numero: 1, titulo: 'CAC (Costo de Adquisición de Clientes)', texto: 'Cuánto te cuesta conseguir un nuevo cliente. Es vital saberlo para saber si tu marketing es rentable.', stat: 'CAC' },
      { tipo: 'item', numero: 2, titulo: 'LTV (Lifetime Value)', texto: 'Cuánto dinero genera un cliente a lo largo de su relación con tu negocio.', stat: 'LTV' },
      { tipo: 'pullquote', texto: 'Lo que no se define no se puede medir. Lo que no se mide no se puede mejorar. Lo que no se mejora se degrada siempre.', autor: 'William Thomson Kelvin' },
      { tipo: 'dato', label: 'Relación saludable', valor: '3:1', texto: 'es la proporción mínima recomendada entre LTV y CAC. Si tu LTV es menor a 3 veces tu CAC, necesitas ajustes.' },
      { tipo: 'item', numero: 3, titulo: 'Tasa de Conversión', texto: 'El porcentaje de visitas a tu web que realizan la acción deseada (ej. agendar una cita o comprar).', stat: 'Conv.' },
    ],
  },
};

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
    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-trebol border border-trebol/30 px-3 py-1 font-sans">
      {text}
    </span>
  );
}

function Sidebar() {
  const linkedinItems = [
    { id: 1, image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=300&q=80', alt: 'Colaboración del equipo' },
    { id: 2, image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=300&q=80', alt: 'Desarrollo y tecnología' },
    { id: 3, image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=300&q=80', alt: 'Estrategia y planeación' },
    { id: 4, image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=300&q=80', alt: 'Diseño e interfaces' },
    { id: 5, image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=300&q=80', alt: 'Analítica y datos' },
    { id: 6, image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=300&q=80', alt: 'Conocimiento y lectura' },
  ];

  return (
    <aside className="w-full space-y-12 lg:sticky lg:top-24 max-w-[320px] mx-auto lg:mx-0 shrink-0 relative z-10">
      {/* Newsletter Box (Premium home-style glassmorphism box) */}
      <div className="bg-white/50 backdrop-blur-xl border border-white/60 p-8 rounded-[2.5rem] shadow-xl text-left relative overflow-hidden">
        <div className="absolute -top-16 -left-16 w-32 h-32 bg-trebol/10 rounded-full blur-2xl pointer-events-none" />
        <h4 className="font-serif text-2xl font-bold leading-tight mb-3 text-carbon">
          Recibe todas las entradas.
        </h4>
        <p className="text-xs text-carbon/60 font-sans font-light leading-relaxed mb-6">
          Únete a nuestro boletín semanal con insights de marketing, IA y crecimiento de negocio.
        </p>
        <form onSubmit={(e) => { e.preventDefault(); alert('¡Suscrito con éxito!'); }} className="space-y-4">
          <input
            type="email"
            required
            placeholder="Email"
            className="w-full bg-white/40 border border-carbon/10 text-carbon placeholder:text-carbon/40 px-4 py-3.5 text-xs rounded-full outline-none focus:border-trebol transition-colors"
          />
          <button
            type="submit"
            className="w-full bg-trebol text-white font-bold text-xs uppercase tracking-widest py-3.5 rounded-full hover:bg-carbon hover:shadow-lg transition-all duration-300"
          >
            Suscribirse
          </button>
        </form>
      </div>

      {/* LinkedIn Simulated Feed (Visual layout matching reference's Instagram feed) */}
      <div className="space-y-4 text-left">
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-carbon font-sans block border-b border-carbon/10 pb-2">
          Síguenos en LinkedIn
        </span>
        <div className="grid grid-cols-3 gap-2">
          {linkedinItems.map((item) => (
            <a
              key={item.id}
              href="https://www.linkedin.com/company/treboldigital"
              target="_blank"
              rel="noreferrer"
              className="relative aspect-square overflow-hidden rounded-xl border border-carbon/5 bg-white group/feed shadow-[0_4px_12px_rgba(0,0,0,0.02)]"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover grayscale-[40%] group-hover/feed:grayscale-0 group-hover/feed:scale-105 transition-all duration-500"
              />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}

function ArticleHeader({ art }) {
  return (
    <>
      {/* ── 3-Image Hero Grid ── */}
      <section className="max-w-[1100px] mx-auto px-6 md:px-12 pt-36 pb-6 relative z-10">
        <div className="grid grid-cols-3 gap-3 md:gap-6">
          <div className="aspect-[3/4] overflow-hidden rounded-[2rem] border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.03)] bg-white">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
              alt="Workspace"
              className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="aspect-[3/4] overflow-hidden rounded-[2rem] border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.03)] bg-white">
            <img
              src={art.imagen}
              alt={art.titulo}
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="aspect-[3/4] overflow-hidden rounded-[2rem] border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.03)] bg-white">
            <img
              src="https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=600&q=80"
              alt="Plant"
              className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* ── Title & Metadata Block ── */}
      <section className="max-w-[1100px] mx-auto px-6 md:px-12 text-center pb-8 relative z-10">
        <div className="mb-4">
          <BackLink />
        </div>
        <div className="mb-4">
          <SectionLabel text={art.categoria} />
        </div>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-black text-carbon leading-[1.05] tracking-tight mb-6">
          {art.titulo}
        </h1>
        <div className="flex items-center justify-center gap-4 text-xs text-gris font-sans mb-8">
          <span>{art.fecha}</span>
          <span className="w-1 h-1 bg-gris rounded-full" />
          <span>{art.tiempo} de lectura</span>
          <span className="w-1 h-1 bg-gris rounded-full" />
          <span>Por {art.autor}</span>
        </div>
        <div className="border-b border-carbon/10 pb-2" />
      </section>
    </>
  );
}

/* ─── 1. PLANTILLA GENERAL ──────────────────────────────────────── */
function TemplateGeneral({ art }) {
  return (
    <article className="bg-hueso relative">
      <ArticleHeader art={art} />

      <div className="max-w-[1100px] mx-auto px-6 md:px-12 pb-20 relative z-10">
        {/* 2-Column Sidebar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start">
          {/* Left Column: Body editorial */}
          <div>
            {/* Excerpt editorial lead paragraph */}
            <div className="font-serif text-xl md:text-2xl text-carbon/80 italic leading-relaxed text-justify mb-10 pb-8 border-b border-carbon/10">
              {art.extracto}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
              {art.contenido.map((bloque, i) => {
                if (bloque.tipo === 'parrafo') {
                  const isFirst = i === 0;
                  return (
                    <p 
                      key={i} 
                      className="text-[15px] text-carbon font-light leading-[1.7] text-justify mb-6 font-sans"
                    >
                      {isFirst && (
                        <span className="float-left font-serif text-[5.5rem] font-black text-trebol leading-[0.75] mr-3 mt-1">
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
                      className="col-span-1 md:col-span-2 font-serif text-3xl md:text-4xl font-black text-carbon tracking-tight mt-12 mb-6 leading-tight border-t-2 border-carbon pt-6"
                    >
                      {bloque.texto}
                    </h2>
                  );
                }
                if (bloque.tipo === 'pullquote') {
                  return (
                    <div key={i} className="col-span-1 md:col-span-2 my-16 grid md:grid-cols-[1fr_2fr] gap-0 border border-white/70 bg-white/50 backdrop-blur-xl rounded-[2.5rem] shadow-[0_8px_32px_rgba(0,0,0,0.03)] overflow-hidden">
                      <div className="bg-trebol/10 p-8 md:p-12 flex items-center justify-center border-r border-carbon/5">
                        <Quote size={48} className="text-trebol" strokeWidth={1.5} />
                      </div>
                      <div className="p-8 md:p-12">
                        <p className="font-serif text-2xl md:text-3xl font-bold text-carbon leading-snug italic mb-4">
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
                    <div key={i} className="col-span-1 md:col-span-2 my-16 bg-white/50 backdrop-blur-xl border border-white/60 rounded-[2.5rem] shadow-[0_8px_32px_rgba(0,0,0,0.03)] overflow-hidden">
                      <div className="grid md:grid-cols-[1fr_1.5fr]">
                        <div className="p-10 md:p-14 flex flex-col justify-center border-r border-carbon/10 bg-trebol/5">
                          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-carbon mb-2 font-sans">
                            {bloque.label}
                          </span>
                          <p className="text-7xl md:text-8xl font-black text-trebol leading-none font-serif">
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
                    <div key={i} className="col-span-1 md:col-span-2 my-16">
                      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.03)]">
                        <span className="absolute top-0 right-0 bg-carbon text-white text-[10px] px-3 py-1.5 font-mono z-10 rounded-bl-3xl">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <img src={bloque.url} alt={bloque.alt} className="w-full h-64 md:h-[500px] object-cover grayscale-[30%]" />
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

          {/* Right Column: Sidebar */}
          <Sidebar />
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
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <article className="bg-hueso relative">
      <ArticleHeader art={art} />

      <div className="max-w-[1100px] mx-auto px-6 md:px-12 pb-32 relative z-10">
        {/* 2-Column Sidebar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start">
          {/* Left Column */}
          <div>
            {/* Excerpt editorial lead paragraph */}
            <div className="font-serif text-xl md:text-2xl text-carbon/80 italic leading-relaxed text-justify mb-10 pb-8 border-b border-carbon/10">
              {art.extracto}
            </div>

            {/* Prominent Video Player Card - 100% Home style and rounded */}
            <div className="relative aspect-video w-full rounded-[2.5rem] overflow-hidden border border-white/60 shadow-2xl bg-carbon mb-14 group/video">
              {isPlaying ? (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Video post presentation"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center cursor-pointer" onClick={() => setIsPlaying(true)}>
                  <img
                    src={art.imagen}
                    alt={art.titulo}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/video:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />
                  
                  {/* Glowing Glassmorphic Play Button */}
                  <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-2xl group-hover/video:scale-110 group-hover/video:bg-trebol group-hover/video:border-trebol/40 transition-all duration-500 z-10 relative">
                    <div className="absolute inset-0 rounded-full bg-trebol/20 blur-[15px] scale-110 opacity-0 group-hover/video:opacity-100 transition-opacity duration-500" />
                    <Play size={36} className="text-white fill-white translate-x-1" />
                  </div>

                  <div className="absolute bottom-8 left-8 text-left z-10">
                    <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-trebol bg-white/90 backdrop-blur-sm border border-white px-3 py-1 rounded-full mb-3">
                      <Video size={10} /> Video Exclusivo
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl font-black text-white leading-tight drop-shadow-md">
                      Ver explicación en video
                    </h3>
                  </div>
                </div>
              )}
            </div>

            {/* Rest of Content */}
            <div className="space-y-8">
              {art.contenido.map((bloque, i) => {
                if (bloque.tipo === 'parrafo') {
                  return (
                    <p key={i} className="text-[15px] text-carbon font-light leading-[1.7] text-justify font-sans">
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
                          <p className="text-[15px] text-carbon font-light leading-[1.7] text-justify font-sans mb-4">
                            {bloque.texto}
                          </p>
                          {bloque.checklist && (
                            <ul className="space-y-2 border-l-2 border-trebol pl-5">
                              {bloque.checklist.map((item, ci) => (
                                <li key={ci} className="flex items-start gap-2.5 text-xs text-gris font-light font-sans">
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

          {/* Right Column: Sidebar */}
          <Sidebar />
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
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 pt-24 pb-32 relative z-10">
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
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-black text-carbon leading-[0.9] tracking-tight">
            {art.titulo}
          </h1>
        </div>

        {/* Guest portrait cards layout - Home style rounded */}
        <div className="grid md:grid-cols-[40%_1fr] gap-0 mb-20 border border-white/60 bg-white/50 backdrop-blur-xl rounded-[2.5rem] shadow-[0_8px_32px_rgba(0,0,0,0.03)] overflow-hidden">
          <div className="relative border-r border-carbon/10 aspect-[3/4] md:aspect-auto">
            <img 
              src={art.entrevistado?.foto || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"} 
              alt={art.entrevistado?.nombre || art.autor} 
              className="w-full h-full object-cover grayscale" 
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-14">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-trebol border border-trebol/30 px-3 py-1 font-sans rounded-full mb-3 self-start">
              Firma del Experto
            </span>
            <h3 className="font-serif text-4xl md:text-5xl font-black text-carbon mb-2 leading-none">
              {art.entrevistado?.nombre || art.autor}
            </h3>
            <p className="text-sm text-gris font-light mb-8 font-sans tracking-wide">
              {art.entrevistado?.rol || "Especialista en Estrategia Digital"}
            </p>
            <div className="w-12 h-1 bg-trebol mb-6" />
            <p className="text-lg text-carbon/75 font-light leading-relaxed text-justify font-sans">
              {art.extracto}
            </p>
          </div>
        </div>

        {/* 2-Column Sidebar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-0">
            {art.contenido.map((bloque, i) => {
              if (bloque.tipo === 'intro') {
                return (
                  <p key={i} className="text-2xl md:text-3xl text-carbon font-light leading-snug mb-16 text-justify font-sans border-l-4 border-trebol pl-8">
                    {bloque.texto}
                  </p>
                );
              }
              if (bloque.tipo === 'pregunta') {
                return (
                  <div key={i} className="py-8 border-t border-carbon/10">
                    <div className="flex gap-6 items-start">
                      <span className="text-[10px] font-bold text-trebol shrink-0 w-8 pt-2 font-sans uppercase tracking-widest">
                        Ref.
                      </span>
                      <p className="font-serif text-2xl md:text-3xl font-black text-carbon leading-tight">
                        {bloque.texto}
                      </p>
                    </div>
                  </div>
                );
              }
              if (bloque.tipo === 'respuesta') {
                return (
                  <div key={i} className="pb-12 pl-14 md:pl-20">
                    <div className="flex gap-6 items-start">
                      <span className="text-[10px] font-bold text-carbon shrink-0 w-8 pt-1 font-sans uppercase tracking-widest">
                        Det.
                      </span>
                      <p className="text-[15px] text-carbon font-light leading-[1.7] text-justify font-sans">
                        {bloque.texto}
                      </p>
                    </div>
                  </div>
                );
              }
              if (bloque.tipo === 'pullquote') {
                return (
                  <div key={i} className="my-16 bg-white/50 backdrop-blur-xl border border-white/60 rounded-[2.5rem] shadow-[0_8px_32px_rgba(0,0,0,0.03)] overflow-hidden">
                    <div className="p-10 md:p-16 text-center">
                      <Quote size={40} className="text-trebol mx-auto mb-6" strokeWidth={1} />
                      <p className="font-serif text-2xl md:text-4xl font-bold leading-snug italic max-w-3xl mx-auto">
                        &ldquo;{bloque.texto}&rdquo;
                      </p>
                      {bloque.autor && (
                        <p className="text-[10px] text-trebol font-bold mt-6 uppercase tracking-[0.25em] font-sans">
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

          {/* Right Column: Sidebar */}
          <Sidebar />
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

      <div className="max-w-[1100px] mx-auto px-6 md:px-12 pb-32 relative z-10">
        {/* 2-Column Sidebar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start">
          {/* Left Column */}
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
                        <p className="text-[15px] text-carbon font-light leading-[1.7] text-justify font-sans">
                          {bloque.texto}
                        </p>
                      </div>
                    );
                  }
                  if (bloque.tipo === 'item') {
                    return (
                      <div key={i} className="relative pl-24 md:pl-36 group/timeline">
                        {/* Number bullet stylized - Home style rounded */}
                        <div className="absolute left-0 top-0 font-serif text-5xl md:text-7xl font-black text-trebol leading-none select-none w-18 md:w-28 text-center bg-white/70 border border-white rounded-3xl p-3 shadow-md">
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
                          <p className="text-[15px] text-carbon/75 font-light leading-[1.7] text-justify max-w-2xl font-sans mb-6">
                            {bloque.texto}
                          </p>

                          {/* Achievement Progress visualizer (Home-style bento component) */}
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

          {/* Right Column: Sidebar */}
          <Sidebar />
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
};

export default function ArticuloPage({ params }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const art = articulos[slug] || articulos['ia-en-tu-negocio-hoy'];
  const Template = templates[art.plantilla] || templates.feature;

  return (
    <main className="w-full bg-hueso min-h-screen relative overflow-hidden">
      {/* Animated Green Ambient Light Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-40 left-0 w-[30rem] h-[30rem] bg-trebol/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-[28rem] h-[28rem] bg-trebol/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-40 left-10 w-[35rem] h-[35rem] bg-trebol/10 rounded-full blur-[130px]" />
      </div>

      <Template art={art} />

      <div className="max-w-[1100px] mx-auto px-6 md:px-12 pb-32 relative z-10">
        {/* Author bio — premium glassmorphism card */}
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
