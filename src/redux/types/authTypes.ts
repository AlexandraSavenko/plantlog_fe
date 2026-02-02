import type { isError } from "./isError";
export interface AuthResponse {
  status: number;
  message: string;
}

export interface SignInResponse {
  userId: string;
  username: string;
  favoritePlants: string[];
  authProvider: string;
}

export interface AuthInitialState {
  user: {
    userId: string;
    username: string;
    favoritePlants: string[];
    authProvider: string;
  };
  isSignedIn: boolean;
  isLoading: boolean;
  isError: isError | null;
}

