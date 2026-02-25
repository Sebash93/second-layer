'use client';

import { useState } from 'react';

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
        className={`fixed top-0 left-0 right-0 z-[100] h-[64px] flex items-center justify-between bg-white/85 backdrop-blur-[20px] border-b transition-[border-color] duration-[400ms] ease-[ease] ${scrolled ? 'border-border-default' : 'border-transparent'}`}
        style={{ paddingInline: 'var(--container-padding)' }}
      >
        <div className="hidden md:flex items-center gap-xl">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-body text-[14px] font-medium text-text-secondary no-underline py-[4px] transition-colors duration-[250ms] ease-[ease] hover:text-text-primary"
            >
              {link.label}
              <span
                className="absolute -bottom-[2px] left-0 right-0 h-[2px] rounded-[1px] scale-x-0 origin-left transition-transform duration-300 ease-[var(--ease-out)] group-hover:scale-x-100"
                style={{ backgroundImage: 'var(--gradient-primary)' }}
                aria-hidden
              />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          {showCta && (
            <LinkButton href={ctaHref} size="sm">
              {ctaLabel}
            </LinkButton>
          )}
        </div>

        <button
          type="button"
          className="flex md:hidden flex-col justify-center items-center gap-[5px] w-[40px] h-[40px]"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span className="block w-[20px] h-[2px] bg-text-primary rounded-full" />
          <span className="block w-[20px] h-[2px] bg-text-primary rounded-full" />
          <span className="block w-[20px] h-[2px] bg-text-primary rounded-full" />
        </button>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[200] bg-bg-primary flex flex-col items-center justify-center gap-xl">
          <button
            type="button"
            className="absolute top-md right-md w-[40px] h-[40px] flex items-center justify-center"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <span className="block w-[20px] h-[2px] bg-text-primary rounded-full rotate-45 absolute" />
            <span className="block w-[20px] h-[2px] bg-text-primary rounded-full -rotate-45 absolute" />
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
