import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Design System/Colors',
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

function Swatch({
  name,
  token,
  hex,
  className,
}: {
  name: string;
  token: string;
  hex: string;
  className: string;
}) {
  return (
    <div className="flex flex-col gap-xs">
      <div className={`h-[64px] w-full rounded-md border border-border-subtle ${className}`} />
      <span className="text-caption text-text-primary">{name}</span>
      <span className="text-overline text-text-secondary">{token}</span>
      <span className="font-body text-[11px] text-text-disabled">{hex}</span>
    </div>
  );
}

function GradientSwatch({
  name,
  token,
  cssVar,
}: {
  name: string;
  token: string;
  cssVar: string;
}) {
  return (
    <div className="flex flex-col gap-xs">
      <div
        className="h-[64px] w-full rounded-md"
        style={{ backgroundImage: `var(${cssVar})` }}
      />
      <span className="text-caption text-text-primary">{name}</span>
      <span className="text-overline text-text-secondary">{token}</span>
    </div>
  );
}

export const Backgrounds: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-lg">
      <Swatch name="Primary" token="bg-bg-primary" hex="#FFFFFF" className="bg-bg-primary" />
      <Swatch name="Secondary" token="bg-bg-secondary" hex="#FAFAFA" className="bg-bg-secondary" />
      <Swatch name="Tertiary" token="bg-bg-tertiary" hex="#F5F5F5" className="bg-bg-tertiary" />
    </div>
  ),
};

export const Text: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-lg">
      <Swatch name="Primary" token="text-text-primary" hex="#0A0A0A" className="bg-text-primary" />
      <Swatch name="Body" token="text-text-body" hex="#404040" className="bg-text-body" />
      <Swatch name="Secondary" token="text-text-secondary" hex="#8A8A8A" className="bg-text-secondary" />
      <Swatch name="Disabled" token="text-text-disabled" hex="#C0C0C0" className="bg-text-disabled" />
    </div>
  ),
};

export const Borders: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-lg">
      <Swatch name="Default" token="border-border-default" hex="#E5E5E5" className="bg-border-default" />
      <Swatch name="Subtle" token="border-border-subtle" hex="#F0F0F0" className="bg-border-subtle" />
      <Swatch name="Focus" token="border-border-focus" hex="#FF6B35" className="bg-border-focus" />
      <Swatch name="Focus Secondary" token="border-border-focus-secondary" hex="#3B82F6" className="bg-border-focus-secondary" />
    </div>
  ),
};

export const PrimaryAccent: Story = {
  render: () => (
    <div className="flex flex-col gap-xl">
      <div className="grid grid-cols-3 gap-lg">
        <Swatch name="Start" token="accent-start" hex="#FF6B35" className="bg-accent-start" />
        <Swatch name="Mid" token="accent-mid" hex="#FF8E6B" className="bg-accent-mid" />
        <Swatch name="End" token="accent-end" hex="#FF5E7A" className="bg-accent-end" />
      </div>
      <div>
        <span className="text-overline mb-sm block text-text-secondary">Tints</span>
        <div className="grid grid-cols-5 gap-lg">
          <Swatch name="5%" token="accent-tint-5" hex="rgba(255,107,53,0.05)" className="bg-accent-tint-5" />
          <Swatch name="8%" token="accent-tint-8" hex="rgba(255,107,53,0.08)" className="bg-accent-tint-8" />
          <Swatch name="12%" token="accent-tint-12" hex="rgba(255,107,53,0.12)" className="bg-accent-tint-12" />
          <Swatch name="15%" token="accent-tint-15" hex="rgba(255,107,53,0.15)" className="bg-accent-tint-15" />
          <Swatch name="25%" token="accent-tint-25" hex="rgba(255,107,53,0.25)" className="bg-accent-tint-25" />
        </div>
      </div>
    </div>
  ),
};

export const SecondaryAccent: Story = {
  render: () => (
    <div className="flex flex-col gap-xl">
      <div className="grid max-w-[400px] grid-cols-2 gap-lg">
        <Swatch name="Start" token="secondary-start" hex="#3B82F6" className="bg-secondary-start" />
        <Swatch name="End" token="secondary-end" hex="#06B6D4" className="bg-secondary-end" />
      </div>
      <div>
        <span className="text-overline mb-sm block text-text-secondary">Tints</span>
        <div className="grid max-w-[600px] grid-cols-3 gap-lg">
          <Swatch name="10%" token="secondary-tint-10" hex="rgba(59,130,246,0.10)" className="bg-secondary-tint-10" />
          <Swatch name="18%" token="secondary-tint-18" hex="rgba(59,130,246,0.18)" className="bg-secondary-tint-18" />
          <Swatch name="25%" token="secondary-tint-25" hex="rgba(59,130,246,0.25)" className="bg-secondary-tint-25" />
        </div>
      </div>
    </div>
  ),
};

