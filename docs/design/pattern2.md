---
title: Building Controlled Components
---

# 결합력 높은 컴포넌트

두 번째 컴포넌트 디자인 패턴의 핵심은 v-model 디렉티브입니다. v-model의 내부가 어떻게 동작하는지 이해하고 이를 응용하여 좀 더 결합력이 높은 컴포넌트를 만들어보겠습니다.

## v-model 디렉티브

v-model 디렉티브는 양방향 데이터 바인딩을 지원하는 속성입니다. 양방향 데이터 바인딩이란 화면의 데이터와 뷰 인스턴스의 데이터가 항상 일치하는 것을 의미합니다. 코드를 보겠습니다.

```html
<template>
  <input type="text" v-model="inputText">
</template>

<script>
export default {
  data() {
    return {
      inputText: 'hi'
    }
  }
}
</script>
```

위 코드를 실행하면 인풋 박스의 초기 값으로 'hi'가 지정되어 있습니다. 그리고 인풋 박스의 내용을 바꾸면 inputText의 값도 같이 바뀝니다. 해당 내용은 뷰 개발자 도구에서 확인할 수 있습니다.

## v-model 디렉티브의 동작 방식

그럼 위에서 v-model 디렉티브가 어떻게 뷰 인스턴스의 데이터와 정보를 주고 받았을까요? v-model 디렉티브의 내부는 아래와 같은 구조로 동작합니다.

```html
<template>
  <input type="text" :value="inputText" @input="inputText = $event.target.value">
</template>

<script>
export default {
  data() {
    return {
      inputText: 'hi'
    }
  }
}
</script>
```

`inputText`의 값을 `:value`에 연결하고 인풋 박스의 입력을 모두 `$event.target.value`로 `inputText`에 넣습니다. 위의 코드는 v-model 디렉티브와 동일하게 동작합니다.

::: tip
위와 같은 코드는 커스텀 디렉티브를 작성할 때 많이 사용됩니다.
:::

## v-model로 체크 박스 컴포넌트 만들기

앞에서 살펴본 v-model로 HTML 인풋 체크 박스를 컴포넌트화 해보겠습니다. 먼저 상위 컴포넌트인 App.vue의 코드입니다.

```html
<!-- App.vue -->
<template>
  <check-box v-model="checked"></check-box>
</template>

<script>
import CheckBox from './CheckBox.vue';

export default {
  components: {
    CheckBox
  },
  data() {
    return {
      checked: false,
    }
  }
}
</script>
```

이어서 하위 컴포넌트로 등록된 CheckBox.vue의 코드를 보겠습니다.

```html
<!-- CheckBox.vue -->
<template>
  <input type="checkbox" :value="value" @click="toggle">
</template>

<script>
export default {
  props: ['value'],
  methods: {
    toggle() {
      this.$emit('input', !this.value);
    }
  }
}
</script>
```

위 코드를 실행하여 체크 박스를 클릭하면 `checked` 값이 정상적으로 true에서 false로 전환되는 것을 확인할 수 있습니다.