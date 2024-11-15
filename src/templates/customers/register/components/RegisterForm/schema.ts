import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(1, { message: 'Nome obrigatório' }),
  email: z.string().email({ message: 'E-mail inválido' }),
  phone: z.string().min(1, { message: 'Telefone obrigatório' }),
  adreess: z.object({
    farmName: z.string().min(1, { message: 'Nome da fazenda obrigatório' }),
    postalCode: z.string().min(1, { message: 'CEP obrigatório' }),
    city: z.string().min(1, { message: 'Cidade obrigatória' }),
    description: z.string().min(1, { message: 'Descrição obrigatória' }),
  }),
});
