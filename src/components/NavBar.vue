<script setup lang="ts">
import LogOutButton from "@/components/LogoutButton.vue";
</script>

<template>
  <nav
    class="navbar is-light mb-6"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="navbar-brand">
        <RouterLink to="/" class="navbar-item">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
            alt=""
          />
        </RouterLink>
        <div class="navbar-start">
          <RouterLink to="/" class="navbar-item">Início</RouterLink>
        </div>
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <LogOutButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
