import { z } from 'zod';
import { signInSchema } from './schema';

export type LoginFormValues = z.infer<typeof signInSchema>;
