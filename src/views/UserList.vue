<script setup lang="ts">
import PageTitle from "@/components/PageTitle.vue";
import { onMounted, ref } from "vue";
import api from "@/utils/api";
import BackOfficeLoader from "@/components/BackOfficeLoader.vue";

let users = ref([]);
let loading = ref(true);
let showTable = ref(false);

onMounted(async () => {
  const result = await api({
    method: "get",
    url: "/admin/users",
    headers: { Authorization: sessionStorage.getItem("token") },
  });

  users.value = result.data;
  loading.value = false;
  showTable.value = true;
});
</script>

<template>
  <PageTitle title="Lista de Usuários" class="has-text-centered my-4" />
  <BackOfficeLoader :loading="loading" />
  <div class="table-container">
    <Transition>
      <table
        class="table is-bordered is-narrow is-hoverable is-striped is-fullwidth my-3"
        v-if="showTable"
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
          <tr v-for="user in users" :key="user.id">
            <td>{{ `${user.firstname} ${user.lastname}` }}</td>
            <td>{{ user.email }}</td>
            <td class="has-text-centered">{{ user.profile }}</td>
            <td class="is-hidden-mobile has-text-centered">{{ user.status }}</td>
            <td class="has-text-centered"></td>
          </tr>
        </tbody>
      </table>
    </Transition>
  </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
