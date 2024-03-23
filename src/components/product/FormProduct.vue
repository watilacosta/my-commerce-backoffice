<script setup lang="ts">
import { computed } from "vue";
import { useToast } from "vue-toastification";
import ProductService from "@/services/ProductService";
import type { Product } from "@/models/Product";

const service = ProductService;
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const computedProduct = computed(() => props.product as Product);

const submitForm = () => {
  service
    .create(computedProduct.value)
    .then(() => useToast().success("Produto criado com sucesso!"))
    .catch((e: Error) => useToast().error(e.message));
};
</script>
<template>
  <form @submit.prevent="submitForm">
    <div class="field">
      <label class="label">Nome</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Nome do Produto"
          v-model="computedProduct.title"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Preço</label>
      <div class="control">
        <input
          class="input"
          type="number"
          placeholder="R$ 0,00"
          v-model="computedProduct.price"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Quantidade</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          type="number"
          placeholder="Qtd"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Subject</label>
      <div class="control">
        <div class="select">
          <select>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Message</label>
      <div class="control">
        <textarea class="textarea" placeholder="Textarea"></textarea>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input type="checkbox">
          I agree to the <a href="#">terms and conditions</a>
        </label>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <label class="radio">
          <input type="radio" name="question">
          Yes
        </label>
        <label class="radio">
          <input type="radio" name="question">
          No
        </label>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link">Submit</button>
      </div>
      <div class="control">
        <button class="button is-link is-light">Cancel</button>
      </div>
    </div>
  </form>
</template>
