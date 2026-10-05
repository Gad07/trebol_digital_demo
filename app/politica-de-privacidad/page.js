import Link from 'next/link';
import { ShieldCheck, Mail, Phone, MapPin, Scale, FileText, Lock, Globe, AlertCircle } from 'lucide-react';
import OpenCookieSettingsButton from '@/components/OpenCookieSettingsButton';

export const metadata = {
  title: 'Aviso de Privacidad Integral | Trébol Digital México',
  description: 'Aviso de Privacidad Integral de Trébol Digital conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y lineamientos del INAI.',
};

export default function PoliticaPrivacidadPage() {
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
            <ShieldCheck size={28} />
            <span className="text-xs font-mono font-bold uppercase tracking-widest bg-[#5C9E43]/10 px-3 py-1 rounded-full">
              Jurisdicción: Estados Unidos Mexicanos (INAI / LFPDPPP)
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#2D2E2D]">
            Aviso de Privacidad Integral
          </h1>
          <p className="text-sm font-mono text-gray-500">
            Última actualización: 10 de Agosto de 2026 | Conforme a la LFPDPPP y su Reglamento
          </p>
        </div>

        {/* Resumen Ejecutivo de Cumplimiento */}
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-200/80 shadow-sm space-y-4">
          <div className="flex items-center gap-3 text-[#2D2E2D]">
            <Lock className="text-[#5C9E43]" size={22} />
            <h2 className="text-lg font-bold">Compromiso con la Protección de Datos Personales</h2>
          </div>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light">
            En cumplimiento con la <strong>Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</strong>, su Reglamento y los Lineamientos del Aviso de Privacidad emitidos por el <strong>Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI)</strong>, ponemos a su disposición el presente Aviso de Privacidad Integral.
          </p>
        </div>

        {/* Cuerpo del Documento */}
        <div className="space-y-10 text-base md:text-lg leading-relaxed text-[#2D2E2D]/90 font-light">
          
          {/* 1. Identidad y Domicilio */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#2D2E2D] flex items-center gap-3">
              <span className="text-[#5C9E43] font-mono text-xl">01.</span> Identidad y Domicilio del Responsable
            </h2>
            <p>
              <strong>Trébol Digital</strong> (en lo sucesivo "Trébol Digital"), con domicilio de operaciones ubicado en la zona metropolitana de Toluca / Estado de México y Ciudad de México, Estados Unidos Mexicanos, y correo electrónico oficial de contacto: <strong className="font-semibold text-[#2D2E2D]">contacto@treboldigital.com.mx</strong>, es la entidad responsable del tratamiento, uso y protección de sus datos personales.
            </p>
          </section>

          {/* 2. Datos Personales Recabados */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#2D2E2D] flex items-center gap-3">
              <span className="text-[#5C9E43] font-mono text-xl">02.</span> Datos Personales que Recabamos
            </h2>
            <p>
              Para prestar adecuadamente nuestros servicios de consultoría estratégica, desarrollo web, inteligencia artificial aplicada y desarrollo organizacional, recabamos las siguientes categorías de datos personales:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-normal text-base text-gray-700">
              <li><strong>Datos de Identificación:</strong> Nombre completo, cargo o puesto en la empresa, denominación o razón social de la persona moral que representa.</li>
              <li><strong>Datos de Contacto:</strong> Correo electrónico corporativo o personal, teléfono fijo y/o móvil con WhatsApp, domicilio fiscal o de oficina.</li>
              <li><strong>Datos Comerciales y del Proyecto:</strong> Requerimientos de negocio, descripción de objetivos digitales, volumen de operaciones estimado y presupuestos asignados a soluciones digitales.</li>
              <li><strong>Datos de Facturación (en caso de contratación):</strong> Registro Federal de Contribuyentes (RFC), domicilio fiscal, régimen fiscal, Constancia de Situación Fiscal y Uso de CFDI.</li>
            </ul>
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-sm flex items-start gap-3">
              <AlertCircle size={20} className="shrink-0 text-amber-600 mt-0.5" />
              <p>
                <strong>No tratamiento de datos sensibles:</strong> Trébol Digital <u>no recaba ni procesa datos personales sensibles</u> (tales como origen racial, estado de salud, información genética, creencias religiosas, afiliación sindical u orientación política o sexual).
              </p>
            </div>
          </section>

          {/* 3. Finalidades del Tratamiento */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#2D2E2D] flex items-center gap-3">
              <span className="text-[#5C9E43] font-mono text-xl">03.</span> Finalidades del Tratamiento
            </h2>
            <p>
              Tratamos sus datos personales de acuerdo con dos categorías de finalidades:
            </p>
            
            <div className="space-y-4 pl-2">
              <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-2">
                <h3 className="font-bold text-base text-[#5C9E43]">
                  A. Finalidades Primarias (Necesarias para la relación jurídica):
                </h3>
                <ul className="list-disc pl-6 space-y-1 text-sm md:text-base text-gray-700">
                  <li>Elaborar diagnósticos estratégicos y presupuestos técnicos personalizados.</li>
                  <li>Establecer contacto y dar seguimiento a cotizaciones o solicitudes de información.</li>
                  <li>Formalización de contratos de prestación de servicios, acuerdos de confidencialidad (NDA) y anexos técnicos.</li>
                  <li>Emisión de Comprobantes Fiscales Digitales por Internet (CFDI 4.0) ante el SAT.</li>
                  <li>Gestión de pagos, cobranza y soporte técnico continuo sobre las plataformas desarrolladas.</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-2">
                <h3 className="font-bold text-base text-[#2D2E2D]">
                  B. Finalidades Secundarias (No necesarias para la relación jurídica):
                </h3>
                <ul className="list-disc pl-6 space-y-1 text-sm md:text-base text-gray-700">
                  <li>Envío de boletines informativos (newsletters), tendencias de inteligencia artificial y artículos de blog.</li>
                  <li>Invitaciones a webinars, eventos presenciales o talleres de capacitación organizados por Trébol Digital.</li>
                  <li>Encuestas de satisfacción y calidad en el servicio.</li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-gray-600 italic">
              <strong>Negativa a finalidades secundarias:</strong> Si no desea que sus datos sean tratados para las finalidades secundarias, puede manifestar su negativa enviando un correo a <a href="mailto:contacto@treboldigital.com.mx" className="text-[#5C9E43] font-semibold underline">contacto@treboldigital.com.mx</a> con el asunto "Negativa a Finalidades Secundarias".
            </p>
          </section>

          {/* 4. Ejercicio de Derechos ARCO */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#2D2E2D] flex items-center gap-3">
              <span className="text-[#5C9E43] font-mono text-xl">04.</span> Ejercicio de Derechos ARCO y Revocación del Consentimiento
            </h2>
            <p>
              Usted o su representante legal debidamente acreditado tienen derecho a ejercer en cualquier momento sus derechos de <strong>Acceso, Rectificación, Cancelación y Oposición (Derechos ARCO)</strong>, así como a revocar el consentimiento otorgado para el tratamiento de sus datos personales.
            </p>
            <div className="bg-[#FAF9F6] border-l-4 border-[#5C9E43] p-5 rounded-r-2xl space-y-3">
              <h3 className="font-bold text-base text-[#2D2E2D]">Procedimiento y Plazos (Art. 32 LFPDPPP):</h3>
              <ol className="list-decimal pl-6 space-y-2 text-sm md:text-base text-gray-700">
                <li>
                  <strong>Envío de Solicitud:</strong> Envíe un correo electrónico a <strong className="text-[#2D2E2D]">contacto@treboldigital.com.mx</strong> con el asunto "Solicitud de Derechos ARCO".
                </li>
                <li>
                  <strong>Requisitos:</strong> Adjuntar (i) Nombre del titular y medio para recibir notificaciones; (ii) Documento que acredite su identidad (copia de INE, Pasaporte o Poder Notarial); (iii) Descripción clara y precisa de los datos respecto de los que busca ejercer alguno de los derechos ARCO; y (iv) Cualquier elemento que facilite la localización de los datos.
                </li>
                <li>
                  <strong>Plazo de Respuesta:</strong> Trébol Digital responderá a su solicitud en un plazo máximo de <strong>20 (veinte) días hábiles</strong> contados a partir de la fecha de recepción de la solicitud completa. De resultar procedente, se hará efectiva dentro de los <strong>15 (quince) días hábiles</strong> siguientes.
                </li>
              </ol>
            </div>
          </section>

          {/* 5. Transferencia de Datos */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#2D2E2D] flex items-center gap-3">
              <span className="text-[#5C9E43] font-mono text-xl">05.</span> Transferencia de Datos Personales
            </h2>
            <p>
              Trébol Digital no vende, cede ni transfiere sus datos personales a terceros con fines comerciales. Sus datos únicamente podrán ser transferidos sin requerir su consentimiento bajo los supuestos previstos en el <strong>Artículo 37 de la LFPDPPP</strong>, incluyendo:
            </p>
            <ul className="list-disc pl-6 space-y-1 font-normal text-base text-gray-700">
              <li>Proveedores tecnológicos de infraestructura cloud y hospedaje de servidores (con altos estándares de cifrado y seguridad internacional).</li>
              <li>Instituciones bancarias y pasarelas de pago autorizadas para el procesamiento seguro de transacciones.</li>
              <li>Autoridades competentes mexicanas (como el SAT o tribunales judiciales) en cumplimiento de disposiciones legales expresas.</li>
            </ul>
          </section>

          {/* 6. Uso de Cookies y Tecnologías de Rastreo */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#2D2E2D] flex items-center gap-3">
              <span className="text-[#5C9E43] font-mono text-xl">06.</span> Uso de Cookies, Web Beacons y Tecnologías de Rastreo
            </h2>
            <p>
              Le informamos que en nuestro sitio web utilizamos cookies, web beacons y otras tecnologías a través de las cuales es posible monitorear su comportamiento como usuario de internet, brindarle un mejor servicio y experiencia de navegación:
            </p>
            <ul className="list-disc pl-6 space-y-1 font-normal text-base text-gray-700">
              <li><strong>Cookies Esenciales:</strong> Necesarias para la navegación y la seguridad técnica del sitio.</li>
              <li><strong>Cookies Analíticas (Google Analytics 4):</strong> Para comprender cómo interactúan los visitantes con el sitio web de forma anónima y agregada.</li>
              <li><strong>Píxeles de Conversión (Meta Pixel, LinkedIn Tag):</strong> Para medir la efectividad de campañas publicitarias B2B.</li>
            </ul>
            <p className="text-sm text-gray-600">
              Usted puede desactivar o configurar el uso de cookies en cualquier momento mediante las opciones de configuración de su navegador web (Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge) o de forma directa en nuestro centro de preferencias:
            </p>
            <div className="pt-2">
              <OpenCookieSettingsButton />
            </div>
          </section>

          {/* 7. Limitación de Uso y REPEP */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#2D2E2D] flex items-center gap-3">
              <span className="text-[#5C9E43] font-mono text-xl">07.</span> Limitación del Uso o Divulgación de Datos y PROFECO
            </h2>
            <p>
              Para limitar el uso y divulgación de sus datos personales con fines publicitarios, usted puede inscribirse en el <strong>Registro Público para Evitar Publicidad (REPEP)</strong> de la <strong>Procuraduría Federal del Consumidor (PROFECO)</strong> a través del sitio web <a href="https://repep.profeco.gob.mx" target="_blank" rel="noopener noreferrer" className="text-[#5C9E43] font-bold underline">repep.profeco.gob.mx</a>.
            </p>
          </section>

          {/* 8. Modificaciones al Aviso */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#2D2E2D] flex items-center gap-3">
              <span className="text-[#5C9E43] font-mono text-xl">08.</span> Modificaciones al Aviso de Privacidad
            </h2>
            <p>
              El presente Aviso de Privacidad puede sufrir modificaciones o actualizaciones derivadas de nuevos requerimientos legales, necesidades operativas o mejoras en nuestras prácticas de privacidad. Cualquier cambio sustancial será publicado directamente en este sitio web en <Link href="/politica-de-privacidad" className="text-[#5C9E43] font-bold underline">treboldigital.com.mx/politica-de-privacidad</Link>.
            </p>
          </section>

          {/* 9. Autoridad y Contacto */}
          <section className="space-y-4 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-[#2D2E2D] flex items-center gap-3">
              <span className="text-[#5C9E43] font-mono text-xl">09.</span> Autoridad Competente y Contacto
            </h2>
            <p>
              Si usted considera que su derecho a la protección de datos personales ha sido lesionado por alguna conducta de nuestros empleados o de nuestras actuaciones, podrá interponer la queja o denuncia correspondiente ante el <strong>INAI (Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales)</strong> en <a href="https://home.inai.org.mx" target="_blank" rel="noopener noreferrer" className="text-[#5C9E43] font-bold underline">home.inai.org.mx</a>.
            </p>
            
            <div className="mt-6 bg-white p-6 rounded-3xl border border-gray-200 space-y-3">
              <h3 className="font-bold text-[#2D2E2D]">Oficina de Privacidad y Contacto Oficial:</h3>
              <p className="text-sm flex items-center gap-2 text-gray-700">
                <Mail size={16} className="text-[#5C9E43]" />
                <strong>Correo Electrónico:</strong> <a href="mailto:contacto@treboldigital.com.mx" className="text-[#5C9E43] font-semibold underline">contacto@treboldigital.com.mx</a>
              </p>
              <p className="text-sm flex items-center gap-2 text-gray-700">
                <Phone size={16} className="text-[#5C9E43]" />
                <strong>WhatsApp / Teléfono:</strong> <a href="https://wa.me/525564929081" target="_blank" rel="noopener noreferrer" className="text-[#5C9E43] font-semibold underline">+52 55 6492 9081</a>
              </p>
              <p className="text-sm flex items-center gap-2 text-gray-700">
                <MapPin size={16} className="text-[#5C9E43]" />
                <strong>Ubicación:</strong> Toluca / Metepec / Estado de México & Ciudad de México, México.
              </p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
