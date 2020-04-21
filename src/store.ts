import Vue from 'vue';
import Vuex from 'vuex';

import products from '@/store/products';
import categories from '@/store/categories';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
    categories
  }
});
