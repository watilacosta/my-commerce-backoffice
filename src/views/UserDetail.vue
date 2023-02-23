<script setup lang="ts">
import router from "@/router";
import { onMounted, ref } from "vue";
import PageTitle from "@/components/PageTitle.vue";
import { User } from "@/models/User";
import { useUsersStore } from "@/stores/users";

const usersStore = useUsersStore();

let user = ref<User>({} as User);

onMounted(async () => {
  const { id } = router.currentRoute.value.params;
  const data = findUser(Number(id));

  if (data) {
    user.value = data;
    sessionStorage.setItem("editUserId", id.toString());
  }
});

const findUser = (id: User["id"]) => {
  return usersStore.listUsers.find((user) => {
    if (user.id === id) {
      const { id, firstname, lastname, email, profile, active } = user;

      return new User(id, firstname, lastname, email, profile, active);
    }
  });
};

const updateUser = () => {
  console.log(user.value);
  localStorage.removeItem("userId");
};
</script>

<template>
  <PageTitle title="Use details" />
  <div class="columns">
    <div class="column is-two-thirds">
      <section class="panel is-primary">
        <form class="box" @submit.prevent="updateUser">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Full name"
                v-model.trim="user.name"
                required
              />
            </div>
          </div>
          <div class="field">
            <label class="label">E-mail</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="E-email"
                v-model.trim="user.email"
                required
              />
            </div>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>
