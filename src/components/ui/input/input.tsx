'use client';

import { type ComponentPropsWithRef, useId } from 'react';

interface InputProps extends ComponentPropsWithRef<'input'> {
  label?: string;
  error?: string;
}

const inputBaseClasses =
  'w-full font-body text-[14px] text-text-primary bg-bg-primary border border-border-default rounded-sm py-[12px] px-md outline-none transition-all duration-[250ms] ease-[ease] placeholder:text-text-disabled focus:border-accent-start focus:shadow-[0_0_0_3px_var(--color-accent-tint-12)]';

export function Input({
  label,
  error,
  id: idProp,
  className = '',
  ...rest
}: InputProps): React.JSX.Element {
  const generatedId = useId();
  const id = idProp ?? generatedId;
  const errorId = `${id}-error`;

  const inputClasses = `${inputBaseClasses} ${error ? 'border-accent-start' : ''} ${className}`.trim();

  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="text-[14px] font-medium text-text-primary mb-[6px] block"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={inputClasses}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        {...rest}
      />
      {error && (
        <p
          id={errorId}
          className="text-[12px] font-semibold tracking-[0.08em] uppercase text-accent-start mt-[6px]"
        >
          {error}
        </p>
      )}
    </div>
  );
}
