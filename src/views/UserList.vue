<script setup lang="ts">
import PageTitle from "@/components/PageTitle.vue";
import { onMounted, ref } from "vue";
import api from "@/utils/api";

let users = ref([]);

onMounted(async () => {
  const result = await api.get("/admin/users");
  users.value = result.data;
});
</script>

<template>
  <PageTitle title="Lista de Usuários" />
  <div class="table-container">
    <table
      class="table is-bordered is-narrow is-hoverable is-striped is-fullwidth my-5"
    >
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th class="has-text-centered">Perfil</th>
          <th class="is-hidden-mobile has-text-centered">Status</th>
          <th class="has-text-centered">Opções</th>
        </tr>
      </thead>
      <tbody>
        <tr
          :class="user.profile === 'admin' ? 'has-background-info-dark has-text-white' : ''"
          v-for="user in users"
          :key="user.id"
        >
          <td>{{ `${user.firstname} ${user.lastname}` }}</td>
          <td>{{ user.email }}</td>
          <td class="has-text-centered">{{ user.profile }}</td>
          <td class="is-hidden-mobile has-text-centered">{{ user.status }}</td>
          <td class="has-text-centered"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
