import { shallowMount } from '@vue/test-utils';
import FormInput from '@/components/Ui/FormInput.vue';

describe('FormInput', () => {
  it('Should not have invalid class', () => {
    const wrapper = shallowMount(FormInput);
    expect(wrapper.classes('is-invalid')).toBe(false);
  });
  it('Should add invalid class', () => {
    const wrapper = shallowMount(FormInput, {
      propsData: {
        invalid: true
      }
    });
    expect(wrapper.classes('is-invalid')).toBe(true);
  });
});
