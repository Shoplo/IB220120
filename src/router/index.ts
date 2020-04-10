import Vue from 'vue';
import VueRouter from 'vue-router';

import ProductsView from '@/views/Products/ProductsView.vue';
import ProductAddView from '@/views/Products/ProductAddView.vue';
import ProductEditView from '@/views/Products/ProductEditView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/products/add',
    name: 'add-products',
    component: ProductAddView
  },
  {
    path: '/products/:id/edit',
    name: 'edit-products',
    component: ProductEditView,
    props: (route: any) => ({ id: parseInt(route.params.id) })
  },
  {
    path: '*',
    redirect: { name: 'products' }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
