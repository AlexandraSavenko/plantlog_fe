import type { PayloadAction } from "@reduxjs/toolkit";
import type { ApiError, ErrorState } from "../types/apiError";
import type {Draft} from 'immer';

export const handlePending = <T extends ErrorState> (state: Draft<T>) => {
  state.isLoading = true;
};

export const handleError = <T extends ErrorState>(
  state: Draft<T>,
  action: PayloadAction<ApiError | undefined>,
) => {
  state.isLoading = false;
  state.isError = action.payload ?? null;
};
