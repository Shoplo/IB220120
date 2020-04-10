import { createLocalVue, shallowMount } from '@vue/test-utils';
import ProductAddView from '@/views/Products/ProductAddView.vue';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('ProductAddView', () => {
  let store: any;
  let actions: any;
  let state: any;
  const mockData = {
    name: 'name',
    description: 'desc',
    category: 2,
    price: 23
  };

  beforeEach(() => {
    actions = {
      add: jest.fn()
    };

    state = {};

    store = new Vuex.Store({
      modules: {
        products: {
          namespaced: true,
          actions
        },
        categories: {
          namespaced: true,
          state
        }
      }
    });
  });

  it('Should call action on submit', () => {
    const wrapper: any = shallowMount(ProductAddView, {
      store,
      localVue
    });
    wrapper.vm.onFormSubmit(mockData);
    expect(actions.add).toHaveBeenCalledWith(expect.any(Object), mockData);
  });
});
