import axios from "axios";

const api = axios.create({
  baseURL: "http://0.0.0.0:3001",
  headers: {
    Authorization: sessionStorage.getItem("token"),
  },
});

export default api;
