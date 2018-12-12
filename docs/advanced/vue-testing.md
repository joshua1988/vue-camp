---
title: Vue Test Utils
---

# Vue Test Utils

뷰 테스트 유틸은 코어 팀 멤버가 제작한 테스팅 보조 라이브러리입니다. Jest 뿐만 아니라 원하는 테스트 도구와 함께 사용할 수 있습니다.

## 라이브러리 설치

아래의 명령어로 Vue Test Util 라이브러리를 설치합니다.

```bash
npm install jest @vue/test-utils vue-jest babel-jest --save-dev
```

위 명령어로 vue test util, jest, vue-jest, bable-jest 4개의 라이브러리가 설치됩니다.

## 패키지 JSON 설정

설치하고 나서 `package.json` 파일에 아래의 옵션을 추가합니다.

```json
{
  // ...
  "jest": {
    "moduleFileExtensions": [
      "js",
      "json",
      // tell Jest to handle `*.vue` files
      "vue"
    ],
    "transform": {
      // process `*.vue` files with `vue-jest`
      ".*\\.(vue)$": "vue-jest",
      // process js with `babel-jest`
      "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    },
    "collectCoverage": true,
    "collectCoverageFrom": [
      "**/*.{js,vue}",
      "!**/node_modules/**"
    ]
  }
}
```

::: danger
복붙할 때 주석은 제거해주세요.
:::

## 뷰 컴포넌트 테스트 코드 예시

Vue Test Utils를 설치했으니 간단한 테스트 코드를 실행해보겠습니다. 아래의 코드를 가지고 `npm t`를 실행합니다.

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
바로 mount(), shallowMount() API입니다. 두 API의 차이점은 아래에서 살펴보도록 하고, 먼저 mount() API를 사용해보겠습니다.

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
각각의 API를 살펴보겠습니다.

### Shallow Rendering

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

### Mount

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

## Snapshot Testing

스냅샷(Snapshot Testing) 테스팅을 하기 위해 먼저 아래 환경을 구성합니다.

```bash
npm install --save-dev jest-serializer-vue
```

```json
// package.json
{
  // ...
  "jest": {
    // ...
    // serializer for snapshots
    "snapshotSerializers": [
      "jest-serializer-vue"
    ]
  }
}
```

그리고 코드는 다음과 같습니다.

```js
import { mount } from '@vue/test-utils';
import HelloWorld from '../HelloWorld.vue';

describe('Hello World Component', () => {
  test('[Snapshot Testing] renders hello world message', () => {
    const { vm } = mount(HelloWorld);
    expect(vm.$el).toMatchSnapshot();
  });
});
```

위 코드를 실행할 때 주의 할점은 명령어를 `npm t -u`로 해야 한다는 점입니다.

## 테스트 커버리지(범위)

### 테스팅의 목적

1. 코드를 변경할 때 두려워하지 않기 위해
2. 코드 품질 보장
3. 도큐먼트로써의 역할

> Confidence to change / Removal of Fear + High Code Quality + Well-documented Code = Developer Happiness

### 뷰 컴포넌트 테스트

![뷰 컴포넌트 테스팅 지점들](../.vuepress/public/images/vue-component-testing.png)

뷰 컴포넌트 테스트 코드를 작성할 때 고민할 지점들은 다음과 같습니다.

- 컴포넌트의 입력 값 : props, user interaction, lifecycle methods
- 컴포넌트의 출력 값 : events, rendered output, connection with children

테스트 할 필요가 없는 지점들

1. 컴포넌트의 구체적인 로직 (비즈니스 로직)
2. 프레임워크 자체의 기능들 (prop rendering, prop validation 등)

### 뷰 컴포넌트 테스팅 기법

- Integration 테스트 : 특정 컴포넌트에 종속된 하위 컴포넌트까지 모두 컴포넌트의 테스트 범위로 간주. `mount()` API 사용. 특정 기능의 전체 흐름을 모두 테스트 케이스로 작성.
- Shallow 테스트 : 특정 컴포넌트에 등록된 하위 컴포넌트는 신경쓰지 않고 해당 컴포넌트의 기능만 테스트. `shallowMount()` API 사용. 특정 기능의 흐름을 잘게 분할해서 테스트 케이스로 작성.

## 참고 사이트

가이드 작성 후 링크 제거. 제거할 때 가이드 꼼꼼히 확인

- [프로처럼 테스팅 하기](https://vueschool.io/articles/series/testing-like-a-pro-in-javascript/)
- [뷰 컴포넌트 테스트하기](https://vueschool.io/articles/vuejs-tutorials/5-testing-a-vue-component/)
- [에드의 뷰 테스팅 발표](https://www.meetupfeed.com/talk/unit-testing-vue-components-why-test-what-to-test-and-how-to-test-vue-components)
- [스냅샷 테스팅 링크](https://vue-test-utils.vuejs.org/guides/#testing-single-file-components-with-jest)