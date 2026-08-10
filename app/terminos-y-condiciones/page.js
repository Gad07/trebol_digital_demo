import Link from 'next/link';

export const metadata = {
  title: 'Términos y Condiciones | Trébol Digital',
  description: 'Consulta los términos y condiciones de uso de los servicios y sitio web de Trébol Digital.',
};

export default function TerminosCondicionesPage() {
  return (
    <main className="w-full bg-[#FAF9F6] min-h-screen pt-36 pb-24 px-6 md:px-12 text-[#2D2E2D]">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Encabezado */}
        <div className="space-y-4 border-b border-gray-200 pb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#5C9E43] hover:underline uppercase tracking-wider">
            ← Volver al inicio
          </Link>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#2D2E2D]">
            Términos y Condiciones
          </h1>
          <p className="text-sm font-mono text-gray-500">
            Última actualización: 10 de Agosto de 2026
          </p>
        </div>

        {/* Cuerpo del Documento */}
        <div className="space-y-8 text-base md:text-lg leading-relaxed text-[#2D2E2D]/85 font-light">
          
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#2D2E2D]">1. Aceptación de los Términos</h2>
            <p>
              Al acceder y utilizar el sitio web de Trébol Digital o contratar cualquiera de nuestros servicios de estrategia digital, desarrollo web, desarrollo organizacional e inteligencia artificial, usted acepta cumplir y quedar sujeto a los presentes Términos y Condiciones.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#2D2E2D]">2. Alcance de los Servicios</h2>
            <p>
              Trébol Digital ofrece soluciones digitales personalizadas. Las especificaciones particulares, entregables, tiempos de ejecución y costos de cada proyecto se formalizarán en la propuesta comercial o contrato correspondiente aceptado por el cliente.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#2D2E2D]">3. Propiedad Intelectual</h2>
            <p>
              Todos los códigos de programación, diseños, interfaces, marcas, textos y materiales gráficos generados por Trébol Digital están protegidos por leyes de propiedad intelectual. Salvo acuerdo en contrario, la propiedad de los entregables finales se transfiere al cliente una vez liquidado el costo total acordado.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#2D2E2D]">4. Responsabilidades del Cliente</h2>
            <p> El cliente se compromete a: </p>
            <ul className="list-disc pl-6 space-y-1 font-normal">
              <li>Proporcionar información veraz, oportuna y completa para la ejecución del proyecto.</li>
              <li>Asegurar los derechos de autor de las imágenes, textos o marcas provistas para su uso.</li>
              <li>Realizar los pagos acordados conforme al calendario pactado.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#2D2E2D]">5. Modificaciones</h2>
            <p>
              Trébol Digital se reserva el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor a partir de su publicación en este sitio web.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-[#2D2E2D]">6. Contacto Legal</h2>
            <p>
              Para cualquier consulta sobre estos términos, escríbanos a <a href="mailto:hola@treboldigital.com" className="text-[#5C9E43] font-bold hover:underline">hola@treboldigital.com</a> o por WhatsApp al <a href="https://wa.me/525564929081" className="text-[#5C9E43] font-bold hover:underline">+52 55 6492 9081</a>.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
