interface DotListProps {
  items: string[];
  className?: string;
}

export function DotList({ items, className = '' }: DotListProps): React.JSX.Element {
  return (
    <ul className={`list-none p-0 ${className}`.trim()}>
      {items.map((item, index) => (
        <li
          key={index}
          className="group flex items-center gap-[10px] border-b border-border-subtle py-[8px] font-body text-[15px] font-medium text-text-primary transition-all duration-200 ease-[ease] last:border-b-0 hover:pl-sm hover:text-accent-start"
        >
          <span
            className="h-[6px] w-[6px] shrink-0 rounded-full bg-border-default transition-all duration-200 ease-[ease] group-hover:[background-image:var(--gradient-primary)]"
            aria-hidden="true"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}
