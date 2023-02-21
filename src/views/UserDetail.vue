<script setup lang="ts">
import router from "@/router";
import { onMounted, ref } from "vue";
import PageTitle from "@/components/PageTitle.vue";
import { User } from "@/models/User";
import { useUsersStore } from "@/stores/users";

const usersStore = useUsersStore();
const { id } = router.currentRoute.value.params;

let user = ref<User>({} as User);

onMounted(async () => {
  const data = findUser(Number(id));
  if (data) user.value = data;
});

const findUser = (id: number) => {
  return usersStore.listUsers.find((user) => {
    if (user.id === id) {
      const { id, firstname, lastname, email, profile, active } = user;

      return new User(id, firstname, lastname, email, profile, active);
    }
  });
};
</script>

<template>
  <PageTitle title="User Details" />
  <section class="panel is-primary">
    <p class="panel-heading mt-3">{{ user.name }}</p>
  </section>
</template>
