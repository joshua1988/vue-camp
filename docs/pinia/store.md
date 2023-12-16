---
title: Store 🆕
---

## 스토어 선언

피니아의 기본 문법을 사용하기 위해 다음과 같이 스토어를 선언합니다.

```js
// ./store/index.js
import { defineStore } from 'pinia'

export const useStore = defineStore('app', {
  state: () => {
    return {
      message: 'Hello Pinia'
    }
  }
})
```

위 코드는 store 폴더 아래에 index.js 라는 파일을 만들고 피니아의 기본 코드를 작성했습니다. 피니아 라이브러리에서 제공하는 `defineStore()`를 이용해서 첫 번째 인자로 스토어의 이름을 선언하고 두 번째 인자로 스토어의 내용을 정의합니다.

스토어의 내용에는 `message`라는 상태(state)를 하나 정의했습니다.

:::tip
state를 정의할 때 객체 형태가 아니라 화살표 함수를 사용합니다. 뷰엑스에서는 객체 형태와 화살표 함수 형태가 모두 지원되지만 피니아에서는 화살표 함수 형태로만 작성해야 합니다.
:::

## 스토어 사용

앞에서 선언한 스토어를 컴포넌트에서 사용해 보겠습니다.

```html
<!-- App.vue -->
<template>
  <p>{{ store.message }}</p>
</template>

<script>
import { defineComponent } from 'vue';
import { useStore } from './store/index';

export default defineComponent({
  setup() {
    const store = useStore();
    return { store };
  }
});
</script>
```

위 코드는 App 컴포넌트에서 스토어의 상태를 화면에 표시한 코드입니다. 피니아는 이처럼 스토어를 사용하기 위해서 컴포지션 API인 [setup API](../reuse/composition.html#setup)을 꼭 사용해야 합니다. `setup()` 안에서 반환된 store는 템플릿 표현식에서 사용할 수 있기 때문에 `store.message`의 최종 결과는 앞에서 정의한 'Hello Pinia'가 됩니다.

## 스토어 작명법

피니아의 스토어를 작명할 때는 아래 규칙을 참고합니다.

1. `defineStore()`의 첫 번째 인자는 다른 스토어들과 구분되는 유니크한 값이어야 합니다. 예를 들면, 스토어를 2개 등록할 때 이름이 겹치면 안됩니다.

```js{1,9}
export const useStore = defineStore('app', {
  state: () => {
    return {
      message: 'Hello Pinia'
    }
  }
})

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      user: { name: '캡팡' }
    }
  }
})
```

2. `defineStore()`를 받는 변수의 이름은 `useXXXStore`으로 작명합니다. 예를 들면, 다음과 같습니다.

```
useAppStore
useUserStore
useCounterStore
```