import axios from "axios";
import Cookies from "js-cookie";

// axios.defaults.baseURL = import.meta.env.VITE_BACKEND_API;
axios.defaults.baseURL = 'http://localhost:8000/api'

axios.defaults.headers.common["Authorization"] = `Bearer ${Cookies.get(
  "token"
)}`;

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      Cookies.remove("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
