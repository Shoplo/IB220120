<template>
  <the-layout>
    <template #header>
      <the-header-item
        :link="{name: 'products'}"
        label="Products"
      />
    </template>
    <div class="product-add">
      <h2 class="product-add__header">ADD PRODUCT</h2>
      <product-form
        :product-categories="list"
        @submit="onFormSubmit"
      />
    </div>
  </the-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductForm from '@/modules/Products/ProductForm.vue';
import TheLayout from '@/components/TheLayout.vue';
import TheHeaderItem from '@/components/TheHeaderItem.vue';
import { mapState, mapActions } from 'vuex';

@Component({
  components: {
    TheHeaderItem,
    ProductForm,
    TheLayout
  },
  computed: {
    ...mapState('categories', ['list'])
  },
  methods: {
    ...mapActions('products', ['add'])
  }
})
export default class ProductAddView extends Vue {
  public onFormSubmit(formData: any) {
    this.add(formData);
  }
}
</script>

<style>
  .product-add {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .product-add__header {
    width: 100%;
  }
</style>