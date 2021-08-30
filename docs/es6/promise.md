---
title: Promise
---

# Promise

프로미스는 비동기 작업의 처리를 나타내는 객체입니다. 비동기 작업 처리에 있어서 기존의 [콜백(Callback) 함수 방식의 문제점을](https://javascript.info/callbacks#pyramid-of-doom) 개선한 방식입니다.

## 프로미스를 사용해야 하는 이유

비동기적 작업 처리에 있어서 기존의 콜백 방식에서 벗어나 프로미스를 사용해야 하는 이유는 다음과 같습니다.

1. **콜백 지옥의(Pyramid of Doom) 해결**
2. **에러의 처리의 용이성**

### 1. 콜백 지옥(Pyramid of Doom)

비동기적으로 처리해야 할 작업이 둘 이상이라고 가정해보겠습니다. 이를 콜백 방식으로 처리한 코드는 다음과 같습니다.

```js
loadScript('1.js', function(error, script) {
    if (error) {
        handleError(error);
    } else {
        // ...
        loadScript('2.js', function(error, script) {
            if (error) {
                handleError(error);
            } else {
                // ...
                loadScript('3.js', function(error, script) {
                    if (error) {
                        handleError(error);
                    } else {
                        // ...continue after all scripts are loaded (*)
                    }
                });
            }
        });
    }
});
```

전체적인 코드의 흐름을 정리해보면 다음과 같습니다.

1. `1.js`파일을 불러옵니다. 파일을 불러오는 과정에서 에러가 발생하면 처리합니다.
2. `1.js`파일을 정상적으로 불러왔다면, `2.js` 파일을 불러옵니다. 에러가 발생하면 처리합니다.
3. `2.js`파일을 정상적으로 불러왔다면, `3.js` 파일을 불러옵니다. 마찬가지로 에러가 발생하면 처리합니다.

처리해야 할 작업이 많아질수록 코드가 뾰족탑처럼 오른쪽으로 치우치는 형태를 보이게 됩니다. 이러한 함수 중첩의 모양이 피라미드와 비슷하다고 하여 **Pyramid of Doom**으로 불리게 되었습니다.

위의 예시에서 볼 수 있듯 콜백 지옥은 코드의 가독성을 저해하게 되지만 프로미스를 활용하면 이러한 문제점을 해결할 수 있게 됩니다.

### 2. 에러의 처리

사실 콜백 지옥은 프로미스를 활용하지 않고도 해결할 수 있습니다. 익명 함수의 사용을 포기하고 콜백 함수들을 분리하는 방법을 통해 해결 가능합니다.

```js
loadScript('1.js', step1);

function step1(error, script) {
    if (error) {
        handleError(error);
    } else {
        // ..
        loadScript('2.js', step2);
    }
}

function step2(error, script) {
    if (error) {
        handleError(error);
    } else {
        // ..
        loadScript('3.js', step3);
    }
}

// step3, step4 ....
```

위의 예시처럼 콜백 함수의 분리를 통해 코드의 가독성을 높일 수 있음에도 프로미스가 더 바람직한 이유는 **에러 처리가 쉽다**는 측면에 있습니다. 프로미스를 통한 에러 처리는 뒤에서 설명할 `.then`, `.catch` 메소드를 통해 간단히 정리 가능합니다.

```js
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error('Error!'));

        document.head.append(script);
    });
}

loadScript('callback.js')
    .then(console.log)
    .catch(console.log);
```

파일이 정상적으로 로드되었으면 `onload` 이벤트가 감지됨과 동시에 `resolve` 함수가 호출되어 프로미스의 상태가 `fulfilled`로 바뀌게 됩니다.

반대로 파일의 로드가 실패하게 되면 에러가 발생하며, `onerror` 이벤트가 감지됨과 동시에 `reject` 함수가 호출되어 프로미스의 상태가 `rejected`로 바뀌게 됩니다.

이후 프로미스의 상태에 따라 `.then` 또는 `.catch` 메소드가 실행되게 됩니다.

## 기본 문법

생성자 함수를 활용한 프로미스 객체 생성 법은 다음과 같습니다.

```js
const promise = new Promise((resolve, reject) => {
    // executor
}
```

`Promise()`생성자에 전달되는 함수는 **실행 함수**(executor)로, 객체 생성 후 자동적으로 실행됩니다.

## 프로미스 객체 프로퍼티

프로미스 객체는 두 가지 프로퍼티(properties)를 가집니다.

1. 상태(state): `pending`으로 초기화되며 `resolve`가 호출될 시 `fulfilled`로, `reject`가 호출될 시 `rejected`로 바뀝니다. `rejected`, `resolved` 두 상태를 통칭하여 `settled` 상태 라고 합니다.

2. 결과(result): `undefined`로 초기화되며 `resolve(value)`메서드가 호출될 시 `value`로, `reject(error)`메서드가 호출될 시 `error`로 바뀝니다.

## 기본 예제

다음의 예제는 별도의 필터링 없이 프로미스 객체를 생성한 뒤 `console.log(promise)`를 통해 객체를 살펴봅니다.

```js
const promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve('success');
    }, 1000);
});
console.log(promise);
```

프로미스 객체의 실행 함수를 1초가 지난 뒤에 실행하게끔 설정해두었으므로, 위의 예제를 한 번에 실행하게 되면 콘솔 상에 다음과 같은 결과가 나타납니다.

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

1. 프로미스객체의 실행 함수는 단 하나의 `resolve` 또는 `reject`만 처리할 수 있습니다.

```js
const promise = new Promise((resolve, reject) => {
    resolve('done!');

    reject(new Error('error')); // ignored
    setTimeout(() => {
        resolve('..');
    }, 1000);
});
```

2. 프로미스의 `reject`는 `resolve`와 마찬가지로 인자에 어떠한 타입이 와도 상관없지만, `Error`객체와 함께 처리하는 것이 권장됩니다. 그 이유는 [다음의 문서](https://github.com/petkaantonov/bluebird/blob/master/docs/docs/warning-explanations.md#warning-a-promise-was-rejected-with-a-non-error)를 참조하세요.

3. `resolve`와 `reject`는 꼭 비동기적으로 호출되어야 하는 것은 아닙니다.

```js
const promise = new Promise((resolve, reject) => {
    resolve(123);
});
```

4. 프로미스 객체의 `state`와 `result`는 외부에서 접근할 수 없습니다. `.then`, `.catch`, `.finally` 메서드를 통해 다뤄질 수 있습니다.

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

프로미스 객체의 에러를 처리할 때 (rejected된 경우) 사용됩니다. `.catch`메서드는 `.then` 메서드의 첫 번째 인자에 `null`을 전달한 것과 마찬가지로 작동하게 됩니다.

```js
const promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Error!')), 1000);
});

promise.catch(alert); // same as promise.then(null, alert)
```

프로미스의 에러 처리는 가급적 `.catch` 메서드를 사용해야 합니다. 그 이유는 [Javascript.info - Error handling with promises](https://javascript.info/promise-error-handling)문서에 소개되어 있습니다.

### 3. finally

`.finally` 메서드는 프로미스가 `settled` 상태일 때 호출됩니다. Promise 객체 정의 후, 작업 처리의 성공 및 실패 여부에 상관없이, `.finally`메서드를 사용하기만 하면 무조건 호출되는 메서드입니다.

`.finally`는 **인자를 받지 않습니다.**

```js
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('result!'), 1000);
});
promise
    .finally(() => {
        alert('promise ready!');
    })
    .then(console.log);
```
