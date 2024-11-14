import { COOKIES_KEYS } from '@/constants/cookies';
import { dbUserServices } from '@/db/services/user';
import { verifyJwtToken } from '@/lib/jwt';
import { cookies } from 'next/headers';

/**
 * Gets the session token from the cookies.
 *
 * @returns The user object if the token is valid, or null if not present or invalid.
 */
export async function getSession() {
  const cookie = await cookies();
  const token = cookie.get(COOKIES_KEYS.TOKEN)?.value;

  if (!token) return null;

  try {
    const { sub } = verifyJwtToken(token);

    if (!sub) return null;

    const user = await dbUserServices.getUserById(sub);

    return user;
  } catch {
    return null;
  }
}
