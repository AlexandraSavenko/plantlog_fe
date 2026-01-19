import { createSlice } from "@reduxjs/toolkit";
import { signin, signup } from "./operations";
import { handleError, handlePending } from "../helpers/helpers";

interface AuthInitialState {
  username: string;
  favorites: string[];
  isLoggedIn: boolean;
  isLoading: boolean;
  isError: string | null;
}

const authIniticalState: AuthInitialState = {
  username: "",
  favorites: [],
  isLoggedIn: false,
  isLoading: false,
  isError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: authIniticalState,
  reducers: {
    toggleToFavorites: (state, action) => {
      const isFav = state.favorites.includes(action.payload);
      if (isFav) {
        state.favorites = state.favorites.filter((e) => e === action.payload);
      } else {
        state.favorites.push(action.payload);
      }
    },
    setErrorNull: (state) => {
      state.isError = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(signup.pending, handlePending)
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
      })
      .addCase(signup.rejected, handleError)
      .addCase(signin.pending, handlePending)
      .addCase(signin.rejected, handleError),
});

export default authSlice.reducer;
export const { toggleToFavorites, setErrorNull } = authSlice.actions;
