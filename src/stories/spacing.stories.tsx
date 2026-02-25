import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Design System/Spacing & Radius',
  parameters: {
    layout: 'padded',
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: false },
        ],
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

const spacingTokens = [
  { name: 'xs', value: '4px' },
  { name: 'sm', value: '8px' },
  { name: 'md', value: '16px' },
  { name: 'lg', value: '24px' },
  { name: 'xl', value: '32px' },
  { name: '2xl', value: '48px' },
  { name: '3xl', value: '64px' },
  { name: '4xl', value: '96px' },
  { name: '5xl', value: '128px' },
] as const;

const radiusTokens = [
  { name: 'xs', value: '4px', className: 'rounded-xs' },
  { name: 'sm', value: '8px', className: 'rounded-sm' },
  { name: 'md', value: '12px', className: 'rounded-md' },
  { name: 'lg', value: '16px', className: 'rounded-lg' },
  { name: 'xl', value: '24px', className: 'rounded-xl' },
  { name: 'full', value: '9999px', className: 'rounded-full' },
] as const;

export const SpacingScale: Story = {
  render: () => (
    <div className="flex flex-col gap-md">
      {spacingTokens.map(({ name, value }) => (
        <div key={name} className="flex items-center gap-lg">
          <span className="text-overline w-[60px] shrink-0 text-right text-text-secondary">{name}</span>
          <div
            className="h-[24px] rounded-xs bg-accent-tint-15"
            style={{ width: `var(--spacing-${name})` }}
          />
          <span className="text-body-sm text-text-disabled">{value}</span>
        </div>
      ))}
    </div>
  ),
};

export const BorderRadius: Story = {
  render: () => (
    <div className="grid grid-cols-6 gap-xl">
      {radiusTokens.map(({ name, value, className }) => (
        <div key={name} className="flex flex-col items-center gap-sm">
          <div className={`h-[80px] w-[80px] border border-accent-tint-25 bg-accent-tint-15 ${className}`} />
          <span className="text-caption text-text-primary">{name}</span>
          <span className="text-overline text-text-secondary">{value}</span>
        </div>
      ))}
    </div>
  ),
};
