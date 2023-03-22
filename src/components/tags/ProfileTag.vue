<script setup lang="ts">
const props = defineProps({
  profile: String,
});
</script>
<template>
  <span
    class="tag"
    :class="props.profile === 'admin' ? 'is-black' : 'is-white'"
  >
    {{ props.profile.toUpperCase() }}
  </span>
</template>
