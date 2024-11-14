import { FieldValues, FormProvider } from 'react-hook-form';
import { FormProps } from './types';

export function Form<T extends FieldValues>({
  onSubmit,
  children,
  className,
  methods,
}: FormProps<T>) {
  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit} className={className}>
        {children}
      </form>
    </FormProvider>
  );
}
