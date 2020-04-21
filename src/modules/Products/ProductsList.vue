<template>
  <ul class="products-list">
    <li
      v-for="product in products"
      class="products-list__item"
    >
      <products-list-item
        :key="product.id"
        :product="product"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProductsListItem from '@/modules/Products/ProductsListItem.vue';
import IProduct from '@/logic/IProduct';

@Component({
  name: 'ProductList',
  components: {
    ProductsListItem
  }
})
export default class ProductList extends Vue {
  @Prop({ type: Array, default: () => [] }) public readonly products!: IProduct[];
}
</script>

<style>
  .products-list {
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: left;
  }

  .products-list__item {
    margin-bottom: 10px;
    background: #c8c8c8;
    padding: 10px;
  }
</style>