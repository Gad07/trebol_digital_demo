'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

const pasos = [
  { id: 1, label: 'Tu negocio' },
  { id: 2, label: 'Tus desafíos' },
  { id: 3, label: 'Tu horario' },
  { id: 4, label: 'Confirmación' },
];

const industrias = [
  'Retail / Comercio', 'Servicios profesionales', 'Tecnología', 'Educación',
  'Gastronomía', 'Salud / Wellness', 'Manufactura', 'Otro'
];

const desafios = [
  'No tengo presencia digital o es muy débil',
  'Tengo presencia pero no genera resultados',
  'Quiero implementar IA en mi empresa',
  'Necesito organizar mis procesos internos',
  'Quiero escalar pero me falta estructura',
  'Busco capacitar a mi equipo',
];

const horarios = [
  { dia: 'Lunes', slots: ['9:00 AM', '11:00 AM', '3:00 PM'] },
  { dia: 'Martes', slots: ['10:00 AM', '12:00 PM', '4:00 PM'] },
  { dia: 'Miércoles', slots: ['9:00 AM', '11:00 AM', '2:00 PM'] },
  { dia: 'Jueves', slots: ['10:00 AM', '1:00 PM', '4:00 PM'] },
  { dia: 'Viernes', slots: ['9:00 AM', '11:00 AM'] },
];

