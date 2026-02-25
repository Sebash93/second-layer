import { type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center font-body text-[12px] font-semibold px-[14px] py-[5px] rounded-full',
  {
    variants: {
      variant: {
        primary: 'text-white',
        outline: 'bg-transparent text-accent-start border border-accent-tint-12',
        subtle: 'bg-accent-tint-8 text-accent-start',
      },
    },
    defaultVariants: {
      variant: 'subtle',
    },
  },
);

type BadgeVariant = NonNullable<VariantProps<typeof badgeVariants>['variant']>;

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}

export function Badge({
  variant = 'subtle',
  children,
  className,
}: BadgeProps): React.JSX.Element {
  const style = variant === 'primary' ? { backgroundImage: 'var(--gradient-primary)' } : undefined;

  return (
    <span className={cn(badgeVariants({ variant }), className)} style={style}>
      {children}
    </span>
  );
}
