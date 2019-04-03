---
title: Scoped Slot
---

# 스콥드 슬롯

슬롯(slot)이 컴포넌트 템플릿의 재사용성을 늘려주기 위한 기능이라면 스콥드 슬롯(Scoped slot)은 컴포넌트 데이터의 재사용성을 높여주는 기능입니다. 일반적으로 뷰에서는 프롭스 속성이나 이벤트 발생과 같은 컴포넌트 통신 방식을 제외하고는 다른 컴포넌트의 값을 참조할 수 없습니다. **하지만 스콥드 슬롯은 하위 컴포넌트의 값을 상위 컴포넌트에서 접근하여 사용할 수 있습니다.**

## 스콥드 슬롯 코드 형식

스콥드 슬롯을 사용하기 위해서는 기본적으로 상위, 하위 2개의 컴포넌트가 필요하고 각각의 컴포넌트에 아래와 같이 구현해야합니다.

```html
<!-- 하위 컴포넌트의 슬롯 태그 -->
<slot :상위 컴포넌트로 전달할 속성 이름="하위 컴포넌트의 데이터"></slot>
```

먼저 하위 컴포넌트에서 `<slot>` 태그를 정의하고 `v-bind` 디렉티브의 약식 문법인 `:`를 이용하여 하위 컴포넌트의 데이터를 연결합니다. 컴포넌트 통신 방법에서 배운 프롭스 속성 전달 방법과 비슷한 형식입니다.

이제 상위 컴포넌트의 코드를 보겠습니다.

```html
<!-- 상위 컴포넌트에 등록된 하위 컴포넌트 태그 부분 -->
<child-component>
  <template slot-scope="임의의 변수">
    {{ 임의의 변수.상위 컴포넌트로 전달할 속성 이름 }}
  </template>
</child-component>
```

하위 컴포넌트인 `<child-component>` 태그에 집중합니다. 위에서 `<slot>` 태그를 미리 정의해놨기 때문에 `<child-component>` 태그 사이에 들어가는 코드는 모두 슬롯으로 처리가 됩니다. 여기서 `slot-scope`라는 속성으로 하위 컴포넌트에서 올려보내준 데이터를 전달받을 수 있습니다.

::: tip
`slot-scope` 속성이 정의된 `<template>` 태그는 실제 DOM이 아니라 속성을 전달받기 위한 껍데기일 뿐입니다. 실제로 화면 렌더링이 되고 나면 `<template>` 태그는 가시적인 태그로 변환되지 않습니다.
:::

아직 안 와닿으실 수 있으니 실제 예제를 같이 살펴보겠습니다.

## 스콥드 슬롯 코드 예제

앞에서 살펴본 코드 형식을 참고하여 간단한 예제를 제작하였습니다. 상위 컴포넌트는 App.vue이고 하위 컴포넌트는 ChildComponent.vue 입니다.

하위 컴포넌트의 코드부터 보겠습니다.

```html {5}
<!-- ChildComponent.vue -->
<template>
  <div>
    <h1>Child Component</h1>
    <slot :message="message"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello'
    }
  },
}
</script>
```

하위 컴포넌트에 `<slot>` 태그를 정의하고 v-bind 디렉티브(`:`)를 이용하여 `message` 속성을 전달하였습니다.

이번엔 상위 컴포넌트의 코드를 살펴보겠습니다.

```html {5,6,7}
<!-- App.vue -->
<template>
  <div>
    <child-component>
      <template slot-scope="scopeProps">
        {{ scopeProps.message }}
      </template>
    </child-component>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent
  }
}
</script>
```

하위 컴포넌트인 `<child-component>` 태그의 슬롯 영역에 `slot-scope` 속성을 정의하였습니다. 여기서 사용한 변수 `scopeProps`는 하위 컴포넌트에서 올려준 값을 받기 위한 임의의 변수입니다. 임의의 변수이기 때문에 원하는 변수 명을 지정하여 사용할 수 있습니다. `scopeProps`에는 하위 컴포넌트에서 올려준 값 `message`이 들어있습니다.

위의 코드를 실행하면 결론적으로 `<h1>` 제목 태그와 함께 하위 컴포넌트의 `message` 값인 Hello가 화면에 출력됩니다.

:::tip
뷰 버전 2.6에서 슬롯의 문법이 `v-slot` 디렉티브로 바뀐 이유는 스콥스 슬롯의 변수 접근 범위 때문입니다.
일반 HTML 태그에서 스콥드 슬롯을 적용하면 이해하는데 크게 문제가 없으나 컴포넌트 태그에 스콥드 슬롯을 적용하는 경우 변수의 접근 범위에 대해 혼란이 있을 수 있습니다.
따라서, 기존 레거시 코드와 겹치지 않게 `v-slot` 및 `#`으로 개편하였습니다.

자세한 내용은 [여기](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0001-new-slot-syntax.md)를 참고하세요.
:::