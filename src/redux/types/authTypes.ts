import type { isError } from "./isError";


export interface AuthInitialState {
  username: string;
  favorites: string[];
  isLoggedIn: boolean;
  isLoading: boolean;
  isError: isError | null;
}

