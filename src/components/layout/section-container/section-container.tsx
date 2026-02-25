import type { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const sectionContainerVariants = cva('', {
  variants: {
    variant: {
      main: 'container-main',
      narrow: 'container-narrow',
    },
    fullHeight: {
      true: 'flex min-h-svh flex-col justify-center py-3xl',
      false: 'py-4xl',
    },
  },
  defaultVariants: {
    variant: 'main',
    fullHeight: true,
  },
});

type SectionContainerVariant = NonNullable<VariantProps<typeof sectionContainerVariants>['variant']>;

interface SectionContainerProps {
  children: ReactNode;
  variant?: SectionContainerVariant;
  fullHeight?: boolean;
  id?: string;
  className?: string;
  as?: 'section' | 'div' | 'footer';
}

export function SectionContainer({
  children,
  variant = 'main',
  fullHeight = true,
  id,
  className,
  as: Element = 'section',
}: SectionContainerProps): React.JSX.Element {
  return (
    <Element id={id} className={cn(sectionContainerVariants({ variant, fullHeight }), className)}>
      {children}
    </Element>
  );
}
