import * as React from 'react';

import { cn } from '@/lib/utils';
import { get, useFormContext } from 'react-hook-form';
import { InputProps } from './types';
import { Label } from '../label';

export function Input({ className, type, name, label, ...props }: InputProps) {
  const { register, formState } = useFormContext();
  const { errors } = formState;
  const error = get(errors, name);

  return (
    <div className={cn('w-full', className)}>
      <Label htmlFor={name || props.id}>{label}</Label>
      <input
        id={name || props.id}
        type={type}
        className={cn(
          'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        )}
        {...props}
        {...register(name)}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
}
