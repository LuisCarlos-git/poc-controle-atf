'use client';

import { User } from '@/db/models/users';
import { createContext } from 'react';

export const SessionContext = createContext<Omit<User, 'password'> | null>(
  null,
);

export function SessionProvider({
  children,
  user,
}: {
  children: React.ReactNode;
  user: Omit<User, 'password'> | null;
}) {
  return (
    <SessionContext.Provider value={user}>{children}</SessionContext.Provider>
  );
}
