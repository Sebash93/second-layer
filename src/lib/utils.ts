import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      // Custom typography classes defined in globals.css — these are NOT
      // Tailwind text-* utilities, so they must not conflict with text colors.
      'custom-typography': [
        'text-hero',
        'text-display',
        'text-heading',
        'text-title',
        'text-body-lg',
        'text-body',
        'text-body-sm',
        'text-caption',
        'text-overline',
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
