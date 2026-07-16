type IconProps = { className?: string };

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3.5 9.75h3v10.75h-3V9.75Zm6 0h2.88v1.47h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v6.24h-3v-5.53c0-1.32-.02-3.02-1.84-3.02-1.85 0-2.13 1.44-2.13 2.93v5.62h-3V9.75Z" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.5 21v-7.5H16l.5-3.2h-3V8.2c0-.93.26-1.56 1.6-1.56H16.6V3.8c-.28-.04-1.23-.12-2.34-.12-2.32 0-3.9 1.42-3.9 4.02v2.6H8v3.2h2.36V21h3.14Z" />
    </svg>
  );
}

export function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4 3.5h4.2l4 5.55 4.66-5.55h2.4l-6 7.13 6.44 8.87h-4.2l-4.36-6-5.06 6H3.28l6.4-7.6L4 3.5Zm2.9 1.7 10.9 15.1h1.5L8.4 5.2H6.9Z" />
    </svg>
  );
}
