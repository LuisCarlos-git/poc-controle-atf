import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  adreess: z.object({
    farmName: z.string().min(1),
    postalCode: z.string().min(1),
    city: z.string().min(1),
    description: z.string().min(1),
  }),
});
