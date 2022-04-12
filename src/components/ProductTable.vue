<template>
  <div style="width: 100%">
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="products"
      item-key="id"
      hide-default-footer
      show-select
      class="elevation-1"
    >
      <template v-slot:footer>
        <v-row class="justify-space-between align-center">
          <v-col>
            <v-btn
              v-if="products.length > 0"
              small
              color="error"
              dark
              class="ma-2"
              @click="removeProducts"
            >
              Delete
            </v-btn>
          </v-col>
          <v-col class="pr-10">
            <span class="title" style="float: right">
              Total: ${{ totalSum }}
            </span>
          </v-col>
        </v-row>
      </template>
    </v-data-table>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { IProduct } from "@/types/IProduct";
@Component
export default class ProductTable extends Vue {
  @Prop({
    default: () => {
      return [];
    },
  })
  private products!: Array<IProduct>;
  @Prop() readonly totalSum!: number;
  selected: Array<IProduct> = [];
  headers: Array<any> = [
    { text: "Product Name", value: "name" },
    { text: "Price", value: "price" },
    { text: "Qty", value: "quantity" },
    { text: "Sum", value: "sumString" },
  ];
  removeProducts() {
    if (this.selected.length === 0) {
      return;
    }
    this.$store.dispatch("removeProducts", this.selected);
  }
}
</script>
<style lang="scss" scoped></style>
