import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export const selectPlantsScope = (scope: "all" | "own") => (state: RootState) =>
  state.plants[scope];
export const selectPlants = (scope: "all" | "own") => (state: RootState) =>
  state.plants[scope].plantList;
export const makeSelectPagination = (scope: "all" | "own") =>
  createSelector(
    selectPlantsScope(scope),
    ({ page, perPage, totalItems, hasNextPage, hasPrevPage }) => {
      const totalPages = Math.ceil(totalItems / perPage);
      return {
        page,
        perPage,
        totalItems,
        totalPages,
        hasNextPage,
        hasPrevPage,
        isFirstPage: page === 1,
        isLastPage: page >= totalPages
      };
    },
  );
export const selectIsLoading = (state: RootState) => state.plants.isLoading;
export const selectIsError = (state: RootState) => state.plants.isError;
export const selectOwnPlantList = (state: RootState) =>
  state.plants.own.plantList;
export const selectPlantDetails = (state: RootState) =>
  state.plants.plantDetails;
