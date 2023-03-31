import api from "axios";

export default api.create({
  baseURL: "http://0.0.0.0:3001",
  headers: {
    Authorization: sessionStorage.getItem("token"),
    "Content-Type": "application/json",
  },
});
