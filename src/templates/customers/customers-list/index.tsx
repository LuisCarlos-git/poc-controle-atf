import { getAllCustomers } from '@/actions/customers';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export async function CustomersListTemplate() {
  const result = await getAllCustomers();

  return (
    <div className="container max-w-[1280px] mx-auto">
      <div>
        <h1 className="text-2xl font-bold mb-8">Clientes</h1>
      </div>
      <div className="flex flex-wrap gap-4">
        {result?.data?.customers?.map((customer) => (
          <Link
            prefetch
            className="max-w-80 w-full"
            key={customer.id}
            href={`/customers/edit/${customer.id}`}
          >
            <Card className="flex justify-between items-center pr-4">
              <CardHeader>
                <CardTitle className="truncate max-w-52">
                  {customer.name}
                </CardTitle>
                <CardDescription>{customer.email}</CardDescription>
              </CardHeader>
              <ArrowRight />
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
