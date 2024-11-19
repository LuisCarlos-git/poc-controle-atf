import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phoneNumber: z.string().min(1),
  address: z.object({
    farmName: z.string().min(1),
    postalCode: z.string().min(1),
    city: z.string().min(1),
    description: z.string().min(1),
  }),
});

export const getCustomerSchema = z.object({
  customerId: z.string().min(1),
});

export const updateCustomerSchema = z.object({
  id: z.string().min(1),
  name: z.string(),
  email: z.string().email(),
  phoneNumber: z.string(),
  address: z.object({
    farmName: z.string(),
    postalCode: z.string(),
    city: z.string(),
    description: z.string(),
  }),
});
