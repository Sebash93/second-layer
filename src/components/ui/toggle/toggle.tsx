'use client';

import { useId } from 'react';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  id?: string;
}

const trackBaseClasses =
  'w-[44px] h-[24px] rounded-[12px] relative cursor-pointer transition-colors duration-300 border-none p-0 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-accent-tint-12';

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

  const trackClasses = `${trackBaseClasses} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${!checked ? 'bg-border-default' : ''}`.trim();
  const trackStyle = checked
    ? { backgroundImage: 'var(--gradient-primary)' }
    : undefined;

  const knobClasses = `${knobBaseClasses} ${checked ? 'translate-x-[20px]' : ''}`.trim();

  function handleClick(): void {
    if (!disabled) {
      onChange(!checked);
    }
  }

  const labelClasses = `text-[14px] font-medium text-text-primary ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`;

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
        className={trackClasses}
        style={trackStyle}
      >
        <span className={knobClasses} />
      </button>
      {label && (
        <label htmlFor={id} className={labelClasses}>
          {label}
        </label>
      )}
    </div>
  );
}
