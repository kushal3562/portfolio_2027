type IconName =
  | 'github'
  | 'linkedin'
  | 'mail'
  | 'phone'
  | 'download'
  | 'arrow'
  | 'menu'
  | 'close'
  | 'pin'
  | 'check'
  | 'alert'
  | 'spark'
  | 'folder'
  | 'flask'
  | 'clock'
  | 'trophy'
  | 'activity'
  | 'book'
  | 'chef'
  | 'graduation'
  | 'send'
  | 'up'
  | 'code';

const strokePaths: Record<Exclude<IconName, 'github' | 'linkedin'>, string> = {
  mail: 'M4 6h16v12H4z M4 7l8 6 8-6',
  phone:
    'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z',
  download: 'M12 4v11 M7 10l5 5 5-5 M5 20h14',
  arrow: 'M5 12h14 M13 6l6 6-6 6',
  menu: 'M4 7h16 M4 12h16 M4 17h16',
  close: 'M6 6l12 12 M18 6L6 18',
  pin: 'M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
  check: 'M5 12.5l4.5 4.5L19 7.5',
  alert: 'M12 8v5 M12 16.5v.01 M10.3 3.9L2.4 17.5A2 2 0 0 0 4.1 20.5h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z',
  spark: 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z',
  folder: 'M3 6h6l2 2h10v11H3z',
  flask: 'M9 3h6 M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3',
  clock: 'M12 7v5l3 2 M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z',
  trophy: 'M8 4h8v5a4 4 0 0 1-8 0z M8 6H5a3 3 0 0 0 3 4 M16 6h3a3 3 0 0 1-3 4 M12 13v4 M8 20h8 M9 17h6',
  activity: 'M4 20l9-9 M13 4l7 7-3 3-7-7z',
  book: 'M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z M4 5v16',
  chef: 'M7 14a4 4 0 0 1 0-7 5 5 0 0 1 10 0 4 4 0 0 1 0 7 M7 14v5h10v-5 M9 19v2 M15 19v2',
  graduation: 'M2 9l10-5 10 5-10 5z M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5',
  send: 'M3 11l18-8-8 18-2-8z',
  up: 'M12 19V5 M6 11l6-6 6 6',
  code: 'M8 8l-4 4 4 4 M16 8l4 4-4 4 M14 5l-4 14',
};

const filledPaths: Record<'github' | 'linkedin', string> = {
  github:
    'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  linkedin:
    'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
};

interface IconProps {
  name: IconName;
  className?: string;
}

export function Icon({ name, className = 'h-5 w-5' }: IconProps) {
  if (name === 'github' || name === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
        <path d={filledPaths[name]} />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d={strokePaths[name]} />
    </svg>
  );
}
