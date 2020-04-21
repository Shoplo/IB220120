<template>
  <div class="products-list-item">
    <div class="products-list-item__name">{{ product.name }}</div>
    <div class="products-list-item__cat">{{ product.categoryLabel }}</div>
    <div class="products-list-item__price">{{ product.price | price('PLN') }}</div>
    <div class="products-list-item__desc">{{ product.description }}</div>
    <div class="products-list-item__action">
      <button-cmp @click="onEditClick(product.id)">Edit</button-cmp>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ButtonCmp from '@/components/Ui/ButtonCmp.vue';
import IProduct from '@/logic/IProduct';
import price from '@/filters/price';

@Component({
  name: 'ProductListItem',
  components: {
    ButtonCmp
  },
  filters: {
    price
  }
})
export default class ProductListItem extends Vue {
  @Prop({ type: Object, default: () => {} }) public readonly product!: IProduct;

  public onEditClick(id: any) {
    this.$router.push({ name: 'edit-products', params: { id } });
  }
}
</script>

<style>
  .products-list-item {
    display: flex;
    align-items: center;
  }

  .products-list-item__name {
    flex: 0 0 250px;
  }

  .products-list-item__cat {
    flex: 0 0 200px;
  }

  .products-list-item__price {
    flex: 0 0 120px;
  }

  .products-list-item__action {
    margin-left: auto;
  }
</style>