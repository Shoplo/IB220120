<template>
  <form
    class="product-form"
    @submit="onFormSubmit"
  >
    <form-field
      :is-invalid="isProductNameInvalid"
      label="Product name"
      class="product-form__field"
    >
      <form-input
        v-model.trim="productName"
        :invalid="isProductNameInvalid"
        @blur="onProductNameBlur"
      />
    </form-field>
    <form-field
      :is-invalid="isProductDescInvalid"
      label="Product description"
      class="product-form__field"
    >
      <form-text-area
        v-model.trim="productDesc"
        :invalid="isProductDescInvalid"
        @blur="onProductDescBlur"
        class="product-form__desc"
      />
    </form-field>
    <form-field
      :is-invalid="isProductCatInvalid"
      label="Product category"
      class="product-form__field"
    >
      <form-select
        v-model.trim="productCat"
        :options="productCategories"
        @blur="onProductCatBlur"
      />
    </form-field>
    <form-field
      :is-invalid="isProductPriceInvalid"
      label="Product price"
      error-message="This fiels is required and should be a number."
      class="product-form__field"
    >
      <form-input-price
        v-model="productPrice"
        :invalid="isProductPriceInvalid"
        @blur="onProductPriceBlur"
      />
    </form-field>
    <button-cmp
      type="submit"
      class="product-form__button"
    >Submit
    </button-cmp>
  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import FormField from '@/components/Ui/FormField.vue';
import FormInput from '@/components/Ui/FormInput.vue';
import FormTextArea from '@/components/Ui/FormTextArea.vue';
import FormSelect from '@/components/Ui/FormSelect.vue';
import ButtonCmp from '@/components/Ui/ButtonCmp.vue';
import FormInputPrice from '@/components/Ui/FormInputPrice.vue';
import IProductCategory from '@/logic/IProductCategory';
import IProduct from '@/logic/IProduct';

@Component({
  components: {
    FormField,
    FormInput,
    FormTextArea,
    FormSelect,
    ButtonCmp,
    FormInputPrice
  }
})
export default class ProductForm extends Vue {
  @Prop({ type: Array, default: () => [] }) public readonly productCategories!: IProductCategory[];
  @Prop({ type: Object, default: () => {} }) public readonly product!: IProduct;

  public productName: string = '';
  public productDesc: string = '';
  public productCat: any = '';
  public productPrice: number = 0;

  public isProductNameToched: boolean = false;
  public isProductDescToched: boolean = false;
  public isProductCatToched: boolean = false;
  public isProductPriceToched: boolean = false;

  public created() {
    if (this.product) {
      this.productName = this.product.name;
      this.productDesc = this.product.description;
      this.productCat = this.product.category;
      this.productPrice = this.product.price;
    }
  }

  get isProductNameInvalid(): boolean {
    return !this.productName && this.isProductNameToched;
  }

  get isProductDescInvalid(): boolean {
    return !this.productDesc && this.isProductDescToched;
  }

  get isProductCatInvalid(): boolean {
    return !this.productCat && this.isProductCatToched;
  }

  get isProductPriceInvalid(): boolean {
    return !this.productPrice && this.isProductPriceToched;
  }

  get isFormValid(): boolean {
    return (
      !this.isProductNameInvalid &&
      !this.isProductCatInvalid &&
      !this.isProductDescInvalid &&
      !this.isProductPriceInvalid
    );
  }

  public onProductNameBlur(): void {
    this.isProductNameToched = true;
  }

  public onProductDescBlur(): void {
    this.isProductDescToched = true;
  }

  public onProductCatBlur(): void {
    this.isProductCatToched = true;
  }

  public onProductPriceBlur(): void {
    this.isProductPriceToched = true;
  }

  public touchAllFields(): void {
    this.isProductNameToched = true;
    this.isProductCatToched = true;
    this.isProductDescToched = true;
    this.isProductPriceToched = true;
  }

  public onFormSubmit(e: { preventDefault: () => void }): void {
    e.preventDefault();
    this.touchAllFields();

    if (this.isFormValid) {
      this.$emit('submit', {
        name: this.productName,
        description: this.productDesc,
        category: parseInt(this.productCat),
        price: this.productPrice
      });
    }
  }
}
</script>

<style>
  .product-form {
    max-width: 500px;
    width: 100%;
  }

  .product-form__field {
    margin-bottom: 40px;
  }

  .product-form__desc {
    resize: none;
    height: 120px;
  }

  .product-form__button {
    margin-top: 20px;
    padding: 10px;
    border-radius: 0;
    border: 1px solid grey;
    cursor: pointer;
  }
</style>