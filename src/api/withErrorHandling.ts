import axios from "axios";

export interface ApiError {
    status: number;
}
export const safeRequest = async <T>(request: () => Promise<T>, rejectWithValue: (value: ApiError) => unknown): Promise<T> => {
    try {
        return await request();
    } catch (error: unknown) {
        if(axios.isAxiosError(error) && error.response){
            throw rejectWithValue({status: error.response.status ?? 0})
        }
        throw error
}
}