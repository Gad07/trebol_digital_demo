'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2, Users, Target, BarChart3,
  GitBranch, Layers
} from 'lucide-react';

const DEPARTMENTS = [
  { id: 'ceo', label: 'Dirección General', level: 0, icon: Building2, desc: 'Estrategia & Visión' },
  { id: 'marketing', label: 'Marketing & Growth', level: 1, icon: Target, desc: 'Captación de Demanda' },
  { id: 'it', label: 'IT & Tecnología', level: 1, icon: Layers, desc: 'Infraestructura & Sistemas' },
  { id: 'ventas', label: 'Ventas & Comercial', level: 2, icon: Users, desc: 'Cierre & Conversión' },
  { id: 'bi', label: 'BI & Analítica', level: 2, icon: BarChart3, desc: 'Métricas de Rendimiento' },
  { id: 'operaciones', label: 'Operaciones', level: 2, icon: GitBranch, desc: 'Entrega de Servicio' },
];

// Posiciones caóticas bien distribuidas
const CHAOS_POSITIONS = [
  { x: 50, y: 16 },
  { x: 18, y: 52 },
  { x: 82, y: 38 },
  { x: 26, y: 82 },
  { x: 64, y: 82 },
  { x: 86, y: 18 },
];

// Posiciones alineadas jerárquicamente en árbol sin cruces de líneas
const STRUCTURED_POSITIONS = [
  { x: 50, y: 16 },  // 0: CEO (Arriba Centro)
  { x: 30, y: 48 },  // 1: Marketing & Growth (Medio Izquierda)
  { x: 70, y: 48 },  // 2: IT & Tecnología (Medio Derecha)
  { x: 22, y: 82 },  // 3: Ventas & Comercial (Abajo Izquierda - debajo de Marketing)
  { x: 62, y: 82 },  // 4: BI & Analítica (Abajo Medio Derecha - debajo de IT)
  { x: 84, y: 82 },  // 5: Operaciones (Abajo Derecha - debajo de IT)
];

const CHAOS_CONNECTIONS = [
  [0, 1], [0, 2], [2, 3], [1, 4], [3, 5], [4, 5], [1, 3], [2, 5], [0, 4]
];

// Conexiones de árbol limpio (CERO CRUCES DE LÍNEAS)
const STRUCTURED_CONNECTIONS = [
  [0, 1], // CEO (50%) -> Marketing (30%)
  [0, 2], // CEO (50%) -> IT (70%)
  [1, 3], // Marketing (30%) -> Ventas (22%)
  [2, 4], // IT (70%) -> BI & Analítica (62%)
  [2, 5], // IT (70%) -> Operaciones (84%)
];

const RACI_LABELS = {
  ceo:         { r: 'Dirección General', a: 'Consejo',         c: 'Líderes de Área', i: 'Toda la Empresa' },
  marketing:   { r: 'Líder Marketing',   a: 'Dir. Comercial',  c: 'Ventas & IT',     i: 'Fuerza Comercial' },
  it:          { r: 'Líder IT',          a: 'Dirección Gral.', c: 'Ventas & Mkt',    i: 'Organización' },
  ventas:      { r: 'Líder de Ventas',   a: 'Dir. Comercial',  c: 'Marketing & IT', i: 'Dirección' },
  bi:          { r: 'Analista de Datos', a: 'Líder IT & Mkt',  c: 'Todas las Áreas', i: 'Dirección' },
  operaciones: { r: 'Líder Operación',   a: 'Dirección Gral.', c: 'Ventas & IT',     i: 'Dirección' },
};

const CHAOS_LABELS = {
  ceo: 'Sobrecarga de decisiones',
  marketing: 'Desalineado de metas de ventas',
  it: 'Sistemas sin prioridad comercial',
  ventas: 'Falta de CRM y herramientas',
  bi: 'Métricas dispersas y aisladas',
  operaciones: 'Entregas con retraso por fricción'
};

