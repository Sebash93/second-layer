import { render, screen } from '@testing-library/react';

import { SectionContainer } from './section-container';

describe('SectionContainer', () => {
  it('renders children', () => {
    render(<SectionContainer>Hello world</SectionContainer>);
    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });

  it('renders as section by default', () => {
    render(<SectionContainer>Content</SectionContainer>);
    const section = screen.getByText('Content').closest('section');
    expect(section).toBeInTheDocument();
  });

  it('renders as div when specified', () => {
    const { container } = render(<SectionContainer as="div">Content</SectionContainer>);
    expect(container.querySelector('div.container-main')).toBeInTheDocument();
    expect(container.querySelector('section')).not.toBeInTheDocument();
  });

  it('renders as footer when specified', () => {
    render(<SectionContainer as="footer">Content</SectionContainer>);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('applies container-main class by default', () => {
    render(<SectionContainer>Content</SectionContainer>);
    const section = screen.getByText('Content').closest('section');
    expect(section).toHaveClass('container-main');
  });

  it('applies container-narrow class when variant is narrow', () => {
    render(<SectionContainer variant="narrow">Content</SectionContainer>);
    const section = screen.getByText('Content').closest('section');
    expect(section).toHaveClass('container-narrow');
  });

  it('passes id prop', () => {
    render(<SectionContainer id="about">Content</SectionContainer>);
    const section = screen.getByText('Content').closest('section');
    expect(section).toHaveAttribute('id', 'about');
  });

  it('merges className', () => {
    render(<SectionContainer className="custom-class">Content</SectionContainer>);
    const section = screen.getByText('Content').closest('section');
    expect(section).toHaveClass('container-main');
    expect(section).toHaveClass('custom-class');
  });
});