export const Gradients: Story = {
  render: () => (
    <div className="flex flex-col gap-xl">
      <div className="grid max-w-[600px] grid-cols-2 gap-lg">
        <GradientSwatch name="Primary" token="--gradient-primary" cssVar="--gradient-primary" />
        <GradientSwatch name="Primary Hover" token="--gradient-primary-hover" cssVar="--gradient-primary-hover" />
      </div>
      <div className="grid max-w-[290px] grid-cols-1 gap-lg">
        <GradientSwatch name="Secondary" token="--gradient-secondary" cssVar="--gradient-secondary" />
      </div>
    </div>
  ),
};

export const Shadows: Story = {
  render: () => (
    <div className="grid max-w-[700px] grid-cols-3 gap-xl">
      {[
        { name: 'Small', className: 'shadow-sm' },
        { name: 'Medium', className: 'shadow-md' },
        { name: 'Large', className: 'shadow-lg' },
        { name: 'Glow', className: 'shadow-glow' },
        { name: 'Glow Strong', className: 'shadow-glow-strong' },
      ].map(({ name, className }) => (
        <div key={name} className="flex flex-col items-center gap-sm">
          <div className={`h-[80px] w-full rounded-md bg-bg-primary ${className}`} />
          <span className="text-caption text-text-primary">{name}</span>
          <span className="text-overline text-text-secondary">{className}</span>
        </div>
      ))}
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-col gap-3xl">
      <section>
        <h3 className="text-heading mb-lg text-text-primary">Backgrounds</h3>
        <div className="grid grid-cols-3 gap-lg">
          <Swatch name="Primary" token="bg-bg-primary" hex="#FFFFFF" className="bg-bg-primary" />
          <Swatch name="Secondary" token="bg-bg-secondary" hex="#FAFAFA" className="bg-bg-secondary" />
          <Swatch name="Tertiary" token="bg-bg-tertiary" hex="#F5F5F5" className="bg-bg-tertiary" />
        </div>
      </section>

      <section>
        <h3 className="text-heading mb-lg text-text-primary">Text</h3>
        <div className="grid grid-cols-4 gap-lg">
          <Swatch name="Primary" token="text-primary" hex="#0A0A0A" className="bg-text-primary" />
          <Swatch name="Body" token="text-body" hex="#404040" className="bg-text-body" />
          <Swatch name="Secondary" token="text-secondary" hex="#8A8A8A" className="bg-text-secondary" />
          <Swatch name="Disabled" token="text-disabled" hex="#C0C0C0" className="bg-text-disabled" />
        </div>
      </section>

      <section>
        <h3 className="text-heading mb-lg text-text-primary">Primary Accent</h3>
        <div className="grid grid-cols-3 gap-lg">
          <Swatch name="Start" token="accent-start" hex="#FF6B35" className="bg-accent-start" />
          <Swatch name="Mid" token="accent-mid" hex="#FF8E6B" className="bg-accent-mid" />
          <Swatch name="End" token="accent-end" hex="#FF5E7A" className="bg-accent-end" />
        </div>
      </section>

      <section>
        <h3 className="text-heading mb-lg text-text-primary">Secondary Accent</h3>
        <div className="grid max-w-[400px] grid-cols-2 gap-lg">
          <Swatch name="Start" token="secondary-start" hex="#3B82F6" className="bg-secondary-start" />
          <Swatch name="End" token="secondary-end" hex="#06B6D4" className="bg-secondary-end" />
        </div>
      </section>

      <section>
        <h3 className="text-heading mb-lg text-text-primary">Gradients</h3>
        <div className="grid grid-cols-3 gap-lg">
          <GradientSwatch name="Primary" token="--gradient-primary" cssVar="--gradient-primary" />
          <GradientSwatch name="Primary Hover" token="--gradient-primary-hover" cssVar="--gradient-primary-hover" />
          <GradientSwatch name="Secondary" token="--gradient-secondary" cssVar="--gradient-secondary" />
        </div>
      </section>

      <section>
        <h3 className="text-heading mb-lg text-text-primary">Borders</h3>
        <div className="grid grid-cols-4 gap-lg">
          <Swatch name="Default" token="border-default" hex="#E5E5E5" className="bg-border-default" />
          <Swatch name="Subtle" token="border-subtle" hex="#F0F0F0" className="bg-border-subtle" />
          <Swatch name="Focus" token="border-focus" hex="#FF6B35" className="bg-border-focus" />
          <Swatch name="Focus 2nd" token="border-focus-secondary" hex="#3B82F6" className="bg-border-focus-secondary" />
        </div>
      </section>
    </div>
  ),
};
