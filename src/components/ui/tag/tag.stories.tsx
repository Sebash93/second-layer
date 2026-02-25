import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Tag } from './tag';

const meta = {
  title: 'UI/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    a11y: {
      config: {
        // accent-start (#FF6B35) at 12px on light bg is a design system decision
        rules: [{ id: 'color-contrast', enabled: false }],
      },
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'React',
  },
};

export const Group: Story = {
  args: {
    children: 'Tag',
  },
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag>React</Tag>
      <Tag>TypeScript</Tag>
      <Tag>Next.js</Tag>
      <Tag>Tailwind CSS</Tag>
      <Tag>Node.js</Tag>
    </div>
  ),
};
