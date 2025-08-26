import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5999/api",
  withCredentials: true, // 🔥 send cookies
});

export default api;
