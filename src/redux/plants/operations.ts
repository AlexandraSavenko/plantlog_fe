import { createAsyncThunk } from "@reduxjs/toolkit";
import { safeRequest, type ApiError } from "../../api/withErrorHandling";
import { api } from "../../api/axios";

import type { GetPlantsParams, GetPlantsResponse } from "../types/plantsTypes";

export const getPlants = createAsyncThunk<
  GetPlantsResponse,
  GetPlantsParams,
  { rejectValue: ApiError }
>("plants/getPlants", async (params, { rejectWithValue }) => {
  return safeRequest(async () => {
    const { type, page, perPage } = params;
    const query = new URLSearchParams({
      page: page.toString(),
      perPage: perPage.toString(),
    });
    const url = type === "all" ? "/plants" : "/plants/own";
    const response = await api.get(`${url}?${query}`);
    const { data, ...meta } = response.data.data;
    // console.log("get all plants response", response.data.data.data);
    // data: []
    // hasNextPage: false
    // hasPrevPage: false
    // page: 1
    // perPage: 4
    // totalItems: 4
    return { plantList: data, ...meta };
  }, rejectWithValue);
});
