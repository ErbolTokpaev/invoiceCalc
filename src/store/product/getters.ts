import { GetterTree } from "vuex";
import { RootState } from "@/store/types";
import { ProductState } from "@/store/product/types";
import { Product } from "@/types/IProduct";

export const getters: GetterTree<ProductState, RootState> = {
  getTotalSum(state): number {
    return state.products.reduce((sum: number, el: Product) => el.sum + sum, 0);
  },
};
