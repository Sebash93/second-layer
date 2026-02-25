import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { NumberedList } from './numbered-list';

const meta = {
  title: 'UI/List/NumberedList',
  component: NumberedList,
  tags: ['autodocs'],
  parameters: {
    a11y: {
      config: {
        rules: [{ id: 'color-contrast', enabled: false }],
      },
    },
  },
} satisfies Meta<typeof NumberedList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NumberedListDefault: Story = {
  args: {
    items: [
      { title: 'Discovery & strategy session' },
      { title: 'Architecture & technical planning' },
      { title: 'Iterative development sprints' },
      { title: 'Launch & continuous improvement' },
    ],
  },
};

export const NumberedListWithDescriptions: Story = {
  args: {
    items: [
      {
        title: 'Discovery & strategy session',
        description: 'We analyze your product goals, user needs, and technical constraints.',
      },
      {
        title: 'Architecture & technical planning',
        description: 'Design the system architecture, choose the right tools, and plan sprints.',
      },
      {
        title: 'Iterative development sprints',
        description: 'Build, test, and ship features in focused two-week cycles.',
      },
      {
        title: 'Launch & continuous improvement',
        description: 'Deploy to production, monitor performance, and iterate based on data.',
      },
    ],
  },
};
