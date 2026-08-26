require('dotenv').config({ path: '.env.local' });
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.log('⚠️ Configuración de Supabase no detectada en variables de entorno.');
  console.log('💡 Por favor define NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY en tu archivo .env.local');
  console.log('💡 Para crear la estructura de tablas, copia y ejecuta el archivo scripts/init_supabase.sql en el SQL Editor de tu Dashboard de Supabase.');
  process.exit(0);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function initSupabaseSeed() {
  console.log('🔌 Conectando a Supabase...');
  console.log(`🌐 URL: ${supabaseUrl}`);

  // Seed Tarjetas
  const tarjetas = [
    {
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
    },
    {
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
      semblanza_p2: 'Su especialidad radica en conectar el posicionamiento de marca, la estrategia de captación B2B y el desarrollo del talento interno para construir organizaciones highly competitivas.',
      cita_texto: 'El verdadero marketing no solo atrae clientes, transforma la cultura y la fuerza motriz de toda la organización.'
    }
  ];

  console.log('📦 Sembrando datos iniciales en Supabase (Tarjetas)...');
  const { error: errorTarjetas } = await supabase.from('tarjetas').upsert(tarjetas, { onConflict: 'id' });
  if (errorTarjetas) {
    console.error('❌ Error sembrando tarjetas:', errorTarjetas.message);
  } else {
    console.log('✅ Tarjetas ejecutivas sembradas correctamente en Supabase.');
  }

  // Seed Citas
  const citas = [
    {
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
    },
    {
      id: 'cita_ejemplo_2',
      nombre: 'Valeria Sotomayor',
      email: 'valeria@logisticacdmx.com',
      telefono: '+52 55 9876 5432',
      empresa: 'Logística CDMX',
      host_nombre: 'Sandra Cuevas',
      fecha: 'Lun 25 Ago',
      hora: '03:00 PM',
      mensaje: 'Busca rediseño de embudo publicitario y aceleración de cultura organizacional para su equipo.',
      notas: 'Se revisaron los embudos actuales. Le interesan las campañas de aceleración B2B. Pendiente de enviar cotización formal.',
      proxima_reunion: 'Jue 28 Ago · 04:00 PM',
      status: 'confirmed'
    }
  ];

  console.log('📦 Sembrando datos iniciales en Supabase (Citas CRM)...');
  const { error: errorCitas } = await supabase.from('citas').upsert(citas, { onConflict: 'id' });
  if (errorCitas) {
    console.error('❌ Error sembrando citas:', errorCitas.message);
  } else {
    console.log('✅ Citas CRM sembradas correctamente en Supabase.');
  }

  // Seed usuarios RBAC
  const usuarios = [
    {
      id: 'usr_superadmin',
      username: 'admin',
      password: 'admin',
      name: 'Gadiel Palma',
      email: 'gadiel@treboldigital.com',
      role: 'super_admin',
      permissions: ["manage_users","edit_landings","edit_blogs","edit_casos","edit_tarjetas","manage_crm","manage_popups"]
    },
    {
      id: 'usr_editor',
      username: 'editor',
      password: 'editor123',
      name: 'Sandra Cuevas',
      email: 'sandra@treboldigital.com',
      role: 'editor_contenido',
      permissions: ["edit_landings","edit_blogs","edit_casos"]
    },
    {
      id: 'usr_ventas',
      username: 'ventas',
      password: 'ventas123',
      name: 'Agente de Ventas CRM',
      email: 'ventas@treboldigital.com',
      role: 'agente_crm',
      permissions: ["manage_crm","edit_tarjetas"]
    }
  ];

  console.log('📦 Sembrando datos iniciales en Supabase (Usuarios RBAC)...');
  const { error: errorUsuarios } = await supabase.from('usuarios').upsert(usuarios, { onConflict: 'id' });
  if (errorUsuarios) {
    console.error('❌ Error sembrando usuarios:', errorUsuarios.message);
  } else {
    console.log('✅ Usuarios RBAC sembrados correctamente en Supabase.');
  }

  console.log('✨ Inicialización de sembrado en Supabase completada con éxito.');
}

initSupabaseSeed();
