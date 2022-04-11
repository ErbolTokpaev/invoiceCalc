<template>
  <form @submit.prevent style="max-width: 400px">
    <div style="display: flex; justify-content: space-between">
      <input type="text" v-model="product.name" placeholder="Product Name" />
      <input type="number" v-model="product.price" />
      <input type="number" v-model="product.quantity" />
      <button @click="createProduct(product)">Add</button>
    </div>
  </form>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { IProduct } from "@/types/IProduct";
@Component
export default class ProductForm extends Vue {
  product: IProduct = {
    id: Date.now(),
    name: "",
    price: null,
    quantity: null,
  };
  createProduct(product: IProduct) {
    this.$store.commit("PUSH_PRODUCT", product);
    this.product = {
      id: 0,
      name: "",
      price: null,
      quantity: null,
    };
  }
}
</script>
