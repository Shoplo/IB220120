import { shallowMount } from '@vue/test-utils';
import FormTextArea from '@/components/Ui/FormTextArea.vue';

describe('FormTextArea', () => {
  it('Should not have invalid class', () => {
    const wrapper = shallowMount(FormTextArea);
    expect(wrapper.classes('is-invalid')).toBe(false);
  });
  it('Should add invalid class', () => {
    const wrapper = shallowMount(FormTextArea, {
      propsData: {
        invalid: true
      }
    });
    expect(wrapper.classes('is-invalid')).toBe(true);
  });
});
