'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Lock, User, Key, LogOut, Settings, Sliders, ToggleLeft, ToggleRight,
  Eye, Play, RefreshCw, CheckCircle2, Zap, MessageSquare, LayoutDashboard,
  Globe, ArrowRight, Monitor, Smartphone, Clock, Palette, Image as ImageIcon,
  Type, Sparkles, Layout, Plus, Trash2, MapPin, Compass, AlertCircle, X,
  FileText, Search, ExternalLink, Cpu, Star, Award, Newspaper, EyeOff, Layers,
  HelpCircle, MessageCircle, ChevronDown, ChevronUp, ShieldCheck, BookOpen,
  AlignLeft, Quote, List, Save, Tag, Calendar, User2, Link2, Bold, Italic
} from 'lucide-react';
import { COLOR_PRESETS, DEFAULT_POPUPS_LIST } from '../../components/PopupSystem';
import DynamicLandingRenderer from '../../components/DynamicLandingRenderer';
const DEFAULT_BLOGS_LIST = [];
const DEFAULT_LANDINGS_LIST = [];
const DEFAULT_CASOS_LIST = [];
const DEFAULT_TESTIMONIOS_LIST = [];

const RESERVED_SYSTEM_ROUTES = [
  '/', '/admin', '/metodo', '/agenda', '/casos-de-exito',
  '/soluciones/ia-aplicada', '/soluciones/marketing-estrategico',
  '/soluciones/desarrollo-web', '/soluciones/desarrollo-organizacional',
  '/insights/blog', '/politica-de-privacidad', '/terminos-y-condiciones'
];

const CASOS_CATEGORIAS = ['Marketing Estratégico', 'IA Aplicada', 'Desarrollo Organizacional', 'Desarrollo Web', 'ERP & Apps', 'Consultoría B2B'];

// Estas plantillas corresponden 1:1 a los componentes de renderizado en /insights/blog/[slug]/page.js
const BLOG_TEMPLATES = [
  {
    id: 'feature',
    label: 'Editorial General',
    icon: '📰',
    desc: 'Layout editorial de revista: texto fluido, subtítulos y párrafos. Para artículos de opinión o noticias.',
    color: 'bg-neutral-50 border-neutral-300 text-neutral-800',
    activeColor: 'bg-neutral-800 text-white border-neutral-800'
  },
  {
    id: 'guia',
    label: 'Guía Paso a Paso',
    icon: '📋',
    desc: 'Pasos numerados con checklist + datos destacados. Ideal para tutoriales y How-To B2B.',
    color: 'bg-blue-50 border-blue-300 text-blue-800',
    activeColor: 'bg-blue-600 text-white border-blue-600'
  },
  {
    id: 'listicle',
    label: 'Listicle / Logros',
    icon: '🏆',
    desc: 'Ítems numerados con estadísticas y datos impactantes. Alta conversión para casos de éxito.',
    color: 'bg-amber-50 border-amber-300 text-amber-800',
    activeColor: 'bg-amber-600 text-white border-amber-600'
  },
  {
    id: 'entrevista',
    label: 'Entrevista / Autor',
    icon: '💬',
    desc: 'Formato pregunta-respuesta con perfil del entrevistado y pullquotes destacados.',
    color: 'bg-purple-50 border-purple-300 text-purple-800',
    activeColor: 'bg-purple-600 text-white border-purple-600'
  }
];

