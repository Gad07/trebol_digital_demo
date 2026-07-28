'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll } from 'framer-motion';
import { 
  ArrowUpRight, CheckCircle2, Play, RefreshCw, Bot, Cpu, 
  Sparkles, ShieldCheck, Lock, Server, Terminal, Zap, FileText, Check,
  PlayCircle
} from 'lucide-react';

const aiPrompts = [
  {
    title: '1. Agente Comercial & Atención WhatsApp 24/7',
    status: '● Activo 24/7',
    ahorro: 'Liberadas 25h/semana',
    model: 'Trébol Customer Agent v3',
    cliLogs: [
      { type: 'cmd', text: '&gt; INICIANDO AGENTE COMERCIAL DE ATENCIÓN Y VENTAS 24/7' },
      { type: 'info', text: '✔ [MENSAJE RECIBIDO 02:40 AM]: "¿Precios y disponibilidad para agendar una demostración?"' },
      { type: 'process', text: '⚡ [RESPUESTA IA < 1s]: Asistente envía propuesta técnica y evalúa perfil comercial' },
      { type: 'process', text: '⚡ [CUALIFICACIÓN B2B]: Prospecto verificado: Empresa de 85 empleados (Presupuesto Validado)' },
      { type: 'process', text: '⚡ [CALENDARIO EN VIVO]: Verificando agenda directiva... Cita agendada para el Jueves 10:00 AM' },
      { type: 'success', text: '✔ [RESULTADO COMERCIAL]: Prospecto agendado en CRM + Notificación en tiempo real por WhatsApp' },
      { type: 'success', text: '✔ [IMPACTO EN EL NEGOCIO]: +40% conversión de clientes nocturnos sin intervención humana' }
    ]
  },
  {
    title: '2. Filtro de Reclutamiento & RRHH',
    status: '● Proceso Concluido',
    ahorro: 'Reducción de 3 días a 10 min',
    model: 'Trébol HR Screener v2',
    cliLogs: [
      { type: 'cmd', text: '&gt; INICIANDO EVALUACIÓN ALGORÍTMICA DE TALENTO Y RRHH' },
      { type: 'info', text: '✔ [RECEPCIÓN MASIVA]: 150 Currículums en PDF procesados simultáneamente' },
      { type: 'process', text: '⚡ [EXTRACCIÓN ALGORÍTMICA]: Escaneo de experiencia técnica, proyectos e idiomas en 4.2s' },
      { type: 'process', text: '🥇 [RANK 1]: Carlos Mendoza (98% Compatibilidad) — 8 años exp, Stack Next.js/Python, C1' },
      { type: 'process', text: '🥈 [RANK 2]: Mariana Silva (95% Compatibilidad) — 6 años exp, React/AWS, C1' },
      { type: 'process', text: '🥉 [RANK 3]: Roberto Gómez (91% Compatibilidad) — 7 años exp, Node.js/DevOps, C2' },
      { type: 'success', text: '✔ [RESULTADO RRHH]: 147 candidatos notificados y Top 3 perfiles enviados a la dirección de RRHH' },
      { type: 'success', text: '✔ [IMPACTO EN EL NEGOCIO]: Tiempo de selección reducido de 3 días manuales a 10 segundos' }
    ]
  },
  {
    title: '3. Automatizador de Reportes Financieros',
    status: '● Programado cada Lunes',
    ahorro: '15 horas manuales ahorradas',
    model: 'Trébol Finance Sync v1',
    cliLogs: [
      { type: 'cmd', text: '&gt; INICIANDO CONCILIACIÓN FINANCIERA MULTIBANCO ENCRIPTADA' },
      { type: 'info', text: '✔ [CONEXIÓN ENCRIPTADA AES-256]: Sincronizando datos con BBVA, Banorte y Santander' },
      { type: 'process', text: '⚡ [BBVA]: $840,000 MXN | [BANORTE]: $420,200 MXN | [SANTANDER]: $220,000 MXN' },
      { type: 'process', text: '⚡ [INGRESOS TOTALES]: $1,480,200 MXN | [EGRESOS OPERATIVOS]: $620,400 MXN' },
      { type: 'process', text: '⚡ [MARGEN OPERATIVO]: +58.1% Utilidad Neta (+$859,800 MXN acumulados)' },
      { type: 'success', text: '✔ [RESULTADO FINANCIERO]: Reporte PDF generado e integrado al sistema contable automáticamente' },
      { type: 'success', text: '✔ [IMPACTO EN EL NEGOCIO]: Cero margen de error humano y 15 horas de trabajo manual ahorradas a la semana' }
    ]
  },
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
  const [activePrompt, setActivePrompt] = useState(0);
  const [displayedLogs, setDisplayedLogs] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const current = aiPrompts[activePrompt];

  // Ref para el progreso de scroll progresivo de la barra continua
  const roadmapRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: roadmapRef,
    offset: ["start 65%", "end 75%"]
  });

  const handleSimulate = (idx) => {
    setActivePrompt(idx);
  };

  useEffect(() => {
    const logs = aiPrompts[activePrompt].cliLogs;
    setDisplayedLogs([]);
    setIsTyping(true);
    
    let index = 0;
    const interval = setInterval(() => {
      if (index < logs.length) {
        const nextLog = logs[index];
        setDisplayedLogs((prev) => [...prev, nextLog]);
        index++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 320);

    return () => clearInterval(interval);
  }, [activePrompt]);

  return (
    <main className="w-full bg-hueso text-carbon min-h-screen overflow-hidden">
      {/* ── HERO EXACTO ESTILO HOME CON BADGE FLOTANTE & LUZ AMBIENTAL (IMAGEN LIMPIA SIN TEXTOS) ───── */}
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

      {/* ── TERMINAL MAC CON DATOS COMERCIALES EN VIVO (ESTILO DEVELOPER CLI CON IMPACTO B2B) ───── */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-28 relative z-10 border-t border-carbon/10">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-trebol bg-trebol/10 px-4 py-1.5 rounded-full mb-4 inline-block border border-trebol/20">
            Consola Operativa en Tiempo Real
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-carbon tracking-tighter">
            Prueba cómo Operan los <span className="text-trebol">Agentes.</span>
          </h2>
          <p className="text-xl text-carbon/70 font-light max-w-2xl mx-auto mt-4">
            Selecciona un caso de uso comercial a continuación para presenciar el impacto operativo e indicadores en tiempo real.
          </p>
        </div>

        {/* Tarjetas de Selección de Escenario */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {aiPrompts.map((p, idx) => (
            <button
              key={p.title}
              onClick={() => handleSimulate(idx)}
              className={`p-8 rounded-[2.5rem] text-left transition-all duration-300 border flex flex-col justify-between h-48 ${
                activePrompt === idx
                  ? 'bg-carbon text-hueso border-trebol shadow-2xl scale-[1.02]'
                  : 'bg-white text-carbon border-neutral-200 hover:border-trebol/50 shadow-sm'
              }`}
            >
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-trebol block mb-2">{p.status}</span>
                <h3 className="text-xl font-bold tracking-tight">{p.title}</h3>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-current/10 font-mono text-xs">
                <span>{p.ahorro}</span>
                <PlayCircle size={20} className={activePrompt === idx ? 'text-trebol fill-trebol/20' : 'text-carbon/30'} />
              </div>
            </button>
          ))}
        </div>

        {/* TERMINAL ESTILO MAC DEVELOPER CON DATOS COMERCIALES */}
        <div className="bg-[#0f1115] text-neutral-100 rounded-[3.5rem] p-8 md:p-14 shadow-2xl border border-trebol/30 relative overflow-hidden font-mono">
          
          {/* Header Bar macOS Terminal */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
            <div className="flex items-center gap-3">
              <span className="w-3.5 h-3.5 rounded-full bg-red-500/90 shadow-sm" />
              <span className="w-3.5 h-3.5 rounded-full bg-yellow-500/90 shadow-sm" />
              <span className="w-3.5 h-3.5 rounded-full bg-trebol shadow-sm" />
              <span className="text-xs text-neutral-400 font-mono ml-2">trebol-console — zsh — live execution</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-trebol font-bold bg-trebol/10 px-4 py-1.5 rounded-full border border-trebol/30 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-trebol animate-ping" />
                {current.model}
              </span>
            </div>
          </div>

          {/* LOGS DE TERMINAL EN VIVO CON RESULTADOS DE VALOR COMERCIAL */}
          <div className="bg-[#08090c] p-6 md:p-8 rounded-2xl border border-white/5 min-h-[340px] font-mono text-sm md:text-base leading-relaxed space-y-3 relative overflow-hidden">
            {displayedLogs.map((log, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25 }}
                className="flex items-start gap-2"
              >
                {log.type === 'cmd' && (
                  <p className="text-cyan-400 font-bold bg-cyan-950/30 px-3 py-1 rounded border border-cyan-500/30 w-full">{log.text}</p>
                )}
                {log.type === 'info' && (
                  <p className="text-sky-300 font-medium">{log.text}</p>
                )}
                {log.type === 'process' && (
                  <p className="text-neutral-300 font-light">{log.text}</p>
                )}
                {log.type === 'success' && (
                  <p className="text-[#70C039] font-bold bg-trebol/10 p-3 rounded-xl border border-trebol/30 w-full">{log.text}</p>
                )}
              </motion.div>
            ))}

            {/* Cursor Pulsante █ */}
            {isTyping && (
              <div className="flex items-center gap-2 text-trebol pt-2">
                <span className="inline-block w-2.5 h-5 bg-trebol animate-pulse" />
                <span className="text-xs text-neutral-400 font-mono">Procesando datos operativos por API segura...</span>
              </div>
            )}
          </div>

          {/* Footer Informativo de la Terminal */}
          <div className="flex flex-wrap items-center justify-between border-t border-white/10 pt-4 mt-6 text-xs text-neutral-400 font-mono gap-2">
            <span>Privacidad Empresarial Garantizada — Conexión Comercial API</span>
            <span className="text-trebol font-bold">⚡ Respuesta &lt; 1.2s</span>
          </div>

        </div>
      </section>

      {/* ── SECCIÓN ÚNICA 2: HOJA DE RUTA EN 4 PASOS ─────────────────── */}
      <section ref={roadmapRef} className="w-full bg-hueso py-24 px-6 md:px-12 relative z-10 border-t border-carbon/10">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-trebol bg-trebol/10 px-4 py-2 rounded-full mb-4 inline-block border border-trebol/20">
              Metodología de Despliegue
            </span>
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
                      backgroundColor: '#5C9E31', 
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

                {/* COLUMNA 2: Tarjeta con efecto foco al centro */}
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
                    borderColor: '#5C9E31',
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
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-trebol bg-trebol/10 px-4 py-1.5 rounded-full mb-4 inline-block border border-trebol/20">
            Seguridad Garantizada
          </span>
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
                className="bg-white/80 backdrop-blur-2xl border border-white rounded-[2.5rem] p-8 hover:border-trebol/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
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

      {/* ── Contact CTA Editorial ────────────────────── */}
      <section className="w-full bg-hueso pb-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto bg-white/60 backdrop-blur-2xl border border-white/80 rounded-[3rem] p-12 md:p-20 shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div>
              <h2 className="text-5xl md:text-7xl font-black text-carbon tracking-tighter leading-[0.9] mb-6">
                Descubre cómo usar <br />
                <span className="text-trebol">IA en tu empresa.</span>
              </h2>
              <p className="text-2xl text-carbon/70 font-light max-w-xl leading-relaxed">
                En una sesión de 30 minutos analizamos tus procesos e identificaremos oportunidades de automatización inmediata.
              </p>
            </div>

            <Link
              href="/agenda"
              className="inline-flex items-center gap-2 bg-carbon text-hueso font-bold px-10 py-6 rounded-full hover:bg-trebol transition-colors duration-500 text-xl shrink-0 shadow-xl"
            >
              Agendar diagnóstico
              <ArrowUpRight size={22} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
