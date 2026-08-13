'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const CanalesScrollytelling = dynamic(() => import('./CanalesScrollytelling'), {
  ssr: false,
});

export default function LazyCanalesScrollytelling() {
  const [shouldLoad, setShouldLoad] = useState(false);
  const anchorRef = useRef(null);

  useEffect(() => {
    const node = anchorRef.current;
    if (!node || shouldLoad) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '700px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div ref={anchorRef}>
      {shouldLoad ? (
        <CanalesScrollytelling />
      ) : (
        <section
          aria-hidden="true"
          className="relative h-screen min-h-[600px] w-full bg-[#24252a]"
        />
      )}
    </div>
  );
}
