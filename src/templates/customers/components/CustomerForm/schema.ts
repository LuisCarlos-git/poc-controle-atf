import { z } from 'zod';

export const customerSchema = z.object({
  name: z
    .string({ message: 'Nome obrigatório' })
    .min(1, { message: 'Nome obrigatório' }),
  email: z
    .string({ message: 'E-mail obrigatório' })
    .email({ message: 'E-mail inválido' }),
  phoneNumber: z
    .string({ message: 'Telefone obrigatório' })
    .min(1, { message: 'Telefone obrigatório' }),
  address: z.object({
    farmName: z
      .string({ message: 'Nome da fazenda obrigatório' })
      .min(1, { message: 'Nome da fazenda obrigatório' }),
    postalCode: z
      .string({ message: 'CEP obrigatório' })
      .min(1, { message: 'CEP obrigatório' }),
    city: z
      .string({ message: 'Cidade obrigatória' })
      .min(1, { message: 'Cidade obrigatória' }),
    description: z
      .string({ message: 'Descrição obrigatória' })
      .min(1, { message: 'Descrição obrigatória' }),
  }),
});
