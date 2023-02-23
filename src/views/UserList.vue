<script setup lang="ts">
import axios from "@/utils/axios";
import { onMounted, ref } from "vue";
import { useToast } from "vue-toastification";
import { useUsersStore } from "@/stores/users";

import PageTitle from "@/components/PageTitle.vue";
import BackOfficeLoader from "@/components/BackOfficeLoader.vue";
import ServerError from "@/components/ServerError.vue";
import ActiveTag from "@/components/tags/StatusTag.vue";
import ProfileTag from "@/components/tags/ProfileTag.vue";

const toast = useToast();
const store = useUsersStore();

let users = store.listUsers;
let loading = ref(true);
let showTable = ref(false);

onMounted(async () => {
  const data = await fetchUsers();

  if (data) {
    store.setUsersList(data);
    users = store.listUsers;
    loading.value = false;
    showTable.value = true;
  }
});

const fetchUsers = async () => {
  const auth = JSON.parse(sessionStorage.getItem("auth") || "");

  try {
    const { data } = await axios({
      method: "get",
      url: "/admin/users",
      headers: { Authorization: auth.authToken },
    });

    return data;
  } catch (error) {
    loading.value = false;
    showTable.value = false;
    toast.info(ServerError);
    console.warn(ServerError);
  }
};
</script>

<template>
  <BackOfficeLoader :loading="loading" />
  <PageTitle title="Lista de Usuários" class="my-4" />
  <div class="table-container">
    <Transition>
      <table
        class="table is-bordered is-narrow is-hoverable is-striped is-fullwidth my-3"
        v-if="showTable"
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Email</th>
            <th class="has-text-centered">Perfil</th>
            <th class="is-hidden-mobile has-text-centered">Status</th>
            <th class="has-text-centered">Opções</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, number) in users" :key="number">
            <td>{{ number + 1 }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td class="has-text-centered">
              <ProfileTag :profile="user.profile" />
            </td>
            <td class="is-hidden-mobile has-text-centered">
              <ActiveTag :active="user.active" />
            </td>
            <td class="has-text-centered">
              <RouterLink
                :to="{ name: 'user', params: { id: user.id } }"
                title="User Detail"
                class="button is-small is-responsive is-link"
              >
                <font-awesome-icon icon="fa-solid fa-user-gear" />
              </RouterLink>
            </td>
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
