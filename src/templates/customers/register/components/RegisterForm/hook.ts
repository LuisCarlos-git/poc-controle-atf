import { useForm } from 'react-hook-form';
import { RegisterFormValues } from './types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect, useState } from 'react';
import { citiesServices } from '@/services/cities';
import { useAction } from 'next-safe-action/hooks';
import { registerCustomer } from '@/actions/customers';
import { toast } from 'sonner';
import { registerSchema } from './schema';

export function useRegisterForm() {
  const { executeAsync, isPending } = useAction(registerCustomer);

  const methods = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
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

  const [cities, setCities] = useState<{ value: string; label: string }[]>([]);

  const { handleSubmit } = methods;
  const handleRegisterCustomer = handleSubmit(async (data) => {
    const result = await executeAsync(data);

    if (result?.data?.type === 'error') {
      toast.error(result.data.message);
      return;
    }

    toast.success(result?.data?.message);
  });

  const getCities = useCallback(async () => {
    const cities = await citiesServices.getCities();
    setCities(cities.map((city) => ({ value: city.name, label: city.name })));
  }, []);

  useEffect(() => {
    getCities();
  }, [getCities]);

  return {
    constants: {
      cities,
      isPending,
    },
    form: {
      methods,
      handleRegisterCustomer,
    },
  };
}
