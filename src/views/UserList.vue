<script setup lang="ts">
import PageTitle from "@/components/PageTitle.vue";
import { onMounted, ref } from "vue";
import api from "@/utils/api";

let users = ref([]);

onMounted(async () => {
  // TODO: trocar essa chamada direta na api em um service
  const result = await api.get("/admin/users");
  users.value = result.data.data;
});
</script>

<template>
  <PageTitle title="Lista de Usuários" />
  <div v-for="user in users" :key="user.attributes.id">
    <p>
      <span>
        <strong>{{ user.id }}</strong>
      </span>
      - {{ user.attributes.firstname }}
    </p>
  </div>
</template>
