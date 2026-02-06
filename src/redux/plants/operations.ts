import { createAsyncThunk } from "@reduxjs/toolkit";
import { safeRequest, type ApiError } from "../../api/withErrorHandling";
import { api } from "../../api/axios";
import type { GetPlantsParams, GetPlantsResponse } from "../types/plantsTypes";
import type { Plant, PlantDetails } from "../../features/plants/types";
import type { AddPlantFormlValues } from "../../features/plants/components/PlantForm/PlantForm";

const getPlants = async (params: GetPlantsParams, { rejectWithValue }) => {
  return safeRequest(async () => {
    const { type, page, perPage } = params;
    const query = new URLSearchParams({
      page: page.toString(),
      perPage: perPage.toString(),
    });
    const url = type === "all" ? "/plants" : "/plants/own";
    const response = await api.get(`${url}?${query}`);
    const { data, ...meta } = response.data.data;

    return { plantList: data, ...meta };
  }, rejectWithValue);
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

export const getPlantDetails = createAsyncThunk<
  PlantDetails,
  string,
  { rejectValue: ApiError }
>("plants/getDetails", async (id, { rejectWithValue }) => {
  return safeRequest(async () => {
    const response = await api.get(`/plants/${id}`);
    const plantInfo = response.data.data;
    return plantInfo;
  }, rejectWithValue);
});

export const addPlant = createAsyncThunk<
  PlantDetails,
  AddPlantFormlValues,
  { rejectValue: ApiError }
>("plants/add", async (formData, { rejectWithValue }) => {
  return safeRequest(async () => {
    const response = await api.post("/plants", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  }, rejectWithValue);
});

export const deletePlant = createAsyncThunk<
  PlantDetails,
  string,
  { rejectValue: ApiError }
>("plants/del", async (id, { rejectWithValue }) => {
  return safeRequest(async () => {
    const { data } = await api.post(`/plants/${id}`);
    console.log(data);
    return data;
  }, rejectWithValue);
});
