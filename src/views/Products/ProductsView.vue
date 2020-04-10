<template>
  <the-layout>
    <template #header>
      <the-header-item
        :link="{name: 'add-products'}"
        label="Add product"
      />
    </template>
    <div class="product-view">
      <h2>Products</h2>
      <products-list
        v-if="products.length"
        :products="products"
      />
    </div>
  </the-layout>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductsList from '@/modules/Products/ProductsList.vue';
import TheLayout from '@/components/TheLayout.vue';
import TheHeaderItem from '@/components/TheHeaderItem.vue';
import { mapGetters } from 'vuex';

@Component({
  components: {
    ProductsList,
    TheHeaderItem,
    TheLayout
  },
  computed: {
    ...mapGetters('products', ['products'])
  }
})
export default class ProductsView extends Vue {}
</script>
