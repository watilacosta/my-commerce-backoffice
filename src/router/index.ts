import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/auth";

import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import UserList from "@/views/UsersView.vue";
import ProductsView from "@/views/ProductsView.vue";
import CategoryList from "@/components/CategoryList.vue";
import BrandList from "@/components/BrandList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ******************************** HOME ***********************************
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    // ******************************** AUTH ***********************************
    {
      path: "/login",
      name: "Login",
      component: LoginView,
    },
    // ******************************** USERS **********************************
    {
      path: "/users",
      name: "Users",
      component: UserList,
    },
    // ******************************** PRODUCTS *******************************
    {
      path: "/products",
      name: "Products",
      component: ProductsView,
    },
    // ******************************* CATEGORIES *******************************
    {
      path: "/categories",
      name: "Categories",
      component: CategoryList,
    },
    // ******************************** BRANDS *********************************
    {
      path: "/brands",
      name: "Brands",
      component: BrandList,
    },
    {
      path: "/:catchAll(.*)",
      redirect: { name: "Home" },
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
