'use client';

import { Form, Input } from '@/components/form';
import { useRegisterForm } from './hook';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/form/textarea';
import { InputMaskControl } from '@/components/form/InputMaskControl';

export function RegisterForm() {
  const { form } = useRegisterForm();
  return (
    <Form methods={form.methods} onSubmit={form.handleRegisterCustomer}>
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold">Dados pessoais do cliente</h2>
        <Input name="name" label="Nome do cliente*" />
        <div className="flex gap-2 w-full">
          <Input name="email" label="E-mail do cliente*" />
          <InputMaskControl
            mask="(00) 00000-0000"
            className="max-w-64"
            name="phone"
            label="Telefone de contato*"
          />
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-2">
        <h2 className="text-lg font-semibold">Endereço</h2>
        <Input name="adreess.farmName" label="Nome da fazenda*" />
        <div className="flex gap-2 w-full">
          <InputMaskControl
            mask="00000-000"
            name="adreess.postalCode"
            label="CEP*"
          />
          <Input name="adreess.city" label="Cidade*" />
        </div>
        <Textarea name="adreess.description" label="Descrição*" />
      </div>

      <div className="flex justify-end">
        <Button className="mt-9">Cadastrar</Button>
      </div>
    </Form>
  );
}
