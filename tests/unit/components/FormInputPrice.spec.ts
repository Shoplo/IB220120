import { shallowMount } from '@vue/test-utils';
import FormInputPrice from '@/components/Ui/FormInputPrice.vue';

describe('FormInputPrice', () => {
  it('Should not have invalid class', () => {
    const wrapper = shallowMount(FormInputPrice, {
      stubs: {
        'currency-input': '<div class="form-input-price"></div>'
      }
    });
    const currencyInput = wrapper.find('.form-input-price');
    expect(currencyInput.classes('is-invalid')).toBe(false);
  });
  it('Should have invalid class', () => {
    const wrapper = shallowMount(FormInputPrice, {
      propsData: {
        invalid: true
      },
      stubs: {
        'currency-input': '<div class="form-input-price"></div>'
      }
    });
    const currencyInput = wrapper.find('.form-input-price');
    expect(currencyInput.classes('is-invalid')).toBe(true);
  });
});
