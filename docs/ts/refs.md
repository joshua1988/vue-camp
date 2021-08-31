---
title: ref
isDeploy: true
order: 5
---

# ref 타이핑

뷰 타입스크립트 프로젝트에서 `ref` 속성의 타입을 정의하는 방법에 대해 알아봅니다.

## ref 속성이란?

ref 속성은 뷰에서 특정 DOM이나 컴포넌트의 정보를 접근하기 위해 사용하는 속성입니다.

```html
<div ref="my"></div>

<script>
new Vue({
  mounted() {
    console.log(this.$refs.my); // HTMLDivElement
  }  
})
</script>
```

## ref 속성 타입 정의 방법

뷰 컴포넌트 파일에서 `ref` 속성을 사용할 때는 아래와 같이 타입을 정의할 수 있습니다.

```html{3,10-12,14}
<template>
  <div>
    <div ref="my"></div>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";

export default (Vue as VueConstructor<
  Vue & { $refs: { my: HTMLDivElement } }
>).extend({
  mounted() {
    this.$refs.my; // HTMLDivElement
  }
});
</script>
```

## 반복적인 타입 코드 줄이는 방법

컴포넌트마다 매번 위와 같은 형태의 타입을 정의하기가 번거롭다면 코드를 좀 더 줄일 수 있는 제네릭 타입을 선언합니다.

```ts
// src/types.ts
type MyVue<T> = VueConstructor<Vue & T>;
type MyVueRefs<T> = VueConstructor<Vue & { $refs: T }>;

// App.vue
export default (Vue as MyVueRefs<{ my: HTMLDivElement }>).extend({
  mounted() {
    this.$refs.my; // HTMLDivElement
  }
});
```