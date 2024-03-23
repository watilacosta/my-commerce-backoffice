import type { Product } from "@/models/Product";
import axios from "@/utils/axios";

class ProductService {
  private path = "/admin/products";
  private auth = JSON.parse(sessionStorage.getItem("auth") || '{"auth": null}');

  list(): Promise<any> {
    return axios({
      method: "get",
      url: this.path,
      headers: { Authorization: this.auth.authToken },
    });
  }

  create(product: Product): Promise<any> {
    return axios({
      method: "post",
      url: this.path,
      data: { product: product },
      headers: { Authorization: this.auth.authToken },
    });
  }
}

export default new ProductService();