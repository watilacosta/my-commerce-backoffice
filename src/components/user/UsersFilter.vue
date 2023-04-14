<template>
  <div class="box">
    <div class="title is-5">Filtros de busca</div>
    <div class="field-body">
      <div class="field mb-2">
        <div class="control">
          <label class="radio">
            <input
              type="radio"
              name="profile"
              value=""
              checked
              v-model="filters.profile.value"
            />
            TODOS
          </label>
          <label class="radio">
            <input
              type="radio"
              name="profile"
              value="ADMIN"
              v-model="filters.profile.value"
            />
            ADMIN
          </label>
          <label class="radio">
            <input
              type="radio"
              name="profile"
              value="CUSTOMER"
              v-model="filters.profile.value"
            />
            CUSTOMER
          </label>
        </div>
      </div>
    </div>
    <div class="field-body">
      <div class="field">
        <input
          class="input"
          v-model="filters.name.value"
          placeholder="Busca por nome"
        />
      </div>
      <div class="field">
        <input
          class="input"
          v-model="filters.email.value"
          placeholder="Busca por email"
        />
      </div>
      <div class="field">
        <button class="button is-responsive is-fullwidth" @click="resetFilters">
          Limpar Filtros
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  filters: {
    profile: { value: string };
    name: { value: string };
    email: { value: string };
  };
}>();

const filters = ref(props.filters);
const resetFilters = () => {
  filters.value.email.value = "";
  filters.value.name.value = "";
  filters.value.profile.value = "";
};
</script>
