import { render, screen } from '@testing-library/react';

import { Tag } from './tag';

describe('Tag', () => {
  it('renders children text', () => {
    render(<Tag>React</Tag>);
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('has correct base classes', () => {
    render(<Tag>TypeScript</Tag>);
    const tag = screen.getByText('TypeScript');
    expect(tag).toHaveClass('bg-accent-tint-5');
    expect(tag).toHaveClass('text-accent-start');
    expect(tag).toHaveClass('border-accent-tint-12');
    expect(tag).toHaveClass('rounded-full');
    expect(tag).toHaveClass('font-semibold');
  });

  it('merges custom className', () => {
    render(<Tag className="custom-class">Custom</Tag>);
    const tag = screen.getByText('Custom');
    expect(tag).toHaveClass('custom-class');
    expect(tag).toHaveClass('bg-accent-tint-5');
  });

  it('renders as a span element', () => {
    render(<Tag>Span</Tag>);
    const tag = screen.getByText('Span');
    expect(tag.tagName).toBe('SPAN');
  });
});
