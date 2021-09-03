---
title: Destructuring
---

# 구조 분해 문법(Destructuring)

디스트럭처링이라고 하는 이 ES6 문법은 한글로 번역하면 구조 분해 문법입니다. 구조 분해(?)라는 억지스러운 용어를 설명하기 전에 여기서 말하는 '구조'라는 단어를 먼저 파악해보겠습니다.

## 기존 자바스크립트에서의 '구조'

기존 자바스크립트에서 객체와 배열의 구조는 다음과 같습니다.

```js
var arr = [1, 2, 3, 4];
var obj = {
  a: 10,
  b: 20,
  c: 30
};
```

위 코드는 이상할 것 없는 전형적인 객체, 배열 선언 방식입니다. 왼쪽에 변수 이름을 넣고 오른쪽에 데이터 타입을 선언하죠. '구조'라는 단어는 이러한 선언 형식을 의미합니다.

그럼 '구조 분해'란 무엇일까요? 바로 이러한 변수 선언 형식이 아래와 같이 자유로워지는 것을 의미합니다.

```js
var { a, b, c } = obj;
```

변수에 중괄호를 씌우는 것 자체가 어색하고 낯설기만 합니다. 기존 자바스크립트라면 오류를 내뿜었을 텐데 아래와 같이 콘솔을 찍어보면 제대로 동작합니다.

```js
console.log(a); // 10
console.log(b); // 20
console.log(c); // 30
```

## 특정 객체의 값을 꺼내오는 방법

신기하네요. 자 그럼 이건 어디다가 써먹어야 되는 걸까요?
기존 자바스크립트에서 특정 객체의 값을 꺼내올 때 보통 다음과 같이 구현했었습니다.

```js
var josh = {
  language: 'javascript',
  position: 'front-end',
  area: 'pangyo',
  hobby: 'singing',
  age: '102'
};

var language = josh.language;
var position = josh.position;
var area = josh.area;
var hobby = josh.hobby;
var age = josh.age;
```

여기서 알 수 있는 점은 객체의 특정 속성 값을 꺼내올 때마다 일일이 변수를 하나 생성하고 담아줘야 한다는 점입니다.
그럼 꺼내야 할 속성이 많으면 많을수록 새로운 변수를 생성하고 대입하는 식의 반복 작업을 계속해줘야겠죠.
위 코드만 봐도 5개 속성 값을 가져오는데 개행을 4번 해야 했습니다.

여기서 구조 분해 문법을 적용하면 훨씬 더 간편하게 꺼내올 수 있습니다.

```js
var josh = {
  language: 'javascript',
  position: 'front-end',
  area: 'pangyo',
  hobby: 'singing',
  age: '102'
};

var { language, position, area, hobby, age } = josh;
console.log(language); // javascript
console.log(position); // front-end
console.log(area); // pangyo
console.log(hobby); // singing
console.log(age); // 102
```

이렇게 구조 분해 문법을 사용하면 코드 라인 숫자를 줄일 수 있고, 이 문법이 익숙해지면 전체적으로 코드가 더 간결해지는 것을 느낄 수 있습니다.

## 뷰엑스에 적용하는 구조 분해 문법 1

구조 분해 문법을 활용하기 가장 좋은 곳은 바로 뷰엑스의 actions 속성입니다. 뷰엑스의 actions 속성들은 모두 context라는 인자를 받습니다. 그리고 context의 commit API를 반드시 호출합니다.

```js
actions: {
  fetchData(context) {
    context.commit('addProducts');
  }
}
```

여기서 구조 분해 문법을 적용하면 아래와 같이 바꿀 수 있습니다.

```js
actions: {
  fetchData({ commit }) {
    commit('addProducts');
  }
}
```

어떻게 이렇게 적용된 걸까요? 위 분해 과정을 좀 더 풀어보겠습니다.

먼저, 문법적인 부분을 떠나서 context라는 객체에는 이미 commit 속성이 있다는 것을 확인하였습니다.

```js{3}
actions: {
  fetchData(context) {
    context.commit('addProducts');
  }
}
```

그럼 context 객체가 아래와 같이 정의되어 있다고 가정하겠습니다.

```js
var context = {
  commit: actionName => console.log(actionName +' has been committed!!')
};
```

여기에 구조 분해 문법을 적용하면 다음과 같은 결과가 나타납니다.

```js
var { commit } = context;
commit('addProducts'); // addProducts has been committed!!
```

::: tip
뷰엑스란 뷰의 상태 관리 라이브러리를 의미합니다. 자세한 내용은 [Vuex 튜토리얼](https://joshua1988.github.io/web-development/vuejs/vuex-start/)을 참고하세요.
:::

## 뷰에 적용하는 구조 분해 문법 2

업데이트 예정