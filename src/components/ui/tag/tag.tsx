import { type ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface TagProps {
  children: ReactNode;
  className?: string;
}

const tagClasses =
  'inline-flex items-center font-body bg-accent-tint-5 text-accent-start text-[12px] font-semibold border border-accent-tint-12 px-[14px] py-[6px] rounded-full transition-colors duration-[250ms] hover:bg-accent-tint-15';

export function Tag({ children, className }: TagProps): React.JSX.Element {
  return <span className={cn(tagClasses, className)}>{children}</span>;
}
