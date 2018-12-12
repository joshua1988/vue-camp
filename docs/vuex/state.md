---
title: State
---

# state

상태(state)는 여러 컴포넌트 간에 공유되는 데이터를 의미합니다.

## state 선언

상태는 아래와 같이 정의합니다.

```js
new Vuex.Store({
  state: {
    message: 'Hello Vue.js'
  }
})
```

위 코드는 `message` 라는 상태 값을 정의한 코드입니다.

## state 접근

위 `message` 상태 값을 컴포넌트에서 접근하기 위해서는 아래와 같이 코딩합니다.

```html
<div>{{ this.$store.state.message }}</div>
```

코드를 실행하면 화면에 Hello Vue.js가 출력됩니다.

::: tip
아직 감이 안잡히신다면 템플릿 문법 챕터에서 Hello Vue.js를 출력하는 [코드](../vue/template.html#데이터-바인딩)와 위의 코드를 비교해보세요.
:::