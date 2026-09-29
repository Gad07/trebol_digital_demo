'use client';

import { useState } from 'react';
import { Play, Video } from 'lucide-react';

/**
 * Interactive video card for blog articles. Extracted into a client component
 * so the rest of the article template can be rendered on the server.
 */
export default function BlogVideoPlayer({ imagen, titulo }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative aspect-video w-full rounded-[2.5rem] overflow-hidden border border-white/60 shadow-2xl bg-carbon mb-14 group/video">
      {isPlaying ? (
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          title={titulo}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
          onClick={() => setIsPlaying(true)}
        >
          <img
            src={imagen}
            alt={titulo}
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/video:scale-102 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />

          <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-2xl group-hover/video:scale-110 group-hover/video:bg-trebol group-hover/video:border-trebol/40 transition-all duration-500 z-10 relative">
            <div className="absolute inset-0 rounded-full bg-trebol/20 blur-[15px] scale-110 opacity-0 group-hover/video:opacity-100 transition-opacity duration-500" />
            <Play size={36} className="text-white fill-white translate-x-1" />
          </div>

          <div className="absolute bottom-8 left-8 text-left z-10">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-trebol bg-white/90 backdrop-blur-sm border border-white px-3 py-1 rounded-full mb-3">
              <Video size={10} /> Video Exclusivo
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-black text-white leading-tight drop-shadow-md">
              Ver explicación en video
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}
