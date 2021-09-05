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

vuex의 `state`에는 여러 컴포넌트에서 공통으로 사용하기 위한 변수를 정의합니다. `state`에 선언된 값은 프로젝트의 모든 컴포넌트에서 접근하고 사용할 수 있습니다.

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
  <div>{{ count }}</div>
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
