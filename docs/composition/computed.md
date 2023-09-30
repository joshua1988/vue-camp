---
title: Computed API
---

# computed 속성

이 페이지에서는 컴포지션(Composition API)에서 컴퓨티드 속성을 어떻게 사용할 수 있는지 살펴보겠습니다.

:::tip
컴퓨티드(computed) 속성은 뷰에서 자주 사용되는 속성입니다. 템플릿 표현식의 코드를 간결하게 해주고 API에서 받은 데이터를 가공할 때 연산 로직을 단순화 해줍니다. 컴퓨티드 속성에 대해 자세히 알아보고 싶다면 다음 링크를 확인해 보세요. [computed 속성이란?](/syntax/computed.html)
:::

## computed API 소개

인스턴스 옵션 속성 방식으로 작성한 컴퓨티드 속성 코드입니다.

```html
<template>
  <div>{{ reversedMessage }}</div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello'
    }
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    }
  }
}
</script>
```

위 코드는 컴퓨티드 속성을 사용해 `Hello` 문자열의 순서를 뒤집어 `olleH`로 화면에 표시했습니다. 이 코드를 컴포지션 스타일로 작성하면 다음과 같습니다.

```html
<template>
  <div>{{ reversedMessage }}</div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    // data
    const message = ref('');

    // computed
    const reversedMessage = computed(() => {
      return message.value.split('').reverse().join('');
    });

    return { reversedMessage }
  }
} 
</script>
```

컴포지션에서 컴퓨티드 속성을 쓰기 위해서는 먼저 위와 같이 `computed` API를 라이브러리에서 임포트해야 합니다. 그리고 위 `reversedMessage` 함수가 선언된 것처럼 `computed` API를 호출하고 안에 콜백으로 컴퓨티드 속성으로 정의될 값을 작성합니다. 작성된 코드를 보면 인스턴스 옵션 속성으로 작성한 코드와 크게 다르지 않습니다. 다만, `message.split()....` 형태가 아니라 `message.value.split()...`와 같이 `message.value` 값을 사용해야 합니다.

:::tip
왜 `ref`로 선언된 값은 `setup` 함수 안에서 `.value`로 접근해야 할까요? 자세한 내용은 다음 링크를 참고하세요 :) 

[컴포지션의 .value](/reuse/composition.html#ref-두-번째-특징-value)
:::
