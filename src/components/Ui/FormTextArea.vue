<template>
  <textarea
    :value="value"
    @input="onInput"
    @blur="onBlur"
    :class="classObject"
    class="form-text-area"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FormTextArea extends Vue {
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

<style>
  .form-text-area {
    border: 1px solid grey;
    height: 25px;
    width: 100%;
    box-sizing: border-box;
  }

  .form-text-area.is-invalid {
    border-color: red;
  }
</style>