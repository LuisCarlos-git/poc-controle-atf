'use client';

import { useCustomerForm } from './hook';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/form/textarea';
import { InputMaskControl } from '@/components/form/InputMaskControl';
import { Combobox } from '@/components/form/combobox';
import { Form } from '@/components/form/form';
import { Input } from '@/components/form/input';

export function CustomerForm() {
  const { form, constants } = useCustomerForm();

  return (
    <Form methods={form.methods} onSubmit={form.handleSubmitForm}>
      {constants.isGettingCustomer && <p>Carregando dados do cliente...</p>}
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold">Dados pessoais do cliente</h2>
        <Input name="name" label="Nome do cliente*" />
        <div className="flex gap-2 w-full">
          <Input name="email" label="E-mail do cliente*" />
          <InputMaskControl
            mask="(00) 00000-0000"
            className="max-w-64"
            name="phoneNumber"
            label="Telefone de contato*"
          />
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-2">
        <h2 className="text-lg font-semibold">Endereço</h2>
        <Input name="address.farmName" label="Nome da fazenda*" />
        <div className="flex gap-2 w-full items-baseline">
          <InputMaskControl
            mask="00000-000"
            name="address.postalCode"
            label="CEP*"
          />
          <Combobox
            options={constants.cities}
            name="address.city"
            label="Cidade*"
            placeholder="Selecione uma cidade"
          />
        </div>
        <Textarea name="address.description" label="Descrição*" />
      </div>

      <div className="flex justify-end">
        <Button isLoading={constants.isSubmitting} className="mt-9">
          {constants.isEditMode ? 'Salvar' : 'Cadastrar'}
        </Button>
      </div>
    </Form>
  );
}
