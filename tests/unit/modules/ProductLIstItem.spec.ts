import { shallowMount } from '@vue/test-utils';
import ProductsListItem from '@/modules/Products/ProductsListItem.vue';

describe('ProductListItem', () => {
  it('Should not have invalid class', () => {
    const spy = jest.fn();
    const wrapper: any = shallowMount(ProductsListItem, {
      mocks: {
        $router: {
          push: spy
        }
      },
      propsData: {
        product: {
          name: 'name',
          category: 3,
          price: 23,
          description: 'ssdf'
        }
      }
    });
    wrapper.vm.onEditClick(34);
    expect(spy).toHaveBeenCalledWith({ name: 'edit-products', params: { id: 34 } });
  });
});
