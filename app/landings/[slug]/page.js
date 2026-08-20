'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import DynamicLandingRenderer from '../../../components/DynamicLandingRenderer';

export default function CustomLandingPage() {
  const pathname = usePathname();
  const [landingData, setLandingData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLanding() {
      try {
        let list = [];
        const saved = typeof window !== 'undefined' ? localStorage.getItem('trebol_landings_list_v1') : null;
        if (saved) {
          list = JSON.parse(saved);
        } else {
          const res = await fetch('/api/landings');
          if (res.ok) {
            list = await res.json();
          }
        }

        const currentPath = pathname ? pathname.trim().toLowerCase() : '';
        const found = list.find((l) => {
          if (!l || !l.slug) return false;
          const cleanSlug = l.slug.trim().toLowerCase();
          return cleanSlug === currentPath || currentPath.endsWith(cleanSlug) || cleanSlug.endsWith(currentPath);
        });

        if (found) {
          setLandingData(found);
        } else if (list.length > 0) {
          const lastPart = currentPath.split('/').filter(Boolean).pop();
          const partialMatch = list.find((l) => l.slug && l.slug.toLowerCase().includes(lastPart));
          setLandingData(partialMatch || list[0]);
        }
      } catch (e) {
        console.warn(e);
      } finally {
        setLoading(false);
      }
    }
    loadLanding();
  }, [pathname]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center font-sans">
        <div className="animate-pulse flex items-center gap-3">
          <div className="w-3 h-3 bg-trebol rounded-full"></div>
          <span className="text-sm font-mono text-white/60 uppercase tracking-widest">Cargando Landing...</span>
        </div>
      </div>
    );
  }

  return <DynamicLandingRenderer landing={landingData} />;
}
