'use client';
import { motion } from 'framer-motion';

export default function WhyUsV3() {
  return (
    <section id="nosotros" className="w-full py-16 px-4 md:px-8 relative">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6 h-auto md:h-[60vh]">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 bg-carbon/90 backdrop-blur-3xl border-t border-l border-white/20 border-b border-r border-black/50 text-white rounded-[3rem] p-10 md:p-14 shadow-[0_30px_60px_rgba(0,0,0,0.2),inset_0_1px_20px_rgba(255,255,255,0.05)] flex flex-col justify-center hover:-translate-y-2 hover:scale-[1.01] transition-all duration-500"
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">Nuestra filosofía es <span className="text-trebol">simple.</span></h2>
            <p className="text-xl md:text-3xl text-white/60 font-light max-w-2xl leading-relaxed">
              No construimos herramientas aisladas. Diseñamos sistemas integrales que trabajan en perfecta sincronía.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-[80px] border-t border-l border-white/80 border-b border-r border-white/30 rounded-[3rem] p-8 shadow-[0_30px_60px_rgba(0,0,0,0.08),inset_0_1px_20px_rgba(255,255,255,0.4)] flex flex-col justify-end hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500"
          >
            <h3 className="text-3xl font-bold text-carbon mb-2">Autonomía Total</h3>
            <p className="text-carbon/60 text-sm">Te capacitamos para que administres por tu cuenta y no dependas de nosotros.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="bg-trebol/90 backdrop-blur-3xl border-t border-l border-white/40 border-b border-r border-black/10 text-white rounded-[3rem] p-8 shadow-[0_30px_60px_rgba(92,158,49,0.3),inset_0_1px_20px_rgba(255,255,255,0.2)] flex flex-col justify-end hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500"
          >
            <h3 className="text-3xl font-bold mb-2">Precisión</h3>
            <p className="text-white/80 text-sm">Basado en datos duros, no en suposiciones o trends.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
