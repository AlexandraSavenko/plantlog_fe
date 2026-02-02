import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/axios";
import { safeRequest, type ApiError } from "../../api/withErrorHandling";
import type {
  AuthFormValues,
  SignUpPayload,
} from "../../features/auth/models/types";
import type {
  AuthResponse,
  UserDataResponse,
} from "../types/authTypes";

//createAsyncThunk<Returned, ThunkArg, ThunkApiConfig>

export const signup = createAsyncThunk<
  AuthResponse,
  SignUpPayload,
  { rejectValue: ApiError }
>("auth/signup", async (credentials, { rejectWithValue }) => {
  return safeRequest(async () => {
    const { data } = await api.post("/auth/signup", credentials);
    return data;
  }, rejectWithValue);
});

export const verifyEmail = createAsyncThunk<
  AuthResponse,
  string,
  { rejectValue: ApiError }
>("auth/verify", async (token, { rejectWithValue }) => {
  return safeRequest(async () => {
    const { data } = await api.get("auth/verify", { params: { token } });
    return data;
  }, rejectWithValue);
});

export const fetchUserData = createAsyncThunk<
  UserDataResponse,
  void,
  { rejectValue: ApiError }
>("auth/getUser", async (_, { rejectWithValue }) => {
  return safeRequest(async () => {
    const { data } = await api.get("/user");
    console.log(data.data);
    return data.data;
  }, rejectWithValue);
});


export const signin = createAsyncThunk<
  UserDataResponse,
  AuthFormValues,
  { rejectValue: ApiError }
>("auth/signin", async (credentials, { dispatch, rejectWithValue }) => {
  return safeRequest(async () => {
    const response = await api.post("/auth/signin", credentials);
    const { accessToken } = response.data.data;
    console.log(response.data.data);
    api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const user = await dispatch(fetchUserData()).unwrap()
    console.log(user)
    return user;
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

export const signWithGoogle = createAsyncThunk<
  UserDataResponse,
  string,
  { rejectValue: ApiError }
>("auth/gsign", async (code, { rejectWithValue }) => {
  return safeRequest(async () => {
    const response = await api.post("/auth/confirm-oauth", { code });
    const { accessToken } = response.data.data;
    api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    const { data } = await api.get("/user");
    console.log(data.data);
    return data.data;
  }, rejectWithValue);
});

export const refreshUser = createAsyncThunk<
  null,
  void,
  { rejectValue: ApiError }
>("auth/refresh", async (_, { rejectWithValue }) => {
  return safeRequest(async () => {
    const { data } = await api.post("/auth/refresh");
    console.log("refresh data", data);
    api.defaults.headers.common["Authorization"] = `Bearer ${data.accessToken}`;
    return null;
  }, rejectWithValue);
});
