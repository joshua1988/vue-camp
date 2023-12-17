---
title: Actions 🆕
---

# Actions

피니아의 액션(actions)은 뷰엑스의 뮤테이션(mutations)와 액션(actions)을 합쳐놓은 속성입니다. 기존에 뷰엑스에서 비동기 처리를 하려면 다음의 절차를 따라야 했습니다.

- actions -> mutations -> state

액션에서 API 요청을 하고 받아온 값을 뮤테이션에서 넘긴 후 뮤테이션에서 상태를 변경해 주는 방식이었습니다. 이 방식은 문법적인 측면에서 다소 장황하고 번거로운 측면이 있어 피니아에서는 아래와 같이 단순화 되었습니다.

- actions -> state

## actions 선언

액션을 하나 선언해 보겠습니다.

```js
export const useStore = defineStore('app', {
  state: () => {
    return {
      count: 0
    }
  },
  actions: {
    addCount() {
      this.count++;
    }
  }
});
```

위 코드는 `count` 라는 상태 값을 1씩 증가시키는 `addCount()` 액션 함수를 작성했습니다. 뷰엑스와 다르게 액션 함수 안에서 `this`를 이용하여 바로 `state`에 접근할 수 있습니다.

또한, 아래와 같이 비동기 코드도 작성할 수 있습니다.

```js
export const useStore = defineStore('app', {
  state: () => {
    return {
      count: 0
    }
  },
  actions: {
    async fetchCount() {
      const response = await axios.get('/v1/api/productCount');
      this.count = response.data;
    }
  }
});
```

## actions 사용

액션은 state, getters와 마찬가지로 컴포넌트에서 다음과 같이 사용합니다.

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
  <button @click="store.addCount">더하기</button>
  <p>{{ store.count }}</p>
</template>
```

위 코드에서 더하기 버튼을 누르면 `addCount()` 액션 함수가 실행되면서 스토어의 `count` 상태가 증가됩니다.