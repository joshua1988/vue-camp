---
title: Enhanced Object Literal
---

# 향상된 객체 리터럴(Enhanced Object Literal)

향상된 객체 리터럴이란 기존 자바스크립트에서 사용하던 객체 정의 방식을 개선한 문법입니다. 자주 사용하던 문법들을 좀 더 간결하게 사용할 수 있도록 객체 정의 형식을 바꿨습니다.

## 기존 객체 정의 방식

기존 자바스크립트의 객체 정의 방식은 다음과 같습니다.

```js
var josh = {
  // 속성: 값
  language: 'javascript',
  coding: function() {
    console.log('Hello World');
  }
};
```

## 축약 문법 1 - 속성과 값이 같으면 1개만 기입

객체를 정의할 때 속성(property)와 값(value)이 같으면 아래와 같이 축약이 가능합니다.

```js
var language = 'javascript';

var josh = {
  // language: language,
  language
};

console.log(josh); // {language: "javascript"}
```

위와 같은 축약 문법을 뷰 컴포넌트 등록 방식과 뷰 라우터 등록 방식에 대입해보면 아래와 같습니다.

```js
// #1 - 컴포넌트 등록 방식에서의 축약 문법
const myComponent = {
  template: '<p>My Component</p>'
};

new Vue({
  components: {
    // myComponent: myComponent
    myComponent
  }
});
```

```js
// #2 - 라우터 등록 방식에서의 축약 문법
const router = new VueRouter({
  // ...
});

new Vue({
  // router: router,
  router
});
```

## 축약 문법 2 - 속성에 함수를 정의할 때 function 예약어 생략

기존에 객체를 정의할 때 객체의 속성에 함수를 연결하여 사용하는 경우가 많았습니다. 예를 들면 아래와 같이 말이죠.

```js
const josh = {
  // 속성: 함수
  coding: function() {
    console.log('Hello World');
  }
};
josh.coding(); // Hello World
```

실제로 기능을 구현하다보면 위와 같이 정의해야 할 때가 너무 많습니다. 따라서, ES6에서는 아래와 같이 축약하여 코딩하는 것을 추천합니다.

```js
const josh = {
  coding() {
    console.log('Hello World');
  }
};
josh.coding(); // Hello World
```

이렇게 `function` 예약어를 생략해도 동일하게 동작하기 때문에 타이핑 하는 시간이 줄어듭니다.

그럼 이번에는 뷰 코드에 적용해서 얼마나 타이핑이 줄어드는지 확인해볼까요?

```js
new Vue({
  // ...
  methods: {
    fetchData: function() {
      // ...
    },
    showAlert: function() {
      // ...
    }
  }
});
```

위의 코드를 아래와 같이 생략할 수 있습니다.

```js
new Vue({
  // ...
  methods: {
    fetchData() {
      // ...
    },
    showAlert() {
      // ...
    }
  }
});
```