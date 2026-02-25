import { render, screen } from '@testing-library/react';

import { Input } from './input';

describe('Input', () => {
  it('renders an input element', () => {
    render(<Input />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders with placeholder', () => {
    render(<Input placeholder="Enter email" />);
    expect(screen.getByPlaceholderText('Enter email')).toBeInTheDocument();
  });

  it('renders label when provided with correct htmlFor association', () => {
    render(<Input label="Email" id="email-input" />);
    const label = screen.getByText('Email');
    const input = screen.getByRole('textbox');

    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute('for', 'email-input');
    expect(input).toHaveAttribute('id', 'email-input');
  });

  it('renders error message when provided', () => {
    render(<Input error="Required field" />);
    expect(screen.getByText('Required field')).toBeInTheDocument();
  });

  it('sets aria-invalid when error is present', () => {
    render(<Input error="Invalid value" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('sets aria-describedby pointing to error element', () => {
    render(<Input error="Must be valid" id="my-input" />);
    const input = screen.getByRole('textbox');
    const errorEl = screen.getByText('Must be valid');

    expect(input).toHaveAttribute('aria-describedby', 'my-input-error');
    expect(errorEl).toHaveAttribute('id', 'my-input-error');
  });

  it('is disabled when disabled prop is set', () => {
    render(<Input disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });
});
