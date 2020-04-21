import { shallowMount } from '@vue/test-utils';
import FormSelect from '@/components/Ui/FormSelect.vue';

describe('FormSelect', () => {
  it('Should not have invalid class', () => {
    const wrapper = shallowMount(FormSelect);
    expect(wrapper.classes('is-invalid')).toBe(false);
  });
  it('Should add invalid class', () => {
    const wrapper = shallowMount(FormSelect, {
      propsData: {
        invalid: true
      }
    });
    expect(wrapper.classes('is-invalid')).toBe(true);
  });
});
