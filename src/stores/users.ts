import { defineStore } from "pinia";
import { User } from "@/models/User";

export const useUsersStore = defineStore("users", {
  state: () => {
    return {
      usersList: [] as User[],
    };
  },
  persist: true,
  getters: {
    listUsers: (state) => state.usersList,
  },
  actions: {
    setUsersList(data: User[]) {
      this.usersList = data.map((item) => {
        const { id, firstname, lastname, email, profile, active } = item;

        return new User(id, firstname, lastname, email, profile, active);
      });
    },
  },
});
