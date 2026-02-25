import { type ComponentPropsWithRef, type ReactNode } from 'react';

import { cn } from '@/lib/utils';
import {
  type ButtonSize,
  type ButtonVariant,
  buttonVariants,
} from '@/components/ui/button/button-classes';

interface LinkButtonProps extends ComponentPropsWithRef<'a'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  showArrow?: boolean;
  children: ReactNode;
}

function isExternalHref(href: string | undefined): boolean {
  return href?.startsWith('http') ?? false;
}

export function LinkButton({
  variant = 'primary',
  size = 'default',
  showArrow = false,
  className,
  style,
  href,
  children,
  ...rest
}: LinkButtonProps): React.JSX.Element {
  const linkStyle =
    variant === 'primary'
      ? { backgroundImage: 'var(--gradient-primary)', ...style }
      : style;

  const externalProps = isExternalHref(href)
    ? { target: '_blank' as const, rel: 'noopener noreferrer' }
    : {};

  return (
    <a
      className={cn(buttonVariants({ variant, size }), showArrow && 'group', className)}
      style={linkStyle}
      href={href}
      {...externalProps}
      {...rest}
    >
      {children}
      {showArrow && (
        <span className="transition-transform duration-[250ms] ease-[var(--ease-out)] group-hover:translate-x-1">
          →
        </span>
      )}
    </a>
  );
}
