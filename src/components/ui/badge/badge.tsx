import { type ReactNode } from 'react';

type BadgeVariant = 'primary' | 'outline' | 'subtle';

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}

const baseClasses = 'inline-flex items-center font-body text-[12px] font-semibold px-[14px] py-[5px] rounded-full';

const variantClasses: Record<BadgeVariant, string> = {
  primary: 'text-white',
  outline: 'bg-transparent text-accent-start border border-accent-tint-12',
  subtle: 'bg-accent-tint-8 text-accent-start',
};

export function Badge({
  variant = 'subtle',
  children,
  className = '',
}: BadgeProps): React.JSX.Element {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  const style = variant === 'primary' ? { backgroundImage: 'var(--gradient-primary)' } : undefined;

  return (
    <span className={classes} style={style}>
      {children}
    </span>
  );
}
