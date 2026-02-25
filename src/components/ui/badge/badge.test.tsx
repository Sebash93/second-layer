import { render, screen } from '@testing-library/react';

import { Badge } from './badge';

describe('Badge', () => {
  it('renders children text', () => {
    render(<Badge>New Feature</Badge>);
    expect(screen.getByText('New Feature')).toBeInTheDocument();
  });

  it('applies subtle variant classes by default', () => {
    render(<Badge>Default</Badge>);
    const badge = screen.getByText('Default');
    expect(badge).toHaveClass('bg-accent-tint-8');
    expect(badge).toHaveClass('text-accent-start');
  });

  it('applies primary variant classes', () => {
    render(<Badge variant="primary">Primary</Badge>);
    const badge = screen.getByText('Primary');
    expect(badge).toHaveClass('text-white');
  });

  it('applies outline variant classes', () => {
    render(<Badge variant="outline">Outline</Badge>);
    const badge = screen.getByText('Outline');
    expect(badge).toHaveClass('bg-transparent');
    expect(badge).toHaveClass('text-accent-start');
    expect(badge).toHaveClass('border-accent-tint-12');
  });

  it('applies primary variant gradient style', () => {
    render(<Badge variant="primary">Gradient</Badge>);
    const badge = screen.getByText('Gradient');
    expect(badge).toHaveStyle({ backgroundImage: 'var(--gradient-primary)' });
  });

  it('merges custom className', () => {
    render(<Badge className="custom-class">Custom</Badge>);
    const badge = screen.getByText('Custom');
    expect(badge).toHaveClass('custom-class');
  });

  it('has base styling classes', () => {
    render(<Badge>Styled</Badge>);
    const badge = screen.getByText('Styled');
    expect(badge).toHaveClass('rounded-full');
    expect(badge).toHaveClass('font-semibold');
  });
});
