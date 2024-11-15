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
      const customerExists = await dbCustomerServices.getCustomerByEmail(
        customer.email,
        user.id,
      );

      if (customerExists.length > 0) {
        return {
          message: 'Cliente ja cadastrado',
          type: 'error',
        };
      }

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

export const getAllCustomers = customerAction.action(async () => {
  const user = await getSession();

  if (!user) {
    return {
      message: 'Não foi possivel listar os seus clientes!',
      type: 'error',
    };
  }

  try {
    const customers = await dbCustomerServices.getAllCustomers(user.id);

    return {
      customers,
    };
  } catch (e) {
    return {
      message: 'Não foi possivel listar os seus clientes',
      type: 'error',
      detail: e,
    };
  }
});
