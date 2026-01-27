import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/axios";
import { safeRequest, type ApiError } from "../../api/withErrorHandling";
import type { AuthFormValues } from "../../features/auth/models/types";
import type { SignInResponse } from "../types/authTypes";

//createAsyncThunk<Returned, ThunkArg, ThunkApiConfig>

export const signup = createAsyncThunk<
  { message: string },
  AuthFormValues,
  { rejectValue: ApiError }
>("auth/signin", async (credentials, { rejectWithValue }) => {
  return safeRequest(async () => {
    const { data } = await api.post("/auth/signup", credentials);
    // console.log('signup data', data)

    return data;
  }, rejectWithValue);
});

export const signin = createAsyncThunk<
  SignInResponse,
  AuthFormValues,
  { rejectValue: ApiError }
>("auth/signin", async (credentials, { rejectWithValue }) => {
  return safeRequest(async () => {
    const response = await api.post("/auth/signin", credentials);
    const { accessToken } = response.data.data;
    console.log(response.data.data);
    api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    // console.log('signin data', data)
    // data: { accessToken: '5jgha5CxFMVk9fpN8SlDRHlNVa9rhu4Z/L9o4m7d'}
    // message: "User has been successfully signed in"
    // status: 200
    const { data } = await api.get("/user");
    console.log(data.data);
    return data.data;
  }, rejectWithValue);
});

export const signout = createAsyncThunk(
  "auth/signout",
  async (_, { rejectWithValue }) => {
    return safeRequest(async () => {
      await api.post("/auth/signout");
    }, rejectWithValue);
  },
);
