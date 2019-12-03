---
title: Unit Testing with Jest
---

## Jest 소개

제스트(Jest)는 페이스북에서 만든 자바스크립트 테스팅 라이브러리입니다. 테스트 코드의 모양이 직관적이고 문서화가 잘되어 있어 요즘 많이 활용되고 있습니다.

### 라이브러리 설치

제스트는 NPM으로 아래와 같이 설치합니다.

```bash
npm install --save-dev jest
```

### 테스트 파일 생성

- 파일 위치 : 테스트 할 파일이 있는 폴더 내
- 폴더 이름 : `__test__`
- 파일 이름 : `파일 이름.test.js` 또는 `파일 이름.spec.js`

### 테스트 코드 실행

제스트를 설치하고 나면 콘솔 창에 아래와 같은 명령어로 실행할 수 있습니다.

```bash
jest
```

위의 명령어를 입력하면 프로젝트 내부의 `test.js` 또는 `spec.js` 확장자를 가지는 파일을 모두 실행합니다.

::: tip
NPM 커스텀 명령어나 `npm t`로 테스트를 실행할 수도 있습니다.
:::

### 테스트 코드 예시

간단한 테스트 코드를 아래와 같이 작성해봤습니다.

```js
// helloworld.test.js
const str = 'Hello World';

test('HelloWorld Component', () => {
  expect(str).toBe('Hello World');
});
```

위 코드는 `str`의 값이 `Hello World`가 맞는지 확인하는 테스트 코드입니다. 
일반적으로 테스트 코드에는 기대값과 결과값이 필요한데 위 코드처럼 `expect()`에 기대값을 넣고,
`toBe()`에 예상 결과값을 넣으면 됩니다.

이제 콘솔에 `jest` 명령어를 실행하면 다음과 같은 테스트 결과가 나옵니다.

![Jest로 테스트한 결과](../.vuepress/public/images/test/test-result.png)

`helloworld.test.js` 파일에서 1개의 테스트 코드를 돌려서 성공했다는 로그입니다.

## Jest API

Jest로 단위 테스트 코드를 구현할 때 자주 사용되는 API 목록입니다.

- describe()
- test()
- expect()
- beforeEach()

### describe()

여러 개의 `test()` 코드를 하나의 테스트 작업 단위로 묶어주는 API. 하나의 테스트 케이스를 `test()`라고 한다면 `describe()`는 여러 개의 테스트 케이스를 하나의 그룹으로 묶어주는 역할.

```js
describe('Testing 1', () => {
  test('message equals to be Vue', () => {
    // ..
  });

  test('data equals to be Object', () => {
    // ..
  });
});
```

### test()

테스트 코드를 돌리기 위한 API. 하나의 테스트 케이스를 의미하며 `it()`과 같은 역할.

```js
test('message equals to be Vue', () => {
  // ..
});
```

### expect()

테스트 할 대상을 넣는 API. `expect()`에는 주로 테스트 입력 값 또는 기대 값을 넣습니다.

```js
var message = 'Vue';
test('message equals to be Vue', () => {
  expect(message).toBe('Vue');
});
```

### toBe()

테스트의 결과를 확인하는 API. 테스트의 예상 결과 값을 넣습니다.

```js
var message = 'Vue';
test('message equals to be Vue', () => {
  expect(message).toBe('Vue');
});
```

:::tip
테스트 결과 값 API에는 `toBe()` 뿐만 아니라 `toHaveBeenCalled()`, `toBeTruthy()`, `toBeFalsy()` 등 여러 유형이 있습니다.
자세한 건 [Jest - Expect API](https://jestjs.io/docs/en/expect)에서 확인해보세요.
:::

### beforeEach()

테스트 파일의 각 테스트 코드가 돌기 전에 수행할 로직을 넣는 API. 테스트 케이스마다 반복되는 로직을 넣기에 적합.

```js
var message;
beforeEach(() => message = 'Vue');

test('message equals to be Vue', () => {
  expect(message).toBe('Vue');
});

test('message equals to be Vue!!', () => {
  expect(message + '!!').toBe('Vue');
});
```

## Jest의 뷰 컴포넌트 테스팅

지금까지 제스트에 대해서 가볍게 살펴봤으니 이번엔 제스트로 뷰 컴포넌트를 테스트해보겠습니다.
아래는 제스트로 뷰 컴포넌트를 테스트하는 코드입니다.

```html
<!-- HelloWorld.vue -->
<template>
  <div> Hello {{ messsage }} </div>
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
import HelloWorld from './HelloWorld.vue';

test('HelloWorld Component', () => {
  expect(true).toBe(true);
});
```

위의 테스트 코드는 제스트에서 HelloWorld 컴포넌트를 인식할 수 있는지 확인하는 코드입니다.
테스트의 기대 값과 결과 값은 `true`로 일치하기 때문에 HelloWorld 컴포넌트만 잘 들고온다면 실패 없이 테스트가 완료됩니다.

하지만, 실제로 실행해보면 테스트가 실패하면서 아래와 같은 결과가 나옵니다.

![Jest의 뷰 컴포넌트 파싱 에러](../.vuepress/public/images/test/jest-parsing-error.png)

위 메시지는 *'뷰 컴포넌트는 제스트가 해석할 수 있는 유형의 파일이 아니다'* 라는 의미입니다. 생각해보면 싱글 파일 컴포넌트가 웹팩의 [뷰 로더](https://vue-loader.vuejs.org/)로 해석되어서 웹 자원으로 최종 변환되기 때문에
제스트도 이렇게 변환해주는 도구가 필요할 것 같습니다.

그럼 다음 챕터에서 뷰 테스팅을 도와주는 도구인 Vue Test Utils에 대해 알아보겠습니다.

