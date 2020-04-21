<template>
  <button
    class="button-cmp"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'ButtonCmp'
})
export default class ButtonCmp extends Vue {
  public onClick(e: any) {
    this.$emit('click', e);
  }
}
</script>

<style>
  .button-cmp {
    padding: 10px;
    border-radius: 0;
    border: 1px solid grey;
    cursor: pointer;
  }
</style>