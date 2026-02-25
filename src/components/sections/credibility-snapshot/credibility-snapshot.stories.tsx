import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { CredibilitySnapshot } from './credibility-snapshot';

const meta = {
  title: 'Sections/CredibilitySnapshot',
  component: CredibilitySnapshot,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    a11y: {
      config: {
        rules: [{ id: 'color-contrast', enabled: false }],
      },
    },
  },
} satisfies Meta<typeof CredibilitySnapshot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomContent: Story = {
  args: {
    overline: 'Background',
    credentials: [
      '10+ years in frontend and full-stack development',
      'Led engineering teams across 3 continents',
      'Deep expertise in React, Node.js, and cloud infrastructure',
    ],
    closingNote: (
      <>
        Good architecture starts with{' '}
        <mark className="highlight">good questions.</mark>
      </>
    ),
  },
};
