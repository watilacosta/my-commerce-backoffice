<script setup>
import { FadeLoader } from "vue3-spinner";
const props = defineProps({ loading: Boolean });

const color = "#33CC99";
</script>

<template>
  <div id="loader">
    <FadeLoader :loading="props.loading" :color="color" :size="300" />
  </div>
</template>

<style>
#loader {
  position: fixed;
  left: 50%;
  top: 50%;
  width: 100%;
  height: 100%;
  z-index: 9999;
  text-align: center;
  vertical-align: middle;
}

#loader:before {
  content: attr(data-wordLoad);
  position: absolute;
  top: calc(50% + 150px);
  left: calc(50% - 90px);
  width: 180px;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  font-size: 1.5rem;
}
</style>
