import { SectionContainer } from '@/components/layout/section-container/section-container';

interface FooterProps {
  className?: string;
}

export function Footer({ className = '' }: FooterProps): React.JSX.Element {
  return (
    <SectionContainer as="footer" variant="narrow" className={className}>
      <p className="text-body-sm text-center text-text-secondary">
        Built with care. Left open to change.
      </p>
    </SectionContainer>
  );
}
