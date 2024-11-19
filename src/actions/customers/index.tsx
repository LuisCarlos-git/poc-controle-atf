'use server';

import { dbCustomerServices } from '@/db/services/customer';
import { createSafeActionClient } from 'next-safe-action';
import {
  getCustomerSchema,
  registerSchema,
  updateCustomerSchema,
} from './schema';
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

      if (!!customerExists) {
        return {
          message: 'Cliente ja cadastrado',
          type: 'error',
        };
      }

      await dbCustomerServices.registerCustomer({
        address: customer.address,
        email: customer.email,
        name: customer.name,
        phoneNumber: customer.phoneNumber,
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

export const getCustomerData = customerAction
  .schema(getCustomerSchema)
  .action(async ({ parsedInput: { customerId } }) => {
    const user = await getSession();
    if (!user) {
      return {
        message: 'Falha ao buscar os dados do cliente!',
        type: 'error',
      };
    }

    try {
      const customer = await dbCustomerServices.getCustomerById(
        customerId,
        user.id,
      );

      return {
        customer,
      };
    } catch (e) {
      return {
        message: 'Falha ao buscar os dados do cliente',
        type: 'error',
        detail: e,
      };
    }
  });

export const updateCustomerData = customerAction
  .schema(updateCustomerSchema)
  .action(async ({ parsedInput }) => {
    const user = await getSession();

    if (!user) {
      return {
        message: 'Falha ao atualizar os dados do cliente!',
        type: 'error',
      };
    }

    try {
      await dbCustomerServices.updateCustomer(user.id, parsedInput);

      return {
        message: 'Cliente atualizado com sucesso!',
        type: 'success',
      };
    } catch (e) {
      return {
        message: 'Falha ao atualizar os dados do cliente!',
        type: 'error',
        detail: e,
      };
    }
  });
