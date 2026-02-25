import { render, screen } from '@testing-library/react';

import { SocialLink } from './social-link';

const testIcon = (
  <svg data-testid="test-icon" viewBox="0 0 24 24">
    <path d="M12 0L24 24H0z" />
  </svg>
);

describe('SocialLink', () => {
  it('renders as an anchor element', () => {
    render(<SocialLink href="https://example.com" label="Example" icon={testIcon} />);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('has the correct href attribute', () => {
    render(<SocialLink href="https://github.com" label="GitHub" icon={testIcon} />);
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://github.com');
  });

  it('has the correct aria-label', () => {
    render(<SocialLink href="https://github.com" label="GitHub" icon={testIcon} />);
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument();
  });

  it('opens in a new tab with noopener noreferrer', () => {
    render(<SocialLink href="https://github.com" label="GitHub" icon={testIcon} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders the icon children', () => {
    render(<SocialLink href="https://github.com" label="GitHub" icon={testIcon} />);
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<SocialLink href="https://github.com" label="GitHub" icon={testIcon} className="custom-class" />);
    expect(screen.getByRole('link')).toHaveClass('custom-class');
  });
});
