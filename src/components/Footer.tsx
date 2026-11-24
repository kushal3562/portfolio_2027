import { Icon } from '@/components/Icon';
import { SocialLinks } from '@/components/Links';
import { profile } from '@/data/content';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'AI', href: '#ai' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-white">{profile.name}</p>
          <p className="mt-1 text-sm text-slate-500">{profile.roles}</p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <SocialLinks />
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-6 text-xs text-slate-500 sm:flex-row sm:px-8">
          <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <a
            href="#home"
            className="group inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            Back to top
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-primary-500/40">
              <Icon name="up" className="h-3.5 w-3.5" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
