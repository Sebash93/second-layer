import { type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const inlineListVariants = cva(
  'flex flex-wrap items-center list-none p-0 m-0 font-body text-[15px] font-medium text-text-primary',
  {
    variants: {
      gap: {
        sm: 'gap-sm',
        md: 'gap-md',
        lg: 'gap-lg',
        xl: 'gap-xl',
      },
    },
    defaultVariants: {
      gap: 'xl',
    },
  },
);

type InlineListGap = NonNullable<VariantProps<typeof inlineListVariants>['gap']>;

interface InlineListProps {
  children: ReactNode;
  gap?: InlineListGap;
  className?: string;
}

export function InlineList({
  children,
  gap = 'xl',
  className,
}: InlineListProps): React.JSX.Element {
  return (
    <ul className={cn(inlineListVariants({ gap }), className)}>
      {children}
    </ul>
  );
}
