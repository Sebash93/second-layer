import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Hero } from './hero';

const meta = {
  title: 'Sections/Hero',
  component: Hero,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    a11y: {
      config: {
        rules: [{ id: 'color-contrast', enabled: false }],
      },
    },
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomContent: Story = {
  args: {
    overline: 'Full-Stack Engineer',
    headline: 'Building products that scale from day one.',
    gradientWords: ['products', 'scale'],
    body: 'Focused on clean architecture, user experience, and long-term maintainability.',
    ctaLabel: 'Get in touch',
    ctaHref: '#contact',
    hint: 'Scroll to see more.',
  },
};

export const WithoutHint: Story = {
  args: {
    hint: '',
  },
};
