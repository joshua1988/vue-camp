---
title: Composition API
---

# 컴포지션 API

컴포지션(Composition API)은 컴포넌트 코드 재사용성을 높여주는 API입니다. Vue 2에서 [플러그인 형태로 지원](https://github.com/vuejs/composition-api)되다가 Vue 3부터 라이브러리 공식 API로 채택되었습니다.

:::tip
여기서 말하는 플러그인이란 [뷰 플러그인](https://joshua1988.github.io/vue-camp/reuse/plugins.html)을 의미합니다.
:::

## 컴포지션 API 기초

컴포지션을 이해하기 위해서 아래 간단한 코드를 보겠습니다.

```html
<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage">change</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hi'
    }
  },
  methods: {
    changeMessage() {
      this.message = 'Hello'
    }
  }
}
</script>
```

위 코드는 `message` 라는 데이터를 선언하고 `changeMessage` 라는 메서드로 메시지 값을 변경하는 간단한 코드입니다. 이 코드를 컴포지션으로 바꿔보겠습니다.

```html
<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage">change</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const message = ref('Hello');
    const changeMessage = () => {
      message.value = 'Hi';
    }

    return { message, changeMessage }
  }
}
</script>
```

이 코드는 뷰 인스턴스 옵션 속성으로 `setup` 이라는 속성을 선언하고 그 안에 `message`와 `changeMessage`라는 데이터와 메서드 함수를 선언한 코드입니다. 컴포지션은 이처럼 `setup` 이라는 API 안에 반응성(Vue Reactivity)을 주입할 데이터를 선언하고 해당 데이터를 제어하는 형태로 작성합니다. 위 코드를 실행한 결과는 같습니다. 그럼 하나씩 구체적으로 살펴볼까요?

## setup

`setup`은 컴포지션 스타일로 코드를 작성하기 위해 꼭 선언해 주어야 하는 옵션입니다. 컴포넌트 옵션 속성이기 때문에 아래와 같이 싱글 파일 컴포넌트나 뷰 인스턴스 안에 바로 선언할 수 있습니다.

```js
// 뷰 인스턴스
Vue.createApp({
  setup() {
    // ...
  }
});
```

```html
<!-- 싱글파일 컴포넌트 -->
<template>
  <!-- ... -->
</template>

<script>
export default {
  setup() {
    // ...
  }
}
</script>
```

## ref 소개

`ref`는 뷰의 반응성을 주입하는 API입니다. 기존에 `data` 속성에 선언했던 값들은 모두 뷰 인스턴스 라이프 사이클 과정에서 반응성이 주입되었습니다. 이 반응성 주입을 좀 더 명시적인 API로 바꾼 것이죠.

아래 두 코드는 같은 역할을 합니다.

```js
// 뷰 인스턴스 옵션 스타일
Vue.createApp({
  data() {
    return {
      message: ''
    }
  }
});
```

```js
// 뷰 컴포지션 스타일
import { ref } from 'vue';

createApp({
  setup() {
    const message = ref('');

    return { message }
  }
});
```

뷰 인스턴스 옵션 속성으로 제공되는 `data`를 쓸거냐 그렇지 않고 별도의 `ref` 라는 API를 임포트해서 `setup` 안에서 사용할거냐의 차이가 있습니다.

## ref 특징 1

`setup` 안에서 `ref`로 선언된 값은 항상 반환해 줘야 템플릿 표현식 또는 같은 인스턴스(컴포넌트) 내의 다른 로직에서 접근할 수 있습니다.

```js{7,11}
import { ref } from 'vue';

createApp({
  setup() {
    const message = ref('');

    return { message }
  },
  methods: {
    changeMessage() {
      this.message = 'Hello Compositon';
    }
  }
});
```

만약 아래와 같이 `setup` 함수에서 `ref`로 선언된 값을 반환하지 않는다면 컴포넌트에서 인식하지 못해 에러가 발생할 겁니다.

```js{9}
import { ref } from 'vue';

createApp({
  setup() {
    const message = ref('');
  },
  methods: {
    changeMessage() {
      this.message = 'Hello Compositon'; // `message`가 선언되지 않은 것으로 간주
    }
  }
});
```

## ref 특징 2


