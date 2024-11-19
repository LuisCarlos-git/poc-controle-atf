import {
  getCustomerData,
  registerCustomer,
  updateCustomerData,
} from '@/actions/customers';
import { useAction } from 'next-safe-action/hooks';

export function useCustomerRegisterAction() {
  const { executeAsync, isPending } = useAction(registerCustomer);

  return {
    registerCustomer: executeAsync,
    isRegistering: isPending,
  };
}

export function useGetCustomerData() {
  const { executeAsync, isPending } = useAction(getCustomerData);

  return {
    getCustomerData: executeAsync,
    isGettingCustomer: isPending,
  };
}

export function useUpdateCustomerData() {
  const { executeAsync, isPending } = useAction(updateCustomerData);

  return {
    updateCustomerData: executeAsync,
    isUpdatingCustomer: isPending,
  };
}