function ConnectionLines({ connections, positions, color, dashed, size }) {
  return (
    <g>
      {connections.map(([i, j], idx) => {
        const fi = positions[i];
        const ti = positions[j];
        
        const fx = (fi.x / 100) * size.w;
        const fy = (fi.y / 100) * size.h + (dashed ? 0 : 32); // Sale del borde inferior en structured
        const tx = (ti.x / 100) * size.w;
        const ty = (ti.y / 100) * size.h - (dashed ? 0 : 32); // Entra al borde superior en structured
        
        // Curvas Bézier suaves de arriba hacia abajo
        const dy = Math.abs(ty - fy) * 0.5;
        const d = `M ${fx} ${fy} C ${fx} ${fy + dy}, ${tx} ${ty - dy}, ${tx} ${ty}`;

        return (
          <path
            key={`conn-${idx}`}
            d={d}
            stroke={color}
            strokeWidth={dashed ? 2 : 3}
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

  return (
    <motion.div
      className="absolute"
      animate={{ left: `${pos.x}%`, top: `${pos.y}%` }}
      transition={{ type: 'spring', stiffness: 90, damping: 20, mass: 1 }}
      style={{ width: isAfter ? 240 : 210, transform: 'translate(-50%, -50%)' }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <motion.div
        layout
        className={`
          rounded-[1.75rem] border-2 cursor-pointer transition-all duration-300 overflow-hidden shadow-lg
          ${isAfter
            ? 'bg-white text-carbon border-trebol/40 hover:border-trebol hover:shadow-[0_20px_50px_rgba(92,158,49,0.2)]'
            : 'bg-white text-carbon border-rose-300 hover:border-rose-500 shadow-md'}
          ${isHovered ? 'scale-105 ring-2 ring-trebol/30' : ''}
        `}
      >
        <div className="p-3.5 bg-white border-b border-neutral-100">
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${
              isAfter ? 'bg-trebol text-white' : 'bg-rose-500 text-white'
            }`}>
              <Icon size={18} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-carbon truncate tracking-tight">
                {dept.label}
              </p>
              {isAfter ? (
                <span className="text-[10px] font-mono font-semibold text-trebol bg-trebol/10 px-2 py-0.5 rounded-md inline-block mt-0.5 truncate max-w-full">
                  {dept.desc}
                </span>
              ) : (
                <span className="text-[9px] font-mono font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md inline-block mt-0.5 truncate max-w-full">
                  ⚠ {CHAOS_LABELS[dept.id]}
                </span>
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
              transition={{ duration: 0.3 }}
              className="p-3 bg-neutral-50/90 border-t border-neutral-100 space-y-1.5"
            >
              <div className="space-y-1 text-[10px] font-mono">
                <div className="flex items-center justify-between bg-trebol/10 text-trebol px-2.5 py-1 rounded-lg border border-trebol/20">
                  <span className="font-bold">[R] Responsable:</span>
                  <span className="text-carbon font-semibold">{raci.r}</span>
                </div>
                <div className="flex items-center justify-between bg-neutral-100 text-carbon px-2.5 py-1 rounded-lg border border-neutral-200">
                  <span className="text-carbon/80 font-bold">[A] Aprobador:</span>
                  <span className="text-carbon font-semibold">{raci.a}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default function OrgStructureCanvas() {
  const [mode, setMode] = useState('structured');
  const [hoveredNode, setHoveredNode] = useState(null);
  const [canvasSize, setCanvasSize] = useState({ w: 800, h: 500 });
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
    }, 250);
  };

  const showChaosLines = (mode === 'chaos' && transitionPhase === 'idle') || (mode === 'structured' && transitionPhase === 'fading');
  const showStructuredLines = (mode === 'structured' && transitionPhase === 'idle') || (mode === 'chaos' && transitionPhase === 'fading');

  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-7xl font-black text-carbon tracking-tighter">
          Estructura Organizacional <span className="text-trebol">en Vivo.</span>
        </h2>
        <p className="text-xl text-carbon/70 font-light max-w-2xl mx-auto mt-4">
          Visualiza cómo pasa tu empresa de una estructura caótica a un organigrama RACI optimizado con líneas claras de reporte para Ventas, Marketing e IT.
        </p>
      </div>

      {/* Toggle */}
      <div className="flex justify-center mb-12">
        <div className="bg-white p-2 rounded-full border border-neutral-200 shadow-md flex items-center gap-2">
          <button
            onClick={() => handleToggle('chaos')}
            className={`px-6 md:px-8 py-3 rounded-full font-bold text-sm transition-all cursor-pointer ${
              !isAfter ? 'bg-rose-500 text-white shadow-md' : 'text-carbon/60 hover:text-carbon'
            }`}
          >
            Sin Estructura
          </button>
          <button
            onClick={() => handleToggle('structured')}
            className={`px-6 md:px-8 py-3 rounded-full font-bold text-sm transition-all cursor-pointer ${
              isAfter ? 'bg-trebol text-white shadow-md' : 'text-carbon/60 hover:text-carbon'
            }`}
          >
            Organigrama RACI
          </button>
        </div>
      </div>

      {/* Card Canvas Container */}
      <div className="relative w-full rounded-[3rem] bg-white border border-neutral-200 shadow-2xl overflow-hidden font-mono">
        
        {/* Ambient Light Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-trebol/10 rounded-full blur-[110px] pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between px-6 md:px-10 py-4 border-b border-neutral-100 bg-neutral-50/80 backdrop-blur-sm relative z-10">
          <div className="flex items-center gap-3">
            <div className={`w-3.5 h-3.5 rounded-full ${isAfter ? 'bg-trebol' : 'bg-rose-500'} shadow-sm animate-pulse`} />
            <span className="text-xs text-neutral-500">
              Estado: <strong className="text-carbon">{isAfter ? 'Organigrama RACI Sincronizado (Ventas, Mkt & IT)' : 'Estructura Caótica / Desalineada'}</strong>
            </span>
          </div>
        </div>

        {/* Canvas body */}
        <div ref={canvasRef} className="relative w-full overflow-hidden" style={{ minHeight: 520 }}>
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
                  transition={{ duration: 0.5, delay: 0.2 }}
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
        <div className="flex flex-wrap items-center justify-between border-t border-neutral-100 px-6 md:px-10 py-3.5 text-xs text-neutral-500 bg-neutral-50/50 gap-2">
          <span className="flex items-center gap-2">
            <Layers size={14} className="text-trebol" />
            {isAfter
              ? 'Líneas verdes = Jerarquía y flujo directo de reporte'
              : 'Líneas rojas punteadas = Fricción / Confusión entre áreas'}
          </span>
          <span className="flex items-center gap-2 font-mono text-[11px]">
            <span className="text-trebol font-bold">[R] Responsable</span>
            <span className="text-carbon font-bold">[A] Aprobador</span>
            <span className="text-neutral-400">[C] Consultado</span>
            <span className="text-neutral-400">[I] Informado</span>
          </span>
        </div>
      </div>

    </section>
  );
}
