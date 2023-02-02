import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  // STATE ref();
  const userIsAuthenticated = ref(false);
  const authToken = ref("");

  // GETTERS computed();
  const getAuthToken = computed(() => authToken.value);
  const isAuthenticated = computed(() => userIsAuthenticated.value);

  // ACTIONS function();
  const authenticate = () => (userIsAuthenticated.value = true);
  const setAuthToken = (token: string) => (authToken.value = token);

  return { authenticate, setAuthToken, getAuthToken, isAuthenticated };
});
