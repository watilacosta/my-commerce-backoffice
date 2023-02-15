import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { User } from "@/models/User";

export const useUsersStore = defineStore("users", () => {
  // STATE ref();
  const usersList = ref<User[]>([]);

  // GETTERS computed();
  const listUsers = computed(() => usersList.value);

  // ACTIONS function();
  const setUsersList = (data: User[]) => {
    usersList.value.push(...data);
  };

  return { listUsers, setUsersList };
});
