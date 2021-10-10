---
title: state vs data
---

# state vs data

애플리케이션 스테이트(application state)는 화면에 보여지는 모든 데이터를 의미합니다. 뷰에서 애플리케이션 스테이트는 특정 컴포넌트 내에서만 접근할 수 있는 data와 여러 컴포넌트 간에 공유되는 [state](../vuex/state.html)로 구분할 수 있습니다.

## 접근 가능 범위와 데이터 바인딩 방식

`data` 속성에는 각 컴포넌트에서 필요한 변수를 정의합니다. `data` 속성에 선언된 값은 해당 컴포넌트 내에서만 접근하고 사용할 수 있습니다.

각 컴포넌트에서 아래 코드와 같이 `data`를 정의하고, 사용할 수 있습니다.

```html
<div>{{ message }}</div>
```

```js
new Vue({
  data: {
    message: 'Hello Vue.js'
  }
})
```

Vuex의 `state`에는 여러 컴포넌트에서 공통으로 사용하기 위한 변수를 정의합니다. `state`에 선언된 값은 프로젝트의 모든 컴포넌트에서 접근하고 사용할 수 있습니다.
`state`에 정의한 변수는 각 컴포넌트에서 아래 코드와 같이 사용할 수 있습니다.

```html
<div>{{ this.$store.state.message }}</div>
```

```js
new Vuex.Store({
  state: {
    message: 'Hello Vue.js'
  }
})
```

## 값 변경 방식

`data` 속성에 선언된 값은 해당 컴포넌트 내에서 자유롭게 변경할 수 있습니다. `data`는 뷰의 반응성(Reactivity)이 반영된 속성이기 때문에 값을 변경하면 Vue가 바로 감지하여 화면에 변경된 값을 보여줍니다.

```html
<template>
  <div>{{ count }}</div>
  <button @click="increment">+</button>
</template>
```

```js
new Vue({
  data: {
    count: 0
  },
  methods: {
    increment() {
      this.count += 1;
    }
  }
})
```

`state`에 선언된 값은 [뮤테이션](../vuex/mutations.html)을 통해서만 변경할 수 있습니다.

```html
<template>
  <div>{{ this.$store.state.count }}</div>
  <button @click="increase">+</button>
</template>
```

```js
// count.vue
new Vue({
  methods: {
    increase() {
      this.$store.commit('increment');
    }
  }
})
```

```js
// store.js
new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count += 1;
    }
  }
})
```

## Vuex를 언제 사용할까?

Vuex를 사용하지 않는다면 컴포넌트들은 각 컴포넌트만의 애플리케이션 스테이트 즉, `data` 를 가지게 됩니다.

이때 여러 컴포넌트가 한 컴포넌트의 `data`를 공유해야 하는 경우, `prop` 속성이나 이벤트를 사용합니다. 하지만 프로젝트의 규모가 커질수록, 이런 방식의 상태 관리는 코드를 복잡하게 만듭니다.

따라서 여러 컴포넌트가 공유하는 스테이트는 Vuex를 사용하여 전역으로 관리하는 것이 좋습니다.

Vuex의 store를 통해 `state`를 전역으로 관리하면, 모든 컴포넌트가 공유하는 `state`에 직접 접근할 수 있습니다. 또한 Vuex의 `state`도 Vue 인스턴스의 `data`와 마찬가지로 뷰의 반응성을 갖기 때문에 `state`의 값이 변경되었을 때 바로 감지할 수 있습니다.
