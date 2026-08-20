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
      'treboldigital.com',
      'https://treboldigital.com',
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
      'treboldigital.com',
      'https://treboldigital.com',
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

  // Tabla Citas / Agendamientos (Estilo Calendly)
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
      status VARCHAR(50) DEFAULT 'confirmed',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);

  console.log('✅ Base de datos y tablas creadas exitosamente en XAMPP MySQL.');
  await connection.end();
}

initMySQL();
