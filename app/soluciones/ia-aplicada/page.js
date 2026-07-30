'use client';
import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll } from 'framer-motion';
import Contact from '@/components/Contact';
import { 
  ArrowUpRight, CheckCircle2, Bot, Cpu, 
  Sparkles, ShieldCheck, Lock, Server, Zap, Check,
  MessageSquare, Users, BarChart3, Clock, Database,
  Mail, FileText, Activity, GitFork, Layers, Play, RotateCcw,
  GitBranch, Plus, ArrowRight
} from 'lucide-react';

const n8nCanvasWorkflows = [
  {
    id: 'wf-whatsapp',
    title: 'Bots de WhatsApp 24/7 & Captación Comercial',
    description: 'Automatiza la cualificación de prospectos, respuestas inmediatas por WhatsApp y agendamiento de citas en Google Calendar sin intervención humana.',
    layoutType: 'v-shape',
    tree: {
      trigger: {
        id: 'node-trigger',
        step: 1,
        title: "On 'WhatsApp Message' Form Submission",
        subtitle: 'Mensaje: "¿Tienen citas enterprise hoy?"',
        icon: MessageSquare,
        type: 'Trigger'
      },
      aiEngine: {
        id: 'node-ai',
        step: 2,
        title: 'Trébol Commerce Agent v4',
        subtitle: 'Cualificando Presupuesto ($50k+)',
        icon: Cpu,
        type: 'AI Core Engine'
      },
      router: {
        id: 'node-router',
        step: 3,
        title: 'Is Manager?',
        subtitle: '¿Empresa > 50 empleados?',
        icon: GitBranch,
        type: 'Condition Router'
      },
      branches: {
        top: {
          id: 'node-top',
          step: 4,
          title: 'Create Jira / Calendar Admin',
          subtitle: 'Cita Agendada: Jueves 10:00 AM',
          icon: Clock,
          status: 'True Path'
        },
        bottom: {
          id: 'node-bottom',
          step: 4,
          title: 'Create Slack User / CRM',
          subtitle: 'Estatus: "Cualificado B2B"',
          icon: Database,
          status: 'False Path'
        },
        bottomSub: {
          id: 'node-bottom-sub',
          step: 5,
          title: 'Update Slack Profile / WhatsApp',
          subtitle: 'Confirmación Enviada con Mapa',
          icon: Zap,
          status: 'Notification'
        }
      }
    },
    stepMessages: {
      1: 'PASO 1 [TRIGGER]: Recibiendo mensaje de WhatsApp "¿Tienen citas enterprise hoy para 85 empleados?"',
      2: 'PASO 2 [PROCESAMIENTO IA]: Trébol Agent v4 analizando intención y cualificando presupuesto ($50k+ MXN)...',
      3: 'PASO 3 [ROUTER DECISIÓN]: Evaluando condición "Is Manager? / ¿Empresa > 50 emp?" -> Evaluación: TRUE',
      4: 'PASO 4 [EJECUCIÓN RAMIFICADA]: Agendando Demo Executive en Google Calendar y creando Lead en HubSpot CRM...',
      5: 'PASO 5 [RESPUESTA FINAL]: Enviando confirmación con mapa de acceso por WhatsApp Cloud API.'
    }
  },
  {
    id: 'wf-rrhh',
    title: 'Reclutamiento Algorítmico & Filtro de CVs RRHH',
    description: 'Procesa cientos de currículums en PDF simultáneamente, evalúa compatibilidad técnica y notifica al equipo de Selección en minutos.',
    layoutType: 'horizontal-split',
    tree: {
      trigger: {
        id: 'node-trigger',
        step: 1,
        title: "On 'PDF Resume' Submission",
        subtitle: '150 CVs recibidos para vacante Senior',
        icon: Users,
        type: 'Trigger'
      },
      aiEngine: {
        id: 'node-ai',
        step: 2,
        title: 'Trébol Talent-Parser v2',
        subtitle: 'Multimodal Resume Engine (4.2s)',
        icon: Cpu,
        type: 'AI Core Engine'
      },
      router: {
        id: 'node-router',
        step: 3,
        title: 'Is Qualified?',
        subtitle: '¿Score Fit > 85%?',
        icon: GitBranch,
        type: 'Condition Router'
      },
      branches: {
        top: {
          id: 'node-top',
          step: 4,
          title: 'Create Interview Invitation',
          subtitle: 'Carlos M. (98%), Mariana S. (95%)',
          icon: CheckCircle2,
          status: 'True Path'
        },
        bottom: {
          id: 'node-bottom',
          step: 4,
          title: 'Create Slack Notification',
          subtitle: 'Resumen Top 3 enviado a RRHH',
          icon: Zap,
          status: 'False Path'
        },
        bottomSub: {
          id: 'node-bottom-sub',
          step: 5,
          title: 'Update Candidate Database',
          subtitle: '150 Pruebas Técnicas enviadas',
          icon: Mail,
          status: 'Notification'
        }
      }
    },
    stepMessages: {
      1: 'PASO 1 [TRIGGER]: 150 CVs en PDF recibidos masivamente para la vacante Senior Lead...',
      2: 'PASO 2 [PROCESAMIENTO IA]: Trébol Talent-Parser escaneando stack técnico, portafolios e inglés C1 en 4.2s...',
      3: 'PASO 3 [ROUTER DECISIÓN]: Evaluando condición "Is Qualified? / ¿Score Fit > 85%?" -> 12 candidatos aprobados',
      4: 'PASO 4 [EJECUCIÓN RAMIFICADA]: Agendando entrevista técnica para Top 3 y notificando al canal directivo de Slack...',
      5: 'PASO 5 [RESPUESTA FINAL]: Despachando 150 correos automatizados con confirmación y prueba técnica.'
    }
  },
  {
    id: 'wf-finance',
    title: 'Conciliación Financiera Multi-Banco & ERP',
    description: 'Conecta las cuentas bancarias de la empresa por API encriptada, concilia depósitos vs facturas emitidas y genera reportes en el ERP.',
    layoutType: 'zig-zag',
    tree: {
      trigger: {
        id: 'node-trigger',
        step: 1,
        title: "On 00:00 AM Cron Schedule",
        subtitle: 'Sincronización BBVA, Banorte, Santander',
        icon: Clock,
        type: 'Trigger'
      },
      aiEngine: {
        id: 'node-ai',
        step: 2,
        title: 'Trébol Finance-Sync v3',
        subtitle: 'Cruce $1.48M depósitos vs egresos',
        icon: Cpu,
        type: 'AI Core Engine'
      },
      router: {
        id: 'node-router',
        step: 3,
        title: 'Is Reconciled?',
        subtitle: '¿Folio Fiscal Coincide?',
        icon: GitBranch,
        type: 'Condition Router'
      },
      branches: {
        top: {
          id: 'node-top',
          step: 4,
          title: 'Update SAP / ERP Database',
          subtitle: 'Facturas Conciliadas 100%',
          icon: Server,
          status: 'True Path'
        },
        bottom: {
          id: 'node-bottom',
          step: 4,
          title: 'Validate Bank API Token',
          subtitle: 'Certificado AES-256 Validado',
          icon: ShieldCheck,
          status: 'False Path'
        },
        bottomSub: {
          id: 'node-bottom-sub',
          step: 5,
          title: 'Export PDF Report to Board',
          subtitle: 'Reporte Financiero enviado',
          icon: FileText,
          status: 'Notification'
        }
      }
    },
    stepMessages: {
      1: 'PASO 1 [TRIGGER]: Cron automatizado de medianoche activa sincronización bancaria multi-cuenta...',
      2: 'PASO 2 [PROCESAMIENTO IA]: Trébol Finance-Sync cruzando $1.48M MXN en depósitos vs facturas emitidas...',
      3: 'PASO 3 [ROUTER DECISIÓN]: Verificando coincidencia de folios fiscales -> 100% de coincidencia exacta',
      4: 'PASO 4 [EJECUCIÓN RAMIFICADA]: Actualizando estatus en SAP/ERP y validando certificado bancario AES-256...',
      5: 'PASO 5 [RESPUESTA FINAL]: Generando PDF de novedades y enviando reporte a Dirección.'
    }
  }
];

