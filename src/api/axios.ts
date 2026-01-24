import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});
//if "withCredentials" on front-end, backend cors() in server should not be empty, it should have front-end url and credentials: true
