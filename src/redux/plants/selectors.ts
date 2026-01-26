import type { RootState } from "../store";

export const selectPlantList = (state: RootState) => state.plants.all.plantList;
export const selectTotalItems = (state: RootState) => state.plants.all.totalItems;
export const selectPage = (state: RootState) => state.plants.all.page;
export const selectPerPage = (state: RootState) => state.plants.all.perPage;
export const selectHasNextPage = (state: RootState) => state.plants.all.hasNextPage;
export const selectHasPrevPage = (state: RootState) => state.plants.all.hasPrevPage;
export const selectIsLoading = (state: RootState) => state.plants.isLoading;
export const selectIsError = (state: RootState) => state.plants.isError;