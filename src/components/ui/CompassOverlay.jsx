import React from 'react';
import { Compass } from 'lucide-react';

export default function CompassOverlay({ heading = 0 }) {
  return (
    <div className="pointer-events-none fixed top-20 right-4 z-20 md:right-6">
      <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-accent-neon/35 bg-dark-bg/75 shadow-[0_0_25px_rgba(0,255,136,0.14)] backdrop-blur-md">
        <div className="absolute inset-2 rounded-full border border-dark-border/80" />
        <div
          className="absolute inset-0 flex items-center justify-center transition-transform duration-100 ease-linear"
          style={{ transform: `rotate(${-heading}deg)` }}
        >
          <div className="absolute top-1 text-[10px] font-bold tracking-widest text-accent-neon">N</div>
          <div className="absolute right-2 text-[10px] font-bold tracking-widest text-text-muted">E</div>
          <div className="absolute bottom-1 text-[10px] font-bold tracking-widest text-text-muted">S</div>
          <div className="absolute left-2 text-[10px] font-bold tracking-widest text-text-muted">W</div>
          <div className="absolute h-16 w-px bg-gradient-to-b from-accent-neon via-accent-neon/70 to-transparent" />
          <div className="absolute h-px w-16 bg-dark-border/80" />
          <Compass className="relative h-8 w-8 text-accent-neon drop-shadow-[0_0_8px_rgba(0,255,136,0.5)]" />
        </div>
      </div>
    </div>
  );
}
