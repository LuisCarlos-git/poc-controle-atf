import { Skeleton } from '@/components/ui/skeleton';

export function TableSkeleton() {
  return (
    <div className="w-full flex flex-col gap-3">
      <Skeleton className="h-11 w-72" />
      <Skeleton className="h-11" />
      <Skeleton className="h-11" />
      <Skeleton className="h-11" />
      <Skeleton className="h-11" />
    </div>
  );
}
