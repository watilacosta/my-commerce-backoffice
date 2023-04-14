<script setup lang="ts">
import axios from "@/utils/axios";
import { onMounted, ref } from "vue";
import { useToast } from "vue-toastification";
import { useUsersStore } from "@/stores/users";
import BackOfficeLoader from "@/components/BackOfficeLoader.vue";
import ServerError from "@/components/ServerError.vue";
import PageTitle from "@/components/PageTitle.vue";
import ProfileTag from "@/components/tags/ProfileTag.vue";
import MainModal from "@/components/MainModal.vue";
import FormUser from "@/components/user/FormUser.vue";
import { User } from "@/models/User";
import UserService from "@/services/UserService";
import UsersFiler from "@/components/user/UsersFilter.vue";

const toast = useToast();
const store = useUsersStore();
const service = UserService;
const filters = ref({
  name: { value: "", keys: ["name"] },
  email: { value: "", keys: ["email"] },
  profile: { value: "", keys: ["profile"] },
});

let users = store.listUsers;
let loading = ref(true);
let showTable = ref(false);
let showModal = ref(false);
let user = ref({} as User);
let currentPage = ref(1);
let totalPages = ref(0);

const editUser = (selectedUser: User) => {
  if (!selectedUser.active) return;

  user.value = selectedUser;
  showModal.value = true;
};

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

const toggleActiveUser = (user: User) => {
  user.active = !user.active;
  service.updateStatus(user.id, user.active).then((response) => {
    if (response) {
      toast.success(
        `Usuário ${
          response.data.active ? "ativado" : "desativado"
        } com sucesso!`
      );
    }
  });
};
</script>

<template>
  <BackOfficeLoader :loading="loading" />
  <PageTitle title="Lista de Usuários" class="my-4" />
  <UsersFiler :filters="filters" />
  <div class="table-container">
    <Transition>
      <VTable
        :data="users"
        :filters="filters"
        v-if="showTable"
        v-model:currentPage="currentPage"
        :pageSize="25"
        @totalPagesChanged="totalPages = $event"
        class="table is-bordered is-narrow is-hoverable is-striped is-fullwidth"
      >
        <template #head>
          <tr>
            <th class="has-text-centered">#</th>
            <v-th sortKey="name">Nome</v-th>
            <v-th sortKey="email">Email</v-th>
            <v-th sortKey="active" class="is-hidden-mobile has-text-centered"
              >Status</v-th
            >
            <v-th sortKey="profile" class="has-text-centered">Perfil</v-th>
            <th class="has-text-centered">Opções</th>
          </tr>
        </template>
        <template #body="{ rows }">
          <tr v-for="row in rows" :key="row.id" class="has-text-centered">
            <td>{{ row.id }}</td>
            <td>{{ row.name }}</td>
            <td>{{ row.email }}</td>
            <td class="is-hidden-mobile has-text-centered">
              <a
                class="tag"
                :class="row.active ? 'is-primary' : 'is-danger'"
                @click="toggleActiveUser(row)"
              >
                {{ row.active ? "ATIVO" : "INATIVO" }}
              </a>
            </td>
            <td class="has-text-centered">
              <ProfileTag :profile="row.profile" />
            </td>
            <td class="has-text-centered">
              <button
                :disabled="!row.active"
                @click="editUser(row)"
                title="Configurações do usuário"
                class="button is-small is-responsive is-link"
              >
                <font-awesome-icon icon="fa-solid fa-user-gear" />
              </button>
            </td>
          </tr>
        </template>
      </VTable>
    </Transition>
  </div>
  <nav class="pagination is-centered" role="navigation" aria-label="pagination">
    <a
      class="pagination-previous"
      v-if="currentPage > 1"
      @click="currentPage--"
    >
      Anterior
    </a>
    <a
      class="pagination-next"
      v-if="currentPage < totalPages"
      @click="currentPage++"
      >Próxima</a
    >
    <ul class="pagination-list">
      <li
        v-for="page in totalPages"
        :key="page"
        :aria-label="currentPage"
        @click="currentPage = page"
      >
        <a
          class="pagination-link"
          :class="currentPage === page ? 'is-current' : ''"
          >{{ page }}
        </a>
      </li>
    </ul>
  </nav>
  <Teleport to="body">
    <MainModal
      :open="showModal"
      :title="'Configurações do Usuário'"
      @close="showModal = false"
    >
      <FormUser :user="user" v-on:closeModal="showModal = false" />
    </MainModal>
  </Teleport>
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