const pilaresSeguridad = [
  {
    titulo: 'Privacidad Enterprise Garantizada',
    desc: 'Utilizamos conexiones API comerciales que NO utilizan los datos ni conversaciones de tu empresa para entrenar modelos públicos.',
    icon: Lock,
  },
  {
    titulo: 'Encriptación AES-256 en Tránsito & Reposo',
    desc: 'Toda la información procesada se encripta bajo estándares bancarios internacionales.',
    icon: ShieldCheck,
  },
  {
    titulo: 'Servidores Dedicados en la Nube',
    desc: 'Infraestructura desplegada en AWS / Azure con cumplimiento SOC 2 Type II e ISO 27001.',
    icon: Server,
  },
];

const roadmapIA = [
  { 
    paso: '01', 
    titulo: 'Auditoría & Mapeo de Procesos', 
    desc: 'Analizamos la operativa diaria de tu empresa para identificar las 3 tareas con mayor carga manual, repetición y pérdida de tiempo.',
    entregable: 'Documento de Oportunidades de Automatización',
  },
  { 
    paso: '02', 
    titulo: 'Entrenamiento & Fine-Tuning', 
    desc: 'Entrenamos al modelo de IA con la base de conocimiento exclusiva de tu negocio: catálogo, políticas, manuales y casos de uso.',
    entregable: 'Modelo IA Privado Personalizado',
  },
  { 
    paso: '03', 
    titulo: 'Integración por API Segura', 
    desc: 'Conectamos el asistente a WhatsApp Business, correo electrónico, CRM (HubSpot/Salesforce) y tus bases de datos existentes.',
    entregable: 'Conectores API en Producción 24/7',
  },
  { 
    paso: '04', 
    titulo: 'Capacitación & Supervisión Humana', 
    desc: 'Formamos a tus colaboradores para auditar las respuestas del asistente y tomar el control cuando se requiera intervención humana.',
    entregable: 'Taller Práctico & Panel de Control Directivo',
  },
];

