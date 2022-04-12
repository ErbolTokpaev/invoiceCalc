<template>
  <div
    class="d-flex flex-column align-center mx-auto pt-5"
    style="max-width: 1000px; width: 100%"
  >
    <ProductForm></ProductForm>
    <ProductTable :products="products" :totalSum="totalSum"></ProductTable>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProductForm from "@/components/ProductForm.vue";
import ProductTable from "@/components/ProductTable.vue";
@Component({
  components: {
    ProductTable,
    ProductForm,
  },
})
export default class HomeView extends Vue {
  get products() {
    return this.$store.state.product.products;
  }
  get totalSum() {
    return this.$store.getters.getTotalSum;
  }
  mounted() {
    this.$store.commit("INIT");
  }
}
</script>
<style></style>
