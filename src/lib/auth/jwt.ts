import * as Jwt from 'jsonwebtoken';

/**
 * Creates a JWT token with the given user ID and the secret key in the
 * environment variable `JWT_SECRET`. The token is set to expire in 7 days.
 *
 * @param userId - The user ID to include in the JWT token.
 * @returns A JWT token as a string.
 */
export function createJwtToken(userId: string) {
  return Jwt.sign(
    {
      sub: userId,
    },
    process.env.JWT_SECRET as string,
    { expiresIn: '7d' },
  );
}
