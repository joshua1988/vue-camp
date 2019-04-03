---
title: Getting Started
---

# 뷰 테스트 코드 시작하기

앞에서 설치한 Vue Test Utils 라이브러리를 이용하여 간단한 테스트 코드를 작성해보겠습니다.

## 뷰 컴포넌트 테스트 코드 예시

아래의 코드를 가지고 `npm t`를 실행합니다.

```html
<!-- HelloWorld.vue -->
<template>
  <div>Hello {{ messsage }}</div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Vue!'
    }
  }
}
</script>
```

```js
// helloworld.test.js
import Vue from 'vue';
import HelloWorld from './HelloWorld.vue';

test('HelloWorld Component', () => {
  const cmp = new Vue(HelloWorld).$mount();
  expect(cmp.message).toBe('Vue!');
});
```

코드가 실행되면 HelloWorld 컴포넌트가 정상적으로 로딩되면서 테스트가 통과됩니다.

## Vue Test API를 이용한 컴포넌트 테스트

앞에서 살펴본 테스트 코드의 특징은 컴포넌트의 기능을 테스트하기 위해
매번 뷰 인스턴스를 생성하고 `$mount()` API를 사용해야 한다는 점입니다.

조금 번거로운 작업이지만 다행히 뷰 테스트 라이브러리에서 이 반복 작업을 편하게 해주는 API를 제공합니다.
바로 mount(), shallowMount() API입니다. 두 API의 차이점은 [API](/testing/api.html)에서 살펴보도록 하고, 먼저 mount() API를 사용해보겠습니다.

앞에서 살펴본 코드에 바로 mount API를 적용해봤습니다.

```js
// helloworld.test.js
import { mount } from '@vue/test-utils';
import HelloWorld from './HelloWorld.vue';

test('HelloWorld Component', () => {
  const wrapper = mount(HelloWorld);
  expect(wrapper.vm.message).toBe('Vue!');
});
```

뷰 테스트 라이브러리에서 `mount()` API를 임포트한 후 HelloWorld 컴포넌트의 `message` 속성을 테스트한 코드입니다. 앞서 살펴본 코드와 차이나는 부분은 아래와 같습니다.

```js
// Vue Test API를 사용하지 않은 경우
const cmp = new Vue(HelloWorld).$mount();
```

```js
// Vue Test API를 사용한 경우
const wrapper = mount(HelloWorld);
```

`new Vue().$mount()`로 접근하던 형식을 `mount()`로 간소화 하였습니다.

## 컴포넌트 테스팅 관련 API

앞에서 살펴본 mount() API 이외에 shallowMount() API도 테스트 할 때 자주 사용됩니다.
두 API는 모두 컴포넌트 테스트, 하위 컴포넌트가 등록된 컴포넌트의 테스트를 할 때 사용됩니다.

두 API의 가장 큰 차이점은 1개의 지정된 컴포넌트만 테스트 하느냐 연관된 여러 개의 컴포넌트를 모두 테스트 하느냐입니다.
각 API에 대한 설명은 [API](/testing/api.html)를 참고합니다.