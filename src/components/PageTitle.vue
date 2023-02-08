<script setup lang="ts">
const props = defineProps({ title: String });
</script>
<template>
  <h1 class="is-size-4">{{ props.title }}</h1>
</template>
