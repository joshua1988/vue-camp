---
title: Operator
---

# 연산자(Operator)

연산자는 프로그래밍 로직을 구현할 때 논리식이나 산술식을 표현하기 위해 사용하는 기호들을 의미합니다. 주로 코드에서 흔하게 마주치는 아래와 같은 기호들을 의미합니다.

- 산술 연산자 : `+`, `-`, `*`, `/`, `%`
- 논리 연산자 : `||`, `&&`
- 조건 연산자 : `? :`
- 관계 연산자 : `>`, `<`, `===`

::: tip
각 연산자의 의미에 대해서는 MDN 문서 또는 자바스크립트 기초 책을 참고하세요.
:::

## 연산자의 활용 1 - 변수 초기화

논리 연산자를 이용해 변수 초기화 하는 방법에 대해서 알아보겠습니다. 일반적으로 변수의 초기화는 다음과 같은 방법으로 많이 합니다.

```js {3-5}
function fetchData(data) {
  var receivedData;
  if (data === undefined) {
    receivedData = localStorage.getItem('item');
  }
}
```

함수의 인자로 넘어온 값을 if 문으로 확인한 뒤 추가 로직을 실행하는게 대부분의 초기화 문법입니다. 여기서 논리 연산자를 활용하면 아래와 같이 깔끔하게 코드를 구현할 수 있습니다.

```js {3}
function fetchData(data) {
  var receivedData;
  receivedData = data || localStorage.getItem('item');
}
```

## 연산자의 활용 2 - 조건문 대신 삼항 연산자

로직을 구현하다가 보면 if 문을 중첩해서 활용하는 경우가 많습니다. 아래와 같이 말이죠.

```js {3-7}
if (data !== undefined) {
  num = 50;
  if (num > 10) {
    num = 100;
  } else {
    num = 0;
  }
}
```

이럴 때 if 문 대신 삼항 연산자를 활용하면 더 코드를 간결하게 짤 수 있습니다.

```js {3}
if (data !== undefined) {
  num = 50;
  num = num > 10 ? 100 : 0;
}
```