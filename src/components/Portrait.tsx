
import { useState } from 'react';
import { profile } from '@/data/content';

export function Portrait({ className = '' }: { className?: string }) {
  const [missing, setMissing] = useState(false);

  const imageUrl =
    'https://i.ibb.co/pjpbNtm3/Whats-App-Image-2025-05-22-at-23-51-32-d016c403.jpg';

  return (
    <div className={`relative ${className}`}>
      <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary-500/40 to-accent-500/30 opacity-60 blur-2xl" />

      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-ink-800 shadow-2xl shadow-black/50">
        {missing ? (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary-700 to-accent-600 font-display text-6xl font-bold text-white">
            KA
          </div>
        ) : (
          <img
            src={imageUrl}
            alt={`Portrait of ${profile.name}`}
            loading="lazy"
            onError={() => setMissing(true)}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        )}
      </div>
    </div>
  );
}
