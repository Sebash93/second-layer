import { cn } from '@/lib/utils';

interface NumberedListItem {
  title: string;
  description?: string;
}

interface NumberedListProps {
  items: NumberedListItem[];
  className?: string;
}

export function NumberedList({ items, className }: NumberedListProps): React.JSX.Element {
  return (
    <ol className={cn('m-0 list-none p-0', className)}>
      {items.map((item, index) => (
        <li
          key={item.title}
          className="flex items-start gap-md border-b border-border-subtle py-md last:border-b-0"
        >
          <span
            className="inline-flex h-[32px] w-[32px] min-w-[32px] shrink-0 items-center justify-center rounded-full font-body text-[13px] font-bold text-white shadow-[0_4px_16px_rgba(255,107,53,0.3)]"
            style={{ backgroundImage: 'var(--gradient-primary)' }}
            aria-hidden="true"
          >
            {index + 1}
          </span>
          <div className="pt-[5px]">
            <span className="font-body text-[15px] leading-[1.4] font-medium text-text-primary">
              {item.title}
            </span>
            {item.description && (
              <p className="mt-sm font-body text-[14px] leading-[1.5] text-text-body">
                {item.description}
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
