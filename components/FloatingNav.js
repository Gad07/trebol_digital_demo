'use client';
import { motion } from 'framer-motion';

export default function FloatingNav({ current }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-2 p-2 bg-carbon/80 backdrop-blur-2xl border border-white/20 rounded-full shadow-2xl"
    >
      <a 
        href="/" 
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${current === 'v1' ? 'bg-white text-carbon' : 'text-white hover:bg-white/10'}`}
      >
        V1 Editorial
      </a>
      <a 
        href="/v2" 
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${current === 'v2' ? 'bg-white text-carbon' : 'text-white hover:bg-white/10'}`}
      >
        V2 Cinematic
      </a>
      <a 
        href="/v3" 
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${current === 'v3' ? 'bg-white text-carbon' : 'text-white hover:bg-white/10'}`}
      >
        V3 Bento
      </a>
    </motion.div>
  );
}
