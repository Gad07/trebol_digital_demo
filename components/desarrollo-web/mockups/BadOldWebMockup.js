'use client';
import { AlertTriangle, Download, RefreshCw, MessageSquare, AlertOctagon, ShoppingBag, Lock, CreditCard } from 'lucide-react';

export function BadOldWebMockup({ type = 'corporativa', styleName = 'Página Básica' }) {
  return (
    <div className="w-full bg-[#e3e8f0] text-[#111] font-sans select-none overflow-x-hidden min-h-full flex flex-col justify-between border-2 border-red-400 relative">
      {/* Obsolete Header Banner */}
      <div className="bg-[#002266] text-white p-2 text-[11px] font-serif flex items-center justify-between border-b-2 border-yellow-400">
        <div className="flex items-center gap-2">
          <span className="bg-red-600 text-white font-bold px-1.5 py-0.5 text-[9px] animate-pulse">
            ⚠️ SITIO NO SEGURO (HTTP://)
          </span>
          <span className="truncate">HostingEconómico-Server42.net/site_wp_v3_{type}/index.php</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-yellow-300 text-[10px]">
          <span>RAM USADA: 94%</span>
          <span>•</span>
          <span className="text-red-300 font-bold">5.8 SECONDS LOAD</span>
        </div>
      </div>

      {/* Scrolling Marquee Tape */}
      <div className="bg-[#ffcc00] text-black font-mono font-bold text-[11px] py-1 border-b border-black overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-pulse">
          🚨 ¡BIENVENIDOS A NUESTRO PORTAL WEB OFICIAL (MEJOR VISTO EN INTERNET EXPLORER 8 O FIREFOX 3.6 A 1024x768)! AVISO DE MANTENIMIENTO PROGRAMADO... 🚨
        </div>
      </div>

      {/* Clunky Header & Logo */}
      <header className="bg-gradient-to-r from-[#003399] via-[#0055ff] to-[#ff6600] p-4 text-white shadow-md">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl font-black italic tracking-wide font-serif drop-shadow-[2px_2px_0px_#000]">
              {type === 'ecommerce' ? 'MI_TIENDA_VIRTUAL_2016.COM' : type === 'landing' ? 'LANDING_PROMO_EXPRESS.NET' : 'MI_EMPRESA_SERVICIOS_2014.COM'}
            </h1>
            <p className="text-[10px] text-yellow-200 font-mono">
              {type === 'ecommerce' ? 'Catálogo digital con pago mediante depósito bancario y OXXO' : type === 'landing' ? '¡Última oportunidad! Registra tus datos para recibir informes en PDF' : '"Soluciones integrales de calidad con atención telefónica de Lunes a Viernes"'}
            </p>
          </div>

          <div className="bg-white/20 p-2 rounded text-[10px] font-mono text-center border border-white/40">
            <div>CONTADOR DE VISITAS:</div>
            <div className="bg-black text-green-400 font-bold tracking-widest px-2 py-0.5 mt-0.5 text-xs">
              00048192
            </div>
          </div>
        </div>
      </header>

      {/* Ugly Nav Bar with Table Look */}
      <nav className="bg-[#333333] text-white text-[11px] font-bold border-y-2 border-yellow-500 overflow-x-auto">
        <div className="flex justify-around py-2 min-w-[500px]">
          <span className="bg-[#ff6600] px-3 py-1 text-white border border-white cursor-pointer">▶ INICIO</span>
          <span className="hover:bg-gray-700 px-3 py-1 cursor-pointer">QUIÉNES SOMOS</span>
          <span className="hover:bg-gray-700 px-3 py-1 cursor-pointer">{type === 'ecommerce' ? 'CARRITO (0)' : 'SERVICIOS (PDF)'}</span>
          <span className="hover:bg-gray-700 px-3 py-1 cursor-pointer">GALERÍA FOTOS</span>
          <span className="hover:bg-gray-700 px-3 py-1 cursor-pointer">UBICACIÓN MAPA</span>
          <span className="hover:bg-gray-700 px-3 py-1 cursor-pointer">CONTACTO</span>
        </div>
      </nav>

      {/* Body Content according to Type */}
      <div className="p-4 sm:p-6 space-y-4 max-w-4xl mx-auto w-full relative">
        
        {/* Warning Banner */}
        <div className="bg-red-100 border-2 border-red-500 p-3 rounded text-red-800 text-xs font-mono space-y-1 shadow">
          <div className="flex items-center gap-2 font-bold text-red-900">
            <AlertTriangle size={16} />
            <span>ADVERTENCIA DE RENDIMIENTO Y CONVERSIÓN</span>
          </div>
          <p className="text-[11px] leading-tight">
            {type === 'ecommerce' && '• ⚠️ Error 504: Pasarela de pagos sin SSL. Carritos abandonados: 89%.'}
            {type === 'landing' && '• ⚠️ 82 Plugins sobrecargados. Tasa de conversión: 1.1% (pérdida masiva de leads).'}
            {type === 'corporativa' && '• 42 Plugins desactualizados. Carga lenta (5.8s). Adobe Flash Player bloqueado.'}
          </p>
        </div>

        {/* Dynamic Content Layout */}
        {type === 'corporativa' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 bg-white p-4 border border-gray-400 shadow space-y-3 font-serif">
              <div className="bg-[#003399] text-white p-1.5 font-bold text-xs uppercase flex justify-between">
                <span>NUESTROS SERVICIOS CORPORATIVOS</span>
                <span className="text-yellow-300">NUEVO!</span>
              </div>
              <h2 className="text-lg font-bold text-[#003399]">
                Bienvenido a nuestro portal corporativo en internet
              </h2>
              <p className="text-xs text-gray-600 leading-relaxed font-sans">
                Somos una empresa comprometida con la excelencia. Para consultar nuestros paquetes y lista de precios, descargue nuestro catálogo ejecutivo en formato PDF o comuníquese con nuestro conmutador.
              </p>
              <div className="w-full h-32 bg-gray-200 border-2 border-dashed border-gray-400 rounded flex flex-col items-center justify-center p-3 text-center space-y-1">
                <RefreshCw size={24} className="text-gray-500 animate-spin" />
                <span className="text-[11px] text-gray-600 font-mono font-bold">Cargando Slider de Imágenes Flash (45MB)...</span>
                <span className="text-[9px] text-red-500">Error: Adobe Flash Player ya no es compatible.</span>
              </div>
              <div className="pt-1">
                <button className="bg-gradient-to-b from-[#ff9900] to-[#cc6600] text-white font-bold text-xs px-4 py-2 border-2 border-black rounded shadow flex items-center gap-2">
                  <Download size={14} />
                  <span>[ DESCARGAR CATÁLOGO PDF (68 MB) ]</span>
                </button>
              </div>
            </div>

            <div className="bg-white p-3 border border-gray-400 space-y-2 text-xs">
              <div className="font-bold text-[#003399] border-b pb-1">SOLICITAR COTIZACIÓN</div>
              <div className="space-y-1.5 text-[10px]">
                <input type="text" placeholder="Nombre completo *" className="w-full p-1 border border-gray-400 text-xs" readOnly />
                <input type="text" placeholder="Correo electrónico *" className="w-full p-1 border border-gray-400 text-xs" readOnly />
                <input type="text" placeholder="Teléfono fijo con lada *" className="w-full p-1 border border-gray-400 text-xs" readOnly />
                <button className="w-full bg-[#003399] text-white font-bold py-1 text-xs border border-black shadow">
                  ENVIAR FORMULARIO
                </button>
              </div>
            </div>
          </div>
        )}

        {type === 'landing' && (
          <div className="bg-white p-6 border-2 border-gray-400 shadow-md space-y-4 font-sans">
            <div className="bg-yellow-400 text-black font-bold p-2 text-center text-xs uppercase border border-black">
              ⚡ OFERTA ESPECIAL VÁLIDA SÓLO POR HOY — REGÍSTRATE AHORA
            </div>
            <h2 className="text-2xl font-black text-red-700 text-center font-serif">
              ¡Aumenta tus ventas con nuestros servicios tradicionales!
            </h2>
            <p className="text-xs text-gray-600 text-center max-w-lg mx-auto">
              Llena el siguiente formulario de 12 campos obligatorios para que un asesor te marque por teléfono en un lapso de 48 a 72 horas hábiles.
            </p>
            <div className="bg-gray-100 p-4 border border-gray-300 rounded space-y-2 text-xs max-w-md mx-auto">
              <input type="text" placeholder="Nombre *" className="w-full p-1.5 border border-gray-400" readOnly />
              <input type="text" placeholder="Apellido Paterno y Materno *" className="w-full p-1.5 border border-gray-400" readOnly />
              <input type="email" placeholder="Correo Electrónico *" className="w-full p-1.5 border border-gray-400" readOnly />
              <input type="text" placeholder="RFC con Homoclave *" className="w-full p-1.5 border border-gray-400" readOnly />
              <input type="text" placeholder="Código Postal (CP) *" className="w-full p-1.5 border border-gray-400" readOnly />
              <button className="w-full bg-red-600 text-white font-bold py-2.5 text-xs rounded border border-black shadow">
                [ ENVIAR INFORMACIÓN Y ESPERAR LLAMADA ]
              </button>
            </div>
          </div>
        )}

        {type === 'ecommerce' && (
          <div className="bg-white p-6 border-2 border-gray-400 shadow-md space-y-4 font-sans">
            <div className="bg-red-600 text-white font-bold p-2 text-xs flex justify-between items-center">
              <span>🛒 CARRITO DE COMPRAS — TIENDA VIRTUAL v2.1</span>
              <span className="text-yellow-300">⚠️ Pasarela de pago sin encriptación SSL</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-300 p-3 rounded space-y-2 text-xs">
                <h3 className="font-bold text-gray-800">Producto Seleccionado</h3>
                <div className="bg-gray-100 h-24 rounded border flex items-center justify-center text-gray-400 font-mono text-[10px]">
                  [ Imagen del producto no disponible ]
                </div>
                <div className="flex justify-between font-bold text-sm">
                  <span>Subtotal:</span>
                  <span>$1,450.00 MXN</span>
                </div>
              </div>

              <div className="border border-gray-300 p-3 rounded space-y-2 text-xs bg-yellow-50">
                <h3 className="font-bold text-red-800 flex items-center gap-1">
                  <CreditCard size={14} /> Método de Pago Manual
                </h3>
                <p className="text-[10px] text-gray-600">
                  Realiza tu depósito en sucursal bancaria o tienda de conveniencia y envía tu comprobante escaneado por correo electrónico.
                </p>
                <div className="bg-white p-2 border border-gray-300 text-[10px] font-mono">
                  Banco: Bancomer <br />
                  Cuenta: 0192837465 <br />
                  CLABE: 012180001928374651
                </div>
                <button className="w-full bg-gray-800 text-white font-bold py-2 text-xs rounded shadow">
                  CONFIRMAR PEDIDO Y ENVIAR FICHA
                </button>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Footer */}
      <footer className="bg-[#111111] text-gray-400 p-3 text-[10px] font-mono text-center border-t-2 border-red-500 space-y-1">
        <div>Copyright © 2014-2022 MiEmpresa. Todos los derechos reservados. Diseñado con WordPress 4.2</div>
        <div className="text-red-400 font-bold">Puntaje Google Lighthouse: 38/100 • Tasa de Conversión: 1.1%</div>
      </footer>
    </div>
  );
}
