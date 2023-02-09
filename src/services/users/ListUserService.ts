import api from "@/utils/api";

export class ListUserService {
  async listAll() {
    await api
      .get("/admin/users")
      .then((response) => {
        return response.data.data;
      })
      .catch((error) => {
        return error;
      });
  }
}
