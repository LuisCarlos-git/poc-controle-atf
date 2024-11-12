import { InferSelectModel } from 'drizzle-orm';
import { usersTable } from '../schema';

export type User = InferSelectModel<typeof usersTable>;
