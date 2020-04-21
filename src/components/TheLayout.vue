<template>
  <div class="the-layout">
    <div class="the-layout__header">
      <the-header>
        <slot name="header" />
      </the-header>
    </div>
    <div class="the-layout__content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TheHeader from '@/components/TheHeader.vue';

@Component({
  components: {
    TheHeader
  }
})
export default class TheLayout extends Vue {}
</script>

<style>
  .the-layout__header {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid ghostwhite;
  }
</style>