<template>
  <div class="form-field">
    <slot name="label">
      <label
        v-if="label"
        :for="id"
        class="form-field__label"
      >{{ label }}</label>
    </slot>
    <slot />
    <slot
      v-if="isInvalid"
      name="error"
    >
      <span
        class="form-field__error"
      >{{ errorMessage }}</span>
    </slot>
  </div>
</template>

<script lang="ts">
import FormInput from '@/components/Ui/FormInput.vue';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'FormField',
  components: {
    FormInput
  }
})
export default class FormField extends Vue {
  @Prop({ type: Boolean, default: false }) public readonly isInvalid!: boolean;
  @Prop({ type: String, default: 'This field is invalid' }) public readonly errorMessage!: string;
  @Prop({ type: String, default: null }) public readonly id!: string;
  @Prop({ type: String, default: null }) public readonly label!: string;
}
</script>

<style>
  .form-field__label,
  .form-field__error {
    font-size: 12px;
    display: block;
    text-align: left;
  }

  .form-field__label {
    margin-bottom: 5px;
    font-weight: bold;
  }

  .form-field__error {
    color: red;
    font-size: 12px;
    margin-top: 5px;
  }
</style>