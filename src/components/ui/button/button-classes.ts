export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'default' | 'lg';

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-sm font-body cursor-pointer focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-accent-tint-12 disabled:opacity-50 disabled:pointer-events-none';

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'text-white font-semibold shadow-[0_2px_16px_rgba(255,107,53,0.25)] hover:-translate-y-0.5 hover:shadow-glow-strong hover:[background-image:var(--gradient-primary-hover)] active:translate-y-0 transition-all duration-300 ease-[var(--ease-out)]',
  secondary:
    'bg-bg-primary text-text-primary font-semibold border border-border-default hover:border-accent-start hover:text-accent-start transition-all duration-[250ms] ease-[var(--ease-out)]',
  ghost:
    'bg-transparent text-text-secondary font-medium hover:text-text-primary transition-colors duration-[250ms] ease-[ease]',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-md py-sm text-[13px] min-h-8',
  default: 'px-[32px] py-[14px] text-[15px] min-h-10',
  lg: 'px-[40px] py-md text-[16px] min-h-12',
};

const ghostSizeClasses: Record<ButtonSize, string> = {
  sm: 'px-[4px] py-[8px] text-[13px] min-h-8',
  default: 'px-[4px] py-[10px] text-[14px] min-h-10',
  lg: 'px-[4px] py-[12px] text-[16px] min-h-12',
};

export function getButtonClasses(
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'default',
): string {
  const sizes = variant === 'ghost' ? ghostSizeClasses : sizeClasses;
  return `${baseClasses} ${variantClasses[variant]} ${sizes[size]}`;
}
