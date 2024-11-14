import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormValues } from './types';
import { signInSchema } from './schema';
import { authServices } from '@/services/auth';

export function useLoginPage() {
  const methods = useForm<LoginFormValues>({
    resolver: zodResolver(signInSchema),
  });

  const { handleSubmit } = methods;
  const { isSubmitting } = methods.formState;

  const handleSignIn = handleSubmit(async (data) => {
    try {
      const res = await authServices.signIn(data);

      console.log({ res });
    } catch (error) {
      console.error(error);
    }
  });

  return {
    form: {
      methods,
      handleSignIn,
      isSubmitting,
    },
  };
}
