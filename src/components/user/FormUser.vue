<script setup lang="ts">
import { computed } from "vue";
import { User } from "@/models/User";

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});

const computedUser = computed(() => props.user as User);
const submitForm = () => {
  console.log(computedUser.value.name);
};
</script>
<template>
  <form @submit.prevent="submitForm">
    <div class="field">
      <label class="label">Nome</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input is-success"
          type="text"
          placeholder="Nome completo"
          v-model="computedUser.name"
        />
        <span class="icon is-small is-left">
          <font-awesome-icon icon="fa-solid fa-user" />
        </span>
        <span class="icon is-small is-right">
          <font-awesome-icon icon="fa-solid fa-check" />
        </span>
      </div>
    </div>
    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input is-success"
          type="text"
          placeholder="Nome completo"
          v-model="computedUser.email"
        />
        <span class="icon is-small is-left">
          <font-awesome-icon icon="fa-solid fa-envelope" />
        </span>
        <span class="icon is-small is-right">
          <font-awesome-icon icon="fa-solid fa-check" />
        </span>
      </div>
    </div>
    <div class="field">
      <div class="columns">
        <div class="column">
          <label class="checkbox label">
            <input
              type="checkbox"
              :checked="computedUser.profile === 'admin'"
              v-model="computedUser.profile"
            />
            Admin
          </label>
        </div>
        <div class="column"></div>
      </div>
    </div>
    <button class="button is-primary" type="submit">Salvar</button>
  </form>
</template>
