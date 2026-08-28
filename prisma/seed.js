require('dotenv').config({ path: '.env.local' });
require('dotenv').config({ path: '.env' });
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Sembrando datos iniciales en Supabase mediante Prisma ORM...');

  // Tarjetas Ejecutivas
  const tarjetaGadiel = await prisma.tarjeta.upsert({
    where: { id: 'tarjeta_gadiel' },
    update: {
      slug: 'gadiel-palma',
      first_name: 'GADIEL',
      last_name: 'PALMA',
      title: 'DESARROLLADOR & ESPECIALISTA EN IA',
      company: 'TRÉBOL DIGITAL',
      bio: 'Desarrollador Web y Especialista en Inteligencia Artificial. Integramos aplicaciones web de alto rendimiento en Next.js, agentes conversacionales 24/7 y automatización inteligente para empresas.',
      phone: '+52 55 6492 9081',
      email: 'gadiel@treboldigital.com',
      website: 'treboldigital.com',
      website_url: 'https://treboldigital.com',
      whatsapp_url: 'https://wa.me/525564929081?text=Hola%20Gadiel,%20vi%20tu%20tarjeta%20digital%20y%20me%20gustar%C3%ADa%20platicar.',
      photo_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=95',
      semblanza_p1: 'Gadiel Palma es Desarrollador Web y Especialista en Inteligencia Artificial en Trébol Digital. Ha diseñado e implementado arquitecturas serverless en Next.js, agentes conversacionales 24/7 y soluciones de automatización inteligente.',
      semblanza_p2: 'Su enfoque combina ingeniería de software de alto rendimiento, optimización de velocidad de carga y experiencia de usuario fluida orientada a resultados de negocio.',
      cita_texto: 'La ingeniería de software y la inteligencia artificial unidas transforman ideas complejas en experiencias digitales de alto impacto.'
    },
    create: {
      id: 'tarjeta_gadiel',
      slug: 'gadiel-palma',
      first_name: 'GADIEL',
      last_name: 'PALMA',
      title: 'DESARROLLADOR & ESPECIALISTA EN IA',
      company: 'TRÉBOL DIGITAL',
      bio: 'Desarrollador Web y Especialista en Inteligencia Artificial. Integramos aplicaciones web de alto rendimiento en Next.js, agentes conversacionales 24/7 y automatización inteligente para empresas.',
      phone: '+52 55 6492 9081',
      email: 'gadiel@treboldigital.com',
      website: 'treboldigital.com',
      website_url: 'https://treboldigital.com',
      whatsapp_url: 'https://wa.me/525564929081?text=Hola%20Gadiel,%20vi%20tu%20tarjeta%20digital%20y%20me%20gustar%C3%ADa%20platicar.',
      photo_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=95',
      semblanza_p1: 'Gadiel Palma es Desarrollador Web y Especialista en Inteligencia Artificial en Trébol Digital. Ha diseñado e implementado arquitecturas serverless en Next.js, agentes conversacionales 24/7 y soluciones de automatización inteligente.',
      semblanza_p2: 'Su enfoque combina ingeniería de software de alto rendimiento, optimización de velocidad de carga y experiencia de usuario fluida orientada a resultados de negocio.',
      cita_texto: 'La ingeniería de software y la inteligencia artificial unidas transforman ideas complejas en experiencias digitales de alto impacto.'
    }
  });

  const tarjetaSandra = await prisma.tarjeta.upsert({
    where: { id: 'tarjeta_sandra' },
    update: {
      slug: 'sandra-cuevas',
      first_name: 'SANDRA',
      last_name: 'CUEVAS',
      title: 'CEO & ESPECIALISTA EN MARKETING Y DESARROLLO ORGANIZACIONAL',
      company: 'TRÉBOL DIGITAL',
      bio: 'CEO y Estratega en Marketing & Desarrollo Organizacional. Lideramos la transformación de empresas en México mediante embudos publicitarios de alto impacto, alineación de equipos y aceleración de cultura organizacional.',
      phone: '+52 55 5555 1234',
      email: 'sandra@treboldigital.com',
      website: 'treboldigital.com',
      website_url: 'https://treboldigital.com',
      whatsapp_url: 'https://wa.me/525555551234?text=Hola%20Sandra,%20vi%20tu%20tarjeta%20digital%20y%20me%20gustar%C3%ADa%20platicar.',
      photo_url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=95',
      semblanza_p1: 'Sandra Cuevas se desempeña como CEO y Especialista en Marketing y Desarrollo Organizacional en Trébol Digital. Ha impulsado el crecimiento estructural y comercial de decenas de marcas en México.',
      semblanza_p2: 'Su especialidad radica en conectar el posicionamiento de marca, la estrategia de captación B2B y el desarrollo del talento interno para construir organizaciones altamente competitivas.',
      cita_texto: 'El verdadero marketing no solo atrae clientes, transforma la cultura y la fuerza motriz de toda la organización.'
    },
    create: {
      id: 'tarjeta_sandra',
      slug: 'sandra-cuevas',
      first_name: 'SANDRA',
      last_name: 'CUEVAS',
      title: 'CEO & ESPECIALISTA EN MARKETING Y DESARROLLO ORGANIZACIONAL',
      company: 'TRÉBOL DIGITAL',
      bio: 'CEO y Estratega en Marketing & Desarrollo Organizacional. Lideramos la transformación de empresas en México mediante embudos publicitarios de alto impacto, alineación de equipos y aceleración de cultura organizacional.',
      phone: '+52 55 5555 1234',
      email: 'sandra@treboldigital.com',
      website: 'treboldigital.com',
      website_url: 'https://treboldigital.com',
      whatsapp_url: 'https://wa.me/525555551234?text=Hola%20Sandra,%20vi%20tu%20tarjeta%20digital%20y%20me%20gustar%C3%ADa%20platicar.',
      photo_url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=95',
      semblanza_p1: 'Sandra Cuevas se desempeña como CEO y Especialista en Marketing y Desarrollo Organizacional en Trébol Digital. Ha impulsado el crecimiento estructural y comercial de decenas de marcas en México.',
      semblanza_p2: 'Su especialidad radica en conectar el posicionamiento de marca, la estrategia de captación B2B y el desarrollo del talento interno para construir organizaciones altamente competitivas.',
      cita_texto: 'El verdadero marketing no solo atrae clientes, transforma la cultura y la fuerza motriz de toda la organización.'
    }
  });

  console.log('✅ Tarjetas ejecutivas guardadas:', tarjetaGadiel.slug, tarjetaSandra.slug);

  // Citas CRM
  await prisma.cita.upsert({
    where: { id: 'cita_ejemplo_1' },
    update: {},
    create: {
      id: 'cita_ejemplo_1',
      nombre: 'Carlos Mendoza',
      email: 'carlos@grupoindustrialb2b.com',
      telefono: '+52 55 1234 5678',
      empresa: 'Grupo Industrial B2B',
      host_nombre: 'Gadiel Palma',
      fecha: 'Vie 22 Ago',
      hora: '10:00 AM',
      mensaje: 'Interesado en implementar Agentes Conversacionales de IA y migración web a Next.js.',
      notas: 'Cliente potencial de alto valor. Se presentó demo de IA en la primera llamada. Solicita propuesta técnica y de costos.',
      proxima_reunion: 'Mar 26 Ago · 11:00 AM',
      status: 'confirmed'
    }
  });

  // Usuarios RBAC
  await prisma.usuario.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      id: 'usr_superadmin',
      username: 'admin',
      password: 'admin',
      name: 'Gadiel Palma',
      email: 'gadiel@treboldigital.com',
      role: 'super_admin',
      permissions: ["manage_users","edit_landings","edit_blogs","edit_casos","edit_tarjetas","manage_crm","manage_popups"]
    }
  });

  // Configuración de Banner de Clientes / Logos
  const clientesData = require('../data/clientes_db.json');
  await prisma.config.upsert({
    where: { clave: 'clientes_banner' },
    update: { valor: clientesData },
    create: { clave: 'clientes_banner', valor: clientesData }
  });
  console.log('✅ Banner de clientes / logos sembrado exitosamente.');

  // Recursos Descargables
  const recursosData = require('../data/recursos_db.json');
  for (const r of recursosData) {
    await prisma.recurso.upsert({
      where: { id: r.id },
      update: {
        tipo: r.tipo,
        formato: r.formato,
        descargas: r.descargas,
        titulo: r.titulo,
        desc_texto: r.desc,
        tags: r.tags || [],
        download_url: r.downloadUrl || '#'
      },
      create: {
        id: r.id,
        tipo: r.tipo,
        formato: r.formato,
        descargas: r.descargas,
        titulo: r.titulo,
        desc_texto: r.desc,
        tags: r.tags || [],
        download_url: r.downloadUrl || '#'
      }
    });
  }
  console.log('✅ Recursos descargables sembrados exitosamente.');

  // Cursos & Talleres
  const talleresData = require('../data/talleres_db.json');
  for (const t of talleresData) {
    await prisma.taller.upsert({
      where: { id: t.id },
      update: {
        titulo: t.titulo,
        tipo: t.tipo,
        modalidad: t.modalidad,
        duracion: t.duracion,
        fecha: t.fecha,
        hora: t.hora,
        precio: t.precio,
        cupos: t.cupos,
        desc_texto: t.desc,
        imagen: t.imagen,
        temas: t.temas || []
      },
      create: {
        id: t.id,
        titulo: t.titulo,
        tipo: t.tipo,
        modalidad: t.modalidad,
        duracion: t.duracion,
        fecha: t.fecha,
        hora: t.hora,
        precio: t.precio,
        cupos: t.cupos,
        desc_texto: t.desc,
        imagen: t.imagen,
        temas: t.temas || []
      }
    });
  }
  console.log('✅ Cursos & talleres sembrados exitosamente.');

  // Mini Blogs / Artículos Insights
  const blogsData = require('../data/blogs_db.json');
  for (const b of blogsData) {
    await prisma.blog.upsert({
      where: { slug: b.slug },
      update: {
        titulo: b.titulo,
        categoria: b.categoria,
        subtitulo: b.subtitulo,
        resumen: b.resumen || b.extracto,
        autor: b.autor || 'Trébol Digital',
        fecha: b.fecha,
        tiempo_lectura: b.tiempoLectura || b.tiempo || '5 min',
        imagen_url: b.imagenUrl || b.imagen || '',
        destacado: Boolean(b.destacado),
        status: b.status || 'published'
      },
      create: {
        id: b.id,
        slug: b.slug,
        titulo: b.titulo,
        categoria: b.categoria,
        subtitulo: b.subtitulo,
        resumen: b.resumen || b.extracto,
        autor: b.autor || 'Trébol Digital',
        fecha: b.fecha,
        tiempo_lectura: b.tiempoLectura || b.tiempo || '5 min',
        imagen_url: b.imagenUrl || b.imagen || '',
        destacado: Boolean(b.destacado),
        status: b.status || 'published'
      }
    });
  }
  console.log('✅ Mini blogs sembrados exitosamente en la base de datos.');

  console.log('✨ Sembrado Prisma completado exitosamente.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Error sembrando con Prisma:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
