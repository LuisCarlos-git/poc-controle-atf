import { db } from '@/db/config/db';
import { usersTable } from '@/db/schema';
import { IDbUserServices, User } from '@/types/db/user';
import { eq } from 'drizzle-orm';

export class DbUserService implements IDbUserServices {
  async getUserById(id: string): Promise<Omit<User, 'password'> | null> {
    const user = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.id, id));

    if (user.length === 0) {
      return null;
    }

    return {
      id: user[0].id,
      email: user[0].email,
      name: user[0].name,
      createdAt: user[0].createdAt,
      updatedAt: user[0].updatedAt,
      employees: user[0].employees,
    };
  }
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
