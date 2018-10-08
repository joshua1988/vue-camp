import { mount, shallowMount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('Hello World Component', () => {
  // component testing
  test('[Component Testing] message equals to be Hello Vue.js', () => {
    const { vm } = shallowMount(HelloWorld);
    expect(vm.message).toBe('Hello Vue.js');
  });

  // snapshot testing
  test('[Snapshot Testing] renders hello world message', () => {
    const { vm } = mount(HelloWorld);
    expect(vm.$el).toMatchSnapshot();
  });
});