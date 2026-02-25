import { render, screen } from '@testing-library/react';

import { Footer } from './footer';

describe('Footer', () => {
  it('renders footer element', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('renders the text content', () => {
    render(<Footer />);
    expect(screen.getByText('Built with care. Left open to change.')).toBeInTheDocument();
  });

  it('applies className', () => {
    render(<Footer className="custom-footer" />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass('custom-footer');
  });
});
