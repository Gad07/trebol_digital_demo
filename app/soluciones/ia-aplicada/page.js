'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight, CheckCircle2, Zap, MessageSquare, BarChart3, Users,
  Globe, Code2, Database, Server, ShieldCheck, Clock, Cpu, Sparkles,
  ArrowRight, Check, Bot, Layers, Target, Rocket, Calculator,
  TrendingUp, HelpCircle, ChevronDown, Sliders, Play, Volume2, VolumeX, X
} from 'lucide-react';
import Contact from '@/components/Contact';

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTE MASCOTA TREBOT (3D VECTORIAL CON VOZ Y EXPRESIONES)
// ─────────────────────────────────────────────────────────────────────────────
export function TrebotSVG({ isSpeaking, size = 180 }) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      className="relative select-none"
      style={{ width: size, height: size * 1.15 }}
    >
      <svg
        viewBox="0 0 230 280"
        className="w-full h-full drop-shadow-[0_15px_30px_rgba(132,198,56,0.25)]"
      >
        <defs>
          <radialGradient id="b-shadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#84C638" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="b-white" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#f1f5f9" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>
          <linearGradient id="b-silver" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>
          <linearGradient id="b-screen" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0b1329" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
          <filter id="b-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <ellipse cx="115" cy="270" rx="46" ry="7" fill="url(#b-shadow)" />

        <g transform="rotate(-6, 54, 142)">
          <path d="M 58 140 C 38 148 34 180 36 210 C 38 226 56 226 62 210 C 66 180 68 148 58 140 Z" fill="url(#b-white)" />
          <ellipse cx="44" cy="164" rx="4" ry="14" fill="white" opacity="0.65" />
        </g>

        <g transform="rotate(6, 176, 142)">
          <path d="M 172 140 C 192 148 196 180 194 210 C 192 226 174 226 168 210 C 164 180 162 148 172 140 Z" fill="url(#b-white)" />
          <ellipse cx="186" cy="164" rx="4" ry="14" fill="white" opacity="0.65" />
        </g>

        <path d="M 64 148 C 64 132 166 132 166 148 C 172 195 156 238 115 240 C 74 238 58 195 64 148 Z" fill="url(#b-white)" />
        <ellipse cx="88" cy="172" rx="18" ry="28" fill="white" opacity="0.6" />

        {/* ISOTIPO VECTORIAL TRÉBOL DIGITAL OFICIAL */}
        <g transform="translate(115, 172) scale(0.065)" filter="url(#b-glow)">
          <g transform="rotate(-135)">
            <path d="M 0,0 C -35,-55 -65,-95 -65,-140 A 65,65 0 0,1 65,-140 C 65,-95 35,-55 0,0 Z" fill="#84C638" stroke="#84C638" strokeWidth="20" strokeLinejoin="round" />
            <circle cx="0" cy="-140" r="48" fill="#FFFFFF" />
            <circle cx="0" cy="-140" r="37" fill="#2B2D2E" />
          </g>
          <g transform="rotate(-45)">
            <path d="M 0,0 C -35,-55 -65,-95 -65,-140 A 65,65 0 0,1 65,-140 C 65,-95 35,-55 0,0 Z" fill="#84C638" stroke="#84C638" strokeWidth="20" strokeLinejoin="round" />
            <circle cx="0" cy="-140" r="48" fill="#FFFFFF" />
            <circle cx="0" cy="-140" r="37" fill="#529B3C" />
          </g>
          <g transform="rotate(135)">
            <path d="M 0,0 C -35,-55 -65,-95 -65,-140 A 65,65 0 0,1 65,-140 C 65,-95 35,-55 0,0 Z" fill="#84C638" stroke="#84C638" strokeWidth="20" strokeLinejoin="round" />
            <circle cx="0" cy="-140" r="48" fill="#FFFFFF" />
            <circle cx="0" cy="-140" r="37" fill="#529B3C" />
          </g>
          <g transform="rotate(45)">
            <path d="M 0,0 C -35,-55 -65,-95 -65,-140 A 65,65 0 0,1 65,-140 C 65,-95 35,-55 0,0 Z" fill="#84C638" stroke="#84C638" strokeWidth="20" strokeLinejoin="round" />
            <circle cx="0" cy="-140" r="48" fill="#FFFFFF" />
            <circle cx="0" cy="-140" r="37" fill="#529B3C" />
          </g>
        </g>
        <text x="115" y="197" textAnchor="middle" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="2.5" fontFamily="system-ui, sans-serif">
          TREBOT
        </text>

        <path d="M 96 122 C 96 138 134 138 134 122 Z" fill="url(#b-silver)" />
        <ellipse cx="115" cy="122" rx="19" ry="5" fill="#e2e8f0" />

        <rect x="34" y="58" width="16" height="42" rx="8" fill="url(#b-silver)" />
        <rect x="180" y="58" width="16" height="42" rx="8" fill="url(#b-silver)" />

        <ellipse cx="115" cy="30" rx="22" ry="8" fill="url(#b-white)" />
        <rect x="44" y="32" width="142" height="96" rx="40" fill="url(#b-white)" />
        <rect x="58" y="44" width="114" height="72" rx="28" fill="url(#b-screen)" />

        <ellipse cx="72" cy="85" rx="7" ry="3.5" fill="#ff77aa" opacity="0.75" filter="url(#b-glow)" />
        <ellipse cx="158" cy="85" rx="7" ry="3.5" fill="#ff77aa" opacity="0.75" filter="url(#b-glow)" />

        <g filter="url(#b-glow)">
          <path d="M 75 76 Q 88 60 101 76 Q 88 68 75 76 Z" fill="#84C638" />
        </g>
        <g filter="url(#b-glow)">
          <path d="M 129 76 Q 142 60 155 76 Q 142 68 129 76 Z" fill="#84C638" />
        </g>

        {isSpeaking ? (
          <motion.ellipse
            cx="115" cy="95" rx="12" ry="5" fill="#84C638" filter="url(#b-glow)"
            animate={{ ry: [3, 10, 3], cy: [95, 92, 95] }}
            transition={{ duration: 0.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        ) : (
          <path d="M 106 93 Q 115 102 124 93" stroke="#84C638" strokeWidth="3" strokeLinecap="round" fill="none" filter="url(#b-glow)" />
        )}
      </svg>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PASOS DEL TUTORIAL GUIADO: EXPLICANDO UNO A UNO LOS DIAGRAMAS DFD TIPO n8n
// ─────────────────────────────────────────────────────────────────────────────
const TUTORIAL_STEPS = [
  {
    targetId: 'hero',
    title: '¡Bienvenido a IA Aplicada! 🤖',
    speech: '¡Hola! Soy TREBOT. Te mostraré cómo acelerar tu empresa automatizando ventas, soporte y operaciones con arquitectura de Inteligencia Artificial.',
    buttonText: 'Explorar DFD 1: Agentes ➔',
    pos: 'left-1/2 -translate-x-1/2'
  },
  {
    targetId: 'dfd-area-0',
    title: 'DFD 1: Agentes Comerciales en WhatsApp',
    speech: 'Primer Diagrama DFD estilo n8n: Agentes Comerciales. El mensaje ingresa vía Webhook en WhatsApp, el modelo GPT-4o procesa la intención y agenda la cita automáticamente en tu CRM.',
    buttonText: 'Ver DFD 2: Automatización ➔',
    pos: 'right-6 md:right-12 translate-x-0'
  },
  {
    targetId: 'dfd-area-1',
    title: 'DFD 2: Automatización de Procesos (RPA)',
    speech: 'Segundo Diagrama DFD estilo n8n: Automatización RPA. El correo recibe la factura, la IA extrae los campos con visión y carga el folio directo al sistema ERP sin error humano.',
    buttonText: 'Ver DFD 3: BI Predictivo ➔',
    pos: 'left-6 md:left-12 translate-x-0'
  },
  {
    targetId: 'dfd-area-2',
    title: 'DFD 3: BI & Modelos Predictivos',
    speech: 'Tercer Diagrama DFD estilo n8n: Business Intelligence. Extraemos datos de tus ERPs y bases SQL, procesamos tendencias con Machine Learning y proyectamos flujo de caja en tiempo real.',
    buttonText: 'Ver DFD 4: Soporte ➔',
    pos: 'right-6 md:right-12 translate-x-0'
  },
  {
    targetId: 'dfd-area-3',
    title: 'DFD 4: Soporte Autónomo & RAG',
    speech: 'Cuarto Diagrama DFD estilo n8n: Soporte Autónomo. Al ingresar un ticket, el motor RAG busca semánticamente en tus manuales para responder y cerrar el 80% de dudas sin personal.',
    buttonText: 'Ver Calculadora ROI ➔',
    pos: 'left-6 md:left-12 translate-x-0'
  },
  {
    targetId: 'calculadora',
    title: 'Calculadora de Ahorro y ROI',
    speech: 'Aquí puedes mover los deslizadores para ver exactamente cuántas horas de trabajo manual recuperará tu equipo al mes y tu retorno financiero en pesos.',
    buttonText: 'Ver Metodología ➔',
    pos: 'left-1/2 -translate-x-1/2'
  },
  {
    targetId: 'metodologia',
    title: 'Implementación en 4 Pasos',
    speech: 'Desplegamos tu solución en 4 etapas: desde la auditoría inicial de procesos y entrenamiento de modelos privados, hasta el lanzamiento seguro en producción.',
    buttonText: '¡Finalizar Tour!',
    pos: 'left-1/2 -translate-x-1/2'
  }
];

const pilarServices = [
  {
    id: 'dfd-area-0',
    icon: MessageSquare,
    badge: 'DFD 01: CONVERSIÓN & VENTAS',
    title: 'Agentes Comerciales 24/7 en WhatsApp & Web',
    desc: 'Desplegamos agentes de Inteligencia Artificial entrenados con la voz, productos y protocolos de tu marca. Responden preguntas complejas, califican prospectos y agendan citas de venta directamente en tu calendario.',
    n8nNodes: [
      {
        type: 'TRIGGER',
        color: 'border-amber-500/60 bg-amber-500/10 text-amber-400',
        badge: '⚡ n8n Webhook Trigger',
        title: 'WhatsApp / Web Event',
        sub: 'Mensaje de prospecto entrante'
      },
      {
        type: 'AI AGENT',
        color: 'border-trebol/80 bg-trebol/15 text-trebol',
        badge: '🧠 OpenAI GPT-4o Agent',
        title: 'Calificación de Intención',
        sub: 'Consulta inventario y agenda'
      },
      {
        type: 'ACTION',
        color: 'border-sky-500/60 bg-sky-500/10 text-sky-400',
        badge: '🚀 CRM & Calendar Action',
        title: 'Agendamiento Directo',
        sub: 'Cita creada + Respuesta <5s'
      }
    ],
    benefits: ['Respuesta instantánea <5 segundos', 'Cierre automático en WhatsApp & Web', 'Sincronización directa a tu CRM']
  },
  {
    id: 'dfd-area-1',
    icon: Zap,
    badge: 'DFD 02: OPERACIONES & RPA',
    title: 'Automatización de Procesos con n8n + IA',
    desc: 'Eliminamos la carga de trabajo manual conectando tus correos, hojas de cálculo, facturación y sistemas ERP. La IA extrae datos, clasifica solicitudes y ejecuta flujos sin error humano.',
    n8nNodes: [
      {
        type: 'TRIGGER',
        color: 'border-amber-500/60 bg-amber-500/10 text-amber-400',
        badge: '⚡ IMAP / Email Trigger',
        title: 'Recepción de Factura',
        sub: 'Correo con PDF adjunto'
      },
      {
        type: 'AI AGENT',
        color: 'border-trebol/80 bg-trebol/15 text-trebol',
        badge: '🧠 n8n Vision OCR Agent',
        title: 'Extracción Semántica',
        sub: 'Lectura de folios y montos'
      },
      {
        type: 'ACTION',
        color: 'border-purple-500/60 bg-purple-500/10 text-purple-400',
        badge: '🚀 ERP & Accounting Action',
        title: 'Carga Directa ERP',
        sub: 'Registro contable automático'
      }
    ],
    benefits: ['Reducción del 70% en trabajo manual', 'Zero errores en captura de información', 'Flujos activos 24/7 entre tus sistemas']
  },
  {
    id: 'dfd-area-2',
    icon: BarChart3,
    badge: 'DFD 03: DECISIONES & BI',
    title: 'Business Intelligence & Modelos Predictivos',
    desc: 'Transformamos bases de datos desorganizadas en tableros ejecutivos interactivos. Algoritmos predictivos te anticipan fluctuaciones de demanda, comportamiento de clientes y proyecciones de flujo.',
    n8nNodes: [
      {
        type: 'TRIGGER',
        color: 'border-amber-500/60 bg-amber-500/10 text-amber-400',
        badge: '⚡ Cron Schedule Trigger',
        title: 'SQL / ERP Sync Batch',
        sub: 'Extracción periódica datos'
      },
      {
        type: 'AI AGENT',
        color: 'border-trebol/80 bg-trebol/15 text-trebol',
        badge: '🧠 Predictive ML Engine',
        title: 'Modelado & Limpieza',
        sub: 'Cálculo tendencias demanda'
      },
      {
        type: 'ACTION',
        color: 'border-emerald-500/60 bg-emerald-500/10 text-emerald-400',
        badge: '🚀 Realtime BI Dashboard',
        title: 'Actualización en Vivo',
        sub: 'Alertas flujo de caja'
      }
    ],
    benefits: ['Dashboards en tiempo real', 'Análisis de sentimiento y rotación', 'Proyecciones financieras asistidas']
  },
  {
    id: 'dfd-area-3',
    icon: Users,
    badge: 'DFD 04: ATENCIÓN AL CLIENTE',
    title: 'Soporte Autónomo & Asistentes Internos',
    desc: 'Instala un asistente de IA capaz de resolver el 80% de los tickets frecuentes de soporte o brindar a tu equipo interno acceso instantáneo a todas las políticas y manuales de la empresa.',
    n8nNodes: [
      {
        type: 'TRIGGER',
        color: 'border-amber-500/60 bg-amber-500/10 text-amber-400',
        badge: '⚡ Zendesk / Ticket Trigger',
        title: 'Ticket de Cliente',
        sub: 'Consulta de duda frecuente'
      },
      {
        type: 'AI AGENT',
        color: 'border-trebol/80 bg-trebol/15 text-trebol',
        badge: '🧠 Pinecone Vector RAG',
        title: 'Búsqueda Manuales',
        sub: 'Extracción política oficial'
      },
      {
        type: 'ACTION',
        color: 'border-indigo-500/60 bg-indigo-500/10 text-indigo-400',
        badge: '🚀 Auto-Resolve Action',
        title: 'Respuesta & Cierre',
        sub: '80% resolución autónoma'
      }
    ],
    benefits: ['Resolución automática de tickets', 'Base de conocimiento interactiva', 'Reducción drástica en costos de soporte']
  }
];

const techStack = [
  { name: 'OpenAI GPT-4o', desc: 'Modelos del estado del arte para comprensión semántica avanzada y visión.' },
  { name: 'Anthropic Claude 3.5', desc: 'Lógica ejecutiva compleja y generación de código/documentos sin alucinación.' },
  { name: 'Meta Llama 3', desc: 'Modelos de código abierto para despliegues privados on-premise de máxima seguridad.' },
  { name: 'n8n & Make', desc: 'Orquestación de flujos empresariales e integración nativa con +500 APIs.' },
  { name: 'Pinecone & Vector DBs', desc: 'Bases de datos vectoriales para búsqueda semántica e inteligencia sobre tus archivos.' },
  { name: 'WhatsApp Business API', desc: 'Canal oficial verificado para agentes conversacionales masivos de alta conversión.' }
];

const comparativaAntesDespues = [
  {
    area: 'Atención a Prospectos',
    antes: 'Tiempos de espera de 2 a 12 horas. El 60% de los prospectos se van con la competencia.',
    despues: 'Respuesta inmediata en <5 segundos las 24 horas. Triplicación de citas agendadas.'
  },
  {
    area: 'Procesamiento de Datos',
    antes: 'Personal dedicado horas a copiar y pegar folios, facturas y correos manualmente.',
    despues: 'Flujos automáticos con IA que leen, validan y cargan datos al sistema al instante.'
  },
  {
    area: 'Toma de Decisiones',
    antes: 'Reportes mensuales tardíos en Excel con datos desactualizados y margen de error.',
    despues: 'Dashboards dinámicos en tiempo real con alertas tempranas y predicciones de venta.'
  }
];

const roadmapIA = [
  {
    paso: '01',
    titulo: 'Auditoría & Mapeo de Oportunidades',
    desc: 'Analizamos tus flujos operativos actuales, identificamos cuellos de botella y priorizamos los proyectos de IA con mayor retorno de inversión a 60 días.',
    entregable: 'Diagnóstico Operativo & Hoja de Ruta'
  },
  {
    paso: '02',
    titulo: 'Arquitectura & Entrenamiento de Modelos',
    desc: 'Conectamos tus sistemas, estructuramos bases de conocimiento vectoriales y entrenamos los agentes con la información oficial y tono de tu empresa.',
    entregable: 'Agentes Entrenados & Flujos de Prueba'
  },
  {
    paso: '03',
    titulo: 'Despliegue Piloto & Pruebas de Estrés',
    desc: 'Implementamos la solución en un entorno controlado, auditamos respuestas, medimos precisión y garantizamos cumplimiento con protocolos de seguridad.',
    entregable: 'Certificación de Calidad & Métricas'
  },
  {
    paso: '04',
    titulo: 'Lanzamiento Total & Capacitación',
    desc: 'Desplegamos la arquitectura a producción completa, capacitamos a tu equipo humano para supervisar los modelos y optimizamos de forma continua.',
    entregable: 'Plataforma en Producción & Soporte'
  }
];

const faqsIA = [
  {
    q: '¿Nuestros datos e información confidencial están seguros?',
    a: 'Absolutamente. Todos los modelos e integraciones se construyen bajo estándares de privacidad empresarial. Tus datos no se utilizan para entrenar modelos públicos de terceros y toda la comunicación está cifrada de punto a punto.'
  },
  {
    q: '¿La IA reemplazará a mi personal actual?',
    a: 'La Inteligencia Artificial no reemplaza a tu equipo; potencia sus capacidades. Al eliminar tareas repetitivas y tediosas, tu equipo se concentra en actividades de alto valor estratégico, ventas complejas y atención humana personalizada.'
  },
  {
    q: '¿Cuánto tiempo toma implementar una solución de IA?',
    a: 'Nuestros proyectos piloto y agentes de ventas/soporte se despliegan habitualmente en un periodo de 3 a 5 semanas. Proyectos más complejos de arquitectura de datos se estructuran en fases de 8 semanas.'
  },
  {
    q: '¿Necesitamos conocimientos técnicos avanzados en nuestro equipo?',
    a: 'No. Diseñamos sistemas con interfaces intuitivas y entregamos paneles autoadministrables para que cualquier persona de tu equipo pueda gestionarlos sin escribir una sola línea de código.'
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// PÁGINA PRINCIPAL
// ─────────────────────────────────────────────────────────────────────────────
export default function IAAplicadaPage() {
  const [openFaq, setOpenFaq] = useState(null);
  
  // Estado del Tutorial Guiado con Enfoque Spotlight
  const [showTutorial, setShowTutorial] = useState(false);
  const [tutorialStep, setTutorialStep] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [muted, setMuted] = useState(false);
  const currentAudioRef = useRef(null);

  // Calculadora de ROI interactiva
  const [teamSize, setTeamSize] = useState(10);
  const [hoursPerWeek, setHoursPerWeek] = useState(12);

  const hoursSavedMonth = Math.round(teamSize * hoursPerWeek * 4.2 * 0.65);
  const estimatedSavings = (hoursSavedMonth * 180).toLocaleString('es-MX');

  const speak = useCallback(async (text) => {
    if (muted || typeof window === 'undefined') return;

    if (window.speechSynthesis.speaking) window.speechSynthesis.cancel();
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current = null;
    }

    try {
      const res = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, voice: 'nova' }),
      });

      if (res.ok) {
        const blob = await res.blob();
        const audioUrl = URL.createObjectURL(blob);
        const audio = new Audio(audioUrl);
        currentAudioRef.current = audio;

        setIsSpeaking(true);
        audio.onended = () => {
          setIsSpeaking(false);
          URL.revokeObjectURL(audioUrl);
        };
        audio.onerror = () => {
          setIsSpeaking(false);
          URL.revokeObjectURL(audioUrl);
        };

        await audio.play();
        return;
      }
    } catch (e) {
      // Fallback
    }

    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'es-MX';
    utter.rate = 1.0;
    utter.pitch = 1.0;

    const go = () => {
      const voices = window.speechSynthesis.getVoices();
      if (!voices || voices.length === 0) return;

      const esVoice = voices.find(v => v.lang.startsWith('es-MX') && (v.name.includes('Natural') || v.name.includes('Neural') || v.name.includes('Google') || v.name.includes('Sabina') || v.name.includes('Dalia') || v.name.includes('Paulina')))
        || voices.find(v => v.lang.startsWith('es-MX'))
        || voices.find(v => v.lang.startsWith('es') && (v.name.includes('Natural') || v.name.includes('Neural') || v.name.includes('Google') || v.name.includes('Monica') || v.name.includes('Jorge') || v.name.includes('Helena') || v.name.includes('Laura')))
        || voices.find(v => v.lang.startsWith('es'));

      if (esVoice) {
        utter.voice = esVoice;
        utter.lang = esVoice.lang;
      } else {
        utter.lang = 'es-MX';
      }

      utter.pitch = 1.0;
      utter.rate = 1.0;

      setIsSpeaking(true);
      utter.onend = () => setIsSpeaking(false);
      utter.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utter);
    };

    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.addEventListener('voiceschanged', go, { once: true });
    } else {
      go();
    }
  }, [muted]);

  const stopAudio = useCallback(() => {
    if (typeof window !== 'undefined') window.speechSynthesis.cancel();
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current = null;
    }
    setIsSpeaking(false);
  }, []);

  // Iniciar automáticamente el tutorial por primera vez
  useEffect(() => {
    window.scrollTo(0, 0);
    const hasSeen = localStorage.getItem('trebot_tutorial_seen');
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setShowTutorial(true);
        setTutorialStep(0);
        speak(TUTORIAL_STEPS[0].speech);
        localStorage.setItem('trebot_tutorial_seen', 'true');
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [speak]);

  // Manejar el cambio de pasos en el tutorial
  const nextTutorialStep = () => {
    stopAudio();
    if (tutorialStep < TUTORIAL_STEPS.length - 1) {
      const nextIdx = tutorialStep + 1;
      setTutorialStep(nextIdx);
      const stepData = TUTORIAL_STEPS[nextIdx];
      
      const element = document.getElementById(stepData.targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      speak(stepData.speech);
    } else {
      setShowTutorial(false);
    }
  };

  const startTutorialManual = () => {
    stopAudio();
    setShowTutorial(true);
    setTutorialStep(0);
    const element = document.getElementById(TUTORIAL_STEPS[0].targetId);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    speak(TUTORIAL_STEPS[0].speech);
  };

  const closeTutorial = () => {
    stopAudio();
    setShowTutorial(false);
  };

  const currentTargetId = TUTORIAL_STEPS[tutorialStep]?.targetId;

  return (
    <main className="w-full bg-hueso text-carbon min-h-screen overflow-hidden selection:bg-trebol selection:text-white relative">

      {/* ───────────────────────────────────────────────────────────────────────── */}
      {/* CAPA DE SOBREPOSICIÓN Y SPOTLIGHT DEL TUTORIAL (FONDO OSCURO CON FILTRO) */}
      {/* ───────────────────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {showTutorial && (
          <>
            {/* Fondo oscuro traslúcido sobre toda la web */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9998] bg-black/85 backdrop-blur-[4px] pointer-events-auto"
              onClick={closeTutorial}
            />

            {/* TREBOT MASCOTA GRANDE EN 3D FLOTANDO LIBREMENTE SIN TEXTO (DISTRIBUIDO DINÁMICAMENTE CENTRO/DERECHA/IZQUIERDA) */}
            <motion.div
              key={tutorialStep}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 90, damping: 15 }}
              className={`fixed bottom-6 md:bottom-8 ${TUTORIAL_STEPS[tutorialStep].pos} z-[10000] flex flex-col items-center gap-6 pointer-events-auto select-none transition-all duration-700 ease-in-out`}
            >
              {/* TREBOT SVG 3D MÁS GRANDE (280px) Flotando directamente en la pantalla */}
              <div className="relative drop-shadow-[0_30px_60px_rgba(132,198,56,0.75)]">
                <TrebotSVG isSpeaking={isSpeaking} size={280} />
                
                {/* Badge flotante de indicación de paso */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-black/80 border border-trebol/60 backdrop-blur-md text-trebol text-xs font-mono font-bold tracking-widest uppercase flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-trebol animate-ping" />
                  PASO {tutorialStep + 1} DE {TUTORIAL_STEPS.length}
                </div>
              </div>

              {/* ÚNICAMENTE LOS BOTONES FLOTANTES (SIN TEXTO EN PANTALLA) */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => {
                    if (isSpeaking) stopAudio();
                    else speak(TUTORIAL_STEPS[tutorialStep].speech);
                  }}
                  className="px-5 py-3 rounded-full bg-black/80 hover:bg-black border border-white/20 hover:border-trebol text-white text-xs font-mono font-bold flex items-center gap-2 backdrop-blur-xl transition-all shadow-xl"
                >
                  {isSpeaking ? <Volume2 size={16} className="text-trebol animate-bounce" /> : <Play size={16} />}
                  {isSpeaking ? 'Repitiendo voz...' : 'Escuchar voz'}
                </button>

                <button
                  onClick={nextTutorialStep}
                  className="px-8 py-4 rounded-2xl bg-trebol text-black font-black text-base hover:bg-white transition-all duration-300 shadow-[0_0_40px_rgba(132,198,56,0.7)] flex items-center gap-2"
                >
                  {TUTORIAL_STEPS[tutorialStep].buttonText}
                </button>

                <button
                  onClick={closeTutorial}
                  className="px-5 py-3 rounded-full bg-black/80 hover:bg-black border border-white/20 text-white/70 hover:text-white text-xs font-mono flex items-center gap-1.5 backdrop-blur-xl transition-all shadow-xl"
                >
                  <X size={16} /> Saltar
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* BOTÓN FLOTANTE PERMANENTE PARA ABRIR EL TUTORIAL DE TREBOT */}
      {!showTutorial && (
        <button
          onClick={startTutorialManual}
          className="fixed bottom-6 right-6 z-30 px-5 py-3 rounded-full bg-white border border-trebol/40 shadow-xl text-carbon font-bold text-xs hover:border-trebol hover:bg-trebol hover:text-white transition-all duration-300 flex items-center gap-2.5 group"
        >
          <div className="w-6 h-6 rounded-full bg-trebol/20 group-hover:bg-white text-trebol group-hover:text-trebol flex items-center justify-center font-bold">
            🤖
          </div>
          <span>Iniciar Tour con TREBOT</span>
        </button>
      )}

      {/* ───────────────────────────────────────────────────────────────────────── */}
      {/* HERO SECTION COMPLETO */}
      {/* ───────────────────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        className={`relative w-full flex flex-col items-center justify-start pt-36 md:pt-44 pb-20 px-4 md:px-12 bg-hueso overflow-hidden transition-all duration-500 ${
          showTutorial && currentTargetId === 'hero'
            ? 'z-[9999] relative ring-4 ring-trebol shadow-[0_0_100px_rgba(132,198,56,0.8)] rounded-3xl bg-hueso text-carbon pointer-events-auto'
            : ''
        }`}
      >
        
        {/* Animated Green Ambient Light Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <motion.div 
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.8, 0.6] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -left-40 w-[32rem] h-[32rem] bg-trebol/20 rounded-full blur-[110px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-20 right-0 w-[28rem] h-[28rem] bg-trebol/10 rounded-full blur-[90px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.75, 0.5] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            className="absolute -bottom-20 left-1/3 w-[35rem] h-[35rem] bg-trebol/15 rounded-full blur-[120px]"
          />
        </div>

        {/* Container for Headline & Floating Glass Badge */}
        <div className="relative w-full max-w-[1400px] mx-auto text-center flex flex-col items-center mb-12 md:mb-16 z-10">
          
          {/* Floating Glass Badge (Micro-Floating Loop Animation) */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -6 }}
            animate={{ opacity: 1, y: [0, -6, 0], rotate: -2 }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 0.8, delay: 0.2 },
              rotate: { duration: 0.8, delay: 0.2 }
            }}
            className="mb-6"
          >
            <div className="bg-white/50 backdrop-blur-md px-6 py-3 border border-white/70 shadow-xl rounded-full text-sm md:text-lg text-carbon font-semibold">
              Inteligencia Artificial Aplicada a Negocios
            </div>
          </motion.div>

          {/* Massive Headline with Stagger Animation */}
          <motion.h1 
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 90, damping: 14 }}
            className="text-5xl md:text-8xl lg:text-[7.5rem] font-black text-carbon leading-[0.85] tracking-tighter mb-8"
          >
            Inteligencia Artificial <br/>
            con Enfoque <span className="text-trebol">Estratégico.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-carbon/80 font-light leading-relaxed max-w-3xl text-center mb-10"
          >
            Diseñamos e integramos arquitectura de IA que automatiza tus ventas, conecta tus operaciones e incrementa la rentabilidad de tu empresa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="/agenda"
              className="px-8 py-4 rounded-2xl bg-trebol text-white font-bold text-base hover:bg-carbon transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Agendar Sesión Estratégica <ArrowUpRight size={18} />
            </a>

            <button
              onClick={startTutorialManual}
              className="px-8 py-4 rounded-2xl bg-white border border-neutral-200 text-carbon font-semibold text-base hover:border-trebol hover:text-trebol transition-all duration-300 shadow-sm flex items-center gap-2"
            >
              Iniciar Tour Guiado con TREBOT 🤖
            </button>
          </motion.div>

          {/* Badges de Confianza */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="pt-8 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-carbon/70"
          >
            <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-trebol" /> Privacidad & Cifrado de Datos</span>
            <span className="flex items-center gap-2"><Clock size={16} className="text-trebol" /> ROI Estimado en &lt;60 días</span>
            <span className="flex items-center gap-2"><Cpu size={16} className="text-trebol" /> Modelos Propietarios</span>
          </motion.div>
        </div>

      </section>

      {/* ── SECCIÓN 1: CAPABILIDADES CLAVE DE IA EN FORMATO DFD CANVAS ESTILO n8n ── */}
      <section
        id="soluciones"
        className="py-24 md:py-32 px-6 md:px-12 bg-white border-y border-neutral-200/80"
      >
        <div className="max-w-[1400px] w-full mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-end mb-16">
            <div className="lg:col-span-7">
              <span className="text-xs font-mono text-trebol font-bold uppercase tracking-widest block mb-3">
                ARQUITECTURA & DIAGRAMAS DFD ESTILO n8n
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-carbon tracking-tighter leading-[0.95]">
                Las 4 áreas donde la IA <br />
                <span className="text-trebol">revoluciona tu empresa</span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-lg md:text-xl text-carbon/70 font-light leading-relaxed">
                Visualiza los flujos de trabajo n8n y diagramas DFD conectados directamente a tus sistemas actuales para operar sin fricción.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pilarServices.map((sol, i) => {
              const Icon = sol.icon;
              const isTargeted = showTutorial && currentTargetId === sol.id;

              return (
                <motion.div
                  key={i}
                  id={sol.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`p-8 md:p-10 rounded-3xl transition-all duration-500 flex flex-col justify-between ${
                    isTargeted
                      ? 'z-[9999] relative ring-4 ring-trebol shadow-[0_0_100px_rgba(132,198,56,0.9)] bg-white text-carbon pointer-events-auto scale-[1.02]'
                      : 'bg-hueso border border-neutral-200/80 shadow-md hover:shadow-2xl'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-trebol/10 border border-trebol/20 flex items-center justify-center text-trebol">
                        <Icon size={28} />
                      </div>
                      <span className="px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 text-carbon/80 text-xs font-mono font-bold">
                        {sol.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-carbon tracking-tight mb-3">
                      {sol.title}
                    </h3>
                    <p className="text-carbon/70 text-sm md:text-base leading-relaxed font-light mb-6">
                      {sol.desc}
                    </p>

                    {/* CANVAS DE DIAGRAMA DFD ESTILO WORKFLOW n8n */}
                    <div className="p-5 md:p-6 rounded-2xl bg-[#0f172a] border border-slate-700/80 shadow-2xl space-y-4 font-mono text-xs my-6 relative overflow-hidden text-white">
                      {/* Textura de puntos n8n Canvas Grid */}
                      <div
                        className="absolute inset-0 opacity-20 pointer-events-none"
                        style={{
                          backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
                          backgroundSize: '16px 16px'
                        }}
                      />

                      {/* Header de Estado n8n Workflow */}
                      <div className="flex items-center justify-between border-b border-slate-700/80 pb-3 relative z-10 text-[11px]">
                        <span className="text-trebol font-bold flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-trebol animate-ping" />
                          n8n WORKFLOW CANVAS ACTIVE
                        </span>
                        <span className="text-slate-400 font-mono text-[10px]">EXECUTION: &lt;120ms</span>
                      </div>

                      {/* NODOS CONECTADOS TIPO n8n WORKFLOW */}
                      <div className="space-y-3 relative z-10">
                        {sol.n8nNodes.map((node, nIdx) => (
                          <div key={nIdx} className="space-y-2">
                            <div className={`p-3 rounded-xl border ${node.color} flex items-center justify-between shadow-md backdrop-blur-md`}>
                              <div>
                                <div className="text-[10px] font-bold tracking-wider uppercase opacity-90">{node.badge}</div>
                                <div className="font-bold text-xs text-white mt-0.5">{node.title}</div>
                                <div className="text-[11px] text-slate-300 font-light">{node.sub}</div>
                              </div>
                              <span className="px-2 py-0.5 rounded-full bg-black/40 text-[9px] font-bold text-slate-300 uppercase tracking-widest border border-white/10">
                                NODE {nIdx + 1}
                              </span>
                            </div>

                            {/* Línea conectora entre Nodos n8n */}
                            {nIdx < sol.n8nNodes.length - 1 && (
                              <div className="flex items-center justify-center py-0.5">
                                <div className="flex items-center gap-1 text-[10px] text-trebol font-bold animate-pulse">
                                  <span>↓</span>
                                  <span className="text-[9px] tracking-widest text-slate-400 font-mono">FLOW CONNECTOR</span>
                                  <span>↓</span>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-200/60 space-y-2">
                    {sol.benefits.map((b, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-xs font-mono text-carbon/80">
                        <CheckCircle2 size={15} className="text-trebol shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── SECCIÓN 2: ANTES VS DESPUÉS CON INTELIGENCIA ARTIFICIAL ── */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-hueso border-b border-neutral-200/80">
        <div className="max-w-[1400px] w-full mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono text-trebol font-bold uppercase tracking-widest block">
              TRANSFORMACIÓN OPERATIVA REAL
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-carbon tracking-tighter">
              El cambio en tu empresa antes y después de la IA
            </h2>
            <p className="text-carbon/70 text-base md:text-lg font-light">
              Compara cómo opera un negocio tradicional frente a uno acelerado con sistemas de Inteligencia Artificial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comparativaAntesDespues.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-neutral-200/80 shadow-lg space-y-6"
              >
                <div className="text-xs font-mono text-trebol font-bold uppercase tracking-wider">
                  Área: {item.area}
                </div>

                <div className="p-5 rounded-2xl bg-red-50/70 border border-red-200/60 space-y-2">
                  <div className="text-xs font-bold text-red-700 uppercase font-mono">Sin IA (Operación Tradicional):</div>
                  <p className="text-red-950 text-sm font-light leading-relaxed">{item.antes}</p>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/60 space-y-2">
                  <div className="text-xs font-bold text-emerald-800 uppercase font-mono">Con Trébol IA:</div>
                  <p className="text-emerald-950 text-sm font-light leading-relaxed">{item.despues}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECCIÓN 3: CALCULADORA DE ROI DE IA INTERACTIVA ── */}
      <section
        id="calculadora"
        className={`py-24 md:py-32 px-6 md:px-12 bg-white border-b border-neutral-200/80 transition-all duration-500 ${
          showTutorial && currentTargetId === 'calculadora'
            ? 'z-[9999] relative ring-4 ring-trebol shadow-[0_0_100px_rgba(132,198,56,0.8)] rounded-3xl bg-white text-carbon pointer-events-auto'
            : ''
        }`}
      >
        <div className="max-w-[1200px] w-full mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono text-trebol font-bold uppercase tracking-widest block">
                CALCULADORA DE POTENCIAL
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-carbon tracking-tighter leading-tight">
                Calcula el impacto económico de implementar IA
              </h2>
              <p className="text-carbon/70 text-base md:text-lg font-light leading-relaxed">
                Ajusta el tamaño de tu equipo y las horas semanales invertidas en tareas manuales para estimar el ahorro estimado en tu empresa.
              </p>

              <div className="p-6 rounded-2xl bg-hueso border border-neutral-200/80 space-y-3 font-mono text-xs text-carbon/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-trebol" />
                  <span>Estimación basada en costo hora promedio de $180 MXN</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-trebol" />
                  <span>Tasa de automatización conservadora del 65%</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 p-8 md:p-12 rounded-3xl bg-hueso border border-neutral-200/80 shadow-2xl space-y-8">
              
              {/* Slider 1: Tamaño de Equipo */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-bold text-carbon">
                  <span>Tamaño de tu equipo operativo / ventas:</span>
                  <span className="text-trebol font-mono text-lg">{teamSize} personas</span>
                </div>
                <input
                  type="range" min="2" max="100" value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full accent-trebol cursor-pointer"
                />
              </div>

              {/* Slider 2: Horas manuales por semana */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-bold text-carbon">
                  <span>Horas manuales por persona / semana:</span>
                  <span className="text-trebol font-mono text-lg">{hoursPerWeek} horas/sem</span>
                </div>
                <input
                  type="range" min="3" max="30" value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full accent-trebol cursor-pointer"
                />
              </div>

              {/* Resultados */}
              <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-md grid grid-cols-1 sm:grid-cols-2 gap-6 text-center sm:text-left">
                <div>
                  <div className="text-xs font-mono text-carbon/60 uppercase">Horas Recuperadas / Mes:</div>
                  <div className="text-3xl font-black text-carbon font-mono mt-1">{hoursSavedMonth} hrs</div>
                </div>

                <div>
                  <div className="text-xs font-mono text-trebol font-bold uppercase">Ahorro Estimado / Mes:</div>
                  <div className="text-3xl font-black text-trebol font-mono mt-1">${estimatedSavings} MXN</div>
                </div>
              </div>

              <a
                href="/agenda"
                className="w-full py-4 rounded-2xl bg-trebol text-white font-bold text-base text-center hover:bg-carbon transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
              >
                Quiero una propuesta para mi empresa <ArrowUpRight size={18} />
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* ── SECCIÓN 4: ECOSISTEMA TECNOLÓGICO & INTEGRACIONES DE IA ── */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-hueso border-b border-neutral-200/80">
        <div className="max-w-[1400px] w-full mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono text-trebol font-bold uppercase tracking-widest block">
              STACK TECNOLÓGICO EMPRESARIAL
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-carbon tracking-tighter">
              Modelos e integraciones con las mejores plataformas
            </h2>
            <p className="text-carbon/70 text-base md:text-lg font-light">
              Conectamos los modelos de lenguaje más potentes del mundo con tu infraestructura existente sin fisuras.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-8 rounded-3xl bg-white border border-neutral-200/80 shadow-md hover:shadow-xl transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-trebol/10 text-trebol flex items-center justify-center font-bold mb-4">
                  <Cpu size={22} />
                </div>
                <h4 className="text-xl font-bold text-carbon mb-2">{tech.name}</h4>
                <p className="text-carbon/70 text-sm font-light leading-relaxed">{tech.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECCIÓN 5: ROADMAP METODOLÓGICO EN 4 ETAPAS ── */}
      <section
        id="metodologia"
        className={`py-24 md:py-32 px-6 md:px-12 bg-white border-b border-neutral-200/80 transition-all duration-500 ${
          showTutorial && currentTargetId === 'metodologia'
            ? 'z-[9999] relative ring-4 ring-trebol shadow-[0_0_100px_rgba(132,198,56,0.8)] rounded-3xl bg-white text-carbon pointer-events-auto'
            : ''
        }`}
      >
        <div className="max-w-[1400px] w-full mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-end mb-20">
            <div className="lg:col-span-7">
              <span className="text-xs font-mono text-trebol font-bold uppercase tracking-widest block mb-3">
                METODOLOGÍA DE DESPLIEGUE
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-carbon tracking-tighter leading-[0.95]">
                Cómo implementamos IA <br />
                <span className="text-trebol">en 4 pasos estructurados</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-lg md:text-xl text-carbon/70 font-light leading-relaxed">
                Garantizamos seguridad, entrenamiento riguroso y seguimiento continuo en cada etapa del desarrollo.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roadmapIA.map((stepItem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 md:p-10 rounded-3xl bg-hueso border border-neutral-200/80 shadow-lg flex flex-col justify-between group hover:border-trebol/40 transition-all duration-300"
              >
                <div>
                  <div className="text-4xl font-black text-trebol font-mono mb-6">
                    {stepItem.paso}
                  </div>
                  <h3 className="text-2xl font-bold text-carbon tracking-tight mb-4">
                    {stepItem.titulo}
                  </h3>
                  <p className="text-carbon/70 text-base leading-relaxed font-light mb-6">
                    {stepItem.desc}
                  </p>
                </div>
                <div className="pt-6 border-t border-neutral-200/60 font-mono text-xs text-carbon/70">
                  <span className="text-trebol font-bold uppercase block mb-1">Entregable Clave:</span>
                  {stepItem.entregable}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECCIÓN 6: PREGUNTAS FRECUENTES (FAQ) ── */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-hueso border-b border-neutral-200/80">
        <div className="max-w-[1000px] w-full mx-auto space-y-12">
          
          <div className="text-center space-y-4">
            <span className="text-xs font-mono text-trebol font-bold uppercase tracking-widest block">
              RESOLVIENDO DUDAS CLAVE
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-carbon tracking-tighter">
              Preguntas Frecuentes sobre Inteligencia Artificial
            </h2>
          </div>

          <div className="space-y-4">
            {faqsIA.map((faq, i) => (
              <div
                key={i}
                className="p-6 md:p-8 rounded-3xl bg-white border border-neutral-200/80 shadow-md cursor-pointer transition-all"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="flex justify-between items-center gap-4">
                  <h4 className="font-bold text-lg md:text-xl text-carbon">{faq.q}</h4>
                  <ChevronDown
                    size={20}
                    className={`text-trebol shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </div>
                {openFaq === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-carbon/70 text-base font-light mt-4 pt-4 border-t border-neutral-100 leading-relaxed"
                  >
                    {faq.a}
                  </motion.p>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── FORMULARIO OFICIAL DE CONTACTO DE TRÉBOL DIGITAL ── */}
      <Contact />

    </main>
  );
}
