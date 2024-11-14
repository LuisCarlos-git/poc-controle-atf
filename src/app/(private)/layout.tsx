import { SessionProvider } from '@/contexts/Session';
import { getSession } from '@/utils/auth/session';
import { redirect } from 'next/navigation';

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getSession();

  if (!user) {
    return redirect('/sign-in');
  }

  return <SessionProvider user={user}>{children}</SessionProvider>;
}
