<script setup lang="ts">
import { RouterLink, useRouter } from "vue-router";

const route = useRouter();
const currentPath = route.currentRoute;
</script>

<template>
  <div class="tabs is-centered">
    <ul>
      <li :class="currentPath.path === '/usuarios' ? 'is-active' : ''">
        <RouterLink to="/usuarios" title="Usuários">
          <span class="icon is-small">
            <font-awesome-icon icon="fa-solid fa-users" />
          </span>
          <span>Usuários</span>
        </RouterLink>
      </li>
      <li :class="currentPath.path === '/produtos' ? 'is-active' : ''">
        <RouterLink to="/produtos" title="Produtos">
          <span class="icon is-small">
            <font-awesome-icon icon="fa-solid fa-bag-shopping" />
          </span>
          <span>Produtos</span>
        </RouterLink>
      </li>
      <li :class="currentPath.path === '/categorias' ? 'is-active' : ''">
        <RouterLink to="/categorias">
          <span class="icon is-small">
            <font-awesome-icon icon="fa-solid fa-tags" />
          </span>
          <span>Categorias</span>
        </RouterLink>
      </li>
      <li :class="currentPath.path === '/marcas' ? 'is-active' : ''">
        <RouterLink to="/marcas">
          <span class="icon is-small">
            <font-awesome-icon icon="fa-solid fa-store" />
          </span>
          <span>Marcas</span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
