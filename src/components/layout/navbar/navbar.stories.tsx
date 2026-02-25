import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Navbar } from './navbar';

const defaultLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

const meta = {
  title: 'Layout/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  parameters: {
    a11y: {
      config: {
        rules: [{ id: 'color-contrast', enabled: false }],
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: '200vh' }}>
        <Story />
        <div style={{ paddingTop: 80, paddingInline: 24 }}>
          <p className="text-body text-text-body">
            Scroll down to see the border appear on the navbar.
          </p>
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: defaultLinks,
  },
};

export const WithCTA: Story = {
  args: {
    links: defaultLinks,
    ctaLabel: 'Start a conversation',
    ctaHref: '#contact',
  },
};

export const Mobile: Story = {
  args: {
    links: defaultLinks,
    ctaLabel: 'Start a conversation',
    ctaHref: '#contact',
  },
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};
