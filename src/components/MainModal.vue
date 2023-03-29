<script setup lang="ts">
defineProps({
  open: Boolean,
  title: String,
});
</script>
<template>
  <Transition name="modal">
    <div class="modal main-modal" :class="{ 'is-active': open }">
      <div class="modal-background" @click="$emit('close')"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{{ title }}</p>
          <button
            class="delete"
            aria-label="close"
            @click="$emit('close')"
          ></button>
        </header>
        <section class="modal-card-body">
          <slot></slot>
        </section>
      </div>
      <button
        class="modal-close is-large"
        aria-label="close"
        @click="$emit('close')"
      ></button>
    </div>
  </Transition>
</template>
