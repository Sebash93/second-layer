import { render, screen } from '@testing-library/react';

import { LinkButton } from './link-button';

describe('LinkButton', () => {
  it('renders as an anchor element', () => {
    render(<LinkButton href="/about">About</LinkButton>);
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
  });

  it('has correct href', () => {
    render(<LinkButton href="/pricing">Pricing</LinkButton>);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/pricing');
  });

  it('adds target and rel for external links', () => {
    render(<LinkButton href="https://example.com">External</LinkButton>);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('does not add target and rel for internal links', () => {
    render(<LinkButton href="/about">Internal</LinkButton>);
    const link = screen.getByRole('link');
    expect(link).not.toHaveAttribute('target');
    expect(link).not.toHaveAttribute('rel');
  });

  it('renders arrow when showArrow is set', () => {
    render(
      <LinkButton href="/test" showArrow>
        With Arrow
      </LinkButton>,
    );
    expect(screen.getByText('→')).toBeInTheDocument();
  });

  it('applies primary variant by default', () => {
    render(<LinkButton href="/test">Link</LinkButton>);
    expect(screen.getByRole('link')).toHaveClass('text-white');
  });

  it('applies secondary variant classes', () => {
    render(
      <LinkButton href="/test" variant="secondary">
        Secondary
      </LinkButton>,
    );
    const link = screen.getByRole('link');
    expect(link).toHaveClass('bg-bg-primary');
    expect(link).toHaveClass('border-border-default');
  });

  it('applies ghost variant classes', () => {
    render(
      <LinkButton href="/test" variant="ghost">
        Ghost
      </LinkButton>,
    );
    const link = screen.getByRole('link');
    expect(link).toHaveClass('bg-transparent');
    expect(link).toHaveClass('text-text-secondary');
  });
});
