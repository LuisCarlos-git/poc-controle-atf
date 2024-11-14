import { User } from '@/db/models/users';

export interface IDbUserServices {
  getUserByEmail(email: string): Promise<User | null>;
}
