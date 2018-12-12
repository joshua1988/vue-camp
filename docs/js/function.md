---
title: Function
---

# Function

함수란 특정 기능을 수행하는 코드의 단위입니다. 좀 더 쉽게 설명하자면 코드 여러 줄이 모여 있는 코드 모음 정도가 되겠네요. 이 코드의 모음은 반드시 1개 이상의 목적을 가져야합니다.

함수는 아래와 같이 생겼습니다.

```js
function sumNumbers(a, b) {
  return a + b;
}
```

위의 `sumNumbers` 라는 함수는 두 개의 숫자를 넘겨 받아 합을 반환해주는 역할을 하고 있습니다. 사용하려면 아래와 같이 호출합니다.

```js
sumNumbers(10, 20); // 30
```

## 함수 표현식과 함수 선언문

다른 프로그래밍 언어와 다르게 자바스크립트는 함수를 선언하는 방법이 2가지가 있습니다.

- 함수 표현식
- 함수 선언문

각각의 형식을 코드로 살펴보겠습니다.

```js
// 함수 표현식
var sumNumbers = function(a, b) {
  return a + b;
};

// 함수 선언문
function sumNumbers(a, b) {
  return a + b;
}
```

일반적으로 많은 프로그래밍 가이드에서 함수 선언문을 더 추천하고 있지만, 개인 스타일에 따라서 얼마든지 선택하여 사용할 수 있습니다.

::: tip
함수 표현식과 같이 함수를 정의할 수 있는 이유는 자바스크립트에서는 함수도 변수, 인자로 취급할 수 있기 때문입니다. 일급 객체(first-class citizens)라는 특징에 대해서 알아보시면 좋을 것 같네요!
:::

## 함수형 사고와 함수형 프로그래밍

함수를 작성하실 때는 가급적 [단일 책임 원칙(Single Responsibility Principle)](https://en.wikipedia.org/wiki/Single_responsibility_principle)을 지켜주시면 좋습니다. 단일 책임 원칙이란 1개의 함수는 1개의 기능만 담당해야 한다는 프로그래밍 원칙입니다. 함수에 여러 가지 기능이 들어가면 들어갈수록 재사용하기가 어려워지며 이는 뷰 컴포넌트를 설계할 때도 사고 방식에 영향을 줄 수 있습니다.

단일 책임 원칙의 관점에서 잘 설계된 함수와 그렇지 않은 함수를 비교해보겠습니다.

```js
// 잘 설계된 함수
function sumNumbers(a, b) {
  return a + b;
}
```

위 함수는 함수 명에서도 알 수 있지만 두 수의 합을 구하는 간단한 함수입니다. 두 개의 숫자를 더하는 행위에만 관심을 가지고 있고, 덧셈 로직을 제외한 나머지 코드는 넣지 않았습니다.

아래는 같은 함수 명으로 다른 로직을 수행하는 함수입니다.

```js
// 단일 책임 원칙에 벗어나는 함수
function sumNumbers(a, b) {
  var num = 1000;
  var data = {};

  $.get('domain.com/products/1').then(function(response) {
    data = response.data;
  });

  var total = a + b + num;
  return total;
}
```

위 함수의 이름은 `sumNumbers`라는 함수의 이름을 갖고 있지만, 실제로 두 수를 더하는 로직 이외에도 데이터 요청이나 다른 숫자를 더하는 로직들이 뒤엉켜 있습니다. 위와 같은 코드는 단일 책임 원칙에 벗어나는 코드이며 재사용하기가 쉽지 않습니다.

좀 더 나아가서 앞의 함수를 단일 책임 원칙의 관점에서 리팩토링 해보면 아래와 같이 바뀔 수 있습니다.

```js {2,6,12}
// 함수 리팩토링
function sumNumbers(a, b) {
  return a + b;
}

function sumAll() {
  var num = 1000;
  var total = sumNumbers(0, 0) + num;
  return total;
}

function fetchData() {
  var data = {};
  $.get('domain.com/products/1').then(function(response) {
    data = response.data;
    return data;
  });
}
```

위와 같은 함수 설계에 관심을 갖다 보면 자연스럽게 함수형 프로그래밍에 대해 관심을 갖게 됩니다. 함수형 프로그래밍을 하기 위해서는 클로져(closure)라는 개념을 정확히 이해해야 하기 떄문에 클로져 챕터에서 간략히 소개하겠습니다.