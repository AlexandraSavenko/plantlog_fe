import type { isError } from "./isError";
export interface AuthResponse {
  status: number;
  message: string;
}

export interface UserDataResponse {
  userId: string;
  username: string;
  favoritePlants: string[];
  authProvider: string;
}

export interface SignInResponse {
  accessToken: string,
  user: UserDataResponse
}
export interface AuthInitialState {
  user: UserDataResponse;
  accessToken: string;
  isSignedIn: boolean;
  isLoading: boolean;
  isError: isError | null;
}

