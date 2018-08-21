---
title: Props
---

# props 속성

프롭스 속성은 컴포넌트 간에 데이터를 전달할 수 있는 컴포넌트 통신 방법입니다. 프롭스 속성을 기억할 때는 상위 컴포넌트에서 하위 컴포넌트로 내려보내는 데이터 속성으로 기억하면 쉽습니다.

## props 속성 코드 형식

props 속성을 사용하기 위해서는 하위 컴포넌트의 컴포넌트 내용과 상위 컴포넌트의 템플릿에 각각 코드를 추가해줘야 합니다.

```js
// 하위 컴포넌트의 내용
var childComponent = {
  props: ['프롭스 속성 명']
}
```

```html
<!-- 상위 컴포넌트의 템플릿 -->
<div id="app">
  <child-component v-bind:프롭스 속성 명="상위 컴포넌트의 data 속성"></child-component>
</div>
```

## props 속성 코드 예시

그럼 위의 코드 형식을 참고하여 실제 프롭스 속성을 구현한 코드를 보겠습니다.

```js {3,14}
// 하위 컴포넌트 : childComponent
var childComponent = {
  props: ['propsdata'],
  template: '<p>{{ propsdata }}</p>'
}

// 상위 컴포넌트 : root 컴포넌트
new Vue({
  el: '#app',
  components: {
    'child-component': childComponent
  },
  data: {
    message: 'hello vue.js'
  }
})
```

```html {2}
<div id="app">
  <child-component v-bind:propsdata="message"></child-component>
  <!-- 위의 출력 결과는 hello vue.js -->
</div>
```
