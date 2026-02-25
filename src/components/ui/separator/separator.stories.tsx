import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Separator } from './separator';

const meta = {
  title: 'UI/Separator',
  component: Separator,
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'bg-primary' },
  },
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Section: Story = {
  args: { variant: 'section' },
};

export const SectionStrong: Story = {
  args: { variant: 'section-strong' },
};

export const SectionPrimary: Story = {
  args: { variant: 'section-primary' },
};

export const Content: Story = {
  args: { variant: 'content' },
};

export const ContentSubtle: Story = {
  args: { variant: 'content-subtle' },
};

export const AccentBar: Story = {
  args: { variant: 'accent-bar' },
};

export const AccentBarPrimary: Story = {
  args: { variant: 'accent-bar-primary' },
};

export const AccentDot: Story = {
  args: { variant: 'accent-dot' },
};

export const AccentDotPrimary: Story = {
  args: { variant: 'accent-dot-primary' },
};

export const AccentDotLg: Story = {
  args: { variant: 'accent-dot-lg' },
};

export const DecoLine: Story = {
  args: { variant: 'deco-line' },
};

const allVariants = [
  'section',
  'section-strong',
  'section-primary',
  'content',
  'content-subtle',
  'accent-bar',
  'accent-bar-primary',
  'accent-dot',
  'accent-dot-primary',
  'accent-dot-lg',
  'deco-line',
] as const;

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 32 }}>
      {allVariants.map((variant) => (
        <div key={variant} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span
            style={{
              fontSize: 12,
              fontFamily: 'monospace',
              color: '#404040',
              minWidth: 160,
            }}
          >
            {variant}
          </span>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
            <Separator variant={variant} />
          </div>
        </div>
      ))}
    </div>
  ),
};
