import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
// import { IProduct } from "@/types/IProduct";
import { RootState } from "@/store/types";
import { product } from "@/store/product";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    helloMessage: "Helaasdf",
  },
  modules: {
    product,
  },
};

export default new Vuex.Store<RootState>(store);
// export default new Vuex.Store({
//   state: {
//     products: IProducts;
//   },
//   getters: {},
//   mutations: {
//     ADD_PRODUCT(state, product: IProduct) {
//       state.products.push(product);
//     },
//   },
//   actions: {
//     addProduct({ commit }, product: IProduct) {
//       commit("ADD_PRODUCT", product);
//     },
//   },
//   modules: {},
// });
