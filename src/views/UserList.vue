<script setup lang="ts">
import PageTitle from "@/components/PageTitle.vue";
import { onMounted, ref } from "vue";
import axios from "@/utils/axios";
import BackOfficeLoader from "@/components/BackOfficeLoader.vue";
import { useUsersStore } from "@/stores/users";
import { useToast } from "vue-toastification";
import ServerError from "@/components/ServerError.vue";
import TagComponent from "@/components/tags/StatusTag.vue";
import ActiveTag from "@/components/tags/StatusTag.vue";
import ProfileTag from "@/components/tags/ProfileTag.vue";

interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  profile: string;
  active: boolean;
}

const usersStore = useUsersStore();
const users = usersStore.listUsers as User[];
const toast = useToast();

let loading = ref(true);
let showTable = ref(false);

onMounted(async () => {
  const data = await fetchUsers();

  if (data) {
    usersStore.setUsersList(data);
    loading.value = false;
    showTable.value = true;
  }
});

const fetchUsers = async () => {
  try {
    const { data } = await axios({
      method: "get",
      url: "/admin/users",
      headers: { Authorization: sessionStorage.getItem("token") },
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
            <th>Nome</th>
            <th>Email</th>
            <th class="has-text-centered">Perfil</th>
            <th class="is-hidden-mobile has-text-centered">Status</th>
            <th class="has-text-centered">Opções</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, number) in users" :key="number">
            <td>{{ user.firstname }} {{ user.lastname }}</td>
            <td>{{ user.email }}</td>
            <td class="has-text-centered">
              <ProfileTag :profile="user.profile" />
            </td>
            <td class="is-hidden-mobile has-text-centered">
              <ActiveTag :active="user.active" />
            </td>
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
