import { createSlice } from "@reduxjs/toolkit";
import { signin } from "./operations";
import { handlePending } from "../helpers/helpers";
import type { AuthInitialState } from "../types/authTypes";

const authIniticalState: AuthInitialState = {
  user: {
    username: "",
    userId: "",
    favoritePlants: [],
    authProvider: ""
  },
  isSignedIn: false,
  isLoading: false,
  isError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: authIniticalState,
  reducers: {
    toggleToFavorites: (state, action) => {
      const isFav = state.user.favoritePlants.includes(action.payload);
      if (isFav) {
        state.user.favoritePlants = state.user.favoritePlants.filter((e) => e === action.payload);
      } else {
        state.user.favoritePlants.push(action.payload);
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
        const {userId, username, favoritePlants, authProvider} = action.payload
        state.isLoading = false;
        state.isError = null;
        state.isSignedIn = true;
        state.user.favoritePlants = favoritePlants;
        state.user.username = username;
        state.user.authProvider = authProvider;
        state.user.userId = userId;
      }),
});

export default authSlice.reducer;
export const { toggleToFavorites, setErrorNull } = authSlice.actions;
