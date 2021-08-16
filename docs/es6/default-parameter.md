---
title: Default parameter
---

# 기본값 매개변수(Default parameter)

기본값 매개변수는 함수에 값이 없거나 undefined인 매개변수를 전달할 때 기본값 대체할 때 사용합니다.

## 구문

> function functionName(param1 = defaultValue1, ..., paramN = defaultValueN) { ... }

```js {1}
function foo(param1 = 1, param2 = {}, param3 = 'korean') {
  console.log(param1, param2, param3);
};
foo(30, { name: 'amy' }, 'american'}); // 30, { name: 'amy' }, 'american'
foo(); // 1, {}, 'korean'
```

## 설명

ES6 이전에는 `||`를 이용하여 falsy 한 값을 받으면 기본값으로 대체하는 방식으로 사용하였습니다. <br />
아래 예시 코드를 예로 들면 `printPersonInfo` 호출 시 `height`에 할당된 값이 없거나 falsy한 값이 온다면 `height`를 `180`으로 설정하는 방식으로 사용하였습니다.

### || 를 이용한 기본값 방식

```js {2-4}
function printPersonInfo(height, weight, age) {
  var height = height || 180;
  var weight = weight || 60;
  var age = age || 66;

  console.log(height, weight, age);
};

printPersonInfo(10, 200, 300); // 10, 200, 300
printPersonInfo(); // 180, 100, 66
```

기본값 매개변수를 사용하면 더이상 함수 내부에서 값을 비교하고 할당 하는 연산이 필요하지 않습니다. <br />
간단하게 함수의 매개변수를 선언하는 곳에서 기본값을 미리 정의 할 수 있습니다.

### 기본값 매개변수 사용 방식

```js {1}
function printPersonInfo(height = 180, weight = 60, age = 66) {
  console.log(height, weight, age);
};

printPersonInfo(178, 58, 29); // 178, 58, 29
printPersonInfo(100); // 100, 60, 66
```

## 주의사항

기본값 매개변수를 사용할 때와 사용하지 않을 때와 차이점이 존재하기 때문에 한가지 주의하셔야 할 것이 있습니다.

default parameter는 undefined나 값이 정의되지 않을 때만 정의된 default value로 할당하기 때문에 `||`를 이용한 default value를 설정할 때와는 다르게 동작합니다.

아래 예시 코드로 좀 더 상세히 알아보겠습니다.

### 주의사항 예시코드

```js
// || 를 이용한 기본값 방식
function printFruit(name, weight, price) {
  var name = name || 'apple';
  var weight = weight || 10;
  var price = price || 15000;

  console.log(name, weight, price);
};

printFruit(0, false, null); // apple, 10, 15000


// 기본값 매개변수 사용 방식
function printFruit(name = 'apple', weight = 10, price = 15000) {
  console.log(name, weight, price);
};

// 0, false, null을 값으로 인식하여 기본값 대체되지 않음
printFruit(0, false, null); // 0, false, null
// 값이 없거나 undefined 일 때 기본값으로 대체
printFruit(); // apple, 10, 15000
```