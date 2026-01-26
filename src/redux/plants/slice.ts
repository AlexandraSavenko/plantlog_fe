import { createSlice } from "@reduxjs/toolkit";
import type { PlantsInitialState } from "../types/plantsTypes";
import { getAllPlants, getOwnPlants } from "./operations";


const plantsInitialState: PlantsInitialState = {
  all: {
  plantList: [],
  hasNextPage: false,
  hasPrevPage: false,
  page: 1,
  perPage: 4,
  totalItems: 0,
  },
  own: {
  plantList: [],
  hasNextPage: false,
  hasPrevPage: false,
  page: 1,
  perPage: 4,
  totalItems: 0,
  },
  isLoading: false,
  isError: null,
};
const plantsSlice = createSlice({
  name: "plants",
  initialState: plantsInitialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(getAllPlants.pending, (state) => {
      state.isLoading = true;
      state.isError = null;
    }).addCase(getAllPlants.fulfilled, (state, action) => {
        const {plantList, page, perPage, totalItems, hasNextPage, hasPrevPage} = action.payload
        state.all.plantList = [...plantList]
        state.all.page = page
        state.all.perPage = perPage
        state.all.totalItems = totalItems
        state.all.hasNextPage = hasNextPage
        state.all.hasPrevPage = hasPrevPage
        state.isError = null
        state.isLoading = false
    }).addCase(getOwnPlants.fulfilled, (state, action) => {
const {plantList, page, perPage, totalItems, hasNextPage, hasPrevPage} = action.payload
        state.own.plantList = [...plantList]
        state.own.page = page
        state.own.perPage = perPage
        state.own.totalItems = totalItems
        state.own.hasNextPage = hasNextPage
        state.own.hasPrevPage = hasPrevPage
        state.isError = null
        state.isLoading = false
    }),
});

export default plantsSlice.reducer;
// export const {addtoFav} = plantsSlice.actions;
