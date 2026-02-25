'use client';

import { useId } from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const trackVariants = cva(
  'relative h-[24px] w-[44px] cursor-pointer rounded-[12px] border-none p-0 transition-colors duration-300 focus-visible:ring-[3px] focus-visible:ring-accent-tint-12 focus-visible:outline-none',
  {
    variants: {
      checked: {
        true: '',
        false: 'bg-border-default',
      },
      disabled: {
        true: 'cursor-not-allowed opacity-50',
        false: '',
      },
    },
    defaultVariants: {
      checked: false,
      disabled: false,
    },
  },
);

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  id?: string;
}

const knobBaseClasses =
  'block w-[20px] h-[20px] rounded-full bg-white absolute top-[2px] left-[2px] shadow-[0_1px_4px_rgba(0,0,0,0.15)] transition-transform duration-300 ease-[var(--ease-out)] pointer-events-none';

export function Toggle({
  checked,
  onChange,
  label,
  disabled = false,
  id: idProp,
}: ToggleProps): React.JSX.Element {
  const generatedId = useId();
  const id = idProp ?? generatedId;

  const trackStyle = checked
    ? { backgroundImage: 'var(--gradient-primary)' }
    : undefined;

  function handleClick(): void {
    if (!disabled) {
      onChange(!checked);
    }
  }

  return (
    <div className="flex items-center gap-md">
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label ?? 'Toggle'}
        disabled={disabled}
        onClick={handleClick}
        className={cn(trackVariants({ checked, disabled }))}
        style={trackStyle}
      >
        <span className={cn(knobBaseClasses, checked && 'translate-x-[20px]')} />
      </button>
      {label && (
        <label
          htmlFor={id}
          className={cn(
            'text-[14px] font-medium text-text-primary',
            disabled ? 'cursor-not-allowed' : 'cursor-pointer',
          )}
        >
          {label}
        </label>
      )}
    </div>
  );
}
