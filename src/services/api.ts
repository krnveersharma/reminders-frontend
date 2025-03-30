import axios from "axios";

const SERVER_BASE_URL = process.env.SERVER;
const api = axios.create({
  baseURL: SERVER_BASE_URL,
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${getCookie("auth")}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export const getCookie = (name: string) => {
  if (typeof document === "undefined") return null;

  const cookies = document.cookie.split("; ");
  const cookie = cookies.find((row) => row.startsWith(name + "="));
  return cookie ? cookie.split("=")[1] : null;
};

export default api;
