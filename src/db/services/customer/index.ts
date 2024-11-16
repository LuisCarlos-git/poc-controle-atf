import { db } from '@/db/config/db';
import { customersTable } from '@/db/schema';
import { CustomerInsert, IDbCustomerServices } from '@/types/db/customer';

class DbCustomerServices implements IDbCustomerServices {
  async registerCustomer(data: CustomerInsert): Promise<void> {
    await db.insert(customersTable).values(data);
  }
}

export const dbCustomerServices = new DbCustomerServices();
