import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/auth";

import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import UserList from "@/views/UserList.vue";
import ProductList from "@/components/ProductList.vue";
import CategoryList from "@/components/CategoryList.vue";
import BrandList from "@/components/BrandList.vue";
import UserDetail from "@/views/UserDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ****************************** NOT FOUND ********************************
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: HomeView,
      redirect: "/",
    },
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
    {
      path: "/user/:id",
      name: "user",
      component: UserDetail,
    },
    // ******************************** PRODUCTS *******************************
    {
      path: "/products",
      name: "Products",
      component: ProductList,
    },
    {
      path: "/categories",
      name: "Categories",
      component: CategoryList,
    },
    {
      path: "/brands",
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
