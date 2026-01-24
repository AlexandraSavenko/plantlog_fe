import { createAsyncThunk } from "@reduxjs/toolkit";
import { safeRequest, type ApiError } from "../../api/withErrorHandling";
import { api } from "../../api/axios";

import type { Plant } from "../../features/plants/types";
import type { getPlantsParams } from "../types/plantsTypes";

export const getAllPlants = createAsyncThunk<Plant[], getPlantsParams, {rejectValue: ApiError}>(
  "plants/getAllPlants",
  async (params, {rejectWithValue}) => { 
    return safeRequest( 
      async () => {
      const { type, page, perPage} = params;
      console.log("getAllPlants params", perPage);
      const query = new URLSearchParams({
        page: page.toString(),
        perPage: perPage.toString(),
      })
      const url = type === "all" ? "/plants" : "/plants/own";
      const response = await api.get(`${url}?${query}`);
      console.log("get all plants response", response);
      return response.data;},
      rejectWithValue
    )
  }
);
