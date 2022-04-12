import { ActionTree } from "vuex";
import { ProductState } from "@/store/product/types";
import { RootState } from "@/store/types";
import { Product } from "@/types/IProduct";

export const actions: ActionTree<ProductState, RootState> = {
  addProducts({ commit, dispatch }, payload: Product) {
    commit("PUSH_PRODUCT", payload);
    dispatch("setLocalStorage");
  },
  removeProducts({ commit, dispatch }, payload: Product[]) {
    commit("FILTER_PRODUCTS", payload);
    dispatch("setLocalStorage");
  },
  setLocalStorage({ state }) {
    localStorage.setItem("products", JSON.stringify(state.products));
    if (state.products.length === 0) {
      localStorage.removeItem("products");
    }
  },
};
