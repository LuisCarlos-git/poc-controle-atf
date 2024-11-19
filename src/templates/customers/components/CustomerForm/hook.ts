import { useForm } from 'react-hook-form';
import { CustomerFormValues } from './types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect, useState } from 'react';
import { citiesServices } from '@/services/cities';

import { toast } from 'sonner';
import { customerSchema } from './schema';
import {
  useCustomerRegisterAction,
  useGetCustomerData,
  useUpdateCustomerData,
} from '@/hooks/actions/customer';
import { useParams, useRouter } from 'next/navigation';

export function useCustomerForm() {
  const { customerId } = useParams<{ customerId: string }>();
  const router = useRouter();
  const { registerCustomer, isRegistering } = useCustomerRegisterAction();
  const { getCustomerData, isGettingCustomer } = useGetCustomerData();
  const { updateCustomerData, isUpdatingCustomer } = useUpdateCustomerData();

  const methods = useForm<CustomerFormValues>({
    resolver: zodResolver(customerSchema),
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: undefined,
      address: {
        farmName: '',
        postalCode: undefined,
        city: '',
        description: '',
      },
    },
  });

  const isEditMode = !!customerId;

  const [cities, setCities] = useState<{ value: string; label: string }[]>([]);

  const { handleSubmit, setValue, reset } = methods;

  const handleRegisterCustomer = useCallback(
    async (data: CustomerFormValues) => {
      const result = await registerCustomer(data);

      if (result?.data?.type === 'error') {
        toast.error(result.data.message);
        return;
      }

      toast.success(result?.data?.message);

      reset();
    },
    [registerCustomer, reset],
  );

  const handleEditCustomer = useCallback(
    async (data: CustomerFormValues) => {
      const result = await updateCustomerData({ ...data, id: customerId });
      if (result?.data?.type === 'error') {
        toast.error(result.data.message);
        return;
      }

      toast.success(result?.data?.message);
      router.push('/customers');
    },
    [customerId, router, updateCustomerData],
  );

  const handleSubmitForm = handleSubmit(
    isEditMode ? handleEditCustomer : handleRegisterCustomer,
  );

  const getCities = useCallback(async () => {
    const cities = await citiesServices.getCities();
    setCities(cities.map((city) => ({ value: city.name, label: city.name })));
  }, []);

  const handleGetCustomerData = useCallback(async () => {
    const result = await getCustomerData({ customerId });

    if (!result?.data?.customer || result.data.type === 'error') {
      toast.error(result?.data?.message);
      return;
    }

    setValue('name', result.data.customer.name);
    setValue('email', result.data.customer.email);
    setValue('phoneNumber', result.data.customer.phoneNumber);
    setValue('address', result.data.customer.address);
  }, [customerId, getCustomerData, setValue]);

  useEffect(() => {
    getCities();
  }, [getCities]);

  useEffect(() => {
    if (customerId) {
      handleGetCustomerData();
    }
  }, [customerId, handleGetCustomerData]);

  return {
    constants: {
      isEditMode,
      cities,
      isSubmitting: isUpdatingCustomer || isRegistering,
      isGettingCustomer,
    },
    form: {
      methods,
      handleSubmitForm,
    },
  };
}
