import { type ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface SocialLinkProps {
  href: string;
  label: string;
  icon: ReactNode;
  className?: string;
}

export function SocialLink({ href, label, icon, className }: SocialLinkProps): React.JSX.Element {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center justify-center',
        'h-[40px] w-[40px] rounded-full',
        'bg-bg-tertiary text-text-secondary',
        'transition-all duration-300 ease-[var(--ease-out)]',
        'hover:-translate-y-0.5 hover:[background-image:var(--gradient-primary)] hover:text-white hover:shadow-glow',
        'focus-visible:ring-[3px] focus-visible:ring-accent-tint-12 focus-visible:outline-none',
        '[&>svg]:h-[18px] [&>svg]:w-[18px]',
        className,
      )}
    >
      {icon}
    </a>
  );
}
