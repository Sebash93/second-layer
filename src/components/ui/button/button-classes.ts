import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-sm font-body cursor-pointer focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-accent-tint-12 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary:
          'text-white font-semibold shadow-[0_2px_16px_rgba(255,107,53,0.25)] hover:-translate-y-0.5 hover:shadow-glow-strong hover:[background-image:var(--gradient-primary-hover)] active:translate-y-0 transition-all duration-300 ease-[var(--ease-out)]',
        secondary:
          'bg-bg-primary text-text-primary font-semibold border border-border-default hover:border-accent-start hover:text-accent-start transition-all duration-[250ms] ease-[var(--ease-out)]',
        ghost:
          'bg-transparent text-text-secondary font-medium hover:text-text-primary transition-colors duration-[250ms] ease-[ease]',
      },
      size: {
        sm: 'px-md py-sm text-[13px] min-h-8',
        default: 'px-[32px] py-[14px] text-[15px] min-h-10',
        lg: 'px-[40px] py-md text-[16px] min-h-12',
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
