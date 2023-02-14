<script setup>
import { SyncLoader } from "vue3-spinner";
const props = defineProps({ loading: Boolean });
</script>

<template>
  <div id="loader">
    <SyncLoader :loading="props.loading" />
  </div>
</template>

<style>
#loader {
  position: fixed;
  left: 49%;
  top: 50%;
  z-index: 9999;
  vertical-align: middle;
}
</style>
