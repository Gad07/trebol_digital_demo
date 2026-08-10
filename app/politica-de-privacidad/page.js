import Link from 'next/link';

export const metadata = {
  title: 'Política de Privacidad | Trébol Digital',
  description: 'Conoce cómo Trébol Digital recaba, utiliza y protege tus datos personales conforme a la normativa vigente.',
};

export default function PoliticaPrivacidadPage() {
  return (
    <main className="w-full bg-[#FAF9F6] min-h-screen pt-36 pb-24 px-6 md:px-12 text-[#2D2E2D]">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Encabezado */}
        <div className="space-y-4 border-b border-gray-200 pb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#5C9E43] hover:underline uppercase tracking-wider">
            ← Volver al inicio
          </Link>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#2D2E2D]">
            Política de Privacidad
          </h1>
          <p className="text-sm font-mono text-gray-500">
            Última actualización: 10 de Agosto de 2026
          </p>
        </div>

        {/* Cuerpo del Documento */}
        <div className="space-y-8 text-base md:text-lg leading-relaxed text-[#2D2E2D]/85 font-light">
          
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#2D2E2D]">1. Responsable del Tratamiento de Datos</h2>
            <p>
              Trébol Digital, con contacto en <strong className="font-semibold text-[#2D2E2D]">hola@treboldigital.com</strong>, es responsable del tratamiento y protección de sus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#2D2E2D]">2. Datos Personales Recabados</h2>
            <p>
              Para prestar nuestros servicios de consultoría estratégica, desarrollo web e inteligencia artificial, recabamos los siguientes datos cuando solicita información o completa formularios de contacto:
            </p>
            <ul className="list-disc pl-6 space-y-1 font-normal">
              <li>Nombre completo y/o nombre de la empresa.</li>
              <li>Correo electrónico corporativo o personal.</li>
              <li>Número telefónico y/o WhatsApp de contacto.</li>
              <li>Detalles sobre su proyecto o requerimiento de negocio.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#2D2E2D]">3. Finalidad del Tratamiento</h2>
            <p> Sus datos personales serán utilizados exclusivamente para las siguientes finalidades primarias: </p>
            <ul className="list-disc pl-6 space-y-1 font-normal">
              <li>Elaboración de diagnósticos digitales y propuestas personalizadas.</li>
              <li>Establecer comunicación y seguimiento sobre servicios requeridos.</li>
              <li>Formalización contractual e integración de expediente del cliente.</li>
              <li>Envío de actualizaciones o recursos estratégicos (previa autorización).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#2D2E2D]">4. Protección y Confidencialidad</h2>
            <p>
              Trébol Digital implementa estrictas medidas de seguridad técnicas, administrativas y físicas para proteger sus datos personales contra daño, pérdida, alteración, destrucción o uso no autorizado. Nunca vendemos ni compartimos sus datos con terceros sin su consentimiento explícito.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#2D2E2D]">5. Derechos ARCO</h2>
            <p>
              Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales (Derechos ARCO). Para ejercerlos, puede enviar una solicitud formal por correo electrónico a <strong className="font-semibold text-[#2D2E2D]">hola@treboldigital.com</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#2D2E2D]">6. Contacto</h2>
            <p>
              Si tiene preguntas o dudas acerca de esta política de privacidad, puede contactarnos en <a href="mailto:hola@treboldigital.com" className="text-[#5C9E43] font-bold hover:underline">hola@treboldigital.com</a> o vía WhatsApp al <a href="https://wa.me/525564929081" className="text-[#5C9E43] font-bold hover:underline">+52 55 6492 9081</a>.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