export default function AgendaPage() {
  const [paso, setPaso] = useState(1);
  const [form, setForm] = useState({
    nombre: '',
    empresa: '',
    industria: '',
    email: '',
    telefono: '',
    desafios: [],
    diaHora: '',
    mensaje: '',
  });
  const [enviado, setEnviado] = useState(false);

  const toggleDesafio = (d) => {
    setForm((prev) => ({
      ...prev,
      desafios: prev.desafios.includes(d)
        ? prev.desafios.filter((x) => x !== d)
        : [...prev.desafios, d],
    }));
  };

  const handleNext = () => setPaso((p) => Math.min(p + 1, 4));
  const handleBack = () => setPaso((p) => Math.max(p - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <main className="w-full bg-hueso min-h-screen overflow-hidden">
      {/* ── Hero Header ───────────────────────────────── */}
      <section className="w-full bg-hueso pt-44 pb-12 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-trebol/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-carbon text-hueso text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-8 shadow-md"
          >
            <Sparkles size={14} className="text-trebol" />
            100% Gratuito — Sin compromisos
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-6xl md:text-8xl lg:text-[7rem] font-black text-carbon leading-[0.85] tracking-tighter mb-8"
          >
            Diagnóstico Digital <br />
            <span className="text-trebol">en 30 Minutos.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-carbon/70 font-light max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Una sesión enfocada en entender tu negocio y darte claridad sobre qué pasos tomar primero. Sin venta disfrazada.
          </motion.p>
        </div>
      </section>

      {/* ── Form Section (V1 Contact Style) ──────────── */}
      <section className="w-full bg-hueso pb-32 px-6 md:px-12">
        <div className="max-w-[1000px] mx-auto">
          {!enviado ? (
            <div className="bg-white/50 backdrop-blur-2xl border border-white/60 p-8 md:p-14 rounded-[3rem] shadow-[0_8px_32px_rgba(0,0,0,0.03)]">
              {/* Stepper */}
              <div className="flex items-center justify-between mb-12 pb-8 border-b border-carbon/10">
                {pasos.map((p, i) => (
                  <div key={p.id} className="flex items-center flex-1">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-black transition-all ${paso >= p.id
                            ? 'bg-trebol text-white shadow-lg'
                            : 'bg-carbon/10 text-carbon/40'
                          }`}
                      >
                        {paso > p.id ? <CheckCircle2 size={18} /> : p.id}
                      </div>
                      <span className="text-xs font-semibold text-carbon/60 mt-2 hidden md:block">{p.label}</span>
                    </div>
                    {i < pasos.length - 1 && (
                      <div className={`h-0.5 flex-1 mx-3 rounded transition-all ${paso > p.id ? 'bg-trebol' : 'bg-carbon/10'}`} />
                    )}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  {/* Paso 1: Tu negocio */}
                  {paso === 1 && (
                    <motion.div
                      key="paso1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex flex-col gap-10"
                    >
                      <h2 className="text-3xl md:text-4xl font-extrabold text-carbon tracking-tight">Cuéntanos de ti.</h2>

                      <div className="flex flex-col border-b-2 border-carbon/10 pb-4 focus-within:border-trebol transition-colors">
                        <input
                          type="text"
                          required
                          value={form.nombre}
                          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                          placeholder="Tu nombre completo *"
                          className="w-full bg-transparent text-2xl md:text-3xl text-carbon placeholder:text-carbon/20 outline-none font-light"
                        />
                      </div>

                      <div className="flex flex-col border-b-2 border-carbon/10 pb-4 focus-within:border-trebol transition-colors">
                        <input
                          type="text"
                          required
                          value={form.empresa}
                          onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                          placeholder="Nombre de tu empresa *"
                          className="w-full bg-transparent text-2xl md:text-3xl text-carbon placeholder:text-carbon/20 outline-none font-light"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex flex-col border-b-2 border-carbon/10 pb-4 focus-within:border-trebol transition-colors">
                          <input
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="correo@ejemplo.com *"
                            className="w-full bg-transparent text-2xl text-carbon placeholder:text-carbon/20 outline-none font-light"
                          />
                        </div>
                        <div className="flex flex-col border-b-2 border-carbon/10 pb-4 focus-within:border-trebol transition-colors">
                          <input
                            type="tel"
                            value={form.telefono}
                            onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                            placeholder="Teléfono / WhatsApp"
                            className="w-full bg-transparent text-2xl text-carbon placeholder:text-carbon/20 outline-none font-light"
                          />
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-bold text-carbon uppercase tracking-widest mb-4">Industria *</p>
                        <div className="flex flex-wrap gap-3">
                          {industrias.map((ind) => (
                            <button
                              type="button"
                              key={ind}
                              onClick={() => setForm({ ...form, industria: ind })}
                              className={`text-base font-medium px-5 py-2.5 rounded-full border transition-all duration-300 ${form.industria === ind
                                  ? 'bg-trebol text-white border-trebol shadow-md'
                                  : 'bg-white/60 border-carbon/10 text-carbon/70 hover:border-trebol hover:text-trebol'
                                }`}
                            >
                              {ind}
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Paso 2: Tus desafíos */}
                  {paso === 2 && (
                    <motion.div
                      key="paso2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex flex-col gap-8"
                    >
                      <h2 className="text-3xl md:text-4xl font-extrabold text-carbon tracking-tight">¿Cuál es tu principal desafío?</h2>
                      <p className="text-lg text-carbon/60 font-light">Puedes seleccionar más de uno.</p>

                      <div className="flex flex-col gap-3">
                        {desafios.map((d) => (
                          <button
                            type="button"
                            key={d}
                            onClick={() => toggleDesafio(d)}
                            className={`flex items-center gap-4 w-full text-left p-5 rounded-2xl border transition-all duration-300 ${form.desafios.includes(d)
                                ? 'bg-trebol text-white border-trebol shadow-md'
                                : 'bg-white/60 border-carbon/10 text-carbon/80 hover:border-carbon/30'
                              }`}
                          >
                            <span className="text-xl font-light">{d}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Paso 3: Tu horario */}
                  {paso === 3 && (
                    <motion.div
                      key="paso3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex flex-col gap-8"
                    >
                      <h2 className="text-3xl md:text-4xl font-extrabold text-carbon tracking-tight">Elige tu horario preferido.</h2>
                      <p className="text-lg text-carbon/60 font-light">Horario del centro de México (CST).</p>

                      <div className="flex flex-col gap-6">
                        {horarios.map((h) => (
                          <div key={h.dia}>
                            <p className="text-xs font-bold text-trebol uppercase tracking-widest mb-3">{h.dia}</p>
                            <div className="flex flex-wrap gap-3">
                              {h.slots.map((slot) => {
                                const val = `${h.dia} ${slot}`;
                                return (
                                  <button
                                    type="button"
                                    key={slot}
                                    onClick={() => setForm({ ...form, diaHora: val })}
                                    className={`text-base font-semibold px-6 py-3 rounded-full border transition-all duration-300 ${form.diaHora === val
                                        ? 'bg-trebol text-white border-trebol shadow-md'
                                        : 'bg-white/60 border-carbon/10 text-carbon/70 hover:border-trebol hover:text-trebol'
                                      }`}
                                  >
                                    {slot}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Paso 4: Confirmación */}
                  {paso === 4 && (
                    <motion.div
                      key="paso4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex flex-col gap-8"
                    >
                      <h2 className="text-3xl md:text-4xl font-extrabold text-carbon tracking-tight">Confirma tu sesión.</h2>

                      <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-white/80 flex flex-col gap-4 text-lg">
                        <div className="flex justify-between border-b border-carbon/10 pb-3">
                          <span className="text-carbon/60 font-light">Nombre</span>
                          <span className="font-bold text-carbon">{form.nombre}</span>
                        </div>
                        <div className="flex justify-between border-b border-carbon/10 pb-3">
                          <span className="text-carbon/60 font-light">Empresa</span>
                          <span className="font-bold text-carbon">{form.empresa}</span>
                        </div>
                        <div className="flex justify-between border-b border-carbon/10 pb-3">
                          <span className="text-carbon/60 font-light">Email</span>
                          <span className="font-bold text-carbon">{form.email}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-carbon/60 font-light">Horario preferido</span>
                          <span className="font-bold text-trebol">{form.diaHora || 'Por confirmar'}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Nav buttons */}
                <div className="flex justify-between items-center mt-12 pt-8 border-t border-carbon/10">
                  {paso > 1 && (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center gap-2 text-lg font-bold text-carbon/70 hover:text-carbon transition-colors"
                    >
                      <ArrowLeft size={18} />
                      Atrás
                    </button>
                  )}

                  {paso < 4 && (
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={paso === 1 && (!form.nombre || !form.email || !form.empresa || !form.industria)}
                      className="ml-auto inline-flex items-center gap-2 bg-carbon text-hueso text-xl font-bold py-5 px-12 rounded-full hover:bg-trebol transition-colors duration-500 disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      Continuar
                      <ArrowRight size={20} />
                    </button>
                  )}

                  {paso === 4 && (
                    <button
                      type="submit"
                      className="ml-auto inline-flex items-center gap-2 bg-trebol text-white text-xl font-bold py-5 px-12 rounded-full hover:bg-carbon transition-colors duration-500 shadow-xl"
                    >
                      <Sparkles size={20} />
                      Confirmar mi diagnóstico
                    </button>
                  )}
                </div>
              </form>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/50 backdrop-blur-2xl border border-white/60 p-12 md:p-16 rounded-[3rem] text-center shadow-2xl"
            >
              <div className="w-20 h-20 bg-trebol text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-carbon mb-6">¡Sesión Agendada!</h2>
              <p className="text-2xl text-carbon/70 font-light leading-relaxed max-w-xl mx-auto mb-10">
                Hemos recibido tu información. Un consultor de Trébol Digital te contactará en menos de 24 horas para confirmar tu sesión.
              </p>
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 bg-carbon text-hueso text-lg font-bold py-5 px-12 rounded-full hover:bg-trebol transition-colors duration-500"
              >
                Explorar Insights
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}
