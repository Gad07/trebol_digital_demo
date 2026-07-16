'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contacto" className="w-full bg-hueso py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-24 items-start">
        
        {/* Massive Typography Left */}
        <div className="md:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-7xl md:text-9xl font-black text-carbon leading-[0.85] tracking-tighter mb-12"
          >
            Hablemos <br/>
            del <span className="text-trebol">Futuro.</span>
          </motion.h2>
          
          <motion.p
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-2xl text-carbon/70 font-light max-w-lg leading-relaxed mb-16"
          >
             Agenda un diagnóstico estratégico. Analizaremos tu ecosistema digital y te propondremos la ruta exacta hacia tu crecimiento.
          </motion.p>
          
          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="flex flex-col gap-4 text-carbon font-medium text-lg"
          >
            <p className="hover:text-trebol transition-colors cursor-pointer">hola@treboldigital.com</p>
            <p className="hover:text-trebol transition-colors cursor-pointer">+52 (461) 123-4567</p>
          </motion.div>
        </div>

        {/* Minimalist Form Right */}
        <div className="md:w-1/2 w-full pt-8 md:pt-0">
          {submitted ? (
            <motion.div 
               initial={{ opacity: 0 }} animate={{ opacity: 1 }}
               className="p-12 border-l-8 border-trebol bg-white shadow-2xl rounded-r-3xl"
            >
              <h3 className="text-5xl font-extrabold text-carbon mb-6">Recibido.</h3>
              <p className="text-2xl text-carbon/70 font-light">Nuestro equipo estratégico te contactará en menos de 24 horas.</p>
            </motion.div>
          ) : (
            <motion.form 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit} 
              className="flex flex-col gap-12 bg-white/50 backdrop-blur-2xl border border-white/60 p-10 md:p-14 rounded-[3rem] shadow-[0_8px_32px_rgba(0,0,0,0.03)]"
            >
              <div className="flex flex-col border-b-2 border-carbon/10 pb-4 transition-colors focus-within:border-trebol">
                <input
                  type="text" id="name" name="name" required
                  placeholder="Tu nombre o empresa"
                  className="w-full bg-transparent text-3xl md:text-4xl text-carbon placeholder:text-carbon/20 outline-none font-light"
                />
              </div>
              <div className="flex flex-col border-b-2 border-carbon/20 pb-4 transition-colors focus-within:border-trebol">
                <input
                  type="email" id="email" name="email" required
                  placeholder="correo@ejemplo.com"
                  className="w-full bg-transparent text-3xl md:text-4xl text-carbon placeholder:text-carbon/20 outline-none font-light"
                />
              </div>
              <div className="flex flex-col border-b-2 border-carbon/20 pb-4 transition-colors focus-within:border-trebol">
                <textarea
                  id="message" name="message" rows={2}
                  placeholder="¿Cuál es tu principal reto hoy?"
                  className="w-full bg-transparent text-3xl md:text-4xl text-carbon placeholder:text-carbon/20 outline-none font-light resize-none"
                />
              </div>
              <button
                type="submit"
                className="self-start bg-carbon text-hueso text-xl font-bold py-6 px-16 rounded-full hover:bg-trebol transition-colors duration-500 mt-4"
              >
                Enviar Solicitud
              </button>
            </motion.form>
          )}
        </div>

      </div>
    </section>
  );
}
