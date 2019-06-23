import { shallowMount } from '@vue/test-utils';
import UserList from '../UserList.vue';

function factory() {
  return shallowMount(UserList, {
    propsData: {
      items: [1, 2, 3],
    },
  });
}

describe('UserList.vue', () => {
  test('props property should be displayed on the list', () => {
    const wrapper = factory();
    const numberOfItems = wrapper.findAll('li').length;
    expect(numberOfItems).toBe(3);
  });
});
