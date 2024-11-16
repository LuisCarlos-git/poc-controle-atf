import { db } from '@/db/config/db';
import { customersTable } from '@/db/schema';
import {
  Customer,
  CustomerInsert,
  IDbCustomerServices,
} from '@/types/db/customer';
import { and, eq } from 'drizzle-orm';

class DbCustomerServices implements IDbCustomerServices {
  async getCustomerByEmail(email: string, userId: string): Promise<Customer[]> {
    return await db
      .select()
      .from(customersTable)
      .where(
        and(eq(customersTable.email, email), eq(customersTable.userId, userId)),
      );
  }
  async getAllCustomers(userId: string): Promise<Customer[]> {
    return await db
      .select()
      .from(customersTable)
      .where(eq(customersTable.userId, userId));
  }
  async registerCustomer(data: CustomerInsert): Promise<void> {
    await db.insert(customersTable).values(data);
  }
}

export const dbCustomerServices = new DbCustomerServices();
