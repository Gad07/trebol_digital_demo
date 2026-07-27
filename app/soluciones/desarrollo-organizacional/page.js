'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, CheckCircle2, Activity, Users, Target, 
  Workflow, Award, ShieldCheck, HeartHandshake, FileText, Check, AlertCircle
} from 'lucide-react';

const raciItems = [
  {
    decision: 'Aprobación de Estrategia Anual & Presupuesto',
    r: 'Dirección General',
    a: 'Consejo / Fundadores',
    c: 'Gerencias de Área',
    i: 'Toda la Empresa',
  },
  {
    decision: 'Lanzamiento de Nuevos Productos o Servicios',
    r: 'Equipo de Producto & Marketing',
    a: 'Director Comercial',
    c: 'Atención al Cliente & Operaciones',
    i: 'Fuerza de Ventas',
  },
  {
    decision: 'Contratación & Evaluación de Desempeño',
    r: 'Líder Directo & RRHH',
    a: 'Gerente del Área',
    c: 'Equipo de Trabajo',
    i: 'Dirección General',
  },
];

const sintomas = [
  { id: 1, texto: 'Sientes que creciste pero los procesos se quedaron obsoletos.', peso: 20 },
  { id: 2, texto: 'Existe confusión frecuente sobre quién debe tomar cada decisión.', peso: 20 },
  { id: 3, texto: 'Los proyectos sufren retrasos por falta de coordinación.', peso: 20 },
  { id: 4, texto: 'Hay alta rotación de personal o desmotivación en el equipo.', peso: 20 },
  { id: 5, texto: 'Quieres delegar más pero sientes que perderás el control.', peso: 20 },
];

