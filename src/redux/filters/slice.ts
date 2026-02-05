import { createSlice } from "@reduxjs/toolkit";
import type { FilterInitialState } from "../types/filterTypes";

const filterInitialState: FilterInitialState = {
  id: "",
  growthForm: "",
  origin: "",
  favourites: false,
};
const filterSlice = createSlice({
  name: "filters",
  initialState: filterInitialState,
  reducers: {
    setPlantNameQuery: (state, action) => {
        console.log(action.payload)
      state.id = action.payload;
    },
    setFormFilters: (state, action) => {
      console.log("reducer", action.payload);
      const { growthForm, origin } = action.payload;
      state.growthForm = growthForm;
      state.origin = origin;
    },
    resetFilters: (state) => {
      console.log("reset", state);
      state.id = "";
      state.growthForm = "";
      state.origin = "";
    },
  },
});

export default filterSlice.reducer;
export const { setFormFilters, resetFilters, setPlantNameQuery } = filterSlice.actions;
