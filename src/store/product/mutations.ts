import { MutationTree } from "vuex";
import { ProductState } from "@/store/product/types";
import { IProducts, Product } from "@/types/IProduct";

export const mutations: MutationTree<ProductState> = {
  INIT(state) {
    const json = localStorage.getItem("products");
    if (json !== null) {
      const products: IProducts = JSON.parse(json);
      state.products = products.map((value) => {
        return Object.assign(new Product(), value);
      });
    }
  },
  PUSH_PRODUCT(state, payload: Product) {
    state.products.push(payload);
  },
  FILTER_PRODUCTS(state, payload: Product[]) {
    state.products = [
      ...state.products.filter(
        (product: Product) =>
          !payload.map((p: Product) => p.id).includes(product.id)
      ),
    ];
  },
};
