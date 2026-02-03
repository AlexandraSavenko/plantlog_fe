import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/slice";
import plantsReducer from "./plants/slice";

const persistAuthConfig = {
    key: "auth",
    storage,
    whitelist: ["isSignedIn"]
}
const persistAuthReducer = persistReducer(persistAuthConfig, authReducer);

export const store = configureStore({
reducer: {
    auth: persistAuthReducer,
    plants: plantsReducer
},
middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
})
})

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;