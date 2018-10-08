import { mount } from '@vue/test-utils'
import Parent from '../Parent.vue'
import Child from '../Child.vue'

describe('Component Integration Test', () => {
  let wrapper, childComponent, parentComponent;
  beforeEach(() => {
    wrapper = mount(Parent);
    childComponent = wrapper.find(Child);
    parentComponent = wrapper.find(Parent);
  });

  test('[Event Emit] emitting event changes the message', () => {
    // Trigger click event in Child Component
    const testButton = childComponent.find('button');
    testButton.trigger('click');

    // Check the data value if it has been modified by the event
    expect(wrapper.vm.message).toBe('a message from Child');
  });

  test('[Props Change] emitting event changes the rendered output', () => {
    // Trigger click event in Child Component
    const testButton = childComponent.find('button');
    testButton.trigger('click');

    // match the rendered output with changed data
    const pTag = parentComponent.find('p');
    expect(pTag.html()).toBe('<p>a message from Child</p>');
  });

  test('[Rendered Output] snapshot test', () => {
    // Trigger click event in Child Component
    const testButton = childComponent.find('button');
    testButton.trigger('click');
    
    // For log
    expect(parentComponent).toMatchSnapshot();
  })
});