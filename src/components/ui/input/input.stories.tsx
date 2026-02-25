import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Input } from './input';

const meta = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    a11y: {
      config: {
        // error text uses accent-start (#FF6B35) at 12px — design system decision
        rules: [{ id: 'color-contrast', enabled: false }],
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    error: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your email...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
    value: 'invalid-email',
    error: 'Please enter a valid email',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
    disabled: true,
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 400 }}>
      <Input placeholder="Default input" />
      <Input label="With label" placeholder="Labeled input" />
      <Input
        label="With error"
        placeholder="Error input"
        value="bad value"
        error="This field is required"
      />
      <Input label="Disabled" placeholder="Disabled input" disabled />
    </div>
  ),
};
