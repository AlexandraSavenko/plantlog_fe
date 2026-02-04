import { createSlice } from "@reduxjs/toolkit";
import type { FilterInitialState } from "../types/filterTypes";


const filterInitialState: FilterInitialState = {
    name: "",
    growthForm: "",
    origin: "",
    favourites: false,
}
 const filterSlice = createSlice({
    name: "filters",
    initialState: filterInitialState,
    reducers: {
        setQueryFilters: (state, action) => {
            console.log("reducer", action.payload)
            const {name, growthForm, origin} = action.payload;
            state.name = name;
            state.growthForm = growthForm;
            state.origin = origin
        },
        resetFilters: (state) => {
            state.name = "";
            state.growthForm = "";
            state.origin = ""
        }
    }
});

export default filterSlice.reducer;
export const { setQueryFilters, resetFilters} = filterSlice.actions;