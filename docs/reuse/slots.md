---
title: Slots
---

# 슬롯

슬롯(slot)은 컴포넌트의 재사용성을 높여주는 기능입니다. 특정 컴포넌트에 등록한 하위 컴포넌트의 마크업을 확장하거나 재정의할 수 있습니다.

## 슬롯 코드 형식

슬롯의 문법을 바로 코드로 살펴보겠습니다.

```html {5}
<!-- ButtonTab.vue -->
<template>
  <div class="tab panel">
    <!-- 탭 헤더 -->
    <slot></slot>
    <!-- 탭 본문 -->
    <div class="content">
      Tab Contents
    </div>
  </div>
</template>
```

위 코드는 ButtonTab 컴포넌트의 코드입니다. 탭을 구현한다고 생각하고 탭 헤더와 본문을 구분하는 태그를 작성하였습니다. 여기서 탭 헤더에 들어갈 구체적인 태그를 정하지 않고 일단 `<slot>` 태그로 빈 칸을 남겨놉니다. 만약 이 컴포넌트를 등록한 상위 컴포넌트에서 `<slot>` 태그 영역을 구현하지 않으면 해당 부분은 공백으로 표시됩니다. 

`<slot>` 태그의 위치에 주목하면서 ButtonTab 컴포넌트를 TabContainer 컴포넌트의 하위 컴포넌트로 등록합니다.

```html {5,9,13}
<!-- TabContainer.vue -->
<template>
  <button-tab>
    <!-- slot 영역 -->
    <h1>First Header</h1>
  </button-tab>
  <button-tab>
    <!-- slot 영역 -->
    <h1>Second Header</h1>
  </button-tab>
  <button-tab>
    <!-- slot 영역 -->
    <h1>Third Header</h1>
  </button-tab>
</template>

<script>
export default {
  components: {
    ButtonTab
  }
}
</script>
```

TabContainer 컴포넌트에 ButtonTab 컴포넌트를 등록하고 ButtonTab 컴포넌트를 세 곳에 표시했습니다. 여기서 `<button-tab>` 컴포넌트 태그의 안에 각기 다른 헤더의 내용을 정의했습니다. 만약 ButtonTab 컴포넌트에 `<slot>` 태그를 정의하지 않았다면 컴포넌트를 등록하는 시점에 마크업을 재정의할 수는 없었을 것입니다.

이처럼 슬롯을 사용하면 컴포넌트의 특정 마크업 영역을 재정의하여 같은 컴포넌트를 각기 다르게 표현할 수 있습니다.

## Named Slots

위에서는 슬롯의 개념을 이해하기 위해 1개의 슬롯만 사용했습니다. 슬롯은 name 속성을 지정하여 여러 개 사용할 수도 있습니다. 좀 전 예제에 네임드 슬롯을 적용해보겠습니다.

```html {5,7}
<!-- ButtonTab.vue -->
<template>
  <div class="tab panel">
    <!-- 탭 헤더 -->
    <slot name="header"></slot>
    <!-- 탭 본문 -->
    <slot name="content"></slot>
  </div>
</template>
```

```html {5,6,10,11,15,16}
<!-- TabContainer.vue -->
<template>
  <button-tab>
    <!-- slot 영역 -->
    <h1 slot="header">First Header</h1>
    <div slot="content" class="content">Tab Contents #1</div>
  </button-tab>
  <button-tab>
    <!-- slot 영역 -->
    <h1 slot="header">Second Header</h1>
    <div slot="content" class="content">Tab Contents #2</div>
  </button-tab>
  <button-tab>
    <!-- slot 영역 -->
    <h1 slot="header">Third Header</h1>
    <div slot="content" class="content">Tab Contents #3</div>
  </button-tab>
</template>
..
```

하위 컴포넌트에서 정의한 슬롯 태그 영역에 마크업을 재정의할 때 위와 같이 HTML 표준 태그를 사용하는 방법도 있지만 아래와 같이 `<template>` 태그를 사용할 수도 있습니다.

```html {3,6}
<button-tab>
  <!-- slot 영역 -->
  <template slot="header">
    <h1>First Header</h1>
  </template>
  <template slot="content">
    <div class="content">Tab Contents #1</div>
  </template>
</button-tab>
```

## 참고

Vue.js 2.6 버전부터 Named Slots 문법이 바뀌었습니다.

```html {2,7}
<!-- 기존(2.5 이하) -->
<template slot="header">
  <h1>First Header</h1>
</template>

<!-- 이후(2.6 이상) -->
<template v:slot:header>
  <h1>First Header</h1>
</template>
```

더 자세한 내용은 [여기](https://vuejs.org/v2/guide/components-slots.html#Named-Slots)를 참고하세요.