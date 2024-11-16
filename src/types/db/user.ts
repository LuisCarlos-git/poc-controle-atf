import { usersTable } from '@/db/schema';

import { InferSelectModel } from 'drizzle-orm';

export type User = InferSelectModel<typeof usersTable>;

export type Employee = {
  id: string;
  name: string;
  email: string;
};

export interface IDbUserServices {
  getUserByEmail(email: string): Promise<User | null>;
  getUserById(id: string): Promise<Omit<User, 'password'> | null>;
}
