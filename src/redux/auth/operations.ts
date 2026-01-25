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
    const {username, token} = response.data.data
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`
    // console.log('signin data', data)
    // data: {username: 'Alex', accessToken: '5jgha5CxFMVk9fpN8SlDRHlNVa9rhu4Z/L9o4m7d'}
    // message: "User has been successfully signed in"
    // status: 200
    return username;
  }, rejectWithValue);
});
