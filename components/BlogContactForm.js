'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="w-full bg-[#FAF5F2] border border-carbon/10 p-8 md:p-14 text-carbon my-12">
      <div className="max-w-[600px] mx-auto text-center">
        <h3 className="font-serif text-3xl md:text-4xl font-black text-carbon mb-10">
          Dime lo que te pasa por tu mente
        </h3>
        
        {submitted ? (
          <div className="py-8">
            <h4 className="font-serif text-2xl font-bold text-[#B35431] mb-3">Mensaje recibido.</h4>
            <p className="text-sm text-carbon/70 font-light font-sans">
              Gracias por escribirnos. Nuestro equipo se pondrá en contacto contigo muy pronto.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col border-b border-carbon/20 pb-2 focus-within:border-carbon transition-colors">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gris mb-1 font-sans">Nombre</label>
                <input
                  type="text"
                  required
                  className="bg-transparent border-none outline-none text-sm text-carbon placeholder:text-carbon/20 font-light py-1 font-sans"
                />
              </div>
              <div className="flex flex-col border-b border-carbon/20 pb-2 focus-within:border-carbon transition-colors">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gris mb-1 font-sans">Apellido</label>
                <input
                  type="text"
                  required
                  className="bg-transparent border-none outline-none text-sm text-carbon placeholder:text-carbon/20 font-light py-1 font-sans"
                />
              </div>
            </div>

            <div className="flex flex-col border-b border-carbon/20 pb-2 focus-within:border-carbon transition-colors">
              <label className="text-[10px] font-bold uppercase tracking-wider text-gris mb-1 font-sans">Email</label>
              <input
                type="email"
                required
                className="bg-transparent border-none outline-none text-sm text-carbon placeholder:text-carbon/20 font-light py-1 font-sans"
              />
            </div>

            <div className="flex flex-col border-b border-carbon/20 pb-2 focus-within:border-carbon transition-colors">
              <label className="text-[10px] font-bold uppercase tracking-wider text-gris mb-1 font-sans">Déjanos tu mensaje</label>
              <textarea
                rows={2}
                required
                className="bg-transparent border-none outline-none text-sm text-carbon placeholder:text-carbon/20 font-light py-1 resize-none font-sans"
              />
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                className="bg-[#B35431] hover:bg-carbon text-white font-bold text-xs uppercase tracking-widest px-10 py-3.5 transition-all duration-300 font-sans"
              >
                Enviar
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

export function ContactCTA() {
  return (
    <div className="bg-carbon text-white border border-white/10 p-10 md:p-16 flex flex-col md:flex-row gap-10 items-start md:items-center justify-between">
      <div>
        <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-3 text-white font-serif leading-[0.95]">
          ¿Quieres implementar esto <br />
          <span className="text-trebol italic">en tu negocio?</span>
        </h3>
        <p className="text-base text-white/50 font-light font-sans">
          Agenda un diagnóstico gratuito de 30 minutos.
        </p>
      </div>
      <Link
        href="/agenda"
        className="inline-flex items-center gap-3 bg-trebol text-white font-bold px-10 py-5 hover:bg-white hover:text-carbon transition-colors duration-500 text-sm shrink-0 border border-trebol uppercase tracking-widest font-sans"
      >
        Agendar ahora
        <ArrowUpRight size={18} strokeWidth={2.5} />
      </Link>
    </div>
  );
}
