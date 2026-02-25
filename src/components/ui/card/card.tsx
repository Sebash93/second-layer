import { type ComponentPropsWithRef, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const cardVariants = cva(
  'transition-all duration-[400ms] ease-[var(--ease-out)]',
  {
    variants: {
      variant: {
        default:
          'rounded-md border border-border-default bg-bg-primary p-lg hover:-translate-y-1 hover:border-transparent hover:shadow-md',
        accent:
          'group relative overflow-hidden rounded-md border border-border-default bg-bg-primary p-lg hover:-translate-y-1 hover:border-transparent hover:shadow-md',
        featured:
          'rounded-xl border border-accent-tint-12 bg-accent-tint-5 p-3xl',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

type CardVariant = NonNullable<VariantProps<typeof cardVariants>['variant']>;

interface CardProps extends ComponentPropsWithRef<'div'> {
  variant?: CardVariant;
  children: ReactNode;
}

export function Card({
  variant = 'default',
  className,
  children,
  ...rest
}: CardProps): React.JSX.Element {
  return (
    <div className={cn(cardVariants({ variant }), className)} {...rest}>
      {variant === 'accent' && (
        <span
          className="absolute top-0 right-0 left-0 h-[3px] origin-left scale-x-0 transition-transform duration-[400ms] ease-[var(--ease-out)] group-hover:scale-x-100"
          style={{ backgroundImage: 'var(--gradient-primary)' }}
          aria-hidden="true"
        />
      )}
      {children}
    </div>
  );
}
