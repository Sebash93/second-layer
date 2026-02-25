import type { CSSProperties } from 'react';

type SeparatorVariant =
  | 'section'
  | 'section-strong'
  | 'section-primary'
  | 'content'
  | 'content-subtle'
  | 'accent-bar'
  | 'accent-bar-primary'
  | 'accent-dot'
  | 'accent-dot-primary'
  | 'accent-dot-lg'
  | 'deco-line';

interface SeparatorProps {
  variant?: SeparatorVariant;
  className?: string;
}

const variantConfig: Record<SeparatorVariant, { className: string; style?: CSSProperties }> = {
  section: {
    className: 'h-px w-full opacity-[0.18]',
    style: {
      background:
        'linear-gradient(90deg, transparent 0%, var(--color-secondary-start) 30%, var(--color-secondary-end) 70%, transparent 100%)',
    },
  },
  'section-strong': {
    className: 'h-[2px] w-full rounded-[1px] opacity-25',
    style: {
      background:
        'linear-gradient(90deg, transparent 0%, var(--color-secondary-start) 25%, var(--color-secondary-end) 75%, transparent 100%)',
    },
  },
  'section-primary': {
    className: 'h-[2px] w-full rounded-[1px] opacity-25',
    style: { backgroundImage: 'var(--gradient-primary)' },
  },
  content: {
    className: 'h-px w-full bg-border-default',
  },
  'content-subtle': {
    className: 'h-px w-full bg-border-subtle',
  },
  'accent-bar': {
    className: 'h-[3px] w-[48px] rounded-[2px]',
    style: { backgroundImage: 'var(--gradient-secondary)' },
  },
  'accent-bar-primary': {
    className: 'h-[3px] w-[48px] rounded-[2px]',
    style: { backgroundImage: 'var(--gradient-primary)' },
  },
  'accent-dot': {
    className: 'w-[6px] h-[6px] rounded-full shrink-0',
    style: { backgroundImage: 'var(--gradient-secondary)' },
  },
  'accent-dot-primary': {
    className: 'w-[6px] h-[6px] rounded-full shrink-0',
    style: { backgroundImage: 'var(--gradient-primary)' },
  },
  'accent-dot-lg': {
    className: 'w-[10px] h-[10px] rounded-full shrink-0',
    style: { backgroundImage: 'var(--gradient-secondary)' },
  },
  'deco-line': {
    className: 'h-px w-[32px] rounded-[1px] opacity-30',
    style: { backgroundImage: 'var(--gradient-secondary)' },
  },
};

export function Separator({
  variant = 'section',
  className = '',
}: SeparatorProps): React.JSX.Element {
  const config = variantConfig[variant];

  return (
    <div
      role="separator"
      className={`${config.className} ${className}`.trim()}
      style={config.style}
    />
  );
}
