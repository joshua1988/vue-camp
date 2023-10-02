---
title: Lifecycle API 🆕
---

# Lifecycle API

라이프사이클(Lifecycle) API란 컴포지션(Composition API) 안에서 사용된 [인스턴스 라이프사이클 훅](/vue/life-cycle.html#라이프-사이클-훅)을 의미합니다. 이 페이지에서는 컴포지션에서 인스턴스 라이프사이클 훅을 정의하는 방법을 알아보겠습니다.

:::tip 용어정리
- 인스턴스 라이프사이클 훅 : 컴포넌트 생명 주기에 따라 특정 로직을 실행할 수 있는 속성 함수. `created()`, `beforeMount()` 등
- 라이프사이클 API : 컴포지션 스타일로 작성된 인스턴스 라이프사이클 훅
:::

## 인스턴스 라이프사이클이란?

인스턴스 라이프사이클이란 뷰 인스턴스(컴포넌트) 생명주기를 의미합니다. 컴포넌트가 생성되고 소멸되기까지의 과정을 의미하는데요. 컴포넌트가 생성되었을 때 사용자의 입력 없이도 데이터를 표시할 수 있는 방법입니다.

인스턴스 라이프사이클은 created, beforeMount, mounted 등의 라이프사이클 훅으로 추가 로직을 실행할 수 있습니다. 아래 예시 코드를 보겠습니다.

```html
<template>
  <h1>인스턴스 라이프사이클 훅</h1>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello'
    }
  },
  created() {
    console.log(this.message);
  }
}
</script>
```

위 코드는 컴포넌트가 생성되자마자 `message` 데이터를 콘솔 창에 출력하는 코드입니다. `created` 라는 라이프사이클 훅을 사용했습니다. 이처럼 단순한 메시지 출력 이외에도 서버에서 데이터를 불러오거나 외부 라이브러리 등을 셋업하는 등의 추가 로직을 라이프사이클 훅에 정의할 수 있습니다.

## Lifecycle API 소개

라이프사이클 API는 컴포지션 스타일로 작성된 라이프사이클 훅을 의미합니다. 기존 라이프사이클 훅이 컴포넌트 안에서 다음과 같이 인스턴스 옵션 속성 형태로 작성된거에 반해 별도의 API를 임포트해서 사용해야 합니다.

```html
<script>
export default {
  // 인스턴스 옵션 속성 형태로 작성된 라이프사이클 훅
  created() {},
  beforeMount() {},
  mounted() {},
  destroyed() {}
}
</script>
```

이번엔 라이프사이클 API의 코드를 보겠습니다.

```html
<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    // data
    const message = ref('Hello');

    // lifecycle API
    onMounted(() => {
      console.log(message.value);
    });
  }
} 
</script>
```

위 코드는 `onMounted`라는 라이프사이클 API를 이용하여 컴포넌트가 마운트(부착)되었을 때 브라우저 콘솔 창에 `message` 데이터를 출력하는 코드입니다. `message`의 초기 값이 Hello로 선언되었기 때문에 Hello가 출력될 겁니다. 이처럼 라이프사이클 API는 `setup()` 함수 안에서 `onXX` 형태로 API를 임포트하여 정의합니다.

## 인스턴스 라이프사이클 훅과 Lifecycle API의 차이점

인스턴스 라이프사이클 훅과 라이프사이클 API는 생명주기가 살짝 다릅니다. 생명주기가 다르다라는 말은 사용할 수 있는 속성, API가 다르다라는 걸 의미합니다. 예를 들어, 인스턴스 라이프 사이클 훅은 아래와 같이 `created()` 속성을 사용할 수 있는 반면에 라이프사이클 API는 `onCreated()`와 같은 API를 사용할 수 없습니다.

```html
<script>
export default {
  // 인스턴스 라이프사이클 훅
  created() {}, // O
  
  // 라이프사이클 API
  setup() {
    onCreated(() => {}) // X - 이 API는 존재하지 않음
  }
}
</script>
```

위와 같은 차이가 발생하는 이유는 `setup()` 함수의 실행 시점 때문에 그렇습니다. `setup()` 함수가 실행되는 시점이 기존의 `beforeCreate()`, `created()`가 실행되는 시점과 비슷하기 때문에 아래와 같이 선언할 내용들은 모두 `setup()` 함수 내에 선언하면 됩니다.

```html
<script>
export default {
  beforeCreate() {
    console.log('API 호출 전');
  },
  created() {
    axios.get('users/1').then(res => console.log(res));
  },
}
</script>
```

```html
<script>
export default {
  setup() {
    console.log('API 호출 전');
    axios.get('users/1').then(res => console.log(res));
  }
}
</script>
```

이처럼 `onBeforeCreate`, `onCreate`가 없고 아래와 같이 API 이름의 변화가 있습니다.

| 인스턴스 라이프사이클 훅 | 라이프사이클 API | 비고 |
|----------------|---------------------|------|
| beforeCreate   | X                   | 대신 setup() 사용 |
| created        | X                   | 대신 setup() 사용 |
| beforeMount    | onBeforeMount       |      |
| mounted        | onMounted           |      |
| beforeUpdate   | onBeforeUpdate      |      |
| updated        | onUpdated           |      |
| beforeDestroy  | onBeforeUnmount     | destory 라는 표현이 unmount로 변경됨 |
| destroyed      | onUnmounted         | destory 라는 표현이 unmount로 변경됨 |
| errorCaptured  | onErrorCaptured     |      |

위 표를 보면 전반적으로 제공되는 API는 동일하지만 아래 3가지가 달라졌습니다.

- `beforeCreate`, `created` 대신에 `setup()` 을 사용
- `onXX` 형태로 이름이 바뀐 점
- `beforeDestory`, `destroyed` 등 destory 대신에 `onBeforeUnmount`, `onUnmounted`를 사용