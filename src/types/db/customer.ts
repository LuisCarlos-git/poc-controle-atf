import { customersTable } from '@/db/schema';
import { InferInsertModel, InferSelectModel } from 'drizzle-orm';

export type Customer = InferSelectModel<typeof customersTable>;
export type CustomerInsert = InferInsertModel<typeof customersTable>;

export type CustomerAddress = {
  farmName: string;
  city: string;
  postalCode: string;
  description: string;
};

export interface IDbCustomerServices {
  registerCustomer(data: CustomerInsert): Promise<void>;
  getAllCustomers(userId: string): Promise<Customer[]>;
}
