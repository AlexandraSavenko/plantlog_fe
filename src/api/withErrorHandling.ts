import axios from "axios";
import { BaseThunkAPI } from '@reduxjs/toolkit'

export interface ApiError {
    status: number;
}

export const safeRequest = async <T>(request: () => Promise<T>, {rejectWithValue}: BaseThunkAPI<
unknown,
unknown,
unknown,
ApiError>): Promise<T> => {
    try {
        return await request();
    } catch (error: unknown) {
        if(axios.isAxiosError(error) && error.response){
            return rejectWithValue({status: error.response.status ?? 0})
        }
        throw error
}
}