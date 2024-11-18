import { getCustomer, registerCustomer } from '@/actions/customers';
import { useAction } from 'next-safe-action/hooks';

export function useCustomerRegisterAction() {
  const { executeAsync, isPending } = useAction(registerCustomer);

  return {
    registerCustomer: executeAsync,
    isRegistering: isPending,
  };
}

export function useGetCustomer() {
  const { executeAsync, isPending } = useAction(getCustomer);

  return {
    getCustomer: executeAsync,
    isGettingCustomer: isPending,
  };
}
