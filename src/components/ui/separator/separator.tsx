import type { CSSProperties } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const separatorVariants = cva('', {
  variants: {
    variant: {
      section: 'h-px w-full opacity-[0.18]',
      'section-strong': 'h-[2px] w-full rounded-[1px] opacity-25',
      'section-primary': 'h-[2px] w-full rounded-[1px] opacity-25',
      content: 'h-px w-full bg-border-default',
      'content-subtle': 'h-px w-full bg-border-subtle',
      'accent-bar': 'h-[3px] w-[48px] rounded-[2px]',
      'accent-bar-primary': 'h-[3px] w-[48px] rounded-[2px]',
      'accent-dot': 'w-[6px] h-[6px] rounded-full shrink-0',
      'accent-dot-primary': 'w-[6px] h-[6px] rounded-full shrink-0',
      'accent-dot-lg': 'w-[10px] h-[10px] rounded-full shrink-0',
      'deco-line': 'h-px w-[32px] rounded-[1px] opacity-30',
    },
  },
  defaultVariants: {
    variant: 'section',
  },
});

type SeparatorVariant = NonNullable<VariantProps<typeof separatorVariants>['variant']>;

const variantStyles: Partial<Record<SeparatorVariant, CSSProperties>> = {
  section: {
    background:
      'linear-gradient(90deg, transparent 0%, var(--color-secondary-start) 30%, var(--color-secondary-end) 70%, transparent 100%)',
  },
  'section-strong': {
    background:
      'linear-gradient(90deg, transparent 0%, var(--color-secondary-start) 25%, var(--color-secondary-end) 75%, transparent 100%)',
  },
  'section-primary': { backgroundImage: 'var(--gradient-primary)' },
  'accent-bar': { backgroundImage: 'var(--gradient-secondary)' },
  'accent-bar-primary': { backgroundImage: 'var(--gradient-primary)' },
  'accent-dot': { backgroundImage: 'var(--gradient-secondary)' },
  'accent-dot-primary': { backgroundImage: 'var(--gradient-primary)' },
  'accent-dot-lg': { backgroundImage: 'var(--gradient-secondary)' },
  'deco-line': { backgroundImage: 'var(--gradient-secondary)' },
};

interface SeparatorProps {
  variant?: SeparatorVariant;
  className?: string;
}

export function Separator({
  variant = 'section',
  className,
}: SeparatorProps): React.JSX.Element {
  return (
    <div
      role="separator"
      className={cn(separatorVariants({ variant }), className)}
      style={variantStyles[variant]}
    />
  );
}
