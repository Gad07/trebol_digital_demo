'use client';
import { motion } from 'framer-motion';

/* ── 1. VELOCÍMETRO GOOGLE PAGESPEED INSIGHTS (AGNOSTICO DE TECNOLOGÍA) ── */
export function SpeedometerGauge({ isBefore }) {
  const strokeDashArrayTarget = isBefore ? '50 245' : '228 245';
  const strokeColor = isBefore ? '#DC2626' : '#5C9E43';

  return (
    <div className="flex flex-col items-center text-center space-y-3 font-sans select-none w-full">
      <span className="text-xs font-mono text-carbon/70 uppercase tracking-widest font-extrabold">
        Velocidad de Carga
      </span>

      <div className="relative w-44 sm:w-48 h-28 sm:h-30 flex items-end justify-center my-1">
        <svg viewBox="0 0 200 115" className="w-full h-full">
          <path
            d="M 22,95 A 78,78 0 0,1 178,95"
            fill="none"
            stroke="#E2E8F0"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <motion.path
            d="M 22,95 A 78,78 0 0,1 178,95"
            fill="none"
            stroke={strokeColor}
            strokeWidth="12"
            strokeLinecap="round"
            initial={{ strokeDasharray: '50 245' }}
            animate={{ strokeDasharray: strokeDashArrayTarget }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />

          <g stroke="#94A3B8" strokeWidth="1.5">
            <line x1="30" y1="95" x2="38" y2="95" />
            <line x1="39" y1="67" x2="46" y2="70" />
            <line x1="63" y1="43" x2="68" y2="49" />
            <line x1="100" y1="33" x2="100" y2="41" stroke="#64748B" strokeWidth="2" />
            <line x1="137" y1="43" x2="132" y2="49" />
            <line x1="161" y1="67" x2="154" y2="70" />
            <line x1="170" y1="95" x2="162" y2="95" />
          </g>

          <text x="14" y="112" fill="#DC2626" fontSize="10.5" fontWeight="bold">5.8s</text>
          <text x="146" y="112" fill="#5C9E43" fontSize="10.5" fontWeight="bold">1.1s</text>

          <motion.g
            animate={{ rotate: isBefore ? -65 : 65 }}
            transition={{ type: 'spring', stiffness: 75, damping: 15 }}
            style={{ originX: 0.5, originY: 1 }}
          >
            <line x1="100" y1="95" x2="100" y2="28" stroke={strokeColor} strokeWidth="3.5" strokeLinecap="round" />
          </motion.g>
          <circle cx="100" cy="95" r="11" fill="#0F172A" stroke="#475569" strokeWidth="2" />
          <circle cx="100" cy="95" r="5" fill="#FFFFFF" />
        </svg>
      </div>

      <div className="space-y-1">
        <motion.div
          key={isBefore ? 'slow' : 'fast'}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={`text-3xl sm:text-4xl font-black font-mono tracking-tight ${
            isBefore ? 'text-red-600' : 'text-trebol'
          }`}
        >
          {isBefore ? '5.8s' : '1.1s'}
        </motion.div>
        <p className="text-xs font-semibold text-carbon leading-snug font-sans max-w-[190px] mx-auto">
          {isBefore ? 'Tiempo de carga lento por falta de optimización.' : 'Carga instantánea en 1.1s con alta eficiencia.'}
        </p>
      </div>
    </div>
  );
}

/* ── 2. LIGHTHOUSE GAUGE RING (AGNOSTICO DE TECNOLOGÍA) ── */
export function LighthouseGauge({ isBefore }) {
  const score = isBefore ? 42 : 99;
  const strokeDashoffset = 238.76 - (238.76 * score) / 100;
  const strokeColor = isBefore ? '#DC2626' : '#5C9E43';

  return (
    <div className="flex flex-col items-center text-center space-y-3 font-sans select-none w-full">
      <span className="text-xs font-mono text-carbon/70 uppercase tracking-widest font-extrabold">
        Google Speed Index
      </span>

      <div className="relative w-36 sm:w-40 h-36 sm:h-40 flex items-center justify-center my-1">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          <circle cx="50" cy="50" r="38" fill="#FAFAFA" stroke="#E2E8F0" strokeWidth="8.5" />
          <motion.circle
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke={strokeColor}
            strokeWidth="8.5"
            strokeLinecap="round"
            strokeDasharray="238.76"
            initial={{ strokeDashoffset: 238.76 }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.0, ease: 'easeOut' }}
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            key={score}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-4xl sm:text-5xl font-black font-mono tracking-tight"
            style={{ color: strokeColor }}
          >
            {score}
          </motion.span>
          <span className="text-[10px] font-mono text-carbon/60 font-extrabold uppercase tracking-wider mt-0.5">
            / 100
          </span>
        </div>
      </div>

      <div className="space-y-1">
        <p className="text-xs sm:text-sm font-semibold text-carbon leading-snug font-sans max-w-[190px] mx-auto">
          {isBefore ? 'Puntaje bajo debido a recursos no optimizados.' : 'Puntuación óptima de 99/100 con SEO Edge.'}
        </p>
      </div>
    </div>
  );
}

/* ── 3. CONVERSION GAUGE (AGNOSTICO DE TECNOLOGÍA) ── */
export function ConversionGauge({ isBefore }) {
  const rate = isBefore ? '1.2%' : '4.8%';
  const percentage = isBefore ? 25 : 100;
  const colorClass = isBefore ? 'bg-red-600' : 'bg-trebol';
  const textColor = isBefore ? 'text-red-600' : 'text-trebol';

  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-neutral-50 border border-neutral-200/90 w-full font-sans select-none space-y-3.5 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-extrabold text-carbon/70 uppercase tracking-widest block">
            Tasa de Conversión
          </span>
          <p className="text-xs sm:text-sm font-semibold text-carbon leading-snug font-sans pt-0.5">
            {isBefore ? 'Baja captación de prospectos por carga lenta.' : 'Multiplica por 4 la generación de prospectos.'}
          </p>
        </div>
        <motion.div
          key={rate}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={`text-3xl sm:text-4xl font-black font-mono tracking-tight shrink-0 ${textColor}`}
        >
          {rate}
        </motion.div>
      </div>

      <div className="w-full bg-neutral-200/80 h-3.5 rounded-full overflow-hidden p-0.5 relative">
        <motion.div
          className={`h-full rounded-full ${colorClass}`}
          animate={{ width: `${percentage}%` }}
          transition={{ type: 'spring', stiffness: 80, damping: 16 }}
        />
      </div>
    </div>
  );
}
