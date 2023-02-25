<script setup lang="ts">
import router from "@/router";
import { onMounted, ref } from "vue";
import PageTitle from "@/components/PageTitle.vue";
import { useUsersStore } from "@/stores/users";
import { User } from "@/models/User";

const showDetails = ref(false);
const store = useUsersStore();
let userStorage = JSON.parse(localStorage.getItem("users") || "");
let user = userStorage.user;

onMounted(() => {
  let { id } = router.currentRoute.value.params;

  if (user.id === undefined || user.id !== Number(id)) {
    store.

    showDetails.value = true;
  }
});
</script>

<template>
  <PageTitle title="User details" />
  <div class="columns" v-if="showDetails">
    <div class="column is-two-thirds">
      <section class="panel is-primary">
        <form class="box">
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
