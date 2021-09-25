---
title: Loop
---

# 반복문(Loop)

반복문은 특정 로직을 반복할 때 사용하는 문법입니다. 프로그래밍 언어에서 가장 흔하게 활용되는 문법입니다. 아래는 전형적인 for 반복문을 자바스크립트 코드로 표현해봤습니다.

```js
for (var i = 0; i < 10; i++) {
  console.log(i); // 0부터 9까지 출력
}
```

앞에서 살펴본 for 반복문의 기본 문법은 다음과 같습니다.

```js
for (반복할 변수 초기화, 반복 조건, 반복할 변수의 증감식) {
  // 반복할 연산
}
```

## 자바스크립트의 반복문

자바스크립트에도 위와 같은 반복문을 많이 사용할까요? 정답은 No입니다. 최적의 성능 튜닝을 위해서 고의로 일반 for문을 사용하는 경우를 제외하고는 다음과 같은 반복문을 주로 사용합니다.

- `forEach` 반복문
- `for in` 반복문
- `for of` 반복문

그럼 위의 문법들을 하나씩 살펴보겠습니다.

## forEach()

forEach 반복문은 배열에 사용하기 좋은 반복문입니다. 아래 코드를 보겠습니다.

```js
var arr = [10, 20, 30];
arr.forEach(function(value, index) {
  console.log('array index: ' + index + ' value : ' + value);
});
```

위 코드의 결과는 아래와 같습니다.

```
array index: 0 value : 10
array index: 1 value : 20
array index: 2 value : 30
```

## for in

for in 반복문은 배열과 객체에 모두 사용할 수 있는 반복문입니다. 뷰의 v-for 디렉티브의 모티브가 되는 문법입니다. 아래와 같은 코드가 있다고 합시다.

```js
var arr = [10, 20, 30];
var obj = {
  num: 10,
  str: 'hi',
  arr: [],
};
```

위 배열과 객체를 for in 반복문으로 순회하면 아래와 같습니다.

```js
// 배열의 인덱스를 1개씩 접근하여 순차적으로 순회하는 경우
for (var key in arr) {
  console.log(arr[key]);
}

// 객체의 키를 1개씩 접근하여 순차적으로 순회하는 경우
for (var key in obj) {
  console.log(obj[key]);
}
```

각 코드의 결과는 아래와 같습니다.

```js
// 배열 반복문의 콘솔
10
20
30

// 객체 반복문의 콘솔
10
hi
[]
```

## for of

for of 반복문은 ES6에 추가된 구문으로서, 반복 가능한(iterable) 속성을 가지는 컬렉션에 사용하기 좋은 반복문입니다.

:::tip
반복 가능한(iterable) 속성은 아래의 조건을 만족합니다.
1) 객체가 [Symbol.iterator] 메서드를 가지고 있어야 합니다.
2) [Symbol.iterator] 메서드는 iterator 객체를 반환해야 합니다.
:::

아래의 예시코드를 통해 for in 반복문과 비교하면서 알아보겠습니다.

```js
var arr = [10,20,30]
```

위 배열을 각각 for of와 for in 반복문으로 순회하면 아래와 같습니다.

```js
// 배열을 각각 순회하는 경우
for (var num of arr) {
    console.log(num); 
}
for (var num in arr) {
    console.log(num); 
}
```

각 코드의 결과는 아래와 같습니다.

```js
// 배열을 각각 순회하는 경우
// for of 반복문의 콘솔
10 20 30 

// for in 반복문의 콘솔
0 1 2
```

앞서 살펴본 코드를 통해 for in이 배열의 인덱스에 접근하는 반면 for of는 배열의 값 자체에 접근하는 것을 알 수 있습니다.
for in은 객체의 속성을 순회하기 때문에, 배열의 속성이자 key에 해당하는 index를 반환하며 순회한 것입니다.
반면 for of는 반복 가능한 배열의 요소를 순회하기 때문에, data를 직접적으로 순회한 것입니다.

:::tip
for in VS for of
- for in : 객체의 열거 가능한 속성에 대해 반복합니다.
- for of : 반복 가능한 속성을 가지는 컬렉션(Arrays, Objects, Map, ...)에 대해 반복합니다.
:::

추가로 반복 가능하지 않은 객체에 대한 for of 반복문 사용은 아래와 같이 에러를 일으킬 수 있습니다.

```js
var obj = {
    num: 10,
    str: 'hi',
    arr: [],
}
for (var prop of obj) {
    console.log(prop, obj[prop]); 
}
```

코드의 결과는 아래와 같습니다.

```js
Uncaught TypeError: obj is not iterable
```

반복 가능하지 않은 객체에 대한 반복문 접근 에러에 대해서는 [이 자료](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Errors/is_not_iterable)를 참고하여 해결할 수 있습니다. 