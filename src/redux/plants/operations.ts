import { createAsyncThunk } from "@reduxjs/toolkit";
import { safeRequest, type ApiError } from "../../api/withErrorHandling";
import { api } from "../../api/axios";
import type { GetPlantsParams, GetPlantsResponse } from "../types/plantsTypes";


const getPlants = async (
  params: GetPlantsParams,
  { rejectWithValue }
) => {
  return safeRequest(async () => {    
    const { type, page, perPage } = params;
    const query = new URLSearchParams({
      page: page.toString(),
      perPage: perPage.toString(),
    });
    const url = type === "all" ? "/plants" : "/plants/own";
    const response = await api.get(`${url}?${query}`);
    const { data, ...meta } = response.data.data;

    return { plantList: data, ...meta };  }, rejectWithValue);
};
export const getAllPlants = createAsyncThunk<
  GetPlantsResponse,
  GetPlantsParams,
  { rejectValue: ApiError }
>("plants/getAll", (params, thunkAPI) =>
  getPlants({ ...params, type: "all" }, thunkAPI),
);

export const getOwnPlants = createAsyncThunk<
  GetPlantsResponse,
  GetPlantsParams,
  { rejectValue: ApiError }
>("plants/getOwn", (params, thunkAPI) =>
  getPlants({ ...params, type: "own" }, thunkAPI),
);


// console.log("get all plants response", response.data.data.data);
// data: []
// hasNextPage: false
// hasPrevPage: false
// page: 1
// perPage: 4
// totalItems: 4
