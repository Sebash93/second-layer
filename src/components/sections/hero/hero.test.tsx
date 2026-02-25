import { render, screen } from '@testing-library/react';

import { Hero } from './hero';

// Mock Three.js blob (no WebGL in jsdom)
vi.mock('./hero-blob', () => ({
  HeroBlob: () => <div data-testid="hero-blob-3d" />,
}));

// Mock next/dynamic to render the fallback synchronously
vi.mock('next/dynamic', () => ({
  default: () => {
    function MockDynamic() {
      return <div data-testid="hero-blob-dynamic" />;
    }
    return MockDynamic;
  },
}));

// Mock useIntersectionObserver to always return visible
vi.mock('@/components/hooks/use-intersection-observer', () => ({
  useIntersectionObserver: () => [{ current: null }, true],
}));

describe('Hero', () => {
  it('renders section with id="hero"', () => {
    render(<Hero />);
    const section = document.getElementById('hero');
    expect(section).toBeInTheDocument();
    expect(section?.tagName).toBe('SECTION');
  });

  it('renders badge text', () => {
    render(<Hero />);
    expect(
      screen.getByText('Senior Product Engineer \u00B7 Fractal CTO'),
    ).toBeInTheDocument();
  });

  it('renders all headline words', () => {
    render(<Hero headline="Build fast ship faster" />);
    expect(screen.getByText('Build')).toBeInTheDocument();
    expect(screen.getByText('fast')).toBeInTheDocument();
    expect(screen.getByText('ship')).toBeInTheDocument();
    expect(screen.getByText('faster')).toBeInTheDocument();
  });

  it('renders body text', () => {
    render(<Hero />);
    expect(
      screen.getByText(
        'With attention to product intent, architecture, and how decisions age over time.',
      ),
    ).toBeInTheDocument();
  });

  it('renders CTA with correct href', () => {
    render(<Hero ctaHref="#contact" ctaLabel="Start a conversation" />);
    const cta = screen.getByRole('link', { name: /start a conversation/i });
    expect(cta).toHaveAttribute('href', '#contact');
  });

  it('applies gradient-text class to gradient words', () => {
    render(
      <Hero
        headline="I ship MVPs"
        gradientWords={['ship', 'MVPs']}
      />,
    );
    const shipWord = screen.getByText('ship');
    expect(shipWord).toHaveClass('gradient-text');
    const mvpsWord = screen.getByText('MVPs');
    expect(mvpsWord).toHaveClass('gradient-text');
  });

  it('does not render hint when empty', () => {
    render(<Hero hint="" />);
    expect(
      screen.queryByText('Press to explore what\u2019s underneath.'),
    ).not.toBeInTheDocument();
  });

  it('renders hint by default', () => {
    render(<Hero />);
    expect(
      screen.getByText('Press to explore what\u2019s underneath.'),
    ).toBeInTheDocument();
  });

  it('forwards className to section', () => {
    render(<Hero className="custom-hero" />);
    const section = document.getElementById('hero');
    expect(section).toHaveClass('custom-hero');
  });
});
