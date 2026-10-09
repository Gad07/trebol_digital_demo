'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, X, Check, Settings2, BarChart3, Target, Lock } from 'lucide-react';

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  // Estados de toggles granulares
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [marketingEnabled, setMarketingEnabled] = useState(true);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('trebol_cookie_consent');
      if (!consent) {
        // Mostrar después de un breve delay para no interrumpir la primera impresión
        const timer = setTimeout(() => setShowBanner(true), 1500);
        return () => clearTimeout(timer);
      } else {
        // Cargar preferencias guardadas
        if (consent === 'essential_only') {
          setAnalyticsEnabled(false);
          setMarketingEnabled(false);
        } else if (consent === 'accepted') {
          setAnalyticsEnabled(true);
          setMarketingEnabled(true);
        } else {
          try {
            const custom = JSON.parse(consent);
            setAnalyticsEnabled(Boolean(custom.analytics));
            setMarketingEnabled(Boolean(custom.marketing));
          } catch (e) {}
        }
      }
    } catch (e) {
      // Ignorar errores de localStorage
    }

    // Listener para abrir el modal desde el footer o desde la política de privacidad
    const handleOpenSettings = () => {
      setShowSettingsModal(true);
      setShowBanner(false);
    };

    window.addEventListener('trebol:open-cookie-settings', handleOpenSettings);
    return () => window.removeEventListener('trebol:open-cookie-settings', handleOpenSettings);
  }, []);

  // Actualizar modo de consentimiento dinámicamente
  const applyConsent = (analytics, marketing) => {
    if (typeof window === 'undefined') return;

    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: analytics ? 'granted' : 'denied',
        ad_storage: marketing ? 'granted' : 'denied',
        ad_user_data: marketing ? 'granted' : 'denied',
        ad_personalization: marketing ? 'granted' : 'denied',
      });
    }

    if (typeof window.fbq === 'function') {
      window.fbq('consent', marketing ? 'grant' : 'revoke');
    }

    // Notificar a toda la app por si algún componente depende del consentimiento
    const consentPayload = {
      analytics,
      marketing,
      essential: true,
      timestamp: new Date().toISOString(),
    };
    window.dispatchEvent(new CustomEvent('trebol:cookie-consent-updated', { detail: consentPayload }));
  };

  const handleAcceptAll = () => {
    try {
      localStorage.setItem('trebol_cookie_consent', 'accepted');
    } catch (e) {}
    setAnalyticsEnabled(true);
    setMarketingEnabled(true);
    applyConsent(true, true);
    setShowBanner(false);
    setShowSettingsModal(false);
  };

  const handleDeclineAll = () => {
    try {
      localStorage.setItem('trebol_cookie_consent', 'essential_only');
    } catch (e) {}
    setAnalyticsEnabled(false);
    setMarketingEnabled(false);
    applyConsent(false, false);
    setShowBanner(false);
    setShowSettingsModal(false);
  };

  const handleSaveCustomPreferences = () => {
    try {
      localStorage.setItem(
        'trebol_cookie_consent',
        JSON.stringify({
          analytics: analyticsEnabled,
          marketing: marketingEnabled,
          essential: true,
        })
      );
    } catch (e) {}
    applyConsent(analyticsEnabled, marketingEnabled);
    setShowBanner(false);
    setShowSettingsModal(false);
  };

  return (
    <>
      {/* ═══ 1. BANNER FLOTANTE RÁPIDO ═══ */}
      {showBanner && !showSettingsModal && (
        <aside
          aria-label="Aviso de cookies"
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-500 font-sans"
        >
          <div className="bg-white/95 backdrop-blur-xl text-[#1a1c1a] p-5 rounded-3xl border border-neutral-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col gap-4 select-none">
            
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5 text-[#5C9E43]">
                <Cookie size={20} className="shrink-0" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1a1c1a]">
                  Privacidad & Cookies
                </span>
              </div>
              <button
                onClick={handleDeclineAll}
                aria-label="Cerrar aviso de cookies"
                className="text-neutral-400 hover:text-[#1a1c1a] transition-colors p-1 -mr-1 -mt-1 cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            <p className="text-xs text-neutral-600 font-light leading-relaxed">
              Utilizamos cookies esenciales, de analítica y de medición para optimizar tu experiencia conforme a nuestra{' '}
              <Link
                href="/politica-de-privacidad"
                className="text-[#5C9E43] font-semibold underline underline-offset-2 hover:text-[#1a1c1a] transition-colors"
              >
                Política de Privacidad
              </Link>.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <button
                onClick={handleAcceptAll}
                className="flex-1 py-2.5 px-4 rounded-full bg-[#5C9E43] hover:bg-[#4d8636] text-white text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
              >
                <Check size={14} />
                <span>Aceptar Todas</span>
              </button>

              <button
                onClick={handleDeclineAll}
                className="py-2.5 px-4 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs font-semibold transition-all duration-200 cursor-pointer border border-neutral-200"
              >
                Solo Esenciales
              </button>

              <button
                onClick={() => setShowSettingsModal(true)}
                className="py-2.5 px-3 rounded-full bg-neutral-50 hover:bg-neutral-150 text-neutral-600 text-xs font-semibold transition-all duration-200 cursor-pointer border border-neutral-200/80 flex items-center gap-1"
                title="Personalizar preferencias de cookies"
              >
                <Settings2 size={13} />
                <span>Configurar</span>
              </button>
            </div>

          </div>
        </aside>
      )}

      {/* ═══ 2. MODAL GRANULAR DE CONFIGURACIÓN DE PRIVACIDAD ═══ */}
      {showSettingsModal && (
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-300 font-sans"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
        >
          <div className="bg-white text-[#1a1c1a] rounded-[2rem] max-w-xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-neutral-200 overflow-hidden animate-in zoom-in-95 duration-300">
            
            {/* Encabezado del Modal */}
            <div className="p-6 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/50">
              <div>
                <h3 id="cookie-modal-title" className="text-lg font-extrabold text-[#1a1c1a]">
                  Centro de Preferencias de Privacidad
                </h3>
                <p className="text-xs text-neutral-500 font-light">
                  Gestiona tus preferencias de consentimiento conforme a la LFPDPPP.
                </p>
              </div>
              <button
                onClick={() => setShowSettingsModal(false)}
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-500 hover:text-neutral-900 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            {/* Lista de Categorías de Cookies */}
            <div className="p-6 overflow-y-auto space-y-4 divide-y divide-neutral-100 text-sm">
              
              {/* Categoría 1: Esenciales */}
              <div className="pt-2 first:pt-0 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-bold text-neutral-900">
                    <Lock size={16} className="text-[#5C9E43]" />
                    <span>Cookies Técnicas & Esenciales</span>
                  </div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#5C9E43] bg-[#5C9E43]/10 px-2.5 py-1 rounded-full">
                    Siempre Activas
                  </span>
                </div>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  Son indispensables para que el sitio funcione: permiten la navegación segura, el almacenamiento de tu decisión de privacidad y el funcionamiento de la memoria caché.
                </p>
              </div>

              {/* Categoría 2: Analíticas */}
              <div className="pt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-bold text-neutral-900">
                    <BarChart3 size={16} className="text-blue-600" />
                    <span>Cookies de Analítica y Rendimiento (GA4)</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={analyticsEnabled}
                      onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#5C9E43]"></div>
                  </label>
                </div>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  Nos ayudan a saber de forma 100% anónima qué páginas son más populares y cómo mejorar la velocidad de carga de nuestro contenido mediante Google Analytics 4.
                </p>
              </div>

              {/* Categoría 3: Marketing y Píxeles */}
              <div className="pt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-bold text-neutral-900">
                    <Target size={16} className="text-purple-600" />
                    <span>Píxeles de Conversión y Marketing B2B</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={marketingEnabled}
                      onChange={(e) => setMarketingEnabled(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#5C9E43]"></div>
                  </label>
                </div>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  Permiten medir la efectividad de anuncios en LinkedIn y Meta (Instagram/Facebook) cuando solicitas diagnósticos o cotizaciones comerciales.
                </p>
              </div>

            </div>

            {/* Barra de Acciones del Modal */}
            <div className="p-4 sm:p-6 border-t border-neutral-100 bg-neutral-50 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={handleDeclineAll}
                className="w-full sm:w-auto px-4 py-2.5 rounded-full text-xs font-semibold text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer text-center"
              >
                Rechazar Opcionales
              </button>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={handleSaveCustomPreferences}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
                >
                  Guardar Preferencias
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-full bg-[#5C9E43] hover:bg-[#4d8636] text-white text-xs font-bold transition-all shadow-md cursor-pointer"
                >
                  Aceptar Todas
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
