import { z } from 'zod';
import { customerSchema } from './schema';

export type CustomerFormValues = z.infer<typeof customerSchema>;
