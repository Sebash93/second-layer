import type { ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  variant?: 'main' | 'narrow';
  id?: string;
  className?: string;
  as?: 'section' | 'div' | 'footer';
}

export function SectionContainer({
  children,
  variant = 'main',
  id,
  className = '',
  as: Element = 'section',
}: SectionContainerProps): React.JSX.Element {
  const containerClass = variant === 'narrow' ? 'container-narrow' : 'container-main';

  return (
    <Element id={id} className={`${containerClass} py-4xl ${className}`.trim()}>
      {children}
    </Element>
  );
}
