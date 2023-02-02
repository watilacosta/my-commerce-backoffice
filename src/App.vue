<script setup lang="ts">
import { RouterView } from "vue-router";
import { onBeforeMount } from "vue";
import { useAuthStore } from "@/stores/auth";

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
  <div class="container">
    <RouterView />
  </div>
</template>
