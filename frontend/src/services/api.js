import axios from "axios";
import useAuthStore from "../stores/authStore";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    Accept: 'application/json',
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) =>  Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      useAuthStore.getState().logout();
      window.location.href = "/login"; 
    }
  }
);

export default api;