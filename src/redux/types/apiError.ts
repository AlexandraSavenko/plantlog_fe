export interface ApiError {
    status: number;
    message: string;
}

export interface ErrorState {
    isLoading: boolean;
    isError?: ApiError | null
}