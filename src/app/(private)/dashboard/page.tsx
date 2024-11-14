'use client';

import { useSession } from '@/hooks/contexts/useSession';

export default function Dashboard() {
  const { name } = useSession();
  return <div>{name}</div>;
}
