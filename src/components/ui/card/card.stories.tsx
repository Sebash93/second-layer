import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Card } from './card';

const meta = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    a11y: {
      config: {
        rules: [{ id: 'color-contrast', enabled: false }],
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'accent', 'featured'],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const exampleContent = (
  <div className="flex flex-col gap-3">
    <h3 className="text-lg font-semibold text-text-primary">Card Title</h3>
    <p className="text-sm text-text-body">
      This is example card content with a description that explains the feature
      or information being presented.
    </p>
    <span className="inline-flex items-center self-start rounded-sm bg-bg-tertiary px-3 py-1.5 text-sm font-medium text-text-primary">
      Learn more
    </span>
  </div>
);

export const Default: Story = {
  args: {
    children: exampleContent,
  },
};

export const Accent: Story = {
  args: {
    variant: 'accent',
    children: exampleContent,
  },
};

export const Featured: Story = {
  args: {
    variant: 'featured',
    children: exampleContent,
  },
};

export const AllVariants: Story = {
  args: {
    children: 'Card',
  },
  render: () => (
    <div className="grid grid-cols-3 gap-6">
      {(['default', 'accent', 'featured'] as const).map((variant) => (
        <Card key={variant} variant={variant}>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-text-primary">
              {variant.charAt(0).toUpperCase() + variant.slice(1)} Card
            </h3>
            <p className="text-sm text-text-body">
              This is the {variant} variant of the Card component.
            </p>
            <span className="inline-flex items-center self-start rounded-sm bg-bg-tertiary px-3 py-1.5 text-sm font-medium text-text-primary">
              Action
            </span>
          </div>
        </Card>
      ))}
    </div>
  ),
};
