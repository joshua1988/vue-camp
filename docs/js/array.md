---
title: Array
---

# 배열(Array)

배열(Array)은 객체와 더불어 실제로 웹 애플리케이션을 구현할 때 가장 많이 쓰이는 데이터 유형입니다. 배열을 선언하는 방식은 객체와 유사합니다.

```js
var arr = [];
```

여기서 `[]`를 배열 리터럴이라고 하며 배열을 정의할 때 사용합니다.

## 배열의 요소

객체는 `속성 / 값`의 조합으로 데이터를 저장하지만 배열은 `인덱스 / 값`의 조합으로 데이터를 저장합니다.

```js
// arr 변수에 빈 배열을 선언
var arr = [];

// 배열의 0번째 인덱스에 10을 대입
arr[0] = 10;

console.log(arr); // [10]
```

::: tip
배열의 인덱스는 0부터 시작합니다. 빈 배열에 최초로 값을 추가하면 0번째 인덱스에 값이 추가됩니다.
:::

## 배열 조작하기

배열을 조작하는 방법은 아래와 같이 직접 인덱스에 접근해서 조작하는 방법이 있습니다.

```js
// 인덱스를 직접 접근해서 사용하는 경우
var arr = [];
arr[0] = 100;
arr[1] = 20;
arr[0] = 10;
console.log(arr); // [10, 20]
```

하지만 위와 같이 인덱스에 직접 접근해서 조작하는 것보다 자바스크립트 내장 API를 사용하는 것을 추천합니다. 그리고 이 방식은 뷰 개발자 뿐만 아니라 자바스크립트 개발자들에게도 해당되는 사항입니다.

```js
// 자바스크립트 내장 API를 사용하는 경우
var arr = [];
arr.push(100);
arr.push(20);
arr.splice(0, 1, 10);
console.log(arr); // [10, 20]
```

## 자주 사용하는 배열 API

배열을 조작할 때 주로 사용하는 API는 다음과 같습니다.

- [push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) : 배열에 데이터 추가 (맨 끝 인덱스부터 추가됨)
- [slice()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) : 배열의 특정 인덱스에 있는 값을 반환 (배열의 내용이 변환되지 않음)
- [splice()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) : 배열의 특정 인덱스에 있는 값을 변경 (배열의 내용이 변경됨)
- [pop()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) : 배열의 마지막 인덱스의 값을 꺼냄 (배열의 내용이 변경됨)
- [shift()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) : 배열의 첫번째 인덱스의 값을 꺼냄 (배열의 내용이 변경됨)