---
title: Vue Property Decorator
---

# Vue Property Decorator

앞에서 살펴본 뷰 클래스 컴포넌트([vue-class-component]((https://github.com/vuejs/vue-class-component))) 라이브러리 이외에도 타입스크립트로 뷰 컴포넌트를 작성할 때 유용한 라이브러리가 있습니다. 뷰 프로퍼티 데코레이터([Vue Property Decorator]((https://github.com/kaorun343/vue-property-decorator))) 라이브러리입니다.

:::tip
참고로 뷰 프로퍼티 데코레이터 라이브러리는 뷰 클래스 컴포넌트를 기반으로 제작되었습니다.
:::

## 맛보기 코드

Vue Property Decorator가 적용된 코드 예시입니다.

```html {9,14}
<!-- Child.vue -->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Child extends Vue {
  // '!'는 초기화 속성에 붙이는 prefix (타입스크립트에게 미리 알려주는 역할)
  @Prop() private msg!: string;
}
</script>
```

위 컴포넌트는 상위 컴포넌트에서 `msg`라는 props 속성을 내려 받은 하위 컴포넌트 코드입니다. 임포트한 Prop 데코레이터로 내려 받은 props 속성을 정의해주었습니다. 만약 프롭스 속성에 [Props Validation](https://vuejs.org/v2/guide/components-props.html#Prop-Validation)을 주고 싶다면 아래와 같이 정의하면 됩니다.

```js
@Prop(String) private msg!: string;
@Prop([String, Number]) private msg!: string;
@Prop({ default: 'hi' }) private msg!: string;
```