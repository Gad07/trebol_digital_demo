import { Target, Zap, Users, Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  return (
    <section id="que-es-trebol" className="relative z-10 w-full bg-hueso text-carbon py-24 md:py-32 px-6 md:px-12 overflow-hidden border-b border-neutral-200/80">
      {/* Luz Ambiental de fondo */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 -right-32 w-[35rem] h-[35rem] bg-trebol/20 rounded-full blur-[140px]" />
        <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] bg-emerald-500/15 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1400px] w-full mx-auto relative z-10">

        {/* Encabezado Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start mb-16 md:mb-20">
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-carbon tracking-tighter leading-[0.95]">
              ¿Qué es <br />
              <span className="text-trebol">Trébol Digital?</span>
            </h2>
          </div>

          <div className="lg:col-span-7 pt-2">
            <p className="text-lg md:text-2xl text-carbon/80 font-light leading-relaxed">
              Somos una firma de <span className="font-bold text-carbon">aceleración tecnológica y humana.</span> Ayudamos a las empresas a evolucionar su presencia digital, sus ventas y su operación interna.
            </p>
          </div>
        </div>

        {/* Grid de 3 Pilares Fundamentales de Trébol */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

          {/* Pilar 1 */}
          <div className="p-8 md:p-10 rounded-3xl bg-white border border-neutral-200/80 shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-trebol/10 border border-trebol/20 flex items-center justify-center text-trebol mb-8 group-hover:bg-trebol group-hover:text-white transition-all duration-300">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-bold text-carbon tracking-tight mb-4">
                Estrategia & Tecnología Nativa
              </h3>
              <p className="text-carbon/70 text-base leading-relaxed font-light mb-6">
                Unimos diseño web de calidad editorial, estrategias de marketing hipersegmentadas y modelos de Inteligencia Artificial ajustados a tu industria.
              </p>
            </div>
            <ul className="space-y-2 text-xs font-mono text-carbon/80 pt-6 border-t border-neutral-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-trebol shrink-0" />
                <span>Desarrollo nativo & SEO</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-trebol shrink-0" />
                <span>Pauta de alta conversión</span>
              </li>
            </ul>
          </div>

          {/* Pilar 2 */}
          <div className="p-8 md:p-10 rounded-3xl bg-white border border-neutral-200/80 shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-trebol/10 border border-trebol/20 flex items-center justify-center text-trebol mb-8 group-hover:bg-trebol group-hover:text-white transition-all duration-300">
                <Zap size={28} />
              </div>
              <h3 className="text-2xl font-bold text-carbon tracking-tight mb-4">
                Sistemas Comerciales Escalables
              </h3>
              <p className="text-carbon/70 text-base leading-relaxed font-light mb-6">
                No creamos simples vitrinas estáticas. Diseñamos ecosistemas digitales orientados a la conversión de clientes y retorno directo de inversión.
              </p>
            </div>
            <ul className="space-y-2 text-xs font-mono text-carbon/80 pt-6 border-t border-neutral-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-trebol shrink-0" />
                <span>Automatización con IA & CRM</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-trebol shrink-0" />
                <span>Filtro anti-leads basura</span>
              </li>
            </ul>
          </div>

          {/* Pilar 3 */}
          <div className="p-8 md:p-10 rounded-3xl bg-trebol text-white shadow-xl hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-all duration-300">
                <Users size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-4">
                Capacitación & Autonomía Humana
              </h3>
              <p className="text-white/90 text-base leading-relaxed font-light mb-6">
                No generamos dependencia. Formamos y capacitamos a tu equipo para que tomen el control autónomo de todas las herramientas implementadas.
              </p>
            </div>
            <ul className="space-y-2 text-xs font-mono text-white/90 pt-6 border-t border-white/20 relative z-10">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-white shrink-0" />
                <span>Talleres prácticos a medida</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-white shrink-0" />
                <span>Transferencia técnica completa</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bloque Secundario: Somos tu aliado estratégico */}
        <div className="pt-16 border-t border-neutral-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="lg:col-span-5">
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-carbon tracking-tighter leading-[0.95]">
                Somos tu <br />
                <span className="text-trebol">aliado estratégico.</span>
              </h3>
            </div>

            <div className="lg:col-span-7 pt-1">
              <p className="text-base md:text-xl text-carbon/80 font-light leading-relaxed">
                <span className="font-bold text-carbon">Trébol Digital</span> es una empresa especializada en impulsar el crecimiento de las organizaciones mediante la integración de estrategia, marketing, tecnología e inteligencia artificial — con un enfoque profundamente humano.
                <br /><br />
                Más que ofrecer servicios aislados, desarrollamos soluciones que ayudan a las empresas a vender mejor, organizarse mejor y prepararse para competir en un entorno cada vez más digital.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
