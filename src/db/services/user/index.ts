import { db } from '@/db/config/db';
import { User } from '@/db/models/users';
import { usersTable } from '@/db/schema';
import { IDbUserServices } from '@/types/db/user';
import { eq } from 'drizzle-orm';

export class DbUserService implements IDbUserServices {
  async getUserByEmail(email: string): Promise<User | null> {
    const user = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email));

    if (user.length === 0) {
      return null;
    }

    return user[0];
  }
}

export const dbUserServices = new DbUserService();
