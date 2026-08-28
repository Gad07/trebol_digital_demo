-- ========================================================
-- Exportación de Datos de Supabase a MySQL (u380714863_trebol)
-- Generado automáticamente para Trébol Digital
-- Fecha: 2026-08-28T20:34:40.153Z
-- ========================================================

SET FOREIGN_KEY_CHECKS = 0;
SET NAMES utf8mb4;

-- --------------------------------------------------------
-- Tabla: blogs
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `blogs` (
  `id` VARCHAR(255) PRIMARY KEY,
  `slug` VARCHAR(255) UNIQUE NOT NULL,
  `titulo` TEXT NOT NULL,
  `categoria` VARCHAR(100),
  `subtitulo` TEXT,
  `resumen` TEXT,
  `autor` VARCHAR(100),
  `fecha` VARCHAR(50),
  `tiempo_lectura` VARCHAR(50),
  `imagen_url` TEXT,
  `destacado` TINYINT(1) DEFAULT 0,
  `contenido` LONGTEXT,
  `status` VARCHAR(50) DEFAULT 'published',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `blogs` (`id`, `slug`, `titulo`, `categoria`, `subtitulo`, `resumen`, `autor`, `fecha`, `tiempo_lectura`, `imagen_url`, `destacado`, `contenido`, `status`, `created_at`) VALUES
('blog-5', 'automatizacion-sin-codigo', 'Automatización sin código: Make, Zapier y n8n explicados', 'Inteligencia Artificial', 'Elimina tareas repetitivas y optimiza tu tiempo', 'Tres herramientas de automatización explicadas sin tecnicismos. Cuándo usar cada una y cómo empezar tu primer flujo.', 'Diego Ramírez', '24 junio, 2026', '9 min', 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=1800&q=80', 0, '{"ctaUrl":"https://wa.me/525564929081","ctaText":"Automatizar mis Procesos con Trébol","secciones":[{"texto":"Ideal para conectar aplicaciones populares en pocos clics (ej. conectar tu formulario web con Google Sheets o enviar avisos automáticos a Slack).","bullets":["Miles de integraciones oficiales listas para usar","Configuración paso a paso en menos de 5 minutos","Excelente para flujos simples y directos"],"subtitulo":"1. Zapier: La opción más intuitiva para principiantes"},{"texto":"Si necesitas flujos con condiciones complejas, iteraciones de listas o llamadas a APIs con IA, Make ofrece el mejor balance entre potencia y costo.","subtitulo":"2. Make (Integromat): Potencia visual y lógica avanzada","fraseDestacada":"Equipos que automatizan 3 procesos clave recuperan en promedio hasta 30 horas hombre a la semana."},{"texto":"Para empresas que manejan información confidencial y prefieren alojar sus propias automatizaciones en sus servidores privados.","subtitulo":"3. n8n: Máxima privacidad y control de código abierto"}],"conclusion":"No automatices procesos rotos: primero simplifica y estandariza el proceso humano, y luego pon a los robots a trabajar para ti.","introduccion":"Tu equipo no debería pasar horas copiando datos de una hoja de cálculo a otra. La automatización no-code te devuelve horas de productividad cada semana."}', 'published', '2026-08-28 15:16:28'),
('blog-4', 'cultura-empresarial', 'Por qué la cultura empresarial es tu mayor activo', 'Organizacional', 'Construye una cultura que impulse el crecimiento de tu equipo', 'Las empresas que crecen de forma sostenida tienen una cultura clara. Te explicamos cómo construirla aunque seas una PYME.', 'Ana Sofía Guerra', '1 julio, 2026', '7 min', 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1800&q=80', 0, '{"ctaUrl":"https://wa.me/525564929081","ctaText":"Consultoría en Desarrollo Organizacional","secciones":[{"texto":"En un equipo pequeño no hay filtros burocráticos. La energía, el compromiso y la claridad del liderazgo impactan directamente la productividad de cada miembro desde el primer día.","bullets":["Retención del mejor talento sin competir únicamente en sueldo","Mayor autonomía y menor necesidad de micromanagement","Mejor servicio y trato al cliente final"],"subtitulo":"¿Por qué la cultura importa tanto en una empresa mediana o pequeña?","fraseDestacada":"En una empresa de 10 personas, un mal ambiente representa el 10% de toda la organización. Cuidar al equipo es cuidar el negocio."},{"texto":"Define pocas reglas pero innegociables. Celebra los aciertos en público, corrige los errores en privado y establece reuniones 1 a 1 de 15 minutos para escuchar a tu gente.","bullets":["Claridad total en los objetivos de cada puesto","Cultura de feedback constructivo y rápido","Reconocimiento al esfuerzo y resultados"],"subtitulo":"Cómo alinear a tu equipo paso a paso"}],"conclusion":"Una buena estrategia puede darte clientes hoy, pero solo una cultura sólida garantiza que tu empresa siga viva y creciendo en 10 años.","introduccion":"La cultura no es una mesa de ping-pong o café gratis; es el conjunto de comportamientos, decisiones y valores que tu equipo practica cuando nadie los está mirando."}', 'published', '2026-08-28 15:16:27'),
('blog-1', 'ia-en-tu-negocio-hoy', '5 formas de usar IA en tu negocio hoy mismo', 'Inteligencia Artificial', 'Herramientas prácticas de Inteligencia Artificial para implementar esta semana', 'La inteligencia artificial ya no es exclusiva para grandes corporativos. Te mostramos 5 herramientas prácticas que puedes implementar esta semana sin presupuesto millonario.', 'Trébol Digital', '22 julio, 2026', '8 min', 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1800&q=80', 1, '{"ctaUrl":"https://wa.me/525564929081","ctaText":"Solicitar Asesoría en IA","secciones":[{"texto":"Configura un asistente de IA que responda preguntas frecuentes de tus clientes 24/7. Herramientas como ChatGPT, Claude o Gemini pueden entrenarse con la información de tu negocio para dar respuestas precisas y en el tono de tu marca.","bullets":["Atención 24/7 sin retrasos en WhatsApp y web","Calificación previa de prospectos antes de pasarlos a ventas","Integración directa con tu catálogo y preguntas frecuentes"],"subtitulo":"1. Automatiza tu atención al cliente con ChatGPT","fraseDestacada":"Un asistente de IA bien entrenado resuelve hasta el 70% de las dudas de tus prospectos al instante."},{"texto":"No se trata de que la IA escriba por ti, sino de que te ayude a estructurar ideas, crear borradores y superar el bloqueo creativo. Puedes generar el 80% del contenido con IA y darle el 20% de tu toque humano.","bullets":["Estructuración de posts para LinkedIn e Instagram","Redacción de correos comerciales y propuestas","Generación de guiones para video marketing"],"subtitulo":"2. Genera contenido con ayuda de la IA"},{"texto":"Conecta tus herramientas para que trabajen juntas sin intervención manual. Por ejemplo: cuando llega un lead en tu formulario web, que automáticamente se agregue a tu CRM y dispare un correo de bienvenida.","subtitulo":"3. Automatiza flujos repetitivos con Make o Zapier"},{"texto":"Herramientas como Julius AI o ChatGPT con Code Interpreter te permiten subir una hoja de cálculo y hacer preguntas en lenguaje natural obteniendo respuestas visuales y tendencias en segundos.","subtitulo":"4. Analiza datos con IA sin ser experto"},{"texto":"Midjourney, DALL-E o Canva AI te permiten crear imágenes profesionales para tus publicaciones sin necesidad de diseñadores externos costosos para cada post rápido.","subtitulo":"5. Crea imágenes y videos con IA para tus redes"}],"conclusion":"La clave no es usar todas las herramientas a la vez, sino elegir una sola que resuelva tu principal cuello de botella operativo esta misma semana.","introduccion":"La inteligencia artificial ya no es exclusiva para grandes corporativos. Hoy cualquier empresa puede implementar soluciones inteligentes que ahorren tiempo y aumenten sus ventas."}', 'published', '2026-08-28 15:16:26'),
('blog-2', 'estrategia-de-contenido', 'Cómo construir una estrategia de contenido desde cero', 'Marketing', 'Paso a paso para conectar con tu audiencia y generar conversiones', 'Un paso a paso para crear contenido que atraiga, conecte y convierta sin necesitar un equipo enorme ni presupuesto de agencia.', 'Trébol Digital', '15 julio, 2026', '10 min', 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1800&q=80', 1, '{"ctaUrl":"https://wa.me/525564929081","ctaText":"Diseñar mi Estrategia con Trébol","secciones":[{"texto":"Antes de escribir una sola palabra, necesitas saber exactamente a quién va dirigido tu contenido. Es una persona con un problema específico que tu negocio puede resolver con claridad.","bullets":["Investiga a tus 5 mejores clientes actuales","Identifica sus 3 mayores dolores y dudas frecuentes","Habla su mismo lenguaje sin tecnicismos innecesarios"],"subtitulo":"Paso 1: Define a quién le hablas (Tu cliente ideal)"},{"texto":"No necesitas estar en todas las redes sociales. Es preferible dominar 1 o 2 canales donde realmente esté tu comprador que desgastarte publicando en 5 sin resultados.","bullets":["LinkedIn para empresas y servicios B2B","Instagram y TikTok para marcas personales y consumo","Email marketing para nutrir y cerrar ventas"],"subtitulo":"Paso 2: Decide en qué canales vas a enfocarte"},{"texto":"La consistencia supera al talento. Planifica tus temas con 2 semanas de anticipación para nunca quedarte sin qué publicar.","subtitulo":"Paso 3: Crea un calendario editorial y mide","fraseDestacada":"El contenido no es para presumir lo que sabes, es para demostrar cómo resuelves los problemas de tu cliente."}],"conclusion":"Una estrategia de contenido no busca likes, busca crear relaciones de confianza que se traduzcan en clientes leales.","introduccion":"Publicar sin estrategia es la forma más rápida de frustrarse. Aprende a crear un sistema sostenible de contenidos que genere prospectos todos los meses."}', 'published', '2026-08-28 15:16:26'),
('blog-6', 'metricas-que-importan', 'Las métricas que realmente importan para tu negocio', 'Estrategia', 'Separa las métricas de vanidad de los indicadores reales de crecimiento', 'No todas las métricas son iguales. Te enseñamos a separar los vanity metrics de los indicadores que realmente dicen si vas bien.', 'Trébol Digital', '17 junio, 2026', '11 min', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=80', 0, '{"ctaUrl":"https://wa.me/525564929081","ctaText":"Diseñar mi Tablero de Métricas","secciones":[{"texto":"El Costo de Adquisición de Clientes (CAC) y el Valor de Vida del Cliente (LTV) deben guardar una relación saludable mínima de 3 a 1. Si ganar un cliente te cuesta $100, ese cliente debe dejarte al menos $300 a lo largo del tiempo.","bullets":["Calcula tu CAC sumando toda tu inversión de marketing y ventas dividida entre clientes nuevos","Mide el LTV sumando el ticket promedio multiplicado por la frecuencia de compra anual","Optimiza la retención para multiplicar tu margen sin gastar más en publicidad"],"subtitulo":"1. CAC vs. LTV: La fórmula reina de la rentabilidad"},{"texto":"No mires solo cuántos entran a tu web: mide cuántos pasan de visitantes a prospectos (Leads), y cuántos prospectos pasan a cotizaciones y cierres efectivos.","subtitulo":"2. Tasa de Conversión por etapa del embudo","fraseDestacada":"Duplicar tu tasa de conversión reduce a la mitad tu costo de adquisición de clientes con el mismo presupuesto publicitario."}],"conclusion":"Menos reportes confusos y más tableros ejecutivos con las 3 métricas que mueven la aguja de tu negocio.","introduccion":"Tener 100,000 seguidores en redes no paga la nómina. Aprende a identificar las métricas que verdaderamente impactan en la rentabilidad y flujo de caja de tu empresa."}', 'published', '2026-08-28 15:16:28'),
('blog-3', 'seo-local-pymes', 'SEO local: la guía definitiva para PYMEs', 'Marketing', 'Cómo posicionar tu negocio en Google Maps y búsquedas locales', 'Cómo aparecer primero en Google cuando alguien busca tu servicio en tu ciudad. Guía completa con casos reales.', 'Trébol Digital', '8 julio, 2026', '12 min', 'https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&w=1800&q=80', 0, '{"ctaUrl":"https://wa.me/525564929081","ctaText":"Auditar mi Posicionamiento Web","secciones":[{"texto":"Completar tu ficha de Google Maps con horarios precisos, fotos semanales y categorías correctas incrementa en un 76% las llamadas de clientes directos.","bullets":["Nombre comercial exacto y dirección verificada","Catálogo de servicios y productos con precios claros","Publicaciones periódicas de ofertas y novedades"],"subtitulo":"1. Optimiza tu perfil de Google Business al 100%"},{"texto":"En lugar de competir por términos genéricos globales, optimiza para búsquedas con tu ciudad o zona (ejemplo: \'consultoría empresarial en CDMX\').","subtitulo":"2. Domina las palabras clave con intención local","fraseDestacada":"Las búsquedas locales tienen una tasa de conversión 3 veces mayor porque el usuario ya tiene intención de compra inmediata."},{"texto":"El 87% de los compradores revisa las opiniones de otros clientes antes de contactar. Crea un enlace directo de WhatsApp para pedir reseñas a tus clientes satisfechos.","subtitulo":"3. Consigue y responde reseñas de manera activa"}],"conclusion":"Dominar el SEO de tu ciudad te garantiza un flujo constante de prospectos altamente calificados sin pagar por cada clic.","introduccion":"El SEO local es la herramienta más poderosa y subestimada para empresas con presencia geográfica definida. Descubre cómo captar clientes cuando buscan en Google cerca de ti."}', 'published', '2026-08-28 15:16:27')
ON DUPLICATE KEY UPDATE `titulo`=VALUES(`titulo`), `contenido`=VALUES(`contenido`);

-- --------------------------------------------------------
-- Tabla: casos
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `casos` (
  `id` VARCHAR(255) PRIMARY KEY,
  `slug` VARCHAR(255),
  `titulo` TEXT NOT NULL,
  `categoria` VARCHAR(100),
  `cliente` VARCHAR(150),
  `resultado` TEXT,
  `imagen_url` TEXT,
  `descripcion` TEXT,
  `status` VARCHAR(50) DEFAULT 'published',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------
-- Tabla: testimonios
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `testimonios` (
  `id` VARCHAR(255) PRIMARY KEY,
  `nombre` VARCHAR(150) NOT NULL,
  `cargo` VARCHAR(150),
  `empresa` VARCHAR(150),
  `texto` TEXT NOT NULL,
  `avatar` TEXT,
  `rating` INT DEFAULT 5,
  `status` VARCHAR(50) DEFAULT 'published',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `testimonios` (`id`, `nombre`, `cargo`, `empresa`, `texto`, `avatar`, `rating`, `status`, `created_at`) VALUES
('testimonio-1787778466458', 'SUGA', 'Fabricación y distribución de suministros industriales', '', 'Nos ayudaron con la actualización de nuestra página web. 
Hoy tenemos una presencia digital más sólida y profesional', 'https://www.suga.mx/assets/img/logo/Logo_02_sf.png', 5, 'published', '2026-08-26 21:11:02'),
('testimonio-1787778387946', 'CÍRCULO DE EMPRESARIOS', 'Asociación Empresarial', '', 'Gracias a las aportaciones de Trébol Digital y por el valor agregado para hacer que nuestro proyecto creciera', 'https://circulodeempresarios.com.mx/assets/img/ciempre/logo-color-sf-01.png', 5, 'published', '2026-08-26 21:11:01')
ON DUPLICATE KEY UPDATE `nombre`=VALUES(`nombre`), `texto`=VALUES(`texto`);

-- --------------------------------------------------------
-- Tabla: landings
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `landings` (
  `id` VARCHAR(255) PRIMARY KEY,
  `slug` VARCHAR(255) UNIQUE NOT NULL,
  `title` TEXT NOT NULL,
  `theme_style` VARCHAR(50) DEFAULT 'v2',
  `status` VARCHAR(50) DEFAULT 'published',
  `meta_title` TEXT,
  `meta_description` TEXT,
  `sections` LONGTEXT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------
-- Tabla: tarjetas
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `tarjetas` (
  `id` VARCHAR(255) PRIMARY KEY,
  `slug` VARCHAR(255) UNIQUE NOT NULL,
  `first_name` VARCHAR(150) NOT NULL,
  `last_name` VARCHAR(150) NOT NULL,
  `title` VARCHAR(150),
  `company` VARCHAR(150),
  `bio` TEXT,
  `phone` VARCHAR(50),
  `email` VARCHAR(150),
  `website` VARCHAR(150),
  `website_url` TEXT,
  `whatsapp_url` TEXT,
  `photo_url` TEXT,
  `semblanza_p1` TEXT,
  `semblanza_p2` TEXT,
  `cita_texto` TEXT,
  `status` VARCHAR(50) DEFAULT 'published',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `tarjetas` (`id`, `slug`, `first_name`, `last_name`, `title`, `company`, `bio`, `phone`, `email`, `website`, `website_url`, `whatsapp_url`, `photo_url`, `semblanza_p1`, `semblanza_p2`, `cita_texto`, `status`, `created_at`) VALUES
('tarjeta_gadiel', 'gadiel-palma', 'GADIEL', 'PALMA', 'DESARROLLADOR & ESPECIALISTA EN IA', 'TRÉBOL DIGITAL', 'Desarrollador Web y Especialista en Inteligencia Artificial. Integramos aplicaciones web de alto rendimiento en Next.js, agentes conversacionales 24/7 y automatización inteligente para empresas.', '+52 55 6492 9081', 'gadiel@treboldigital.com', 'treboldigital.com', 'https://treboldigital.com', 'https://wa.me/525564929081?text=Hola%20Gadiel,%20vi%20tu%20tarjeta%20digital%20y%20me%20gustar%C3%ADa%20platicar.', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=95', 'Gadiel Palma es Desarrollador Web y Especialista en Inteligencia Artificial en Trébol Digital. Ha diseñado e implementado arquitecturas serverless en Next.js, agentes conversacionales 24/7 y soluciones de automatización inteligente.', 'Su enfoque combina ingeniería de software de alto rendimiento, optimización de velocidad de carga y experiencia de usuario fluida orientada a resultados de negocio.', 'La ingeniería de software y la inteligencia artificial unidas transforman ideas complejas en experiencias digitales de alto impacto.', 'published', '2026-08-28 15:16:19'),
('tarjeta_sandra', 'sandra-cuevas', 'SANDRA', 'CUEVAS', 'CEO & ESPECIALISTA EN MARKETING Y DESARROLLO ORGANIZACIONAL', 'TRÉBOL DIGITAL', 'CEO y Estratega en Marketing & Desarrollo Organizacional. Lideramos la transformación de empresas en México mediante embudos publicitarios de alto impacto, alineación de equipos y aceleración de cultura organizacional.', '+52 55 5555 1234', 'sandra@treboldigital.com', 'treboldigital.com', 'https://treboldigital.com', 'https://wa.me/525555551234?text=Hola%20Sandra,%20vi%20tu%20tarjeta%20digital%20y%20me%20gustar%C3%ADa%20platicar.', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=95', 'Sandra Cuevas se desempeña como CEO y Especialista en Marketing y Desarrollo Organizacional en Trébol Digital. Ha impulsado el crecimiento estructural y comercial de decenas de marcas en México.', 'Su especialidad radica en conectar el posicionamiento de marca, la estrategia de captación B2B y el desarrollo del talento interno para construir organizaciones altamente competitivas.', 'El verdadero marketing no solo atrae clientes, transforma la cultura y la fuerza motriz de toda la organización.', 'published', '2026-08-26 16:02:20')
ON DUPLICATE KEY UPDATE `first_name`=VALUES(`first_name`), `last_name`=VALUES(`last_name`);

-- --------------------------------------------------------
-- Tabla: citas
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `citas` (
  `id` VARCHAR(255) PRIMARY KEY,
  `nombre` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `telefono` VARCHAR(50),
  `empresa` VARCHAR(255),
  `host_nombre` VARCHAR(150),
  `fecha` VARCHAR(50) NOT NULL,
  `hora` VARCHAR(50) NOT NULL,
  `mensaje` TEXT,
  `notas` TEXT,
  `proxima_reunion` VARCHAR(255),
  `status` VARCHAR(50) DEFAULT 'confirmed',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `citas` (`id`, `nombre`, `email`, `telefono`, `empresa`, `host_nombre`, `fecha`, `hora`, `mensaje`, `notas`, `proxima_reunion`, `status`, `created_at`) VALUES
('cita_ejemplo_1', 'Carlos Mendoza', 'carlos@grupoindustrialb2b.com', '+52 55 1234 5678', 'Grupo Industrial B2B', 'Gadiel Palma', 'Vie 22 Ago', '10:00 AM', 'Interesado en implementar Agentes Conversacionales de IA y migración web a Next.js.', 'Cliente potencial de alto valor. Se presentó demo de IA en la primera llamada. Solicita propuesta técnica y de costos.', 'Mar 26 Ago · 11:00 AM', 'confirmed', '2026-08-28 15:16:20')
ON DUPLICATE KEY UPDATE `nombre`=VALUES(`nombre`);

-- --------------------------------------------------------
-- Tabla: usuarios
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` VARCHAR(255) PRIMARY KEY,
  `username` VARCHAR(100) UNIQUE NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255),
  `role` VARCHAR(50) NOT NULL DEFAULT 'editor_contenido',
  `permissions` TEXT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `usuarios` (`id`, `username`, `password`, `name`, `email`, `role`, `permissions`, `created_at`) VALUES
('usr_superadmin', 'admin', 'admin', 'Gadiel Palma', 'gadiel@treboldigital.com', 'super_admin', '["manage_users","edit_landings","edit_blogs","edit_casos","edit_tarjetas","manage_crm","manage_popups"]', '2026-08-26 16:02:21')
ON DUPLICATE KEY UPDATE `name`=VALUES(`name`);

-- --------------------------------------------------------
-- Tabla: recursos
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `recursos` (
  `id` VARCHAR(255) PRIMARY KEY,
  `tipo` VARCHAR(100),
  `formato` VARCHAR(50),
  `descargas` VARCHAR(100),
  `titulo` VARCHAR(255) NOT NULL,
  `desc_texto` TEXT,
  `tags` TEXT,
  `download_url` VARCHAR(255),
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `recursos` (`id`, `tipo`, `formato`, `descargas`, `titulo`, `desc_texto`, `tags`, `download_url`, `created_at`) VALUES
('rec-1', 'Plantilla', '.XLSX', '1,420 descargas', 'Calendario Editorial Mensual', 'Organiza todo tu contenido del mes en un sistema simple y efectivo. Incluye columnas para canal, formato, tema, copy y estado.', '["Marketing","Contenido","Redes"]', '#', '2026-08-26 16:06:31'),
('rec-2', 'Guía Práctica', '.PDF', '2,100 descargas', 'Cómo Usar ChatGPT en tu Empresa', 'Guía de 30 páginas con prompts probados, casos de uso reales y un plan de implementación por área de negocio.', '["IA","Productividad","Prompts"]', '#', '2026-08-28 15:16:22'),
('rec-3', 'Checklist', '.NOTION', '980 descargas', 'Auditoría de Presencia Digital', '47 puntos de revisión para evaluar el estado actual de tu negocio digital: web, redes, SEO, contenido y conversión.', '["Marketing","Diagnóstico"]', '#', '2026-08-28 15:16:23'),
('rec-4', 'Framework', '.PDF', '1,850 descargas', 'Plan Estratégico a 90 Días', 'Marco de trabajo para definir objetivos, métricas, acciones y responsables. El mismo que usamos con nuestros clientes.', '["Estrategia","Planeación"]', '#', '2026-08-28 15:16:24')
ON DUPLICATE KEY UPDATE `titulo`=VALUES(`titulo`);

-- --------------------------------------------------------
-- Tabla: talleres
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `talleres` (
  `id` VARCHAR(255) PRIMARY KEY,
  `titulo` VARCHAR(255) NOT NULL,
  `tipo` VARCHAR(100),
  `modalidad` VARCHAR(100),
  `duracion` VARCHAR(100),
  `fecha` VARCHAR(100),
  `hora` VARCHAR(100),
  `precio` VARCHAR(100),
  `cupos` VARCHAR(100),
  `desc_texto` TEXT,
  `imagen` VARCHAR(255),
  `temas` TEXT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `talleres` (`id`, `titulo`, `tipo`, `modalidad`, `duracion`, `fecha`, `hora`, `precio`, `cupos`, `desc_texto`, `imagen`, `temas`, `created_at`) VALUES
('tal_1787779565789', 'Inteligencia Emocional', 'Workshop', 'Online en Vivo', '4 Horas', 'A Convenir', 'A Convenir', '$ 3,000', 'Quedan 5 lugares', 'Al finalizar el curso, el participante será capaz de:
Identificar los beneficios de la inteligencia emocional y la resiliencia, mediante el estudio de sus modelos
teóricos y estrategias, para el fortalecimiento del bienestar personal y relacional.', 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80', '["Tema 1. Conceptos de la inteligencia emocional (IE) y la resiliencia (RE)","Tema 2. Beneficios de la IE y la RE","Tema 3. Modelos y estrategias de la IE y la RE","Tema 4. Desarrollo de la IE y la RE"]', '2026-08-26 21:26:05'),
('tal_1787779740673', 'Ideología en torno a la IA', 'Workshop', 'Online en Vivo', '3 sesiones de 1 hr.', 'A Convenir', 'A Convenir', '$3,000', '3 a 6 personas', 'El participante logrará identificar las dimensiones de la inteligencia artificial aplicadas al negocio o funciones laborales, podrá entender sus orígenes, el uso y aplicación actual con ética en
sus funciones diarias y para la comprensión de su impacto en el campo', 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80', '["Tema 1: Introducción a la IA","Tema 2: Expectativas en torno a la IA en 2026-2027","Tema: Usos y aplicación de IA en las funciones laborales"]', '2026-08-26 21:29:00'),
('tal_1787779672290', ' Liderazgo del Futuro', 'Workshop', 'Online en Vivo', '4 Horas', 'A Convenir', 'A Convenir', '$4,500', '4 a 8 personas máximo', 'Con este curso el participante podrá 
Interpretar las perspectivas del liderazgo, podrá adaptarlo con inteligencia emocional, pensamiento sistémico y mayor consciencia organizacional para el impulso de procesos transformadores orientados al cambio sostenible y al desarrollo humano integral.', 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80', '["Tema 1. Inteligencia emocional en las organizaciones","Tema 2. Liderazgo estratégico","Tema 3. Liderazgo consciente","Tema 4. Inteligencia sistémica","Tema 5. Liderazgo sistémico"]', '2026-08-26 21:27:52'),
('tal-1', 'IA para no técnicos: Herramientas que cambian tu negocio', 'Taller Intensivo', 'Online en Vivo', '4 Horas', '15 Agosto, 2026', '10:00 AM – 2:00 PM (CST)', 'Gratuito', 'Quedan 5 lugares', 'Aprende a utilizar ChatGPT, Gemini, Make y agentes IA en la operación diaria de tu empresa. Cero código.', 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80', '["Panorama IA 2026 & Herramientas Clave","ChatGPT & Claude para automatización operativa","Construcción de tu primer flujo en Make (30 min)","Entrenamiento de Agentes IA de atención y ventas"]', '2026-08-28 15:16:24'),
('tal-2', 'Marketing Digital para PYMEs: De 0 a Estrategia en 1 Día', 'Workshop Presencial', 'Presencial · Toluca', '6 Horas', '22 Agosto, 2026', '9:00 AM – 3:00 PM (CST)', '$1,500 MXN', 'Quedan 3 lugares', 'Estructura tu marca, crea contenido que vende y lanza campañas de Google Ads rentables con resultados medibles.', 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80', '["Buyer Persona & Propuesta de Valor Única","Calendario Editorial & Copywriting de Conversión","SEO Local Google Maps & Optimización GMB","Campañas Básicas de Google Ads B2B/B2C"]', '2026-08-28 15:16:25'),
('tal-3', 'Comunicación Interna Efectiva para Equipos en Crecimiento', 'Programa In-Company', 'Presencial u Online', '3 Horas', 'A Convenir', 'Horario flexible', 'A Medida', 'Hasta 30 personas', 'Taller práctico para mejorar la coordinación del equipo, reducir reuniones innecesarias y mejorar la claridad de roles.', 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80', '["Diagnóstico de Comunicación Interdepartamental","Matriz RACI y Claridad de Responsabilidades","Reuniones Efectivas: Metodología 15 Minutos","Cultura de Transparencia y Retroalimentación"]', '2026-08-28 15:16:25')
ON DUPLICATE KEY UPDATE `titulo`=VALUES(`titulo`);

-- --------------------------------------------------------
-- Tabla: config
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `config` (
  `clave` VARCHAR(100) PRIMARY KEY,
  `valor` LONGTEXT,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `config` (`clave`, `valor`, `updated_at`) VALUES
('clientes_banner', '{"logos":[{"id":"logo_suga","name":"SUGA","logoUrl":"https://www.suga.mx/assets/img/logo/Logo_02_sf.png","category":"Fabricación y distribución de suministros industriales"},{"id":"logo_circulo","name":"CÍRCULO DE EMPRESARIOS","logoUrl":"https://circulodeempresarios.com.mx/assets/img/ciempre/logo-color-sf-01.png","category":"Asociación Empresarial"}],"subtitulo":"Conoce cómo ayudamos a empresas en crecimiento a escalar sus ventas, optimizar su operación e implementar Inteligencia Artificial con resultados medibles desde el primer mes.","tituloMiddle":"su crecimiento con","tituloPrefix":"Empresas que impulsan","tituloHighlight":"Trébol Digital."}', '2026-08-28 15:20:22')
ON DUPLICATE KEY UPDATE `valor`=VALUES(`valor`);

SET FOREIGN_KEY_CHECKS = 1;
