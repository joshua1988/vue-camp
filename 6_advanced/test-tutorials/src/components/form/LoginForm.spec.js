import { shallowMount } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import LoginForm from './LoginForm.vue';

jest.mock('axios', () => ({
  post: jest.fn(() =>
    Promise.resolve({
      data: {
        id: 11,
      },
    }),
  ),
}));

function factory(data) {
  return shallowMount(LoginForm, {
    data() {
      return {
        ...data,
      };
    },
  });
}

describe('LoginForm.vue', () => {
  test('ID must be in email format', () => {
    const wrapper = factory({ username: 'test' });
    const validationTextTag = wrapper.find('p');
    expect(validationTextTag.exists()).toBe(true);
  });

  test('enable the button when form is valid', () => {
    const wrapper = factory({ username: 'test@abc.com' });
    const loginButton = wrapper.find('button');
    const isLoginButtonDisabled = loginButton.element.disabled;
    expect(isLoginButtonDisabled).toBeFalsy();
  });

  test('button click or enter should submit the form to the server', async () => {
    const wrapper = factory({ username: 'test@abc.com' });
    const loginButton = wrapper.find('button');
    loginButton.trigger('submit');
    await flushPromises();
    expect(wrapper.vm.id).toBe(11);
  });
});
