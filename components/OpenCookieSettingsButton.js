'use client';

import { Settings2 } from 'lucide-react';

export default function OpenCookieSettingsButton({ className = "" }) {
  const handleClick = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('trebol:open-cookie-settings'));
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1a1c1a] hover:bg-[#5C9E43] text-white text-xs font-bold transition-all shadow-md cursor-pointer ${className}`}
    >
      <Settings2 size={14} />
      <span>Abrir Centro de Preferencias de Cookies</span>
    </button>
  );
}
