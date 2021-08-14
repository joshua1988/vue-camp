---
title: Default parameter
---

# 기본값 매개변수(Default parameter)

기본값 매개변수는 기존 함수에서 값이 없거나 undefined인 매개변수를 전달할 때 기본값을 초기화하는 방식으로 이전에 불필요하게 `||`을 사용하지 않도록 개선한 문법입니다.

## 기존 기본값 사용 방식

ES6 이전에는 기본값을 함수 내에서 재정의해야 했습니다.

```js {2-4}
var person = function (height, weight, age) {
  var height = height || 180;
  var weight = weight || 60;
  var age = age || 66;

  console.log(height, weight, age);
};

person(100, undefined, undefined); // 100, 60, 66
```

## 기본값 매개변수 사용 방식

기본값 매개변수를 사용한다면 위 코드를 아래와 같이 개선할 수 있습니다.

```js {1}
const person = function (height = 180, weight = 60, age = 66) {
  console.log(height, weight, age);
};

person(100, undefined, undefined); // 100, 60, 66
```

## 주의사항

기본값 매개변수를 사용할 때와 사용하지 않을 때와 차이점이 존재하기 때문에 한가지 주의하셔야 할 것이 있습니다.

::: warning
인자값으로 0, false, null을 넣을 경우 return 되는 값이 다릅니다.
:::

ES5에서는 0, false, null을 사용할 경우 `||` 에서 false로 인식하기 때문에 기본값으로 값이 변경됩니다.

그러나 ES6에서는 0, false, null을 값으로 인식하기 때문에 **기본값으로 대체되지 않습니다.** 그렇기 때문에 기본값으로 대체할 경우 **undefined**를 사용합니다.

아래 예시 코드로 좀 더 상세히 알아보겠습니다.

### 주의사항 예시코드

#### 기존 기본값 사용 방식

```js {10}
var es5Person = function (height, weight, age) {
  var height = height || 180;
  var weight = weight || 60;
  var age = age || 66;

  console.log(height, weight, age);
};

// es5에서는 0, false, null이 false로 인식되어 기본값 return
es5Person(0, false, null); // 100, 60, 66
```

#### 기본값 매개변수 사용 방식

```js {9}
const es6Person = function (height = 180, weight = 60, age = 66) {
  console.log(height, weight, age);
};

// es6에서는 0, false, null을 값으로 인식하여 기본값 대체되지 않음
es6Person(0, false, null); // 0 false null

// undefined는 기본값으로 대체
es6Person(undefined, undefined, undefined); // 180, 60, 66
```