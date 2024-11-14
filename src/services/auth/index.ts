import { ENDPOINTS } from '@/constants/endpoints';
import { httpClient } from '@/lib/httpClient';
import {
  IAuthServices,
  SignInParams,
  SignInResponse,
} from '@/types/services/auth';

class AuthServices implements IAuthServices {
  async signOut(): Promise<void> {
    await httpClient.post(ENDPOINTS.SIGN_OUT);
  }
  async signIn({ email, password }: SignInParams) {
    const res = await httpClient.post<SignInResponse>(ENDPOINTS.SIGN_IN, {
      email,
      password,
    });

    return res.data;
  }
}

export const authServices = new AuthServices();
