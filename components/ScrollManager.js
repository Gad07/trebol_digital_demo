'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ScrollManager() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Disable automatic browser scroll restoration to prevent landing mid-page
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const hash = window.location.hash;

    // Ensure header is visible on page load/route change
    const resetHeader = () => {
      const header = document.querySelector('header');
      if (header) {
        header.style.removeProperty('transform');
        header.style.removeProperty('opacity');
        header.style.removeProperty('pointer-events');
        header.style.setProperty('transform', 'translateY(0)', 'important');
        header.style.setProperty('opacity', '1', 'important');
        header.style.setProperty('pointer-events', 'auto', 'important');
      }
    };

    resetHeader();

    if (!hash) {
      // Immediate scroll to top (Hero section)
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      // Extra safety check in next tick for components that take a frame to mount
      const t1 = setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        resetHeader();
        if (typeof ScrollTrigger !== 'undefined') {
          ScrollTrigger.refresh();
        }
      }, 50);

      const t2 = setTimeout(() => {
        if (typeof ScrollTrigger !== 'undefined') {
          ScrollTrigger.refresh();
        }
      }, 200);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    } else {
      // If there is an anchor hash (e.g., #contacto), scroll to it smoothly
      const targetId = hash.replace('#', '');
      const timer = setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [pathname, searchParams]);

  return null;
}
