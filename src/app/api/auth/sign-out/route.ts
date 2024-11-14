/* eslint-disable drizzle/enforce-delete-with-where */
import { COOKIES_KEYS } from '@/constants/cookies';
import { NextResponse } from 'next/server';
export function POST() {
  const response = new NextResponse(null, { status: 204 });

  response.cookies.delete(COOKIES_KEYS.TOKEN);

  return response;
}
