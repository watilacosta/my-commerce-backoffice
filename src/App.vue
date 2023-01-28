<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import router from "@/router";

router.beforeEach(async (to) => {
  const isAuthenticated: boolean = false;

  if (!isAuthenticated && to.name !== "Login") {
    return { name: "Login" };
  }
});
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
