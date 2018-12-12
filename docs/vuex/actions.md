---
title: Actions
---

# actions

액션(actions)은 뮤테이션 중에서 비동기 처리 로직들을 정의하는 속성입니다. 동기 처리는 뮤테이션, 비동기 처리는 액션으로 이해하시면 됩니다. 혹시 자바스크립트의 비동기 처리에 대해서 잘 모르시는 분들은 [이 글](https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/)을 참고하세요.

## actions 선언

액션을 정의하는 코드입니다. 앞 [뮤테이션 챕터](./mutations.html#mutations-선언)에서 살펴봤던 코드를 살짝 바꿔봤습니다. 뮤테이션 코드에서는 컴포넌트 단에서 `commit('reverseMessage')` API를 호출하여 state 속성에 정의되어 있던 상태 값을 변환했습니다.

```js
new Vuex.Store({
  state: {
    message: ''
  },
  mutations: {
    reverseMessage(state, data) {
      state.message = data.split('').reverse().join('');
    }
  },
  actions: {
    fetchMessage(context) {
      axios.get(url).then(function(response) {
        context.commit('reverseMessage', response.message);
      });
    }
  }
})
```

이번에는 컴포넌트 단에서 액션을 호출하고 나면 `fetchMessage()` 라는 액션 메서드가 동작합니다. `fetchMessage()` 메서드는 HTTP 통신을 처리하기 때문에 비동기 코드가 되고, GET 요청의 응답으로 온 값을 뮤테이션의 인자로 넘겨서 역순으로 변환한 다음에 `message` 상태 값에 담아줍니다.

## actions 호출

액션을 컴포넌트에서 호출하는 방법은 아래와 같습니다.

```js
new Vue({
  methods: {
    getMessage() {
      this.$store.dispatch('fetchMessage');
    }
  }
})
```

`getMessage()` 메서드를 호출하면 액션의 `fetchMessage()` 속성 함수가 실행됩니다.