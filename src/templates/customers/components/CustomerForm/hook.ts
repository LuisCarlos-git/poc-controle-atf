import { useForm } from 'react-hook-form';
import { CustomerFormValues } from './types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect, useState } from 'react';
import { citiesServices } from '@/services/cities';

import { toast } from 'sonner';
import { customerSchema } from './schema';
import {
  useCustomerRegisterAction,
  useGetCustomer,
} from '@/hooks/actions/customer';
import { useParams } from 'next/navigation';

export function useCustomerForm() {
  const { customerId } = useParams<{ customerId: string }>();
  const { registerCustomer, isRegistering } = useCustomerRegisterAction();
  const { getCustomer, isGettingCustomer } = useGetCustomer();

  const methods = useForm<CustomerFormValues>({
    resolver: zodResolver(customerSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      adreess: {
        farmName: '',
        postalCode: '',
        city: '',
        description: '',
      },
    },
  });

  const isEditMode = !!customerId;

  const [cities, setCities] = useState<{ value: string; label: string }[]>([]);

  const { handleSubmit, setValue } = methods;

  const handleRegisterCustomer = useCallback(
    async (data: CustomerFormValues) => {
      const result = await registerCustomer(data);

      if (result?.data?.type === 'error') {
        toast.error(result.data.message);
        return;
      }

      toast.success(result?.data?.message);
    },
    [registerCustomer],
  );

  const handleEditCustomer = useCallback((data: CustomerFormValues) => {
    console.log(data);
  }, []);

  const handleSubmitForm = handleSubmit(
    isEditMode ? handleEditCustomer : handleRegisterCustomer,
  );

  const getCities = useCallback(async () => {
    const cities = await citiesServices.getCities();
    setCities(cities.map((city) => ({ value: city.name, label: city.name })));
  }, []);

  const handleGetCustomerData = useCallback(async () => {
    const result = await getCustomer({ customerId });

    if (!result?.data?.customer || result.data.type === 'error') return;

    setValue('name', result.data.customer.name);
    setValue('email', result.data.customer.email);
    setValue('phone', result.data.customer.phoneNumber);
    setValue('adreess', result.data.customer.address);
  }, [customerId, getCustomer, setValue]);

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
      cities,
      isRegistering,
      isGettingCustomer,
    },
    form: {
      methods,
      handleSubmitForm,
    },
  };
}
