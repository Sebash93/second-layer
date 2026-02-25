'use client';

import { useState, type ReactNode } from 'react';

import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/components/hooks/use-intersection-observer';

const defaultCredentials = [
  '15+ years building and shipping software',
  'Experience embedded in product and startup teams',
  'Working close to product, UX, and architecture',
  'Paying attention to decisions and their long-term effects',
];

const defaultClosingNote: ReactNode = (
  <>
    Most of the work happens{' '}
    <mark className="highlight-black">before code.</mark>
  </>
);

/**
 * Returns a scale factor based on distance from the focal item.
 * Focal item: 1.08, adjacent: 1.03, rest: 0.97 (slight shrink).
 */
function getItemScale(index: number, focalIndex: number | null): number {
  if (focalIndex === null) return 1;
  const distance = Math.abs(index - focalIndex);
  if (distance === 0) return 1.08;
  if (distance === 1) return 1.03;
  return 0.97;
}

function getItemOpacity(index: number, focalIndex: number | null): number {
  if (focalIndex === null) return 1;
  const distance = Math.abs(index - focalIndex);
  if (distance === 0) return 1;
  if (distance === 1) return 0.7;
  return 0.45;
}

interface CredibilitySnapshotProps {
  overline?: string;
  credentials?: string[];
  closingNote?: ReactNode;
  className?: string;
}

export function CredibilitySnapshot({
  overline = 'Experience',
  credentials = defaultCredentials,
  closingNote = defaultClosingNote,
  className,
}: CredibilitySnapshotProps): React.JSX.Element {
  const [sectionRef, isVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px',
  });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const focalIndex = hoveredIndex ?? activeIndex;

  return (
    <section
      id="credibility"
      ref={sectionRef}
      className={cn('container-narrow flex min-h-svh flex-col justify-center py-3xl', className)}
    >
      {/* Overline */}
      <p className={cn('text-display reveal text-text-primary', isVisible && 'visible')}>
        {overline}
      </p>

      {/* Credential lines */}
      <ul
        className="mt-xl list-none p-0"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {credentials.map((line, i) => {
          const isActive = activeIndex === i;
          const isFocal = focalIndex === i;
          const scale = getItemScale(i, focalIndex);
          const opacity = getItemOpacity(i, focalIndex);

          return (
            <li
              key={line}
              className={cn(
                'text-body-lg',
                'flex items-center gap-[10px]',
                'origin-left cursor-pointer py-sm',
                'border-b border-border-subtle last:border-b-0',
                'reveal',
                `reveal-delay-${Math.min(i + 1, 4)}`,
                isVisible && 'visible',
              )}
              style={{
                transform: `scale(${scale})`,
                opacity: focalIndex !== null ? opacity : undefined,
                paddingLeft: isFocal ? 8 : 0,
                color: isFocal
                  ? 'var(--color-accent-start)'
                  : 'var(--color-text-primary)',
                transition: 'transform 0.35s var(--ease-out), opacity 0.35s var(--ease-out), padding-left 0.35s var(--ease-out), color 0.2s ease-out',
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onClick={() => setActiveIndex(isActive ? null : i)}
            >
              <span
                className="shrink-0 rounded-full transition-all duration-200 ease-out"
                style={{
                  width: isFocal || isActive ? 8 : 6,
                  height: isFocal || isActive ? 8 : 6,
                  background: isFocal || isActive
                    ? 'var(--color-accent-start)'
                    : 'var(--color-border-default)',
                }}
                aria-hidden="true"
              />
              {line}
            </li>
          );
        })}
      </ul>

      {/* Closing note */}
      <p
        className={cn(
          'text-body-lg reveal reveal-delay-4 mt-2xl text-text-secondary',
          isVisible && 'visible',
        )}
      >
        {closingNote}
      </p>
    </section>
  );
}
