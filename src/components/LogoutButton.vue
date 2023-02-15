<script setup lang="ts">
import router from "@/router";
import { useAuthStore } from "@/stores/auth";
import { useToast } from "vue-toastification";

const authStore = useAuthStore();
const toast = useToast();

const logout = () => {
  sessionStorage.clear();
  authStore.reset();
  router.push("/login");
  toast.success("Sessão encerrada!");
};
</script>

<template>
  <button class="button is-primary" @click="logout">
    Sair
    <font-awesome-icon icon="fa-solid fa-right-from-bracket" class="ml-2" />
  </button>
</template>
