---
title: State 🆕
---

# State

상태(state)는 여러 컴포넌트에서 공유되는 데이터(data 속성)를 의미합니다.

## state 선언

피니아 스토어 안에서 다음과 같이 화살표 함수 형태로 정의합니다.

```js
export const useStore = defineStore('app', {
  state: () => {
    return {
      count: 0
    }
  }
});
```

## state 접근

컴포넌트의 setup() 함수 안에서 반환한 값으로 상태를 접근합니다.

<code-group>
<code-block title="Vue 3">
```js
export default defineComponent({
  setup() {
    const store = useStore();
    return { store };
  }
});
```
</code-block>

<code-block title="Vue 2">
```js
export default {
  setup() {
    const store = useStore();
    return { store };
  }
};
```
</code-block>
</code-group>


```html
<template>
  <p>{{ store.count }}</p>
</template>
```