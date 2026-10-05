require('dotenv').config({ path: '.env.local' });
require('dotenv').config({ path: '.env' });
const mysql = require('mysql2/promise');

async function initMySQL() {
  const host = process.env.MYSQL_HOST || 'auth-db868.hstgr.io';
  const port = Number(process.env.MYSQL_PORT) || 3306;
  const user = process.env.MYSQL_USER || 'u380714863_tradm';
  const password = process.env.MYSQL_PASSWORD || 'trebolDigitial3';
  const dbName = process.env.MYSQL_DATABASE || 'u380714863_trebol';

  console.log(`🔌 Conectando a MySQL en ${host}:${port}/${dbName}...`);
  
  let connection;
  try {
    connection = await mysql.createConnection({
      host,
      port,
      user,
      password,
      database: dbName
    });
    console.log(`✅ Conexión establecida con MySQL (${host}/${dbName}).`);
  } catch (err) {
    console.error('❌ Error al conectar a MySQL:', err.message);
    process.exit(1);
  }

  console.log('🛠️ Creando tablas en MySQL...');

  // Tabla Blogs
  await connection.query(`
    CREATE TABLE IF NOT EXISTS blogs (
      id VARCHAR(255) PRIMARY KEY,
      slug VARCHAR(255) UNIQUE NOT NULL,
      titulo TEXT NOT NULL,
      categoria VARCHAR(100),
      subtitulo TEXT,
      resumen TEXT,
      autor VARCHAR(100),
      fecha VARCHAR(50),
      tiempo_lectura VARCHAR(50),
      imagen_url TEXT,
      destacado TINYINT(1) DEFAULT 0,
      contenido LONGTEXT,
      status VARCHAR(50) DEFAULT 'published',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);

  // Tabla Casos
  await connection.query(`
    CREATE TABLE IF NOT EXISTS casos (
      id VARCHAR(255) PRIMARY KEY,
      slug VARCHAR(255),
      titulo TEXT NOT NULL,
      categoria VARCHAR(100),
      cliente VARCHAR(150),
      resultado TEXT,
      imagen_url TEXT,
      descripcion TEXT,
      status VARCHAR(50) DEFAULT 'published',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);

  // Tabla Testimonios
  await connection.query(`
    CREATE TABLE IF NOT EXISTS testimonios (
      id VARCHAR(255) PRIMARY KEY,
      nombre VARCHAR(150) NOT NULL,
      cargo VARCHAR(150),
      empresa VARCHAR(150),
      texto TEXT NOT NULL,
      avatar TEXT,
      rating INT DEFAULT 5,
      status VARCHAR(50) DEFAULT 'published',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);

  // Tabla Landings
  await connection.query(`
    CREATE TABLE IF NOT EXISTS landings (
      id VARCHAR(255) PRIMARY KEY,
      slug VARCHAR(255) UNIQUE NOT NULL,
      title TEXT NOT NULL,
      theme_style VARCHAR(50) DEFAULT 'v2',
      status VARCHAR(50) DEFAULT 'published',
      meta_title TEXT,
      meta_description TEXT,
      sections LONGTEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);

  // Tabla Tarjetas Ejecutivas
  await connection.query(`
    CREATE TABLE IF NOT EXISTS tarjetas (
      id VARCHAR(255) PRIMARY KEY,
      slug VARCHAR(255) UNIQUE NOT NULL,
      first_name VARCHAR(150) NOT NULL,
      last_name VARCHAR(150) NOT NULL,
      title VARCHAR(255),
      company VARCHAR(150),
      bio TEXT,
      experiencia_badge VARCHAR(255),
      pilares_tags TEXT,
      phone VARCHAR(50),
      email VARCHAR(150),
      website VARCHAR(150),
      website_url TEXT,
      whatsapp_url TEXT,
      linkedin_url TEXT,
      photo_url TEXT,
      portfolio_url VARCHAR(255) DEFAULT '/casos-de-exito',
      show_portfolio BOOLEAN DEFAULT true,
      semblanza_p1 TEXT,
      semblanza_p2 TEXT,
      semblanza_p3 TEXT,
      cita_texto TEXT,
      enfoque_destacado TEXT,
      servicios LONGTEXT,
      diferencial_titulo TEXT,
      diferencial_formula TEXT,
      cta_titulo TEXT,
      cta_subtitulo TEXT,
      status VARCHAR(50) DEFAULT 'published',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);

  // Limpiar tarjeta anterior de gabriel si existe
  await connection.query("DELETE FROM tarjetas WHERE slug = 'gabriel-paz' OR slug = 'gabriel' OR id = 'tarjeta_gabriel';");

  // Insertar o actualizar tarjeta para sandra-cuevas
  await connection.query(`
    INSERT INTO tarjetas (
      id, slug, first_name, last_name, title, company, bio, experiencia_badge, pilares_tags, phone, email,
      website, website_url, whatsapp_url, linkedin_url, photo_url, semblanza_p1, semblanza_p2, semblanza_p3,
      cita_texto, enfoque_destacado, servicios, diferencial_titulo, diferencial_formula, cta_titulo, cta_subtitulo, status
    ) VALUES (
      'tarjeta_sandra',
      'sandra-cuevas',
      'SANDRA',
      'CUEVAS GUEVARA',
      'Marketing Digital · Estructura empresarial · IA aplicada a negocios',
      'TRÉBOL DIGITAL',
      'Convierto objetivos de negocio en estrategias de marketing que generan oportunidades, crecimiento y resultados.',
      '+9 años de experiencia en marketing digital',
      '["Branding","Estrategia","Performance","Contenidos","Leads","Proyectos Digitales"]',
      '+52 55 5555 1234',
      'sandra@treboldigital.com',
      'treboldigital.com.mx',
      'https://treboldigital.com.mx',
      'https://wa.me/525555551234?text=Hola%20Sandra,%20vi%20tu%20tarjeta%20digital%20y%20me%20gustar%C3%ADa%20platicar.',
      'https://linkedin.com',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=95',
      'Soy Sandy Cuevas, profesional de marketing digital con más de 9 años de experiencia desarrollando branding, redes sociales, estrategias, campañas y proyectos digitales para marcas y organizaciones.',
      'Mi experiencia combina estrategia de marketing, performance, generación y conversión de leads, contenidos, indicadores, analítica y gestión de proyectos, trabajando de forma coordinada con equipos multidisciplinarios, agencias y áreas comerciales.',
      'Actualmente impulso también Trébol Digital, desde donde ayudo a empresas a convertir sus objetivos comerciales en estrategias digitales claras, accionables y medibles.',
      'Mi enfoque: entender el negocio primero. Después, construir el marketing que necesita.',
      'Mi enfoque: entender el negocio primero. Después, construir el marketing que necesita.',
      '[{"titulo":"Estrategia","descripcion":"Marketing digital · Branding · Desarrollo Empresarial · Posicionamiento"},{"titulo":"Performance","descripcion":"Campañas · Leads · Conversión · KPIs"},{"titulo":"Proyectos digitales","descripcion":"CRM · Automatización · Gestión de equipos · Agencias"},{"titulo":"IA para tu negocio","descripcion":"Uso y aplicación · Automatizaciones · Gestión con ética · Enfoque de aplicación"}]',
      'No sólo hacemos marketing para tu empresa. Te enseñamos a aplicarla en tu negocio.',
      'Estrategia + creatividad + análisis de datos + tecnología + capacitación.',
      '¿TIENES UN RETO DE MARKETING?',
      'Tengamos una sesión sin costo. Si buscas fortalecer tu marca o generar más oportunidades para tu negocio, conversemos hoy mismo.',
      'published'
    ) ON DUPLICATE KEY UPDATE
      first_name = VALUES(first_name),
      last_name = VALUES(last_name),
      title = VALUES(title),
      company = VALUES(company),
      bio = VALUES(bio),
      experiencia_badge = VALUES(experiencia_badge),
      pilares_tags = VALUES(pilares_tags),
      phone = VALUES(phone),
      email = VALUES(email),
      website = VALUES(website),
      website_url = VALUES(website_url),
      whatsapp_url = VALUES(whatsapp_url),
      linkedin_url = VALUES(linkedin_url),
      photo_url = VALUES(photo_url),
      semblanza_p1 = VALUES(semblanza_p1),
      semblanza_p2 = VALUES(semblanza_p2),
      semblanza_p3 = VALUES(semblanza_p3),
      cita_texto = VALUES(cita_texto),
      enfoque_destacado = VALUES(enfoque_destacado),
      servicios = VALUES(servicios),
      diferencial_titulo = VALUES(diferencial_titulo),
      diferencial_formula = VALUES(diferencial_formula),
      cta_titulo = VALUES(cta_titulo),
      cta_subtitulo = VALUES(cta_subtitulo),
      status = VALUES(status);
  `);
  console.log('✅ Tarjeta ejecutiva de Sandra Cuevas actualizada exitosamente.');

  // Insertar o actualizar tarjeta para gadiel-palma
  await connection.query(`
    INSERT INTO tarjetas (
      id, slug, first_name, last_name, title, company, bio, experiencia_badge, pilares_tags, phone, email,
      website, website_url, whatsapp_url, linkedin_url, photo_url, semblanza_p1, semblanza_p2, semblanza_p3,
      cita_texto, enfoque_destacado, servicios, diferencial_titulo, diferencial_formula, cta_titulo, cta_subtitulo, status
    ) VALUES (
      'tarjeta_gadiel',
      'gadiel-palma',
      'GADIEL',
      'PALMA',
      'Desarrollo Web · Inteligencia Artificial · Automatización & Sistemas',
      'TRÉBOL DIGITAL',
      'Transformo modelos de negocio y procesos manuales en plataformas web de alto rendimiento y ecosistemas con Inteligencia Artificial.',
      '+7 años de experiencia en desarrollo & arquitectura de software',
      '["Desarrollo Next.js","Agentes IA 24/7","Automatizaciones","Cloud & APIs","Sistemas Web","Arquitectura Serverless"]',
      '+52 55 6492 9081',
      'gadiel@treboldigital.com',
      'treboldigital.com.mx',
      'https://treboldigital.com.mx',
      'https://wa.me/525564929081?text=Hola%20Gadiel,%20vi%20tu%20tarjeta%20digital%20y%20me%20gustar%C3%ADa%20platicar.',
      'https://linkedin.com',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=95',
      'Gadiel Palma es Desarrollador Web y Especialista en Inteligencia Artificial en Trébol Digital. Ha diseñado e implementado arquitecturas serverless en Next.js, agentes conversacionales 24/7 y soluciones de automatización inteligente.',
      'Su enfoque combina ingeniería de software de alto rendimiento, optimización de velocidad de carga y experiencia de usuario fluida orientada a resultados de negocio.',
      'Lidera la integración tecnológica en Trébol Digital conectando interfaces web modernas con inteligencia artificial y automatizaciones seguras.',
      'La ingeniería de software y la inteligencia artificial unidas transforman ideas complejas en experiencias digitales de alto impacto.',
      'Mi enfoque: código limpio, máxima velocidad de carga y soluciones tecnológicas orientadas al retorno de inversión.',
      '[{"titulo":"Estrategia Tecnológica","descripcion":"Arquitectura web · Modernización de sistemas · Consultoría tech · Escalabilidad"},{"titulo":"Desarrollo Web & Apps","descripcion":"Next.js · APIs serverless · Experiencia de usuario (UI/UX) · Alta velocidad"},{"titulo":"Automatización de Procesos","descripcion":"Flujos de trabajo · Conexión CRM · n8n & Make · Integración de plataformas"},{"titulo":"IA Aplicada a Negocios","descripcion":"Agentes conversacionales 24/7 · RAG & Knowledge bases · Automatización de tareas · Chatbots inteligentes"}]',
      'No creamos software genérico. Diseñamos la infraestructura tecnológica que impulsa tu crecimiento.',
      'Ingeniería robusta + UX de alto nivel + IA personalizada + automatización + soporte continuo.',
      '¿TIENES UN RETO TECNOLÓGICO O DE IA?',
      'Tengamos una sesión de diagnóstico sin costo. Analicemos cómo modernizar tu empresa y automatizar tus procesos.',
      'published'
    ) ON DUPLICATE KEY UPDATE
      first_name = VALUES(first_name),
      last_name = VALUES(last_name),
      title = VALUES(title),
      company = VALUES(company),
      bio = VALUES(bio),
      experiencia_badge = VALUES(experiencia_badge),
      pilares_tags = VALUES(pilares_tags),
      phone = VALUES(phone),
      email = VALUES(email),
      website = VALUES(website),
      website_url = VALUES(website_url),
      whatsapp_url = VALUES(whatsapp_url),
      linkedin_url = VALUES(linkedin_url),
      photo_url = VALUES(photo_url),
      semblanza_p1 = VALUES(semblanza_p1),
      semblanza_p2 = VALUES(semblanza_p2),
      semblanza_p3 = VALUES(semblanza_p3),
      cita_texto = VALUES(cita_texto),
      enfoque_destacado = VALUES(enfoque_destacado),
      servicios = VALUES(servicios),
      diferencial_titulo = VALUES(diferencial_titulo),
      diferencial_formula = VALUES(diferencial_formula),
      cta_titulo = VALUES(cta_titulo),
      cta_subtitulo = VALUES(cta_subtitulo),
      status = VALUES(status);
  `);
  console.log('✅ Tarjeta ejecutiva de Gadiel Palma actualizada exitosamente.');

  // Tabla Citas / Agendamientos (Estilo Calendly & CRM)
  await connection.query(`
    CREATE TABLE IF NOT EXISTS citas (
      id VARCHAR(255) PRIMARY KEY,
      nombre VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      telefono VARCHAR(50),
      empresa VARCHAR(255),
      host_nombre VARCHAR(150),
      fecha VARCHAR(50) NOT NULL,
      hora VARCHAR(50) NOT NULL,
      mensaje TEXT,
      notas TEXT,
      proxima_reunion VARCHAR(255),
      status VARCHAR(50) DEFAULT 'confirmed',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);

  // Asegurar columnas notas y proxima_reunion si la tabla ya existía
  try { await connection.query('ALTER TABLE citas ADD COLUMN notas TEXT;'); } catch (e) {}
  try { await connection.query('ALTER TABLE citas ADD COLUMN proxima_reunion VARCHAR(255);'); } catch (e) {}

  // Insertar 2 citas de ejemplo para seguimiento CRM si no existen
  const [existingCitas] = await connection.query("SELECT id FROM citas WHERE id IN ('cita_ejemplo_1', 'cita_ejemplo_2')");
  if (existingCitas.length === 0) {
    await connection.query(`
      INSERT INTO citas (id, nombre, email, telefono, empresa, host_nombre, fecha, hora, mensaje, notas, proxima_reunion, status)
      VALUES 
      (
        'cita_ejemplo_1',
        'Carlos Mendoza',
        'carlos@grupoindustrialb2b.com',
        '+52 55 1234 5678',
        'Grupo Industrial B2B',
        'Gadiel Palma',
        'Vie 22 Ago',
        '10:00 AM',
        'Interesado en implementar Agentes Conversacionales de IA y migración web a Next.js.',
        'Cliente potencial de alto valor. Se presentó demo de IA en la primera llamada. Solicita propuesta técnica y de costos.',
        'Mar 26 Ago · 11:00 AM',
        'confirmed'
      ),
      (
        'cita_ejemplo_2',
        'Valeria Sotomayor',
        'valeria@logisticacdmx.com',
        '+52 55 9876 5432',
        'Logística CDMX',
        'Sandra Cuevas',
        'Lun 25 Ago',
        '03:00 PM',
        'Busca rediseño de embudo publicitario y aceleración de cultura organizacional para su equipo.',
        'Se revisaron los embudos actuales. Le interesan las campañas de aceleración B2B. Pendiente de enviar cotización formal.',
        'Jue 28 Ago · 04:00 PM',
        'confirmed'
      );
    `);
    console.log('✅ 2 Citas de ejemplo con seguimiento CRM insertadas exitosamente.');
  }

  // Tabla Usuarios & Roles (RBAC)
  await connection.query(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id VARCHAR(255) PRIMARY KEY,
      username VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255),
      role VARCHAR(50) NOT NULL DEFAULT 'editor_contenido',
      permissions TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);

  const [existingUsers] = await connection.query("SELECT id FROM usuarios WHERE username IN ('admin', 'editor', 'ventas')");
  if (existingUsers.length === 0) {
    await connection.query(`
      INSERT INTO usuarios (id, username, password, name, email, role, permissions)
      VALUES 
      ('usr_superadmin', 'admin', 'admin', 'Gadiel Palma', 'gadiel@treboldigital.com', 'super_admin', '["manage_users","edit_landings","edit_blogs","edit_casos","edit_tarjetas","manage_crm","manage_popups"]'),
      ('usr_editor', 'editor', 'editor123', 'Sandra Cuevas', 'sandra@treboldigital.com', 'editor_contenido', '["edit_landings","edit_blogs","edit_casos"]'),
      ('usr_ventas', 'ventas', 'ventas123', 'Agente de Ventas CRM', 'ventas@treboldigital.com', 'agente_crm', '["manage_crm","edit_tarjetas"]');
    `);
    console.log('✅ Usuarios RBAC predeterminados creados (admin, editor, ventas).');
  }

  // Tabla Recursos Descargables
  await connection.query(`
    CREATE TABLE IF NOT EXISTS recursos (
      id VARCHAR(255) PRIMARY KEY,
      tipo VARCHAR(100),
      formato VARCHAR(50),
      descargas VARCHAR(100),
      titulo VARCHAR(255) NOT NULL,
      desc_texto TEXT,
      tags TEXT,
      download_url VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);

  const [existingRecursos] = await connection.query("SELECT id FROM recursos LIMIT 1");
  if (existingRecursos.length === 0) {
    await connection.query(`
      INSERT INTO recursos (id, tipo, formato, descargas, titulo, desc_texto, tags, download_url)
      VALUES 
      ('rec-1', 'Plantilla', '.XLSX', '1,420 descargas', 'Calendario Editorial Mensual', 'Organiza todo tu contenido del mes en un sistema simple y efectivo. Incluye columnas para canal, formato, tema, copy y estado.', '["Marketing","Contenido","Redes"]', '#'),
      ('rec-2', 'Guía Práctica', '.PDF', '2,100 descargas', 'Cómo Usar ChatGPT en tu Empresa', 'Guía de 30 páginas con prompts probados, casos de uso reales y un plan de implementación por área de negocio.', '["IA","Productividad","Prompts"]', '#'),
      ('rec-3', 'Checklist', '.NOTION', '980 descargas', 'Auditoría de Presencia Digital', '47 puntos de revisión para evaluar el estado actual de tu negocio digital: web, redes, SEO, contenido y conversión.', '["Marketing","Diagnóstico"]', '#'),
      ('rec-4', 'Framework', '.PDF', '1,850 descargas', 'Plan Estratégico a 90 Días', 'Marco de trabajo para definir objetivos, métricas, acciones y responsables. El mismo que usamos con nuestros clientes.', '["Estrategia","Planeación"]', '#');
    `);
    console.log('✅ Recursos descargables iniciales sembrados en MySQL.');
  }

  // Tabla Cursos & Talleres
  await connection.query(`
    CREATE TABLE IF NOT EXISTS talleres (
      id VARCHAR(255) PRIMARY KEY,
      titulo VARCHAR(255) NOT NULL,
      tipo VARCHAR(100),
      modalidad VARCHAR(100),
      duracion VARCHAR(100),
      fecha VARCHAR(100),
      hora VARCHAR(100),
      precio VARCHAR(100),
      cupos VARCHAR(100),
      desc_texto TEXT,
      imagen VARCHAR(255),
      reservar_url VARCHAR(255) DEFAULT '/agenda',
      temas TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);

  const [existingTalleres] = await connection.query("SELECT id FROM talleres LIMIT 1");
  if (existingTalleres.length === 0) {
    await connection.query(`
      INSERT INTO talleres (id, titulo, tipo, modalidad, duracion, fecha, hora, precio, cupos, desc_texto, imagen, reservar_url, temas)
      VALUES 
      ('tal-1', 'IA para no técnicos: Herramientas que cambian tu negocio', 'Taller Intensivo', 'Online en Vivo', '4 Horas', '15 Agosto, 2026', '10:00 AM – 2:00 PM (CST)', 'Gratuito', 'Quedan 5 lugares', 'Aprende a utilizar ChatGPT, Gemini, Make y agentes IA en la operación diaria de tu empresa. Cero código.', 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80', '/agenda', '["Panorama IA 2026 & Herramientas Clave","ChatGPT & Claude para automatización operativa","Construcción de tu primer flujo en Make (30 min)","Entrenamiento de Agentes IA de atención y ventas"]'),
      ('tal-2', 'Marketing Digital para PYMEs: De 0 a Estrategia en 1 Día', 'Workshop Presencial', 'Presencial · Toluca', '6 Horas', '22 Agosto, 2026', '9:00 AM – 3:00 PM (CST)', '$1,500 MXN', 'Quedan 3 lugares', 'Estructura tu marca, crea contenido que vende y lanza campañas de Google Ads rentables con resultados medibles.', 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80', '/agenda', '["Buyer Persona & Propuesta de Valor Única","Calendario Editorial & Copywriting de Conversión","SEO Local Google Maps & Optimización GMB","Campañas Básicas de Google Ads B2B/B2C"]'),
      ('tal-3', 'Comunicación Interna Efectiva para Equipos en Crecimiento', 'Programa In-Company', 'Presencial u Online', '3 Horas', 'A Convenir', 'Horario flexible', 'A Medida', 'Hasta 30 personas', 'Taller práctico para mejorar la coordinación del equipo, reducir reuniones innecesarias y mejorar la claridad de roles.', 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80', '/agenda', '["Diagnóstico de Comunicación Interdepartamental","Matriz RACI y Claridad de Responsabilidades","Reuniones Efectivas: Metodología 15 Minutos","Cultura de Transparencia y Retroalimentación"]');
    `);
    console.log('✅ Talleres iniciales sembrados en MySQL.');
  }

  // Tabla Configuración Global
  await connection.query(`
    CREATE TABLE IF NOT EXISTS config (
      clave VARCHAR(100) PRIMARY KEY,
      valor LONGTEXT,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);

  console.log('✅ Base de datos y tablas creadas exitosamente en XAMPP MySQL.');
  await connection.end();
}

initMySQL();
