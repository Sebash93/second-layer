'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';
import { useScrollPosition } from '@/components/hooks/use-scroll-position';
import { LinkButton } from '@/components/ui/link-button/link-button';

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  links: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
}

export function Navbar({ links, ctaLabel, ctaHref }: NavbarProps): React.JSX.Element {
  const scrollY = useScrollPosition();
  const scrolled = scrollY > 0;
  const [mobileOpen, setMobileOpen] = useState(false);

  const showCta = ctaLabel && ctaHref;

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 right-0 left-0 z-[100] flex h-[64px] items-center justify-between border-b bg-white/85 backdrop-blur-[20px] transition-[border-color] duration-[400ms] ease-[ease]',
          scrolled ? 'border-border-default' : 'border-transparent',
        )}
        style={{ paddingInline: 'var(--container-padding)' }}
      >
        <div className="hidden items-center gap-xl md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-[4px] font-body text-[14px] font-medium text-text-secondary no-underline transition-colors duration-[250ms] ease-[ease] hover:text-text-primary"
            >
              {link.label}
              <span
                className="absolute right-0 -bottom-[2px] left-0 h-[2px] origin-left scale-x-0 rounded-[1px] transition-transform duration-300 ease-[var(--ease-out)] group-hover:scale-x-100"
                style={{ backgroundImage: 'var(--gradient-primary)' }}
                aria-hidden
              />
            </a>
          ))}
        </div>

        <div className="hidden items-center md:flex">
          {showCta && (
            <LinkButton href={ctaHref} size="sm">
              {ctaLabel}
            </LinkButton>
          )}
        </div>

        <button
          type="button"
          className="flex h-[40px] w-[40px] flex-col items-center justify-center gap-[5px] md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span className="block h-[2px] w-[20px] rounded-full bg-text-primary" />
          <span className="block h-[2px] w-[20px] rounded-full bg-text-primary" />
          <span className="block h-[2px] w-[20px] rounded-full bg-text-primary" />
        </button>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-xl bg-bg-primary">
          <button
            type="button"
            className="absolute top-md right-md flex h-[40px] w-[40px] items-center justify-center"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <span className="absolute block h-[2px] w-[20px] rotate-45 rounded-full bg-text-primary" />
            <span className="absolute block h-[2px] w-[20px] -rotate-45 rounded-full bg-text-primary" />
          </button>

          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-body-lg text-text-primary no-underline"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}

          {showCta && (
            <LinkButton href={ctaHref} onClick={() => setMobileOpen(false)}>
              {ctaLabel}
            </LinkButton>
          )}
        </div>
      )}
    </>
  );
}
