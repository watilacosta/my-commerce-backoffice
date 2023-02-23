import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    userIsAuthenticated: false,
    authToken: "",
  }),
  getters: {
    getAuthToken: (state) => state.authToken,
    isAuthenticated: (state) => state.userIsAuthenticated,
  },
  actions: {
    authenticate() {
      this.userIsAuthenticated = true;
    },
    setAuthToken(token: string) {
      this.authToken = token;
    },
    reset() {
      this.authToken = "";
      this.userIsAuthenticated = false;
    },
  },
  persist: {
    storage: sessionStorage,
  },
});
