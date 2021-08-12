---
title: Nullish coalescing operator
---

# 널 병합 연산자(Nullish coalescing operator)

널 병합 연산자(Nullish coalescing operator)는 연산자(`??`)의 왼쪽 피연산자가 null 또는 undefined일 때 오른쪽 피연산자를 반환하고, 그렇지 않으면 왼쪽 피연산자를 반환하는 논리 연산자입니다.

## 기존 문자열 할당 방식

기존 함수의 인자가 null 또는 undefined인 경우를 판단하는 방식은 아래와 같았습니다.

```js
function printTitle(text) {
  let title = text;
  if (text == null || text == undefined) {
    title = 'Cracking Vue.js';
  }
  console.log(title);
}
printTitle('Crack'); // Crack
printTitle(); // Cracking Vue.js
```

## 널 병합 연산자를 이용한 방식

널 병합 연산자(`??`)를 이용한 위 예제 코드의 함수 정의 방식은 아래와 같습니다.

```js
function printTitle(text) {
  let title = text ?? 'Cracking Vue.js';
  console.log(title);
}
printTitle('Crack'); // Crack
printTitle(); // Cracking Vue.js
```

위 코드를 보시면 기존의 if 문을 활용해서 null 또는 undefined인 경우를 판단했던 방식보다 널 병합 연산자(`??`)를 사용했을 때 코드의 양이 줄어들고, 훨씬 간결해진 것을 확인하실 수 있습니다.

## 논리 연산자 OR(`||`)와의 차이점

널 병합 연산자(`??`)와 비슷한 논리 연산자 OR(`||`)가 있습니다. 논리 연산자 OR(`||`) 또한 왼쪽의 피연산자가 null 또는 undefined인 경우 오른쪽의 피연산자를 반환합니다.

하지만 논리 연산자 OR(`||`)는 null과 undefined를 포함한 falsy 한 값인 `0`, `''`, `NaN`의 경우에도 오른쪽 피연산자를 반환합니다.

```js
function printTitle(text) {
  const title = text || 'Cracking Vue.js';
  console.log(title);
}
printTitle('Crack'); // Crack
printTitle(); // Cracking Vue.js
```

논리 연산자 OR(`||`)는 `0`, `''`, `NaN` 과 같은 값을 유효한 값이라고 생각한 경우에는 문제가 발생합니다.

```js
function getDemeritCount(count) {
  return count || 'There is no record.';
}
getDemeritCount(0); // There is no record.
getDemeritCount(1); // 1
```

:::tip
널 병합 연산자(`??`)와 논리 연산자 OR(`||`)를 상황에 따라 적절하게 사용하시면 아주 좋습니다.
:::
