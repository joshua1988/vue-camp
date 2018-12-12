---
title: Mutations
---

# mutations

뮤테이션(mutations)은 뷰엑스에서 상태 값을 변경하는 유일한 방법입니다. 상태는 항상 뮤테이션으로 변경됩니다.

## mutations 선언

뮤테이션을 선언하는 코드입니다.

```js
new Vuex.Store({
  state: {
    message: 'Hello Vue.js'
  },
  mutations: {
    reverseMessage(state) {
      state.message = state.message.split('').reverse().join('');
    }
  }
})
```

위 코드는 뮤테이션의 `reverseMessage()` 메서드를 이용하여 `message` 상태 값을 역순으로 변환하는 코드입니다. 

## mutations 호출

컴포넌트에서 뮤테이션을 호출하려면 `commit()` API를 사용해야 합니다. 코드를 살펴보겠습니다.

```js {4}
new Vue({
  methods: {
    reverseMsg() {
      this.$store.commit('reverseMessage');
    }
  }
})
```

위 컴포넌트에서 `reverseMsg()` 메서드를 호출하면 바로 `reverseMessage()` 뮤테이션이 호출되면서 상태 값이 변환됩니다.

::: tip
뮤테이션의 개념은 methods 속성과 매칭됩니다. [메서드 예제 코드](../syntax/methods.html)와 위의 코드를 비교해보세요.
:::