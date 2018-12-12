---
title: Closure
---

# 클로져(Closure)

클로져는 **함수의 실행이 끝난 뒤에도 함수에 선언된 변수의 값을 접근할 수 있는 자바스크립트의 성질**입니다. 자바스크립트를 다른 언어와 비교했을 때 차별화되는 유일한 특징인데요. 코드로 바로 살펴보겠습니다.

```js
function addCounter() {
  var counter = 0;

  return function() {
    return counter++;
  }
}
```

위 코드는 `addCounter()`라는 함수를 하나 생성하고 `counter` 변수를 하나 선언한 코드입니다. 앞 챕턴에서 배운 [유효 범위(스코프)](/js/scope.html)를 상기시켜보면 `counter`라는 변수는 현재 함수 안에 선언되어 있기 때문에 함수 안에서만 유효한 유효 범위를 갖게 됩니다. 아래와 같이 말이죠.

```js
function addCounter() {
  var counter = 0;
}

addCounter();
console.log(counter); // Uncaught ReferenceError: counter is not defined
```

함수 밖에서 `counter` 변수를 참조하려고 하면 오류가 발생됩니다. 그 이유는 함수 밖에서 `counter`라는 변수가 선언된 적이 없기 때문입니다. 자 그럼 이 관점에서 다시 클로져 코드로 돌아가보겠습니다.

```js {4-6}
function addCounter() {
  var counter = 0;

  return function() {
    return counter++;
  }
}
```

`counter` 변수 다음으로 주목할 부분은 함수를 반환하는 부분(코드 강조된 부분)입니다. 여기서 이렇게 함수를 반환할 수 있는 이유는 '**함수를 변수나 인자로 넘길 수 있는 자바스크립트의 성질(일급 객체)**' 때문입니다. 자 그럼 이제 아래와 같이 `addCounter()` 함수를 실행해보겠습니다.

```js
addCounter();
```

위의 결과는 무엇일까요? 콘솔에 한번 찍어보겠습니다.

```js
console.log(addCounter());
```

출력된 결과는 아래와 같습니다.

```
ƒ () {
    return counter++;
  }
```

여기서 갸우뚱 하시는 분들은 다시 한번 `addCounter()` 함수 코드를 살펴보시기 바랍니다. 애시당초 `addCounter()` 함수의 역할은 `addCounter()` 함수를 실행했을 때 함수를 반환하는 것 이었습니다. 

그럼 이제 반환된 함수를 살펴보면 `counter++`라는 코드가 보일 겁니다. 그리고 그 변수를 아래와 같이 접근하면 당연히 또 오류가 납니다.

```js
function addCounter() {
  var counter = 0;

  return function() {
    return counter++;
  }
}

addCounter();
console.log(counter); // Uncaught ReferenceError: counter is not defined
```

코드를 찬찬히 살펴보면 `addCounter()`함수의 실행이 끝난 시점에서는 `counter`라는 변수는 더이상 접근할 수 없는 상태가 됩니다. **함수 안에 선언한 변수는 함수 안에서만 유효 범위를 갖게 때문이죠**. 

자 그럼 이제 아래 코드를 실행해보겠습니다.

```js
function addCounter() {
  var counter = 0;

  return function() {
    return counter++;
  }
}

var add = addCounter();
add(); // 0
add(); // 1
add(); // 2
```

위와 같이 코드를 실행했을 때 동작하는 이유가 무엇일까요? 그건 바로 `addCounter()`라는 함수가 반환한 함수를 `add`라는 변수에 담아놨기 때문에 `add` 변수 자체가 함수처럼 동작하는 것입니다. 기술 용어로 정확히 표현하자면 '**add 변수가 addCounter()가 반환한 함수를 참조하고 있다**' 입니다.

이처럼 함수의 실행이 끝나고 나서도 함수 안의 변수를 참조할 수 있는게 바로 클로져입니다. 이러한 패턴을 응용하면 자바스크립트에 없는 private 변수나 함수형 프로그래밍을 할 수 있습니다.

## 함수형 프로그래밍

함수형 프로그래밍이란 특정 기능을 구현하기 위해서 **함수의 내부 로직은 변경하지 않은 상태로 여러 개의 함수를 조합하여 결과 값을 도출하는 프로그래밍 패턴**을 의미합니다. 커링(currying)이 함수형 프로그래밍의 대표적인 예입니다. 코드로 보겠습니다.

```js
function add(num1, num2) {
  return num1 + num2;
}

function curry(fn, a) {
  return function(b) {
    return fn(a, b);
  }
}

var add3 = curry(add, 3);
add3(4); // 7
```

위와 같이 클로져를 활용하면 함수를 조합하여 기능을 구현해나갈 수 있습니다.