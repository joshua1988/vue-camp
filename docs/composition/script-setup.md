---
title: Script Setup
---

# `<script setup>` <Badge text="Vue 3"/>

스크립트 셋업(script setup)은 컴포지션(Composition API)을 더 간단하게 작성할 수 있도록 도와주는 문법입니다.

## `setup()` 속성과 `<script setup>` 비교

컴포넌트에서 인스턴스 옵션 속성으로 컴포지션 코드를 작성하려면 다음과 같이 `setup()` 속성을 정의해야 합니다.

```html{10}
<template>
  <div>{{ message }}</div>
  <button @click="changeMessage">변경</button>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    // data
    const message = ref('Hello');

    // methods
    function changeMessage() {
      message.value = 'Hi';
    }

    return { message, changeMessage }
  }
} 
</script>
```

위와 같이 컴포넌트 안에서 컴포지션으로만 컴포넌트의 로직을 작성하는 경우 아래와 같이 스크립트 태그에 `setup`을 추가해서 코드를 간결하게 작성할 수 있습니다.

```html{6}
<template>
  <div>{{ message }}</div>
  <button @click="changeMessage">변경</button>
</template>

<script setup>
import { ref } from 'vue';

// data
const message = ref('Hello');

// methods
function changeMessage() {
  message.value = 'Hi';
}
</script>
```

이 코드는 앞에서 살펴본 코드와 같은 코드입니다. 반응성이 주입된 `message` 데이터와 `changeMessage()` 함수는 별도로 익스포트하거나 추가적인 작업을 하지 않아도 템플릿 표현식에서 사용할 수 있게 됩니다. `setup()` 속성을 정의하면 매번 그 안에서 정의된 데이터와 메서드 등은 반환해줘야 하기 때문에 이 번거로운 절차를 줄여준 것이죠.

<!-- ## `<script setup>` 기본

```html
<script setup>
import { ref } from 'vue';

// data
const message = ref('Hello');

// methods
function changeMessage() {
  message.value = 'Hi';
}
</script>
``` -->