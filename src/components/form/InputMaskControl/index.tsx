import { Controller, get, useFormContext } from 'react-hook-form';
import { InputMaskControlProps } from './types';
import { IMaskInput } from 'react-imask';
import { cn } from '@/lib/utils';
import { Label } from '../label';

export function InputMaskControl({
  label,
  mask,
  name,
  className,
  ...props
}: InputMaskControlProps) {
  const { control, formState } = useFormContext();
  const { errors } = formState;
  const error = get(errors, name);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div>
          <Label htmlFor={name || props.id}>{label}</Label>
          <IMaskInput
            id={name || props.id}
            mask={mask}
            onAccept={(value) => field.onChange(value)}
            {...field}
            {...props}
            className={cn(
              'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
              className,
            )}
          />
          {error && (
            <p className="text-red-500 mt-1 text-sm">{error.message}</p>
          )}
        </div>
      )}
    />
  );
}
