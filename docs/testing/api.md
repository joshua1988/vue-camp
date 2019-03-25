---
title: API
---

# 자주 사용하는 API 목록

단위 테스트 케이스 작성을 위해 자주 사용하는 API 목록입니다.

## Shallow Rendering

테스트 할 컴포넌트의 기능만 테스트하고 하위 컴포넌트와는 분리해주는 테스트 API

```js
import { shallowMount } from '@vue/test-utils'
import Component from './component'

describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.isVueInstance()).toBeTruthy();
  })
})
```

> mount a component without rendering its child components

## Mount

테스트할 컴포넌트의 하위 컴포넌트의 동작까지 함께 테스트 하는 API

```js
// helloworld.test.js
import { mount } from '@vue/test-utils';
import HelloWorld from './HelloWorld.vue';

test('HelloWorld Component', () => {
  const wrapper = mount(HelloWorld);
  expect(wrapper.vm.message).toBe('Vue!');
});
```