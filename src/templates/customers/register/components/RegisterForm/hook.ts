import { useForm } from 'react-hook-form';
import { RegisterFormValues } from './types';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from './schema';
import { useCallback, useEffect, useState } from 'react';
import { citiesServices } from '@/services/cities';

export function useRegisterForm() {
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
  const handleRegisterCustomer = handleSubmit((data) => console.log(data));

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
    },
    form: {
      methods,
      handleRegisterCustomer,
    },
  };
}
