import { useState } from 'react';
import { profile } from '@/data/content';

export function Portrait({ className = '' }: { className?: string }) {
  const [missing, setMissing] = useState(false);

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
            src={profile.photoUrl}
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
