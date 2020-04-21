<template>
  <currency-input
    :value="value"
    :allow-negative="allowNegative"
    :class="{'is-invalid': invalid}"
    :currency="currency"
    class="form-input-price"
    @blur="onBlur"
    @input="onInput"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { CurrencyInput } from 'vue-currency-input';

@Component({
  name: 'FormInputPrice',
  model: {
    prop: 'value',
    event: 'input'
  },
  components: {
    CurrencyInput
  }
})
export default class FormInputPrice extends Vue {
  @Prop({ type: Boolean, default: false }) public readonly invalid!: boolean;
  @Prop({ type: Boolean, default: false }) public readonly allowNegative!: boolean;
  @Prop({ type: Object, default: null }) public readonly currency!: null | object;
  @Prop({ type: Number, default: null }) public readonly value!: number;

  public onInput(value: any) {
    this.$emit('input', value);
  }

  public onBlur(e: any) {
    this.$emit('blur', e);
  }
}
</script>

<style>
  .form-input-price {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid gray;
    height: 25px;
  }

  .form-input-price.is-invalid {
    border-color: red;
  }
</style>