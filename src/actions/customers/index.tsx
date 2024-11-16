'use server';

import { dbCustomerServices } from '@/db/services/customer';
import { createSafeActionClient } from 'next-safe-action';
import { registerSchema } from './schema';
import { getSession } from '@/utils/auth/session';

const customerAction = createSafeActionClient();

export const registerCustomer = customerAction
  .schema(registerSchema)
  .action(async ({ parsedInput: customer }) => {
    const user = await getSession();

    if (!user) {
      return {
        message: 'Nao foi possivel registrar o cliente',
        type: 'error',
      };
    }

    try {
      await dbCustomerServices.registerCustomer({
        address: customer.adreess,
        email: customer.email,
        name: customer.name,
        phoneNumber: customer.phone,
        userId: user?.id,
      });

      return {
        message: 'Cliente registrado com sucesso',
        type: 'success',
      };
    } catch (e) {
      return {
        message: 'Não foi possivel registrar o cliente',
        type: 'error',
        detail: e,
      };
    }
  });
