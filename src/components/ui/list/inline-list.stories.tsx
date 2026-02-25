import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { InlineList } from './inline-list';

const meta = {
  title: 'UI/List/InlineList',
  component: InlineList,
  tags: ['autodocs'],
  parameters: {
    a11y: {
      config: {
        rules: [{ id: 'color-contrast', enabled: false }],
      },
    },
  },
  argTypes: {
    gap: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
} satisfies Meta<typeof InlineList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InlineListDefault: Story = {
  args: {
    children: (
      <>
        <li className="text-text-secondary">About</li>
        <li className="text-text-secondary">Work</li>
        <li className="text-text-secondary">Background</li>
        <li className="text-text-secondary">Contact</li>
      </>
    ),
  },
};

export const InlineListWithSeparators: Story = {
  args: {
    children: null,
  },
  render: () => (
    <InlineList gap="lg">
      <li>Company A</li>
      <li className="text-text-disabled" aria-hidden="true">
        ·
      </li>
      <li>Company B</li>
      <li className="text-text-disabled" aria-hidden="true">
        ·
      </li>
      <li>Company C</li>
      <li className="text-text-disabled" aria-hidden="true">
        ·
      </li>
      <li>Company D</li>
    </InlineList>
  ),
};

export const InlineListDifferentGaps: Story = {
  args: {
    children: null,
  },
  render: () => (
    <div className="flex flex-col gap-xl">
      {(['sm', 'md', 'lg', 'xl'] as const).map((gap) => (
        <div key={gap}>
          <p className="mb-sm font-body text-[12px] font-semibold tracking-[0.08em] text-text-body uppercase">
            gap: {gap}
          </p>
          <InlineList gap={gap}>
            <li>React</li>
            <li>TypeScript</li>
            <li>Next.js</li>
          </InlineList>
        </div>
      ))}
    </div>
  ),
};
