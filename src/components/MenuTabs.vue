<script setup lang="ts">
import { RouterLink, useRouter } from "vue-router";

const route = useRouter();
const currentPath = route.currentRoute;
</script>

<template>
  <div class="tabs is-centered">
    <ul>
      <li :class="currentPath.path === '/usuarios' ? 'is-active' : ''">
        <RouterLink to="/usuarios">
          <span class="icon is-small">
            <i class="fas fa-image" aria-hidden="true"></i>
          </span>
          <span>Usuários</span>
        </RouterLink>
      </li>
      <li :class="currentPath.path === '/produtos' ? 'is-active' : ''">
        <RouterLink to="/produtos">
          <span class="icon is-small">
            <i class="fas fa-music" aria-hidden="true"></i>
          </span>
          <span>Produtos</span>
        </RouterLink>
      </li>
      <li :class="currentPath.path === '/categorias' ? 'is-active' : ''">
        <RouterLink to="/categorias">
          <span class="icon is-small"
            ><i class="fas fa-film" aria-hidden="true"></i
          ></span>
          <span>Categorias</span>
        </RouterLink>
      </li>
      <li :class="currentPath.path === '/marcas' ? 'is-active' : ''">
        <RouterLink to="/marcas">
          <span class="icon is-small"
            ><i class="far fa-file-alt" aria-hidden="true"></i
          ></span>
          <span>Marcas</span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
