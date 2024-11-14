import { FieldValues, UseFormReturn } from 'react-hook-form';

export type FormProps<T extends FieldValues> = {
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  className?: string;
  methods: UseFormReturn<T>;
  children: React.ReactNode;
};
