<script setup lang="ts">
import LogOutButton from "@/components/LogoutButton.vue";
</script>

<template>
  <nav
    class="navbar is-light mb-6"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <RouterLink to="/" class="navbar-item">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
          alt=""
        />
      </RouterLink>
      <div class="navbar-burger" data-target="mainNavbar">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div id="mainNavbar" class="navbar-menu">
      <div class="navbar-start">
        <RouterLink to="/" class="navbar-item">Início</RouterLink>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <LogOutButton />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
