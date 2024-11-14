export type SignInParams = {
  email: string;
  password: string;
};

export type SignInResponse = {
  token: string;
};

export interface IAuthServices {
  signIn(params: SignInParams): Promise<SignInResponse>;
  signOut(): Promise<void>;
}
