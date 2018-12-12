---
title: Common Approach
---

# 일반적인 컴포넌트 구조화 방식

첫 번째 컴포넌트 디자인 패턴은 일반적인 컴포넌트 구조화 방식입니다. 뷰 컴포넌트, 컴포넌트 통신 방식을 배우고 나면 자연스럽게 아래와 같이 컴포넌트를 구현하게 됩니다.

```html
<template>
  <app-header @refresh="refreshPage"></app-header>
  <app-content :list="items" @fetch="fetchData"></app-content>
  <app-footer :right="message"></app-footer>
</template>

<script>
import AppHeader from './AppHeader.vue';
import AppContent from './AppContent.vue';
import AppFooter from './AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppContent,
    AppFooter
  }
}
</script>
```

위와 같은 방식은 등록된 컴포넌트가 여러 곳에 쓰이지 않을 때 사용하기 좋은 방식입니다. 실질적인 코드의 재사용성보다는 템플릿 코드의 가독성과 명시적인 코드의 모양새를 더 중점으로 두고 있습니다.

위의 코드가 잘 이해되지 않는다면 아래 챕터를 다시 살펴보시기 바랍니다.

- [컴포넌트](/vue/components.html)
- [컴포넌트 통신 방식](/vue/components-communication.html)
- [프롭스 속성](/vue/props.html)
- [이벤트 발생](/vue/event-emit.html)