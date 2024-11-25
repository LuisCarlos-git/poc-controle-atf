import { getAllCustomers } from '@/actions/customers';
import { DataTable } from './components/customers-table';
import { columns } from './components/customers-table/constants';

export async function CustomersListTemplate() {
  const result = await getAllCustomers();

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold mb-8">Clientes</h1>
      </div>
      <div className="w-full">
        {result?.data?.customers && (
          <DataTable columns={columns} data={result.data.customers} />
        )}
      </div>
    </div>
  );
}
