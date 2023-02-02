import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import { useAuthStore } from "@/stores/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: HomeView,
      redirect: "/",
    },
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "Login",
      component: LoginView,
    },
  ],
});

// NAVIGATION GUARD
router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();

  if (!authStore.isAuthenticated && to.name !== "Login")
    next({ name: "Login" });
  else if (authStore.isAuthenticated && to.name === "Login") next({ name: "" });
  else next();
});

export default router;
