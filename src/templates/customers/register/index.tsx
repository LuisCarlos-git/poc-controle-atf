import { RegisterForm } from './components/RegisterForm';

export function RegisterTemplate() {
  return (
    <div className="container max-w-[1280px] mx-auto">
      <div>
        <h1 className="text-2xl font-bold mb-8">Registrar novo cliente</h1>
      </div>
      <RegisterForm />
    </div>
  );
}
