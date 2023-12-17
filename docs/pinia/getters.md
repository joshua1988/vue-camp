---
title: Getters 🆕
---

# Getters

getters는 여러 컴포넌트에서 사용할 수 있는 [컴퓨티드(computed) 속성](../syntax/computed.md)을 의미합니다.

## getters 선언

getters는 다음과 같이 정의합니다. 뷰엑스에서 정의하던 방식과 동일하게 첫 번째 파라미터로 state를 접근하여 값을 조작합니다.

```js
export const useStore = defineStore('app', {
  state: () => {
    return {
      count: 0
    }
  },
  getters: {
    doubleCount(state) {
      return state * 2;
    }
  }
});
```

## getters 사용

앞에서 선언한 getters는 컴포넌트에서 아래와 같이 사용합니다.

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
  <p>{{ store.doubleCount }}</p>
</template>
```