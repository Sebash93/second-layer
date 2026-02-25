import { createRef } from 'react';
import { render, screen } from '@testing-library/react';

import { Card } from './card';

describe('Card', () => {
  it('renders children content', () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('applies default variant by default', () => {
    render(<Card data-testid="card">Default</Card>);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('rounded-md');
    expect(card).toHaveClass('p-lg');
    expect(card).toHaveClass('bg-bg-primary');
  });

  it('applies accent variant with gradient bar element', () => {
    const { container } = render(
      <Card variant="accent" data-testid="card">
        Accent
      </Card>,
    );
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('group');
    expect(card).toHaveClass('relative');
    expect(card).toHaveClass('overflow-hidden');

    const gradientBar = container.querySelector('span[aria-hidden="true"]');
    expect(gradientBar).toBeInTheDocument();
    expect(gradientBar).toHaveStyle({ backgroundImage: 'var(--gradient-primary)' });
  });

  it('does not render gradient bar for default variant', () => {
    const { container } = render(<Card>Default</Card>);
    const gradientBar = container.querySelector('span[aria-hidden="true"]');
    expect(gradientBar).not.toBeInTheDocument();
  });

  it('applies featured variant classes', () => {
    render(<Card variant="featured" data-testid="card">Featured</Card>);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('rounded-xl');
    expect(card).toHaveClass('p-3xl');
    expect(card).toHaveClass('bg-accent-tint-5');
  });

  it('forwards className prop', () => {
    render(<Card className="custom-class" data-testid="card">Custom</Card>);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('custom-class');
  });

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>();
    render(<Card ref={ref}>Ref card</Card>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
