import { hash, compare } from 'bcryptjs';

/**
 * Creates a hashed password from a given password string.
 *
 * This is a simple wrapper around {@link https://www.npmjs.com/package/bcryptjs | bcryptjs}'s `hash` function with a cost factor of 12.
 *
 * @param {string} password - The password to hash.
 * @return {Promise<string>} A promise that resolves to the hashed password.
 */
export async function createHashedPassword(password: string) {
  return await hash(password, 12);
}

/**
 * Compares a given password with a hashed password.
 *
 * This is a simple wrapper around {@link https://www.npmjs.com/package/bcryptjs | bcryptjs}'s `compare` function.
 *
 * @param {string} password - The password to compare with the hashed password.
 * @param {string} hashedPassword - The hashed password to compare with the password.
 * @return {Promise<boolean>} A promise that resolves to `true` if the password matches the hashed password, `false` otherwise.
 */
export async function comparePasswrods(
  password: string,
  hashedPassword: string,
) {
  return await compare(password, hashedPassword);
}
