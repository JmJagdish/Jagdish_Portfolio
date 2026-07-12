import axios from "axios";

console.log("API URL:", process.env.NEXT_PUBLIC_BACKEND_URL);
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
