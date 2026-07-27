'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { use } from 'react';

const articulos = {
  'ia-en-tu-negocio-hoy': {
    titulo: '5 formas de usar IA en tu negocio hoy mismo',
    categoria: 'Inteligencia Artificial',
    tiempo: '8 min',
    fecha: '22 julio, 2026',
    autor: 'Trébol Digital',
    extracto: 'La inteligencia artificial ya no es exclusiva para grandes corporativos. Te mostramos 5 herramientas prácticas que puedes implementar esta semana sin presupuesto millonario.',
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
    titulo: 'Cómo construir una estrategia de contenido desde cero',
    categoria: 'Marketing',
    tiempo: '10 min',
    fecha: '15 julio, 2026',
    autor: 'Trébol Digital',
    extracto: 'Un paso a paso para crear contenido que atraiga, conecte y convierta sin necesitar un equipo enorme ni presupuesto de agencia.',
    contenido: [
      { tipo: 'subtitulo', texto: 'Primero: define a quién le hablas' },
      { tipo: 'parrafo', texto: 'Antes de escribir una sola palabra, necesitas saber exactamente a quién va dirigido tu contenido. Es una persona con un problema específico que tu negocio puede resolver.' },
      { tipo: 'subtitulo', texto: 'Segundo: decide en qué canales vas a estar' },
      { tipo: 'parrafo', texto: 'No necesitas estar en todos lados. Es mejor hacer bien 1 o 2 canales que hacer mal 5. Elige los canales donde está tu cliente ideal.' },
      { tipo: 'subtitulo', texto: 'Tercero: crea un calendario editorial' },
      { tipo: 'parrafo', texto: 'La consistencia gana a la perfección. Un calendario editorial te ayuda a planificar, no improvisar.' },
    ],
  },
};

export default function ArticuloPage({ params }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const art = articulos[slug] || articulos['ia-en-tu-negocio-hoy'];

  return (
    <main className="w-full bg-hueso min-h-screen overflow-hidden">
      <article className="max-w-[1000px] mx-auto px-6 md:px-12 pt-44 pb-32">
        <Link
          href="/insights/blog"
          className="inline-flex items-center gap-2 text-base font-semibold text-carbon/60 hover:text-trebol transition-colors mb-12"
        >
          <ArrowLeft size={18} />
          Volver al Blog
        </Link>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-trebol bg-trebol/10 px-4 py-1.5 rounded-full mb-6">
            {art.categoria}
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-carbon leading-[0.9] tracking-tighter mb-8">
            {art.titulo}
          </h1>
          <div className="flex items-center gap-6 text-base text-carbon/60 font-light border-b border-carbon/10 pb-8">
            <span className="flex items-center gap-2"><Clock size={16} />{art.tiempo} de lectura</span>
            <span>—</span>
            <span>{art.fecha}</span>
            <span>—</span>
            <span>Por {art.autor}</span>
          </div>
        </motion.div>

        {/* Extracto estilo V1 */}
        <div className="bg-white/50 backdrop-blur-2xl border-l-8 border-trebol border-white/60 p-8 md:p-10 rounded-r-3xl mb-16 shadow-[0_8px_32px_rgba(0,0,0,0.03)]">
          <p className="text-xl md:text-2xl text-carbon font-light leading-relaxed">
            {art.extracto}
          </p>
        </div>

        {/* Contenido */}
        <div className="flex flex-col gap-8 mb-20">
          {art.contenido.map((bloque, i) => {
            if (bloque.tipo === 'subtitulo') {
              return (
                <h2 key={i} className="text-3xl md:text-4xl font-extrabold text-carbon tracking-tight mt-6">
                  {bloque.texto}
                </h2>
              );
            }
            return (
              <p key={i} className="text-xl text-carbon/80 font-light leading-relaxed">
                {bloque.texto}
              </p>
            );
          })}
        </div>

        {/* CTA Dark Section V1 */}
        <div className="bg-carbon text-hueso rounded-[3rem] p-10 md:p-14 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between shadow-2xl">
          <div>
            <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-2">
              ¿Quieres implementar esto <br />
              <span className="text-trebol">en tu negocio?</span>
            </h3>
            <p className="text-lg text-hueso/70 font-light">Agenda un diagnóstico gratuito de 30 minutos.</p>
          </div>
          <Link
            href="/agenda"
            className="inline-flex items-center gap-2 bg-trebol text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-carbon transition-colors duration-500 text-lg shrink-0"
          >
            Agendar ahora
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </article>
    </main>
  );
}
