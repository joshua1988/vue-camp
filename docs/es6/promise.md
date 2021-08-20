---
title: Promise
---

# Promise

Promise는 비동기 작업의 처리를 나타내는 객체입니다. 비동기 작업 처리에 있어서 기존의 [콜백 함수 방식의 문제점들을](https://javascript.info/callbacks#callback-in-callback) 개선한 방식입니다.

## 기본 문법

생성자 함수를 활용한 Promise 객체 생성 법은 다음과 같습니다.

```js
let promise = new Promise((reslove, reject) => {
    // executor
}
```

`Promise()`생성자에 전달되는 함수는 **실행 함수**(executor)로, 객체 생성 후 자동적으로 실행됩니다.

## Promise 객체 프로퍼티

Promise 객체는 두 가지 프로퍼티(properties)를 가집니다.

1. 상태(state): `pending`으로 초기화되며 `resolve`가 호출될 시 `fulfilled`로, `reject`가 호출될 시 `rejected`로 바뀝니다. `rejected`, `resolved` 두 상태를 통칭하여 `settled` 상태 라고 합니다.

2. 결과(result): `undefined`로 초기화되며 `resolve(value)`메서드가 호출될 시 `value`로, `reject(error)`메서드가 호출될 시 `error`로 바뀝니다.

## 기본 예제

다음의 예제는 별도의 필터링 없이 Promise 객체를 생성한 뒤, `console.log(promise)`를 통해 객체를 살펴봅니다.

```js
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve('success');
    }, 1000);
});
console.log(promise);
```

promise 객체의 실행 함수를 1초가 지난 뒤에 실행하게끔 설정해두었으므로, 위의 예제를 한 번에 실행하게 되면 콘솔 상에 다음과 같은 결과가 나타나며,

```js
Promise {<pending>}
[[Prototype]]: Promise
[[PromiseState]]: "pending"
[[PromiseResult]]: undefined
```

이후 1초가 지난 시점에서 브라우저 콘솔 상에 `console.log(promise)`로 객체를 재확인한 결과는 다음과 같습니다.

```js
Promise {<fulfilled>: "success"}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: "success"
```

## 주의사항

1. Promise객체의 실행 함수는 단 하나의 `resolve` 또는 `reject`만 처리할 수 있습니다.

```js
let promise = new Promise((resolve, reject) => {
    resolve('done!');

    reject(new Error('error')); // ignored
    setTimeout(() => {
        resolve('..');
    }, 1000); // ignored
});
```

2. Promise의 `reject`는 `resolve`와 마찬가지로 인자에 어떠한 타입이 와도 상관없지만, `Error`객체와 함께 처리하는 것이 권장됩니다. 그 이유는 [다음의 문서](https://github.com/petkaantonov/bluebird/blob/master/docs/docs/warning-explanations.md#warning-a-promise-was-rejected-with-a-non-error)를 참조하세요.

3. `resolve`와 `reject`는 꼭 비동기적으로 호출되어야 하는 것은 아닙니다.

```js
let promise = new Promise((resolve, reject) => {
    resolve(123);
});
```

4. Promise 객체의 `state`와 `result`는 외부에서 접근할 수 없습니다. `.then`, `.catch`, `.finally` 메서드를 통해 다뤄질 수 있습니다.

## then, catch, finally

### 1. then

`.then` 메서드는 첫 번째 인자로 `resolved`상태를 처리하는 함수를 받고, 두 번째 인자로는 `rejected`상태를 처리하는 함수를 받습니다.

```js
promise.then(
    function(result) {
        // resolved!
    },
    function(error) {
        // rejected!
    }
);
```

### 2. catch

Promise 객체의 에러를 처리할 때 (rejected된 경우) 사용됩니다. `.catch`메서드는 `.then` 메서드의 첫 번째 인자에 `null`을 전달한 것과 마찬가지로 작동하게 됩니다.

```js
let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Error!')), 1000);
});

promise.catch(alert); // same as promise.then(null, alert)
```

Promise의 에러 처리는 가급적 `.catch` 메서드를 사용해야 합니다. 그 이유는 [Javascript.info - Error handling with promises](https://javascript.info/promise-error-handling)문서에 소개되어 있습니다.

### 3. finally

`.finally` 메서드는 프로미스가 `settled` 상태일 때 호출됩니다. Promise 객체 정의 후, 작업 처리의 성공 및 실패 여부에 상관없이, `.finally`메서드를 사용하기만 하면 무조건 호출되는 메서드입니다.

`.finally`는 **인자를 받지 않습니다.**

```js
let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('result!'), 1000);
});
promise
    .finally(() => {
        alert('promise ready!');
    })
    .then(console.log);
```
