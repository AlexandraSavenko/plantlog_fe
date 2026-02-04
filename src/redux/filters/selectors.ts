import type { RootState } from "../store";

export const selectOrigin = (store: RootState) => store.filters.origin;
export const selectGrowthForm = (store: RootState) => store.filters.growthForm;
export const selectName = (store: RootState) => store.filters.name;
export const selectFilterFavorites = (store: RootState) => store.filters.favourites