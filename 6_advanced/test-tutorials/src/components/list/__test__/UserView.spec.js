import { shallowMount, mount } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import UserView from '../UserView.vue';
import UserList from '../UserList.vue';

jest.mock('axios', () => ({
  get: jest.fn(() =>
    Promise.resolve({
      data: [{ name: 'captain' }, { name: 'thor' }],
    }),
  ),
}));

describe('UserView.vue', () => {
  test('fetched data should be inserted to data property', async () => {
    const wrapper = shallowMount(UserView);
    await flushPromises();
    const numberOfUsers = wrapper.vm.users.length;
    expect(numberOfUsers).toBe(2);
  });

  test('fetched data should be inserted as props', async () => {
    const wrapper = mount(UserView);
    await flushPromises();
    const childComponent = wrapper.find(UserList);
    const lengthOfProps = childComponent.vm.items.length;
    expect(lengthOfProps).toBe(2);
  });
});
