import { db } from './src/db/config/db';
import { usersTable } from './src/db/schema';
import { createHashedPassword } from './src/lib/auth/bcrypt';

async function runUserSeed() {
  console.info('running user seed');
  const hashedPassword = await createHashedPassword('12345678');
  await db.insert(usersTable).values([
    {
      id: crypto.randomUUID(),
      email: 'admin@adm.com',
      name: 'Adm',
      password: hashedPassword,
    },
  ]);
  console.info('user seed created');
}

runUserSeed();
