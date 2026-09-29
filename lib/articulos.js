/**
 * Static fallback articles used when the database has no entry for a slug.
 * Kept in a server-safe module so both `generateMetadata` and the page render
 * can read the same content.
 */
export const articulos = {
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

export const FALLBACK_SLUG = 'ia-en-tu-negocio-hoy';

/**
 * Resolves an article server-side: database record merged over the static
 * fallback. Returns null only when the slug matches nothing at all.
 */
export async function resolveArticulo(slug) {
  const fallback = articulos[slug] || articulos[FALLBACK_SLUG];

  let dbArt = null;
  try {
    const { getBlogsFromDB } = await import('@/lib/db');
    const blogs = await getBlogsFromDB();
    if (Array.isArray(blogs)) {
      dbArt = blogs.find((b) => b && b.slug === slug) || null;
    }
  } catch (err) {
    console.warn('[Blog Article Error]:', err.message);
  }

  if (!dbArt && !articulos[slug]) return null;

  return {
    ...fallback,
    ...(dbArt || {}),
    content: dbArt?.content || fallback.content || null,
    contenido:
      Array.isArray(dbArt?.contenido) && dbArt.contenido.length > 0
        ? dbArt.contenido
        : fallback.contenido || [],
  };
}
