import type {RootState} from "../store"

export const selectIsError = (store: RootState) => store.auth.isError