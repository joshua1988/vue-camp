---
title: Const & Let
---

# const & let

const와 let 예약어는 ES6에서 사용하는 변수 선언 방식입니다.

## let

let 예약어는 한번 선언하면 다시 선언할 수 없습니다.

```js
// 똑같은 변수를 재선언할 때 오류
let a = 10;
let a = 20; // Uncaught SyntaxError: Identifier 'a' has already been declared
```

## const

const 예약어는 한번 할당한 값을 변경할 수 없습니다.

```js
// 값을 다시 할당했을 때 오류
const a = 10;
a = 20; // Uncaught TypeError: Assignment to constant variable.
```

단, 객체 `{}`또는 배열 `[]`로 선언했을 때는 객체의 속성(property)과 배열의 요소(element)를 변경할 수 있습니다.

```js
// 객체로 선언하고 속성 값을 변경
const b = {
    num: 10,
    text: 'hi'
};
console.log(b.num); // 10

b.num = 20;
console.log(b.num); // 20
```

```js
// 배열로 선언하고 배열 요소를 추가
const c = [];
console.log(c); // []

c.push(10);
console.log(c); // [10]
```

## 블록 유효범위

ES5의 var를 이용한 변수 선언 방식과 let & const를 이용한 변수 선언 방식의 가장 큰 차이점은 블록 유효범위입니다.

## var의 유효 범위

var의 유효 범위는 함수의 블록 단위로 제한됩니다. 흔히 함수 스코프(function scope)라고 표현합니다.

```js
var a = 100;
function print() {
    var a = 10;
    console.log(a);
}
print(); // 10
```

print 함수 앞에 선언한 `a`와 print 함수 안에 선언한 `a`는 각자 다른 유효 범위를 갖습니다.
`var a = 100;` 는 자바스크립트 전역 객체인 window에 추가가 되고 `var a = 10;`는 `print()` 함수 안에서만 유효한 범위를 갖습니다.

## for 반복문에서의 var 유효 범위

위의 예제를 보다보면 흔히 헷갈릴 수 있는 부분이 "var의 유효 범위가 {}에 제한되나?" 입니다. 아래 예제를 살펴보겠습니다.

```js
var a = 10;
for (var a = 0; a < 5; a++) {
    console.log(a); // 0 1 2 3 4 5
}
console.log(a); // 6
```

`var a = 10;`로 변수 a를 선언한 상태에서 for 반복문에 동일한 변수 이름 a를 사용했습니다. 이렇게 되면 `{}` 으로 변수의 유효 범위가 제한되지 않기 때문에 for 반복문이 끝나고 나서 `console.log(a);` 를 출력하면 for 반복문의 마지막 결과 값이 출력됩니다. 아마 자바나 다른 언어의 개발자들에게는 이 부분이 가장 헷갈릴 것입니다.

이러한 문제점을 해결하고 다른 언어와 통일감을 주기 위해 ES6에서는 const와 let의 변수 유효 범위를 블록`{}`으로 제한하였습니다.

## const와 let의 블록 유효범위

이번엔 위 반복문 코드에 var 대신 let을 적용해보겠습니다.

```js
var a = 10;
for (let a = 0; a < 5; a++) {
    console.log(a); // 0 1 2 3 4 5
}
console.log(a); // 10
```

반복문의 조건 변수 a를 let으로 선언하니 변수의 유효 범위가 for 반복문의 {} 블록 안으로 제한되었습니다.