import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/auth";

import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import UserList from "@/views/UserList.vue";
import ProductList from "@/components/ProductList.vue";
import CategoryList from "@/components/CategoryList.vue";
import BrandList from "@/components/BrandList.vue";

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
    {
      path: "/usuarios",
      name: "Users",
      component: UserList,
    },
    {
      path: "/produtos",
      name: "Products",
      component: ProductList,
    },
    {
      path: "/categorias",
      name: "Categories",
      component: CategoryList,
    },
    {
      path: "/marcas",
      name: "Brands",
      component: BrandList,
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
