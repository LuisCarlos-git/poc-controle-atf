import { getSession } from '@/utils/auth/session';
import { redirect } from 'next/navigation';

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getSession();

  if (user) {
    return redirect('/customers');
  }

  return children;
}
