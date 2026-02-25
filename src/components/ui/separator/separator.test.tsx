import { render, screen } from '@testing-library/react';

import { Separator } from './separator';

describe('Separator', () => {
  it('renders with separator role', () => {
    render(<Separator />);
    expect(screen.getByRole('separator')).toBeInTheDocument();
  });

  it('applies section variant by default', () => {
    render(<Separator />);
    const el = screen.getByRole('separator');

    expect(el).toHaveClass('h-px', 'w-full', 'opacity-[0.18]');
  });

  it('renders correct styles for section-strong variant', () => {
    render(<Separator variant="section-strong" />);
    const el = screen.getByRole('separator');

    expect(el).toHaveClass('h-[2px]', 'w-full', 'opacity-25');
  });

  it('renders correct styles for content variant', () => {
    render(<Separator variant="content" />);
    const el = screen.getByRole('separator');

    expect(el).toHaveClass('h-px', 'w-full', 'bg-border-default');
  });

  it('renders correct styles for accent-bar variant', () => {
    render(<Separator variant="accent-bar" />);
    const el = screen.getByRole('separator');

    expect(el).toHaveClass('h-[3px]', 'w-[48px]', 'rounded-[2px]');
  });

  it('renders correct styles for accent-dot variant', () => {
    render(<Separator variant="accent-dot" />);
    const el = screen.getByRole('separator');

    expect(el).toHaveClass('w-[6px]', 'h-[6px]', 'rounded-full');
  });

  it('renders correct styles for deco-line variant', () => {
    render(<Separator variant="deco-line" />);
    const el = screen.getByRole('separator');

    expect(el).toHaveClass('h-px', 'w-[32px]', 'opacity-30');
  });

  it('merges custom className', () => {
    render(<Separator className="mt-4" />);
    const el = screen.getByRole('separator');

    expect(el).toHaveClass('mt-4');
  });
});
