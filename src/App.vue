<script setup lang="ts">
import { RouterView } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { onBeforeMount } from "vue";
import NavBar from "@/components/NavBar.vue";

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
  <NavBar v-if="authStore.isAuthenticated" />
  <div :class="authStore.isAuthenticated ? 'container' : ''">
    <RouterView />
  </div>
</template>
