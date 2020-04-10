import IProductCategory from '@/logic/IProductCategory';

export const initialState = () => ({
  list: [
    {
      value: 1,
      label: 'T-shirt'
    },
    {
      value: 2,
      label: 'Socks'
    },
    {
      value: 3,
      label: 'Shoes'
    },
    {
      value: 4,
      label: 'Jacket'
    }
  ]
});

export default {
  namespaced: true,

  state() {
    return initialState();
  },
  getters: {
    byId: (state: any) => (id: any) => state.list.find((category: IProductCategory) => category.value === id)
  }
};
