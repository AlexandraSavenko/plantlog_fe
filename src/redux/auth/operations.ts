import { createAsyncThunk } from '@reduxjs/toolkit';
import {api} from '../../api/axios';
import { safeRequest, type ApiError } from '../../api/withErrorHandling';
import type { AuthFormValues } from '../../features/auth/models/types';

//createAsyncThunk<Returned, ThunkArg, ThunkApiConfig>

export const signup = createAsyncThunk<{message: string}, AuthFormValues, {rejectValue: ApiError}>('auth/signin', async (credentials, thunkAPI) => {
  return safeRequest(
    async () =>  {
        const { data } = await api.post('/auth/signup', credentials);
        console.log('signup data', data)
        return data;
    },
    thunkAPI
  ) 
})

export const signin = createAsyncThunk<void, AuthFormValues, {rejectValue: ApiError}>('auth/signin', async (credentials, thunkAPI) => {
  return safeRequest(
    async () =>  {
        const { data } = await api.post('/auth/signin', credentials);
        console.log('signin data', data)
        return data;
    },
    thunkAPI
  ) 
})