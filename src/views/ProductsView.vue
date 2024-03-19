<script setup lang="ts">
import BackOfficeLoader from "@/components/BackOfficeLoader.vue";
import PageTitle from "@/components/PageTitle.vue";
import { ref } from "vue";

let loading = ref(true);
</script>

<template>
  <BackOfficeLoader :loading="loading" />
  <PageTitle title="Produtos" class="my-4" />
</template>

<style scoped></style>
