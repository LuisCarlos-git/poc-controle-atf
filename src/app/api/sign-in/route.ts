import { db } from '@/db/config/db';
import { usersTable } from '@/db/schema';
import { comparePasswrods } from '@/lib/jwt';
import { eq } from 'drizzle-orm';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  const user = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email));

  if (!user.length) {
    return NextResponse.json(
      { message: 'Invalid Credentials' },
      { status: 401 },
    );
  }

  const isPasswordValid = await comparePasswrods(password, user[0].password);

  if (!isPasswordValid) {
    return NextResponse.json(
      { message: 'Invalid Credentials' },
      { status: 401 },
    );
  }

  return NextResponse.json({ user }, { status: 200 });
}
