import { defineStore } from "pinia";
import { Product } from "@/models/Product";

export const useProductsStore = defineStore("products", {
  state: () => {
    return {
      products: [] as Product[],
    };
  },
  getters: {
    listProducts: (state) => state.products,
  },
  actions: {
    setProductsList(data: Product[]) {
      this.products = data.map((item) => {
        const {
          id,
          title,
          description,
          price,
          quantity,
          in_stock,
          brand_id,
          category_id
        } = item;

        return new Product(
          id,
          title,
          description,
          price,
          quantity,
          in_stock,
          brand_id,
          category_id
        );
      });
    },
  },
  persist: true,
});
