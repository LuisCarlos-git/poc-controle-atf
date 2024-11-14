import { COOKIES_KEYS } from '@/constants/cookies';
import { verifyJwtToken } from '@/lib/jwt';
import { cookies } from 'next/headers';

/**
 * Retrieves the session ID from the JWT token stored in the cookies.
 *
 * @returns The user ID extracted from the JWT token if valid, or null if the token is absent or invalid.
 */
export async function getSession() {
  const cookie = await cookies();
  const token = cookie.get(COOKIES_KEYS.TOKEN)?.value;

  if (!token) return null;

  try {
    const { sub } = verifyJwtToken(token);

    if (!sub) return null;

    return sub;
  } catch {
    return null;
  }
}
