import { createSlice } from "@reduxjs/toolkit";
import { signin, signout, signup, signWithGoogle, verifyEmail } from "./operations";
import type { AuthInitialState } from "../types/authTypes";

const user = {
    username: "",
    userId: "",
    favoritePlants: [],
    authProvider: ""
  }
const authIniticalState: AuthInitialState = {
  user,
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
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        console.log(action.payload)
      })
      .addCase(verifyEmail.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(signin.fulfilled, (state, action) => {
        console.log("signin extra reduer action.p", action.payload)
        const {userId, username, favoritePlants, authProvider} = action.payload
        state.isLoading = false;
        state.isError = null;
        state.isSignedIn = true;
        state.user.favoritePlants = favoritePlants;
        state.user.username = username;
        state.user.authProvider = authProvider;
        state.user.userId = userId;
      }).addCase(signout.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = null;
        state.isSignedIn = false;
        state.user = user;
      }).addCase(signWithGoogle.fulfilled, (state, action) => {
        console.log(action.payload)
        const {userId, username, favoritePlants, authProvider} = action.payload
        state.isLoading = false;
        state.isError = null;
        state.isSignedIn = true;
        state.user.favoritePlants = favoritePlants;
        state.user.username = username;
        state.user.authProvider = authProvider;
        state.user.userId = userId;
      })
});

export default authSlice.reducer;
export const { toggleToFavorites, setErrorNull } = authSlice.actions;
