import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "@/store/types";
import { product } from "@/store/product";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
    product,
  },
};

export default new Vuex.Store<RootState>(store);
