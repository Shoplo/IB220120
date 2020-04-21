<template>
  <div class="the-header">
    <slot>
      <the-header-item
        :link="{name: 'products'}"
        label="Products"
        class="the-header__item"
      />
      <the-header-item
        :link="{name: 'add-products'}"
        label="Add Product"
        class="the-header__item"
      />
    </slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TheHeaderItem from '@/components/TheHeaderItem.vue';

@Component({
  components: {
    TheHeaderItem
  }
})
export default class TheHeader extends Vue {}
</script>

<style>
  .the-header {
    display: flex;
  }

  .the-header__item {
    margin-right: 5px;
  }
</style>