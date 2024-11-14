import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormValues } from './types';
import { signInSchema } from './schema';
import { authServices } from '@/services/auth';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export function useLoginPage() {
  const router = useRouter();
  const methods = useForm<LoginFormValues>({
    resolver: zodResolver(signInSchema),
  });

  const { handleSubmit } = methods;
  const { isSubmitting } = methods.formState;

  const handleSignIn = handleSubmit(async (data) => {
    try {
      await authServices.signIn(data);
      router.push('/dashboard');
    } catch {
      toast.error('Email ou senha inválidos');
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
