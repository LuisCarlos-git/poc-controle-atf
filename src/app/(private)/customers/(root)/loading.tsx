import { TableSkeleton } from '@/components/skeletons/customer-page-list';

export default function LoadingCustomersPage() {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold mb-8">Clientes</h1>
      </div>
      <TableSkeleton />
    </>
  );
}
