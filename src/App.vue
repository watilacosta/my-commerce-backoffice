<script setup lang="ts">
import { RouterView } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { onMounted } from "vue";

import NavBar from "@/components/NavBar.vue";
import MenuTabs from "@/components/MenuTabs.vue";

const authStore = useAuthStore();

onMounted(() => {
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
    <MenuTabs v-if="authStore.isAuthenticated" />
    <RouterView />
  </div>
</template>
