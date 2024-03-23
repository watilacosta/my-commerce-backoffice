<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useToast } from "vue-toastification";
import axios from "@/utils/axios";

import BackOfficeLoader from "@/components/BackOfficeLoader.vue";
import PageTitle from "@/components/PageTitle.vue";
import ServerError from "@/components/ServerError.vue";
import { useProductsStore } from "@/stores/products";
import type { Product } from "@/models/Product";
import MainModal from "@/components/MainModal.vue";
import FormProduct from "@/components/product/FormProduct.vue";

const toast = useToast();
const store = useProductsStore();

let products = store.listProducts;
let loading = ref(true);
let showTable = ref(false);
let showModal = ref(false);
let currentPage = ref(1);
let totalPages = ref(0);
let product = ref({} as Product);

onMounted(async () => {
  const data = await fetchProducts();

  if (data.length > 0) {
    store.setProductsList(data);
    products = store.listProducts;
    showTable.value = true;
  } else {
    showTable.value = false;
  }
  loading.value = false;
});

const fetchProducts = async () => {
  const auth = JSON.parse(sessionStorage.getItem("auth") || "");

  try {
    const { data } = await axios({
      method: "get",
      url: "/admin/products",
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

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const createProduct = () => {
  showModal.value = true;
};
</script>

<template>
  <BackOfficeLoader :loading="loading" />
  <div class="is-flex is-justify-content-space-between is-align-items-center my-4">
    <PageTitle title="Lista de Produtos" />
    <button class="button is-link is-responsive"
      @click="createProduct()"
      title="Cadastrar um novo produto"
    >Cadastrar</button>
  </div>
  <h3 class="is-4">Cadastre seus produtos</h3>

  <div class="table-container">
    <Transition>
      <VTable
        :data="products"
        v-if="showTable"
        v-model:currentPage="currentPage"
        :pageSize="25"
        @totalPagesChanged="totalPages = $event"
        class="table is-bordered is-narrow is-hoverable is-striped is-fullwidth"
      >
        <template #head>
          <tr>
            <v-th sortKey="title">Título</v-th>
            <v-th sortKey="price">Preço</v-th>
            <v-th sortKey="stock">Estoque Qtd.</v-th>
            <v-th sortKey="brand">Marca</v-th>
            <v-th sortKey="category">Categoria</v-th>
            <th class="has-text-centered">Opções</th>
          </tr>
        </template>
        <template #body="{ rows }">
          <tr v-for="row in rows" :key="row.id" class="has-text-centered">
            <td>{{ row.title }}</td>
            <td>{{ row.price }}</td>
            <td>{{ row.stock }}</td>
            <td>{{ row.brand }}</td>
            <td>{{ row.category }}</td>
          </tr>
        </template>
      </VTable>
    </Transition>
  </div>

  <!-- PAGINATION START -->
  <nav
    v-if="totalPages > 1"
    class="pagination is-centered mb-4"
    role="navigation"
    aria-label="pagination"
  >
    <a
      class="pagination-previous"
      :class="currentPage === 1 ? 'is-disabled' : ''"
      @click="previousPage"
    >
      Anterior
    </a>
    <a
      class="pagination-next"
      :class="currentPage === totalPages ? 'is-disabled' : ''"
      @click="nextPage"
      >Próxima</a
    >
    <ul class="pagination-list">
      <li
        v-for="page in totalPages"
        :key="page"
        :aria-label="currentPage.toString()"
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
  <!-- PAGINATION END -->

  <Teleport to="body">
    <MainModal
      :open="showModal"
      :title="'Cadastro de Produto'"
      @close="showModal = false"
    >
      <FormProduct :product="product" v-on:closeModal="showModal = false" />
    </MainModal>
  </Teleport>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
