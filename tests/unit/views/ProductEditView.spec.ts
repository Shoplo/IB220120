import { createLocalVue, shallowMount } from '@vue/test-utils';
import ProductEditView from '@/views/Products/ProductEditView.vue';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('ProductAddView', () => {
  let store: any;
  let actions: any;
  let state: any;
  const mockDataForm = {
    name: 'name',
    description: 'desc',
    category: 2,
    price: 23
  };

  beforeEach(() => {
    actions = {
      update: jest.fn()
    };

    state = {};

    store = new Vuex.Store({
      modules: {
        products: {
          namespaced: true,
          getters: {
            byId: () => () => {}
          },
          actions,
          state
        },
        categories: {
          namespaced: true,
          state
        }
      }
    });
  });

  it('Should call action on submit', () => {
    const wrapper: any = shallowMount(ProductEditView, {
      store,
      localVue,
      propsData: {
        id: 13
      }
    });
    wrapper.vm.onFormSubmit(mockDataForm);
    expect(actions.update).toHaveBeenCalledWith(expect.any(Object), { ...mockDataForm, id: 13 });
  });
});
