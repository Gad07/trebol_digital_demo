import Link from 'next/link';
import { Scale, FileText, CheckCircle2, ShieldCheck, Mail, Phone, MapPin, DollarSign, Building } from 'lucide-react';

export const metadata = {
  title: 'Términos y Condiciones de Servicio | Trébol Digital México',
  description: 'Términos y condiciones de uso del sitio web y contratación de servicios de Trébol Digital conforme al Código de Comercio, LFPC (PROFECO) y legislación mexicana.',
};

export default function TerminosCondicionesPage() {
  return (
    <main className="w-full bg-[#FAF9F6] min-h-screen pt-36 pb-24 px-6 md:px-12 text-[#2D2E2D]">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Encabezado */}
        <div className="space-y-4 border-b border-gray-200 pb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#5C9E43] hover:underline uppercase tracking-wider"
          >
            ← Volver al inicio
          </Link>
          <div className="flex items-center gap-3 text-[#5C9E43]">
            <Scale size={28} />
            <span className="text-xs font-mono font-bold uppercase tracking-widest bg-[#5C9E43]/10 px-3 py-1 rounded-full">
              Marco Legal: Código de Comercio, LFPC (PROFECO) & SAT
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#2D2E2D]">
            Términos y Condiciones
          </h1>
          <p className="text-sm font-mono text-gray-500">
            Última actualización: 10 de Agosto de 2026 | Jurisdicción: Estados Unidos Mexicanos
          </p>
        </div>

        {/* Resumen */}
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-200/80 shadow-sm space-y-4">
          <div className="flex items-center gap-3 text-[#2D2E2D]">
            <FileText className="text-[#5C9E43]" size={22} />
            <h2 className="text-lg font-bold">Acuerdo Legal de Uso y Prestación de Servicios</h2>
          </div>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light">
            Los presentes Términos y Condiciones regulan el acceso y uso del sitio web <strong>treboldigital.com.mx</strong>, así como los derechos y obligaciones derivados de la contratación de servicios de consultoría digital, desarrollo web, automatizaciones e inteligencia artificial ofrecidos por <strong>Trébol Digital</strong>.
          </p>
        </div>

        {/* Cláusulas */}
        <div className="space-y-10 text-base md:text-lg leading-relaxed text-[#2D2E2D]/90 font-light">
          
          {/* 1. Consentimiento Electrónico */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#2D2E2D] flex items-center gap-3">
              <span className="text-[#5C9E43] font-mono text-xl">01.</span> Aceptación y Consentimiento Electrónico
            </h2>
            <p>
              De conformidad con los artículos 89, 89 bis, 90 y demás relativos del <strong>Código de Comercio de México</strong> y el artículo 76 BIS de la <strong>Ley Federal de Protección al Consumidor (LFPC)</strong>, el acceso, navegación, registro o solicitud de presupuestos a través de esta plataforma digital constituye el consentimiento expreso e informado del usuario a los presentes términos.
            </p>
            <p>
              Para contratar servicios, el usuario manifiesta ser mayor de edad con plena capacidad legal para obligarse, o contar con la debida representación y facultades para contratar a nombre de una persona moral legalmente constituida en México o en el extranjero.
            </p>
          </section>

          {/* 2. Alcance y Formalización */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#2D2E2D] flex items-center gap-3">
              <span className="text-[#5C9E43] font-mono text-xl">02.</span> Alcance de los Servicios y Cotizaciones
            </h2>
            <p>
              Trébol Digital presta servicios especializados en 4 pilares estratégicos:
            </p>
            <ul className="list-disc pl-6 space-y-1 font-normal text-base text-gray-700">
              <li><strong>Marketing Estratégico & SEO:</strong> Pauta digital, diseño de embudos comerciales y posicionamiento web.</li>
              <li><strong>Inteligencia Artificial Aplicada:</strong> Desarrollo de agentes autónomos, flujos de automatización e integración con APIs.</li>
              <li><strong>Desarrollo Web Serverless:</strong> Aplicaciones web a la medida, tiendas de comercio electrónico y portales corporativos.</li>
              <li><strong>Desarrollo Organizacional:</strong> Capacitación in-company, cultura corporativa y optimización de flujos de trabajo.</li>
            </ul>
            <p className="text-sm text-gray-600 bg-neutral-100 p-4 rounded-2xl">
              <strong>Validez de Propuestas Comerciales:</strong> Las cotizaciones y propuestas técnicas emitidas por Trébol Digital tienen una vigencia estándar de <strong>15 (quince) días naturales</strong> a partir de su emisión, salvo que se estipule una vigencia distinta por escrito. Los alcances definitivos se formalizarán en el contrato de prestación de servicios o anexo técnico respectivo.
            </p>
          </section>

          {/* 3. Precios, Pagos y Facturación CFDI 4.0 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#2D2E2D] flex items-center gap-3">
              <span className="text-[#5C9E43] font-mono text-xl">03.</span> Precios, Pagos y Facturación Fiscal (CFDI 4.0)
            </h2>
            <p>
              Todas las operaciones comerciales se rigen bajo los siguientes lineamientos fiscales y contables:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-normal text-base text-gray-700">
              <li><strong>Moneda e Impuestos:</strong> Los precios expresados en propuestas comerciales se cotizan en <strong>Moneda Nacional (MXN)</strong> o Dólares Americanos (USD según acuerdo), más el Impuesto al Valor Agregado (<strong>IVA al 16%</strong>) aplicable en territorio mexicano.</li>
              <li><strong>Formas de Pago:</strong> Transferencia electrónica interbancaria (SPEI), tarjetas de crédito/débito procesadas por pasarelas autorizadas (Stripe/bancos) o esquemas pactados por contrato.</li>
              <li><strong>Facturación SAT (CFDI 4.0):</strong> El cliente podrá solicitar su Comprobante Fiscal Digital por Internet (CFDI) dentro del <strong>mismo mes calendario</strong> en que se efectúe el pago, proporcionando su Constancia de Situación Fiscal actualizada, RFC y uso de CFDI.</li>
            </ul>
          </section>

          {/* 4. Propiedad Intelectual e Industrial */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#2D2E2D] flex items-center gap-3">
              <span className="text-[#5C9E43] font-mono text-xl">04.</span> Propiedad Intelectual y Derechos de Autor
            </h2>
            <p>
              Conforme a la <strong>Ley Federal del Derecho de Autor (INDAUTOR)</strong> y la <strong>Ley Federal de Protección a la Propiedad Industrial (IMPI)</strong>:
            </p>
            <div className="space-y-3 pl-2">
              <p className="text-base text-gray-700">
                <strong>A. Elementos Propios de Trébol Digital:</strong> Las marcas, logotipos, nombres comerciales, textos, diseños de interfaz, arquitecturas de software base, metodologías y códigos propietarios exhibidos en este sitio son propiedad exclusiva de Trébol Digital. Queda estrictamente prohibida su copia o explotación sin autorización previa por escrito.
              </p>
              <p className="text-base text-gray-700">
                <strong>B. Entregables y Transferencia de Derechos al Cliente:</strong> En proyectos de desarrollo a medida, los derechos patrimoniales sobre los entregables finales convenidos se transferirán de manera formal al cliente una vez que la contraprestación económica haya sido <strong>liquidada en su totalidad</strong>.
              </p>
              <p className="text-base text-gray-700">
                <strong>C. Material provisto por el Cliente:</strong> El cliente garantiza ser titular legítimo de las marcas, imágenes, bases de datos o logotipos que entregue a Trébol Digital para el desarrollo de su proyecto, liberando a Trébol Digital de cualquier controversia o reclamación de terceros.
              </p>
            </div>
          </section>

          {/* 5. Confidencialidad (NDA) */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#2D2E2D] flex items-center gap-3">
              <span className="text-[#5C9E43] font-mono text-xl">05.</span> Confidencialidad y Secretos Industriales
            </h2>
            <p>
              Ambas partes se comprometen a guardar estricta confidencialidad respecto a la información técnica, comercial, financiera o estratégica intercambiada durante la ejecución de los servicios, protegiendo los secretos industriales en términos de la Ley Federal de Protección a la Propiedad Industrial.
            </p>
          </section>

          {/* 6. Garantías y Límite de Responsabilidad */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#2D2E2D] flex items-center gap-3">
              <span className="text-[#5C9E43] font-mono text-xl">06.</span> Garantía de Servicio y Límite de Responsabilidad
            </h2>
            <p>
              Trébol Digital garantiza que los entregables de software y desarrollo web funcionarán conforme a las especificaciones técnicas pactadas. Se otorga un período de <strong>garantía de estabilidad de 30 (treinta) días naturales</strong> posteriores a la entrega para corrección de incidencias o defectos de código sin costo adicional.
            </p>
            <p className="text-sm text-gray-600">
              Trébol Digital no será responsable por interrupciones en plataformas de terceros (como OpenAI, Meta, Google Cloud, AWS, Hostinger o proveedores de DNS externos), ni por afectaciones originadas por modificaciones no autorizadas efectuadas directamente por el cliente o terceros ajenos a nuestro equipo.
            </p>
          </section>

          {/* 7. Protección al Consumidor (PROFECO) */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#2D2E2D] flex items-center gap-3">
              <span className="text-[#5C9E43] font-mono text-xl">07.</span> Atención al Consumidor y Conciliación PROFECO
            </h2>
            <p>
              En caso de cualquier inconformidad con relación a los servicios prestados, ponemos a su disposición nuestro canal directo de atención en <a href="mailto:contacto@treboldigital.com.mx" className="text-[#5C9E43] font-bold underline">contacto@treboldigital.com.mx</a>.
            </p>
            <p className="text-sm text-gray-700">
              Asimismo, el usuario tiene expedito su derecho para acudir ante la <strong>Procuraduría Federal del Consumidor (PROFECO)</strong> en la vía administrativa de conciliación de conformidad con la Ley Federal de Protección al Consumidor.
            </p>
          </section>

          {/* 8. Legislación Aplicable y Jurisdicción */}
          <section className="space-y-4 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-[#2D2E2D] flex items-center gap-3">
              <span className="text-[#5C9E43] font-mono text-xl">08.</span> Legislación Aplicable y Jurisdicción
            </h2>
            <p>
              Para la interpretación, cumplimiento y resolución de cualquier controversia derivada del uso de este sitio web o de la contratación de servicios, las partes se someten expresamente a las <strong>leyes federales y locales aplicables en los Estados Unidos Mexicanos</strong> y a la jurisdicción de los <strong>Tribunales competentes con sede en la ciudad de Toluca, Estado de México o en la Ciudad de México</strong>, renunciando expresamente a cualquier otro fuero que por razón de sus domicilios presentes o futuros pudiera corresponderles.
            </p>
            
            <div className="mt-6 bg-white p-6 rounded-3xl border border-gray-200 space-y-3">
              <h3 className="font-bold text-[#2D2E2D]">Contacto Legal Oficial:</h3>
              <p className="text-sm flex items-center gap-2 text-gray-700">
                <Mail size={16} className="text-[#5C9E43]" />
                <strong>Correo Legal:</strong> <a href="mailto:contacto@treboldigital.com.mx" className="text-[#5C9E43] font-semibold underline">contacto@treboldigital.com.mx</a>
              </p>
              <p className="text-sm flex items-center gap-2 text-gray-700">
                <Phone size={16} className="text-[#5C9E43]" />
                <strong>WhatsApp / Teléfono:</strong> <a href="https://wa.me/525564929081" target="_blank" rel="noopener noreferrer" className="text-[#5C9E43] font-semibold underline">+52 55 6492 9081</a>
              </p>
              <p className="text-sm flex items-center gap-2 text-gray-700">
                <Building size={16} className="text-[#5C9E43]" />
                <strong>Atención:</strong> Lunes a Viernes de 9:00 a 18:00 hrs (Hora del Centro de México).
              </p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
