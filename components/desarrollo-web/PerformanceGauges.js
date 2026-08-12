'use client';
import { motion } from 'framer-motion';

/* ── 1. VELOCÍMETRO GOOGLE PAGESPEED INSIGHTS STYLE (CON BARRIDO EN ARCO 100% PERFECTO) ── */
export function SpeedometerGauge({ isBefore }) {
  // Angle: Slow (5.8s) = -65deg, Fast (1.1s) = +65deg
  const needleAngle = isBefore ? -65 : 65;
  
  // Progress Arc Length: Total semi-circle arc length = 245px
  // Slow (5.8s) = 50px (Red fill), Fast (1.1s) = 228px (Green fill)
  const strokeDashArrayTarget = isBefore ? '50 245' : '228 245';
  const strokeColor = isBefore ? '#DC2626' : '#5C9E43';

  return (
    <div className="flex flex-col items-center text-center space-y-4 font-sans select-none">
      <span className="text-xs font-mono text-carbon/70 uppercase tracking-widest font-bold">
        Velocidad de Carga
      </span>

      {/* Official Google PageSpeed Insights Semi-Circle Speedometer */}
      <div className="relative w-60 h-36 flex items-end justify-center">
        <svg viewBox="0 0 200 115" className="w-full h-full">
          {/* Track Base Arc */}
          <path
            d="M 22,95 A 78,78 0 0,1 178,95"
            fill="none"
            stroke="#E2E8F0"
            strokeWidth="11"
            strokeLinecap="round"
          />

          {/* Animated Google PageSpeed Fill Arc */}
          <motion.path
            d="M 22,95 A 78,78 0 0,1 178,95"
            fill="none"
            stroke={strokeColor}
            strokeWidth="11"
            strokeLinecap="round"
            initial={{ strokeDasharray: '50 245' }}
            animate={{ strokeDasharray: strokeDashArrayTarget }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />

          {/* Precision Radial Ticks */}
          <g stroke="#94A3B8" strokeWidth="1.5">
            <line x1="30" y1="95" x2="38" y2="95" />
            <line x1="39" y1="67" x2="46" y2="70" />
            <line x1="63" y1="43" x2="68" y2="49" />
            <line x1="100" y1="33" x2="100" y2="41" stroke="#64748B" strokeWidth="2" />
            <line x1="137" y1="43" x2="132" y2="49" />
            <line x1="161" y1="67" x2="154" y2="70" />
            <line x1="170" y1="95" x2="162" y2="95" />
          </g>

          {/* Outer Clean End Labels */}
          <text x="14" y="110" fill="#DC2626" fontSize="9" fontWeight="bold" fontFamily="var(--font-manrope), sans-serif">5.8s (Lento)</text>
          <text x="134" y="110" fill="#5C9E43" fontSize="9" fontWeight="bold" fontFamily="var(--font-manrope), sans-serif">1.1s (Rápido)</text>

          {/* Animated Needle with SVG Native Radial Arc Sweep */}
          <motion.g
            animate={{ rotate: isBefore ? -65 : 65 }}
            transition={{ type: 'spring', stiffness: 75, damping: 15 }}
            style={{ originX: 0.5, originY: 1 }}
          >
            <line
              x1="100"
              y1="95"
              x2="100"
              y2="28"
              stroke={strokeColor}
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </motion.g>

          {/* Metallic Multi-Ring Center Pivot Cap Over Needle Base (Covering 100% of pivot) */}
          <circle cx="100" cy="95" r="11" fill="#0F172A" stroke="#475569" strokeWidth="2" />
          <circle cx="100" cy="95" r="6" fill="#CBD5E1" />
          <circle cx="100" cy="95" r="2.5" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Metric Display */}
      <div className="space-y-1">
        <motion.div
          key={isBefore ? 'slow' : 'fast'}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={`text-5xl md:text-6xl font-black font-mono tracking-tight ${
            isBefore ? 'text-red-600' : 'text-trebol'
          }`}
        >
          {isBefore ? '5.8s' : '1.1s'}
        </motion.div>

        <p className="text-xs text-carbon/80 font-light max-w-xs mx-auto leading-relaxed pt-1">
          {isBefore
            ? 'Tiempo de carga lento por plantillas pesadas y exceso de plugins.'
            : 'Carga instantánea en 1.1 segundos con renderizado nativo Next.js 16.'}
        </p>
      </div>
    </div>
  );
}

