import type { ApiError } from "./apiError";

export interface AuthInitialState {
  username: string;
  favorites: string[];
  isLoggedIn: boolean;
  isLoading: boolean;
  isError: ApiError | null;
}

