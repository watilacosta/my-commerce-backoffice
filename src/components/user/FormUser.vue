<script setup lang="ts">
import { computed } from "vue";
import { User } from "@/models/User";
import UserService from "@/services/UserService";

const service = UserService;

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});

const computedUser = computed(() => props.user as User);

const submitForm = () => {
  service
    .update(computedUser.value)
    .then((response) => console.log(response))
    .catch((e: Error) => console.log(e));
};

const isAdmin = () => computedUser.value.profile === "admin";
</script>
<template>
  <form @submit.prevent="submitForm">
    <div class="field is-horizontal">
      <div class="field-label">
        <label class="label">Nome</label>
      </div>
      <div class="field-body">
        <div class="field">
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
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-label">
        <label class="label">Email</label>
      </div>
      <div class="field-body">
        <div class="field">
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
      </div>
    </div>
    <div class="field is-horizontal mt-5">
      <div class="field-label">
        <label class="label">Admin</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" :checked="isAdmin" />
              {{ isAdmin ? "Sim" : "Não" }}
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="control is-flex is-justify-content-flex-end">
      <button class="button is-primary is-medium is-responsive" type="submit">
        Atualizar
      </button>
    </div>
  </form>
</template>
