import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const userIsAuthenticated = ref(false);
  const authToken = ref("");

  return { userIsAuthenticated, authToken };
});
