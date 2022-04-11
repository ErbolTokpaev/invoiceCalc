<template>
  <div
    style="
      max-width: 12000px;
      width: 1200px;
      display: flex;
      flex-direction: column;
      align-content: center;
      margin: 0 auto;
    "
  >
    <h1>Vue Invoice calc</h1>
    <ProductForm></ProductForm>
    <span>{{ helloMessage }}</span>
    <product-table></product-table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ProductForm from "@/components/ProductForm.vue";
import ProductTable from "@/components/ProductTable.vue";
@Component({
  components: {
    ProductTable,
    ProductForm,
  },
})
export default class HomeView extends Vue {
  get helloMessage() {
    return this.$store.state.product.products;
  }
}
</script>
<style>
span {
  color: red;
}
</style>
