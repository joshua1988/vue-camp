---
title: Tutorial - Todo App
---

# Tutorial - Todo App

이번 튜토리얼에서는 간단한 Todo App을 만들면서 각 컴포넌트의 유닛 테스트(Unit Test)를 작성해보겠습니다. 컴포넌트를 구현하고 해당 컴포넌트의 테스트 코드를 작성하는 순서로 작업합니다. 이 튜토리얼은 학습하시는 분들을 위해 단계별로 코드를 제공합니다. 최대한 먼저 따라 해보시고 안되는 부분만 참고하는 용도로 사용해 주세요.

## 프로젝트 셋업
[완성 코드](https://github.com/dngwoodo/vue-todo-app-test/tree/6f2a8fb79aa7bf85db495864ac7f40b2c26ed13f)

1. vue cli 최신 버전 설치   
```bash
npm install -g @vue/cli
```
<br />

2. 프로젝트 생성
```bash
vue create todo-app-test
```
프로젝트 생성 시 매뉴얼 선택은 [링크](https://joshua1988.github.io/vue-camp/testing/vue-test-util.html#%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B3%E1%84%85%E1%85%A5%E1%84%85%E1%85%B5-%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8E%E1%85%B5)를 참고해 주세요.   
<br />

3. eslint의 `env` 옵션 속성에 `jest: true` 추가   
```js
module.exports = {
  root: true,
  env: {
    node: true,
    jest: true, // jest api들을 사용할 때 에러 표시가 나지 않게 해줍니다.
  },
  //...
}
```
<br />

4. 테스트 코드 작성 시 유용한 @types/jest 라이브러리 설치   

`@types/jest` 라이브러리는 jest api들의 자동완성을 제공합니다.
```bash
npm install @types/jest -D
```
<br />

5. jest.config.js에 testMatch 설정 추가   
    
  테스트해야 하는 컴포넌트와 테스트 코드가 한 폴더 내에 존재하는 것이 찾을 때 편리합니다. 그러므로 [@vue/cli-plugin-unit-jest](https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-plugin-unit-jest/presets/default/jest-preset.js)의 testMatch 설정값을 추가합니다. 기본적인 jest 설정들의 역할들은 [여기](https://joshua1988.github.io/vue-camp/testing/vue-test-util.html#%E1%84%91%E1%85%A2%E1%84%8F%E1%85%B5%E1%84%8C%E1%85%B5-json-%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC)를 참고하세요.
  
  ```js
  module.exports = {
    preset: "@vue/cli-plugin-unit-jest",
    testMatch: ["**/src/**/*.(test|spec).js"], // src 폴더 내의 파일 이름에 spec이나 test가 포함돼 있다면 테스트를 수행합니다.
  };
  ```
<br />

6. 테스트 코드 실행해보기   
   
App 컴포넌트를 제외한 모든 컴포넌트를 삭제해 주세요. 그리고 아래와 같이 코드를 작성해 줍니다.
```html
<!-- src/App.vue -->
<template>
  <div>
    <h1>Todo App</h1>
  </div>
</template>
```
```js
// src/App.test.js
import { shallowMount } from "@vue/test-utils";

import App from "./App.vue";

describe("App", () => {
  it("renders title", () => {
    const wrapper = shallowMount(App);

    expect(wrapper.find("h1").text()).toMatch("Todo App");
  });
});
```
이제 테스트 코드를 실행해 주면 됩니다.
```bash
npm run test:unit
```

터미널 창에 아래와 같이 출력 된다면 프로젝트 셋업이 정상적으로 완료된 것입니다.
```bash
> vue-cli-service test:unit

PASS  src/App.test.js
  App
    ✓ renders title (21ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.403s
Ran all test suites.
```