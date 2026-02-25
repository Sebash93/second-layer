import { cn } from '@/lib/utils';

interface HeroBlobFallbackProps {
  className?: string;
}

export function HeroBlobFallback({
  className,
}: HeroBlobFallbackProps): React.JSX.Element {
  return (
    <div
      className={cn('pointer-events-none absolute inset-0', className)}
      aria-hidden="true"
    >
      {/* Primary warm glow — anchored to right edge, half visible */}
      <div
        className="absolute top-1/3 -right-[15%] h-[50%] w-[40%] opacity-[0.10] blur-[80px]"
        style={{
          background: 'var(--gradient-primary)',
          borderRadius: '50%',
        }}
      />
      {/* Morphing accent — overlaps right edge, subtle motion */}
      <div
        className="absolute top-1/2 -right-[10%] h-[200px] w-[200px] -translate-y-1/2 opacity-[0.08] blur-[60px]"
        style={{
          background: 'var(--gradient-primary)',
          borderRadius: '50%',
          animation:
            'blob-morph 12s ease-in-out infinite, blob-float 8s ease-in-out infinite',
        }}
      />
      {/* Secondary cool accent — smaller, below primary */}
      <div
        className="absolute bottom-[15%] -right-[8%] h-[25%] w-[20%] opacity-[0.06] blur-[70px]"
        style={{
          background: 'var(--gradient-secondary)',
          borderRadius: '50%',
        }}
      />
    </div>
  );
}
