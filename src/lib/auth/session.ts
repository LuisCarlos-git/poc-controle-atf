import { COOKIES_KEYS } from '@/constants/cookies';
import { cookies } from 'next/headers';

/**
 * Gets the session token from the cookies.
 *
 * @returns The session token or null if not present.
 */
export async function getSession() {
  const cookie = await cookies();

  return cookie.get(COOKIES_KEYS.TOKEN) ?? null;
}
