import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { User } from "@/models/User";

export const useUsersStore = defineStore("users", () => {
  // STATE ref();
  const usersList = ref<User[]>([]);

  // GETTERS computed();
  const listUsers = computed(() => usersList.value);

  // ACTIONS function();
  const setUsersList = (data: User[]) => {
    usersList.value = data.map((item) => {
      const { id, firstname, lastname, email, profile, active } = item;

      return new User(id, firstname, lastname, email, profile, active);
    });
  };

  return { listUsers, setUsersList };
});
