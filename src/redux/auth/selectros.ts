import type {RootState} from "../store"

export const selectUser = (store:RootState) => store.auth.user
export const selectIsSignedIn = (store: RootState) => store.auth.isSignedIn
export const selectIsLoading = (store: RootState) => store.auth.isLoading
export const selectIsError = (store: RootState) => store.auth.isError