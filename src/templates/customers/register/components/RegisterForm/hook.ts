import { useForm } from 'react-hook-form';
import { RegisterFormValues } from './types';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from './schema';

export function useRegisterForm() {
  const methods = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });
  const { handleSubmit } = methods;
  const handleRegisterCustomer = handleSubmit((data) => console.log(data));

  return {
    form: {
      methods,
      handleRegisterCustomer,
    },
  };
}
