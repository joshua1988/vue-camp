---
title: Default parameter
isDeploy: true
order: 10
---

# 기본값 매개변수(Default parameter)

기본값 매개변수란 함수의 매개변수에 값이 전달되지 않았을 때 기본 값으로 설정하는 문법입니다.

## 구문

기본값 매개변수의 문법은 다음과 같습니다.

```js
function functionName(param1 = defaultValue1, ..., paramN = defaultValueN) {
  // ... 
}
```

함수를 정의할 때 매개변수의 우측에 = 를 추가하고 함수에 값이 전달되지 않았을 때 설정할 기본 값을 defaultValue 위치에 지정합니다. 이 문법을 이용해 실제로 기본값 매개변수를 적용한 코드를 보겠습니다.

```js {1}
function foo(param1 = 1, param2 = {}, param3 = 'korean') {
  console.log(param1, param2, param3);
};

foo(30, { name: 'amy' }, 'american'); // 30, { name: 'amy' }, 'american'
foo(); // 1, {}, 'korean'
```

## 설명

ES6 이전 문법에서는 or 연산자인 ||를 이용하여 입력받은 파라미터를 지역변수에 재정의하는 방식을 사용하였습니다. or 연산자의 특성으로 인하여 파라미터의 값이 [falsy value(false 로 평가되는 값, false, null, 0, undefined...)](https://developer.mozilla.org/ko/docs/Glossary/Falsy) 인 경우에 || 연산자 우항의 값을 기본값으로 사용하게 됩니다.

### || 를 이용한 기본값 할당 방식

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

기본값 매개변수를 사용하면 더는 함수 내부에서 값을 비교하고 할당하는 연산이 필요하지 않습니다. <br />
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

하지만 ES6의 기본값 매개변수는 파라미터가 정의되지 않고 `undefined` 값인 경우에만 기본 값을 할당합니다. <br />
따라서, || 연산자를 통한 지역변수 재정의 방식과는 그 동작이 다르므로, 예전 문법에 익숙한 경우 주의해서 사용하여야 합니다. <br /> 아래 예시 코드로 좀 더 상세히 알아보겠습니다.

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
