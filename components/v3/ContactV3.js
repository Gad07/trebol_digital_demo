'use client';
import { motion } from 'framer-motion';

export default function ContactV3() {
  return (
    <section id="contacto" className="w-full py-16 px-4 md:px-8 relative">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-[80px] border-t border-l border-white/80 border-b border-r border-white/30 rounded-[3rem] p-10 md:p-20 shadow-[0_30px_60px_rgba(0,0,0,0.08),inset_0_1px_20px_rgba(255,255,255,0.4)] flex flex-col justify-center"
          >
            <h2 className="text-5xl md:text-6xl font-black text-carbon tracking-tighter mb-6">Contáctanos.</h2>
            <p className="text-xl text-carbon/60 font-light mb-12">Estamos listos para escalar tu operación. Llena el formulario o envíanos un correo directo a <a href="mailto:hola@treboldigital.com" className="text-trebol font-medium hover:underline">hola@treboldigital.com</a>.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-[80px] border-t border-l border-white/90 border-b border-r border-white/40 rounded-[3rem] p-10 md:p-20 shadow-[0_40px_80px_rgba(0,0,0,0.05),inset_0_1px_20px_rgba(255,255,255,0.8)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-trebol/10 rounded-full blur-[80px] pointer-events-none"></div>
            <form className="flex flex-col gap-6">
              <input type="text" placeholder="Nombre de tu empresa" className="w-full bg-white/50 border border-black/5 rounded-2xl px-6 py-4 text-carbon outline-none focus:border-trebol transition-colors" />
              <input type="email" placeholder="Correo corporativo" className="w-full bg-white/50 border border-black/5 rounded-2xl px-6 py-4 text-carbon outline-none focus:border-trebol transition-colors" />
              <textarea placeholder="Detalles de tu desafío..." rows="4" className="w-full bg-white/50 border border-black/5 rounded-2xl px-6 py-4 text-carbon outline-none focus:border-trebol transition-colors resize-none"></textarea>
              <button type="button" className="w-full py-5 bg-carbon text-white font-bold rounded-2xl hover:bg-trebol transition-colors duration-300 mt-2">
                Enviar Solicitud
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
