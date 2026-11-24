import type { ReactNode } from 'react';
import { Icon } from '@/components/Icon';
import { profile } from '@/data/content';

const linkBase =
  'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300';

export function ExternalLink({
  href,
  label,
  icon,
  variant = 'ghost',
}: {
  href: string;
  label: string;
  icon?: ReactNode;
  variant?: 'ghost' | 'primary';
}) {
  if (!href) {
    return (
      <span
        title="Link coming soon"
        className={`${linkBase} cursor-default border border-white/10 text-slate-500`}
      >
        {icon}
        {label}
      </span>
    );
  }
  const styles =
    variant === 'primary'
      ? 'btn-primary'
      : 'border border-white/15 bg-white/5 text-slate-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 hover:text-white';
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${linkBase} ${styles}`}
    >
      {icon}
      {label}
    </a>
  );
}

export function SocialLinks() {
  const items = [
    { label: 'GitHub', href: profile.github, icon: 'github' as const },
    { label: 'LinkedIn', href: profile.linkedin, icon: 'linkedin' as const },
  ];
  return (
    <div className="flex items-center gap-3">
      {items.map((item) =>
        item.href ? (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-500/50 hover:text-white"
          >
            <Icon name={item.icon} className="h-5 w-5" />
          </a>
        ) : (
          <span
            key={item.label}
            aria-label={`${item.label} link coming soon`}
            title={`${item.label} link coming soon`}
            className="flex h-11 w-11 cursor-default items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-slate-600"
          >
            <Icon name={item.icon} className="h-5 w-5" />
          </span>
        )
      )}
    </div>
  );
}
