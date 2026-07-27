'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, CheckCircle2, Play, RefreshCw, Bot, Cpu, 
  Sparkles, ShieldCheck, Lock, Key, Server, Terminal, Zap, FileText
} from 'lucide-react';

const aiPrompts = [
  {
    title: '1. Agente de Atención al Cliente (WhatsApp & Web)',
    prompt: '"Atender dudas sobre precios y agendar cita en calendario automáticamente"',
    result: 'Agente respondió en 1.2s. Cita agendada para el Jueves 10:00 AM. Notificación enviada al CRM.',
    status: '● Activo 24/7',
    ahorro: 'Liberadas 25h/semana',
    model: 'Trébol Customer Agent v3',
  },
  {
    title: '2. Agente Filtro de Reclutamiento & RRHH',
    prompt: '"Analizar 150 CVs recibidos hoy y clasificar los 5 perfiles con mayor coincidencia"',
    result: '150 CVs procesados en 8 segundos. Ranking generado con puntuaciones de compatibilidad > 90%.',
    status: '● Proceso Concluido',
    ahorro: 'Reducción de 3 días a 10 min',
    model: 'Trébol HR Screener v2',
  },
  {
    title: '3. Automatizador de Reportes Financieros',
    prompt: '"Consolidar facturas y estados de cuenta de 3 bancos en un reporte ejecutivo"',
    result: 'Balance consolidado. Gráficas de flujo generadas y enviadas por correo a Dirección.',
    status: '● Programado cada Lunes',
    ahorro: '15 horas manuales ahorradas',
    model: 'Trébol Finance Sync v1',
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
  const [isSimulating, setIsSimulating] = useState(false);
  const current = aiPrompts[activePrompt];

  const handleSimulate = (idx) => {
    setActivePrompt(idx);
    setIsSimulating(true);
    setTimeout(() => setIsSimulating(false), 600);
  };

  return (
    <main className="w-full bg-hueso text-carbon min-h-screen overflow-hidden">
      {/* ── HERO ESPACIOSO CON FONDO HUESO Y LUZ AMBIENTAL ───────────── */}
      <section className="relative w-full flex flex-col items-center justify-start pt-36 md:pt-44 pb-20 px-4 md:px-12 bg-hueso overflow-hidden border-b border-carbon/10">
        
        {/* Animated Green Ambient Light Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <motion.div 
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.8, 0.6] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -left-40 w-[36rem] h-[36rem] bg-trebol/20 rounded-full blur-[110px]"
          />
        </div>

        <div className="relative w-full max-w-[1400px] mx-auto text-center flex flex-col items-center mb-16 z-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-trebol bg-trebol/10 px-5 py-2.5 rounded-full mb-6 border border-trebol/30 flex items-center gap-2">
            <Sparkles size={14} />
            Agentes & Automatización IA Enterprise
          </span>
          
          <h1 className="text-5xl md:text-8xl lg:text-[8.5rem] font-black text-carbon leading-[0.82] tracking-tighter mb-8">
            Inteligencia Artificial <br />
            con Propósito <span className="text-trebol">Comercial.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-carbon/70 font-light max-w-3xl leading-relaxed">
            Desplegamos asistentes virtuales y flujos automáticos entrenados con la información de tu empresa. Libera a tu equipo de tareas repetitivas.
          </p>
        </div>

        {/* Hero Visual Image Banner */}
        <div className="w-[95%] max-w-[1500px] h-[55vh] md:h-[65vh] rounded-[3rem] overflow-hidden shadow-2xl relative border border-white z-10 group">
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1800&q=80"
            alt="Inteligencia Artificial Trébol"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon/90 via-transparent to-transparent flex items-end p-8 md:p-14">
            <div className="flex flex-wrap items-center gap-4 text-white font-mono text-xs">
              <span className="bg-trebol px-4 py-2 rounded-full font-bold">OpenAI & Anthropic APIs</span>
              <span className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-md">Respuestas &lt; 1.5s</span>
              <span className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-md">Integración WhatsApp & Web</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN ÚNICA 1: SIMULADOR DE AGENTE IA EN CONSOLA DARK ───── */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-28 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-trebol bg-trebol/10 px-4 py-1.5 rounded-full mb-4 inline-block border border-trebol/20">
            Consola Interactiva de Pruebas
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-carbon tracking-tighter">
            Prueba cómo Operan los Agentes
          </h2>
          <p className="text-xl text-carbon/70 font-light max-w-2xl mx-auto mt-4">
            Selecciona un escenario de negocio a continuación para ejecutar la simulación de respuesta en tiempo real.
          </p>
        </div>

        {/* Prompt Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {aiPrompts.map((p, idx) => (
            <button
              key={p.title}
              onClick={() => handleSimulate(idx)}
              className={`p-8 rounded-[2.5rem] text-left transition-all duration-300 border flex flex-col justify-between h-48 ${
                activePrompt === idx
                  ? 'bg-carbon text-hueso border-trebol shadow-2xl scale-[1.02]'
                  : 'bg-white text-carbon border-gray-200 hover:border-trebol/50 shadow-sm'
              }`}
            >
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-trebol block mb-2">{p.status}</span>
                <h3 className="text-xl font-bold tracking-tight">{p.title}</h3>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-current/10 font-mono text-xs">
                <span>{p.ahorro}</span>
                <Play size={18} className={activePrompt === idx ? 'text-trebol fill-trebol' : 'text-carbon/30'} />
              </div>
            </button>
          ))}
        </div>

        {/* Live Terminal Box */}
        <div className="bg-carbon text-hueso rounded-[3.5rem] p-8 md:p-14 shadow-2xl border border-white/10 relative overflow-hidden font-mono">
          <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <span className="w-3.5 h-3.5 rounded-full bg-red-500/80" />
              <span className="w-3.5 h-3.5 rounded-full bg-yellow-500/80" />
              <span className="w-3.5 h-3.5 rounded-full bg-trebol" />
            </div>
            <span className="text-xs text-trebol font-bold bg-trebol/10 px-4 py-1.5 rounded-full border border-trebol/30">
              {current.model}
            </span>
          </div>

          <div className="space-y-6">
            <div className="bg-[#2d2d2d] p-6 rounded-2xl border border-white/5 space-y-2">
              <span className="text-xs text-gray-400 font-bold block mb-1">&gt; Prompt Ejecutado por la Empresa:</span>
              <p className="text-lg text-white font-sans font-medium">{current.prompt}</p>
            </div>

            <div className="bg-[#1C1D1F] p-6 rounded-2xl border border-trebol/30 space-y-3 relative">
              {isSimulating ? (
                <div className="flex items-center gap-3 text-trebol py-4">
                  <RefreshCw size={24} className="animate-spin" />
                  <span className="text-base font-bold">Procesando petición por API segura...</span>
                </div>
              ) : (
                <>
                  <span className="text-xs font-bold text-trebol block uppercase tracking-widest">Respuesta en Tiempo Real:</span>
                  <p className="text-xl text-[#70C039] font-sans font-bold leading-relaxed">{current.result}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN ÚNICA 2: HOJA DE RUTA EN TIMELINE VERTICAL EDITORIAL ───── */}
      <section className="w-full max-w-[1200px] mx-auto px-6 md:px-12 py-20 relative z-10">
        <div className="text-center mb-20">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-trebol bg-trebol/10 px-4 py-1.5 rounded-full mb-4 inline-block border border-trebol/20">
            Metodología de Despliegue
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-carbon tracking-tighter">
            Hoja de Ruta en 4 Pasos.
          </h2>
          <p className="text-xl text-carbon/70 font-light max-w-2xl mx-auto mt-4">
            Un proceso estructurado de 4 fases para implementar IA en tu empresa sin interrumpir la operación.
          </p>
        </div>

        {/* EDITORIAL VERTICAL TIMELINE CONTAINER */}
        <div className="relative pl-6 md:pl-16 space-y-16">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-6 md:left-16 top-6 bottom-6 w-1 bg-gradient-to-b from-trebol via-emerald-400 to-carbon/20 -translate-x-1/2 rounded-full" />

          {roadmapIA.map((r, idx) => (
            <motion.div
              key={r.paso}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative flex flex-col md:flex-row items-start gap-8 md:gap-12 group"
            >
              {/* Timeline Node Circle Icon */}
              <div className="absolute -left-6 md:-left-16 top-0 -translate-x-1/2 w-14 h-14 rounded-full bg-carbon text-hueso border-4 border-hueso font-mono font-black text-xl flex items-center justify-center shadow-xl group-hover:bg-trebol transition-colors duration-300 z-20">
                {r.paso}
              </div>

              {/* Timeline Glassmorphic Card */}
              <div className="w-full bg-white/90 backdrop-blur-2xl border border-white rounded-[2.5rem] p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                  <span className="text-xs font-mono font-bold text-trebol uppercase tracking-widest bg-trebol/10 px-3.5 py-1 rounded-full border border-trebol/20">
                    Fase {r.paso}
                  </span>
                  <span className="text-xs font-mono text-carbon/40 font-bold">
                    Entregable: {r.entregable}
                  </span>
                </div>

                <h3 className="text-2xl md:text-4xl font-black text-carbon mb-4 tracking-tight">
                  {r.titulo}
                </h3>

                <p className="text-lg md:text-xl text-carbon/70 font-light leading-relaxed">
                  {r.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SECCIÓN ÚNICA 3: MATRIZ DE SEGURIDAD & GOBERNANZA DE DATOS ─ */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-32 relative z-10">
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
