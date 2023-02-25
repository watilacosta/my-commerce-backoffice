import { defineStore } from "pinia";
import { User } from "@/models/User";

export const useUsersStore = defineStore("users", {
  state: () => {
    return {
      usersList: [] as User[],
      user: {} as User,
    };
  },
  getters: {
    listUsers: (state) => state.usersList,
    getUser: (state) => state.user,
  },
  actions: {
    setUsersList(data: User[]) {
      this.usersList = data.map((item) => {
        const { id, firstname, lastname, email, profile, active } = item;

        return new User(id, firstname, lastname, email, profile, active);
      });
    },
    setUser(id: number) {
      const newUser = this.usersList.find((user) => {
        if (user.id === id) {
          return user;
        }
      });

      this.user = newUser as User;
    },
  },
  persist: true,
});