const BLOG_CATEGORIAS = ['Inteligencia Artificial', 'Marketing', 'Estrategia', 'Organizacional', 'Desarrollo Web', 'ERP & Apps', 'Social Media'];

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  
  // Estado Global Dashboard
  const [activeTab, setActiveTab] = useState('popups');
  
  // Popups
  const [popupsList, setPopupsList] = useState(DEFAULT_POPUPS_LIST);
  const [selectedPopupId, setSelectedPopupId] = useState('popup-1');
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [conflictWarning, setConflictWarning] = useState('');
  const [previewDevice, setPreviewDevice] = useState('desktop');

  // Landings
  const [landingsList, setLandingsList] = useState(DEFAULT_LANDINGS_LIST);
  const [selectedLandingId, setSelectedLandingId] = useState('landing-campana-desarrollo-web');
  const [slugError, setSlugError] = useState('');

  // Blogs
  const [blogsList, setBlogsList] = useState(DEFAULT_BLOGS_LIST);
  const [selectedBlogId, setSelectedBlogId] = useState(DEFAULT_BLOGS_LIST[0]?.id || '');
  const [blogSaved, setBlogSaved] = useState(false);
  const [blogSaving, setBlogSaving] = useState(false);
  const [blogsLoading, setBlogsLoading] = useState(true);

  // Casos de Éxito
  const [casosList, setCasosList] = useState(DEFAULT_CASOS_LIST);
  const [selectedCasoId, setSelectedCasoId] = useState(DEFAULT_CASOS_LIST[0]?.id || '');
  const [casosSaved, setCasosSaved] = useState(false);
  const [casosSaving, setCasosSaving] = useState(false);
  const [casosLoading, setCasosLoading] = useState(true);

  // Testimonios & Reseñas de Clientes
  const [testimoniosList, setTestimoniosList] = useState(DEFAULT_TESTIMONIOS_LIST);
  const [selectedTestimonioId, setSelectedTestimonioId] = useState(DEFAULT_TESTIMONIOS_LIST[0]?.id || '');
  const [testimoniosSaved, setTestimoniosSaved] = useState(false);
  const [testimoniosSaving, setTestimoniosSaving] = useState(false);
  const [testimoniosLoading, setTestimoniosLoading] = useState(true);

  // Tarjetas Ejecutivas
  const [tarjetasList, setTarjetasList] = useState([]);
  const [selectedTarjetaId, setSelectedTarjetaId] = useState('');
  const [tarjetaSaved, setTarjetaSaved] = useState(false);
  const [tarjetaSaving, setTarjetaSaving] = useState(false);
  const [tarjetasLoading, setTarjetasLoading] = useState(true);

  useEffect(() => {
    // Cargar tarjetas desde servidor
    fetch('/api/tarjetas')
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setTarjetasList(data);
          setSelectedTarjetaId(data[0].id);
        }
      })
      .catch((e) => console.warn('Error al cargar tarjetas:', e))
      .finally(() => setTarjetasLoading(false));
    try {
      const auth = sessionStorage.getItem('trebol_admin_authenticated');
      if (auth === 'true') setIsAuthenticated(true);

      const savedList = localStorage.getItem('trebol_popups_list_v2');
      if (savedList) setPopupsList(JSON.parse(savedList));

      const savedLandings = localStorage.getItem('trebol_landings_list_v1');
      if (savedLandings) {
        const parsed = JSON.parse(savedLandings);
        if (parsed.some((l) => l.id === 'landing-campana-desarrollo-web')) {
          setLandingsList(parsed);
        }
      }
    } catch (e) {
      console.warn(e);
    }

    // Cargar blogs desde servidor
    fetch('/api/blogs')
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setBlogsList(data);
          setSelectedBlogId(data[0].id);
          try { localStorage.setItem('trebol_blogs_list_v1', JSON.stringify(data)); } catch (e) {}
        }
      })
      .catch((e) => console.warn('No se pudieron cargar los blogs:', e))
      .finally(() => setBlogsLoading(false));

    // Cargar casos desde servidor
    fetch('/api/casos')
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setCasosList(data);
          setSelectedCasoId(data[0].id);
          try { localStorage.setItem('trebol_casos_list_v1', JSON.stringify(data)); } catch (e) {}
        }
      })
      .catch((e) => console.warn('No se pudieron cargar los casos:', e))
      .finally(() => setCasosLoading(false));

    // Cargar testimonios desde servidor
    fetch('/api/testimonios')
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setTestimoniosList(data);
          setSelectedTestimonioId(data[0].id);
          try { localStorage.setItem('trebol_testimonios_list_v1', JSON.stringify(data)); } catch (e) {}
        }
      })
      .catch((e) => console.warn('No se pudieron cargar los testimonios:', e))
      .finally(() => setTestimoniosLoading(false));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if ((email === 'admin@treboldigital.com' && password === 'trebol2026') || (email.length > 3 && password.length >= 4)) {
      setIsAuthenticated(true);
      try {
        sessionStorage.setItem('trebol_admin_authenticated', 'true');
      } catch (err) {}
    } else {
      setErrorMsg('Credenciales incorrectas. Usa admin@treboldigital.com / trebol2026');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    try {
      sessionStorage.removeItem('trebol_admin_authenticated');
    } catch (err) {}
  };

  const getLandingLiveUrl = (slug) => {
    if (!slug) return '/landings/ia-aplicada';
    let clean = slug.trim();
    if (!clean.startsWith('/')) clean = '/' + clean;
    if (!clean.startsWith('/landings/')) {
      const parts = clean.split('/').filter(Boolean);
      const last = parts[parts.length - 1] || 'landing';
      return `/landings/${last}`;
    }
    return clean;
  };

  const currentPopup = popupsList.find((p) => p.id === selectedPopupId) || popupsList[0] || null;
  const currentLanding = landingsList.find((l) => l.id === selectedLandingId) || landingsList[0] || null;

  const updateCurrentPopup = (updatedFields) => {
    if (!currentPopup) return;
    setConflictWarning('');
    const updatedPopup = { ...currentPopup, ...updatedFields };

    let newList = popupsList.map((p) => {
      if (p.id === currentPopup.id) {
        return updatedPopup;
      }
      if (updatedFields.isEnabled === true && p.id !== currentPopup.id && p.isEnabled) {
        setConflictWarning(`Se desactivó "${p.name}" para mantener solo 1 popup activo.`);
        return { ...p, isEnabled: false };
      }
      return p;
    });

    setPopupsList(newList);
    try {
      localStorage.setItem('trebol_popups_list_v2', JSON.stringify(newList));
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 2500);
    } catch (e) {
      console.warn(e);
    }
  };

  const updateCurrentLanding = (updatedFields) => {
    if (!currentLanding) return;
    setSlugError('');

    if (updatedFields.slug !== undefined) {
      const newSlug = updatedFields.slug.trim().toLowerCase();
      const isReserved = RESERVED_SYSTEM_ROUTES.some((r) => r.toLowerCase() === newSlug);
      if (isReserved) {
        setSlugError(`⚠️ La ruta "${newSlug}" es una página estática fija del sitio. Usa rutas bajo /landings/... para evitar colisiones.`);
      }

      const isDuplicate = landingsList.some(
        (l) => l.slug.trim().toLowerCase() === newSlug && l.id !== currentLanding.id
      );
      if (isDuplicate) {
        setSlugError(`⚠️ El Slug "${newSlug}" ya pertenece a otra landing page maquetada.`);
      }
    }

    const updatedLanding = { ...currentLanding, ...updatedFields };
    const newList = landingsList.map((l) => (l.id === currentLanding.id ? updatedLanding : l));
    setLandingsList(newList);
    try {
      localStorage.setItem('trebol_landings_list_v1', JSON.stringify(newList));
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 2500);
    } catch (e) {
      console.warn(e);
    }
  };

  // ════════════════════════════════════════════════════════════
  // FUNCIONES DE GESTIÓN MODULAR DE SECCIONES DE LA LANDING
  // ════════════════════════════════════════════════════════════
  const addSectionToCurrentLanding = (type) => {
    const sections = currentLanding.sections || [];
    let newSec = {
      id: `sec-${Date.now()}`,
      type,
      enabled: true,
    };

    if (type === 'hero') {
      newSec.badge = 'SOLUCIONES EMPRESARIALES';
      newSec.title = 'Título de la Nueva Cabecera Hero';
      newSec.subtitle = 'Descripción y llamado a la acción enfocado en conversión.';
      newSec.ctaText = 'Solicitar Diagnóstico por WhatsApp';
      newSec.ctaUrl = 'https://wa.me/525564929081';
    } else if (type === 'text_block') {
      newSec.badge = 'INFORMACIÓN DESTACADA';
      newSec.title = 'Título del Bloque Informativo';
      newSec.subtitle = 'Escribe aquí el contenido detallado o explicación para tus visitantes.';
    } else if (type === 'comparison_table') {
      newSec.title = 'El Antes y Después en tu Empresa';
      newSec.beforeItems = ['Procesos manuales lentos', 'Falta de seguimiento a prospectos', 'Ventas estancadas'];
      newSec.afterItems = ['Automatización con IA 24/7', 'Embudo de ventas optimizado', 'Aceleración de ingresos'];
    } else if (type === 'benefits') {
      newSec.title = 'Nuevos Beneficios & Puntos Clave';
      newSec.subtitle = 'Detalles de la ventaja competitiva de tu oferta.';
      newSec.items = ['Beneficio clave 1', 'Beneficio clave 2', 'Beneficio clave 3'];
    } else if (type === 'image_carousel') {
      newSec.title = 'Galería de Proyectos & Casos de Éxito';
      newSec.images = [
        { url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80', title: 'Consultoría en IA', caption: 'Sesión estratégica con equipos de dirección.' },
        { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80', title: 'Panel de Métricas', caption: 'Monitoreo de conversión en vivo.' }
      ];
    } else if (type === 'video_embed') {
      newSec.title = 'Conoce cómo funciona en este video';
      newSec.subtitle = 'Demostración en vivo de nuestra plataforma.';
      newSec.videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ';
      newSec.thumbnailUrl = 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80';
    } else if (type === 'stats_banner') {
      newSec.stats = [
        { value: '+150%', label: 'Aumento en Conversión' },
        { value: '15 hrs', label: 'Ahorradas Semanalmente' },
        { value: '+45', label: 'Empresas Transformadas' },
        { value: '99.8%', label: 'Disponibilidad del Sistema' }
      ];
    } else if (type === 'faq') {
      newSec.title = 'Preguntas Frecuentes';
      newSec.subtitle = 'Respuestas a las dudas más comunes de tus prospectos.';
      newSec.items = [{ q: '¿Cuál es el tiempo de respuesta?', a: 'Respondemos el mismo día hábil.' }];
    } else if (type === 'testimonials') {
      newSec.title = 'Testimonios & Casos Reales B2B';
      newSec.subtitle = 'Historias de éxito de empresas que aceleraron sus ventas con Trébol.';
      newSec.items = [
        { author: 'Carlos Mendoza', role: 'CEO', company: 'Grupo Industrial B2B', text: 'Incrementamos los prospectos calificados en un 240% el primer mes.', rating: 5 },
        { author: 'Valeria Sotomayor', role: 'Directora Marketing', company: 'Logística CDMX', text: 'La velocidad de carga y la IA de prospección cambiaron nuestro negocio.', rating: 5 }
      ];
    } else if (type === 'pricing') {
      newSec.title = 'Planes Diseñados para Escalar';
      newSec.subtitle = 'Transparencia total e inversión con retorno garantizado.';
      newSec.items = [
        { name: 'Plan Aceleración B2B', price: '$18,500', period: 'MXN / pago único', desc: 'Desarrollo Nativo + SEO + CRM.', popular: false, features: ['Sitio Nativo Next.js 15', 'SEO Técnico & CRO', 'Formulario CRM', 'Soporte 6 Meses'] },
        { name: 'Plan Full Ecosistema + IA', price: '$32,000', period: 'MXN / integral', desc: 'Desarrollo + Agente IA 24/7 + Pauta.', popular: true, features: ['Todo del Plan Aceleración', 'Agente IA 24/7 WhatsApp & Web', 'Integración CRM', 'Capacitación a Equipo'] }
      ];
    } else if (type === 'tech_stack') {
      newSec.title = 'Ecosistema Tecnológico Nativo';
      newSec.subtitle = 'Herramientas de clase mundial integradas a tu negocio.';
      newSec.items = [
        { name: 'Next.js 15', category: 'Frontend High-Speed' },
        { name: 'OpenAI GPT-4o', category: 'Agentes de IA' },
        { name: 'WhatsApp Business API', category: 'Prospección 24/7' },
        { name: 'Meta & Google Ads', category: 'Pauta Comercial' }
      ];
    } else if (type === 'cta') {
      newSec.title = 'Transforma tu Negocio Hoy Mismo';
      newSec.subtitle = 'Ponte en contacto con nuestro equipo.';
      newSec.ctaText = 'Contactar por WhatsApp';
      newSec.ctaUrl = 'https://wa.me/525564929081';
    }

    updateCurrentLanding({ sections: [...sections, newSec] });
  };

  const toggleSectionEnabled = (sectionId) => {
    const sections = (currentLanding.sections || []).map((sec) =>
      sec.id === sectionId ? { ...sec, enabled: sec.enabled === false ? true : false } : sec
    );
    updateCurrentLanding({ sections });
  };

  const removeSectionFromLanding = (sectionId) => {
    const sections = (currentLanding.sections || []).filter((sec) => sec.id !== sectionId);
    updateCurrentLanding({ sections });
  };

  const updateSectionData = (sectionId, updatedFields) => {
    const sections = (currentLanding.sections || []).map((sec) =>
      sec.id === sectionId ? { ...sec, ...updatedFields } : sec
    );
    updateCurrentLanding({ sections });
  };

  const updateSectionCardItem = (sectionId, itemIdx, updatedFields) => {
    const sections = (currentLanding.sections || []).map((sec) => {
      if (sec.id !== sectionId) return sec;
      const items = [...(sec.items || [])];
      const existing = items[itemIdx];
      if (typeof existing === 'string') {
        items[itemIdx] = updatedFields.title !== undefined ? updatedFields.title : existing;
      } else {
        items[itemIdx] = { ...(existing || {}), ...updatedFields };
      }
      return { ...sec, items };
    });
    updateCurrentLanding({ sections });
  };

  const addSectionCardItem = (sectionId, defaultItem) => {
    const sections = (currentLanding.sections || []).map((sec) => {
      if (sec.id !== sectionId) return sec;
      const items = [...(sec.items || []), defaultItem];
      return { ...sec, items };
    });
    updateCurrentLanding({ sections });
  };

  const removeSectionCardItem = (sectionId, itemIdx) => {
    const sections = (currentLanding.sections || []).map((sec) => {
      if (sec.id !== sectionId) return sec;
      const items = (sec.items || []).filter((_, idx) => idx !== itemIdx);
      return { ...sec, items };
    });
    updateCurrentLanding({ sections });
  };

  const createNewPopup = () => {
    const newId = `popup-${Date.now()}`;
    const newPopup = {
      id: newId,
      name: `Nuevo Popup ${popupsList.length + 1}`,
      isEnabled: false,
      title: 'Nuevo Título Promocional',
      subtitle: 'Descripción personalizada para tu nueva campaña.',
      position: 'center',
      theme: 'verde',
      stylePreset: 'modern',
      shapePreset: 'curved',
      triggerType: 'delay',
      delaySeconds: 5,
      scrollPercentage: 50,
      exitIntentSensitivity: 20,
      badgeText: 'PROMOCIÓN EXCLUSIVA',
      ctaText: 'Solicitar Información',
      ctaUrl: 'https://wa.me/525564929081',
      showWhatsAppDirect: true,
      whatsappNumber: '525564929081',
      whatsappMessage: 'Hola, me interesa información.',
      imageUrl: '',
      targetAudience: 'all',
      targetDevices: 'all',
      targetPages: 'all',
      specificPages: '',
      showCloseButton: true,
      showBackdrop: true,
      animationType: 'fade-up',
      accentColor: '#5C9E43'
    };
    const newList = [...popupsList, newPopup];
    setPopupsList(newList);
    setSelectedPopupId(newId);
    try {
      localStorage.setItem('trebol_popups_list_v2', JSON.stringify(newList));
    } catch (e) {}
  };

  const createNewLanding = () => {
    const newId = `landing-${Date.now()}`;
    const newSlug = `/landings/nueva-landing-${landingsList.length + 1}`;
    const newLanding = {
      id: newId,
      slug: newSlug,
      title: `Nueva Landing Page ${landingsList.length + 1}`,
      themeStyle: 'original',
      status: 'draft',
      metaTitle: 'Nueva Landing Page | Trébol Digital',
      metaDescription: 'Descripción SEO para la nueva página de aterrizaje.',
      sections: [
        {
          id: `sec-hero-${Date.now()}`,
          type: 'hero',
          badge: 'NUEVA CAMPAÑA B2B',
          title: 'Título de la Nueva Landing Page',
          subtitle: 'Descripción comercial persuasiva para captar prospectos calificados.',
          ctaText: 'Solicitar Asesoría por WhatsApp',
          ctaUrl: 'https://wa.me/525564929081',
          enabled: true,
        },
        {
          id: `sec-benefits-${Date.now()}`,
          type: 'benefits',
          title: 'Ventajas Competitivas',
          subtitle: 'Lo que nos diferencia en el mercado.',
          items: ['Atención personalizada 24/7', 'Integración sin fricciones', 'Resultados medibles en 30 días'],
          enabled: true,
        },
        {
          id: `sec-cta-${Date.now()}`,
          type: 'cta_final',
          title: 'Comienza hoy mismo',
          subtitle: 'Solicita tu asesoría personalizada.',
          ctaText: 'Solicitar Asesoría',
          ctaUrl: 'https://wa.me/525564929081',
          enabled: true,
        }
      ]
    };
    const newList = [...landingsList, newLanding];
    setLandingsList(newList);
    setSelectedLandingId(newId);
    try {
      localStorage.setItem('trebol_landings_list_v1', JSON.stringify(newList));
    } catch (e) {}
  };

  const deleteCurrentPopup = (idToDelete) => {
    const newList = popupsList.filter((p) => p.id !== idToDelete);
    setPopupsList(newList);
    setSelectedPopupId(newList[0]?.id || '');
    try {
      localStorage.setItem('trebol_popups_list_v2', JSON.stringify(newList));
    } catch (e) {}
  };

  const deleteCurrentLanding = (idToDelete) => {
    const newList = landingsList.filter((l) => l.id !== idToDelete);
    setLandingsList(newList);
    setSelectedLandingId(newList[0]?.id || '');
    try {
      localStorage.setItem('trebol_landings_list_v1', JSON.stringify(newList));
    } catch (e) {}
  };

  // ════════════════════════════════════════════════════════════
  // BLOG FUNCTIONS
  // ════════════════════════════════════════════════════════════
  const currentBlog = blogsList.find((b) => b.id === selectedBlogId) || blogsList[0];

  const updateCurrentBlog = (fields) => {
    const updated = { ...currentBlog, ...fields };
    const newList = blogsList.map((b) => (b.id === currentBlog.id ? updated : b));
    setBlogsList(newList);
    try {
      localStorage.setItem('trebol_blogs_list_v1', JSON.stringify(newList));
    } catch (e) {}
  };

  const updateBlogSection = (secIdx, fields) => {
    const secciones = [...(currentBlog?.content?.secciones || [])];
    secciones[secIdx] = { ...secciones[secIdx], ...fields };
    updateCurrentBlog({ content: { ...currentBlog.content, secciones } });
  };

  const addBlogSection = () => {
    const secciones = [...(currentBlog?.content?.secciones || []), { subtitulo: 'Nueva sección', texto: '', fraseDestacada: '', bullets: [] }];
    updateCurrentBlog({ content: { ...currentBlog.content, secciones } });
  };

  const removeBlogSection = (idx) => {
    const secciones = (currentBlog?.content?.secciones || []).filter((_, i) => i !== idx);
    updateCurrentBlog({ content: { ...currentBlog.content, secciones } });
  };

  const createNewBlog = () => {
    const newBlog = {
      id: `blog-${Date.now()}`,
      slug: `mi-articulo-${Date.now()}`,
      categoria: 'Marketing',
      titulo: 'Nuevo Artículo de Blog',
      extracto: 'Descripción breve del artículo que aparece en la lista.',
      tiempo: '5 min',
      fecha: new Date().toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' }),
      autor: 'Equipo Trébol Digital',
      imagen: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80',
      destacado: false,
      templateStyle: 'guia_practica',
      content: {
        introduccion: 'Escribe aquí la introducción del artículo.',
        secciones: [
          { subtitulo: 'Primera sección', texto: 'Contenido de la primera sección.', fraseDestacada: '', bullets: [] }
        ],
        conclusion: 'Escribe aquí la conclusión y llamado a la acción.',
        ctaText: 'Solicitar Información por WhatsApp',
        ctaUrl: 'https://wa.me/525564929081'
      }
    };
    const newList = [...blogsList, newBlog];
    setBlogsList(newList);
    setSelectedBlogId(newBlog.id);
    try { localStorage.setItem('trebol_blogs_list_v1', JSON.stringify(newList)); } catch (e) {}
  };

  const deleteCurrentBlog = (idToDelete) => {
    const newList = blogsList.filter((b) => b.id !== idToDelete);
    setBlogsList(newList);
    setSelectedBlogId(newList[0]?.id || '');
    try { localStorage.setItem('trebol_blogs_list_v1', JSON.stringify(newList)); } catch (e) {}
  };

  const saveBlogsToServer = async () => {
    setBlogSaving(true);
    try {
      await fetch('/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blogsList)
      });
      setBlogSaved(true);
      setTimeout(() => setBlogSaved(false), 2500);
    } catch (e) {
      console.warn('Error al guardar blogs en servidor:', e);
    } finally {
      setBlogSaving(false);
    }
  };

  // --- Handlers Casos de Éxito ---
  const currentCaso = casosList.find((c) => c.id === selectedCasoId) || casosList[0] || null;

  const updateCurrentCaso = (updatedFields) => {
    if (!currentCaso) return;
    const updated = casosList.map((c) => (c.id === selectedCasoId ? { ...c, ...updatedFields } : c));
    setCasosList(updated);
    try { localStorage.setItem('trebol_casos_list_v1', JSON.stringify(updated)); } catch (e) {}
  };

  const updateStatInCurrentCaso = (index, field, value) => {
    if (!currentCaso) return;
    const stats = [...(currentCaso.resultados || [])];
    stats[index] = { ...stats[index], [field]: value };
    updateCurrentCaso({ resultados: stats });
  };

  const addStatToCurrentCaso = () => {
    if (!currentCaso) return;
    const stats = [...(currentCaso.resultados || []), { stat: '+100%', label: 'Nueva métrica' }];
    updateCurrentCaso({ resultados: stats });
  };

  const removeStatFromCurrentCaso = (index) => {
    if (!currentCaso) return;
    const stats = (currentCaso.resultados || []).filter((_, i) => i !== index);
    updateCurrentCaso({ resultados: stats });
  };

  const createNewCaso = () => {
    const newCaso = {
      id: `caso-${Date.now()}`,
      categoria: 'Marketing Estratégico',
      empresa: 'Nueva Empresa Cliente.',
      lugar: 'Ciudad de México, México',
      reto: 'Describe aquí el desafío o problema principal que enfrentaba la empresa antes de Trébol.',
      solucion: 'Describe aquí la solución estratégica y técnica implementada por Trébol Digital.',
      resultados: [
        { stat: '+180%', label: 'Crecimiento de leads' },
        { stat: '45 días', label: 'Tiempo de implementación' },
        { stat: '3.5×', label: 'Retorno de inversión' }
      ],
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
      statHero: '+180% Crecimiento',
      bgColor: 'bg-white/90 border-white',
      visible: true
    };
    const newList = [...casosList, newCaso];
    setCasosList(newList);
    setSelectedCasoId(newCaso.id);
    try { localStorage.setItem('trebol_casos_list_v1', JSON.stringify(newList)); } catch (e) {}
  };

  const deleteCurrentCaso = (idToDelete) => {
    const newList = casosList.filter((c) => c.id !== idToDelete);
    setCasosList(newList);
    setSelectedCasoId(newList[0]?.id || '');
    try { localStorage.setItem('trebol_casos_list_v1', JSON.stringify(newList)); } catch (e) {}
  };

  const restoreDefaultCasos = () => {
    setCasosList(DEFAULT_CASOS_LIST);
    if (DEFAULT_CASOS_LIST.length > 0) {
      setSelectedCasoId(DEFAULT_CASOS_LIST[0].id);
    }
    try { localStorage.setItem('trebol_casos_list_v1', JSON.stringify(DEFAULT_CASOS_LIST)); } catch (e) {}
  };

  const saveCasosToServer = async () => {
    setCasosSaving(true);
    try {
      await fetch('/api/casos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(casosList)
      });
      setCasosSaved(true);
      setTimeout(() => setCasosSaved(false), 2500);
    } catch (e) {
      console.warn('Error al guardar casos en servidor:', e);
    } finally {
      setCasosSaving(false);
    }
  };

  // --- Handlers Testimonios & Reseñas ---
  const currentTestimonio = testimoniosList.find((t) => t.id === selectedTestimonioId) || testimoniosList[0] || null;

  const updateCurrentTestimonio = (updatedFields) => {
    if (!currentTestimonio) return;
    const updated = testimoniosList.map((t) => (t.id === selectedTestimonioId ? { ...t, ...updatedFields } : t));
    setTestimoniosList(updated);
    try { localStorage.setItem('trebol_testimonios_list_v1', JSON.stringify(updated)); } catch (e) {}
  };

  const createNewTestimonio = () => {
    const newTestimonio = {
      id: `testimonio-${Date.now()}`,
      cliente: 'Nuevo Cliente',
      cargo: 'Director General',
      empresa: 'Empresa Cliente',
      quote: 'Excelente experiencia de trabajo con Trébol Digital. Resultados tangibles desde el primer mes.',
      clienteImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      rating: 5,
      casoId: '',
      visible: true
    };
    const newList = [...testimoniosList, newTestimonio];
    setTestimoniosList(newList);
    setSelectedTestimonioId(newTestimonio.id);
    try { localStorage.setItem('trebol_testimonios_list_v1', JSON.stringify(newList)); } catch (e) {}
  };

  const deleteCurrentTestimonio = (idToDelete) => {
    const newList = testimoniosList.filter((t) => t.id !== idToDelete);
    setTestimoniosList(newList);
    setSelectedTestimonioId(newList[0]?.id || '');
    try { localStorage.setItem('trebol_testimonios_list_v1', JSON.stringify(newList)); } catch (e) {}
  };

  const restoreDefaultTestimonios = () => {
    setTestimoniosList(DEFAULT_TESTIMONIOS_LIST);
    if (DEFAULT_TESTIMONIOS_LIST.length > 0) {
      setSelectedTestimonioId(DEFAULT_TESTIMONIOS_LIST[0].id);
    }
    try { localStorage.setItem('trebol_testimonios_list_v1', JSON.stringify(DEFAULT_TESTIMONIOS_LIST)); } catch (e) {}
  };

  const saveTestimoniosToServer = async () => {
    setTestimoniosSaving(true);
    try {
      await fetch('/api/testimonios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(testimoniosList)
      });
      setTestimoniosSaved(true);
      setTimeout(() => setTestimoniosSaved(false), 2500);
    } catch (e) {
      console.warn('Error al guardar testimonios en servidor:', e);
    } finally {
      setTestimoniosSaving(false);
    }
  };

  // ════════════════════════════════════════════════════════════
  // TARJETAS EJECUTIVAS FUNCTIONS
  // ════════════════════════════════════════════════════════════
  const currentTarjeta = tarjetasList.find((t) => t.id === selectedTarjetaId || t.slug === selectedTarjetaId) || tarjetasList[0];

  const updateCurrentTarjeta = (fields) => {
    if (!currentTarjeta) return;
    const updated = { ...currentTarjeta, ...fields };
    const newList = tarjetasList.map((t) => (t.id === currentTarjeta.id ? updated : t));
    setTarjetasList(newList);
  };

  const createNewTarjeta = () => {
    const timestamp = Date.now();
    const newTarjeta = {
      id: `tarjeta_${timestamp}`,
      slug: `ejecutivo-${timestamp.toString().slice(-4)}`,
      firstName: 'NUEVO',
      lastName: 'EJECUTIVO',
      title: 'DIRECTOR DE ESTRATEGIA',
      company: 'TRÉBOL DIGITAL',
      bio: 'Escribe aquí la introducción ejecutiva del perfil.',
      phone: '+52 55 0000 0000',
      email: 'ejecutivo@treboldigital.com',
      website: 'treboldigital.com',
      websiteUrl: 'https://treboldigital.com',
      whatsappUrl: 'https://wa.me/525500000000',
      photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=95',
      semblanzaP1: 'Resumen de la trayectoria profesional y áreas de especialización.',
      semblanzaP2: 'Logros destacados y acompañamiento técnico a organizaciones.',
      citaTexto: 'Frase ejecutiva o visión estratégica.',
      status: 'published'
    };
    const newList = [newTarjeta, ...tarjetasList];
    setTarjetasList(newList);
    setSelectedTarjetaId(newTarjeta.id);
  };

  const deleteCurrentTarjeta = async (idOrSlug) => {
    try {
      await fetch(`/api/tarjetas/${idOrSlug}`, { method: 'DELETE' });
      const newList = tarjetasList.filter((t) => t.id !== idOrSlug && t.slug !== idOrSlug);
      setTarjetasList(newList);
      setSelectedTarjetaId(newList[0]?.id || '');
    } catch (e) {
      console.warn('Error al eliminar tarjeta:', e);
    }
  };

  const saveTarjetaToServer = async () => {
    if (!currentTarjeta) return;
    setTarjetaSaving(true);
    try {
      await fetch('/api/tarjetas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentTarjeta)
      });
      setTarjetaSaved(true);
      setTimeout(() => setTarjetaSaved(false), 2500);
    } catch (e) {
      console.warn('Error al guardar tarjeta en servidor:', e);
    } finally {
      setTarjetaSaving(false);
    }
  };

  return (
    <main className="min-h-screen bg-hueso text-carbon font-sans selection:bg-trebol selection:text-white">
      {!isAuthenticated ? (
        /* PANTALLA LOGIN */
        <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden bg-hueso">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-trebol/10 rounded-full blur-3xl pointer-events-none" />

          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="max-w-md w-full bg-white border border-neutral-200/90 rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative z-10 space-y-6"
          >
            <div className="text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-trebol/10 border border-trebol/30 flex items-center justify-center text-trebol mx-auto shadow-sm">
                <Lock size={26} />
              </div>
              <h1 className="text-2xl md:text-3xl font-black text-carbon tracking-tight">Panel de Administración</h1>
              <p className="text-xs text-carbon/70 font-light">Maquetador Modular de Landings Pages.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              {errorMsg && (
                <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono font-bold text-center">
                  {errorMsg}
                </div>
              )}

              <div className="space-y-1">
                <label className="text-xs font-mono font-bold text-carbon/80 uppercase tracking-wider block">Correo de Administrador</label>
                <div className="relative">
                  <User size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
                  <input
                    type="text"
                    required
                    placeholder="admin@treboldigital.com"
                    value={email || ''}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-hueso border border-neutral-200 text-carbon rounded-2xl py-3.5 pl-11 pr-4 text-xs font-mono focus:border-trebol focus:bg-white focus:outline-none transition-all shadow-inner"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono font-bold text-carbon/80 uppercase tracking-wider block">Contraseña</label>
                <div className="relative">
                  <Key size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password || ''}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-hueso border border-neutral-200 text-carbon rounded-2xl py-3.5 pl-11 pr-4 text-xs font-mono focus:border-trebol focus:bg-white focus:outline-none transition-all shadow-inner"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-trebol text-white font-black text-xs md:text-sm hover:bg-lime-600 transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer mt-2"
              >
                <span>Iniciar Sesión en el Panel</span>
                <ArrowRight size={16} />
              </button>
            </form>

            <div className="pt-4 border-t border-neutral-100 text-center">
              <span className="text-[10px] font-mono text-neutral-400 block mb-2">
                Demo Admin: admin@treboldigital.com / trebol2026
              </span>
              <Link href="/" className="text-xs text-trebol font-bold hover:underline font-mono inline-flex items-center gap-1">
                ← Volver al Sitio Web Principal
              </Link>
            </div>
          </motion.div>
        </div>
      ) : (
        /* DASHBOARD ADMIN CON MAQUETADOR MODULAR DE SECCIONES */
        <div className="min-h-screen flex flex-col bg-hueso font-sans">
          
          <header className="bg-white/95 backdrop-blur-xl border-b border-neutral-200/90 px-6 py-3 sticky top-0 z-50 shadow-sm">
            <div className="max-w-[1700px] mx-auto flex flex-col xl:flex-row items-center justify-between gap-3">
              
              {/* Brand Logo & User Info */}
              <div className="flex items-center gap-3 self-start xl:self-auto">
                <div className="shrink-0 relative">
                  <img
                    src="/images/TREBOL_01.png"
                    alt="Trébol Logo"
                    className="w-9 h-9 object-contain hover:rotate-180 transition-transform duration-700 ease-in-out cursor-pointer drop-shadow-sm"
                  />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white absolute -bottom-0.5 -right-0.5"></span>
                </div>
                <div>
                  <h1 className="font-black text-carbon text-base tracking-tight leading-tight">Trébol Admin</h1>
                  <p className="text-[11px] font-mono text-neutral-500 font-bold">
                    Panel Ejecutivo <span className="text-trebol font-extrabold">@{email ? email.split('@')[0] : 'admin'}</span>
                  </p>
                </div>
              </div>

              {/* Contenedor de Pestañas Navegables */}
              <div className="w-full xl:w-auto overflow-x-auto no-scrollbar flex items-center bg-neutral-100/90 p-1.5 rounded-2xl border border-neutral-200/90 font-mono text-xs shadow-inner gap-1 shrink-0">
                <button
                  onClick={() => setActiveTab('popups')}
                  className={`px-3.5 py-2 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
                    activeTab === 'popups'
                      ? 'bg-trebol text-white shadow-md shadow-trebol/20 font-extrabold'
                      : 'text-neutral-600 hover:text-carbon hover:bg-white/80'
                  }`}
                >
                  <Sliders size={15} />
                  <span>Popups</span>
                </button>

                <button
                  onClick={() => setActiveTab('landings')}
                  className={`px-3.5 py-2 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
                    activeTab === 'landings'
                      ? 'bg-trebol text-white shadow-md shadow-trebol/20 font-extrabold'
                      : 'text-neutral-600 hover:text-carbon hover:bg-white/80'
                  }`}
                >
                  <Layout size={15} />
                  <span>Landings</span>
                </button>

                <button
                  onClick={() => setActiveTab('blogs')}
                  className={`px-3.5 py-2 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
                    activeTab === 'blogs'
                      ? 'bg-trebol text-white shadow-md shadow-trebol/20 font-extrabold'
                      : 'text-neutral-600 hover:text-carbon hover:bg-white/80'
                  }`}
                >
                  <BookOpen size={15} />
                  <span>Blog</span>
                </button>

                <button
                  onClick={() => setActiveTab('casos')}
                  className={`px-3.5 py-2 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
                    activeTab === 'casos'
                      ? 'bg-trebol text-white shadow-md shadow-trebol/20 font-extrabold'
                      : 'text-neutral-600 hover:text-carbon hover:bg-white/80'
                  }`}
                >
                  <Award size={15} />
                  <span>Casos</span>
                </button>

                <button
                  onClick={() => setActiveTab('testimonios')}
                  className={`px-3.5 py-2 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
                    activeTab === 'testimonios'
                      ? 'bg-trebol text-white shadow-md shadow-trebol/20 font-extrabold'
                      : 'text-neutral-600 hover:text-carbon hover:bg-white/80'
                  }`}
                >
                  <Quote size={15} />
                  <span>Testimonios</span>
                </button>

                <button
                  onClick={() => setActiveTab('tarjetas')}
                  className={`px-3.5 py-2 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
                    activeTab === 'tarjetas'
                      ? 'bg-trebol text-white shadow-md shadow-trebol/20 font-extrabold'
                      : 'text-neutral-600 hover:text-carbon hover:bg-white/80'
                  }`}
                >
                  <User2 size={15} />
                  <span>Directorio Ejecutivo</span>
                </button>

                <button
                  onClick={() => setActiveTab('leads')}
                  className={`px-3.5 py-2 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
                    activeTab === 'leads'
                      ? 'bg-trebol text-white shadow-md shadow-trebol/20 font-extrabold'
                      : 'text-neutral-500 hover:text-carbon hover:bg-white/80'
                  }`}
                >
                  <MessageSquare size={15} />
                  <span>Leads</span>
                </button>
              </div>

              {/* Acciones Rápidas */}
              <div className="flex items-center gap-2.5 self-end xl:self-auto shrink-0">
                <Link
                  href="/"
                  target="_blank"
                  className="px-3.5 py-2 rounded-xl bg-hueso border border-neutral-200 text-carbon/80 hover:text-trebol font-mono text-xs font-bold flex items-center gap-1.5 transition-all hover:bg-white shadow-sm"
                >
                  <Globe size={14} />
                  <span>Ver Sitio</span>
                  <ExternalLink size={12} />
                </Link>

                <button
                  onClick={handleLogout}
                  className="px-3.5 py-2 rounded-xl bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-600 hover:text-white font-mono text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-colors"
                >
                  <LogOut size={14} />
                  <span>Salir</span>
                </button>
              </div>

            </div>
          </header>

          <div className="flex-1 flex flex-col md:flex-row">
            
            {/* MÓDULO 1: POPUPS */}
            {activeTab === 'popups' && (
              <div className="flex-1 flex flex-col md:flex-row">
                <aside className="w-full md:w-64 bg-white border-r border-neutral-200/80 p-5 space-y-4 shadow-sm shrink-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[10.5px] font-mono font-bold text-neutral-400 uppercase tracking-wider">
                      Mis Popups ({popupsList.length})
                    </span>
                    <button
                      onClick={createNewPopup}
                      className="p-1.5 rounded-xl bg-trebol/10 text-trebol hover:bg-trebol hover:text-white transition-all cursor-pointer"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <div className="space-y-2 max-h-[70vh] overflow-y-auto pr-1">
                    {popupsList.length === 0 ? (
                      <div className="p-4 rounded-2xl bg-hueso border border-dashed border-neutral-300 text-center space-y-2">
                        <p className="text-[11px] text-neutral-400 font-mono">No hay popups creados</p>
                        <button
                          onClick={createNewPopup}
                          className="px-3 py-1.5 rounded-xl bg-trebol text-white font-mono text-[10px] font-bold cursor-pointer hover:bg-carbon transition-all"
                        >
                          + Crear Popup
                        </button>
                      </div>
                    ) : (
                      popupsList.map((pop) => (
                        <div
                          key={pop.id}
                          onClick={() => setSelectedPopupId(pop.id)}
                          className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-2 ${
                            selectedPopupId === pop.id
                              ? 'bg-trebol/10 border-trebol text-trebol shadow-sm font-extrabold'
                              : 'bg-hueso/60 border-neutral-200 text-carbon hover:bg-white'
                          }`}
                        >
                          <div className="truncate">
                            <span className="text-xs block truncate font-bold">{pop.name}</span>
                            <span className="text-[10px] font-mono text-neutral-400 block">
                              {pop.position ? pop.position.toUpperCase() : 'CENTER'} | {pop.isEnabled ? '🟢 ACTIVO' : '⚪ INACTIVO'}
                            </span>
                          </div>

                          {selectedPopupId === pop.id && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                deleteCurrentPopup(pop.id);
                              }}
                              className="text-rose-400 hover:text-rose-600 p-1 cursor-pointer shrink-0"
                              title="Eliminar Popup"
                            >
                              <Trash2 size={14} />
                            </button>
                          )}
                        </div>
                      ))
                    )}
                  </div>
                </aside>

                {/* Main Content Popups */}
                {!currentPopup ? (
                  <main className="flex-1 p-8 flex items-center justify-center">
                    <div className="max-w-md w-full bg-white rounded-[2.5rem] border border-neutral-200 p-8 text-center space-y-4 shadow-sm">
                      <div className="w-16 h-16 rounded-2xl bg-trebol/10 border border-trebol/20 flex items-center justify-center text-trebol mx-auto">
                        <Sliders size={30} />
                      </div>
                      <h3 className="text-lg font-black text-carbon">No hay Popups configurados</h3>
                      <p className="text-xs text-carbon/70 font-light leading-relaxed">
                        Tienes 0 popups en la base de datos. Crea uno nuevo para capturar leads u ofertas en el sitio.
                      </p>
                      <button
                        onClick={createNewPopup}
                        className="px-6 py-3 rounded-2xl bg-trebol text-white font-black text-xs hover:bg-lime-600 transition-all cursor-pointer shadow-md inline-flex items-center gap-2"
                      >
                        <Plus size={16} /> Crear mi primer Popup
                      </button>
                    </div>
                  </main>
                ) : (
                <main className="flex-1 p-6 md:p-8 overflow-hidden">
                  {savedSuccess && (
                    <div className="mb-4 p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-mono font-bold flex items-center justify-between shadow-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-trebol" />
                        <span>Configuración guardada exitosamente.</span>
                      </div>
                      <span className="text-trebol">✓ Actualizado</span>
                    </div>
                  )}

                  {conflictWarning && (
                    <div className="mb-4 p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono font-bold flex items-center gap-2 shadow-sm">
                      <AlertCircle size={16} className="text-amber-600 shrink-0" />
                      <span>{conflictWarning}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-7 space-y-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200/80 pb-5">
                        <div className="space-y-1 w-full max-w-sm">
                          <label className="text-[10px] font-mono font-bold text-trebol uppercase tracking-wider block">
                            Nombre del Popup en Admin
                          </label>
                          <input
                            type="text"
                            value={currentPopup.name || ''}
                            onChange={(e) => updateCurrentPopup({ name: e.target.value })}
                            className="w-full bg-white border border-neutral-300 text-carbon rounded-xl p-2 font-extrabold text-sm focus:border-trebol focus:outline-none"
                          />
                        </div>

                        <button
                          onClick={() => updateCurrentPopup({ isEnabled: !currentPopup.isEnabled })}
                          className={`px-4 py-2.5 rounded-2xl font-black font-mono text-xs transition-all cursor-pointer flex items-center gap-2 shadow-md shrink-0 ${
                            currentPopup.isEnabled ? 'bg-trebol text-white shadow-trebol/20' : 'bg-neutral-200 text-neutral-600 border border-neutral-300'
                          }`}
                        >
                          {currentPopup.isEnabled ? <ToggleRight size={20} /> : <ToggleLeft size={20} />}
                          <span>{currentPopup.isEnabled ? 'POPUP ACTIVO' : 'INACTIVO'}</span>
                        </button>
                      </div>

                      {/* Config Ubicación */}
                      <div className="bg-white p-5 rounded-2xl border border-neutral-200/80 space-y-4 shadow-sm text-xs">
                        <div className="flex items-center gap-2 text-trebol">
                          <MapPin size={18} />
                          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-carbon">
                            1. Ubicación en Pantalla (Dirección) & Reglas de Disparo
                          </h3>
                        </div>

                        <div>
                          <label className="font-bold text-carbon/80 block mb-1 font-mono">
                            ¿En dónde se mostrará? (Dirección/Ubicación):
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-[11px]">
                            <button
                              onClick={() => updateCurrentPopup({ position: 'center' })}
                              className={`p-3 rounded-xl border text-center font-bold cursor-pointer transition-all ${
                                currentPopup.position === 'center' ? 'bg-trebol text-white border-trebol shadow-md' : 'bg-hueso text-carbon border-neutral-200'
                              }`}
                            >
                              Modal Centro
                            </button>
                            <button
                              onClick={() => updateCurrentPopup({ position: 'bottom-right' })}
                              className={`p-3 rounded-xl border text-center font-bold cursor-pointer transition-all ${
                                currentPopup.position === 'bottom-right' ? 'bg-trebol text-white border-trebol shadow-md' : 'bg-hueso text-carbon border-neutral-200'
                              }`}
                            >
                              Inf. Derecha
                            </button>
                            <button
                              onClick={() => updateCurrentPopup({ position: 'bottom-left' })}
                              className={`p-3 rounded-xl border text-center font-bold cursor-pointer transition-all ${
                                currentPopup.position === 'bottom-left' ? 'bg-trebol text-white border-trebol shadow-md' : 'bg-hueso text-carbon border-neutral-200'
                              }`}
                            >
                              Inf. Izquierda
                            </button>
                            <button
                              onClick={() => updateCurrentPopup({ position: 'bottom-bar' })}
                              className={`p-3 rounded-xl border text-center font-bold cursor-pointer transition-all ${
                                currentPopup.position === 'bottom-bar' ? 'bg-trebol text-white border-trebol shadow-md' : 'bg-hueso text-carbon border-neutral-200'
                              }`}
                            >
                              Barra Inferior
                            </button>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                          <div>
                            <label className="font-bold text-carbon/80 block mb-1 font-mono">Disparador (¿Cómo se muestra?):</label>
                            <select
                              value={currentPopup.displayTrigger || 'delay'}
                              onChange={(e) => updateCurrentPopup({ displayTrigger: e.target.value })}
                              className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-2.5 font-mono text-xs focus:border-trebol focus:outline-none"
                            >
                              <option value="delay">Por Tiempo en Segundos</option>
                              <option value="scroll">Por Porcentaje de Scroll</option>
                              <option value="exit-intent">Intento de Salida (Exit Intent)</option>
                              <option value="instant">Entrada Inmediata</option>
                            </select>
                          </div>

                          {currentPopup.displayTrigger === 'delay' && (
                            <div>
                              <label className="font-bold text-carbon/80 block mb-1 font-mono">Segundos de Espera:</label>
                              <input
                                type="number"
                                min="1"
                                max="60"
                                value={currentPopup.delaySeconds || 4}
                                onChange={(e) => updateCurrentPopup({ delaySeconds: parseInt(e.target.value) || 4 })}
                                className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-2.5 font-mono text-xs focus:border-trebol focus:outline-none"
                              />
                            </div>
                          )}

                          {currentPopup.displayTrigger === 'scroll' && (
                            <div>
                              <label className="font-bold text-carbon/80 block mb-1 font-mono">Porcentaje de Scroll (%):</label>
                              <input
                                type="number"
                                min="10"
                                max="90"
                                value={currentPopup.scrollThreshold || 40}
                                onChange={(e) => updateCurrentPopup({ scrollThreshold: parseInt(e.target.value) || 40 })}
                                className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-2.5 font-mono text-xs focus:border-trebol focus:outline-none"
                              />
                            </div>
                          )}
                        </div>

                        <div className="space-y-2 pt-1">
                          <label className="font-bold text-carbon/80 block font-mono">
                            Filtrar por Sección / Ruta URL (100% Editable):
                          </label>
                          <input
                            type="text"
                            value={currentPopup.targetPages || ''}
                            onChange={(e) => updateCurrentPopup({ targetPages: e.target.value })}
                            placeholder="all (todas las páginas) o ej. /soluciones/ia-aplicada"
                            className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-2.5 font-mono text-xs focus:border-trebol focus:bg-white focus:outline-none"
                          />
                        </div>
                      </div>

                      {/* Textos y CTA */}
                      <div className="bg-white p-5 rounded-2xl border border-neutral-200/80 space-y-4 shadow-sm text-xs">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-trebol">
                            <Type size={18} />
                            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-carbon">
                              2. Textos & Botón CTA (Opcional)
                            </h3>
                          </div>

                          <button
                            onClick={() => updateCurrentPopup({ showCtaButton: currentPopup.showCtaButton === false ? true : false })}
                            className={`text-[10px] font-mono font-bold px-3 py-1 rounded-xl cursor-pointer ${
                              currentPopup.showCtaButton !== false ? 'bg-trebol/20 text-trebol border border-trebol/30' : 'bg-rose-50 text-rose-600 border border-rose-200'
                            }`}
                          >
                            {currentPopup.showCtaButton !== false ? '● BOTÓN CTA MOSTRADO' : '○ SIN BOTÓN CTA'}
                          </button>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <label className="font-bold text-carbon/80 block mb-1 font-mono">Texto de la Etiqueta (Badge)</label>
                            <input
                              type="text"
                              value={currentPopup.badgeText || ''}
                              onChange={(e) => updateCurrentPopup({ badgeText: e.target.value })}
                              className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-2.5 font-sans text-xs focus:border-trebol focus:outline-none"
                            />
                          </div>

                          <div>
                            <label className="font-bold text-carbon/80 block mb-1 font-mono">Título Principal</label>
                            <input
                              type="text"
                              value={currentPopup.title || ''}
                              onChange={(e) => updateCurrentPopup({ title: e.target.value })}
                              className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-2.5 font-sans text-xs focus:border-trebol focus:outline-none"
                            />
                          </div>

                          <div>
                            <label className="font-bold text-carbon/80 block mb-1 font-mono">Descripción / Subtítulo</label>
                            <textarea
                              value={currentPopup.subtitle || ''}
                              onChange={(e) => updateCurrentPopup({ subtitle: e.target.value })}
                              className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-2.5 font-sans text-xs h-16 focus:border-trebol focus:outline-none"
                            />
                          </div>

                          {currentPopup.showCtaButton !== false && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                              <div>
                                <label className="font-bold text-carbon/80 block mb-1 font-mono">Texto del Botón CTA</label>
                                <input
                                  type="text"
                                  value={currentPopup.ctaText || ''}
                                  onChange={(e) => updateCurrentPopup({ ctaText: e.target.value })}
                                  className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-2.5 font-sans text-xs focus:border-trebol focus:outline-none"
                                />
                              </div>

                              <div>
                                <label className="font-bold text-carbon/80 block mb-1 font-mono">Enlace WhatsApp / URL</label>
                                <input
                                  type="text"
                                  value={currentPopup.ctaUrl || ''}
                                  onChange={(e) => updateCurrentPopup({ ctaUrl: e.target.value })}
                                  className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-2.5 font-sans text-xs focus:border-trebol focus:outline-none"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                    </div>

                    {/* Previa Popups */}
                    <div className="lg:col-span-5 sticky top-24 space-y-4">
                      <div className="bg-white border border-neutral-200/90 rounded-[2.2rem] p-5 md:p-6 shadow-xl space-y-4 relative overflow-hidden">
                        <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-trebol animate-ping" />
                            <h3 className="font-extrabold text-carbon text-sm tracking-tight">Vista Previa Real-Time</h3>
                          </div>
                          <div className="flex items-center bg-hueso p-1 rounded-xl border border-neutral-200 text-[10px] font-mono">
                            <button
                              onClick={() => setPreviewDevice('desktop')}
                              className={`px-2.5 py-1 rounded-lg font-bold cursor-pointer ${previewDevice === 'desktop' ? 'bg-white text-carbon shadow-sm' : 'text-neutral-400'}`}
                            >
                              PC
                            </button>
                            <button
                              onClick={() => setPreviewDevice('mobile')}
                              className={`px-2.5 py-1 rounded-lg font-bold cursor-pointer ${previewDevice === 'mobile' ? 'bg-white text-carbon shadow-sm' : 'text-neutral-400'}`}
                            >
                              Móvil
                            </button>
                          </div>
                        </div>

                        <div className={`mx-auto transition-all duration-300 ${previewDevice === 'mobile' ? 'max-w-[280px]' : 'w-full'}`}>
                          <div
                            style={{ backgroundColor: currentPopup.bgColor || '#FFFFFF' }}
                            className="rounded-3xl border border-neutral-200/80 shadow-xl p-5 relative overflow-hidden font-sans space-y-4 min-h-[300px]"
                          >
                            <div className="flex items-center justify-between">
                              <span style={{ backgroundColor: currentPopup.badgeBg || '#5C9E43', color: currentPopup.badgeTextColor || '#FFFFFF' }} className="px-2.5 py-0.5 rounded-full font-mono text-[9px] font-black uppercase">
                                {currentPopup.badgeText}
                              </span>
                              <X size={14} className="text-neutral-400" />
                            </div>
                            <h4 style={{ color: currentPopup.textColor || '#1A1C1A' }} className="text-base font-black leading-tight">
                              {currentPopup.title}
                            </h4>
                            <p style={{ color: currentPopup.subtitleColor || '#4A5568' }} className="text-xs font-light leading-relaxed">
                              {currentPopup.subtitle}
                            </p>
                            {currentPopup.showCtaButton !== false && currentPopup.ctaText && (
                              <div style={{ backgroundColor: currentPopup.buttonBg || '#5C9E43', color: currentPopup.buttonTextColor || '#FFFFFF' }} className="py-3 px-4 rounded-xl font-extrabold text-xs text-center shadow-md">
                                {currentPopup.ctaText}
                              </div>
                            )}
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </main>
                )}
              </div>
            )}

            {/* MÓDULO 2: MAQUETADOR MODULAR DE LANDINGS */}
            {activeTab === 'landings' && (
              <div className="flex-1 flex flex-col md:flex-row">
                
                {/* Sidebar Landings */}
                <aside className="w-full md:w-72 bg-white border-r border-neutral-200/80 p-5 space-y-4 shadow-sm shrink-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[10.5px] font-mono font-bold text-neutral-400 uppercase tracking-wider">
                      Landings Pages ({landingsList.length})
                    </span>
                    <button
                      onClick={createNewLanding}
                      className="p-1.5 rounded-xl bg-trebol/10 text-trebol hover:bg-trebol hover:text-white transition-all cursor-pointer"
                      title="Crear Nueva Landing Page"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <div className="space-y-2.5 max-h-[70vh] overflow-y-auto pr-1">
                    {landingsList.length === 0 ? (
                      <div className="p-4 rounded-2xl bg-hueso border border-dashed border-neutral-300 text-center space-y-2">
                        <p className="text-[11px] text-neutral-400 font-mono">No hay landings creadas</p>
                        <button
                          onClick={createNewLanding}
                          className="px-3 py-1.5 rounded-xl bg-trebol text-white font-mono text-[10px] font-bold cursor-pointer hover:bg-carbon transition-all"
                        >
                          + Crear Landing
                        </button>
                      </div>
                    ) : (
                      landingsList.map((lan) => (
                        <div
                          key={lan.id}
                          onClick={() => setSelectedLandingId(lan.id)}
                          className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-2 ${
                            selectedLandingId === lan.id
                              ? 'bg-trebol/10 border-trebol text-trebol shadow-sm font-extrabold'
                              : 'bg-hueso/60 border-neutral-200 text-carbon hover:bg-white'
                          }`}
                        >
                          <div className="truncate">
                            <span className="text-xs block truncate font-bold">{lan.title}</span>
                            <span className="text-[10px] font-mono text-neutral-400 block truncate">
                              {lan.slug} | {lan.status === 'published' ? '🟢 PUBLICADA' : '🟡 BORRADOR'}
                            </span>
                          </div>

                          {selectedLandingId === lan.id && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                deleteCurrentLanding(lan.id);
                              }}
                              className="text-rose-400 hover:text-rose-600 p-1 cursor-pointer shrink-0"
                              title="Eliminar Landing Page"
                            >
                              <Trash2 size={14} />
                            </button>
                          )}
                        </div>
                      ))
                    )}
                  </div>
                </aside>

                {/* Editor Principal / Maquetador de Secciones */}
                {!currentLanding ? (
                  <main className="flex-1 p-8 flex items-center justify-center">
                    <div className="max-w-md w-full bg-white rounded-[2.5rem] border border-neutral-200 p-8 text-center space-y-4 shadow-sm">
                      <div className="w-16 h-16 rounded-2xl bg-trebol/10 border border-trebol/20 flex items-center justify-center text-trebol mx-auto">
                        <Layout size={30} />
                      </div>
                      <h3 className="text-lg font-black text-carbon">No hay Landings creadas</h3>
                      <p className="text-xs text-carbon/70 font-light leading-relaxed">
                        Tienes 0 landing pages. Puedes maquetar una nueva página modular para tus campañas comerciales.
                      </p>
                      <button
                        onClick={createNewLanding}
                        className="px-6 py-3 rounded-2xl bg-trebol text-white font-black text-xs hover:bg-lime-600 transition-all cursor-pointer shadow-md inline-flex items-center gap-2"
                      >
                        <Plus size={16} /> Crear mi primera Landing Page
                      </button>
                    </div>
                  </main>
                ) : (
                <main className="flex-1 p-6 md:p-8 overflow-hidden space-y-6">
                  {savedSuccess && (
                    <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-mono font-bold flex items-center justify-between shadow-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-trebol" />
                        <span>Landing Page actualizada en tiempo real.</span>
                      </div>
                      <span className="text-trebol">✓ Guardado</span>
                    </div>
                  )}

                  {slugError && (
                    <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-mono font-bold flex items-center gap-2 shadow-sm">
                      <AlertCircle size={16} className="text-rose-600 shrink-0" />
                      <span>{slugError}</span>
                    </div>
                  )}

                  {/* Header de la Landing */}
                  <div className="bg-white p-6 rounded-3xl border border-neutral-200/80 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <FileText size={20} className="text-trebol" />
                        <h2 className="text-xl font-black text-carbon tracking-tight">{currentLanding.title}</h2>
                      </div>
                      <span className="text-xs font-mono text-neutral-400 block">Ruta / Slug URL: {currentLanding.slug}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateCurrentLanding({ status: currentLanding.status === 'published' ? 'draft' : 'published' })}
                        className={`px-4 py-2 rounded-xl font-mono text-xs font-bold cursor-pointer transition-all ${
                          currentLanding.status === 'published' ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-amber-100 text-amber-800 border border-amber-300'
                        }`}
                      >
                        {currentLanding.status === 'published' ? '🟢 PUBLICADA EN VIVO' : '🟡 BORRADOR'}
                      </button>

                      <Link
                        href={getLandingLiveUrl(currentLanding.slug)}
                        target="_blank"
                        className="px-4 py-2 rounded-xl bg-trebol text-white font-mono text-xs font-bold flex items-center gap-1.5 hover:bg-lime-600 transition-colors shadow-md"
                      >
                        <span>Abrir Landing</span>
                        <ExternalLink size={14} />
                      </Link>
                    </div>
                  </div>

                  {/* Formulario de Maquetación Modular */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    <div className="lg:col-span-7 space-y-6">
                      
                      {/* 1. SLUG & ESTILOS */}
                      <div className="bg-white p-6 rounded-3xl border border-neutral-200/80 space-y-4 shadow-sm text-xs">
                        <div className="flex items-center gap-2 text-trebol border-b border-neutral-100 pb-3">
                          <Globe size={18} />
                          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-carbon">
                            1. Ruta Slug (URL Única) & Estilo Visual de Maquetación
                          </h3>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <label className="font-bold text-carbon/80 block mb-1 font-mono">
                              Slug de Ruta URL (Único, ej. /landings/promocion-2026):
                            </label>
                            <input
                              type="text"
                              value={currentLanding.slug || ''}
                              onChange={(e) => updateCurrentLanding({ slug: e.target.value })}
                              placeholder="/landings/mi-promocion"
                              className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-2.5 font-mono text-xs font-bold focus:border-trebol focus:bg-white focus:outline-none"
                            />
                          </div>

                          <label className="font-bold text-carbon/80 block font-mono pt-2">
                            Seleccionar Estilo Visual (4 Temas Disponibles):
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 font-mono text-[11px]">
                            <button
                              type="button"
                              onClick={() => updateCurrentLanding({ themeStyle: 'original' })}
                              className={`p-3 rounded-2xl border text-left font-bold cursor-pointer transition-all flex flex-col justify-between gap-1.5 ${
                                currentLanding.themeStyle === 'original' || !currentLanding.themeStyle
                                  ? 'bg-trebol text-white border-trebol shadow-md'
                                  : 'bg-hueso text-carbon border-neutral-200 hover:bg-white'
                              }`}
                            >
                              <div className="flex items-center gap-1.5">
                                <Zap size={14} />
                                <span className="truncate">1. Original</span>
                              </div>
                              <span className="text-[9px] opacity-80 font-normal truncate">Trébol Cream & Emerald</span>
                            </button>

                            <button
                              type="button"
                              onClick={() => updateCurrentLanding({ themeStyle: 'dark' })}
                              className={`p-3 rounded-2xl border text-left font-bold cursor-pointer transition-all flex flex-col justify-between gap-1.5 ${
                                currentLanding.themeStyle === 'dark' || currentLanding.themeStyle === 'darkmode'
                                  ? 'bg-[#0B0F17] text-emerald-400 border-emerald-500 shadow-md'
                                  : 'bg-hueso text-carbon border-neutral-200 hover:bg-white'
                              }`}
                            >
                              <div className="flex items-center gap-1.5">
                                <ShieldCheck size={14} />
                                <span className="truncate">2. Dark Mode</span>
                              </div>
                              <span className="text-[9px] opacity-80 font-normal truncate">Obsidian & Neon Glow</span>
                            </button>

                            <button
                              type="button"
                              onClick={() => updateCurrentLanding({ themeStyle: 'tech' })}
                              className={`p-3 rounded-2xl border text-left font-bold cursor-pointer transition-all flex flex-col justify-between gap-1.5 ${
                                currentLanding.themeStyle === 'tech'
                                  ? 'bg-slate-950 text-[#8DC63F] border-[#8DC63F] shadow-md'
                                  : 'bg-hueso text-carbon border-neutral-200 hover:bg-white'
                              }`}
                            >
                              <div className="flex items-center gap-1.5">
                                <Cpu size={14} />
                                <span className="truncate">3. Tecnológico</span>
                              </div>
                              <span className="text-[9px] opacity-80 font-normal truncate">Cyber Matrix & Terminal</span>
                            </button>

                            <button
                              type="button"
                              onClick={() => updateCurrentLanding({ themeStyle: 'fashion' })}
                              className={`p-3 rounded-2xl border text-left font-bold cursor-pointer transition-all flex flex-col justify-between gap-1.5 ${
                                currentLanding.themeStyle === 'fashion' || currentLanding.themeStyle === 'editorial_moda'
                                  ? 'bg-[#111111] text-[#D4AF37] border-[#D4AF37] shadow-md'
                                  : 'bg-hueso text-carbon border-neutral-200 hover:bg-white'
                              }`}
                            >
                              <div className="flex items-center gap-1.5">
                                <Sparkles size={14} />
                                <span className="truncate">4. Editorial Moda</span>
                              </div>
                              <span className="text-[9px] opacity-80 font-normal truncate">Haute Couture & Gold</span>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* 2. MAQUETADOR DE SECCIONES MODULARES (AGREGAR Y QUITAR SECCIONES) */}
                      <div className="bg-white p-6 rounded-3xl border border-neutral-200/80 space-y-5 shadow-sm text-xs">
                        <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                          <div className="flex items-center gap-2 text-trebol">
                            <Layers size={18} />
                            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-carbon">
                              2. Secciones Modulares de la Landing ({ (currentLanding.sections || []).length })
                            </h3>
                          </div>

                          {/* BOTONES PARA AGREGAR SECCIONES MODULARES */}
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[10px] font-mono text-neutral-400 font-bold">AGREGAR SECCIÓN:</span>
                            <button
                              onClick={() => addSectionToCurrentLanding('hero')}
                              className="px-2.5 py-1 rounded-xl bg-trebol text-white hover:bg-lime-600 font-mono text-[10px] font-bold cursor-pointer transition-all shadow-sm"
                            >
                              + Hero Header
                            </button>
                            <button
                              onClick={() => addSectionToCurrentLanding('services')}
                              className="px-2.5 py-1 rounded-xl bg-trebol/10 text-trebol border border-trebol/30 hover:bg-trebol hover:text-white font-mono text-[10px] font-bold cursor-pointer transition-all"
                            >
                              + Servicios Trébol
                            </button>
                            <button
                              onClick={() => addSectionToCurrentLanding('why_us')}
                              className="px-2.5 py-1 rounded-xl bg-trebol/10 text-trebol border border-trebol/30 hover:bg-trebol hover:text-white font-mono text-[10px] font-bold cursor-pointer transition-all"
                            >
                              + ¿Por Qué Elegirnos?
                            </button>
                            <button
                              onClick={() => addSectionToCurrentLanding('comparison_table')}
                              className="px-2.5 py-1 rounded-xl bg-trebol/10 text-trebol border border-trebol/30 hover:bg-trebol hover:text-white font-mono text-[10px] font-bold cursor-pointer transition-all"
                            >
                              + Comparativa Antes/Después
                            </button>
                            <button
                              onClick={() => addSectionToCurrentLanding('text_block')}
                              className="px-2.5 py-1 rounded-xl bg-trebol/10 text-trebol border border-trebol/30 hover:bg-trebol hover:text-white font-mono text-[10px] font-bold cursor-pointer transition-all"
                            >
                              + Texto Libre
                            </button>
                            <button
                              onClick={() => addSectionToCurrentLanding('image_carousel')}
                              className="px-2.5 py-1 rounded-xl bg-trebol/10 text-trebol border border-trebol/30 hover:bg-trebol hover:text-white font-mono text-[10px] font-bold cursor-pointer transition-all"
                            >
                              + Carrusel Galería
                            </button>
                            <button
                              onClick={() => addSectionToCurrentLanding('video_embed')}
                              className="px-2.5 py-1 rounded-xl bg-trebol/10 text-trebol border border-trebol/30 hover:bg-trebol hover:text-white font-mono text-[10px] font-bold cursor-pointer transition-all"
                            >
                              + Video Demo
                            </button>
                            <button
                              onClick={() => addSectionToCurrentLanding('stats_banner')}
                              className="px-2.5 py-1 rounded-xl bg-trebol/10 text-trebol border border-trebol/30 hover:bg-trebol hover:text-white font-mono text-[10px] font-bold cursor-pointer transition-all"
                            >
                              + Métricas & Stats
                            </button>
                            <button
                              onClick={() => addSectionToCurrentLanding('benefits')}
                              className="px-2.5 py-1 rounded-xl bg-trebol/10 text-trebol border border-trebol/30 hover:bg-trebol hover:text-white font-mono text-[10px] font-bold cursor-pointer transition-all"
                            >
                              + Beneficios
                            </button>
                            <button
                              onClick={() => addSectionToCurrentLanding('process')}
                              className="px-2.5 py-1 rounded-xl bg-trebol/10 text-trebol border border-trebol/30 hover:bg-trebol hover:text-white font-mono text-[10px] font-bold cursor-pointer transition-all"
                            >
                              + Proceso 4 Pasos
                            </button>
                            <button
                              onClick={() => addSectionToCurrentLanding('contact_form')}
                              className="px-2.5 py-1 rounded-xl bg-trebol/10 text-trebol border border-trebol/30 hover:bg-trebol hover:text-white font-mono text-[10px] font-bold cursor-pointer transition-all"
                            >
                              + Formulario Contacto
                            </button>
                            <button
                              onClick={() => addSectionToCurrentLanding('client_logos')}
                              className="px-2.5 py-1 rounded-xl bg-trebol/10 text-trebol border border-trebol/30 hover:bg-trebol hover:text-white font-mono text-[10px] font-bold cursor-pointer transition-all"
                            >
                              + Logos Clientes
                            </button>
                            <button
                              onClick={() => addSectionToCurrentLanding('testimonials')}
                              className="px-2.5 py-1 rounded-xl bg-trebol/10 text-trebol border border-trebol/30 hover:bg-trebol hover:text-white font-mono text-[10px] font-bold cursor-pointer transition-all"
                            >
                              + Testimonios B2B
                            </button>
                            <button
                              onClick={() => addSectionToCurrentLanding('pricing')}
                              className="px-2.5 py-1 rounded-xl bg-trebol/10 text-trebol border border-trebol/30 hover:bg-trebol hover:text-white font-mono text-[10px] font-bold cursor-pointer transition-all"
                            >
                              + Tarifario / Paquetes
                            </button>
                            <button
                              onClick={() => addSectionToCurrentLanding('tech_stack')}
                              className="px-2.5 py-1 rounded-xl bg-trebol/10 text-trebol border border-trebol/30 hover:bg-trebol hover:text-white font-mono text-[10px] font-bold cursor-pointer transition-all"
                            >
                              + Stack Tecnológico
                            </button>
                            <button
                              onClick={() => addSectionToCurrentLanding('faq')}
                              className="px-2.5 py-1 rounded-xl bg-trebol/10 text-trebol border border-trebol/30 hover:bg-trebol hover:text-white font-mono text-[10px] font-bold cursor-pointer transition-all"
                            >
                              + FAQ
                            </button>
                            <button
                              onClick={() => addSectionToCurrentLanding('cta')}
                              className="px-2.5 py-1 rounded-xl bg-trebol/10 text-trebol border border-trebol/30 hover:bg-trebol hover:text-white font-mono text-[10px] font-bold cursor-pointer transition-all"
                            >
                              + Oferta CTA
                            </button>
                          </div>
                        </div>

                        {/* LISTA DE SECCIONES MODULARES */}
                        <div className="space-y-4">
                          {(currentLanding.sections || []).map((sec, sIdx) => (
                            <div
                              key={sec.id || sIdx}
                              className={`p-4 rounded-2xl border transition-all space-y-3 ${
                                sec.enabled !== false ? 'bg-hueso/40 border-neutral-200' : 'bg-rose-50/50 border-rose-200 opacity-60'
                              }`}
                            >
                              {/* Header de la Sección */}
                              <div className="flex items-center justify-between border-b border-neutral-200/60 pb-2.5">
                                <div className="flex items-center gap-2 font-mono">
                                  <span className="w-5 h-5 rounded-full bg-neutral-200 text-carbon font-bold text-[10px] flex items-center justify-center">
                                    {sIdx + 1}
                                  </span>
                                  <span className="font-bold uppercase text-[11px] text-carbon">
                                    SECCIÓN: {sec.type.toUpperCase()}
                                  </span>
                                </div>

                                <div className="flex items-center gap-2">
                                  {/* Visibilidad de la sección */}
                                  <button
                                    onClick={() => toggleSectionEnabled(sec.id)}
                                    className={`px-2.5 py-1 rounded-lg font-mono text-[10px] font-bold cursor-pointer flex items-center gap-1 ${
                                      sec.enabled !== false ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                                    }`}
                                  >
                                    {sec.enabled !== false ? <Eye size={12} /> : <EyeOff size={12} />}
                                    <span>{sec.enabled !== false ? 'VISIBLE' : 'OCULTA'}</span>
                                  </button>

                                  {/* Eliminar sección */}
                                  {(currentLanding.sections || []).length > 1 && (
                                    <button
                                      onClick={() => removeSectionFromLanding(sec.id)}
                                      className="p-1 rounded-lg text-rose-500 hover:bg-rose-100 cursor-pointer transition-colors"
                                      title="Quitar Sección"
                                    >
                                      <Trash2 size={15} />
                                    </button>
                                  )}
                                </div>
                              </div>

                              {/* Formulario de Campos según tipo de sección */}
                               {sec.type === 'hero' && (
                                 <div className="space-y-3 pt-1">
                                   <div>
                                     <label className="font-bold text-carbon/80 block mb-1 font-mono">Etiqueta Opcional (Badge Pill)</label>
                                     <input
                                       type="text"
                                       value={sec.badge || ''}
                                       placeholder="Ej. SOLUCIONES EMPRESARIALES"
                                       onChange={(e) => updateSectionData(sec.id, { badge: e.target.value })}
                                       className="w-full bg-white border border-neutral-200 rounded-xl p-2 text-xs focus:border-trebol focus:outline-none"
                                     />
                                   </div>
                                   <div>
                                     <label className="font-bold text-carbon/80 block mb-1 font-mono">Título Principal Hero (H1)</label>
                                     <textarea
                                       value={sec.title || ''}
                                       onChange={(e) => updateSectionData(sec.id, { title: e.target.value })}
                                       className="w-full bg-white border border-neutral-200 font-bold rounded-xl p-2 text-xs h-16 focus:border-trebol focus:outline-none"
                                     />
                                   </div>
                                   <div>
                                     <label className="font-bold text-carbon/80 block mb-1 font-mono">Subtítulo / Descripción</label>
                                     <textarea
                                       value={sec.subtitle || ''}
                                       onChange={(e) => updateSectionData(sec.id, { subtitle: e.target.value })}
                                       className="w-full bg-white border border-neutral-200 rounded-xl p-2 text-xs h-16 focus:border-trebol focus:outline-none"
                                     />
                                   </div>
                                   <div className="grid grid-cols-2 gap-2">
                                     <div>
                                       <label className="font-bold text-carbon/80 block mb-1 font-mono">Texto Botón Principal (Verde)</label>
                                       <input
                                         type="text"
                                         value={sec.ctaText || ''}
                                         onChange={(e) => updateSectionData(sec.id, { ctaText: e.target.value })}
                                         className="w-full bg-white border border-neutral-200 rounded-xl p-2 text-xs focus:border-trebol focus:outline-none"
                                       />
                                     </div>
                                     <div>
                                       <label className="font-bold text-carbon/80 block mb-1 font-mono">Enlace Botón Principal</label>
                                       <input
                                         type="text"
                                         value={sec.ctaUrl || ''}
                                         onChange={(e) => updateSectionData(sec.id, { ctaUrl: e.target.value })}
                                         className="w-full bg-white border border-neutral-200 rounded-xl p-2 text-xs focus:border-trebol focus:outline-none"
                                       />
                                     </div>
                                   </div>
                                   <div className="grid grid-cols-2 gap-2">
                                     <div>
                                       <label className="font-bold text-carbon/80 block mb-1 font-mono">Texto Botón Secundario (Blanco)</label>
                                       <input
                                         type="text"
                                         value={sec.cta2Text !== undefined ? sec.cta2Text : 'Descubre cómo funciona ↓'}
                                         onChange={(e) => updateSectionData(sec.id, { cta2Text: e.target.value })}
                                         className="w-full bg-white border border-neutral-200 rounded-xl p-2 text-xs focus:border-trebol focus:outline-none"
                                       />
                                     </div>
                                     <div>
                                       <label className="font-bold text-carbon/80 block mb-1 font-mono">Enlace Botón Secundario</label>
                                       <input
                                         type="text"
                                         value={sec.cta2Url || '#contacto'}
                                         onChange={(e) => updateSectionData(sec.id, { cta2Url: e.target.value })}
                                         className="w-full bg-white border border-neutral-200 rounded-xl p-2 text-xs focus:border-trebol focus:outline-none"
                                       />
                                     </div>
                                   </div>
                                   <div>
                                     <label className="font-bold text-carbon/80 block mb-1 font-mono">Micro Leyenda de Garantía (Pie de Botones)</label>
                                     <input
                                       type="text"
                                       value={sec.guaranteeText !== undefined ? sec.guaranteeText : '30 minutos · Sin costo · Identificamos oportunidades para tu negocio'}
                                       onChange={(e) => updateSectionData(sec.id, { guaranteeText: e.target.value })}
                                       className="w-full bg-white border border-neutral-200 rounded-xl p-2 text-xs focus:border-trebol focus:outline-none"
                                     />
                                   </div>
                                   <div>
                                     <label className="font-bold text-carbon/80 block mb-1 font-mono">URL Imagen de Fondo del Hero</label>
                                     <input
                                       type="text"
                                       value={sec.bgImageUrl || ''}
                                       placeholder="https://images.unsplash.com/..."
                                       onChange={(e) => updateSectionData(sec.id, { bgImageUrl: e.target.value })}
                                       className="w-full bg-white border border-neutral-200 rounded-xl p-2 text-xs focus:border-trebol focus:outline-none font-mono"
                                     />
                                   </div>
                                 </div>
                               )}

                               {sec.type === 'services' && (
                                 <div className="space-y-3 pt-1">
                                   <div>
                                     <label className="font-bold text-carbon/80 block mb-1 font-mono">Título Principal de Servicios (H2)</label>
                                     <input
                                       type="text"
                                       value={sec.title || ''}
                                       placeholder="Ej. ¿Qué soluciones ofrecemos?"
                                       onChange={(e) => updateSectionData(sec.id, { title: e.target.value })}
                                       className="w-full bg-white border border-neutral-200 font-bold rounded-xl p-2 text-xs focus:border-trebol focus:outline-none"
                                     />
                                   </div>
                                   <div>
                                     <label className="font-bold text-carbon/80 block mb-1 font-mono">Subtítulo / Descripción</label>
                                     <textarea
                                       value={sec.subtitle || ''}
                                       placeholder="Ej. Combina arquitectura digital moderna con ingeniería..."
                                       onChange={(e) => updateSectionData(sec.id, { subtitle: e.target.value })}
                                       className="w-full bg-white border border-neutral-200 rounded-xl p-2 text-xs h-16 focus:border-trebol focus:outline-none"
                                     />
                                   </div>

                                   {/* EDICIÓN DE TARJETAS DE SERVICIO */}
                                   <div className="pt-2 space-y-3">
                                     <div className="flex items-center justify-between">
                                       <span className="font-bold text-xs font-mono text-trebol uppercase">Tarjetas de Servicio ({ (sec.items || []).length })</span>
                                       <button
                                         onClick={() => addSectionCardItem(sec.id, { title: 'Nuevo Servicio', desc: 'Descripción del servicio.' })}
                                         className="px-2 py-1 rounded-lg bg-trebol/10 text-trebol border border-trebol/30 hover:bg-trebol hover:text-white font-mono text-[10px] font-bold cursor-pointer transition-all"
                                       >
                                         + Agregar Tarjeta
                                       </button>
                                     </div>

                                     {(sec.items || []).map((card, cIdx) => (
                                       <div key={cIdx} className="p-3 bg-white border border-neutral-200 rounded-xl space-y-2 relative shadow-sm">
                                         <div className="flex items-center justify-between font-mono text-[10px] text-neutral-400 font-bold">
                                           <span>TARJETA 0{cIdx + 1}</span>
                                           {(sec.items || []).length > 1 && (
                                             <button
                                               onClick={() => removeSectionCardItem(sec.id, cIdx)}
                                               className="text-rose-500 hover:text-rose-700 cursor-pointer font-bold"
                                             >
                                               🗑️ Quitar
                                             </button>
                                           )}
                                         </div>
                                         <div>
                                           <label className="font-bold text-carbon/80 block text-[10px] font-mono">Título de la Tarjeta</label>
                                           <input
                                             type="text"
                                             value={typeof card === 'string' ? card : card.title || ''}
                                             onChange={(e) => updateSectionCardItem(sec.id, cIdx, { title: e.target.value })}
                                             className="w-full bg-hueso/50 border border-neutral-200 font-bold rounded-lg p-1.5 text-xs focus:border-trebol focus:outline-none"
                                           />
                                         </div>
                                         <div>
                                           <label className="font-bold text-carbon/80 block text-[10px] font-mono">Descripción de la Tarjeta</label>
                                           <textarea
                                             value={typeof card === 'object' ? card.desc || '' : ''}
                                             onChange={(e) => updateSectionCardItem(sec.id, cIdx, { desc: e.target.value })}
                                             className="w-full bg-hueso/50 border border-neutral-200 rounded-lg p-1.5 text-xs h-14 focus:border-trebol focus:outline-none"
                                           />
                                         </div>
                                       </div>
                                     ))}
                                   </div>
                                 </div>
                               )}

                               {sec.type === 'why_us' && (
                                 <div className="space-y-3 pt-1">
                                   <div>
                                     <label className="font-bold text-carbon/80 block mb-1 font-mono">Título Sección ¿Por Qué Elegirnos?</label>
                                     <input
                                       type="text"
                                       value={sec.title || ''}
                                       placeholder="Ej. ¿Por qué elegir Trébol Digital?"
                                       onChange={(e) => updateSectionData(sec.id, { title: e.target.value })}
                                       className="w-full bg-white border border-neutral-200 font-bold rounded-xl p-2 text-xs focus:border-trebol focus:outline-none"
                                     />
                                   </div>
                                   <div>
                                     <label className="font-bold text-carbon/80 block mb-1 font-mono">Subtítulo / Bajada</label>
                                     <input
                                       type="text"
                                       value={sec.subtitle || ''}
                                       placeholder="Ej. Resultados tangibles orientados a acelerar..."
                                       onChange={(e) => updateSectionData(sec.id, { subtitle: e.target.value })}
                                       className="w-full bg-white border border-neutral-200 rounded-xl p-2 text-xs focus:border-trebol focus:outline-none"
                                     />
                                   </div>

                                   {/* EDICIÓN DE TARJETAS POR QUÉ ELEGIRNOS */}
                                   <div className="pt-2 space-y-3">
                                     <div className="flex items-center justify-between">
                                       <span className="font-bold text-xs font-mono text-trebol uppercase">Tarjetas Diferenciadoras ({ (sec.items || []).length })</span>
                                       <button
                                         onClick={() => addSectionCardItem(sec.id, { num: `0${(sec.items || []).length + 1}`, title: 'Nuevo Diferenciador', desc: 'Explicación de la ventaja.' })}
                                         className="px-2 py-1 rounded-lg bg-trebol/10 text-trebol border border-trebol/30 hover:bg-trebol hover:text-white font-mono text-[10px] font-bold cursor-pointer transition-all"
                                       >
                                         + Agregar Tarjeta
                                       </button>
                                     </div>

                                     {(sec.items || []).map((card, cIdx) => (
                                       <div key={cIdx} className="p-3 bg-white border border-neutral-200 rounded-xl space-y-2 relative shadow-sm">
                                         <div className="flex items-center justify-between font-mono text-[10px] text-neutral-400 font-bold">
                                           <span>TARJETA 0{cIdx + 1}</span>
                                           {(sec.items || []).length > 1 && (
                                             <button
                                               onClick={() => removeSectionCardItem(sec.id, cIdx)}
                                               className="text-rose-500 hover:text-rose-700 cursor-pointer font-bold"
                                             >
                                               🗑️ Quitar
                                             </button>
                                           )}
                                         </div>
                                         <div>
                                           <label className="font-bold text-carbon/80 block text-[10px] font-mono">Título del Diferenciador</label>
                                           <input
                                             type="text"
                                             value={typeof card === 'string' ? card : card.title || ''}
                                             onChange={(e) => updateSectionCardItem(sec.id, cIdx, { title: e.target.value })}
                                             className="w-full bg-hueso/50 border border-neutral-200 font-bold rounded-lg p-1.5 text-xs focus:border-trebol focus:outline-none"
                                           />
                                         </div>
                                         <div>
                                           <label className="font-bold text-carbon/80 block text-[10px] font-mono">Descripción del Diferenciador</label>
                                           <textarea
                                             value={typeof card === 'object' ? card.desc || '' : ''}
                                             onChange={(e) => updateSectionCardItem(sec.id, cIdx, { desc: e.target.value })}
                                             className="w-full bg-hueso/50 border border-neutral-200 rounded-lg p-1.5 text-xs h-14 focus:border-trebol focus:outline-none"
                                           />
                                         </div>
                                       </div>
                                     ))}
                                   </div>
                                 </div>
                               )}

                               {sec.type === 'process' && (
                                 <div className="space-y-3 pt-1">
                                   <div>
                                     <label className="font-bold text-carbon/80 block mb-1 font-mono">Título Sección Metodología</label>
                                     <input
                                       type="text"
                                       value={sec.title || ''}
                                       placeholder="Ej. Proceso de Trabajo de 4 Pasos"
                                       onChange={(e) => updateSectionData(sec.id, { title: e.target.value })}
                                       className="w-full bg-white border border-neutral-200 font-bold rounded-xl p-2 text-xs focus:border-trebol focus:outline-none"
                                     />
                                   </div>
                                   <div>
                                     <label className="font-bold text-carbon/80 block mb-1 font-mono">Subtítulo / Bajada</label>
                                     <input
                                       type="text"
                                       value={sec.subtitle || ''}
                                       placeholder="Ej. Metodología clara para llevar tu negocio..."
                                       onChange={(e) => updateSectionData(sec.id, { subtitle: e.target.value })}
                                       className="w-full bg-white border border-neutral-200 rounded-xl p-2 text-xs focus:border-trebol focus:outline-none"
                                     />
                                   </div>

                                   {/* EDICIÓN DE PASOS DE METODOLOGÍA */}
                                   <div className="pt-2 space-y-3">
                                     <div className="flex items-center justify-between">
                                       <span className="font-bold text-xs font-mono text-trebol uppercase">Pasos de Metodología ({ (sec.items || []).length })</span>
                                       <button
                                         onClick={() => addSectionCardItem(sec.id, { number: `0${(sec.items || []).length + 1}`, title: 'Nuevo Paso', tagline: 'Fase del Proceso', description: 'Descripción del paso.' })}
                                         className="px-2 py-1 rounded-lg bg-trebol/10 text-trebol border border-trebol/30 hover:bg-trebol hover:text-white font-mono text-[10px] font-bold cursor-pointer transition-all"
                                       >
                                         + Agregar Paso
                                       </button>
                                     </div>

                                     {(sec.items || []).map((card, cIdx) => (
                                       <div key={cIdx} className="p-3 bg-white border border-neutral-200 rounded-xl space-y-2 relative shadow-sm">
                                         <div className="flex items-center justify-between font-mono text-[10px] text-neutral-400 font-bold">
                                           <span>PASO 0{cIdx + 1}</span>
                                           {(sec.items || []).length > 1 && (
                                             <button
                                               onClick={() => removeSectionCardItem(sec.id, cIdx)}
                                               className="text-rose-500 hover:text-rose-700 cursor-pointer font-bold"
                                             >
                                               🗑️ Quitar
                                             </button>
                                           )}
                                         </div>
                                         <div>
                                           <label className="font-bold text-carbon/80 block text-[10px] font-mono">Título del Paso</label>
                                           <input
                                             type="text"
                                             value={typeof card === 'string' ? card : card.title || ''}
                                             onChange={(e) => updateSectionCardItem(sec.id, cIdx, { title: e.target.value })}
                                             className="w-full bg-hueso/50 border border-neutral-200 font-bold rounded-lg p-1.5 text-xs focus:border-trebol focus:outline-none"
                                           />
                                         </div>
                                         <div>
                                           <label className="font-bold text-carbon/80 block text-[10px] font-mono">Descripción del Paso</label>
                                           <textarea
                                             value={typeof card === 'object' ? card.description || card.desc || '' : ''}
                                             onChange={(e) => updateSectionCardItem(sec.id, cIdx, { description: e.target.value, desc: e.target.value })}
                                             className="w-full bg-hueso/50 border border-neutral-200 rounded-lg p-1.5 text-xs h-14 focus:border-trebol focus:outline-none"
                                           />
                                         </div>
                                       </div>
                                     ))}
                                   </div>
                                 </div>
                               )}

                               {sec.type === 'text_block' && (
                                 <div className="space-y-3 pt-1">
                                   <div>
                                     <label className="font-bold text-carbon/80 block mb-1 font-mono">Insignia / Badge Superior</label>
                                     <input
                                       type="text"
                                       value={sec.badge || ''}
                                       placeholder="Ej. INFORMACIÓN DESTACADA"
                                       onChange={(e) => updateSectionData(sec.id, { badge: e.target.value })}
                                       className="w-full bg-white border border-neutral-200 rounded-xl p-2 text-xs focus:border-trebol focus:outline-none"
                                     />
                                   </div>
                                   <div>
                                     <label className="font-bold text-carbon/80 block mb-1 font-mono">Título del Bloque</label>
                                     <input
                                       type="text"
                                       value={sec.title || ''}
                                       onChange={(e) => updateSectionData(sec.id, { title: e.target.value })}
                                       className="w-full bg-white border border-neutral-200 font-bold rounded-xl p-2 text-xs focus:border-trebol focus:outline-none"
                                     />
                                   </div>
                                   <div>
                                     <label className="font-bold text-carbon/80 block mb-1 font-mono">Contenido / Parágrafo Explicativo</label>
                                     <textarea
                                       value={sec.content || sec.subtitle || ''}
                                       onChange={(e) => updateSectionData(sec.id, { content: e.target.value, subtitle: e.target.value })}
                                       className="w-full bg-white border border-neutral-200 rounded-xl p-2 text-xs h-20 focus:border-trebol focus:outline-none"
                                     />
                                   </div>
                                 </div>
                               )}

                               {sec.type === 'comparison_table' && (
                                 <div className="space-y-3 pt-1">
                                   <div>
                                     <label className="font-bold text-carbon/80 block mb-1 font-mono">Título de la Comparativa</label>
                                     <input
                                       type="text"
                                       value={sec.title || ''}
                                       onChange={(e) => updateSectionData(sec.id, { title: e.target.value })}
                                       className="w-full bg-white border border-neutral-200 font-bold rounded-xl p-2 text-xs focus:border-trebol focus:outline-none"
                                     />
                                   </div>
                                 </div>
                               )}

                               {sec.type === 'image_carousel' && (
                                 <div className="space-y-3 pt-1">
                                   <div>
                                     <label className="font-bold text-carbon/80 block mb-1 font-mono">Título de la Galería</label>
                                     <input
                                       type="text"
                                       value={sec.title || ''}
                                       onChange={(e) => updateSectionData(sec.id, { title: e.target.value })}
                                       className="w-full bg-white border border-neutral-200 font-bold rounded-xl p-2 text-xs focus:border-trebol focus:outline-none"
                                     />
                                   </div>
                                 </div>
                               )}

                               {sec.type === 'video_embed' && (
                                 <div className="space-y-3 pt-1">
                                   <div>
                                     <label className="font-bold text-carbon/80 block mb-1 font-mono">Título del Video</label>
                                     <input
                                       type="text"
                                       value={sec.title || ''}
                                       onChange={(e) => updateSectionData(sec.id, { title: e.target.value })}
                                       className="w-full bg-white border border-neutral-200 font-bold rounded-xl p-2 text-xs focus:border-trebol focus:outline-none"
                                     />
                                   </div>
                                   <div>
                                     <label className="font-bold text-carbon/80 block mb-1 font-mono">URL del Video (YouTube Embed)</label>
                                     <input
                                       type="text"
                                       value={sec.videoUrl || ''}
                                       placeholder="https://www.youtube.com/embed/..."
                                       onChange={(e) => updateSectionData(sec.id, { videoUrl: e.target.value })}
                                       className="w-full bg-white border border-neutral-200 rounded-xl p-2 text-xs focus:border-trebol focus:outline-none font-mono"
                                     />
                                   </div>
                                   <div>
                                     <label className="font-bold text-carbon/80 block mb-1 font-mono">URL Imagen Portada / Thumbnail</label>
                                     <input
                                       type="text"
                                       value={sec.thumbnailUrl || ''}
                                       placeholder="https://images.unsplash.com/..."
                                       onChange={(e) => updateSectionData(sec.id, { thumbnailUrl: e.target.value })}
                                       className="w-full bg-white border border-neutral-200 rounded-xl p-2 text-xs focus:border-trebol focus:outline-none font-mono"
                                     />
                                   </div>
                                 </div>
                               )}

                               {sec.type === 'stats_banner' && (
                                 <div className="p-3 bg-carbon/5 border border-neutral-200 rounded-xl text-xs space-y-1">
                                   <span className="font-bold font-mono text-trebol block">Módulo: Métricas & Stats</span>
                                   <p className="text-neutral-600 text-[11px]">Renderiza la cinta de indicadores de alto rendimiento (+150% Conversión, 15 hrs Ahorradas, +45 Empresas, 99.8% Uptime).</p>
                                 </div>
                               )}

                               {sec.type === 'process' && (
                                 <div className="p-3 bg-emerald-50/60 border border-emerald-200 rounded-xl text-xs space-y-1">
                                   <span className="font-bold font-mono text-trebol block">Módulo: Proceso 4 Pasos Trébol</span>
                                   <p className="text-neutral-600 text-[11px]">Renderiza el componente nativo de Metodología de 4 Pasos (Conocer, Diseñar, Ejecutar, Medir & Capacitar).</p>
                                 </div>
                               )}

                               {sec.type === 'contact_form' && (
                                 <div className="p-3 bg-emerald-50/60 border border-emerald-200 rounded-xl text-xs space-y-1">
                                   <span className="font-bold font-mono text-trebol block">Módulo: Formulario de Contacto</span>
                                   <p className="text-neutral-600 text-[11px]">Renderiza el formulario oficial de prospección e inicio de proyecto.</p>
                                 </div>
                               )}

                               {sec.type === 'client_logos' && (
                                 <div className="p-3 bg-emerald-50/60 border border-emerald-200 rounded-xl text-xs space-y-1">
                                   <span className="font-bold font-mono text-trebol block">Módulo: Logos Clientes</span>
                                   <p className="text-neutral-600 text-[11px]">Renderiza el carrusel de logos y marcas que confían en Trébol Digital.</p>
                                 </div>
                               )}

                               {sec.type === 'benefits' && (
                                 <div className="space-y-3 pt-1">
                                   <div>
                                     <label className="font-bold text-carbon/80 block mb-1 font-mono">Título de Beneficios</label>
                                     <input
                                       type="text"
                                       value={sec.title || ''}
                                       onChange={(e) => updateSectionData(sec.id, { title: e.target.value })}
                                       className="w-full bg-white border border-neutral-200 rounded-xl p-2 text-xs focus:border-trebol focus:outline-none"
                                     />
                                   </div>
                                   <div>
                                     <label className="font-bold text-carbon/80 block mb-1 font-mono">Subtítulo de la Sección</label>
                                     <input
                                       type="text"
                                       value={sec.subtitle || ''}
                                       onChange={(e) => updateSectionData(sec.id, { subtitle: e.target.value })}
                                       className="w-full bg-white border border-neutral-200 rounded-xl p-2 text-xs focus:border-trebol focus:outline-none"
                                     />
                                   </div>
                                 </div>
                               )}

                               {sec.type === 'cta' && (
                                 <div className="space-y-3 pt-1">
                                   <div>
                                     <label className="font-bold text-carbon/80 block mb-1 font-mono">Título de la Oferta CTA Final</label>
                                     <input
                                       type="text"
                                       value={sec.title || ''}
                                       onChange={(e) => updateSectionData(sec.id, { title: e.target.value })}
                                       className="w-full bg-white border border-neutral-200 rounded-xl p-2 text-xs focus:border-trebol focus:outline-none"
                                     />
                                   </div>
                                   <div>
                                     <label className="font-bold text-carbon/80 block mb-1 font-mono">Texto del Botón CTA</label>
                                     <input
                                       type="text"
                                       value={sec.ctaText || ''}
                                       onChange={(e) => updateSectionData(sec.id, { ctaText: e.target.value })}
                                       className="w-full bg-white border border-neutral-200 rounded-xl p-2 text-xs focus:border-trebol focus:outline-none"
                                     />
                                   </div>
                                 </div>
                               )}

                               {sec.type === 'faq' && (
                                 <div className="space-y-3 pt-1">
                                   <div>
                                     <label className="font-bold text-carbon/80 block mb-1 font-mono">Título FAQ</label>
                                     <input
                                       type="text"
                                       value={sec.title || ''}
                                       onChange={(e) => updateSectionData(sec.id, { title: e.target.value })}
                                       className="w-full bg-white border border-neutral-200 rounded-xl p-2 text-xs focus:border-trebol focus:outline-none"
                                     />
                                   </div>
                                 </div>
                               )}

                              {sec.type === 'testimonials' && (
                                <div className="space-y-3 pt-1">
                                  <div>
                                    <label className="font-bold text-carbon/80 block mb-1 font-mono">Título Testimonios</label>
                                    <input
                                      type="text"
                                      value={sec.title || ''}
                                      onChange={(e) => updateSectionData(sec.id, { title: e.target.value })}
                                      className="w-full bg-white border border-neutral-200 rounded-xl p-2 text-xs focus:border-trebol focus:outline-none"
                                    />
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* Previa Maquetada Modular de la Landing */}
                    <div className="lg:col-span-5 sticky top-24 space-y-4">
                      <div className="bg-white border border-neutral-200/90 rounded-[2.2rem] p-5 shadow-xl space-y-4">
                        <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                          <h3 className="font-extrabold text-carbon text-sm tracking-tight">Simulación Modular</h3>
                          <span className="text-[10px] font-mono font-bold text-trebol uppercase bg-trebol/10 px-2.5 py-0.5 rounded-full">
                            ESTILO: {(currentLanding.themeStyle || 'original').toUpperCase()}
                          </span>
                        </div>

                        {/* Renderizador de Previa */}
                        <div className="rounded-2xl overflow-hidden border border-neutral-200/80 shadow-inner">
                          <DynamicLandingRenderer landing={currentLanding} />
                        </div>

                        <Link
                          href={getLandingLiveUrl(currentLanding.slug)}
                          target="_blank"
                          className="w-full py-3.5 rounded-2xl bg-trebol text-white font-extrabold text-xs hover:bg-lime-600 transition-all flex items-center justify-center gap-2 cursor-pointer text-center shadow-lg"
                        >
                          <span>ABRIR LANDING PAGE COMPLETA EN VIVO</span>
                          <ExternalLink size={14} />
                        </Link>
                      </div>
                    </div>

                  </div>

                </main>
                )}
              </div>
            )}

            {/* MÓDULO 3: EDITOR DE BLOG */}
            {activeTab === 'blogs' && blogsLoading && (
              <div className="flex-1 flex items-center justify-center p-12">
                <div className="space-y-4 text-center">
                  <div className="w-10 h-10 rounded-full border-4 border-trebol border-t-transparent animate-spin mx-auto" />
                  <p className="text-carbon/40 font-mono text-xs">Cargando artículos desde el servidor…</p>
                </div>
              </div>
            )}

            {activeTab === 'blogs' && !blogsLoading && (
              <div className="flex-1 flex flex-col md:flex-row">

                {/* Sidebar Blogs */}
                <aside className="w-full md:w-72 bg-white border-r border-neutral-200/80 p-5 space-y-4 shadow-sm shrink-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[10.5px] font-mono font-bold text-neutral-400 uppercase tracking-wider">
                      Artículos ({blogsList.length})
                    </span>
                    <button
                      onClick={createNewBlog}
                      className="p-1.5 rounded-xl bg-trebol/10 text-trebol hover:bg-trebol hover:text-white transition-all cursor-pointer"
                      title="Crear Nuevo Artículo"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <div className="space-y-2 max-h-[72vh] overflow-y-auto pr-1">
                    {blogsList.length === 0 ? (
                      <div className="p-4 rounded-2xl bg-hueso border border-dashed border-neutral-300 text-center space-y-2">
                        <p className="text-[11px] text-neutral-400 font-mono">No hay artículos</p>
                        <button
                          onClick={createNewBlog}
                          className="px-3 py-1.5 rounded-xl bg-trebol text-white font-mono text-[10px] font-bold cursor-pointer hover:bg-carbon transition-all"
                        >
                          + Crear Artículo
                        </button>
                      </div>
                    ) : (
                      blogsList.map((blog) => (
                        <div
                          key={blog.id}
                          onClick={() => setSelectedBlogId(blog.id)}
                          className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-2 ${
                            selectedBlogId === blog.id
                              ? 'bg-trebol/10 border-trebol text-trebol shadow-sm'
                              : 'bg-hueso/60 border-neutral-200 text-carbon hover:bg-white'
                          }`}
                        >
                          <div className="min-w-0">
                            <span className="text-xs block truncate font-bold leading-snug">{blog.titulo}</span>
                            <span className="text-[10px] font-mono text-neutral-400 block mt-0.5 truncate">
                              {blog.categoria} · {blog.tiempo}
                            </span>
                            <span className={`text-[9px] font-mono font-bold mt-1 block ${blog.destacado ? 'text-amber-600' : 'text-neutral-300'}`}>
                              {blog.destacado ? '★ DESTACADO' : '○ Normal'}
                            </span>
                          </div>
                          {selectedBlogId === blog.id && (
                            <button
                              onClick={(e) => { e.stopPropagation(); deleteCurrentBlog(blog.id); }}
                              className="text-rose-400 hover:text-rose-600 p-1 cursor-pointer shrink-0 mt-0.5"
                              title="Eliminar Artículo"
                            >
                              <Trash2 size={13} />
                            </button>
                          )}
                        </div>
                      ))
                    )}
                  </div>

                  <button
                    onClick={saveBlogsToServer}
                    disabled={blogSaving}
                    className="w-full py-2.5 rounded-xl bg-trebol text-white font-mono font-bold text-xs flex items-center justify-center gap-2 hover:bg-lime-600 transition-all cursor-pointer shadow-md disabled:opacity-60"
                  >
                    <Save size={14} />
                    <span>{blogSaving ? 'Guardando…' : 'Guardar en Servidor'}</span>
                  </button>
                </aside>

                {/* Editor Principal Blog */}
                {!currentBlog ? (
                  <main className="flex-1 p-8 flex items-center justify-center">
                    <div className="max-w-md w-full bg-white rounded-[2.5rem] border border-neutral-200 p-8 text-center space-y-4 shadow-sm">
                      <div className="w-16 h-16 rounded-2xl bg-trebol/10 border border-trebol/20 flex items-center justify-center text-trebol mx-auto">
                        <BookOpen size={30} />
                      </div>
                      <h3 className="text-lg font-black text-carbon">No hay Artículos de Blog</h3>
                      <p className="text-xs text-carbon/70 font-light leading-relaxed">
                        Tienes 0 artículos publicados. Comienza redactando contenido de valor para tus clientes.
                      </p>
                      <button
                        onClick={createNewBlog}
                        className="px-6 py-3 rounded-2xl bg-trebol text-white font-black text-xs hover:bg-lime-600 transition-all cursor-pointer shadow-md inline-flex items-center gap-2"
                      >
                        <Plus size={16} /> Crear mi primer Artículo
                      </button>
                    </div>
                  </main>
                ) : (
                <main className="flex-1 p-6 md:p-8 overflow-y-auto space-y-6">

                  {blogSaved && (
                    <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-mono font-bold flex items-center justify-between shadow-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-trebol" />
                        <span>Artículo guardado en servidor correctamente.</span>
                      </div>
                      <span className="text-trebol">✓ Guardado</span>
                    </div>
                  )}

                  {/* Header del Artículo */}
                  <div className="bg-white p-6 rounded-3xl border border-neutral-200/80 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <BookOpen size={20} className="text-trebol" />
                        <h2 className="text-xl font-black text-carbon tracking-tight truncate max-w-sm">{currentBlog.titulo}</h2>
                      </div>
                      <span className="text-xs font-mono text-neutral-400 block">/{currentBlog.slug} · {currentBlog.categoria}</span>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <button
                        onClick={() => updateCurrentBlog({ destacado: !currentBlog.destacado })}
                        className={`px-4 py-2 rounded-xl font-mono text-xs font-bold cursor-pointer transition-all ${
                          currentBlog.destacado ? 'bg-amber-100 text-amber-800 border border-amber-300' : 'bg-hueso text-carbon border border-neutral-200'
                        }`}
                      >
                        {currentBlog.destacado ? '★ Destacado' : '☆ Marcar Destacado'}
                      </button>
                      <Link
                        href={`/insights/blog/${currentBlog.slug}`}
                        target="_blank"
                        className="px-4 py-2 rounded-xl bg-trebol text-white font-mono text-xs font-bold flex items-center gap-1.5 hover:bg-lime-600 transition-colors shadow-md"
                      >
                        <span>Ver en Sitio</span>
                        <ExternalLink size={14} />
                      </Link>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
                    <div className="xl:col-span-7 space-y-5">

                      {/* 1. METADATOS */}
                      <div className="bg-white p-6 rounded-3xl border border-neutral-200/80 shadow-sm space-y-4 text-xs">
                        <div className="flex items-center gap-2 text-trebol border-b border-neutral-100 pb-3">
                          <Tag size={16} />
                          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-carbon">1. Metadatos del Artículo</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="font-bold text-carbon/80 block mb-1 font-mono">Título del Artículo</label>
                            <input
                              type="text"
                              value={currentBlog.titulo || ''}
                              onChange={(e) => updateCurrentBlog({ titulo: e.target.value })}
                              className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-2.5 font-sans text-xs focus:border-trebol focus:outline-none"
                            />
                          </div>
                          <div>
                            <label className="font-bold text-carbon/80 block mb-1 font-mono">Slug (URL)</label>
                            <input
                              type="text"
                              value={currentBlog.slug || ''}
                              onChange={(e) => updateCurrentBlog({ slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                              className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-2.5 font-mono text-xs focus:border-trebol focus:outline-none"
                            />
                          </div>
                          <div>
                            <label className="font-bold text-carbon/80 block mb-1 font-mono">Categoría</label>
                            <select
                              value={currentBlog.categoria || ''}
                              onChange={(e) => updateCurrentBlog({ categoria: e.target.value })}
                              className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-2.5 font-sans text-xs focus:border-trebol focus:outline-none"
                            >
                              {BLOG_CATEGORIAS.map((cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="font-bold text-carbon/80 block mb-1 font-mono">Tiempo de Lectura</label>
                            <input
                              type="text"
                              value={currentBlog.tiempo || ''}
                              onChange={(e) => updateCurrentBlog({ tiempo: e.target.value })}
                              placeholder="ej. 8 min"
                              className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-2.5 font-sans text-xs focus:border-trebol focus:outline-none"
                            />
                          </div>
                          <div>
                            <label className="font-bold text-carbon/80 block mb-1 font-mono">Fecha de Publicación</label>
                            <input
                              type="text"
                              value={currentBlog.fecha || ''}
                              onChange={(e) => updateCurrentBlog({ fecha: e.target.value })}
                              placeholder="ej. 22 julio, 2026"
                              className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-2.5 font-sans text-xs focus:border-trebol focus:outline-none"
                            />
                          </div>
                          <div>
                            <label className="font-bold text-carbon/80 block mb-1 font-mono">Autor</label>
                            <input
                              type="text"
                              value={currentBlog.autor || ''}
                              onChange={(e) => updateCurrentBlog({ autor: e.target.value })}
                              className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-2.5 font-sans text-xs focus:border-trebol focus:outline-none"
                            />
                          </div>
                          <div className="sm:col-span-2">
                            <label className="font-bold text-carbon/80 block mb-1 font-mono">URL de Imagen de Portada</label>
                            <input
                              type="text"
                              value={currentBlog.imagen || ''}
                              onChange={(e) => updateCurrentBlog({ imagen: e.target.value })}
                              placeholder="https://..."
                              className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-2.5 font-mono text-xs focus:border-trebol focus:outline-none"
                            />
                          </div>
                          <div className="sm:col-span-2">
                            <label className="font-bold text-carbon/80 block mb-1 font-mono">Extracto / Descripción Breve (aparece en la lista)</label>
                            <textarea
                              value={currentBlog.extracto || ''}
                              onChange={(e) => updateCurrentBlog({ extracto: e.target.value })}
                              rows={2}
                              className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-2.5 font-sans text-xs focus:border-trebol focus:outline-none resize-none"
                            />
                          </div>
                        </div>
                      </div>

                      {/* 2. PLANTILLA */}
                      <div className="bg-white p-6 rounded-3xl border border-neutral-200/80 shadow-sm space-y-4 text-xs">
                        <div className="flex items-center gap-2 text-trebol border-b border-neutral-100 pb-3">
                          <Layout size={16} />
                          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-carbon">2. Plantilla Visual del Artículo</h3>
                        </div>
                        <p className="text-[10px] text-neutral-400 font-mono">
                          Selecciona el diseño de página que usará este artículo en el sitio público.
                        </p>
                        <div className="grid grid-cols-2 gap-2.5">
                          {BLOG_TEMPLATES.map((tmpl) => (
                            <button
                              key={tmpl.id}
                              type="button"
                              onClick={() => updateCurrentBlog({ plantilla: tmpl.id })}
                              className={`p-4 rounded-2xl border text-left cursor-pointer transition-all space-y-1.5 ${
                                currentBlog.plantilla === tmpl.id ? tmpl.activeColor : tmpl.color
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <span className="text-base">{tmpl.icon}</span>
                                <span className="font-bold text-[11px]">{tmpl.label}</span>
                              </div>
                              <p className="text-[10px] leading-relaxed opacity-80 font-normal">{tmpl.desc}</p>
                              {currentBlog.plantilla === tmpl.id && (
                                <span className="text-[9px] font-mono font-bold uppercase opacity-80 block mt-1">✓ Plantilla activa</span>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* 3. CONTENIDO */}
                      <div className="bg-white p-6 rounded-3xl border border-neutral-200/80 shadow-sm space-y-5 text-xs">
                        <div className="flex items-center gap-2 text-trebol border-b border-neutral-100 pb-3">
                          <AlignLeft size={16} />
                          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-carbon">3. Contenido del Artículo</h3>
                        </div>

                        {/* Introducción */}
                        <div>
                          <label className="font-bold text-carbon/80 block mb-1.5 font-mono flex items-center gap-1.5">
                            <AlignLeft size={12} /> Introducción
                          </label>
                          <textarea
                            value={currentBlog.content?.introduccion || ''}
                            onChange={(e) => updateCurrentBlog({ content: { ...currentBlog.content, introduccion: e.target.value } })}
                            rows={4}
                            placeholder="Párrafo introductorio que aparece al inicio del artículo..."
                            className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-3 font-sans text-xs focus:border-trebol focus:outline-none resize-none leading-relaxed"
                          />
                        </div>

                        {/* Secciones */}
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <label className="font-bold text-carbon/80 font-mono flex items-center gap-1.5">
                              <List size={12} /> Secciones del Artículo ({(currentBlog.content?.secciones || []).length})
                            </label>
                            <button
                              onClick={addBlogSection}
                              className="px-3 py-1.5 rounded-xl bg-trebol/10 text-trebol hover:bg-trebol hover:text-white font-mono font-bold text-[11px] flex items-center gap-1.5 cursor-pointer transition-all"
                            >
                              <Plus size={12} /> Agregar Sección
                            </button>
                          </div>

                          {(currentBlog.content?.secciones || []).map((sec, idx) => (
                            <div key={idx} className="border border-neutral-200 rounded-2xl p-4 space-y-3 bg-hueso/50">
                              <div className="flex items-center justify-between">
                                <span className="font-mono font-bold text-carbon/60 text-[10px] uppercase tracking-wider">Sección {idx + 1}</span>
                                <button
                                  onClick={() => removeBlogSection(idx)}
                                  className="text-rose-400 hover:text-rose-600 cursor-pointer p-1 transition-colors"
                                >
                                  <Trash2 size={13} />
                                </button>
                              </div>
                              <div>
                                <label className="font-bold text-carbon/70 block mb-1 font-mono text-[10px] uppercase">Subtítulo / Encabezado</label>
                                <input
                                  type="text"
                                  value={sec.subtitulo || ''}
                                  onChange={(e) => updateBlogSection(idx, { subtitulo: e.target.value })}
                                  className="w-full bg-white border border-neutral-200 text-carbon rounded-xl p-2.5 font-sans text-xs focus:border-trebol focus:outline-none"
                                />
                              </div>
                              <div>
                                <label className="font-bold text-carbon/70 block mb-1 font-mono text-[10px] uppercase">Párrafo de Contenido</label>
                                <textarea
                                  value={sec.texto || ''}
                                  onChange={(e) => updateBlogSection(idx, { texto: e.target.value })}
                                  rows={3}
                                  className="w-full bg-white border border-neutral-200 text-carbon rounded-xl p-2.5 font-sans text-xs focus:border-trebol focus:outline-none resize-none leading-relaxed"
                                />
                              </div>
                              <div>
                                <label className="font-bold text-carbon/70 block mb-1 font-mono text-[10px] uppercase flex items-center gap-1">
                                  <Quote size={11} /> Frase Destacada (blockquote, opcional)
                                </label>
                                <input
                                  type="text"
                                  value={sec.fraseDestacada || ''}
                                  onChange={(e) => updateBlogSection(idx, { fraseDestacada: e.target.value })}
                                  placeholder="Dato impactante o cita memorable..."
                                  className="w-full bg-white border border-neutral-200 text-carbon rounded-xl p-2.5 font-sans text-xs focus:border-trebol focus:outline-none"
                                />
                              </div>
                              <div>
                                <label className="font-bold text-carbon/70 block mb-1 font-mono text-[10px] uppercase flex items-center gap-1">
                                  <List size={11} /> Bullets (uno por línea, opcional)
                                </label>
                                <textarea
                                  value={(sec.bullets || []).join('\n')}
                                  onChange={(e) => updateBlogSection(idx, { bullets: e.target.value.split('\n').filter(Boolean) })}
                                  rows={3}
                                  placeholder={"Beneficio o punto clave 1\nBeneficio o punto clave 2\nBeneficio o punto clave 3"}
                                  className="w-full bg-white border border-neutral-200 text-carbon rounded-xl p-2.5 font-mono text-[11px] focus:border-trebol focus:outline-none resize-none leading-relaxed"
                                />
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Conclusión */}
                        <div>
                          <label className="font-bold text-carbon/80 block mb-1.5 font-mono flex items-center gap-1.5">
                            <AlignLeft size={12} /> Conclusión / Cierre
                          </label>
                          <textarea
                            value={currentBlog.content?.conclusion || ''}
                            onChange={(e) => updateCurrentBlog({ content: { ...currentBlog.content, conclusion: e.target.value } })}
                            rows={3}
                            placeholder="Párrafo de cierre y llamada a la acción..."
                            className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-3 font-sans text-xs focus:border-trebol focus:outline-none resize-none leading-relaxed"
                          />
                        </div>

                        {/* CTA */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                          <div>
                            <label className="font-bold text-carbon/80 block mb-1 font-mono flex items-center gap-1.5">
                              <Link2 size={11} /> Texto del Botón CTA
                            </label>
                            <input
                              type="text"
                              value={currentBlog.content?.ctaText || ''}
                              onChange={(e) => updateCurrentBlog({ content: { ...currentBlog.content, ctaText: e.target.value } })}
                              className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-2.5 font-sans text-xs focus:border-trebol focus:outline-none"
                            />
                          </div>
                          <div>
                            <label className="font-bold text-carbon/80 block mb-1 font-mono flex items-center gap-1.5">
                              <Link2 size={11} /> URL del CTA (WhatsApp / Enlace)
                            </label>
                            <input
                              type="text"
                              value={currentBlog.content?.ctaUrl || ''}
                              onChange={(e) => updateCurrentBlog({ content: { ...currentBlog.content, ctaUrl: e.target.value } })}
                              placeholder="https://wa.me/..."
                              className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-2.5 font-mono text-xs focus:border-trebol focus:outline-none"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Preview Lateral */}
                    <div className="xl:col-span-5 sticky top-24 space-y-4">
                      <div className="bg-white border border-neutral-200/90 rounded-[2.2rem] p-5 shadow-xl space-y-4 overflow-hidden">
                        <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-trebol animate-ping" />
                            <h3 className="font-extrabold text-carbon text-sm tracking-tight">Vista Previa</h3>
                          </div>
                          {currentBlog.plantilla && (() => {
                            const tmpl = BLOG_TEMPLATES.find(t => t.id === currentBlog.plantilla);
                            return tmpl ? (
                              <span className={`text-[9px] font-mono font-bold uppercase px-2.5 py-1 rounded-full border ${tmpl.activeColor}`}>
                                {tmpl.icon} {tmpl.label}
                              </span>
                            ) : null;
                          })()}
                        </div>

                        {/* Imagen de Portada */}
                        {currentBlog.imagen && (
                          <div className="rounded-2xl overflow-hidden aspect-video bg-neutral-100">
                            <img
                              src={currentBlog.imagen}
                              alt={currentBlog.titulo}
                              className="w-full h-full object-cover"
                              onError={(e) => { e.target.style.display = 'none'; }}
                            />
                          </div>
                        )}

                        <div className="space-y-3">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="px-2.5 py-0.5 rounded-full bg-trebol/10 text-trebol text-[10px] font-mono font-bold">
                              {currentBlog.categoria}
                            </span>
                            {currentBlog.destacado && (
                              <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[10px] font-mono font-bold">
                                ★ DESTACADO
                              </span>
                            )}
                            <span className="text-neutral-400 text-[10px] font-mono">{currentBlog.tiempo}</span>
                          </div>

                          <h4 className="font-black text-carbon text-sm leading-tight">{currentBlog.titulo}</h4>
                          <p className="text-xs text-carbon/70 leading-relaxed">{currentBlog.extracto}</p>

                          {currentBlog.content?.introduccion && (
                            <p className="text-xs text-carbon/80 leading-relaxed border-l-2 border-trebol/30 pl-3 italic">
                              {currentBlog.content.introduccion.slice(0, 180)}{currentBlog.content.introduccion.length > 180 ? '…' : ''}
                            </p>
                          )}

                          {(currentBlog.content?.secciones || []).slice(0, 2).map((sec, i) => (
                            <div key={i} className="space-y-1.5">
                              {sec.subtitulo && <p className="font-bold text-carbon text-xs">{sec.subtitulo}</p>}
                              {sec.fraseDestacada && (
                                <div className="bg-trebol/8 border-l-4 border-trebol px-3 py-2 rounded-r-xl">
                                  <p className="text-xs text-carbon font-semibold italic">"{sec.fraseDestacada}"</p>
                                </div>
                              )}
                              {(sec.bullets || []).slice(0, 3).map((b, j) => (
                                <div key={j} className="flex items-start gap-1.5 text-[11px] text-carbon/80">
                                  <span className="text-trebol font-bold mt-0.5">✓</span>
                                  <span>{b}</span>
                                </div>
                              ))}
                            </div>
                          ))}

                          {currentBlog.content?.ctaText && (
                            <div className="pt-2">
                              <div className="w-full py-3 px-4 rounded-xl bg-trebol text-white font-extrabold text-xs text-center shadow-md">
                                {currentBlog.content.ctaText}
                              </div>
                            </div>
                          )}

                          <div className="pt-2 border-t border-neutral-100 flex items-center gap-2 text-[10px] text-neutral-400 font-mono">
                            <User2 size={11} />
                            <span>{currentBlog.autor}</span>
                            <span>·</span>
                            <Calendar size={11} />
                            <span>{currentBlog.fecha}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
                )}
              </div>
            )}

            {/* MÓDULO 4: CASOS DE ÉXITO & TESTIMONIOS */}
            {activeTab === 'casos' && casosLoading && (
              <div className="flex-1 flex items-center justify-center p-12">
                <div className="space-y-4 text-center">
                  <div className="w-10 h-10 rounded-full border-4 border-trebol border-t-transparent animate-spin mx-auto" />
                  <p className="text-carbon/40 font-mono text-xs">Cargando casos de éxito desde el servidor…</p>
                </div>
              </div>
            )}

            {activeTab === 'casos' && !casosLoading && (
              <div className="flex-1 flex flex-col md:flex-row">

                {/* Sidebar Casos */}
                <aside className="w-full md:w-72 bg-white border-r border-neutral-200/80 p-5 space-y-4 shadow-sm shrink-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[10.5px] font-mono font-bold text-neutral-400 uppercase tracking-wider">
                      Casos de Éxito ({casosList.length})
                    </span>
                    <button
                      onClick={createNewCaso}
                      className="p-1.5 rounded-xl bg-trebol/10 text-trebol hover:bg-trebol hover:text-white transition-all cursor-pointer"
                      title="Crear Nuevo Caso"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <div className="space-y-2 max-h-[72vh] overflow-y-auto pr-1">
                    {casosList.length === 0 ? (
                      <div className="p-4 rounded-2xl bg-hueso border border-dashed border-neutral-300 text-center space-y-2">
                        <p className="text-[11px] text-neutral-400 font-mono">No hay casos creados</p>
                        <button
                          onClick={createNewCaso}
                          className="px-3 py-1.5 rounded-xl bg-trebol text-white font-mono text-[10px] font-bold cursor-pointer hover:bg-carbon transition-all"
                        >
                          + Crear Caso
                        </button>
                      </div>
                    ) : (
                      casosList.map((caso) => (
                        <div
                          key={caso.id}
                          onClick={() => setSelectedCasoId(caso.id)}
                          className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-2 ${
                            selectedCasoId === caso.id
                              ? 'bg-trebol/10 border-trebol text-trebol shadow-sm'
                              : 'bg-hueso/60 border-neutral-200 text-carbon hover:bg-white'
                          }`}
                        >
                          <div className="min-w-0">
                            <span className="text-xs block truncate font-bold leading-snug">{caso.empresa}</span>
                            <span className="text-[10px] font-mono text-neutral-400 block mt-0.5 truncate">
                              {caso.categoria} · {caso.lugar}
                            </span>
                            <div className="flex items-center gap-1.5 mt-1">
                              <span className={`text-[9px] font-mono font-bold ${caso.visible !== false ? 'text-trebol' : 'text-neutral-400'}`}>
                                {caso.visible !== false ? '● Visible' : '○ Oculto'}
                              </span>
                            </div>
                          </div>
                          {selectedCasoId === caso.id && (
                            <button
                              onClick={(e) => { e.stopPropagation(); deleteCurrentCaso(caso.id); }}
                              className="text-rose-400 hover:text-rose-600 p-1 cursor-pointer shrink-0 mt-0.5"
                              title="Eliminar Caso"
                            >
                              <Trash2 size={13} />
                            </button>
                          )}
                        </div>
                      ))
                    )}
                  </div>
                </aside>

                {/* Main Content Editor de Casos */}
                {!currentCaso ? (
                  <main className="flex-1 p-8 flex items-center justify-center">
                    <div className="max-w-md w-full bg-white rounded-[2.5rem] border border-neutral-200 p-8 text-center space-y-5 shadow-sm">
                      <div className="w-16 h-16 rounded-2xl bg-trebol/10 border border-trebol/20 flex items-center justify-center text-trebol mx-auto">
                        <Award size={30} />
                      </div>
                      <h3 className="text-lg font-black text-carbon">No hay Casos de Éxito</h3>
                      <p className="text-xs text-carbon/70 font-light leading-relaxed">
                        Has eliminado todos los casos de éxito de la lista. Puedes guardar esta lista vacía en el servidor, restaurar los casos iniciales o crear uno nuevo.
                      </p>

                      {casosSaved && (
                        <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-mono font-bold flex items-center justify-center gap-2 shadow-sm">
                          <CheckCircle2 size={16} className="text-trebol" />
                          <span>¡Guardado correctamente en servidor!</span>
                        </div>
                      )}

                      <div className="flex flex-col gap-2.5 pt-2">
                        <button
                          onClick={saveCasosToServer}
                          disabled={casosSaving}
                          className="w-full py-3 px-4 rounded-2xl bg-carbon text-white font-bold text-xs hover:bg-trebol transition-all cursor-pointer shadow-md flex items-center justify-center gap-2 disabled:opacity-60"
                        >
                          {casosSaving ? (
                            <>
                              <RefreshCw size={14} className="animate-spin" />
                              <span>Guardando en servidor…</span>
                            </>
                          ) : (
                            <>
                              <Save size={14} />
                              <span>Guardar Cambios en Servidor (Guardar Lista Vacía)</span>
                            </>
                          )}
                        </button>

                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={createNewCaso}
                            className="py-2.5 px-3 rounded-2xl bg-trebol text-white font-bold text-xs hover:bg-lime-600 transition-all cursor-pointer shadow-sm flex items-center justify-center gap-1.5"
                          >
                            <Plus size={14} /> Crear Caso
                          </button>
                          <button
                            onClick={restoreDefaultCasos}
                            className="py-2.5 px-3 rounded-2xl bg-hueso border border-neutral-200 text-carbon/80 font-bold text-xs hover:bg-white transition-all cursor-pointer shadow-sm flex items-center justify-center gap-1.5"
                          >
                            <RefreshCw size={14} /> Restaurar Iniciales
                          </button>
                        </div>
                      </div>
                    </div>
                  </main>
                ) : (
                <main className="flex-1 overflow-y-auto max-h-[88vh] p-6 lg:p-8 space-y-6">

                  {/* Header Top Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-3xl border border-neutral-200/80 shadow-sm">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">
                          Editando Caso:
                        </span>
                        <span className="text-xs font-mono font-black text-trebol bg-trebol/10 px-2 py-0.5 rounded-md">
                          {currentCaso.id}
                        </span>
                      </div>
                      <h2 className="text-lg font-black text-carbon tracking-tight mt-0.5">{currentCaso.empresa}</h2>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Link
                        href="/casos-de-exito"
                        target="_blank"
                        className="px-3.5 py-2 rounded-xl bg-hueso border border-neutral-200 text-carbon/70 hover:text-trebol font-mono text-xs font-bold flex items-center gap-1.5 transition-all hover:bg-white"
                      >
                        <ExternalLink size={13} />
                        <span>Ver Página</span>
                      </Link>

                      <button
                        onClick={saveCasosToServer}
                        disabled={casosSaving}
                        className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-md ${
                          casosSaved
                            ? 'bg-emerald-600 text-white'
                            : 'bg-carbon text-white hover:bg-trebol'
                        }`}
                      >
                        {casosSaving ? (
                          <>
                            <RefreshCw size={13} className="animate-spin" />
                            <span>Guardando…</span>
                          </>
                        ) : casosSaved ? (
                          <>
                            <CheckCircle2 size={13} />
                            <span>¡Guardado en Servidor!</span>
                          </>
                        ) : (
                          <>
                            <Save size={13} />
                            <span>Guardar en Servidor</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Editor Grid: Form (Left) + Preview (Right) */}
                  <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

                    {/* Columna Izquierda: Formularios */}
                    <div className="xl:col-span-7 space-y-6">

                      {/* 1. INFORMACIÓN PRINCIPAL */}
                      <div className="bg-white p-6 rounded-3xl border border-neutral-200/80 shadow-sm space-y-4 text-xs">
                        <div className="flex items-center gap-2 text-trebol border-b border-neutral-100 pb-3">
                          <Award size={16} />
                          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-carbon">1. Datos del Cliente & Caso</h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="font-bold text-carbon/80 block mb-1 font-mono">Nombre de la Empresa</label>
                            <input
                              type="text"
                              value={currentCaso.empresa || ''}
                              onChange={(e) => updateCurrentCaso({ empresa: e.target.value })}
                              placeholder="Ej: Distribuidora Familiar."
                              className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-2.5 font-sans text-xs focus:border-trebol focus:outline-none"
                            />
                          </div>

                          <div>
                            <label className="font-bold text-carbon/80 block mb-1 font-mono">Ubicación / Ciudad</label>
                            <input
                              type="text"
                              value={currentCaso.lugar || ''}
                              onChange={(e) => updateCurrentCaso({ lugar: e.target.value })}
                              placeholder="Ej: Guanajuato, México"
                              className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-2.5 font-sans text-xs focus:border-trebol focus:outline-none"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="font-bold text-carbon/80 block mb-1 font-mono">Categoría del Servicio</label>
                            <select
                              value={currentCaso.categoria || 'Marketing Estratégico'}
                              onChange={(e) => updateCurrentCaso({ categoria: e.target.value })}
                              className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-2.5 font-sans text-xs focus:border-trebol focus:outline-none cursor-pointer"
                            >
                              {CASOS_CATEGORIAS.map((cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="font-bold text-carbon/80 block mb-1 font-mono">Estilo de Fondo Tarjeta</label>
                            <select
                              value={currentCaso.bgColor || 'bg-white/90 border-white'}
                              onChange={(e) => updateCurrentCaso({ bgColor: e.target.value })}
                              className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-2.5 font-sans text-xs focus:border-trebol focus:outline-none cursor-pointer"
                            >
                              <option value="bg-white/90 border-white">Fondo Blanco Puro</option>
                              <option value="bg-[#EEF7E6] border-trebol/30">Fondo Verde Trébol Suave</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="font-bold text-carbon/80 block mb-1 font-mono">URL Imagen del Caso</label>
                          <input
                            type="text"
                            value={currentCaso.image || ''}
                            onChange={(e) => updateCurrentCaso({ image: e.target.value })}
                            placeholder="https://images.unsplash.com/..."
                            className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-2.5 font-mono text-xs focus:border-trebol focus:outline-none"
                          />
                        </div>

                        <div className="pt-2 flex items-center justify-between border-t border-neutral-100">
                          <div>
                            <span className="font-bold text-carbon block">Visibilidad en la Web</span>
                            <span className="text-[10px] text-neutral-400 font-mono">Mostrar este caso en la página pública de casos de éxito.</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => updateCurrentCaso({ visible: currentCaso.visible === false ? true : false })}
                            className="cursor-pointer"
                          >
                            {currentCaso.visible !== false ? (
                              <ToggleRight size={28} className="text-trebol" />
                            ) : (
                              <ToggleLeft size={28} className="text-neutral-300" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* 2. DESAFÍO Y SOLUCIÓN */}
                      <div className="bg-white p-6 rounded-3xl border border-neutral-200/80 shadow-sm space-y-4 text-xs">
                        <div className="flex items-center gap-2 text-trebol border-b border-neutral-100 pb-3">
                          <AlignLeft size={16} />
                          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-carbon">2. Desafío & Solución</h3>
                        </div>

                        <div>
                          <label className="font-bold text-carbon/80 block mb-1.5 font-mono">El Desafío Inicial (Problema)</label>
                          <textarea
                            value={currentCaso.reto || ''}
                            onChange={(e) => updateCurrentCaso({ reto: e.target.value })}
                            rows={3}
                            placeholder="Describe el estado previo, cuellos de botella o falta de resultados del cliente..."
                            className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-3 font-sans text-xs focus:border-trebol focus:outline-none resize-none leading-relaxed"
                          />
                        </div>

                        <div>
                          <label className="font-bold text-carbon/80 block mb-1.5 font-mono">La Solución Trébol (Estrategia)</label>
                          <textarea
                            value={currentCaso.solucion || ''}
                            onChange={(e) => updateCurrentCaso({ solucion: e.target.value })}
                            rows={3}
                            placeholder="Describe el plan de acción, tecnologías y servicios implementados..."
                            className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-3 font-sans text-xs focus:border-trebol focus:outline-none resize-none leading-relaxed"
                          />
                        </div>
                      </div>

                      {/* 3. MÉTRICAS DE RESULTADOS */}
                      <div className="bg-white p-6 rounded-3xl border border-neutral-200/80 shadow-sm space-y-4 text-xs">
                        <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                          <div className="flex items-center gap-2 text-trebol">
                            <Sparkles size={16} />
                            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-carbon">3. Métricas de Impacto (Resultados)</h3>
                          </div>
                          {(currentCaso.resultados || []).length < 4 && (
                            <button
                              type="button"
                              onClick={addStatToCurrentCaso}
                              className="px-2.5 py-1 rounded-lg bg-trebol/10 text-trebol hover:bg-trebol hover:text-white text-[10px] font-mono font-bold transition-all cursor-pointer flex items-center gap-1"
                            >
                              <Plus size={12} /> Agregar Métrica
                            </button>
                          )}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {(currentCaso.resultados || []).map((r, i) => (
                            <div key={i} className="p-3.5 rounded-2xl bg-hueso border border-neutral-200 space-y-2 relative group">
                              <div className="flex items-center justify-between">
                                <span className="text-[10px] font-mono font-bold text-neutral-400">Métrica #{i + 1}</span>
                                {(currentCaso.resultados || []).length > 1 && (
                                  <button
                                    type="button"
                                    onClick={() => removeStatFromCurrentCaso(i)}
                                    className="text-rose-400 hover:text-rose-600 p-0.5 cursor-pointer"
                                  >
                                    <Trash2 size={12} />
                                  </button>
                                )}
                              </div>
                              <div>
                                <label className="text-[9px] font-mono text-neutral-500 block mb-0.5">Dato / Número</label>
                                <input
                                  type="text"
                                  value={r.stat || ''}
                                  onChange={(e) => updateStatInCurrentCaso(i, 'stat', e.target.value)}
                                  placeholder="+250%"
                                  className="w-full bg-white border border-neutral-200 text-trebol font-black text-sm rounded-lg p-1.5 focus:border-trebol focus:outline-none"
                                />
                              </div>
                              <div>
                                <label className="text-[9px] font-mono text-neutral-500 block mb-0.5">Etiqueta</label>
                                <input
                                  type="text"
                                  value={r.label || ''}
                                  onChange={(e) => updateStatInCurrentCaso(i, 'label', e.target.value)}
                                  placeholder="Tráfico orgánico"
                                  className="w-full bg-white border border-neutral-200 text-carbon text-xs rounded-lg p-1.5 focus:border-trebol focus:outline-none"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* Columna Derecha: Vista Previa en Vivo de Caso */}
                    <div className="xl:col-span-5 sticky top-24 space-y-6">

                      {/* Preview Tarjeta del Caso */}
                      <div className="bg-white border border-neutral-200/90 rounded-[2.2rem] p-5 shadow-xl space-y-4 overflow-hidden">
                        <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-trebol animate-ping" />
                            <h3 className="font-extrabold text-carbon text-sm tracking-tight">Vista Previa: Tarjeta de Caso</h3>
                          </div>
                          <span className="text-[10px] font-mono text-neutral-400">{currentCaso.categoria}</span>
                        </div>

                        <div className={`rounded-3xl p-5 border space-y-4 ${currentCaso.bgColor || 'bg-white/90 border-white'}`}>
                          {/* Imagen */}
                          {currentCaso.image && (
                            <div className="rounded-2xl overflow-hidden aspect-video bg-neutral-100">
                              <img
                                src={currentCaso.image}
                                alt={currentCaso.empresa}
                                className="w-full h-full object-cover"
                                onError={(e) => { e.target.style.display = 'none'; }}
                              />
                            </div>
                          )}

                          <div>
                            <span className="text-[10px] font-mono font-bold text-trebol uppercase tracking-wider">{currentCaso.lugar}</span>
                            <h4 className="font-black text-carbon text-xl leading-tight mt-0.5">{currentCaso.empresa}</h4>
                          </div>

                          <div className="space-y-2 text-xs">
                            <div className="p-3 rounded-xl bg-white/90 border border-gray-200">
                              <span className="text-[10px] font-bold text-trebol uppercase block mb-0.5">Desafío</span>
                              <p className="text-carbon/80 text-[11px] leading-relaxed">{currentCaso.reto}</p>
                            </div>

                            <div className="p-3 rounded-xl bg-[#EEF7E6] border border-trebol/30">
                              <span className="text-[10px] font-bold text-trebol uppercase block mb-0.5">Solución Trébol</span>
                              <p className="text-carbon/90 text-[11px] font-medium leading-relaxed">{currentCaso.solucion}</p>
                            </div>
                          </div>

                          {/* Grid Resultados */}
                          <div className="grid grid-cols-3 gap-2 pt-1">
                            {(currentCaso.resultados || []).map((r, i) => (
                              <div key={i} className="p-2.5 rounded-xl bg-white border border-gray-200 text-center shadow-sm">
                                <p className="text-base font-black text-trebol">{r.stat}</p>
                                <p className="text-[9px] text-carbon/60 leading-tight">{r.label}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </main>
              )}
              </div>
            )}

            {/* MÓDULO 5: TESTIMONIOS & RESEÑAS */}
            {activeTab === 'testimonios' && testimoniosLoading && (
              <div className="flex-1 flex items-center justify-center p-12">
                <div className="space-y-4 text-center">
                  <div className="w-10 h-10 rounded-full border-4 border-trebol border-t-transparent animate-spin mx-auto" />
                  <p className="text-carbon/40 font-mono text-xs">Cargando testimonios desde el servidor…</p>
                </div>
              </div>
            )}

            {activeTab === 'testimonios' && !testimoniosLoading && (
              <div className="flex-1 flex flex-col md:flex-row">

                {/* Sidebar Testimonios */}
                <aside className="w-full md:w-72 bg-white border-r border-neutral-200/80 p-5 space-y-4 shadow-sm shrink-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[10.5px] font-mono font-bold text-neutral-400 uppercase tracking-wider">
                      Testimonios ({testimoniosList.length})
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={saveTestimoniosToServer}
                        disabled={testimoniosSaving}
                        className="p-1.5 rounded-xl bg-carbon text-white hover:bg-trebol transition-all cursor-pointer disabled:opacity-50"
                        title="Guardar Cambios en Servidor"
                      >
                        <Save size={14} />
                      </button>
                      <button
                        onClick={createNewTestimonio}
                        className="p-1.5 rounded-xl bg-trebol/10 text-trebol hover:bg-trebol hover:text-white transition-all cursor-pointer"
                        title="Crear Nuevo Testimonio"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2 max-h-[72vh] overflow-y-auto pr-1">
                    {testimoniosList.length === 0 ? (
                      <div className="p-4 rounded-2xl bg-hueso border border-dashed border-neutral-300 text-center space-y-2">
                        <p className="text-[11px] text-neutral-400 font-mono">No hay testimonios</p>
                        <div className="flex flex-col gap-1.5 pt-1">
                          <button
                            onClick={createNewTestimonio}
                            className="w-full py-1.5 rounded-xl bg-trebol text-white font-mono text-[10px] font-bold cursor-pointer hover:bg-carbon transition-all"
                          >
                            + Crear Testimonio
                          </button>
                          <button
                            onClick={restoreDefaultTestimonios}
                            className="w-full py-1.5 rounded-xl bg-neutral-200 text-carbon font-mono text-[10px] font-bold cursor-pointer hover:bg-neutral-300 transition-all"
                          >
                            Restaurar Iniciales
                          </button>
                        </div>
                      </div>
                    ) : (
                      testimoniosList.map((testimonio) => (
                        <div
                          key={testimonio.id}
                          onClick={() => setSelectedTestimonioId(testimonio.id)}
                          className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-2 ${
                            selectedTestimonioId === testimonio.id
                              ? 'bg-trebol/10 border-trebol text-trebol shadow-sm'
                              : 'bg-hueso/60 border-neutral-200 text-carbon hover:bg-white'
                          }`}
                        >
                          <div className="min-w-0">
                            <span className="text-xs block truncate font-bold leading-snug">{testimonio.cliente}</span>
                            <span className="text-[10px] font-mono text-neutral-400 block mt-0.5 truncate">
                              {testimonio.cargo ? `${testimonio.cargo} · ` : ''}{testimonio.empresa}
                            </span>
                            <div className="flex items-center gap-1.5 mt-1">
                              <span className={`text-[9px] font-mono font-bold ${testimonio.visible !== false ? 'text-trebol' : 'text-neutral-400'}`}>
                                {testimonio.visible !== false ? '● Activo' : '○ Oculto'}
                              </span>
                              <span className="text-[9px] font-mono text-amber-600">
                                {'★'.repeat(testimonio.rating || 5)}
                              </span>
                            </div>
                          </div>
                          {selectedTestimonioId === testimonio.id && (
                            <button
                              onClick={(e) => { e.stopPropagation(); deleteCurrentTestimonio(testimonio.id); }}
                              className="text-rose-400 hover:text-rose-600 p-1 cursor-pointer shrink-0 mt-0.5"
                              title="Eliminar Testimonio"
                            >
                              <Trash2 size={13} />
                            </button>
                          )}
                        </div>
                      ))
                    )}
                  </div>
                </aside>

                {/* Main Content Editor de Testimonios */}
                {!currentTestimonio ? (
                  <main className="flex-1 p-8 flex items-center justify-center">
                    <div className="max-w-md w-full bg-white rounded-[2.5rem] border border-neutral-200 p-8 text-center space-y-5 shadow-sm">
                      <div className="w-16 h-16 rounded-2xl bg-trebol/10 border border-trebol/20 flex items-center justify-center text-trebol mx-auto">
                        <Quote size={30} />
                      </div>
                      <h3 className="text-lg font-black text-carbon">No hay Testimonios creados</h3>
                      <p className="text-xs text-carbon/70 font-light leading-relaxed">
                        Has eliminado todos los testimonios de la lista. Puedes guardar esta lista vacía en el servidor, restaurar los testimonios por defecto o crear uno nuevo.
                      </p>

                      {testimoniosSaved && (
                        <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-mono font-bold flex items-center justify-center gap-2 shadow-sm">
                          <CheckCircle2 size={16} className="text-trebol" />
                          <span>¡Guardado correctamente en servidor!</span>
                        </div>
                      )}

                      <div className="flex flex-col gap-2.5 pt-2">
                        <button
                          onClick={saveTestimoniosToServer}
                          disabled={testimoniosSaving}
                          className="w-full py-3 px-4 rounded-2xl bg-carbon text-white font-bold text-xs hover:bg-trebol transition-all cursor-pointer shadow-md flex items-center justify-center gap-2 disabled:opacity-60"
                        >
                          {testimoniosSaving ? (
                            <>
                              <RefreshCw size={14} className="animate-spin" />
                              <span>Guardando cambios en servidor…</span>
                            </>
                          ) : (
                            <>
                              <Save size={14} />
                              <span>Guardar Cambios en Servidor (Guardar Lista Vacía)</span>
                            </>
                          )}
                        </button>

                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={createNewTestimonio}
                            className="py-2.5 px-3 rounded-2xl bg-trebol text-white font-bold text-xs hover:bg-lime-600 transition-all cursor-pointer shadow-sm flex items-center justify-center gap-1.5"
                          >
                            <Plus size={14} /> Crear Testimonio
                          </button>
                          <button
                            onClick={restoreDefaultTestimonios}
                            className="py-2.5 px-3 rounded-2xl bg-hueso border border-neutral-200 text-carbon/80 font-bold text-xs hover:bg-white transition-all cursor-pointer shadow-sm flex items-center justify-center gap-1.5"
                          >
                            <RefreshCw size={14} /> Restaurar Iniciales
                          </button>
                        </div>
                      </div>
                    </div>
                  </main>
                ) : (
                <main className="flex-1 overflow-y-auto max-h-[88vh] p-6 lg:p-8 space-y-6">

                  {/* Header Top Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-3xl border border-neutral-200/80 shadow-sm">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">
                          Editando Reseña:
                        </span>
                        <span className="text-xs font-mono font-black text-trebol bg-trebol/10 px-2 py-0.5 rounded-md">
                          {currentTestimonio.id}
                        </span>
                      </div>
                      <h2 className="text-lg font-black text-carbon tracking-tight mt-0.5">{currentTestimonio.cliente}</h2>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Link
                        href="/casos-de-exito"
                        target="_blank"
                        className="px-3.5 py-2 rounded-xl bg-hueso border border-neutral-200 text-carbon/70 hover:text-trebol font-mono text-xs font-bold flex items-center gap-1.5 transition-all hover:bg-white"
                      >
                        <ExternalLink size={13} />
                        <span>Ver en el Sitio</span>
                      </Link>

                      <button
                        onClick={saveTestimoniosToServer}
                        disabled={testimoniosSaving}
                        className="px-5 py-2 rounded-xl bg-trebol text-white font-mono text-xs font-bold flex items-center gap-1.5 hover:bg-lime-600 transition-all cursor-pointer shadow-md disabled:opacity-60"
                      >
                        <Save size={13} />
                        <span>{testimoniosSaving ? 'Guardando…' : 'Guardar Todo'}</span>
                      </button>
                    </div>
                  </div>

                  {testimoniosSaved && (
                    <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-mono font-bold flex items-center justify-between shadow-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-trebol" />
                        <span>Testimonios guardados y sincronizados correctamente.</span>
                      </div>
                      <span className="text-trebol">✓ Guardado</span>
                    </div>
                  )}

                  {/* Editor Grid: Form (Left) + Preview (Right) */}
                  <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">

                    {/* Columna Izquierda: Formulario Testimonio */}
                    <div className="xl:col-span-7 space-y-6">

                      {/* 1. INFORMACIÓN DEL CLIENTE */}
                      <div className="bg-white p-6 rounded-3xl border border-neutral-200/80 shadow-sm space-y-4 text-xs">
                        <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                          <div className="flex items-center gap-2 text-trebol">
                            <User2 size={16} />
                            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-carbon">1. Datos del Cliente</h3>
                          </div>
                          <button
                            onClick={() => updateCurrentTestimonio({ visible: currentTestimonio.visible !== false ? false : true })}
                            className={`px-3 py-1 rounded-full font-mono text-[10px] font-bold cursor-pointer transition-all ${
                              currentTestimonio.visible !== false ? 'bg-trebol/10 text-trebol' : 'bg-neutral-100 text-neutral-400'
                            }`}
                          >
                            {currentTestimonio.visible !== false ? '● Visible en Sitio' : '○ Oculto'}
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="font-bold text-carbon/80 block mb-1 font-mono">Nombre del Cliente / Evaluador</label>
                            <input
                              type="text"
                              value={currentTestimonio.cliente || ''}
                              onChange={(e) => updateCurrentTestimonio({ cliente: e.target.value })}
                              className="w-full bg-hueso border border-neutral-200 text-carbon font-bold rounded-xl p-2.5 text-xs focus:border-trebol focus:outline-none"
                            />
                          </div>
                          <div>
                            <label className="font-bold text-carbon/80 block mb-1 font-mono">Cargo / Posición</label>
                            <input
                              type="text"
                              value={currentTestimonio.cargo || ''}
                              onChange={(e) => updateCurrentTestimonio({ cargo: e.target.value })}
                              placeholder="Ej: CEO, Director de TI"
                              className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-2.5 text-xs focus:border-trebol focus:outline-none"
                            />
                          </div>
                          <div>
                            <label className="font-bold text-carbon/80 block mb-1 font-mono">Empresa</label>
                            <input
                              type="text"
                              value={currentTestimonio.empresa || ''}
                              onChange={(e) => updateCurrentTestimonio({ empresa: e.target.value })}
                              className="w-full bg-hueso border border-neutral-200 text-carbon font-bold rounded-xl p-2.5 text-xs focus:border-trebol focus:outline-none"
                            />
                          </div>
                          <div>
                            <label className="font-bold text-carbon/80 block mb-1 font-mono">Calificación (1 a 5 Estrellas)</label>
                            <select
                              value={currentTestimonio.rating || 5}
                              onChange={(e) => updateCurrentTestimonio({ rating: parseInt(e.target.value) || 5 })}
                              className="w-full bg-hueso border border-neutral-200 text-carbon font-bold rounded-xl p-2.5 text-xs focus:border-trebol focus:outline-none"
                            >
                              <option value={5}>★★★★★ (5 Estrellas)</option>
                              <option value={4}>★★★★☆ (4 Estrellas)</option>
                              <option value={3}>★★★☆☆ (3 Estrellas)</option>
                              <option value={2}>★★☆☆☆ (2 Estrellas)</option>
                              <option value={1}>★☆☆☆☆ (1 Estrella)</option>
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                          <div>
                            <label className="font-bold text-carbon/80 block mb-1 font-mono">URL Foto del Cliente (Avatar / Portada)</label>
                            <input
                              type="text"
                              value={currentTestimonio.clienteImg || ''}
                              onChange={(e) => updateCurrentTestimonio({ clienteImg: e.target.value })}
                              placeholder="https://images.unsplash.com/..."
                              className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-2.5 font-mono text-xs focus:border-trebol focus:outline-none"
                            />
                          </div>
                          <div>
                            <label className="font-bold text-carbon/80 block mb-1 font-mono">Vincular a Caso de Éxito (Opcional)</label>
                            <select
                              value={currentTestimonio.casoId || ''}
                              onChange={(e) => updateCurrentTestimonio({ casoId: e.target.value })}
                              className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-2.5 text-xs focus:border-trebol focus:outline-none font-sans"
                            >
                              <option value="">-- Sin Caso Vinculado --</option>
                              {casosList.map((c) => (
                                <option key={c.id} value={c.id}>
                                  {c.empresa} ({c.categoria})
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* 2. CITA / RESEÑA */}
                      <div className="bg-white p-6 rounded-3xl border border-neutral-200/80 shadow-sm space-y-4 text-xs">
                        <div className="flex items-center gap-2 text-trebol border-b border-neutral-100 pb-3">
                          <Quote size={16} />
                          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-carbon">2. Reseña & Testimonio</h3>
                        </div>

                        <div>
                          <label className="font-bold text-carbon/80 block mb-1.5 font-mono">Cita del Cliente ("Lo que dicen nuestros clientes")</label>
                          <textarea
                            value={currentTestimonio.quote || ''}
                            onChange={(e) => updateCurrentTestimonio({ quote: e.target.value })}
                            rows={4}
                            placeholder="Escribe la cita o feedback directo del cliente sobre el impacto del trabajo con Trébol Digital..."
                            className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-3.5 font-sans text-xs focus:border-trebol focus:outline-none resize-none italic leading-relaxed"
                          />
                        </div>
                      </div>

                    </div>

                    {/* Columna Derecha: Vista Previa de Testimonio */}
                    <div className="xl:col-span-5 sticky top-24 space-y-6">

                      <div className="bg-white border border-neutral-200/90 rounded-[2.2rem] p-6 shadow-xl space-y-4 overflow-hidden">
                        <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-trebol animate-ping" />
                            <h3 className="font-extrabold text-carbon text-sm tracking-tight">Vista Previa: Carrusel de Testimonios</h3>
                          </div>
                          <div className="flex items-center gap-1 text-amber-500">
                            {Array.from({ length: currentTestimonio.rating || 5 }).map((_, i) => (
                              <Star key={i} size={13} fill="currentColor" />
                            ))}
                          </div>
                        </div>

                        {/* Tarjeta idéntica a la pública */}
                        <div className="bg-white rounded-[2rem] border border-neutral-200/80 overflow-hidden shadow-md flex flex-col min-h-[300px]">
                          {currentTestimonio.clienteImg && (
                            <div className="relative w-full h-44 shrink-0 overflow-hidden bg-neutral-100">
                              <img
                                src={currentTestimonio.clienteImg}
                                alt={currentTestimonio.cliente}
                                className="w-full h-full object-cover"
                                onError={(e) => { e.target.style.display = 'none'; }}
                              />
                            </div>
                          )}
                          <div className="p-6 text-left relative flex flex-col justify-between flex-1">
                            <Quote size={60} className="absolute -top-3 -left-1 text-trebol/10 pointer-events-none" />

                            <p className="text-sm text-carbon/80 font-light leading-relaxed italic mb-6 relative z-10">
                              &ldquo;{currentTestimonio.quote || 'Cita de ejemplo del cliente...'}&rdquo;
                            </p>

                            <div className="pt-3 border-t border-gray-100 relative z-10">
                              <p className="text-sm font-bold text-carbon">{currentTestimonio.cliente}</p>
                              <p className="text-xs text-trebol font-semibold">
                                {currentTestimonio.cargo ? `${currentTestimonio.cargo} · ` : ''}
                                {currentTestimonio.empresa}
                              </p>
                            </div>
                          </div>
                        </div>

                        {currentTestimonio.casoId && (() => {
                          const linkedCase = casosList.find(c => c.id === currentTestimonio.casoId);
                          return linkedCase ? (
                            <div className="p-3 rounded-2xl bg-trebol/10 border border-trebol/20 text-xs flex items-center justify-between">
                              <span className="text-trebol font-bold font-mono text-[11px]">Vinculado al caso:</span>
                              <span className="text-carbon font-extrabold text-[11px] truncate max-w-[180px]">{linkedCase.empresa}</span>
                            </div>
                          ) : null;
                        })()}
                      </div>

                    </div>
                  </div>
                </main>
                )}
              </div>
            )}

            {/* MÓDULO TARJETAS EJECUTIVAS */}
            {activeTab === 'tarjetas' && (
              <div className="flex-1 flex flex-col md:flex-row">
                <aside className="w-full md:w-72 bg-white border-r border-neutral-200/80 p-5 space-y-4 shadow-sm shrink-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[10.5px] font-mono font-bold text-neutral-400 uppercase tracking-wider">
                      Tarjetas Ejecutivas ({tarjetasList.length})
                    </span>
                    <button
                      onClick={createNewTarjeta}
                      className="p-1.5 rounded-xl bg-trebol/10 text-trebol hover:bg-trebol hover:text-white transition-all cursor-pointer"
                      title="Crear Nueva Tarjeta"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <div className="space-y-2 max-h-[75vh] overflow-y-auto pr-1">
                    {tarjetasList.length === 0 ? (
                      <div className="p-4 rounded-2xl bg-hueso border border-dashed border-neutral-300 text-center space-y-2">
                        <p className="text-[11px] text-neutral-400 font-mono">No hay tarjetas creadas</p>
                        <button
                          onClick={createNewTarjeta}
                          className="px-3 py-1.5 rounded-xl bg-trebol text-white font-mono text-[10px] font-bold cursor-pointer hover:bg-carbon transition-all"
                        >
                          + Crear Tarjeta
                        </button>
                      </div>
                    ) : (
                      tarjetasList.map((t) => (
                        <div
                          key={t.id || t.slug}
                          onClick={() => setSelectedTarjetaId(t.id || t.slug)}
                          className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-2 ${
                            (selectedTarjetaId === t.id || selectedTarjetaId === t.slug || currentTarjeta?.id === t.id)
                              ? 'bg-trebol/10 border-trebol text-trebol shadow-sm font-extrabold'
                              : 'bg-hueso/60 border-neutral-200 text-carbon hover:bg-white'
                          }`}
                        >
                          <div className="truncate space-y-0.5">
                            <span className="text-xs block truncate font-bold">{t.firstName} {t.lastName}</span>
                            <span className="text-[10px] font-mono text-neutral-500 block truncate">
                              /{t.slug}
                            </span>
                          </div>
                          <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white border border-neutral-200 text-trebol font-bold shrink-0">
                            SQL
                          </span>
                        </div>
                      ))
                    )}
                  </div>
                </aside>

                {/* EDITOR FORMULARIO TARJETA */}
                <div className="flex-1 p-6 md:p-8 space-y-6 overflow-y-auto max-h-[85vh]">
                  {currentTarjeta ? (
                    <div className="max-w-4xl mx-auto space-y-6">
                      
                      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-200 pb-4">
                        <div>
                          <span className="text-[10px] font-mono font-bold text-trebol uppercase tracking-wider block">Editor de Tarjeta Ejecutiva</span>
                          <h2 className="text-2xl font-black text-carbon">
                            {currentTarjeta.firstName} {currentTarjeta.lastName}
                          </h2>
                          <span className="text-xs font-mono text-neutral-400">
                            Ruta pública: <strong className="text-trebol">/directorio/{currentTarjeta.slug}</strong>
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Link
                            href={`/directorio/${currentTarjeta.slug}`}
                            target="_blank"
                            className="px-4 py-2.5 rounded-xl bg-hueso border border-neutral-200 text-carbon hover:text-trebol text-xs font-mono font-bold inline-flex items-center gap-1.5 transition-colors"
                          >
                            <span>Ver Perfil en Vivo</span>
                            <ExternalLink size={14} />
                          </Link>

                          <button
                            onClick={saveTarjetaToServer}
                            disabled={tarjetaSaving}
                            className="px-5 py-2.5 rounded-xl bg-trebol text-white font-mono text-xs font-bold hover:bg-carbon transition-colors shadow-md inline-flex items-center gap-1.5 cursor-pointer"
                          >
                            <Save size={14} />
                            <span>{tarjetaSaving ? 'Guardando...' : tarjetaSaved ? '¡Guardado!' : 'Guardar en MySQL'}</span>
                          </button>

                          <button
                            onClick={() => deleteCurrentTarjeta(currentTarjeta.id)}
                            className="p-2.5 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white transition-colors cursor-pointer"
                            title="Eliminar Tarjeta"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm">
                        
                        <div className="space-y-1">
                          <label className="text-xs font-mono font-bold text-carbon/70 uppercase">URL Slug (ej. gabriel-paz o tu-nombre)</label>
                          <input
                            type="text"
                            value={currentTarjeta.slug || ''}
                            onChange={(e) => updateCurrentTarjeta({ slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                            className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-3 text-xs font-mono font-bold focus:border-trebol focus:bg-white focus:outline-none"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-xs font-mono font-bold text-carbon/70 uppercase">URL de Foto de Retrato</label>
                          <input
                            type="text"
                            value={currentTarjeta.photoUrl || ''}
                            onChange={(e) => updateCurrentTarjeta({ photoUrl: e.target.value })}
                            className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-3 text-xs font-mono focus:border-trebol focus:bg-white focus:outline-none"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-xs font-mono font-bold text-carbon/70 uppercase">Primer Nombre</label>
                          <input
                            type="text"
                            value={currentTarjeta.firstName || ''}
                            onChange={(e) => updateCurrentTarjeta({ firstName: e.target.value })}
                            className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-3 text-xs font-bold focus:border-trebol focus:bg-white focus:outline-none"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-xs font-mono font-bold text-carbon/70 uppercase">Apellido (Se muestra en itálica verde)</label>
                          <input
                            type="text"
                            value={currentTarjeta.lastName || ''}
                            onChange={(e) => updateCurrentTarjeta({ lastName: e.target.value })}
                            className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-3 text-xs font-bold focus:border-trebol focus:bg-white focus:outline-none"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-xs font-mono font-bold text-carbon/70 uppercase">Cargo / Puesto</label>
                          <input
                            type="text"
                            value={currentTarjeta.title || ''}
                            onChange={(e) => updateCurrentTarjeta({ title: e.target.value })}
                            className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-3 text-xs font-bold focus:border-trebol focus:bg-white focus:outline-none"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-xs font-mono font-bold text-carbon/70 uppercase">Empresa</label>
                          <input
                            type="text"
                            value={currentTarjeta.company || ''}
                            onChange={(e) => updateCurrentTarjeta({ company: e.target.value })}
                            className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-3 text-xs font-bold focus:border-trebol focus:bg-white focus:outline-none"
                          />
                        </div>

                        <div className="md:col-span-2 space-y-1">
                          <label className="text-xs font-mono font-bold text-carbon/70 uppercase">Biografía de Presentación</label>
                          <textarea
                            rows={3}
                            value={currentTarjeta.bio || ''}
                            onChange={(e) => updateCurrentTarjeta({ bio: e.target.value })}
                            className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-3 text-xs font-sans focus:border-trebol focus:bg-white focus:outline-none"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-xs font-mono font-bold text-carbon/70 uppercase">Correo Electrónico</label>
                          <input
                            type="email"
                            value={currentTarjeta.email || ''}
                            onChange={(e) => updateCurrentTarjeta({ email: e.target.value })}
                            className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-3 text-xs font-mono focus:border-trebol focus:bg-white focus:outline-none"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-xs font-mono font-bold text-carbon/70 uppercase">Teléfono / WhatsApp</label>
                          <input
                            type="text"
                            value={currentTarjeta.phone || ''}
                            onChange={(e) => updateCurrentTarjeta({ phone: e.target.value })}
                            className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-3 text-xs font-mono focus:border-trebol focus:bg-white focus:outline-none"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-xs font-mono font-bold text-carbon/70 uppercase">Sitio Web (Texto visible)</label>
                          <input
                            type="text"
                            value={currentTarjeta.website || ''}
                            onChange={(e) => updateCurrentTarjeta({ website: e.target.value })}
                            className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-3 text-xs font-mono focus:border-trebol focus:bg-white focus:outline-none"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-xs font-mono font-bold text-carbon/70 uppercase">Enlace WhatsApp (URL completa)</label>
                          <input
                            type="text"
                            value={currentTarjeta.whatsappUrl || ''}
                            onChange={(e) => updateCurrentTarjeta({ whatsappUrl: e.target.value })}
                            className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-3 text-xs font-mono focus:border-trebol focus:bg-white focus:outline-none"
                          />
                        </div>

                        <div className="md:col-span-2 space-y-1 border-t border-neutral-100 pt-4">
                          <label className="text-xs font-mono font-bold text-trebol uppercase">Semblanza Ejecutiva - Párrafo 1</label>
                          <textarea
                            rows={3}
                            value={currentTarjeta.semblanzaP1 || ''}
                            onChange={(e) => updateCurrentTarjeta({ semblanzaP1: e.target.value })}
                            className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-3 text-xs font-sans focus:border-trebol focus:bg-white focus:outline-none"
                          />
                        </div>

                        <div className="md:col-span-2 space-y-1">
                          <label className="text-xs font-mono font-bold text-trebol uppercase">Semblanza Ejecutiva - Párrafo 2</label>
                          <textarea
                            rows={3}
                            value={currentTarjeta.semblanzaP2 || ''}
                            onChange={(e) => updateCurrentTarjeta({ semblanzaP2: e.target.value })}
                            className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-3 text-xs font-sans focus:border-trebol focus:bg-white focus:outline-none"
                          />
                        </div>

                        <div className="md:col-span-2 space-y-1">
                          <label className="text-xs font-mono font-bold text-trebol uppercase">Cita / Visión Estratégica (Quote Box)</label>
                          <textarea
                            rows={2}
                            value={currentTarjeta.citaTexto || ''}
                            onChange={(e) => updateCurrentTarjeta({ citaTexto: e.target.value })}
                            className="w-full bg-hueso border border-neutral-200 text-carbon rounded-xl p-3 text-xs font-serif italic focus:border-trebol focus:bg-white focus:outline-none"
                          />
                        </div>

                      </div>

                    </div>
                  ) : (
                    <div className="text-center py-20 font-mono text-xs text-neutral-400">
                      Selecciona una tarjeta ejecutiva a la izquierda o crea una nueva.
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* MÓDULO 5: LEADS & CRM */}
            {activeTab === 'leads' && (
              <div className="flex-1 p-12 text-center bg-white rounded-[2.5rem] border border-neutral-200/80 space-y-4 shadow-sm m-8">
                <div className="w-16 h-16 rounded-2xl bg-hueso border border-neutral-200 flex items-center justify-center text-carbon/60 mx-auto">
                  <LayoutDashboard size={32} />
                </div>
                <h3 className="text-xl font-bold text-carbon">Módulo de Leads & Consultas en Desarrollo</h3>
                <p className="text-xs text-carbon/70 max-w-md mx-auto font-light">
                  En la siguiente iteración podrás visualizar las respuestas enviadas por los usuarios a través de los popups y landings pages.
                </p>
              </div>
            )}

          </div>
        </div>
      )}
    </main>
  );
}
