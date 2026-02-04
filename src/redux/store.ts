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
import filterReducer from "./filters/slice"

const persistAuthConfig = {
    key: "auth",
    storage,
    whitelist: ["isSignedIn"]
}

const persistFilterConfig = {
    key: "filters",
    storage,
    blacklist: ["name"]
}
const persistAuthReducer = persistReducer(persistAuthConfig, authReducer);
const persistFilterReducer = persistReducer(persistFilterConfig ,filterReducer)
export const store = configureStore({
reducer: {
    auth: persistAuthReducer,
    plants: plantsReducer,
    filters: persistFilterReducer

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