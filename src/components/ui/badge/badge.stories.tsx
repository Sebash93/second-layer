import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Badge } from './badge';

const meta = {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    a11y: {
      config: {
        // accent-start (#FF6B35) at 12px on light bg is a design system decision
        rules: [{ id: 'color-contrast', enabled: false }],
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'outline', 'subtle'],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'New Feature',
    variant: 'primary',
  },
};

export const Outline: Story = {
  args: {
    children: 'Beta',
    variant: 'outline',
  },
};

export const Subtle: Story = {
  args: {
    children: 'Coming Soon',
    variant: 'subtle',
  },
};

export const AllVariants: Story = {
  args: {
    children: 'Badge',
  },
  render: () => (
    <div className="flex items-center gap-4">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="subtle">Subtle</Badge>
    </div>
  ),
};
