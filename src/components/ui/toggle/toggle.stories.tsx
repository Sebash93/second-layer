import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Toggle } from './toggle';

const meta = {
  title: 'UI/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Off: Story = {
  args: {
    checked: false,
    onChange: () => {},
  },
};

export const On: Story = {
  args: {
    checked: true,
    onChange: () => {},
  },
  render: function OnStory() {
    const [checked, setChecked] = useState(true);
    return <Toggle checked={checked} onChange={setChecked} />;
  },
};

export const WithLabel: Story = {
  args: {
    checked: false,
    onChange: () => {},
  },
  render: function WithLabelStory() {
    const [checked, setChecked] = useState(false);
    return <Toggle checked={checked} onChange={setChecked} label="Enable notifications" />;
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    onChange: () => {},
    label: 'Disabled toggle',
    disabled: true,
  },
};
