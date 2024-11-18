import { CustomerForm } from '../components/CustomerForm';

export function RegisterTemplate() {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold mb-8">Registrar novo cliente</h1>
      </div>
      <CustomerForm />
    </div>
  );
}
