import { MutationTree } from "vuex";
import { ProductState } from "@/store/product/types";
import { IProduct } from "@/types/IProduct";

export const mutations: MutationTree<ProductState> = {
  PUSH_PRODUCT(state, payload: IProduct) {
    state.products.push(payload);
  },
};
