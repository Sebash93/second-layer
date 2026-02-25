import { type ComponentPropsWithRef, type ReactNode } from 'react';

type CardVariant = 'default' | 'accent' | 'featured';

interface CardProps extends ComponentPropsWithRef<'div'> {
  variant?: CardVariant;
  children: ReactNode;
}

const baseClasses =
  'transition-all duration-[400ms] ease-[var(--ease-out)]';

const variantClasses: Record<CardVariant, string> = {
  default:
    'bg-bg-primary border border-border-default rounded-md p-lg hover:-translate-y-1 hover:shadow-md hover:border-transparent',
  accent:
    'bg-bg-primary border border-border-default rounded-md p-lg hover:-translate-y-1 hover:shadow-md hover:border-transparent group relative overflow-hidden',
  featured:
    'bg-accent-tint-5 border border-accent-tint-12 rounded-xl p-3xl',
};

export function Card({
  variant = 'default',
  className = '',
  children,
  ...rest
}: CardProps): React.JSX.Element {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  return (
    <div className={classes} {...rest}>
      {variant === 'accent' && (
        <span
          className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 origin-left transition-transform duration-[400ms] ease-[var(--ease-out)] group-hover:scale-x-100"
          style={{ backgroundImage: 'var(--gradient-primary)' }}
          aria-hidden="true"
        />
      )}
      {children}
    </div>
  );
}
