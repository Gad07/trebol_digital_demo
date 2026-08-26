-- ====================================================================
-- TRÉBOL DIGITAL - SUPABASE DATABASE INITIALIZATION SCRIPT
-- Copy & paste this into the Supabase SQL Editor (https://supabase.com/dashboard)
-- ====================================================================

-- 1. BLOGS
CREATE TABLE IF NOT EXISTS public.blogs (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  titulo TEXT NOT NULL,
  categoria TEXT,
  subtitulo TEXT,
  resumen TEXT,
  autor TEXT DEFAULT 'Trébol Digital',
  fecha TEXT,
  tiempo_lectura TEXT DEFAULT '5 min',
  imagen_url TEXT,
  destacado BOOLEAN DEFAULT FALSE,
  contenido JSONB DEFAULT '[]'::jsonb,
  status TEXT DEFAULT 'published',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. CASOS DE ÉXITO
CREATE TABLE IF NOT EXISTS public.casos (
  id TEXT PRIMARY KEY,
  slug TEXT,
  titulo TEXT NOT NULL,
  categoria TEXT,
  cliente TEXT,
  resultado TEXT,
  imagen_url TEXT,
  descripcion TEXT,
  status TEXT DEFAULT 'published',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. TESTIMONIOS
CREATE TABLE IF NOT EXISTS public.testimonios (
  id TEXT PRIMARY KEY,
  nombre TEXT NOT NULL,
  cargo TEXT,
  empresa TEXT,
  texto TEXT NOT NULL,
  avatar TEXT,
  rating INT DEFAULT 5,
  status TEXT DEFAULT 'published',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. LANDING PAGES DINÁMICAS
CREATE TABLE IF NOT EXISTS public.landings (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  theme_style TEXT DEFAULT 'v2',
  status TEXT DEFAULT 'published',
  meta_title TEXT,
  meta_description TEXT,
  sections JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. TARJETAS EJECUTIVAS DIGITALES
CREATE TABLE IF NOT EXISTS public.tarjetas (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  title TEXT,
  company TEXT,
  bio TEXT,
  phone TEXT,
  email TEXT,
  website TEXT,
  website_url TEXT,
  whatsapp_url TEXT,
  photo_url TEXT,
  semblanza_p1 TEXT,
  semblanza_p2 TEXT,
  cita_texto TEXT,
  status TEXT DEFAULT 'published',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. CITAS & AGENDAMIENTOS CRM
CREATE TABLE IF NOT EXISTS public.citas (
  id TEXT PRIMARY KEY,
  nombre TEXT NOT NULL,
  email TEXT NOT NULL,
  telefono TEXT,
  empresa TEXT,
  host_nombre TEXT,
  fecha TEXT NOT NULL,
  hora TEXT NOT NULL,
  mensaje TEXT,
  notas TEXT,
  proxima_reunion TEXT,
  status TEXT DEFAULT 'confirmed',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. USUARIOS & ROLES (RBAC)
CREATE TABLE IF NOT EXISTS public.usuarios (
  id TEXT PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT,
  role TEXT DEFAULT 'editor_contenido',
  permissions JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. RECURSOS DESCARGABLES
CREATE TABLE IF NOT EXISTS public.recursos (
  id TEXT PRIMARY KEY,
  tipo TEXT,
  formato TEXT,
  descargas TEXT,
  titulo TEXT NOT NULL,
  desc_texto TEXT,
  tags JSONB DEFAULT '[]'::jsonb,
  download_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. TALLERES & CURSOS
CREATE TABLE IF NOT EXISTS public.talleres (
  id TEXT PRIMARY KEY,
  titulo TEXT NOT NULL,
  tipo TEXT,
  modalidad TEXT,
  duracion TEXT,
  fecha TEXT,
  hora TEXT,
  precio TEXT,
  cupos TEXT,
  desc_texto TEXT,
  imagen TEXT,
  temas JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 10. CONFIGURACIÓN GLOBAL
CREATE TABLE IF NOT EXISTS public.config (
  clave TEXT PRIMARY KEY,
  valor JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ====================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- Enable read access for public, and write access for authenticated service role
-- ====================================================================

ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.casos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonios ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.landings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tarjetas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.citas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.usuarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.recursos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.talleres ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.config ENABLE ROW LEVEL SECURITY;

-- Allow public reads
CREATE POLICY "Allow public read blogs" ON public.blogs FOR SELECT USING (true);
CREATE POLICY "Allow public read casos" ON public.casos FOR SELECT USING (true);
CREATE POLICY "Allow public read testimonios" ON public.testimonios FOR SELECT USING (true);
CREATE POLICY "Allow public read landings" ON public.landings FOR SELECT USING (true);
CREATE POLICY "Allow public read tarjetas" ON public.tarjetas FOR SELECT USING (true);
CREATE POLICY "Allow public read citas" ON public.citas FOR SELECT USING (true);
CREATE POLICY "Allow public read usuarios" ON public.usuarios FOR SELECT USING (true);
CREATE POLICY "Allow public read recursos" ON public.recursos FOR SELECT USING (true);
CREATE POLICY "Allow public read talleres" ON public.talleres FOR SELECT USING (true);
CREATE POLICY "Allow public read config" ON public.config FOR SELECT USING (true);

-- Allow public insert/update for demo full write support (or restrict with anon key)
CREATE POLICY "Allow public insert blogs" ON public.blogs FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow public insert casos" ON public.casos FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow public insert testimonios" ON public.testimonios FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow public insert landings" ON public.landings FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow public insert tarjetas" ON public.tarjetas FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow public insert citas" ON public.citas FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow public insert usuarios" ON public.usuarios FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow public insert recursos" ON public.recursos FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow public insert talleres" ON public.talleres FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow public insert config" ON public.config FOR ALL USING (true) WITH CHECK (true);

-- ====================================================================
-- SEED INITIAL DATA
-- ====================================================================

-- Insert Executive Cards
INSERT INTO public.tarjetas (
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
) ON CONFLICT (id) DO UPDATE SET
  first_name = EXCLUDED.first_name,
  last_name = EXCLUDED.last_name,
  title = EXCLUDED.title,
  company = EXCLUDED.company,
  bio = EXCLUDED.bio,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  website_url = EXCLUDED.website_url,
  whatsapp_url = EXCLUDED.whatsapp_url,
  photo_url = EXCLUDED.photo_url,
  semblanza_p1 = EXCLUDED.semblanza_p1,
  semblanza_p2 = EXCLUDED.semblanza_p2,
  cita_texto = EXCLUDED.cita_texto;

INSERT INTO public.tarjetas (
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
) ON CONFLICT (id) DO UPDATE SET
  first_name = EXCLUDED.first_name,
  last_name = EXCLUDED.last_name,
  title = EXCLUDED.title,
  company = EXCLUDED.company,
  bio = EXCLUDED.bio,
  phone = EXCLUDED.phone,
  email = EXCLUDED.email,
  website = EXCLUDED.website,
  website_url = EXCLUDED.website_url,
  whatsapp_url = EXCLUDED.whatsapp_url,
  photo_url = EXCLUDED.photo_url,
  semblanza_p1 = EXCLUDED.semblanza_p1,
  semblanza_p2 = EXCLUDED.semblanza_p2,
  cita_texto = EXCLUDED.cita_texto;

-- Insert Seed Citas CRM
INSERT INTO public.citas (
  id, nombre, email, telefono, empresa, host_nombre, fecha, hora, mensaje, notas, proxima_reunion, status
) VALUES 
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
) ON CONFLICT (id) DO NOTHING;

-- Insert RBAC Users
INSERT INTO public.usuarios (
  id, username, password, name, email, role, permissions
) VALUES 
(
  'usr_superadmin',
  'admin',
  'admin',
  'Gadiel Palma',
  'gadiel@treboldigital.com',
  'super_admin',
  '["manage_users","edit_landings","edit_blogs","edit_casos","edit_tarjetas","manage_crm","manage_popups"]'::jsonb
),
(
  'usr_editor',
  'editor',
  'editor123',
  'Sandra Cuevas',
  'sandra@treboldigital.com',
  'editor_contenido',
  '["edit_landings","edit_blogs","edit_casos"]'::jsonb
),
(
  'usr_ventas',
  'ventas',
  'ventas123',
  'Agente de Ventas CRM',
  'ventas@treboldigital.com',
  'agente_crm',
  '["manage_crm","edit_tarjetas"]'::jsonb
) ON CONFLICT (username) DO NOTHING;
