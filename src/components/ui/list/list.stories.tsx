import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { DotList } from './dot-list';

const meta = {
  title: 'UI/List/DotList',
  component: DotList,
  tags: ['autodocs'],
  parameters: {
    a11y: {
      config: {
        rules: [{ id: 'color-contrast', enabled: false }],
      },
    },
  },
} satisfies Meta<typeof DotList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DotListDefault: Story = {
  args: {
    items: [
      'React & Next.js architecture',
      'TypeScript best practices',
      'Component design systems',
      'Performance optimization',
      'Automated testing strategies',
    ],
  },
};

export const DotListFewItems: Story = {
  args: {
    items: ['First item', 'Second item'],
  },
};

export const DotListManyItems: Story = {
  args: {
    items: [
      'API design',
      'Database modeling',
      'CI/CD pipelines',
      'Cloud infrastructure',
      'Security practices',
      'Monitoring & observability',
      'Code review processes',
      'Documentation standards',
    ],
  },
};
