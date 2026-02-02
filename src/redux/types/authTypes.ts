import type { isError } from "./isError";
export interface AuthResponse {
  status: number;
  message: string;
}

export interface SignInResponse extends AuthResponse{
  data: {
    accessToken: string
  }
}
export interface UserDataResponse {
  userId: string;
  username: string;
  favoritePlants: string[];
  authProvider: string;
}

export interface AuthInitialState {
  user: UserDataResponse;
  isSignedIn: boolean;
  isLoading: boolean;
  isError: isError | null;
}

