---
title: Array
---

# 배열(Array)

배열(Array)은 객체와 더불어 실제로 웹 애플리케이션을 구현할 때 가장 많이 쓰이는 변수 타입입니다. 배열을 선언하는 방식은 객체와 유사합니다.

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

하지만 위와 같이 인덱스에 직접 접근해서 조작하는 것보다 자바스크립트 내장 API를 사용하는 것을 추천합니다. 그리고 이 방식은 뷰 개발자 뿐만 아니라 자바스크립트 개발자들에게도 권장되는 방식입니다.

```js
// 자바스크립트 내장 API를 사용하는 경우
var arr = [];
arr.push(100); // [100]
arr.push(20); // [100, 20]
arr.splice(0, 1, 10); // [10, 20]
console.log(arr); // [10, 20]
```

## 자주 사용하는 배열 API

배열을 조작할 때 주로 사용하는 API는 다음과 같습니다.

### [push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

`push()`는 배열에 데이터를 추가할 때 사용하며, 맨 끝 인덱스부터 추가됩니다. 

```javascript
let arr = [];
arr.push(2); // [2]
arr.push(4); // [2, 4]
arr.push(1); // [2, 4, 1] 
arr.push(5); // [2, 4, 1, 5]
```

### [slice()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

`slice()`는 배열의 특정 인덱스에 있는 값을 반환하며 새로운 배열을 반환합니다. 그래서 원본 배열의 내용은 바뀌지 않습니다. 

매개변수가 1개이면, 해당 인덱스부터 배열의 마지막까지의 모든 요소들을 포함한 새로운 배열을 반환합니다. 매개변수가 2개일 경우, 첫번째 매개변수는 기존 배열의 시작점(인덱스)을 지정하는 것이고, 두번째 매개변수는 배열의 종료 지점(인덱스)을 뜻합니다. 이때는 시작 지점에 있는 요소를 포함하여, 종료 지점에 있는 요소를 제외하고 그 사이의 요소들을 반환합니다. 

```javascript
const fruits = ['apple', 'banana', 'orange', 'peach', 'grape']

console.log(fruits.slice(2)); // ['orange', 'peach', 'grape']
console.log(fruits.slice(2, 4)); // ['orange', 'peach']
console.log(fruits.slice(1, -1)); // ['banana', orange', 'peach']
```



### [splice()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) 

`splice()`는 배열의 특정 인덱스에 있는 값을 변경하거나 또는 삭제됩니다. `splice()`는 원본 배열의 내용을 변경합니다.

`splice()`는 최소 2개의 매개변수가 필요합니다. 첫번째 매개변수는 배열의 변경을 시작할 인덱스를 말합니다. 두번째 매개변수는 배열에서 몇 개의 요소를 제거할지 지정합니다. 만약 세번째 매개변수를 지정하지 않으면 요소를 제거하고, 세번째 혹은 그 뒤에 여러 매개변수가 존재한다면 새로 추가할 요소들을 나타냅니다. 

예를 들어, `animals.splice(1, 0, 'reindeer')` 을 살펴보면, 첫번째 매개변수가 1이기 때문에 배열의 변경이 첫 번째 인덱스부터 시작되고, 두번째 매개변수가 0이므로 아무 요소도 제거되지 않습니다. 세번째 매개변수에 `'reindeer'`이 있기 때문에 변경이 시작되는 첫번째 인덱스에 해당 요소가 추가됩니다. 

```javascript
const animals = ['tiger', 'lion', 'rabbit', 'gorilla']
animals.splice(1, 0, 'reindeer'); // ['tiger', 'reindeer', 'lion', 'rabbit', 'gorilla']
animals.splice(4, 2, 'turtle', 'hippo'); //['tiger', 'reindeer', 'lion', 'rabbit', 'turtle', 'hippo']

```



### [pop()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

`pop()`은 배열의 마지막 인덱스의 값을 꺼내고, 해당 값을 리턴합니다. `pop()`은 배열의 내용을 변경합니다.

```javascript
let things = ['presents', 'vitamins', 'scissors', 'bags'];
let popped = things.pop();
console.log(popped); // 'bags'
console.log(things); // ['presents', 'vitamins', 'scissors']
```



### [shift()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) 

`shift()`는 배열의 첫번째 인덱스의 값을 꺼내며, 해당 값을 리턴합니다. `shift()`는 배열의 내용을 변경합니다. 

```javascript
let numbers = [1, 2, 3, 4, 5];
let firstElement = numbers.shift();
console.log(firstElement); // 1
console.log(numbers); // [2, 3, 4, 5]
```
