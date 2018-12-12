---
title: Single File Components
---

# 싱글 파일 컴포넌트

싱글 파일 컴포넌트는 화면의 특정 영역에 대한 HTML, CSS, JS 코드를 한 파일에서 관리하는 방법입니다. 뷰 CLI로 프로젝트를 생성하고 나면 App.vue라는 파일을 확인할 수 있습니다. 이처럼 vue 확장자를 가진 파일을 모두 싱글 파일 컴포넌트라고 합니다.

코드를 살펴보겠습니다.

```html
<!-- .vue 파일 구조 -->
<template>
  <!-- html (뷰 컴포넌트의 표현단, 템플릿 문법) -->
</template>

<script>
  // 자바스크립트 (뷰 컴포넌트 내용)
</script>

<style>
  /* CSS (뷰 템플릿의 스타일링) */
</style>
```

## 싱글 파일 컴포넌트의 동작 원리

싱글 파일 컴포넌트는 뷰 로더에 의해 HTML, CSS, JS와 같은 웹 자원으로 분리되어 실행됩니다. [뷰 로더](https://vue-loader.vuejs.org/guide/)는 웹팩의 로더 종류 중 하나이고 뷰 CLI로 프로젝트를 생성하면 기본적으로 설정이 되어 있습니다.
