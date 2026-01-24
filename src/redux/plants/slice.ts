import { createSlice } from "@reduxjs/toolkit";
import type { PlantsInitialState } from "../types/plantsTypes";
import { getPlants } from "./operations";

const plantsInitialState: PlantsInitialState = {
  plantList: [],
  hasNextPage: false,
  hasPrevPage: false,
  page: 1,
  perPage: 4,
  totalItems: 0,
  isLoading: false,
  isError: null,
};
const plantsSlice = createSlice({
  name: "plants",
  initialState: plantsInitialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(getPlants.pending, (state) => {
      state.isLoading = true;
      state.isError = null;
    }).addCase(getPlants.fulfilled, (state, action) => {
        const {plantList, page, perPage, totalItems, hasNextPage, hasPrevPage} = action.payload
        state.plantList = [...plantList]
        state.page = page
        state.perPage = perPage
        state.totalItems = totalItems
        state.hasNextPage = hasNextPage
        state.hasPrevPage = hasPrevPage
        state.isError = null
        state.isLoading = false
    }),
});

export default plantsSlice.reducer;
// export const {addtoFav} = plantsSlice.actions;
