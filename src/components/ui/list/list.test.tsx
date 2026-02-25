import { render, screen } from '@testing-library/react';

import { DotList } from './dot-list';
import { InlineList } from './inline-list';
import { NumberedList } from './numbered-list';

describe('DotList', () => {
  const items = ['First item', 'Second item', 'Third item'];

  it('renders all items', () => {
    render(<DotList items={items} />);
    for (const item of items) {
      expect(screen.getByText(item)).toBeInTheDocument();
    }
  });

  it('renders correct number of li elements', () => {
    const { container } = render(<DotList items={items} />);
    const listItems = container.querySelectorAll('li');
    expect(listItems).toHaveLength(3);
  });

  it('renders dot indicators', () => {
    const { container } = render(<DotList items={items} />);
    const dots = container.querySelectorAll('span[aria-hidden="true"]');
    expect(dots).toHaveLength(3);
  });

  it('merges custom className', () => {
    const { container } = render(<DotList items={items} className="custom-class" />);
    const list = container.querySelector('ul');
    expect(list).toHaveClass('custom-class');
  });
});

describe('NumberedList', () => {
  const items = [
    { title: 'Step one' },
    { title: 'Step two' },
    { title: 'Step three' },
  ];

  it('renders all items', () => {
    render(<NumberedList items={items} />);
    for (const item of items) {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    }
  });

  it('renders sequential numbers', () => {
    render(<NumberedList items={items} />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('renders descriptions when provided', () => {
    const itemsWithDesc = [
      { title: 'Step one', description: 'Description for step one' },
      { title: 'Step two', description: 'Description for step two' },
    ];
    render(<NumberedList items={itemsWithDesc} />);
    expect(screen.getByText('Description for step one')).toBeInTheDocument();
    expect(screen.getByText('Description for step two')).toBeInTheDocument();
  });

  it('does not render description element when not provided', () => {
    const { container } = render(<NumberedList items={items} />);
    const descriptions = container.querySelectorAll('p');
    expect(descriptions).toHaveLength(0);
  });

  it('merges custom className', () => {
    const { container } = render(<NumberedList items={items} className="custom-class" />);
    const list = container.querySelector('ol');
    expect(list).toHaveClass('custom-class');
  });
});

describe('InlineList', () => {
  it('renders children', () => {
    render(
      <InlineList>
        <li>Item A</li>
        <li>Item B</li>
      </InlineList>,
    );
    expect(screen.getByText('Item A')).toBeInTheDocument();
    expect(screen.getByText('Item B')).toBeInTheDocument();
  });

  it('applies xl gap class by default', () => {
    const { container } = render(
      <InlineList>
        <li>Item</li>
      </InlineList>,
    );
    const list = container.querySelector('ul');
    expect(list).toHaveClass('gap-xl');
  });

  it('applies correct gap class for each size', () => {
    const gaps = {
      sm: 'gap-sm',
      md: 'gap-md',
      lg: 'gap-lg',
      xl: 'gap-xl',
    } as const;

    for (const [gap, expectedClass] of Object.entries(gaps)) {
      const { container } = render(
        <InlineList gap={gap as keyof typeof gaps}>
          <li>Item</li>
        </InlineList>,
      );
      const list = container.querySelector('ul');
      expect(list).toHaveClass(expectedClass);
    }
  });

  it('merges custom className', () => {
    const { container } = render(
      <InlineList className="custom-class">
        <li>Item</li>
      </InlineList>,
    );
    const list = container.querySelector('ul');
    expect(list).toHaveClass('custom-class');
  });
});
