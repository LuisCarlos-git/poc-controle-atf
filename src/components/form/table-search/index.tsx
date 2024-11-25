import { cn } from '@/lib/utils';
import { TableSearchProps } from './types';

export function TableSearch({ onChange, value }: TableSearchProps) {
  return (
    <div className="mb-4">
      <input
        className={cn(
          'flex h-9 min-w-72 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        )}
        type="text"
        placeholder="Nome do cliente"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}
