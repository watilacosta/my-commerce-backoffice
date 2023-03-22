import { defineStore } from "pinia";
import { User } from "@/models/User";

export const useUsersStore = defineStore("users", {
  state: () => {
    return {
      users: [] as User[],
    };
  },
  getters: {
    listUsers: (state) => state.users,
  },
  actions: {
    setUsersList(data: User[]) {
      this.users = data.map((item) => {
        const { id, firstname, lastname, email, profile, active } = item;

        return new User(id, firstname, lastname, email, profile, active);
      });
    },
  },
  persist: true,
});
