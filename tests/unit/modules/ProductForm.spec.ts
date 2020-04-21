import { shallowMount } from '@vue/test-utils';
import ProductForm from '@/modules/Products/ProductForm.vue';

describe('ProductForm', () => {
  it('Should have proper data values', () => {
    const wrapper = shallowMount(ProductForm, {
      propsData: {
        product: {
          name: 'name',
          description: 'desc',
          category: 2,
          price: 23
        }
      }
    });
    expect(wrapper.vm.$data.productName).toEqual('name');
    expect(wrapper.vm.$data.productDesc).toEqual('desc');
    expect(wrapper.vm.$data.productCat).toEqual(2);
    expect(wrapper.vm.$data.productPrice).toEqual(23);
  });
  it('Should have proper data values withot prop', () => {
    const wrapper = shallowMount(ProductForm);
    expect(wrapper.vm.$data.productName).toEqual('');
    expect(wrapper.vm.$data.productDesc).toEqual('');
    expect(wrapper.vm.$data.productCat).toEqual('');
    expect(wrapper.vm.$data.productPrice).toEqual(0);
  });
  it('Fields should not be "touched" ', () => {
    const wrapper = shallowMount(ProductForm);
    expect(wrapper.vm.$data.isProductNameToched).toEqual(false);
    expect(wrapper.vm.$data.isProductDescToched).toEqual(false);
    expect(wrapper.vm.$data.isProductCatToched).toEqual(false);
    expect(wrapper.vm.$data.isProductPriceToched).toEqual(false);
  });
  it('Name field should be "touched" ', () => {
    const wrapper: any = shallowMount(ProductForm);

    wrapper.vm.onProductNameBlur();
    expect(wrapper.vm.$data.isProductNameToched).toEqual(true);
  });
  it('Description field should be "touched" ', () => {
    const wrapper: any = shallowMount(ProductForm);
    wrapper.vm.onProductDescBlur();
    expect(wrapper.vm.$data.isProductDescToched).toEqual(true);
  });
  it('Price field should be "touched" ', () => {
    const wrapper: any = shallowMount(ProductForm);
    wrapper.vm.onProductPriceBlur();
    expect(wrapper.vm.$data.isProductPriceToched).toEqual(true);
  });
  it('Category field should be "touched" ', () => {
    const wrapper: any = shallowMount(ProductForm);
    wrapper.vm.onProductCatBlur();
    expect(wrapper.vm.$data.isProductCatToched).toEqual(true);
  });
  it('All fields should be "touched" ', () => {
    const wrapper: any = shallowMount(ProductForm);
    wrapper.vm.touchAllFields();

    expect(wrapper.vm.$data.isProductNameToched).toEqual(true);
    expect(wrapper.vm.$data.isProductPriceToched).toEqual(true);
    expect(wrapper.vm.$data.isProductDescToched).toEqual(true);
    expect(wrapper.vm.$data.isProductCatToched).toEqual(true);
  });
  it('Name field / form should be invalid', () => {
    const wrapper: any = shallowMount(ProductForm);
    wrapper.setData({
      productName: '',
      isProductNameToched: true
    });

    expect(wrapper.vm.isProductNameInvalid).toEqual(true);
    expect(wrapper.vm.isFormValid).toEqual(false);
  });
  it('Name field should be valid ', () => {
    const wrapper: any = shallowMount(ProductForm);
    wrapper.setData({
      productName: 's',
      isProductNameToched: true
    });

    expect(wrapper.vm.isProductNameInvalid).toEqual(false);
  });
  it('Name field should be valid on init', () => {
    const wrapper: any = shallowMount(ProductForm);
    wrapper.setData({
      productName: '',
      isProductNameToched: false
    });

    expect(wrapper.vm.isProductNameInvalid).toEqual(false);
  });
  it('Description field / form should be invalid', () => {
    const wrapper: any = shallowMount(ProductForm);
    wrapper.setData({
      productDesc: '',
      isProductDescToched: true
    });

    expect(wrapper.vm.isProductDescInvalid).toEqual(true);
    expect(wrapper.vm.isFormValid).toEqual(false);
  });
  it('Description field should be valid ', () => {
    const wrapper: any = shallowMount(ProductForm);
    wrapper.setData({
      productDesc: 's',
      isProductDescToched: true
    });

    expect(wrapper.vm.isProductDescInvalid).toEqual(false);
  });
  it('Description field should be valid on init', () => {
    const wrapper: any = shallowMount(ProductForm);
    wrapper.setData({
      productDesc: '',
      isProductDescToched: false
    });

    expect(wrapper.vm.isProductDescInvalid).toEqual(false);
  });
  it('Category field / form should be invalid', () => {
    const wrapper: any = shallowMount(ProductForm);
    wrapper.setData({
      productCat: '',
      isProductCatToched: true
    });

    expect(wrapper.vm.isProductCatInvalid).toEqual(true);
    expect(wrapper.vm.isFormValid).toEqual(false);
  });
  it('Category field should be valid ', () => {
    const wrapper: any = shallowMount(ProductForm);
    wrapper.setData({
      productCat: 's',
      isProductCatToched: true
    });

    expect(wrapper.vm.isProductCatInvalid).toEqual(false);
  });
  it('Category field should be valid on init', () => {
    const wrapper: any = shallowMount(ProductForm);
    wrapper.setData({
      productCat: '',
      isProductCatToched: false
    });

    expect(wrapper.vm.isProductCatInvalid).toEqual(false);
  });
  it('Price field / form should be invalid', () => {
    const wrapper: any = shallowMount(ProductForm);
    wrapper.setData({
      productPrice: 0,
      isProductPriceToched: true
    });

    expect(wrapper.vm.isProductPriceInvalid).toEqual(true);
    expect(wrapper.vm.isFormValid).toEqual(false);
  });
  it('Price field should be valid ', () => {
    const wrapper: any = shallowMount(ProductForm);
    wrapper.setData({
      productPrice: 0.01,
      isProductPriceToched: true
    });

    expect(wrapper.vm.isProductPriceInvalid).toEqual(false);
  });
  it('Price field should be valid on init', () => {
    const wrapper: any = shallowMount(ProductForm);
    wrapper.setData({
      productPrice: 0,
      isProductPriceToched: false
    });

    expect(wrapper.vm.isProductPriceInvalid).toEqual(false);
  });
  it('Should call submit fn', () => {
    const wrapper: any = shallowMount(ProductForm);
    const submitSpy = jest.spyOn(wrapper.vm, 'onFormSubmit');

    wrapper.setData({
      productName: 'name',
      productDesc: 'desc',
      productCat: 2,
      productPrice: 23
    });
    const form = wrapper.find('form');
    form.trigger('submit');
    expect(submitSpy).toHaveBeenCalled();
  });
  it('Should touch every field on submit', async () => {
    const wrapper: any = shallowMount(ProductForm);
    const touchAllSpy = jest.spyOn(wrapper.vm, 'touchAllFields');
    const form = wrapper.find('.product-form');

    form.trigger('submit');

    await wrapper.vm.$nextTick();
    expect(touchAllSpy).toHaveBeenCalled();
  });
  it('Should not emit submit', async () => {
    const wrapper: any = shallowMount(ProductForm);

    wrapper.setData({
      productName: '',
      productDesc: 'desc',
      productCat: 2,
      productPrice: 23
    });

    const form = wrapper.find('form');
    form.trigger('submit');

    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().submit).toEqual(undefined);
  });
  it('Should emit submit', async () => {
    const wrapper: any = shallowMount(ProductForm);

    wrapper.setData({
      productName: 'name',
      productDesc: 'desc',
      productCat: 2,
      productPrice: 23
    });

    const form = wrapper.find('form');
    form.trigger('submit');

    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().submit[0][0]).toEqual({ name: 'name', category: 2, price: 23, description: 'desc' });
  });
});
