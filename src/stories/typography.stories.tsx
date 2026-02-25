import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Design System/Typography',
  parameters: {
    layout: 'padded',
    a11y: {
      config: {
        rules: [{ id: 'color-contrast', enabled: false }],
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

const sampleText = 'The quick brown fox jumps over the lazy dog';

export const TypeScale: Story = {
  render: () => (
    <div className="flex flex-col gap-2xl">
      <div className="flex flex-col gap-sm">
        <span className="text-overline text-text-secondary">text-hero &middot; Sora 700 &middot; clamp(40px, 5vw, 72px)</span>
        <p className="text-hero text-text-primary">Ship MVPs</p>
      </div>

      <div className="flex flex-col gap-sm">
        <span className="text-overline text-text-secondary">text-display &middot; Sora 700 &middot; clamp(28px, 3.5vw, 44px)</span>
        <p className="text-display text-text-primary">{sampleText}</p>
      </div>

      <div className="flex flex-col gap-sm">
        <span className="text-overline text-text-secondary">text-heading &middot; Sora 600 &middot; clamp(22px, 2vw, 26px)</span>
        <p className="text-heading text-text-primary">{sampleText}</p>
      </div>

      <div className="flex flex-col gap-sm">
        <span className="text-overline text-text-secondary">text-title &middot; Sora 700 &middot; 20px</span>
        <p className="text-title text-text-primary">{sampleText}</p>
      </div>

      <hr className="border-border-default" />

      <div className="flex flex-col gap-sm">
        <span className="text-overline text-text-secondary">text-body-lg &middot; Plus Jakarta Sans 400 &middot; clamp(17px, 1.2vw, 18px)</span>
        <p className="text-body-lg text-text-body">{sampleText}</p>
      </div>

      <div className="flex flex-col gap-sm">
        <span className="text-overline text-text-secondary">text-body &middot; Plus Jakarta Sans 400 &middot; clamp(15px, 1vw, 16px)</span>
        <p className="text-body text-text-body">{sampleText}</p>
      </div>

      <div className="flex flex-col gap-sm">
        <span className="text-overline text-text-secondary">text-body-sm &middot; Plus Jakarta Sans 400 &middot; 14px</span>
        <p className="text-body-sm text-text-body">{sampleText}</p>
      </div>

      <hr className="border-border-default" />

      <div className="flex flex-col gap-sm">
        <span className="text-overline text-text-secondary">text-caption &middot; Plus Jakarta Sans 600 &middot; 12px uppercase</span>
        <p className="text-caption text-text-body">Section Label</p>
      </div>

      <div className="flex flex-col gap-sm">
        <span className="text-overline text-text-secondary">text-overline &middot; Plus Jakarta Sans 600 &middot; 11px uppercase</span>
        <p className="text-overline text-text-body">Overline Text</p>
      </div>
    </div>
  ),
};

export const TextColors: Story = {
  render: () => (
    <div className="flex flex-col gap-lg">
      <div className="flex items-baseline gap-lg">
        <span className="text-overline text-text-secondary w-[140px] shrink-0">text-primary</span>
        <p className="text-heading text-text-primary">Headings and high-emphasis text</p>
      </div>
      <div className="flex items-baseline gap-lg">
        <span className="text-overline text-text-secondary w-[140px] shrink-0">text-body</span>
        <p className="text-heading text-text-body">Body paragraphs and general content</p>
      </div>
      <div className="flex items-baseline gap-lg">
        <span className="text-overline text-text-secondary w-[140px] shrink-0">text-secondary</span>
        <p className="text-heading text-text-secondary">Captions, metadata, supporting text</p>
      </div>
      <div className="flex items-baseline gap-lg">
        <span className="text-overline text-text-secondary w-[140px] shrink-0">text-disabled</span>
        <p className="text-heading text-text-disabled">Placeholders and disabled labels</p>
      </div>
    </div>
  ),
};

export const GradientText: Story = {
  render: () => (
    <div className="flex flex-col gap-2xl">
      <div className="flex flex-col gap-sm">
        <span className="text-overline text-text-secondary">gradient-text &middot; Primary (Orange → Pink)</span>
        <p className="text-hero gradient-text">ship MVPs</p>
      </div>
      <div className="flex flex-col gap-sm">
        <span className="text-overline text-text-secondary">gradient-text-secondary &middot; Secondary (Blue → Cyan)</span>
        <p className="text-hero gradient-text-secondary">ship MVPs</p>
      </div>
      <div className="flex flex-col gap-sm">
        <span className="text-overline text-text-secondary">Mixed — gradient on key words</span>
        <p className="text-display text-text-primary">
          Working with teams to{' '}
          <span className="gradient-text">ship MVPs</span>
        </p>
      </div>
    </div>
  ),
};

export const Highlight: Story = {
  render: () => (
    <div className="flex flex-col gap-2xl">
      <div className="flex flex-col gap-sm">
        <span className="text-overline text-text-secondary">highlight &middot; Natural marker effect using primary accent</span>
        <p className="text-heading text-text-primary">
          <mark className="highlight">Fast to build</mark> and{' '}
          <mark className="highlight">safe to learn from.</mark> With attention to
          product intent, architecture, and how decisions age over time.
        </p>
      </div>
      <div className="flex flex-col gap-sm">
        <span className="text-overline text-text-secondary">highlight on body text</span>
        <p className="text-body-lg text-text-body">
          Sometimes the most important thing is knowing{' '}
          <mark className="highlight">what not to build.</mark> That clarity
          saves teams weeks of misaligned effort.
        </p>
      </div>
      <div className="flex flex-col gap-sm">
        <span className="text-overline text-text-secondary">highlight on display text</span>
        <p className="text-display text-text-primary">
          <mark className="highlight">Decisions age over time.</mark>
        </p>
      </div>
    </div>
  ),
};

export const FontFamilies: Story = {
  render: () => (
    <div className="flex flex-col gap-2xl">
      <div className="flex flex-col gap-sm">
        <span className="text-overline text-text-secondary">font-heading &middot; Sora</span>
        <p className="font-heading text-[32px] font-bold tracking-tight text-text-primary">
          Sora is used for headings, display text, and titles.
        </p>
        <p className="font-heading text-body-lg text-text-body">
          ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789
        </p>
      </div>

      <hr className="border-border-default" />

      <div className="flex flex-col gap-sm">
        <span className="text-overline text-text-secondary">font-body &middot; Plus Jakarta Sans</span>
        <p className="font-body text-[32px] font-bold tracking-tight text-text-primary">
          Plus Jakarta Sans is used for body, UI, and labels.
        </p>
        <p className="font-body text-body-lg text-text-body">
          ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789
        </p>
      </div>
    </div>
  ),
};
