<script setup lang="ts">
import { onMounted, ref, onUnmounted } from "vue";
import { useToast } from "vue-toastification";
import axios from "@/utils/axios";

import BackOfficeLoader from "@/components/BackOfficeLoader.vue";
import PageTitle from "@/components/PageTitle.vue";
import ServerError from "@/components/ServerError.vue";
import { useProductsStore } from "@/stores/products";

const toast = useToast();
const store = useProductsStore();

let products    = store.listProducts;
let loading     = ref(true);
let showTable   = ref(false);
let currentPage = ref(1);
let totalPages  = ref(0);

onMounted(async () => {
  const data = await fetchProducts();

  if (data) {
    loading.value = false;
    store.setProductsList(data);
    products = store.listProducts;
    showTable.value = true;
  }
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
</script>

<template>
  <BackOfficeLoader :loading="loading" />
  <PageTitle title="Lista de Produtos" class="my-4" />
  <h3 class="is-4">Cadastre seus produtos</h3>

  <div class="table-container">
    <Transition>
      <Vtable
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
      </Vtable>
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
