---
title: Getters
---

# getters

getters 속성은 computed 속성과 매칭되는 기술 요소입니다. 상태(state) 값이 변경되었을 때 변화에 따른 차이를 자동으로 반영하여 값을 계산해줍니다. 

## getters 선언

getters 속성은 다음과 같이 정의합니다.

```js
new Vuex.Store({
  state: {
    message: 'Hello Vue.js'
  },
  getters: {
    reverseMessage(state) {
      return state.message.split('').reverse().join('');
    }
  }
})
```

위 코드는 `reverseMessage` 라는 getters 속성을 선언하여 상태 값 message의 문자열 순서를 거꾸로 뒤집는 코드입니다.

## getters 접근

getters 속성은 컴포넌트에서 아래와 같이 접근합니다.

```html
<div>{{ this.$store.getters.reverseMessage }}</div>
```

코드를 실행하면 화면에 sj.euV olloeH가 출력됩니다.

::: tip
아직 감이 안잡히신다면 computed의 [예제 코드](../syntax/computed.html)와 위의 코드를 비교해보세요.
:::