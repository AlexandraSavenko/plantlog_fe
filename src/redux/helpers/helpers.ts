import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { ApiError } from "../types/apiError";

export const handlePending = (state: RootState) => {
    state.isLoading = true;
}

export const handleError = (state: RootState, action: PayloadAction<ApiError>) => {
  state.isLoading = false;
  state.isError = action.payload;
}