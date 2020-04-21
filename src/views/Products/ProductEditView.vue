<template>
  <the-layout>
    <div class="product-edit">
      <h2 class="product-edit__header">EDIT PRODUCT</h2>
      <product-form
        v-if="product"
        :product-categories="list"
        :product="product"
        @submit="onFormSubmit"
      />
    </div>
  </the-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProductForm from '@/modules/Products/ProductForm.vue';
import TheLayout from '@/components/TheLayout.vue';
import { mapActions, mapGetters, mapState } from 'vuex';

@Component({
  components: {
    ProductForm,
    TheLayout
  },
  computed: {
    ...mapGetters('products', ['byId']),
    ...mapState('categories', ['list'])
  },
  methods: {
    ...mapActions('products', ['update'])
  }
})
export default class ProductEditView extends Vue {
  @Prop({ type: Number, default: null }) public readonly id!: number;

  get product() {
    return this.byId(this.id);
  }

  public onFormSubmit(formData: object) {
    this.update({ ...formData, id: this.id });
  }
}
</script>

<style>
  .product-edit {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .product-edit__header {
    width: 100%;
  }
</style>