export default function IAPage() {
  const [selectedWorkflowIdx, setSelectedWorkflowIdx] = useState(0);
  const [activeStep, setActiveStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [lines, setLines] = useState(null);

  const canvasRef = useRef(null);
  const activeWf = n8nCanvasWorkflows[selectedWorkflowIdx];
  const tree = activeWf.tree;
  const layout = activeWf.layoutType;

  const TriggerIcon = tree.trigger.icon;
  const AiIcon = tree.aiEngine.icon;
  const RouterIcon = tree.router.icon;
  const TopIcon = tree.branches.top.icon;
  const BottomIcon = tree.branches.bottom.icon;
  const BottomSubIcon = tree.branches.bottomSub.icon;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animación Secuencial Iluminada de Pasos 1 -> 2 -> 3 -> 4 -> 5
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      setActiveStep(1);
      let step = 1;
      interval = setInterval(() => {
        step++;
        if (step > 5) {
          step = 1;
        }
        setActiveStep(step);
      }, 2200);
    }
    return () => clearInterval(interval);
  }, [selectedWorkflowIdx, isPlaying]);

  // MEDIDOR DE PUERTOS PIXEL-PERFECT BASADO EN RESIZEOBSERVER Y PIXELES REALES DEL DOM
  const updateConnections = () => {
    if (!canvasRef.current) return;
    const canvasRect = canvasRef.current.getBoundingClientRect();

    const getPortPos = (id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0) return null;
      return {
        x: rect.left - canvasRect.left + rect.width / 2,
        y: rect.top - canvasRect.top + rect.height / 2
      };
    };

    const pTrigOut = getPortPos('port-trig-out');
    const pAiIn = getPortPos('port-ai-in');
    const pAiOut = getPortPos('port-ai-out');
    const pRouterIn = getPortPos('port-router-in');
    const pRouterTrue = getPortPos('port-router-true');
    const pRouterFalse = getPortPos('port-router-false');
    const pTopIn = getPortPos('port-branch-top-in');
    const pMidIn = getPortPos('port-branch-mid-in');
    const pBotIn = getPortPos('port-branch-bot-in');

    if (!pTrigOut || !pAiIn || !pAiOut || !pRouterIn || !pRouterTrue || !pRouterFalse || !pTopIn || !pMidIn || !pBotIn) return;

    const createBezier = (p1, p2) => {
      const dx = Math.max(35, Math.abs(p2.x - p1.x) * 0.45);
      return `M ${p1.x} ${p1.y} C ${p1.x + dx} ${p1.y}, ${p2.x - dx} ${p2.y}, ${p2.x} ${p2.y}`;
    };

    setLines({
      line1: createBezier(pTrigOut, pAiIn),
      line2: createBezier(pAiOut, pRouterIn),
      lineTrue: createBezier(pRouterTrue, pTopIn),
      lineFalse1: createBezier(pRouterFalse, pMidIn),
      lineFalse2: createBezier(pRouterFalse, pBotIn),
      trueLabel: { x: (pRouterTrue.x + pTopIn.x) / 2, y: (pRouterTrue.y + pTopIn.y) / 2 - 10 },
      falseLabel: { x: (pRouterFalse.x + pMidIn.x) / 2, y: (pRouterFalse.y + pMidIn.y) / 2 - 10 }
    });
  };

  useLayoutEffect(() => {
    updateConnections();
    const observer = new ResizeObserver(() => updateConnections());
    if (canvasRef.current) observer.observe(canvasRef.current);
    
    window.addEventListener('resize', updateConnections);

    const timer1 = setTimeout(updateConnections, 60);
    const timer2 = setTimeout(updateConnections, 200);
    const timer3 = setTimeout(updateConnections, 500);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateConnections);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [selectedWorkflowIdx, activeStep]);

  // Ref para el progreso de scroll progresivo de la barra continua
  const roadmapRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: roadmapRef,
    offset: ["start 65%", "end 75%"]
  });

  return (
    <main className="w-full bg-hueso text-carbon min-h-screen overflow-hidden">
      {/* ── HERO EDITORIAL CLARO CON LUZ AMBIENTAL ───── */}
      <section className="relative w-full flex flex-col items-center justify-start pt-36 md:pt-44 pb-20 px-4 md:px-12 bg-hueso overflow-hidden">
        
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

        {/* Headline Container with Floating Glass Badge */}
        <div className="relative w-full max-w-[1400px] mx-auto text-center flex justify-center mb-16 md:mb-20 z-10">
          
          {/* Floating Glass Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -6 }}
            animate={{ opacity: 1, y: [0, -6, 0], rotate: -2 }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 0.8, delay: 0.2 },
              rotate: { duration: 0.8, delay: 0.2 }
            }}
            className="absolute -top-10 md:-top-12 lg:right-[14%] right-0 z-20"
          >
            <div className="bg-white/50 backdrop-blur-md px-6 py-3 border border-white/70 shadow-xl rounded-full text-sm md:text-lg text-carbon font-semibold">
              Agentes & Automatización IA Enterprise
            </div>
          </motion.div>

          {/* Massive Headline with Stagger Spring Animation */}
          <motion.h1 
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 90, damping: 14 }}
            className="text-5xl md:text-8xl lg:text-[8rem] font-black text-carbon leading-[0.85] tracking-tighter"
          >
            Inteligencia Artificial <br />
            con Propósito <span className="text-trebol">Comercial.</span>
          </motion.h1>
        </div>

        {/* Panoramic Hero Image Banner - 100% CLEAN WITHOUT TEXT OVERLAYS */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 16, delay: 0.3 }}
          whileHover={{ scale: 1.015 }}
          className="w-[95%] max-w-[1600px] h-[55vh] md:h-[65vh] min-h-[420px] relative rounded-3xl overflow-hidden shadow-2xl z-10 transition-shadow duration-500 hover:shadow-[0_30px_70px_rgba(92,158,49,0.15)]"
        >
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1800&q=80"
            alt="Inteligencia Artificial Trébol"
            className="w-full h-full object-cover object-center transition-transform duration-700"
          />
        </motion.div>
      </section>

      {/* ── SECCIÓN INTERACTIVA: LIENZO N8N 2D SIN CRUCE DE CABLES SOBRE TARJETAS ───── */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-28 relative z-10 border-t border-carbon/10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-black text-carbon tracking-tighter">
            Lienzo de Flujos <span className="text-trebol">n8n Canvas.</span>
          </h2>
          <p className="text-xl text-carbon/70 font-light max-w-2xl mx-auto mt-4">
            Diagrama de nodos conectivos con puertos de entrada/salida y ramificación lógica en tiempo real.
          </p>
        </div>

        {/* Selector de 3 Flujos de Negocio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {n8nCanvasWorkflows.map((wf, idx) => {
            const isSelected = selectedWorkflowIdx === idx;
            return (
              <button
                key={wf.id}
                onClick={() => setSelectedWorkflowIdx(idx)}
                className={`p-8 rounded-[2.5rem] text-left transition-all duration-400 border-2 flex flex-col justify-between h-44 cursor-pointer ${
                  isSelected
                    ? 'bg-carbon text-hueso border-trebol shadow-2xl scale-[1.02]'
                    : 'bg-white text-carbon border-trebol/30 hover:border-trebol shadow-[0_15px_40px_rgba(92,158,49,0.06)] hover:shadow-xl'
                }`}
              >
                <div>
                  <h3 className="text-xl font-bold tracking-tight mb-2">{wf.title}</h3>
                  <p className={`text-xs leading-relaxed font-light ${isSelected ? 'text-neutral-300' : 'text-carbon/70'}`}>
                    {wf.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* CANVASES STUDIO TIPO N8N (LÍNEAS LIMPIAS VIAJANDO SOLAMENTE POR ESPACIOS VACÍOS) */}
        <div className="bg-[#f8fafc] text-carbon rounded-[3.5rem] p-6 md:p-10 shadow-2xl border-2 border-trebol/40 relative overflow-hidden font-mono bg-[radial-gradient(#94a3b833_1.5px,transparent_1.5px)] [background-size:24px_24px] w-full">
          
          {/* Header Bar Studio */}
          <div className="flex flex-wrap items-center justify-between border-b border-slate-200 pb-6 mb-8 gap-4 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm" />
              <div className="w-3 h-3 rounded-full bg-amber-400 shadow-sm" />
              <div className="w-3 h-3 rounded-full bg-trebol shadow-sm" />
              <span className="text-xs font-mono text-slate-500 ml-2">n8n-studio-canvas — visual node workflow editor ({layout.toUpperCase()} LAYOUT)</span>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <span className="text-slate-600">Estado Ejecución: <strong className="text-trebol">Paso {activeStep} de 5</strong></span>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-carbon hover:bg-trebol text-white transition-colors px-4 py-1.5 rounded-full text-xs font-mono font-bold flex items-center gap-2 border border-black/10 shadow-sm"
              >
                <RotateCcw size={14} />
                {isPlaying ? 'Pausar Simulación' : 'Iniciar Simulación'}
              </button>
            </div>
          </div>

          {/* BANNER DE INSTRUCCIÓN Y ESTADO ACTUAL DE LA IA */}
          <div className="mb-8 bg-carbon text-hueso border-2 border-trebol/60 p-4 rounded-2xl relative z-10 flex items-center justify-between shadow-[0_10px_30px_rgba(92,158,49,0.2)]">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-trebol animate-ping shrink-0" />
              <p className="text-xs md:text-sm font-mono text-white font-bold tracking-tight">
                {activeWf.stepMessages[activeStep]}
              </p>
            </div>
            <span className="hidden md:inline-block text-xs font-mono text-trebol bg-trebol/10 px-3 py-1 rounded-full border border-trebol/30 shrink-0 font-bold">
              Nodo {activeStep} en Ejecución
            </span>
          </div>

          {/* CONTENEDOR DEL LIENZO: COLUMNAS SEQUENTIALES (COL 1 -> COL 2 -> COL 3 -> COL 4) */}
          <div ref={canvasRef} className="relative min-h-[500px] w-full z-10 py-2 overflow-hidden">
            
            {/* SVG OVERLAY DETRÁS DE LAS TARJETAS (z-0) */}
            {lines && (
              <svg className="w-full h-full absolute inset-0 pointer-events-none z-0 overflow-visible">
                <path 
                  d={lines.line1} 
                  stroke={activeStep >= 2 ? "#5C9E43" : "#94a3b8"} 
                  strokeWidth={activeStep >= 2 ? "3.5" : "2"} 
                  strokeDasharray={activeStep === 1 ? "6 6" : "none"}
                  fill="none"
                />
                <path 
                  d={lines.line2} 
                  stroke={activeStep >= 3 ? "#5C9E43" : "#94a3b8"} 
                  strokeWidth={activeStep >= 3 ? "3.5" : "2"} 
                  fill="none"
                />
                <path 
                  d={lines.lineTrue} 
                  stroke={activeStep >= 4 ? "#5C9E43" : "#94a3b8"} 
                  strokeWidth={activeStep >= 4 ? "3.5" : "2"} 
                  fill="none" 
                />
                <text x={lines.trueLabel.x} y={lines.trueLabel.y} fill={activeStep >= 4 ? "#5C9E43" : "#64748b"} fontSize="12" fontFamily="monospace" fontWeight="bold">true</text>

                <path 
                  d={lines.lineFalse1} 
                  stroke={activeStep >= 4 ? "#0284c7" : "#94a3b8"} 
                  strokeWidth={activeStep >= 4 ? "3.5" : "2"} 
                  fill="none" 
                />
                <text x={lines.falseLabel.x} y={lines.falseLabel.y} fill={activeStep >= 4 ? "#0284c7" : "#64748b"} fontSize="12" fontFamily="monospace" fontWeight="bold">false</text>

                <path 
                  d={lines.lineFalse2} 
                  stroke={activeStep >= 5 ? "#d97706" : "#94a3b8"} 
                  strokeWidth={activeStep >= 5 ? "3.5" : "2"} 
                  fill="none" 
                />
              </svg>
            )}

            {/* RETÍCULA DE 4 COLUMNAS EN LÍNEA SECUENCIAL SIN CRUCES DE TARJETAS */}
            <div className="w-full relative z-10 grid grid-cols-1 md:grid-cols-4 gap-4 items-center min-h-[460px]">
              
              {/* COLUMNA 1: TRIGGER (PASO 1) */}
              <div className={`flex justify-center w-full ${
                layout === 'v-shape' ? 'self-start mt-4' : layout === 'zig-zag' ? 'self-start mt-2' : 'self-center'
              }`}>
                <div className={`w-full max-w-[210px] p-4 rounded-3xl border-2 transition-all duration-500 relative bg-carbon text-hueso shadow-2xl z-10 ${
                  activeStep === 1 ? 'border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.5)] scale-105' : 'border-white/10 opacity-80'
                }`}>
                  <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 flex items-center justify-center mx-auto mb-2 shadow-inner"><TriggerIcon size={20} /></div>
                  <span className="text-[8px] uppercase font-bold text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded-full border border-cyan-500/40 block w-fit mx-auto mb-1.5">{tree.trigger.type}</span>
                  <h4 className="text-xs font-bold text-white font-sans text-center mb-1 leading-tight line-clamp-1">{tree.trigger.title}</h4>
                  <p className="text-[9px] text-neutral-300 font-sans text-center leading-snug line-clamp-2">{tree.trigger.subtitle}</p>

                  <div id="port-trig-out" className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-carbon border-2 border-cyan-400 items-center justify-center shadow-md">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  </div>
                </div>
              </div>

              {/* COLUMNA 2: TRÉBOL AI CORE (PASO 2) */}
              <div className={`flex justify-center w-full ${
                layout === 'v-shape' ? 'self-end mb-4' : layout === 'zig-zag' ? 'self-center' : 'self-center'
              }`}>
                <div className={`w-full max-w-[210px] p-4 rounded-3xl border-2 transition-all duration-500 relative bg-carbon text-hueso shadow-2xl z-10 ${
                  activeStep === 2 ? 'border-trebol shadow-[0_0_35px_rgba(92,158,49,0.6)] scale-105' : 'border-white/10 opacity-80'
                }`}>
                  <div id="port-ai-in" className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-carbon border-2 border-trebol items-center justify-center shadow-md"><div className="w-1.5 h-1.5 rounded-full bg-trebol" /></div>
                  <div className="w-10 h-10 rounded-2xl bg-trebol/20 border border-trebol/40 text-trebol flex items-center justify-center mx-auto mb-2 shadow-inner"><AiIcon size={20} /></div>
                  <span className="text-[8px] uppercase font-bold text-white bg-trebol px-2 py-0.5 rounded-full block w-fit mx-auto mb-1.5 shadow-sm">{tree.aiEngine.type}</span>
                  <h4 className="text-xs font-bold text-white font-sans text-center mb-1 leading-tight line-clamp-1">{tree.aiEngine.title}</h4>
                  <p className="text-[9px] text-neutral-300 font-sans text-center leading-snug line-clamp-2">{tree.aiEngine.subtitle}</p>
                  <div id="port-ai-out" className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-carbon border-2 border-trebol items-center justify-center shadow-md"><div className="w-1.5 h-1.5 rounded-full bg-trebol" /></div>
                </div>
              </div>

              {/* COLUMNA 3: ROUTER CONDICIONAL (PASO 3) */}
              <div className={`flex justify-center w-full ${
                layout === 'v-shape' ? 'self-start mt-2' : layout === 'zig-zag' ? 'self-end mb-2' : 'self-center'
              }`}>
                <div className={`w-full max-w-[190px] p-4 rounded-3xl border-2 transition-all duration-500 relative bg-carbon text-hueso shadow-2xl z-10 ${
                  activeStep === 3 ? 'border-amber-400 shadow-[0_0_35px_rgba(251,191,36,0.5)] scale-105' : 'border-white/10 opacity-80'
                }`}>
                  <div id="port-router-in" className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-carbon border-2 border-amber-400 items-center justify-center shadow-md"><div className="w-1.5 h-1.5 rounded-full bg-amber-400" /></div>
                  <div className="w-9 h-9 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center mx-auto mb-1.5 shadow-inner"><RouterIcon size={18} /></div>
                  <span className="text-[8px] uppercase font-bold text-amber-400 bg-amber-950 px-2 py-0.5 rounded-full border border-amber-500/40 block w-fit mx-auto mb-1">{tree.router.type}</span>
                  <h4 className="text-[11px] font-bold text-white font-sans text-center leading-tight truncate">{tree.router.title}</h4>

                  <div id="port-router-true" className="hidden md:flex absolute -right-3 top-1/3 -translate-y-1/2 w-4 h-4 rounded-full bg-trebol text-white border-2 border-white items-center justify-center text-[8px] font-bold shadow-md">T</div>
                  <div id="port-router-false" className="hidden md:flex absolute -right-3 top-2/3 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-400 text-black border-2 border-white items-center justify-center text-[8px] font-bold shadow-md">F</div>
                </div>
              </div>

              {/* COLUMNA 4: TARJETAS DE ACCIÓN RAMIFICADAS (PASOS 4 & 5) */}
              <div className="flex flex-col justify-between space-y-3 w-full z-10">
                {/* Branch Top Card (True Path) */}
                <div className={`p-3.5 rounded-2xl border-2 transition-all duration-500 relative bg-carbon text-hueso shadow-xl z-10 ${
                  activeStep === 4 ? 'border-trebol shadow-[0_0_30px_rgba(92,158,49,0.5)] scale-102' : 'border-white/10 opacity-80'
                }`}>
                  <div id="port-branch-top-in" className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-trebol border border-white items-center justify-center shadow-md"><Check size={8} className="text-white" /></div>
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${activeStep === 4 ? 'bg-trebol text-white font-bold shadow-md' : 'bg-trebol/20 text-trebol border border-trebol/30'}`}><TopIcon size={16} /></div>
                    <div className="overflow-hidden">
                      <span className="text-[7px] bg-trebol/20 text-trebol px-1.5 py-0.5 rounded border border-trebol/30 uppercase font-bold block w-fit mb-0.5">{tree.branches.top.status}</span>
                      <h4 className="text-[11px] font-bold text-white font-sans leading-tight truncate">{tree.branches.top.title}</h4>
                      <p className="text-[9px] text-neutral-300 font-sans leading-tight truncate">{tree.branches.top.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Branch Mid Card (False Path 1) */}
                <div className={`p-3.5 rounded-2xl border-2 transition-all duration-500 relative bg-carbon text-hueso shadow-xl z-10 ${
                  activeStep === 4 ? 'border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.5)] scale-102' : 'border-white/10 opacity-80'
                }`}>
                  <div id="port-branch-mid-in" className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-cyan-400 border border-white items-center justify-center shadow-md"><div className="w-1 h-1 rounded-full bg-black" /></div>
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${activeStep === 4 ? 'bg-cyan-500 text-black font-bold shadow-md' : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'}`}><BottomIcon size={16} /></div>
                    <div className="overflow-hidden">
                      <span className="text-[7px] bg-cyan-950 text-cyan-400 px-1.5 py-0.5 rounded border border-cyan-500/30 uppercase font-bold block w-fit mb-0.5">{tree.branches.bottom.status}</span>
                      <h4 className="text-[11px] font-bold text-white font-sans leading-tight truncate">{tree.branches.bottom.title}</h4>
                      <p className="text-[9px] text-neutral-300 font-sans leading-tight truncate">{tree.branches.bottom.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Branch Bot Card (False Path 2) */}
                <div className={`p-3.5 rounded-2xl border-2 transition-all duration-500 relative bg-carbon text-hueso shadow-xl z-10 ${
                  activeStep === 5 ? 'border-amber-400 shadow-[0_0_30px_rgba(251,191,36,0.5)] scale-102' : 'border-white/10 opacity-80'
                }`}>
                  <div id="port-branch-bot-in" className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-amber-400 border border-white items-center justify-center shadow-md"><div className="w-1 h-1 rounded-full bg-black" /></div>
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${activeStep === 5 ? 'bg-amber-400 text-black font-bold shadow-md' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'}`}><BottomSubIcon size={16} /></div>
                    <div className="overflow-hidden">
                      <span className="text-[7px] bg-amber-950 text-amber-400 px-1.5 py-0.5 rounded border border-amber-500/30 uppercase font-bold block w-fit mb-0.5">{tree.branches.bottomSub.status}</span>
                      <h4 className="text-[11px] font-bold text-white font-sans leading-tight truncate">{tree.branches.bottomSub.title}</h4>
                      <p className="text-[9px] text-neutral-300 font-sans leading-tight truncate">{tree.branches.bottomSub.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Footer Informativo del Canvas n8n */}
          <div className="flex flex-wrap items-center justify-between border-t border-slate-200 pt-4 mt-8 text-xs text-slate-500 font-mono gap-2 relative z-10">
            <span className="flex items-center gap-2">
              <Layers size={14} className="text-trebol" />
              Diagrama n8n Canónico — Conexiones Vectoriales Limpias Viajando Exclusivamente por Espacios Libres (Sin Cruce de Tarjetas)
            </span>
            <Link
              href="/agenda"
              className="text-trebol font-bold hover:underline flex items-center gap-1"
            >
              Diseñar Mi Flujo a Medida <ArrowUpRight size={14} />
            </Link>
          </div>

        </div>
      </section>

      {/* ── SECCIÓN ÚNICA 2: HOJA DE RUTA EN 4 PASOS ─────────────────── */}
      <section ref={roadmapRef} className="w-full bg-hueso py-24 px-6 md:px-12 relative z-10 border-t border-carbon/10">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-7xl font-black text-carbon tracking-tighter">
              Hoja de Ruta en <span className="text-trebol">4 Pasos.</span>
            </h2>
            <p className="text-xl text-carbon/70 font-light max-w-2xl mx-auto mt-4">
              Un proceso estructurado de 4 fases para implementar Inteligencia Artificial en tu empresa sin interrumpir la operación.
            </p>
          </div>

          {/* CONTENEDOR TIMELINE CON LÍNEA CONTINUA ÚNICA */}
          <div className="relative space-y-12">
            
            {/* LÍNEA VERTICAL CONTINUA */}
            <div className="absolute left-8 md:left-10 top-12 bottom-12 w-1.5 bg-carbon/15 -translate-x-1/2 rounded-full overflow-hidden z-0 pointer-events-none">
              <motion.div 
                style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
                className="w-full h-full bg-trebol rounded-full"
              />
            </div>

            {roadmapIA.map((r) => (
              <div
                key={r.paso}
                className="flex items-start gap-6 md:gap-10 group relative z-10 opacity-100"
              >
                {/* COLUMNA 1: Círculos 100% Sólidos */}
                <div className="w-16 md:w-20 shrink-0 flex justify-center pt-8">
                  <motion.div 
                    initial={{ backgroundColor: '#2D2D2D', color: '#ffffff', borderColor: '#F5F5F5' }}
                    whileInView={{ 
                      backgroundColor: '#5C9E43', 
                      color: '#ffffff',
                      borderColor: '#F5F5F5',
                    }}
                    viewport={{ once: true, margin: "-25% 0px -25% 0px" }}
                    transition={{ duration: 0.4 }}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full border-4 text-white font-mono font-black text-xl md:text-2xl flex items-center justify-center shadow-md z-20 opacity-100 bg-[#2D2D2D]"
                  >
                    {r.paso}
                  </motion.div>
                </div>

                {/* COLUMNA 2: Tarjeta con estilo estandarizado */}
                <motion.div 
                  initial={{ 
                    opacity: 0.35,
                    backgroundColor: '#ffffff', 
                    borderColor: '#e5e5e5',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
                  }}
                  whileInView={{ 
                    opacity: 1,
                    backgroundColor: '#f2f8ed', 
                    borderColor: '#5C9E43',
                    boxShadow: '0 15px 40px rgba(92,158,49,0.14)',
                  }}
                  viewport={{ margin: "-22% 0px -22% 0px", amount: 0.6 }}
                  transition={{ duration: 0.4 }}
                  className="flex-1 border-2 rounded-[2.5rem] p-8 md:p-12 transition-all duration-400 relative overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 relative z-10">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest bg-trebol/10 text-trebol px-4 py-1.5 rounded-full border border-trebol/30">
                      Fase {r.paso}
                    </span>
                    
                    <div className="flex items-center gap-2 text-xs font-mono font-bold bg-white text-carbon/80 px-4 py-1.5 rounded-full border border-neutral-200 shadow-sm">
                      <Check size={14} className="text-trebol shrink-0" />
                      <span>Entregable: {r.entregable}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-4xl font-black text-carbon mb-4 tracking-tight">
                    {r.titulo}
                  </h3>

                  <p className="text-lg md:text-xl text-carbon/75 font-light leading-relaxed">
                    {r.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN ÚNICA 3: MATRIZ DE SEGURIDAD & GOBERNANZA DE DATOS ─ */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-32 relative z-10 font-sans">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-carbon tracking-tighter">
            Gobernanza & Protección de Datos.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pilaresSeguridad.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.titulo}
                className="bg-white rounded-[2.5rem] p-8 border-2 border-trebol/40 hover:border-trebol shadow-[0_20px_50px_rgba(92,158,49,0.08)] hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-400 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-trebol/10 border border-trebol/30 flex items-center justify-center text-trebol mb-6">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-carbon mb-3">{p.titulo}</h3>
                  <p className="text-carbon/70 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Contact CTA (mismo estilo que Home) ────────── */}
      <Contact />
    </main>
  );
}
