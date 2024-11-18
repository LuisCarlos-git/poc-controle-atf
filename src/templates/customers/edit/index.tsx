import Link from 'next/link';
import { CustomerForm } from '../components/CustomerForm';
import { ArrowLeft } from 'lucide-react';

export function EditTemplate() {
  return (
    <div className="container max-w-[1280px] mx-auto">
      <div>
        <h1 className="text-2xl font-bold mb-8 flex items-center gap-4">
          <Link href="/customers">
            <ArrowLeft />
          </Link>
          Editar Cliente
        </h1>
      </div>
      <CustomerForm />
    </div>
  );
}
