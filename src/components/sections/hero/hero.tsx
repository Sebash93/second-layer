'use client';

import type { ReactNode } from 'react';

import dynamic from 'next/dynamic';

import { cn } from '@/lib/utils';
import { LinkButton } from '@/components/ui/link-button/link-button';
import { useIntersectionObserver } from '@/components/hooks/use-intersection-observer';

import { HeroBlobFallback } from './hero-blob-fallback';
import { WordReveal } from './word-reveal';

const HeroBlobDynamic = dynamic(
  () => import('./hero-blob').then((mod) => ({ default: mod.HeroBlob })),
  { ssr: false, loading: () => <HeroBlobFallback /> },
);

const defaultBody = (
  <>
    <mark className="highlight">Fast to build</mark> and{' '}
    <mark className="highlight">safe to learn from</mark>. Creating with attention to
    product intent and architecture.
  </>
);

interface HeroProps {
  overline?: string;
  headline?: string;
  gradientWords?: string[];
  body?: ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  hint?: string;
  className?: string;
}

export function Hero({
  overline = 'Sebastian H \u00B7 Senior Product Engineer \u00B7 Fractal CTO',
  headline = 'Working with teams to ship MVPs. ',
  gradientWords = ['ship', 'MVPs', 'learn'],
  body = defaultBody,
  ctaLabel = 'Start a conversation',
  ctaHref = '#contact',
  hint = 'Press to explore what\u2019s underneath.',
  className,
}: HeroProps): React.JSX.Element {
  const [sectionRef, isVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px',
  });

  return (
    <section
      id="hero"
      ref={sectionRef}
      className={cn('relative flex min-h-svh items-center overflow-hidden', className)}
    >
      {/* Ambient blob — background layer */}
      <HeroBlobFallback />
      <HeroBlobDynamic />

      {/* Content — foreground */}
      <div className="container-main relative z-10 py-3xl">
        <div className="max-w-narrow">
          {/* Overline — role/title label */}
          <p
            className={cn('text-caption reveal text-text-primary', isVisible && 'visible')}
          >
            {overline}
          </p>

          {/* H1 — primary headline, dominant visual weight */}
          <WordReveal
            text={headline}
            gradientWords={gradientWords}
            isVisible={isVisible}
            className="text-hero mt-xl text-text-primary"
          />

          {/* Supporting body — clearly subordinate to headline */}
          <p
            className={cn(
              'text-heading reveal reveal-delay-1 mt-xl max-w-[50ch] text-text-primary',
              isVisible && 'visible',
            )}
          >
            {body}
          </p>

          {/* CTA — separated with more space to anchor the action */}
          <div
            className={cn('reveal reveal-delay-2 mt-2xl', isVisible && 'visible')}
          >
            <LinkButton variant="primary" size="lg" showArrow href={ctaHref}>
              {ctaLabel}
            </LinkButton>
          </div>

          {/* Hint — smallest, most subdued element */}
          {hint && (
            <p
              className={cn(
                'text-caption reveal reveal-delay-3 mt-lg tracking-wide text-text-disabled',
                isVisible && 'visible',
              )}
              style={{ textTransform: 'none', fontWeight: 400, letterSpacing: '0.02em' }}
            >
              {hint}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
