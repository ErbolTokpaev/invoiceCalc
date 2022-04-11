<template>
  <div class="my-table">
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Sum</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>
            <label>
              <input type="checkbox" />
            </label>
          </td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.quantity }}</td>
          <td>{{ product.quantity * product.price }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <span>sadkfj</span>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { PropType } from "vue";
import { IProduct } from "@/types/IProduct";
@Component
export default class ProductTable extends Vue {
  get products() {
    return this.$store.state.product.products;
  }
  // public product: Object as PropType<IProduct>,
}
</script>
