<template>
  <input
    :value="value"
    :class="classObject"
    class="form-input"
    @input="onInput"
    @blur="onBlur"
  >
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'FormInput',
  model: {
    prop: 'value',
    event: 'input'
  }
})
export default class FormInput extends Vue {
  @Prop({ type: [String, Number], default: null }) public readonly value!: string | number;
  @Prop({ type: Boolean, default: false }) public readonly invalid!: boolean;

  get classObject(): object {
    return {
      'is-invalid': this.invalid
    };
  }

  public onInput(e: { target: { value: any } }) {
    this.$emit('input', e.target.value, e);
  }

  public onBlur(e: any) {
    this.$emit('blur', e);
  }
}
</script>

<style scoped>
  .form-input {
    border: 1px solid grey;
    height: 25px;
    width: 100%;
    box-sizing: border-box;
  }

  .form-input.is-invalid {
    border-color: red;
  }
</style>