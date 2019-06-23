import { shallowMount } from '@vue/test-utils';
import Counter from './Counter.vue';

describe('Counter Component', () => {
  test('button click should increase num', () => {
    const wrapper = shallowMount(Counter);
    wrapper.setData({ num: 0 });
    const button = wrapper.find('button');
    button.trigger('click');
    expect(wrapper.vm.num).toEqual(1);
  });

  test('button click should display the updated value on <p>', () => {
    const wrapper = shallowMount(Counter);
    const button = wrapper.find('button');
    const p = wrapper.find('p');
    button.trigger('click');
    expect(p.text()).toEqual('1');
  });
});
