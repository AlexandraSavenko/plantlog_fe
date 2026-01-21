import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import plantsReducer from "./plants/slice"
export const store = configureStore({
reducer: {
    auth: authReducer,
    plants: plantsReducer
}
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;