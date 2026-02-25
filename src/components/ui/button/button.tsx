import { type ComponentPropsWithRef, type ReactNode } from 'react';

import { type ButtonSize, type ButtonVariant, getButtonClasses } from './button-classes';

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  showArrow?: boolean;
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'default',
  showArrow = false,
  className = '',
  style,
  children,
  ...rest
}: ButtonProps): React.JSX.Element {
  const classes = `${getButtonClasses(variant, size)} ${showArrow ? 'group' : ''} ${className}`.trim();

  const buttonStyle =
    variant === 'primary'
      ? { backgroundImage: 'var(--gradient-primary)', ...style }
      : style;

  return (
    <button className={classes} style={buttonStyle} {...rest}>
      {children}
      {showArrow && (
        <span className="transition-transform duration-[250ms] ease-[var(--ease-out)] group-hover:translate-x-1">
          →
        </span>
      )}
    </button>
  );
}
