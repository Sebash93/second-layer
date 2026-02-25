import { render, screen } from '@testing-library/react';

import { Navbar } from './navbar';

const defaultLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

vi.mock('@/components/hooks/use-scroll-position', () => ({
  useScrollPosition: () => 0,
}));

describe('Navbar', () => {
  it('renders nav element', () => {
    render(<Navbar links={defaultLinks} />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders all nav links', () => {
    render(<Navbar links={defaultLinks} />);
    for (const link of defaultLinks) {
      expect(screen.getAllByText(link.label).length).toBeGreaterThanOrEqual(1);
    }
  });

  it('renders CTA button when ctaLabel and ctaHref are provided', () => {
    render(<Navbar links={defaultLinks} ctaLabel="Get Started" ctaHref="#start" />);
    expect(screen.getAllByText('Get Started').length).toBeGreaterThanOrEqual(1);
  });

  it('does not render CTA when ctaLabel is not provided', () => {
    render(<Navbar links={defaultLinks} />);
    expect(screen.queryByText('Get Started')).not.toBeInTheDocument();
  });

  it('has correct landmark role', () => {
    render(<Navbar links={defaultLinks} />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders border as transparent initially', () => {
    render(<Navbar links={defaultLinks} />);
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('border-transparent');
  });
});
