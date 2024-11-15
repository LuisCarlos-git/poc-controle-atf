import { getSession } from '@/utils/auth/session';

export default async function CustomersPage() {
  console.log(await getSession());

  return <h1>customers</h1>;
}
