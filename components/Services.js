import { Target, Zap, Users, Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function Services({ sec }) {
  const defaultItems = [
    {
      icon: Target,
      title: 'Estrategia & Tecnología Nativa',
      desc: 'Unimos diseño web de calidad editorial, estrategias de marketing hipersegmentadas y modelos de Inteligencia Artificial ajustados a tu industria.',
      bullets: ['Desarrollo nativo & SEO', 'Pauta de alta conversión']
    },
    {
      icon: Zap,
      title: 'Sistemas Comerciales Escalables',
      desc: 'No creamos simples vitrinas estáticas. Diseñamos ecosistemas digitales orientados a la conversión de clientes y retorno directo de inversión.',
      bullets: ['Automatización con IA & CRM', 'Filtro anti-leads basura']
    },
    {
      icon: Users,
      title: 'Capacitación & Autonomía Humana',
      desc: 'No generamos dependencia. Formamos y capacitamos a tu equipo para que tomen el control autónomo de todas las herramientas implementadas.',
      bullets: ['Talleres prácticos a medida', 'Transferencia técnica total']
    }
  ];

  const items = (sec && sec.items && sec.items.length > 0 ? sec.items : defaultItems).map((it, i) => ({
    icon: defaultItems[i % 3].icon,
    title: it.title || defaultItems[i % 3].title,
    desc: it.desc || it.description || defaultItems[i % 3].desc,
    bullets: it.bullets || defaultItems[i % 3].bullets
  }));

  return (
    <section id="que-es-trebol" className={`relative z-10 w-full py-24 md:py-32 px-6 md:px-12 overflow-hidden border-b border-current/10 ${sec ? 'bg-transparent text-inherit' : 'bg-hueso text-carbon'}`}>
      {/* Luz Ambiental de fondo */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className={`absolute -top-32 -right-32 w-[35rem] h-[35rem] rounded-full blur-[140px] ${sec ? 'bg-current/5' : 'bg-trebol/20'}`} />
        <div className={`absolute -bottom-40 -left-40 w-[30rem] h-[30rem] rounded-full blur-[120px] ${sec ? 'bg-current/5' : 'bg-emerald-500/15'}`} />
      </div>

      <div className="max-w-[1400px] w-full mx-auto relative z-10">

        {/* Encabezado Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start mb-16 md:mb-20">
          <div className="lg:col-span-5">
            <h2 className={`text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95] ${sec ? 'text-inherit' : 'text-carbon'}`}>
              {sec && sec.title ? (
                sec.title
              ) : (
                <>¿Qué es <br /><span className="text-trebol">Trébol Digital?</span></>
              )}
            </h2>
          </div>

          <div className="lg:col-span-7 pt-2">
            <p className={`text-lg md:text-2xl font-light leading-relaxed ${sec ? 'opacity-85' : 'text-carbon/80'}`}>
              {sec && sec.subtitle ? sec.subtitle : (
                <>Somos una firma de <span className={`font-bold ${sec ? 'text-inherit' : 'text-carbon'}`}>aceleración tecnológica y humana.</span> Ayudamos a las empresas a evolucionar su presencia digital, sus ventas y su operación interna.</>
              )}
            </p>
          </div>
        </div>

        {/* Grid de 3 Pilares Fundamentales de Trébol */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {items.map((item, i) => {
            const Icon = item.icon;
            const isFeatured = i === 2;
            return (
              <div
                key={i}
                className={`p-8 md:p-10 rounded-3xl transition-all duration-500 group flex flex-col justify-between relative overflow-hidden ${
                  isFeatured
                    ? 'bg-trebol text-white shadow-xl hover:shadow-2xl'
                    : sec
                    ? 'bg-current/5 border border-current/15 shadow-lg hover:shadow-2xl'
                    : 'bg-white border border-neutral-200/80 shadow-lg hover:shadow-2xl'
                }`}
              >
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-300 ${
                    isFeatured
                      ? 'bg-white/20 border border-white/30 text-white group-hover:scale-110'
                      : 'bg-trebol/10 border border-trebol/20 text-trebol group-hover:bg-trebol group-hover:text-white'
                  }`}>
                    <Icon size={28} />
                  </div>
                  <h3 className={`text-2xl font-bold tracking-tight mb-4 ${isFeatured ? 'text-white' : sec ? 'text-inherit' : 'text-carbon'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-base leading-relaxed font-light mb-6 ${isFeatured ? 'text-white/90' : sec ? 'opacity-80' : 'text-carbon/70'}`}>
                    {item.desc}
                  </p>
                </div>

                <ul className={`space-y-2 text-xs font-mono pt-6 border-t relative z-10 ${
                  isFeatured ? 'text-white/90 border-white/20' : sec ? 'opacity-85 border-current/10' : 'text-carbon/80 border-neutral-100'
                }`}>
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 size={14} className={isFeatured ? 'text-white shrink-0' : 'text-trebol shrink-0'} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bloque Secundario: Somos tu aliado estratégico */}
        <div className={`pt-16 border-t ${sec ? 'border-current/10' : 'border-neutral-200/80'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="lg:col-span-5">
              <h3 className={`text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95] ${sec ? 'text-inherit' : 'text-carbon'}`}>
                Somos tu <br />
                <span className="text-trebol">aliado estratégico.</span>
              </h3>
            </div>

            <div className="lg:col-span-7 pt-1">
              <p className={`text-base md:text-xl font-light leading-relaxed ${sec ? 'opacity-85 font-normal' : 'text-carbon/80'}`}>
                <span className="font-bold">Trébol Digital</span> es una empresa especializada en impulsar el crecimiento de las organizaciones mediante la integración de estrategia, marketing, tecnología e inteligencia artificial — con un enfoque profundamente humano.
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
