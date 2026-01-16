import { createAsyncThunk } from '@reduxjs/toolkit';
import {api} from '../../api/axios';
import { safeRequest, type ApiError } from '../../api/withErrorHandling';

//createAsyncThunk<Returned, ThunkArg, ThunkApiConfig>

export const signup = createAsyncThunk<void, void, {rejectValue: ApiError}>('auth/signin', async (credentials, thunkAPI) => {
  return safeRequest(
    async () =>  {
        const { data } = await api.post('/auth/signin', credentials);
        console.log('signin data', data)
        return data;
    },
    thunkAPI
  )
        

    
    
})