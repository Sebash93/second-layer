import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Toggle } from './toggle';

describe('Toggle', () => {
  it('renders with switch role', () => {
    render(<Toggle checked={false} onChange={() => {}} />);
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });

  it('has aria-checked false when unchecked', () => {
    render(<Toggle checked={false} onChange={() => {}} />);
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'false');
  });

  it('has aria-checked true when checked', () => {
    render(<Toggle checked onChange={() => {}} />);
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
  });

  it('calls onChange when clicked', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(<Toggle checked={false} onChange={handleChange} />);
    await user.click(screen.getByRole('switch'));

    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('does not call onChange when disabled', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(<Toggle checked={false} onChange={handleChange} disabled />);
    await user.click(screen.getByRole('switch'));

    expect(handleChange).not.toHaveBeenCalled();
  });

  it('renders label when provided', () => {
    render(<Toggle checked={false} onChange={() => {}} label="Dark mode" />);
    expect(screen.getByText('Dark mode')).toBeInTheDocument();
  });

  it('is focusable via keyboard', async () => {
    const user = userEvent.setup();
    render(<Toggle checked={false} onChange={() => {}} />);

    await user.tab();

    expect(screen.getByRole('switch')).toHaveFocus();
  });
});
