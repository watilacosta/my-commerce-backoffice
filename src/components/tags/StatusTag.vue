<script setup lang="ts">
const props = defineProps({
  active: Boolean,
  text: String,
});
</script>
<template>
  <span class="tag" :class="props.active ? 'is-primary' : 'is-light'">
    {{ active ? 'ATIVO' : 'INATIVO' }}
  </span>
</template>
