---
title: Script Setup 🆕
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

## 주의할 점

`<script setup>`을 사용할 때는 반응성이 주입된 데이터와 그렇지 않은 일반 변수를 잘 구분해야 합니다. 예를 들어, 다음과 같은 코드가 있다고 합시다.

```html
<template>
  <div>{{ message }}</div>
  <button @click="changeMessage">변경</button>
</template>

<script setup>
let message = 'Hello';

function changeMessage() {
  message = 'Hi';
}
</script>
```

위 코드에서 `message` 변수는 반응성이 주입되지 않은 일반 변수입니다. `let`으로 선언되었기 때문에 변수의 값을 바꿀 수 있죠. 변경 버튼을 눌러 `changeMessage` 메서드가 실행되면 `message` 값을 `Hello`로 바꿀 겁니다.

실제로 버튼을 눌러보면 스크립크 레벨에서는 `message`의 값이 바뀌지만 화면에는 바뀐 값이 표시되지 않는 것을 확인할 수 있습니다. 이렇게 동작하는 이유는 `message` 값에 반응성이 주입되지 않고 일반 변수로 취급된 상태에서 템플릿 표현식에 표시되었기 때문입니다. 그래서 함수가 정상적으로 실행되었지만 화면의 값은 바뀌지 않죠.

만약 값이 바뀌었을 때 반응성에 의해 정상적으로 변경된 데이터가 화면에 표시하게 하려면 다음과 같이 코드를 수정하면 됩니다.

```html
<script setup>
import { ref } from 'vue';

const message = ref('Hi')

function changeMessage() {
  message.value = 'Hello'
}
</script>
```

이처럼 `<script setup>`을 다룰 때는 반응성이 주입된 데이터와 그렇지 않은 데이터를 잘 구분해 주어야 합니다.

:::tip
컴포지션에서 반응성이 주입된 데이터를 다룰 때는 자연스럽게 `let`이 아닌 `const`로 선언하여 제어하게 됩니다. 왜냐하면 `const`는 한번 선언하면 값을 바꿀 수 없지만 `let`은 선언한 이후에도 바꿀 수 있기 때문입니다. `ref`와 같이 반응성을 주입하는 API의 특징은 선언한 변수이 값을 바꾸는 것이 아니라 내장된 `.value`의 값을 바꿉니다. 따라서, `let`을 쓰는 것보다 `const`를 쓰는게 더 안전합니다 :)
:::