'use client';

import { cn } from '@/lib/utils';

type WordRevealElement = 'h1' | 'h2' | 'p';

interface WordRevealProps {
  text: string;
  gradientWords?: string[];
  baseDelay?: number;
  staggerDelay?: number;
  as?: WordRevealElement;
  isVisible?: boolean;
  className?: string;
}

function stripPunctuation(word: string): string {
  return word.replaceAll(/[^a-zA-Z0-9]/g, '');
}

export function WordReveal({
  text,
  gradientWords = [],
  baseDelay = 0.3,
  staggerDelay = 0.08,
  as: Tag = 'h1',
  isVisible = true,
  className,
}: WordRevealProps): React.JSX.Element {
  const words = text.split(/\s+/);
  const gradientSet = new Set(gradientWords.map((w) => w.toLowerCase()));

  return (
    <Tag className={cn(className)} style={{ perspective: '600px' }}>
      {words.map((word, i) => {
        const isGradient = gradientSet.has(stripPunctuation(word).toLowerCase());
        const delay = baseDelay + i * staggerDelay;

        return (
          <span key={`${word}-${String(i)}`}>
            <span
              className={cn(isGradient && 'gradient-text')}
              style={{
                display: 'inline-block',
                opacity: isVisible ? undefined : 0,
                animation: isVisible
                  ? `word-reveal 0.6s ${delay}s both var(--ease-out-expo)`
                  : 'none',
              }}
            >
              {word}
            </span>
            {i < words.length - 1 && <span> </span>}
          </span>
        );
      })}
    </Tag>
  );
}
