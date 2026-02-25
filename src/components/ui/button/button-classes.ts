import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex cursor-pointer items-center justify-center gap-2 rounded-sm font-body focus-visible:ring-[3px] focus-visible:ring-accent-tint-12 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'font-semibold text-white shadow-[0_2px_16px_rgba(255,107,53,0.25)] transition-all duration-300 ease-[var(--ease-out)] hover:-translate-y-0.5 hover:[background-image:var(--gradient-primary-hover)] hover:shadow-glow-strong active:translate-y-0',
        secondary:
          'border border-border-default bg-bg-primary font-semibold text-text-primary transition-all duration-[250ms] ease-[var(--ease-out)] hover:border-accent-start hover:text-accent-start',
        ghost:
          'bg-transparent font-medium text-text-secondary transition-colors duration-[250ms] ease-[ease] hover:text-text-primary',
      },
      size: {
        sm: 'min-h-8 px-md py-sm text-[13px]',
        default: 'min-h-10 px-[32px] py-[14px] text-[15px]',
        lg: 'min-h-12 px-[40px] py-md text-[16px]',
      },
    },
    compoundVariants: [
      { variant: 'ghost', size: 'sm', class: 'px-[4px] py-[8px] text-[13px]' },
      { variant: 'ghost', size: 'default', class: 'px-[4px] py-[10px] text-[14px]' },
      { variant: 'ghost', size: 'lg', class: 'px-[4px] py-[12px] text-[16px]' },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

export type ButtonVariant = NonNullable<VariantProps<typeof buttonVariants>['variant']>;
export type ButtonSize = NonNullable<VariantProps<typeof buttonVariants>['size']>;
