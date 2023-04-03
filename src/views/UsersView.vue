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
import UsersFiler from "@/views/UsersFilter.vue";

const toast = useToast();
const store = useUsersStore();
const service = UserService;
const filters = ref({
  name: { value: "", keys: ["name"] },
  email: { value: "", keys: ["email"] },
  profile: {
    value: null,
    keys: ["profile", "profile-admin", "profile-customer"],
  },
});

let users = store.listUsers;
let loading = ref(true);
let showTable = ref(false);
let showModal = ref(false);
let user = ref({} as User);

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
  <div class="table-container">
    <UsersFiler :filters="filters" />
    <Transition>
      <VTable
        :data="users"
        :filters="filters"
        v-if="showTable"
        class="table is-bordered is-narrow is-hoverable is-striped is-fullwidth my-3"
      >
        <template #head>
          <tr>
            <th class="has-text-centered">#</th>
            <th>Nome</th>
            <th>Email</th>
            <th class="has-text-centered">Perfil</th>
            <th class="is-hidden-mobile has-text-centered">Status</th>
            <th class="has-text-centered">Opções</th>
          </tr>
        </template>
        <template #body="{ rows }">
          <tr
            v-for="(row, number) in rows"
            :key="number + 1"
            class="has-text-centered"
          >
            <td>{{ number + 1 }}</td>
            <td>{{ row.name }}</td>
            <td>{{ row.email }}</td>
            <td class="has-text-centered">
              <ProfileTag :profile="row.profile" />
            </td>
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
