'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { get, useController } from 'react-hook-form';
import { ComboboxProps } from './types';
import { Label } from '../label';

export function Combobox({ label, name, options, placeholder }: ComboboxProps) {
  const [open, setOpen] = React.useState(false);

  const {
    field: { value, onChange },
    formState: { errors },
  } = useController({
    name,
  });

  const error = get(errors, name);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <div className="flex flex-col w-full">
        <Label>{label}</Label>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between h-9 mt-1 py-1 text-base"
          >
            {value
              ? options.find((framework) => framework.value === value)?.label
              : placeholder}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder={placeholder} />
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {options.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      onChange(currentValue === value ? '' : currentValue);
                      setOpen(false);
                    }}
                  >
                    {framework.label}
                    <Check
                      className={cn(
                        'ml-auto',
                        value === framework.value ? 'opacity-100' : 'opacity-0',
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </div>
    </Popover>
  );
}