export default function DesarrolloOrgPage() {
  const [checkedSintomas, setCheckedSintomas] = useState([1, 3]);

  const toggleSintoma = (id) => {
    setCheckedSintomas((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const calcularSalud = () => {
    const friccion = checkedSintomas.length * 20;
    return Math.max(20, 100 - friccion);
  };

  const saludScore = calcularSalud();

  return (
    <main className="w-full bg-hueso text-carbon min-h-screen overflow-hidden">
      {/* ── HERO EDITORIAL HUMANO & LIDERAZGO ─────────────────────── */}
      <section className="relative w-full flex flex-col items-center justify-start pt-36 md:pt-44 pb-20 px-4 md:px-12 bg-hueso overflow-hidden border-b border-carbon/10">
        
        {/* Ambient Light */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <motion.div 
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.8, 0.6] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 left-1/3 w-[36rem] h-[36rem] bg-trebol/20 rounded-full blur-[110px]"
          />
        </div>

        <div className="relative w-full max-w-[1400px] mx-auto text-center flex flex-col items-center mb-16 z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-trebol bg-trebol/10 px-4 py-2 rounded-full mb-6 border border-trebol/30">
            Alineación Estratégica & Equipos de Alto Rendimiento
          </span>
          <h1 className="text-5xl md:text-8xl lg:text-[8rem] font-black text-carbon leading-[0.85] tracking-tighter mb-8">
            Desarrollo Organizacional <br />
            para Crecimiento <span className="text-trebol">Sostenible.</span>
          </h1>
          <p className="text-xl md:text-2xl text-carbon/70 font-light max-w-3xl leading-relaxed">
            Formamos líderes, estructuramos responsabilidades claras y eliminamos los cuellos de botella operativos para que tu empresa escale con orden.
          </p>
        </div>

        {/* Hero Visual Image Banner */}
        <div className="w-[95%] max-w-[1500px] h-[50vh] md:h-[60vh] rounded-3xl overflow-hidden shadow-2xl relative border border-white z-10">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=80"
            alt="Desarrollo Organizacional Trébol"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon/80 via-transparent to-transparent flex items-end p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-6 text-white font-mono text-sm">
              <span className="bg-trebol px-4 py-2 rounded-full font-bold">Matriz RACI & SLAs</span>
              <span>Mentoría a Mandos Medios</span>
              <span>Alineación de OKRs</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN ÚNICA 1: DIAGNÓSTICO INTERACTIVO DE SALUD OPERATIVA ─ */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-28 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-trebol bg-trebol/10 px-4 py-1.5 rounded-full mb-4 inline-block">
            Diagnóstico Interactivo
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-carbon tracking-tighter">
            Evalúa la Salud de tu Empresa
          </h2>
          <p className="text-xl text-carbon/70 font-light max-w-2xl mx-auto mt-4">
            Selecciona los puntos de fricción actuales en tu negocio para calcular el índice de salud operativa.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-10 items-start">
          {/* Diagnostic Quiz List */}
          <div className="md:col-span-7 space-y-4">
            {sintomas.map((s) => {
              const isChecked = checkedSintomas.includes(s.id);
              return (
                <button
                  key={s.id}
                  onClick={() => toggleSintoma(s.id)}
                  className={`w-full text-left p-6 rounded-3xl border transition-all duration-300 flex items-center justify-between shadow-sm ${
                    isChecked
                      ? 'bg-carbon text-hueso border-trebol shadow-xl scale-[1.01]'
                      : 'bg-white text-carbon/80 border-gray-200 hover:border-trebol/50'
                  }`}
                >
                  <span className="text-lg md:text-xl font-light">{s.texto}</span>
                  <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0 ml-4 ${
                    isChecked ? 'bg-trebol text-white border-trebol' : 'border-carbon/30'
                  }`}>
                    {isChecked && <CheckCircle2 size={16} className="text-white" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Org Health Gauge Display Panel */}
          <div className="md:col-span-5 bg-carbon text-hueso rounded-[3.5rem] p-8 md:p-10 shadow-2xl border border-white/10 flex flex-col justify-between space-y-8 sticky top-32">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-trebol flex items-center gap-2">
                <Activity size={16} />
                Índice de Salud Operativa
              </span>
              <span className="w-3 h-3 rounded-full bg-trebol animate-pulse" />
            </div>

            {/* Score Radial Visual */}
            <div className="text-center py-6">
              <span className="text-7xl md:text-8xl font-black text-trebol block mb-2">{saludScore}%</span>
              <span className="text-sm font-bold text-gray-300 uppercase tracking-widest block">
                {saludScore >= 80 ? 'Excelente Salud Operativa' : saludScore >= 50 ? 'Riesgo Moderado de Fricción' : 'Requiere Intervención Urgente'}
              </span>
            </div>

            <div className="bg-[#2d2d2d] p-5 rounded-2xl border border-white/10 space-y-3">
              <div className="flex justify-between text-xs font-mono font-bold text-gray-300">
                <span>Claridad de Roles & SLAs</span>
                <span className="text-trebol">{saludScore}%</span>
              </div>
              <div className="w-full bg-[#5C9E31]/20 h-2.5 rounded-full overflow-hidden">
                <div className="bg-[#5C9E31] h-full transition-all duration-700" style={{ width: `${saludScore}%` }} />
              </div>
            </div>

            <Link
              href="/agenda"
              className="inline-flex items-center justify-center gap-2 bg-[#5C9E31] text-white hover:bg-white hover:text-carbon font-bold px-8 py-4 rounded-full transition-colors duration-500 text-base shadow-xl"
            >
              Solicitar Plan de Intervención
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN ÚNICA 2: TABLA INTERACTIVA MATRIZ RACI ───────────── */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-20 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-trebol bg-trebol/10 px-4 py-1.5 rounded-full mb-4 inline-block">
            Claridad de Roles
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-carbon tracking-tighter">
            Matriz RACI en la Práctica.
          </h2>
          <p className="text-xl text-carbon/70 font-light max-w-2xl mx-auto mt-4">
            Definimos exactamente quién es Responsable (R), Aprobador (A), Consultado (C) e Informado (I).
          </p>
        </div>

        <div className="space-y-6">
          {raciItems.map((item) => (
            <div
              key={item.decision}
              className="bg-white/80 backdrop-blur-2xl border border-white rounded-[2.5rem] p-8 shadow-xl grid md:grid-cols-12 gap-6 items-center"
            >
              <div className="md:col-span-4">
                <span className="text-xs font-mono font-bold text-trebol uppercase tracking-wider block mb-1">Decisión Estratégica:</span>
                <h3 className="text-xl font-extrabold text-carbon">{item.decision}</h3>
              </div>

              <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
                <div className="bg-[#EEF7E6] p-3.5 rounded-xl border border-trebol/20">
                  <span className="text-trebol font-bold block mb-0.5">[R] Responsable</span>
                  <span className="text-carbon font-semibold font-sans">{item.r}</span>
                </div>
                <div className="bg-carbon text-hueso p-3.5 rounded-xl">
                  <span className="text-trebol font-bold block mb-0.5">[A] Aprobador</span>
                  <span className="text-white font-semibold font-sans">{item.a}</span>
                </div>
                <div className="bg-gray-100 p-3.5 rounded-xl">
                  <span className="text-carbon/60 font-bold block mb-0.5">[C] Consultado</span>
                  <span className="text-carbon font-semibold font-sans">{item.c}</span>
                </div>
                <div className="bg-gray-100 p-3.5 rounded-xl">
                  <span className="text-carbon/60 font-bold block mb-0.5">[I] Informado</span>
                  <span className="text-carbon font-semibold font-sans">{item.i}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact CTA Editorial ────────────────────── */}
      <section className="w-full bg-hueso pb-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto bg-white/60 backdrop-blur-2xl border border-white/80 rounded-[3rem] p-12 md:p-20 shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div>
              <h2 className="text-5xl md:text-7xl font-black text-carbon tracking-tighter leading-[0.9] mb-6">
                Construyamos la estructura <br />
                <span className="text-trebol">de tu empresa.</span>
              </h2>
              <p className="text-2xl text-carbon/70 font-light max-w-xl leading-relaxed">
                Agenda una sesión estratégica de 30 minutos sin costo. Evaluaremos la preparación operativa de tu equipo.
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
