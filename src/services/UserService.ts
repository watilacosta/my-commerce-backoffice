import axios from "@/utils/axios";
import type { User } from "@/models/User";

class UserService {
  private path = "/admin/users";
  private auth = JSON.parse(sessionStorage.getItem("auth") || '{"auth": null}');

  update(user: User): Promise<any> {
    const { name, email, profile, active, id } = user;
    const [firstname, lastname] = this.splitName(name);

    return axios({
      method: "put",
      url: `${this.path}/${id}`,
      data: { user: { firstname, lastname, email, profile, active } },
      headers: { Authorization: this.auth.authToken },
    });
  }

  // privates
  private splitName = (name: string) => {
    const splitName = name.split(" ");

    return [splitName.shift(), splitName.join(" ")];
  };
}

export default new UserService();
