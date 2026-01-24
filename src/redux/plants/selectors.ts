import type { RootState } from "../store";

export const selectPlantList = (state: RootState) => state.plants.plantList;
export const selectTotalItems = (state: RootState) => state.plants.totalItems;
export const selectPage = (state: RootState) => state.plants.page;
export const selectPerPage = (state: RootState) => state.plants.perPage;
export const selectHasNextPage = (state: RootState) => state.plants.hasNextPage;
export const selectHasPrevPage = (state: RootState) => state.plants.hasPrevPage;
export const selectIsLoading = (state: RootState) => state.plants.isLoading;
export const selectIsError = (state: RootState) => state.plants.isError;