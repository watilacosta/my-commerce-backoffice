<script setup lang="ts">
import { RouterView } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { onBeforeMount } from "vue";

const authStore = useAuthStore();

onBeforeMount(() => {
  const token = sessionStorage.getItem("token");
  const authenticated = sessionStorage.getItem("authenticated");
  if (token && authenticated) {
    authStore.setAuthToken(token);
    authStore.authenticate();
  }
});
</script>

<template>
  <RouterView />
</template>
