import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND}/api`,
  withCredentials: true, // 🔥 send cookies
  
});
console.log("Base URL =>", api.defaults.baseURL);

export default api;
