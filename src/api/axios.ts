import axios, { AxiosError, type AxiosRequestConfig } from "axios";

type FailedRequest = {
  resolve: (token: string | null) => void;
  reject: (error: AxiosError | null) => void;
};

let failedQueue: FailedRequest[] = [];
let isRefreshing = false;

const processQueue = (
  error: AxiosError | null,
  token: string | null = null
) => {
  failedQueue.forEach(prom => {
  if (error){
    prom.reject(error)
  }else{
    prom.resolve(token);
  }
});
failedQueue = []
} 

interface CustomAxiosRequestConfig extends AxiosRequestConfig{
  _retry?: boolean
}
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});
//if "withCredentials" on front-end, backend cors() in server should not be empty, it should have front-end url and credentials: true

 
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log("Interceptor caught an error", error.config)
    const originalRequest = error.config as CustomAxiosRequestConfig;
    //Prevent infinity loop
    if(
      (error.response?.status === 401) && !originalRequest._retry
    ){originalRequest._retry = true;
      if(isRefreshing){
        return new Promise(function(resolve, reject){
          failedQueue.push({resolve, reject});
        }).then(token => {
          if(!originalRequest.headers){
            originalRequest.headers = {};
          }
          originalRequest.headers["Authorization"] = `Bearer ${token}`;
          return api(originalRequest)
        }).catch(err => Promise.reject(err))
      }

      isRefreshing = true;

      try {
        if(originalRequest.url?.endsWith("/auth/refresh")){
          return Promise.reject(error)
        }
        const res = await api.post("/auth/refresh", {})
        const newAccessToken = res.data.accessToken;
        api.defaults.headers.common["Authorization"] = `Bearer ${newAccessToken}`;

        processQueue(null, newAccessToken);
        if(!originalRequest.headers){
          originalRequest.headers = {};
        }
        originalRequest.headers["Authorization"] = "Bearer" + newAccessToken;
        return api(originalRequest);
      } catch (error: unknown) {
        if(axios.isAxiosError(error)){
          processQueue(error, null);
        }else{
          processQueue(new AxiosError("Unknown error"), null);
        }
        return Promise.reject(error);
      }finally{
        isRefreshing = false;
      }
    }
    return Promise.reject(error);
  }
);