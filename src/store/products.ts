import Vue from 'vue';
import IProduct from '@/logic/IProduct';

export const initialState = () => ({
  list: [
    {
      name: 'Winter Jacket',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat, nisl nec accumsan hendrerit, nulla urna finibus nisl, non posuere erat mi sed mi. Aliquam at lacus rutrum, feugiat nulla in, eleifend lorem. ',
      price: 12.0,
      category: 4,
      id: 1
    },
    {
      name: 'Winter Socks',
      description:
        'Lorem ipsum dolor sit amet.Ut placerat, nisl nec accumsan hendrerit, nulla urna finibus nisl, non posuere erat mi sed mi. Aliquam at lacus rutrum, feugiat nulla in, eleifend lorem. ',
      price: 27.35,
      category: 2,
      id: 2
    },
    {
      name: 'Summer t-shirt',
      description:
        'Lorem ipsum dolor sit amet.Ut placerat, nisl nec accumsan hendrerit, nulla urna finibus nisl, non posuere erat mi sed mi. Aliquam at lacus rutrum, feugiat nulla in, eleifend lorem. ',
      price: 43.0,
      category: 1,
      id: 3
    },
    {
      name: 'Shoes',
      description:
        'Lorem ipsum dolor sit amet.Ut placerat, nisl nec accumsan hendrerit, nulla urna finibus nisl, non posuere erat mi sed mi. Aliquam at lacus rutrum, feugiat nulla in, eleifend lorem. ',
      price: 50.99,
      category: 3,
      id: 4
    }
  ]
});

// @ts-ignore
export default {
  namespaced: true,

  state() {
    return initialState();
  },
  mutations: {
    ADD_ITEM(state: { list: any[] }, product: IProduct) {
      product.id = state.list.length + 1; // only for task purpose
      state.list.push(product);
    },

    UPDATE_ITEM(state: any, product: IProduct) {
      // @ts-ignore
      const index = state.list.findIndex((item: IProduct) => item.id === product.id);
      Vue.set(state.list, index, product);
    }
  },
  getters: {
    byId: (state: any) => (id: any) => {
      return state.list.find((product: { id: any }) => product.id === id);
    },

    products: (state: any, getters: any, rootState: any, rootGetters: any) => {
      return state.list.map((product: IProduct) => {
        const cat = rootGetters['categories/byId'](product.category);
        return { ...product, categoryLabel: cat.label };
      });
    }
  },

  actions: {
    add({ commit }: any, product: any) {
      return new Promise(resolve => {
        commit('ADD_ITEM', product);
        resolve();
      });
    },

    update({ commit }: any, product: any) {
      return new Promise(resolve => {
        commit('UPDATE_ITEM', product);
        resolve();
      });
    }
  }
};
