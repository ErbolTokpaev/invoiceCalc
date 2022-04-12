<template>
  <v-form v-model="valid" ref="form" style="width: 100%">
    <v-row class="d-flex align-center justify-space-between">
      <v-col cols="6">
        <v-text-field
          v-model="product.name"
          label="Product name"
          :rules="[required]"
        />
      </v-col>
      <v-col cols="2">
        <v-text-field
          type="number"
          v-model.number="product.price"
          label="Price"
          :rules="[required, isPositive]"
        />
      </v-col>
      <v-col cols="2">
        <v-text-field
          type="number"
          v-model.number="product.quantity"
          label="Qty"
          @keydown="checkDot"
          :rules="[required, isPositive]"
        />
      </v-col>
      <v-col cols="1">
        <v-btn
          right
          @click="createProduct(product)"
          color="primary"
          style="text-transform: capitalize"
          >Add</v-btn
        >
      </v-col>
    </v-row>
  </v-form>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Product } from "@/types/IProduct";
@Component
export default class ProductForm extends Vue {
  required = function required(text: string | number): string | boolean {
    return !!text || "Required field";
  };
  isPositive = function (number: number): string | boolean {
    return Math.sign(number) > 0 || "Must be positive";
  };
  valid = true;
  product = new Product("", null, null, Date.now());

  createProduct(product: Product) {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      this.$store.dispatch("addProducts", product);
      this.product = new Product("", null, null, Date.now());
      this.resetForm();
    }
  }
  resetForm(): void {
    (this.$refs.form as Vue & { reset: () => boolean }).reset();
  }
  checkDot(event: any): void {
    if (event.key === "." || event.key === ",") {
      event.preventDefault();
    }
  }
}
</script>
