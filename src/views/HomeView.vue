<script>
import { defineComponent } from "vue";
import PageTitle from "@/components/PageTitle.vue";

export default defineComponent({
  components: { PageTitle },
});
</script>

<template>
  <h1 class="title is-1">Administração</h1>
  <PageTitle
    title="My Commerce"
    class="is-3 has-text-weight-light has-text-primary"
  />
</template>
