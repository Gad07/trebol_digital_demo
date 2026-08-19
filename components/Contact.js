'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Clock, Zap } from 'lucide-react';

export default function Contact({ isLanding }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contacto" className={`w-full pt-12 sm:pt-16 md:pt-24 pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6 md:px-12 relative overflow-hidden ${isLanding ? 'bg-transparent text-inherit' : 'bg-hueso'}`}>
      <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        
        {/* COLUMNA IZQUIERDA: DISTRIBUCIÓN PERFECTA DE CONTENIDO Y CTAS (6 COLS) */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6 md:space-y-8 text-left h-full">
          
          {/* Bloque Superior: Titular y Descripción */}
          <div className="space-y-4">
            <motion.h2 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black leading-[0.9] tracking-tight ${isLanding ? 'text-inherit' : 'text-carbon'}`}
            >
              Hablemos <br/>
              del <span className="text-trebol">Futuro.</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className={`text-base sm:text-lg md:text-xl font-normal max-w-xl leading-relaxed font-sans ${isLanding ? 'opacity-85' : 'text-carbon/75'}`}
            >
              Agenda un diagnóstico estratégico. Analizaremos tu ecosistema digital y te propondremos la ruta exacta hacia el crecimiento de tus ventas.
            </motion.p>
          </div>

          {/* Bloque Central: Botón CTA Principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="pt-2"
          >
            <a
              href="/agenda"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-trebol text-white font-bold text-sm sm:text-base md:text-lg hover:bg-carbon transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer group outline-none"
            >
              <span>Agendar diagnóstico gratuito</span>
              <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Bloque Inferior: Indicadores de Confianza y Valor */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className={`pt-6 border-t grid grid-cols-3 gap-2 sm:gap-3 text-xs md:text-sm font-sans font-semibold ${isLanding ? 'border-current/15 opacity-85' : 'border-carbon/10 text-carbon/70'}`}
          >
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Clock size={16} className="text-trebol shrink-0" />
              <span>Respuesta &lt;24 hrs</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Zap size={16} className="text-trebol shrink-0" />
              <span>Sin costo ni compromiso</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <ShieldCheck size={16} className="text-trebol shrink-0" />
              <span>100% Confidencial</span>
            </div>
          </motion.div>

        </div>

        {/* COLUMNA DERECHA: FORMULARIO MINIMALISTA CON DISTRIBUCIÓN LIMPIA (6 COLS) */}
        <div className="lg:col-span-6 w-full">
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`p-6 sm:p-10 md:p-14 border-l-8 border-trebol shadow-xl rounded-2xl sm:rounded-3xl space-y-4 ${
                isLanding ? 'bg-current/10 border-current/20 text-inherit' : 'bg-white'
              }`}
            >
              <h3 className={`text-3xl sm:text-4xl md:text-5xl font-black ${isLanding ? 'text-inherit' : 'text-carbon'}`}>¡Recibido!</h3>
              <p className={`text-base sm:text-lg md:text-xl font-light leading-relaxed font-sans ${isLanding ? 'opacity-85' : 'text-carbon/75'}`}>
                Nuestro equipo estratégico revisará tu proyecto y te contactará en menos de 24 horas.
              </p>
            </motion.div>
          ) : (
            <motion.form 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit} 
              className={`flex flex-col gap-6 sm:gap-8 backdrop-blur-xl p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-[2.5rem] shadow-2xl ${
                isLanding
                  ? 'bg-current/10 border border-current/20 text-inherit'
                  : 'bg-white/80 border border-white/90 text-carbon'
              }`}
            >
              <div className="space-y-1">
                <h3 className={`text-xl sm:text-2xl font-black font-sans ${isLanding ? 'text-inherit' : 'text-carbon'}`}>Solicitar Diagnóstico</h3>
                <p className={`text-xs sm:text-sm font-sans ${isLanding ? 'opacity-80' : 'text-carbon/70'}`}>Déjanos tus datos y nos comunicamos contigo inmediatamente.</p>
              </div>

              <div className="space-y-5 sm:space-y-6 pt-1">
                <div className={`flex flex-col border-b-2 pb-2 transition-colors focus-within:border-trebol ${isLanding ? 'border-current/20' : 'border-carbon/15'}`}>
                  <label htmlFor="name" className={`text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider mb-1 ${isLanding ? 'opacity-80' : 'text-carbon/50'}`}>
                    Tu nombre o empresa *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Ej. Gadiel / Empresa S.A."
                    className="w-full bg-transparent text-base sm:text-xl md:text-2xl text-carbon placeholder:text-carbon/30 outline-none font-medium"
                  />
                </div>

                <div className="flex flex-col border-b-2 border-carbon/15 pb-2 transition-colors focus-within:border-trebol">
                  <label htmlFor="email" className="text-[11px] sm:text-xs font-mono font-bold text-carbon/50 uppercase tracking-wider mb-1">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="nombre@empresa.com"
                    className="w-full bg-transparent text-base sm:text-xl md:text-2xl text-carbon placeholder:text-carbon/30 outline-none font-medium"
                  />
                </div>

                <div className="flex flex-col border-b-2 border-carbon/15 pb-2 transition-colors focus-within:border-trebol">
                  <label htmlFor="message" className="text-[11px] sm:text-xs font-mono font-bold text-carbon/50 uppercase tracking-wider mb-1">
                    ¿Cuál es tu principal reto comercial?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={2}
                    placeholder="Ej. Queremos captar más prospectos y mejorar nuestro embudo..."
                    className="w-full bg-transparent text-base sm:text-xl md:text-2xl text-carbon placeholder:text-carbon/30 outline-none font-medium resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-carbon text-white text-sm sm:text-base md:text-lg font-bold py-3.5 sm:py-4 px-4 rounded-2xl hover:bg-trebol transition-colors duration-300 shadow-md cursor-pointer flex items-center justify-center gap-2 mt-1 font-sans"
              >
                <span>Enviar solicitud de diagnóstico</span>
                <ArrowUpRight size={18} />
              </button>
            </motion.form>
          )}
        </div>

      </div>
    </section>
  );
}