/* ── 2. AUTÉNTICO GAUGE DE GOOGLE PAGESPEED INSIGHTS (WHITE GLASS VERSION) ── */
export function LighthouseGauge({ isBefore }) {
  const score = isBefore ? 42 : 99;
  const strokeDashoffset = 238.76 - (238.76 * score) / 100;
  const strokeColor = isBefore ? '#DC2626' : '#5C9E43';

  return (
    <div className="flex flex-col items-center text-center space-y-4 font-sans select-none">
      <span className="text-xs font-mono text-carbon/70 uppercase tracking-widest font-bold">
        Google Speed Index
      </span>

      {/* Official PageSpeed Insights Style Ring */}
      <div className="relative w-36 h-36 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="#FAFAFA"
            stroke="#CBD5E1"
            strokeWidth="8"
          />

          <motion.circle
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke={strokeColor}
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray="238.76"
            initial={{ strokeDashoffset: 238.76 }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.0, ease: 'easeOut' }}
          />
        </svg>

        {/* Center Score Counter */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            key={score}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-4xl font-black font-mono tracking-tight"
            style={{ color: strokeColor }}
          >
            {score}
          </motion.span>
          <span className="text-[10px] font-mono text-carbon/60 font-bold uppercase tracking-wider">
            / 100
          </span>
        </div>
      </div>

      {/* Metric Subtext */}
      <div className="space-y-1">
        <p className="text-xs text-carbon/80 font-light max-w-xs mx-auto leading-relaxed pt-1">
          {isBefore
            ? 'Puntaje bajo en Google Lighthouse debido a scripts no optimizados.'
            : 'Puntuación óptima de 99/100 con SEO técnico e infraestructura Edge.'}
        </p>
      </div>
    </div>
  );
}

/* ── 3. GRÁFICO COMPARATIVO DE CONVERSIÓN (WHITE GLASS VERSION) ── */
export function ConversionGauge({ isBefore }) {
  const rate = isBefore ? '1.2%' : '4.8%';

  return (
    <div className="flex flex-col items-center text-center space-y-4 font-sans select-none">
      <span className="text-xs font-mono text-carbon/70 uppercase tracking-widest font-bold">
        Tasa de Conversión
      </span>

      {/* White Glass Analytics Comparison Card */}
      <div className="w-52 h-36 bg-white/80 backdrop-blur-xl rounded-2xl border border-neutral-200/80 p-4 flex flex-col justify-between shadow-sm">
        <div className="flex justify-between items-center text-[10px] font-mono text-carbon/70 border-b border-neutral-200 pb-2">
          <span>FUNNEL CONVERSIÓN</span>
          <span className={isBefore ? 'text-red-600 font-bold' : 'text-trebol font-bold'}>
            {isBefore ? 'PROMEDIO WP' : 'MÁXIMO LEADS'}
          </span>
        </div>

        {/* Dual Bar Comparison Graphic with Fixed Parent Height */}
        <div className="flex items-end justify-around h-20 pt-1">
          {/* Tradicional Bar Container */}
          <div className="flex flex-col items-center gap-1 w-16 h-full justify-end">
            <span className={`text-[10px] font-mono font-bold transition-colors ${isBefore ? 'text-red-600' : 'text-neutral-400'}`}>
              1.2%
            </span>
            <div className="relative w-full h-14 flex items-end">
              <motion.div
                className={`w-full rounded-t transition-colors ${
                  isBefore ? 'bg-red-500' : 'bg-neutral-200'
                }`}
                animate={{ height: isBefore ? '32%' : '20%' }}
                transition={{ type: 'spring', stiffness: 90, damping: 14 }}
              />
            </div>
            <span className="text-[9px] font-mono text-carbon/60 uppercase font-bold">Tradicional</span>
          </div>

          {/* Trébol Web Bar Container */}
          <div className="flex flex-col items-center gap-1 w-16 h-full justify-end">
            <span className={`text-[10px] font-mono font-bold transition-colors ${!isBefore ? 'text-trebol' : 'text-neutral-400'}`}>
              4.8%
            </span>
            <div className="relative w-full h-14 flex items-end">
              <motion.div
                className={`w-full rounded-t transition-colors ${
                  !isBefore ? 'bg-trebol' : 'bg-neutral-200'
                }`}
                animate={{ height: !isBefore ? '95%' : '20%' }}
                transition={{ type: 'spring', stiffness: 90, damping: 14 }}
              />
            </div>
            <span className={`text-[9px] font-mono uppercase font-bold ${!isBefore ? 'text-trebol' : 'text-carbon/60'}`}>
              Trébol
            </span>
          </div>
        </div>
      </div>

      {/* Metric Display */}
      <div className="space-y-1">
        <motion.div
          key={rate}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={`text-5xl md:text-6xl font-black font-mono tracking-tight ${
            isBefore ? 'text-red-600' : 'text-trebol'
          }`}
        >
          {rate}
        </motion.div>

        <p className="text-xs text-carbon/80 font-light max-w-xs mx-auto leading-relaxed pt-1">
          {isBefore
            ? 'Baja captación de leads debido a tiempos de carga prolongados.'
            : 'Multiplica por 4 la generación de prospectos calificados con el mismo tráfico.'}
        </p>
      </div>
    </div>
  );
}
