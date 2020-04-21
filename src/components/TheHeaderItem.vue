<template>
  <div class="the-header-item">
    <router-link
      :to="link"
      class="the-header-item__link"
    >
      <slot>
        {{ label }}
      </slot>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'TheHeaderItem'
})
export default class TheHeaderItem extends Vue {
  @Prop({ type: Object, default: () => {} }) public readonly link!: object;
  @Prop({ type: String, default: '' }) public readonly label!: string;
}
</script>

<style>
  .the-header-item__link {
    padding: 10px;
    text-decoration: none;
    background: #c8c8c8;
    display: block;
  }
</style>