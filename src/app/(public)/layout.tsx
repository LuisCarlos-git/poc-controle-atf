import { getSession } from '@/utils/auth/session';
import { redirect } from 'next/navigation';

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = await getSession();

  if (token) {
    return redirect('/dashboard');
  }

  return children;
}
