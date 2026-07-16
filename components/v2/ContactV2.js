'use client';
import { motion } from 'framer-motion';

export default function ContactV2() {
  return (
    <section id="contacto" className="w-full py-32 px-6 bg-black relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-trebol/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <div className="max-w-[1200px] mx-auto relative z-10 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-10 md:p-20 shadow-[0_0_80px_rgba(0,0,0,0.8)]">
        <div className="flex flex-col md:flex-row gap-16">
          
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-6">
              Inicia tu <br/>
              <span className="text-trebol">Evolución.</span>
            </h2>
            <p className="text-white/50 text-lg font-light mb-10 max-w-sm">
              Déjanos un mensaje y comencemos a arquitectar el futuro de tu negocio digital hoy mismo.
            </p>
            <div className="flex flex-col gap-4 text-white/70">
              <a href="mailto:hola@treboldigital.com" className="hover:text-trebol transition-colors">hola@treboldigital.com</a>
              <span>+1 (555) 123-4567</span>
            </div>
          </div>

          <div className="md:w-1/2">
            <form className="flex flex-col gap-8">
              <input type="text" placeholder="Nombre completo" className="w-full bg-transparent border-b border-white/20 pb-4 text-white placeholder-white/30 outline-none focus:border-trebol transition-colors" />
              <input type="email" placeholder="Correo electrónico" className="w-full bg-transparent border-b border-white/20 pb-4 text-white placeholder-white/30 outline-none focus:border-trebol transition-colors" />
              <textarea placeholder="Cuéntanos sobre tu proyecto..." rows="4" className="w-full bg-transparent border-b border-white/20 pb-4 text-white placeholder-white/30 outline-none focus:border-trebol transition-colors resize-none"></textarea>
              <button type="button" className="self-end px-10 py-4 bg-trebol text-black font-bold rounded-full hover:bg-white transition-colors duration-300">
                Enviar Mensaje
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
