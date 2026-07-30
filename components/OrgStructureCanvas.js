'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2, Users, Target, BarChart3, UserCheck,
  GitBranch, Layers
} from 'lucide-react';

const DEPARTMENTS = [
  { id: 'ceo', label: 'Dirección General', level: 0, icon: Building2, desc: 'Visión & Estrategia' },
  { id: 'finanzas', label: 'Finanzas', level: 1, icon: BarChart3, desc: 'Contraloría & Tesorería' },
  { id: 'operaciones', label: 'Operaciones', level: 1, icon: GitBranch, desc: 'Producción & Logística' },
  { id: 'marketing', label: 'Marketing', level: 2, icon: Target, desc: 'Captación & Marca' },
  { id: 'ventas', label: 'Ventas', level: 2, icon: Users, desc: 'Cierre Comercial' },
  { id: 'rrhh', label: 'RRHH', level: 2, icon: UserCheck, desc: 'Talento & Cultura' },
];

const CHAOS_POSITIONS = [
  { x: 60, y: 12 },
  { x: 8, y: 50 },
  { x: 78, y: 42 },
  { x: 25, y: 80 },
  { x: 72, y: 76 },
  { x: 15, y: 25 },
];

const STRUCTURED_POSITIONS = [
  { x: 50, y: 8 },
  { x: 20, y: 35 },
  { x: 80, y: 35 },
  { x: 8, y: 72 },
  { x: 50, y: 72 },
  { x: 92, y: 72 },
];

const CHAOS_CONNECTIONS = [
  [0, 1], [0, 2], [2, 3], [1, 4], [3, 5], [4, 5], [1, 3], [2, 5],
];

const STRUCTURED_CONNECTIONS = [
  [0, 1], [0, 2], [1, 3], [1, 4], [2, 5],
];

const RACI_LABELS = {
  ceo:        { r: 'Dueño',   a: 'Consejo',         c: 'Staff',   i: 'Organización' },
  finanzas:   { r: 'CFO',     a: 'Director General', c: 'Áreas',   i: 'CEO' },
  operaciones: { r: 'COO',    a: 'Director General', c: 'Supply',  i: 'CEO' },
  marketing:  { r: 'CMO',     a: 'Director Com.',    c: 'Agencia', i: 'Organización' },
  ventas:     { r: 'Sales VP', a: 'Director Com.',   c: 'Marketing', i: 'CEO' },
  rrhh:       { r: 'CHRO',    a: 'Dirección Gral.',  c: 'Gerentes', i: 'Toda la Empresa' },
};

function ConnectionLines({ connections, positions, color, dashed, size }) {
  return (
    <g>
      {connections.map(([i, j], idx) => {
        const fi = positions[i];
        const ti = positions[j];
        const f = { x: (fi.x / 100) * size.w, y: (fi.y / 100) * size.h };
        const t = { x: (ti.x / 100) * size.w, y: (ti.y / 100) * size.h };
        const dx = Math.abs(t.x - f.x) * 0.4;
        const d = `M ${f.x} ${f.y} C ${f.x + dx} ${f.y}, ${t.x - dx} ${t.y}, ${t.x} ${t.y}`;

        return (
          <path
            key={`conn-${idx}`}
            d={d}
            stroke={color}
            strokeWidth={dashed ? 2 : 2.5}
            strokeDasharray={dashed ? '6 6' : 'none'}
            fill="none"
          />
        );
      })}
    </g>
  );
}

