<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TheHeader from './components/TheHeader.vue';
import TheLayout from './components/TheLayout.vue';

@Component({
  components: {
    TheHeader
  }
})
export default class App extends Vue {}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  a {
    text-decoration: none;
    color: #2c3e50;
  }
</style>
