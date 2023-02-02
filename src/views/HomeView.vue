<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
</script>

<template>
  <header>
    <div class="wrapper">
      <h1 class="title">Dashboard Administrativo</h1>
      <h3 class="subtitle">Dados de sessão</h3>
      <ul>
        <li>
          <span><b>Token: </b></span>{{ authStore.getAuthToken }}
        </li>
        <li>
          <span>
            <b>Authenticate:</b>
          </span>
          {{ authStore.isAuthenticated ? "Sim" : "Não" }}
        </li>
      </ul>
      <hr />
      <nav>
        <RouterLink to="/">Início</RouterLink> |
        <RouterLink to="/login">Login</RouterLink>
      </nav>
    </div>
  </header>
  <div class="container">
    <h1 class="title">Home</h1>
  </div>
</template>