function NodeCard({ dept, pos, isAfter, isHovered, onHover, onLeave, raci }) {
  const Icon = dept.icon;
  const w = isAfter ? 180 : 150;

  return (
    <motion.div
      className="absolute"
      animate={{ left: `${pos.x}%`, top: `${pos.y}%` }}
      transition={{ type: 'spring', stiffness: 80, damping: 18, mass: 1 }}
      style={{ width: w, transform: 'translate(-50%, -50%)' }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <motion.div
        layout
        className={`
          rounded-2xl border-2 cursor-default
          ${isAfter
            ? 'bg-carbon text-white border-trebol/40 shadow-xl'
            : 'bg-white text-carbon border-rose-200 shadow-md hover:border-rose-400'}
          ${isHovered ? (isAfter ? 'scale-110 border-trebol shadow-2xl' : 'scale-110 border-rose-500 shadow-xl') : ''}
        `}
      >
        <div className={`p-3 ${isAfter ? 'border-b border-white/10' : 'border-b border-neutral-100'}`}>
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
              isAfter ? 'bg-trebol/20 text-trebol' : 'bg-rose-100 text-rose-500'
            }`}>
              <Icon size={16} />
            </div>
            <div className="min-w-0">
              <p className={`text-xs font-bold truncate ${isAfter ? 'text-white' : 'text-carbon'}`}>
                {dept.label}
              </p>
              {isAfter && (
                <p className="text-[9px] text-neutral-400 truncate">{dept.desc}</p>
              )}
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isAfter && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="px-3 py-2 space-y-1"
            >
              <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 text-[8px]">
                <span className="text-trebol font-bold">[R] {raci.r}</span>
                <span className="text-cyan-400 font-bold">[A] {raci.a}</span>
                <span className="text-neutral-400">[C] {raci.c}</span>
                <span className="text-neutral-400">[I] {raci.i}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default function OrgStructureCanvas() {
  const [mode, setMode] = useState('chaos');
  const [hoveredNode, setHoveredNode] = useState(null);
  const [canvasSize, setCanvasSize] = useState({ w: 600, h: 360 });
  const canvasRef = useRef(null);
  const [transitionPhase, setTransitionPhase] = useState('idle');

  const isAfter = mode === 'structured';
  const positions = isAfter ? STRUCTURED_POSITIONS : CHAOS_POSITIONS;
  const connections = isAfter ? STRUCTURED_CONNECTIONS : CHAOS_CONNECTIONS;

  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const measure = () => {
      const rect = el.getBoundingClientRect();
      setCanvasSize({ w: rect.width, h: rect.height });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    window.addEventListener('resize', measure);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  const handleToggle = (newMode) => {
    if (newMode === mode) return;
    setTransitionPhase('fading');
    setTimeout(() => {
      setMode(newMode);
      setTransitionPhase('idle');
    }, 300);
  };

  const showChaosLines = (mode === 'chaos' && transitionPhase === 'idle') || (mode === 'structured' && transitionPhase === 'fading');
  const showStructuredLines = (mode === 'structured' && transitionPhase === 'idle') || (mode === 'chaos' && transitionPhase === 'fading');

  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-28 relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-7xl font-black text-carbon tracking-tighter">
          Estructura Organizacional <span className="text-trebol">en Vivo.</span>
        </h2>
        <p className="text-xl text-carbon/70 font-light max-w-2xl mx-auto mt-4">
          Visualiza cómo pasa tu empresa de una estructura caótica a un organigrama RACI optimizado con líneas claras de reporte.
        </p>
      </div>

      {/* Toggle */}
      <div className="flex justify-center mb-12">
        <div className="bg-white p-2 rounded-full border border-neutral-200 shadow-md flex items-center gap-2">
          <button
            onClick={() => handleToggle('chaos')}
            className={`px-6 md:px-8 py-3 rounded-full font-bold text-sm transition-all cursor-pointer ${
              !isAfter ? 'bg-rose-500/20 text-rose-600 border border-rose-500/40' : 'text-carbon/60 hover:text-carbon'
            }`}
          >
            Sin Estructura
          </button>
          <button
            onClick={() => handleToggle('structured')}
            className={`px-6 md:px-8 py-3 rounded-full font-bold text-sm transition-all cursor-pointer ${
              isAfter ? 'bg-trebol text-white shadow-lg' : 'text-carbon/60 hover:text-carbon'
            }`}
          >
            Organigrama RACI
          </button>
        </div>
      </div>

      {/* Card */}
      <div className="relative w-full rounded-[3rem] bg-white shadow-2xl overflow-hidden font-mono">
        {/* Header */}
        <div className="flex items-center justify-between px-6 md:px-10 py-4 border-b border-neutral-100">
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${isAfter ? 'bg-trebol' : 'bg-rose-500'} shadow-sm`} />
            <span className="text-xs text-neutral-500">
              Estado: <strong className="text-carbon">{isAfter ? 'Organigrama RACI Optimizado' : 'Estructura Caótica / Sin Definir'}</strong>
            </span>
          </div>
        </div>

        {/* Canvas body */}
        <div ref={canvasRef} className="relative w-full" style={{ minHeight: 420 }}>
          {/* SVG overlay */}
          <svg
            className="absolute inset-0 pointer-events-none"
            width={canvasSize.w}
            height={canvasSize.h}
            style={{ overflow: 'visible' }}
          >
            <AnimatePresence mode="wait">
              {showChaosLines && (
                <motion.g
                  key="chaos-lines"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ConnectionLines
                    connections={CHAOS_CONNECTIONS}
                    positions={CHAOS_POSITIONS}
                    color="#ef4444"
                    dashed={true}
                    size={canvasSize}
                  />
                </motion.g>
              )}
            </AnimatePresence>
            <AnimatePresence mode="wait">
              {showStructuredLines && (
                <motion.g
                  key="structured-lines"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  <ConnectionLines
                    connections={STRUCTURED_CONNECTIONS}
                    positions={STRUCTURED_POSITIONS}
                    color="#5C9E43"
                    dashed={false}
                    size={canvasSize}
                  />
                </motion.g>
              )}
            </AnimatePresence>
          </svg>

          {/* Nodes */}
          {DEPARTMENTS.map((dept, idx) => (
            <NodeCard
              key={dept.id}
              dept={dept}
              pos={positions[idx]}
              isAfter={isAfter}
              isHovered={hoveredNode === dept.id}
              onHover={() => setHoveredNode(dept.id)}
              onLeave={() => setHoveredNode(null)}
              raci={RACI_LABELS[dept.id]}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="flex flex-wrap items-center justify-between border-t border-neutral-100 px-6 md:px-10 py-3 text-[10px] text-neutral-400 gap-2">
          <span className="flex items-center gap-2">
            <Layers size={12} className="text-trebol" />
            {isAfter
              ? 'Líneas verdes sólidas = Reporte directo'
              : 'Líneas rojas punteadas = Fricción / Confusión de roles'}
          </span>
          <span className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-trebol" />
            <span>R=Responsable</span>
            <span className="ml-1.5 w-2 h-2 rounded-full bg-cyan-400" />
            <span>A=Aprobador</span>
          </span>
        </div>
      </div>


    </section>
  );
}
