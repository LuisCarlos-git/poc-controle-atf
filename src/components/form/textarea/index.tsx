import * as React from 'react';

import { cn } from '@/lib/utils';
import { TextareaProps } from './types';
import { Label } from '../label';
import { get, useFormContext } from 'react-hook-form';

export function Textarea({ className, name, label, ...props }: TextareaProps) {
  const { register, formState } = useFormContext();
  const { errors } = formState;
  const error = get(errors, name);

  return (
    <div>
      <Label htmlFor={name || props.id}>{label}</Label>
      <textarea
        id={name || props.id}
        className={cn(
          'flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          className,
        )}
        {...props}
        {...register(name)}
      />
      {error && <p className="text-red-500 mt-1 text-sm">{error.message}</p>}
    </div>
  );
}
