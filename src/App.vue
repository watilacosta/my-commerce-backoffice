<script setup lang="ts">
import { RouterView } from "vue-router";
import router from "@/router";
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";

const authStore = useAuthStore();
const { userIsAuthenticated } = storeToRefs(authStore);

router.beforeEach(async (to) => {
  if (!userIsAuthenticated.value && to.name !== "Login") {
    return { name: "Login" };
  }
});
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
