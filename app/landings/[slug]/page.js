'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import DynamicLandingRenderer from '../../../components/DynamicLandingRenderer';

import DEFAULT_LANDINGS_LIST from '../../../data/landings_db.json';

export default function CustomLandingPage() {
  const pathname = usePathname();
  const [landingData, setLandingData] = useState(DEFAULT_LANDINGS_LIST[0]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('trebol_landings_list_v1');
      const list = saved ? JSON.parse(saved) : DEFAULT_LANDINGS_LIST;

      const currentPath = pathname ? pathname.trim().toLowerCase() : '';
      
      const found = list.find((l) => {
        if (!l || !l.slug) return false;
        const cleanSlug = l.slug.trim().toLowerCase();
        return cleanSlug === currentPath || currentPath.endsWith(cleanSlug) || cleanSlug.endsWith(currentPath);
      });

      if (found) {
        setLandingData(found);
      } else {
        // Asignar por coincidencia parcial o por defecto
        const lastPart = currentPath.split('/').filter(Boolean).pop();
        const partialMatch = list.find((l) => l.slug && l.slug.toLowerCase().includes(lastPart));
        setLandingData(partialMatch || list[0] || DEFAULT_LANDINGS_LIST[0]);
      }
    } catch (e) {
      console.warn(e);
      setLandingData(DEFAULT_LANDINGS_LIST[0]);
    }
  }, [pathname]);

  return <DynamicLandingRenderer landing={landingData} />;
}
