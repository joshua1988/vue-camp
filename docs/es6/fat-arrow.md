---
title: Arrow Function
---

# 화살표 함수(Arrow Function)

화살표 함수(Arrow Function)는 ES6의 새로운 함수 정의 방식입니다.

## 기존의 함수 정의 방식

기존 자바스크립트의 함수 정의 방식은 아래와 같습니다.

```js
var a = function() {
  // ...
};
```

## 화살표 함수를 이용한 함수 정의

화살표 함수를 이용한 함수 정의 방식은 아래와 같습니다.

```js
var a = () => {
  // ...
};
```

## 화살표 함수의 다양한 문법

화살표 함수를 정의하는 방식은 간단한 자바스크립트 표현식부터 {} 를 이용한 선언 방식까지 여러 방법이 있습니다.

### 1. 단순한 자바스크립트 표현식

단순한 자바스크립트 표현식의 경우 아래와 같이 간소화 문법을 사용할 수 있습니다.

```js
() => 10 + 20; // {} 필요 없음
```

### 2. 함수 선언 방식

복잡한 자바스크립트 선언문이 들어갈 경우에는 {}를 사용하여 아래와 같이 구현합니다.

```js
() => {
  print();
  log();
  return 10 + 20;
};
```

### 3. 전달 인자(parameter)가 하나인 경우

인자를 1개만 선언하는 경우 인자를 받을 때 사용하는 소괄호() 를 생략할 수 있습니다.

```js
const a = num => {
  return num * 10;
};
const b = num => num * 10;
a(10); // 100
b(10); // 100
```

## this 바인딩의 변화

화살표 함수에서 사용되는 this 바인딩은 기존 함수의 [this](https://joshua1988.github.io/vue-camp/js/this.html)와 다른 방식을 가지고 있습니다. <br />화살표 함수의 this는 함수를 **선언**할 때의 상위 스코프의 this로 바인딩 될 객체가 정해집니다.

아래는 화살표 함수의 this를 나타낸 예제입니다. innerFunc의 상위 스코프는 printThis이기 때문에 printThis의 내부 this와 innerFunc의 내부 this는 같은 값으로 바인딩 됩니다.

```js
const foo = {
  name: "bar",
  age: 10000,
  printThis() {
    console.log(this); // {name: "bar", age: 10000, printThis: ƒ}
    innerFunc = () => {
      return this; // {name: "bar", age: 10000, printThis: ƒ}
    };
    console.log(innerFunc());
  }
};

foo.printThis();
```

### setTimeout에서의 this

일반 함수에서 setTimeout에서의 this는 window를 가리킵니다. 그러나 화살표 함수에서는 상위 스코프의 this로 값이 바인딩 됩니다.

```js
const foo = {
  name: "bar",
  age: 10000,
  getThisArrowFunc: function() {
    console.log(this); // {name: "bar", age: 10000, getThisArrowFunc: ƒ}
    setTimeout(() => {
      console.log(this); // {name: "bar", age: 10000, getThisArrowFunc: ƒ}
    }, 1000);
  },

  getThisFunc: function() {
    console.log(this); // {name: "bar", age: 10000, getThisFunc: ƒ}
    setTimeout(function() {
      console.log(this); // window
    }, 1000);
  }
};

foo.getThisArrowFunc();
foo.getThisFunc();
```

그러나 엄격모드('use strict') 일때는 바인딩 되지 않습니다.

```js
"use strict";
(function() {
  setTimeout(() => {
    console.log(this); // undefined
  }, 1000);
})();
```

### addEventListener에서의 this

addEventListener 두 번째 인자로 화살표 함수를 넣으면 this는 상위 스코프의 this를 가리킵니다.

```js
const button = document.getElementById("this-button");
button.innerText = "함수 호출 버튼";

button.addEventListener("click", () => {
  console.log(this === window); // true
  console.log(this.innerText); // undefined
});
```

그래서 addEventListener 함수에서 this를 사용하는 경우, 화살표 함수가 아닌 일반 함수를 사용합니다. 일반 함수로 정의된 addEventListener 함수의 this는 currentTarget을 가리킵니다.

```js
const button = document.getElementById("this-button");
button.innerText = "함수 호출 버튼";

button.addEventListener("click", function() {
  console.log(this === button); // true
  console.log(this.innerText); // 함수 호출 버튼
});
```

class 내부에서 addEventListener 콜백 함수로 사용되는 this는 선언된 class로 생성된 객체의 값이 바인딩 됩니다. 아래 예시 코드를 참조해주시기 바랍니다.

```js
class Foo {
  constructor() {
    this.name = "bar";
  }
  register() {
    window.addEventListener("keydown", e => this.someMethod(e));
  }
  someMethod(e) {
    console.log(this.name); // bar
    console.log(e.keyCode); // e를 누르면 63
  }
}

const baz = new Foo();
baz.register();
```

### call, bind, apply로 바인딩 변경 불가

한가지 주의하실 점은 일반 함수의 this와 다르게 화살표 함수에서의 this는 `call`, `bind`, `apply` 메소드로 this에 바인딩 된 값을 변경할 수 없습니다.

```js
this.foo = "bar";
const normalFunc = function() {
  return this.foo;
};
const arrowFunc = () => this.foo;

console.log(normalFunc.call({ foo: "baz" })); // baz
console.log(arrowFunc.call({ foo: "baz" })); // bar
```

### 생성자 함수로 사용 불가

화살표 함수는 생성자 함수로 사용할 수 없습니다.

```js
const Foo = () => {};
const foo = new Foo(); // Uncaught TypeError: Foo is not a constructor
```
