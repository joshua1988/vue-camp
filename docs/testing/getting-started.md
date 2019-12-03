---
title: Getting Started
---

# 뷰 테스트 코드 시작하기

앞에서 설치한 뷰 테스트 유틸 라이브러리를 이용하여 간단한 테스트 코드를 작성해보겠습니다.

## 뷰 컴포넌트 테스트 코드 예시

아래의 코드를 가지고 `npm t`를 실행합니다.

```html
<!-- HelloWorld.vue -->
<template>
  <div>Hello {{ message }}</div>
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

:::tip
`HelloWorld` 컴포넌트 파일 경로를 주의하세요.
:::

## 뷰 테스트 유틸 API를 이용한 컴포넌트 테스트

앞에서 살펴본 테스트 코드의 번거로운 점은 컴포넌트의 기능을 테스트하기 위해
매번 뷰 인스턴스를 생성하고 `$mount()` API를 호출해야 한다는 점입니다.

다행히도 뷰 테스트 유틸 라이브러리에서 이 반복 작업을 편하게 해주는 API를 제공합니다.
바로 `shallowMount()`와 `mount()`입니다. 이 두 API의 차이점은 [Testing Applications - API](/testing/api.html) 챕터에서 살펴보도록 하고, 먼저 `shallowMount()` API를 사용해보겠습니다.

앞에서 살펴본 코드에 `shallowMount()` API를 적용해봤습니다.

```js {2,6}
// helloworld.test.js
import { shallowMount } from '@vue/test-utils';
import HelloWorld from './HelloWorld.vue';

test('HelloWorld Component', () => {
  const wrapper = shallowMount(HelloWorld);
  expect(wrapper.vm.message).toBe('Vue!');
});
```

뷰 테스트 라이브러리에서 `shallowMount()` API를 불러온 후 HelloWorld 컴포넌트의 `message` 속성을 테스트 하였습니다. 앞서 살펴본 코드와 차이나는 부분은 아래와 같습니다.

```js
// 뷰 테스트 유틸 API를 사용하지 않은 경우
const cmp = new Vue(HelloWorld).$mount();
```

```js
// 뷰 테스트 유틸 API를 사용한 경우
const wrapper = shallowMount(HelloWorld);
```

`new Vue().$mount()`로 접근하던 형식을 `mount()`로 간소화 하였습니다.

## 컴포넌트 테스팅 관련 API

앞에서 살펴본 `shallowMount()` API 이외에 `mount()` API도 테스트 할 때 자주 사용됩니다.
`shallowMount()`는 지정된 컴포넌트의 내용만 테스트할 때 사용하고, 
`mount()`는 해당 컴포넌트에 등록된 하위 컴포넌트의 내용들까지 확인할 때 사용합니다.
더 자세한 내용은 [Testing Applications - API](/testing/api.html)에서 알아보겠습니다.
