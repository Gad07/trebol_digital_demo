const mysql = require('mysql2/promise');

async function initMySQL() {
  console.log('🔌 Conectando a MySQL en XAMPP (localhost:3306)...');
  
  // Conectar primeramente a MySQL servidor sin especificar base de datos
  let connection;
  try {
    connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST || 'localhost',
      port: Number(process.env.MYSQL_PORT) || 3306,
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD || ''
    });
    console.log('✅ Conexión establecida con el servidor MySQL en XAMPP.');
  } catch (err) {
    console.error('❌ Error al conectar a XAMPP MySQL:', err.message);
    process.exit(1);
  }

  const dbName = process.env.MYSQL_DATABASE || 'trebol_db';
  console.log(`📦 Creando base de datos "${dbName}" si no existe...`);
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`);
  await connection.query(`USE \`${dbName}\`;`);

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
      title VARCHAR(150),
      company VARCHAR(150),
      bio TEXT,
      phone VARCHAR(50),
      email VARCHAR(150),
      website VARCHAR(150),
      website_url TEXT,
      whatsapp_url TEXT,
      photo_url TEXT,
      semblanza_p1 TEXT,
      semblanza_p2 TEXT,
      cita_texto TEXT,
      status VARCHAR(50) DEFAULT 'published',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);

  // Limpiar tarjeta anterior de gabriel si existe
  await connection.query("DELETE FROM tarjetas WHERE slug = 'gabriel-paz' OR slug = 'gabriel' OR id = 'tarjeta_gabriel';");

  // Insertar o actualizar tarjeta por defecto para gadiel-palma
  await connection.query(`
    INSERT INTO tarjetas (
      id, slug, first_name, last_name, title, company, bio, phone, email, website, website_url, whatsapp_url, photo_url, semblanza_p1, semblanza_p2, cita_texto
    ) VALUES (
      'tarjeta_gadiel',
      'gadiel-palma',
      'GADIEL',
      'PALMA',
      'DESARROLLADOR & ESPECIALISTA EN IA',
      'TRÉBOL DIGITAL',
      'Desarrollador Web y Especialista en Inteligencia Artificial. Integramos aplicaciones web de alto rendimiento en Next.js, agentes conversacionales 24/7 y automatización inteligente para empresas.',
      '+52 55 6492 9081',
      'gadiel@treboldigital.com',
      'treboldigital.com.mx',
      'https://treboldigital.com.mx',
      'https://wa.me/525564929081?text=Hola%20Gadiel,%20vi%20tu%20tarjeta%20digital%20y%20me%20gustar%C3%ADa%20platicar.',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=95',
      'Gadiel Palma es Desarrollador Web y Especialista en Inteligencia Artificial en Trébol Digital. Ha diseñado e implementado arquitecturas serverless en Next.js, agentes conversacionales 24/7 y soluciones de automatización inteligente.',
      'Su enfoque combina ingeniería de software de alto rendimiento, optimización de velocidad de carga y experiencia de usuario fluida orientada a resultados de negocio.',
      'La ingeniería de software y la inteligencia artificial unidas transforman ideas complejas en experiencias digitales de alto impacto.'
    ) ON DUPLICATE KEY UPDATE
      first_name = VALUES(first_name),
      last_name = VALUES(last_name),
      title = VALUES(title),
      company = VALUES(company),
      bio = VALUES(bio),
      phone = VALUES(phone),
      email = VALUES(email),
      website = VALUES(website),
      website_url = VALUES(website_url),
      whatsapp_url = VALUES(whatsapp_url),
      photo_url = VALUES(photo_url),
      semblanza_p1 = VALUES(semblanza_p1),
      semblanza_p2 = VALUES(semblanza_p2),
      cita_texto = VALUES(cita_texto);
  `);
  console.log('✅ Tarjeta ejecutiva principal (gadiel-palma) actualizada exitosamente.');

  // Insertar o actualizar tarjeta para sandra-cuevas
  await connection.query(`
    INSERT INTO tarjetas (
      id, slug, first_name, last_name, title, company, bio, phone, email, website, website_url, whatsapp_url, photo_url, semblanza_p1, semblanza_p2, cita_texto
    ) VALUES (
      'tarjeta_sandra',
      'sandra-cuevas',
      'SANDRA',
      'CUEVAS',
      'CEO & ESPECIALISTA EN MARKETING Y DESARROLLO ORGANIZACIONAL',
      'TRÉBOL DIGITAL',
      'CEO y Estratega en Marketing & Desarrollo Organizacional. Lideramos la transformación de empresas en México mediante embudos publicitarios de alto impacto, alineación de equipos y aceleración de cultura organizacional.',
      '+52 55 5555 1234',
      'sandra@treboldigital.com',
      'treboldigital.com.mx',
      'https://treboldigital.com.mx',
      'https://wa.me/525555551234?text=Hola%20Sandra,%20vi%20tu%20tarjeta%20digital%20y%20me%20gustar%C3%ADa%20platicar.',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=95',
      'Sandra Cuevas se desempeña como CEO y Especialista en Marketing y Desarrollo Organizacional en Trébol Digital. Ha impulsado el crecimiento estructural y comercial de decenas de marcas en México.',
      'Su especialidad radica en conectar el posicionamiento de marca, la estrategia de captación B2B y el desarrollo del talento interno para construir organizaciones altamente competitivas.',
      'El verdadero marketing no solo atrae clientes, transforma la cultura y la fuerza motriz de toda la organización.'
    ) ON DUPLICATE KEY UPDATE
      first_name = VALUES(first_name),
      last_name = VALUES(last_name),
      title = VALUES(title),
      company = VALUES(company),
      bio = VALUES(bio),
      phone = VALUES(phone),
      email = VALUES(email),
      website = VALUES(website),
      website_url = VALUES(website_url),
      whatsapp_url = VALUES(whatsapp_url),
      photo_url = VALUES(photo_url),
      semblanza_p1 = VALUES(semblanza_p1),
      semblanza_p2 = VALUES(semblanza_p2),
      cita_texto = VALUES(cita_texto);
  `);
  console.log('✅ Tarjeta ejecutiva secundaria (sandra-cuevas) insertada exitosamente.');

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
