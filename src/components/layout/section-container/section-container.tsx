import type { ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  variant?: 'main' | 'narrow';
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
  className = '',
  as: Element = 'section',
}: SectionContainerProps): React.JSX.Element {
  const containerClass = variant === 'narrow' ? 'container-narrow' : 'container-main';
  const heightClass = fullHeight ? 'min-h-svh flex flex-col justify-center py-3xl' : 'py-4xl';

  return (
    <Element id={id} className={`${containerClass} ${heightClass} ${className}`.trim()}>
      {children}
    </Element>
  );
}
