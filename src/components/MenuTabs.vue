<script setup lang="ts">
import { RouterLink, useRouter } from "vue-router";

const route = useRouter();
const currentPath = route.currentRoute;
</script>

<template>
  <div class="tabs is-centered">
    <ul>
      <li :class="currentPath.path === '/users' ? 'is-active' : ''">
        <RouterLink to="/users" title="Users">
          <span class="icon is-small">
            <font-awesome-icon icon="fa-solid fa-users" />
          </span>
          <span>Users</span>
        </RouterLink>
      </li>
      <li :class="currentPath.path === '/products' ? 'is-active' : ''">
        <RouterLink to="/products" title="Products">
          <span class="icon is-small">
            <font-awesome-icon icon="fa-solid fa-bag-shopping" />
          </span>
          <span>Products</span>
        </RouterLink>
      </li>
      <li :class="currentPath.path === '/categories' ? 'is-active' : ''">
        <RouterLink to="/categories">
          <span class="icon is-small">
            <font-awesome-icon icon="fa-solid fa-layer-group" />
          </span>
          <span>Categories</span>
        </RouterLink>
      </li>
      <li :class="currentPath.path === '/brands' ? 'is-active' : ''">
        <RouterLink to="/brands">
          <span class="icon is-small">
            <font-awesome-icon icon="fa-solid fa-store" />
          </span>
          <span>Brands</span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
