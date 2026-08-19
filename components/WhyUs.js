import { BookOpen, Cpu, HeartHandshake, Target } from 'lucide-react';

const reasons = [
  {
    icon: BookOpen,
    num: '01',
    title: 'Autonomía total: al final no dependerás de nosotros.',
    description: 'Te capacitamos a ti y a tu equipo e implementamos la tecnología a tu medida, para que seas tú quien administre, controle y evolucione todo sin depender de terceros.',
  },
  {
    icon: Cpu,
    num: '02',
    title: 'IA accesible y aplicada.',
    description: 'No hablamos de tecnología en abstracto. Te mostramos cómo usarla en tu negocio sin tecnicismos.',
  },
  {
    icon: HeartHandshake,
    num: '03',
    title: 'Trato personalizado.',
    description: 'Primero analizamos y conocemos tu negocio, tu mercado y tu cliente. No somos una fábrica de contenido.',
  },
  {
    icon: Target,
    num: '04',
    title: 'Resultados reales.',
    description: 'Cada acción tiene un objetivo. No hacemos trending, vendemos tu servicio o producto con estrategia.',
  },
];

export default function WhyUs({ sec }) {
  const customReasons = (sec && sec.items && sec.items.length > 0 ? sec.items : reasons).map((r, i) => ({
    icon: reasons[i % 4].icon,
    num: r.num || `0${i + 1}`,
    title: r.title || reasons[i % 4].title,
    description: r.desc || r.description || reasons[i % 4].description,
  }));

  return (
    <section id="nosotros" className={`w-full py-28 md:py-36 relative overflow-hidden border-b border-current/10 ${sec ? 'bg-transparent text-inherit' : 'bg-white'}`}>
      
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto mb-16 md:mb-20">
        <h2 className={`text-5xl md:text-7xl lg:text-[7.5rem] font-black tracking-tighter leading-[0.85] ${sec ? 'text-inherit' : 'text-carbon'}`}>
          {sec && sec.title ? (
            sec.title
          ) : (
            <>El <span className="text-trebol">Diferenciador.</span></>
          )}
        </h2>
        {sec && sec.subtitle && (
          <p className={`text-lg md:text-2xl font-light leading-relaxed mt-4 max-w-3xl ${sec ? 'opacity-85' : 'text-carbon/80'}`}>
            {sec.subtitle}
          </p>
        )}
      </div>

      {/* Grid de Cards en Estilo Editorial */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {customReasons.map((r, i) => {
          const Icon = r.icon;
          return (
            <div
              key={i}
              className={`rounded-[2.5rem] p-8 md:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group flex flex-col justify-between h-full ${
                sec
                  ? 'bg-current/5 border border-current/15 text-inherit'
                  : 'bg-white border border-neutral-100 text-carbon'
              }`}
            >
              <div>
                <div className="flex justify-between items-center mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-trebol/10 border border-trebol/20 text-trebol flex items-center justify-center group-hover:bg-trebol group-hover:text-white transition-all duration-300">
                    <Icon size={28} />
                  </div>
                  <span className="text-3xl font-black font-mono text-trebol/50 group-hover:text-trebol transition-colors">
                    {r.num}
                  </span>
                </div>

                <h3 className={`text-2xl md:text-4xl font-black mb-4 tracking-tight group-hover:text-trebol transition-colors ${sec ? 'text-inherit' : 'text-carbon'}`}>
                  {r.title}
                </h3>

                <p className={`text-base md:text-xl font-light leading-relaxed ${sec ? 'opacity-80' : 'text-carbon/75'}`}>
                  {r.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
