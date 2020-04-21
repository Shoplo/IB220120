import { shallowMount } from '@vue/test-utils';
import FormField from '@/components/Ui/FormField.vue';

describe('FormField', () => {
  it('Error element should be visible', () => {
    const wrapper = shallowMount(FormField, {
      propsData: {
        isInvalid: true
      },
      slots: {
        error: '<span class="form-field__error"></span>'
      }
    });

    const errorSlot = wrapper.findAll('.form-field__error');
    expect(errorSlot.length).toEqual(1);
  });
  it('Error element should be hidden', () => {
    const wrapper = shallowMount(FormField, {
      propsData: {
        isInvalid: false
      },
      slots: {
        error: '<span class="form-field__error"></span>'
      }
    });

    const errorSlot = wrapper.findAll('.form-field__error');
    expect(errorSlot.length).toEqual(0);
  });
  it('Error element should be hidden without prop', () => {
    const wrapper = shallowMount(FormField, {
      slots: {
        error: '<span class="form-field__error"></span>'
      }
    });

    const errorSlot = wrapper.findAll('.form-field__error');
    expect(errorSlot.length).toEqual(0);
  });
  it('Label element should be visible', () => {
    const wrapper = shallowMount(FormField, {
      propsData: {
        label: 'test label'
      }
    });

    const labelSlot = wrapper.findAll('label');
    expect(labelSlot.length).toEqual(1);
  });
  it('Label element should be hidden', () => {
    const wrapper = shallowMount(FormField);

    const labelSlot = wrapper.findAll('label');
    expect(labelSlot.length).toEqual(0);
  });
});
