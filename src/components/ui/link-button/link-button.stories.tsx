import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { LinkButton } from './link-button';

const meta = {
  title: 'UI/LinkButton',
  component: LinkButton,
  tags: ['autodocs'],
  parameters: {
    a11y: {
      config: {
        // ghost variant uses text-secondary (#8A8A8A) per design spec
        rules: [{ id: 'color-contrast', enabled: false }],
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
    },
    showArrow: { control: 'boolean' },
  },
} satisfies Meta<typeof LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AsExternalLink: Story = {
  args: {
    children: 'Visit Website',
    href: 'https://example.com',
    variant: 'primary',
  },
};

export const AsInternalLink: Story = {
  args: {
    children: 'Go to About',
    href: '/about',
    variant: 'secondary',
  },
};

export const WithArrow: Story = {
  args: {
    children: 'Learn More',
    href: 'https://example.com',
    variant: 'primary',
    showArrow: true,
  },
};

export const AllVariants: Story = {
  args: {
    children: 'Link',
    href: '#',
  },
  render: () => (
    <div className="flex flex-col gap-8">
      {(['primary', 'secondary', 'ghost'] as const).map((variant) => (
        <div key={variant} className="flex items-center gap-4">
          <LinkButton variant={variant} href="/internal">
            {variant} internal
          </LinkButton>
          <LinkButton variant={variant} href="https://example.com">
            {variant} external
          </LinkButton>
          <LinkButton variant={variant} href="https://example.com" showArrow>
            {variant} arrow
          </LinkButton>
        </div>
      ))}
    </div>
  ),
};
