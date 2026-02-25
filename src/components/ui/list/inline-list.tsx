import { type ReactNode } from 'react';

type InlineListGap = 'sm' | 'md' | 'lg' | 'xl';

interface InlineListProps {
  children: ReactNode;
  gap?: InlineListGap;
  className?: string;
}

const gapClasses: Record<InlineListGap, string> = {
  sm: 'gap-sm',
  md: 'gap-md',
  lg: 'gap-lg',
  xl: 'gap-xl',
};

export function InlineList({
  children,
  gap = 'xl',
  className = '',
}: InlineListProps): React.JSX.Element {
  return (
    <ul
      className={`flex flex-wrap items-center list-none p-0 m-0 font-body text-[15px] font-medium text-text-primary ${gapClasses[gap]} ${className}`.trim()}
    >
      {children}
    </ul>
  );
}
