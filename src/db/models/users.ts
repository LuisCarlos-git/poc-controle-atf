import { InferSelectModel } from 'drizzle-orm';
import { customersTable, usersTable } from '../schema';

export type User = InferSelectModel<typeof usersTable>;
export type Customer = InferSelectModel<typeof customersTable>;

export type Employee = {
  id: string;
  name: string;
  email: string;
};
export type CustomerAddress = {
  farmName: string;
  city: string;
  postalCode: string;
  description: string;
};
