---
title: Component with Slots
---

# 슬롯을 이용한 컴포넌트 템플릿 확장

세 번째로 살펴볼 컴포넌트 디자인 패턴은 슬롯을 이용한 컴포넌트 설계 방법입니다. [슬롯](/reuse/slots.html) 챕터에서 이미 살펴봤듯이 슬롯은 하위 컴포넌트의 템플릿을 상위 컴포넌트에서 유연하게 확장할 수 있는 기능입니다.

슬롯은 탭, 모달(팝업), 버튼 등 흔히 사용되는 UI 컴포넌트를 모두 재사용 할 수 있게 도와줍니다. 예시 코드를 살펴보겠습니다.

```html {4}
<!-- BaseButton.vue -->
<template>
  <button type="button" class="btn primary">
    <slot></slot>
  </button>
</template>
```

```html {5,7-10}
<!-- App.vue -->
<template>
  <div>
    <!-- 텍스트로 버튼 이름만 정의 -->
    <base-button>Show Alert</base-button>
    <!-- 아이콘과 텍스트로 버튼의 UI 확장 -->
    <base-button>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
      Download
    </base-button>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue';

export default {
  components: {
    BaseButton
  }
}
</script>
```

위 코드는 버튼의 최소 마크업을 갖는 BaseButton 컴포넌트를 생성한 후 슬롯을 이용하여 버튼의 내용이 확장될 수 있게 구조화한 코드입니다. BaseButton.vue에서 `<slot>` 태그를 넣어놨기 때문에 BaseButton 컴포넌트를 등록하여 사용할 때 상위 컴포넌트에서 텍스트를 넣어 버튼의 이름만 바꾸거나, 텍스트와 아이콘을 함께 넣어 버튼의 UI를 꾸밀 수도 있습니다.