import { createSlice } from "@reduxjs/toolkit";

interface AuthInitialState {
    username: string;
    favorites: string[];
    isLoggedIn: boolean;
    status: string
}

const authIniticalState: AuthInitialState = {
    username: '',
    favorites: [],
    isLoggedIn: false,
    status: "idel",
  }

const authSlice = createSlice({
  name: "auth",
  initialState: authIniticalState,
  reducers: {
    toggleToFavorites: (state, action) => {
        const isFav = state.favorites.includes(action.payload) 
        if(isFav){
            state.favorites = state.favorites.filter(e => e === action.payload)
        }else{
            state.favorites.push(action.payload)
        }
    }
  },
});

export default authSlice.reducer;
export const {toggleToFavorites} = authSlice.actions;
