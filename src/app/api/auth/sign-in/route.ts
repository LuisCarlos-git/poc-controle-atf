import { comparePasswrods } from '@/lib/bcrypt';
import { createJwtToken } from '@/lib/jwt';
import { NextRequest, NextResponse } from 'next/server';
import { dbUserServices } from '@/db/services/user';
import { COOKIES_KEYS } from '@/constants/cookies';

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  const user = await dbUserServices.getUserByEmail(email);

  if (!user) {
    return NextResponse.json(
      { message: 'Invalid Credentials' },
      { status: 401 },
    );
  }

  const isPasswordValid = await comparePasswrods(password, user.password);

  if (!isPasswordValid) {
    return NextResponse.json(
      { message: 'Invalid Credentials' },
      { status: 401 },
    );
  }

  const token = createJwtToken(user.id);

  const response = new NextResponse(null, { status: 204 });

  response.cookies.set(COOKIES_KEYS.TOKEN, token, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
    sameSite: 'strict',
  });

  return response;
}
