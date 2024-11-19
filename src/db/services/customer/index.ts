import { db } from '@/db/config/db';
import { customersTable } from '@/db/schema';
import {
  Customer,
  CustomerInsert,
  IDbCustomerServices,
  UpdateCustomer,
} from '@/types/db/customer';
import { and, eq } from 'drizzle-orm';

class DbCustomerServices implements IDbCustomerServices {
  async updateCustomer(userId: string, data: UpdateCustomer): Promise<void> {
    await db
      .update(customersTable)
      .set({
        address: {
          farmName: data.address?.farmName,
          city: data.address?.city,
          postalCode: data.address?.postalCode,
          description: data.address?.description,
        },
        email: data.email,
        name: data.name,
        phoneNumber: data.phoneNumber,
      })
      .where(
        and(eq(customersTable.id, data.id!), eq(customersTable.userId, userId)),
      );
  }
  async getCustomerById(
    customerId: string,
    userId: string,
  ): Promise<Customer | null> {
    const customer = await db
      .select()
      .from(customersTable)
      .where(
        and(
          eq(customersTable.id, customerId),
          eq(customersTable.userId, userId),
        ),
      );

    if (customer.length === 0) return null;

    return customer[0];
  }
  async getCustomerByEmail(
    email: string,
    userId: string,
  ): Promise<Customer[] | null> {
    const customer = await db
      .select()
      .from(customersTable)
      .where(
        and(eq(customersTable.email, email), eq(customersTable.userId, userId)),
      );

    if (customer.length === 0) return null;

    return customer;
  }
  async getAllCustomers(userId: string): Promise<Customer[] | null> {
    const customers = await db
      .select()
      .from(customersTable)
      .where(eq(customersTable.userId, userId));

    if (customers.length === 0) return null;

    return customers;
  }
  async registerCustomer(data: CustomerInsert): Promise<void> {
    await db.insert(customersTable).values(data);
  }
}

export const dbCustomerServices = new DbCustomerServices();
