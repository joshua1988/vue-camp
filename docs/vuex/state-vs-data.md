---
title: state vs data
---

# state vs data

Vue.js 애플리케이션의 규모가 커지면 컴포넌트의 data 속성과 뷰엑스(Vuex)의 [state 속성](../vuex/state.html) 중 어떤 걸 사용해야 하는지 고민하기 시작합니다. 각 속성의 정의와 어떤 상황에서 뷰엑스의 state를 쓰면 좋은지 알아보겠습니다.

## data 속성

`data` 속성은 뷰의 반응성(Reactivity)이 주입된 속성입니다. 주로 데이터의 값을 화면에 표시하기 위해서 사용하는 속성입니다.

```html
<template>
  <div>{{ message }}</div> <!-- Hello Vue.js -->
</template>
```

```js
new Vue({
  data: {
    message: 'Hello Vue.js'
  }
})
```

반응성이 주입되어 있기 때문에 데이터의 값이 변하면 화면이 다시 그려집니다.

```html
<template>
  <div>{{ message }}</div> <!-- changeMessage() 가 실행되면 hi 표시 -->
</template>
```

```js
new Vue({
  data: {
    message: 'Hello Vue.js'
  },
  methods: {
    changeMessage() {
      this.message = 'hi';
    }
  }
})
```

## state 속성

`state` 속성도 뷰의 반응성이 주입되어 있는 속성입니다. 아래와 같이 스토어에 정의하고 모든 컴포넌트에서 접근할 수 있습니다.

```html
<div>{{ $store.state.message }}</div>
```

```js
new Vuex.Store({
  state: {
    message: 'Hello Vue.js'
  }
})
```

## 접근 가능 범위

`data` 속성은 해당 속성을 선언한 특정 컴포넌트에서만 접근 가능합니다. 만약 다른 컴포넌트에서 해당 `data` 속성을 접근하려면 [프롭스 속성](../vue/props.md)을 이용하여 접근해야 합니다. 반면에, `state` 속성은 스토어에 한번 정의하면 모든 컴포넌트에서 접근할 수 있습니다.

## 값 변경 방식

`data` 속성은 해당 컴포넌트 내에서 자유롭게 변경할 수 있습니다. 메서드나 라이프사이클 훅 함수 등 아래와 같이 컴포넌트 내에서 `this`로 접근하여 값을 변경합니다.

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

`state` 속성은 [뮤테이션](../vuex/mutations.html)으로만 값을 변경할 수 있습니다. 뮤테이션을 통해 변경된 값은 해당 `state` 속성을 사용하고 있는 모든 컴포넌트에 반영되어 최신 상태를 유지합니다.

```html
<template>
  <div>{{ $store.state.count }}</div>
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

뷰엑스는 꼭 뷰엑스를 써야만 특정 기능을 구현할 수 있을 때 사용하는 것을 추천드립니다. 물론 여러 컴포넌트 간에 같은 데이터를 공유할 때는 `state` 속성을 쓰는 것이 프롭스 속성과 이벤트 에밋 방식으로 전달하는 것보다 더 편해 보입니다. 하지만, 이렇게 모든 데이터가 하나의 공간(스토어)에 밀집되는 경우 이후에 해당 공간이 더 복잡해지는 문제점이 생깁니다. 또한, 특정 UI 영역에 해당하는 데이터는 최대한 그 UI 영역에 가까이 있게 하는 것이 추후 기능 확장이나 오류 분석에도 용이합니다.

뷰엑스를 언제 써야 하는지에 대한 답은 없습니다. 스스로 컴포넌트의 범위를 구분 짓고 어떤 데이터(상태)를 어디에 선언할지 판단할 수 있을 때 뷰엑스를 더 올바르게 사용할 수 있을 거라고 생각합니다. 프롭스로 여러 번 내리고 이벤트로 여러 번 올려서 데이터 상태를 바꾸는 것이 뷰엑스보다 더 편하다면 그렇게 해도 됩니다. 이이 대한 판단은 여러분께 맡기겠습니다 :)