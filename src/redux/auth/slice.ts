import { createSlice } from "@reduxjs/toolkit";
import { signin } from "./operations";
import { handlePending } from "../helpers/helpers";
import type { AuthInitialState } from "../types/authTypes";

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
      // .addCase(signup.pending, handlePending)
      // .addCase(signup.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   console.log(action.payload);
      // })
      .addCase(signin.pending, handlePending)
      .addCase(signin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null
        state.username = action.payload.username
        console.log(action.payload);
      }),
});

export default authSlice.reducer;
export const { toggleToFavorites, setErrorNull } = authSlice.actions;
