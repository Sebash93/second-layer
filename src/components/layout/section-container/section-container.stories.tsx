import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { SectionContainer } from './section-container';

const meta = {
  title: 'Layout/SectionContainer',
  component: SectionContainer,
  tags: ['autodocs'],
  parameters: {
    a11y: {
      config: {
        // text-secondary on bg-secondary is a design system decision
        rules: [{ id: 'color-contrast', enabled: false }],
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['main', 'narrow'],
    },
    as: {
      control: 'select',
      options: ['section', 'div', 'footer'],
    },
  },
} satisfies Meta<typeof SectionContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    children: (
      <div className="bg-bg-tertiary rounded-md p-xl text-center">
        <h2 className="text-display text-text-primary">Main container</h2>
        <p className="text-body text-text-body mt-md">
          Max width 1200px with responsive padding.
        </p>
      </div>
    ),
  },
};

export const Narrow: Story = {
  args: {
    variant: 'narrow',
    children: (
      <div className="bg-bg-tertiary rounded-md p-xl text-center">
        <p className="text-body text-text-body">
          Narrow container at 720px max width, ideal for text-heavy content sections.
        </p>
      </div>
    ),
  },
};

export const AsFooter: Story = {
  args: {
    as: 'footer',
    variant: 'narrow',
    children: (
      <p className="text-body-sm text-text-secondary text-center">
        Rendered as a footer element.
      </p>
    ),
  },
};
