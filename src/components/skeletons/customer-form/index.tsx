import { Skeleton } from '@/components/ui/skeleton';

export function CustomerSkeleton() {
  return (
    <div>
      <div className="w-full">
        <Skeleton className="h-12 w-full" />
        <div className="flex gap-2 mt-4">
          <Skeleton className="w-full h-12" />
          <Skeleton className="w-64 h-12 " />
        </div>
      </div>
      <div className="w-full mt-8">
        <Skeleton className="h-12 w-full" />
        <div className="flex gap-2 mt-4">
          <Skeleton className="w-64 h-12 " />
          <Skeleton className="w-full h-12" />
        </div>
        <Skeleton className="h-16 w-full mt-4" />
      </div>
      <div className="flex justify-end mt-8">
        <Skeleton className="h-12 w-32" />
      </div>
    </div>
  );
}
