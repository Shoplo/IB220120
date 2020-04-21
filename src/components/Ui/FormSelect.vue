<template>
  <select
    :id="id"
    :value="value"
    @change="onChange"
    @focus="onFocus"
    class="form-select"
    :class="classObject"
  >
    <option
      v-for="option in options"
      v-bind:value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'FormSelect',
  model: {
    prop: 'value',
    event: 'change'
  }
})
export default class FormSelect extends Vue {
  @Prop({ type: Array, default: () => [] }) public readonly options!: object[];
  @Prop({ type: [String, Number], default: null }) public readonly value!: string | number;
  @Prop({ type: String, default: null }) public readonly id!: string;
  @Prop({ type: Boolean, default: false }) public readonly invalid!: boolean;

  public onChange(e: { target: { value: any } }) {
    this.$emit('change', e.target.value);
  }

  public onFocus(e: any) {
    this.$emit('focus', e);
  }

  get classObject(): object {
    return {
      'is-invalid': this.invalid
    };
  }
}
</script>

<style>
  .form-select {
    width: 100%;
    border: 1px solid grey;
  }

  .form-select.is-invalid {
    border-color: red;
  }
</style>