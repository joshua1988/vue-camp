---
title: High Order Components
---

# 컴포넌트의 코드마저 재사용하는 하이 오더 컴포넌트

## 정의

뷰의 하이 오더 컴포넌트는 리액트의 하이 오더 컴포넌트에서 기원된 것입니다. 리액트의 [하이 오더 컴포넌트 소개 페이지](https://reactjs.org/docs/higher-order-components.html)를 보면 아래와 같이 정확한 정의가 나와 있습니다. *A higher-order component (HOC) is an advanced technique in React for reusing component logic*. 이 말을 정리해보면 다음과 같습니다.

하이 오더 컴포넌트는 **컴포넌트의 로직(코드)을 재사용하기 위한 고급 기술**입니다

## 반복되는 컴포넌트 로직

여기서 컴포넌트의 로직을 재사용한다는 말이 무슨 의미일까요? 이 표현에서 가리키고 있는 컴포넌트 로직이란 뷰에서 **인스턴스 옵션을 의미**합니다. 코드로 바로 살펴보겠습니다.

```html
<!-- ProductList.vue -->
<template>
  <section>
    <ul>
      <li v-for="product in products">
        ...
      </li>
    </ul>
  </section>
</template>

<script>
import bus from './bus.js';

export default {
  name: 'ProductList',
  mounted() {
    bus.$emit('off:loading');
  },
  // ...
}
</script>
```

```html
<!-- UserList.vue -->
<template>
  <div>
    <div v-for="product in products">
      ...
    </div>
  </div>
</template>

<script>
import bus from './bus.js';

export default {
  name: 'UserList',
  mounted() {
    bus.$emit('off:loading');
  },
  // ...
}
</script>
```

위 코드는 ProductList 라는 컴포넌트와 UserList 컴포넌트의 로직을 정의한 코드입니다. 두 컴포넌트가 각각 상품과 사용자 정보를 서버에서 받아와 표시해주는 컴포넌트라고 가정했을 때, 공통적으로 들어가는 코드는 다음과 같습니다.

```js
name: '컴포넌트 이름',
mounted() {
  bus.$emit('off:loading');
},
```

`name`은 컴포넌트의 이름을 정의해주는 속성이고, `mounted()`에서 사용한 이벤트 버스는 서버에서 데이터를 다 받아왔을 때 스피너나 프로그레스 바와 같은 로딩 상태를 완료해주는 코드입니다. 이 두 컴포넌트 이외에도 서버에서 데이터 목록을 받아와 표시해주는 컴포넌트가 있다면 또 비슷한 로직이 반복될 것입니다.

**이 때 이 반복되는 코드를 줄여줄 수 있는 패턴이 바로 하이 오더 컴포넌트입니다.**

## 하이 오더 컴포넌트로 반복 코드 줄이기

이 반복되는 코드를 줄이기 위해 하이 오더 컴포넌트를 구현해보겠습니다.

```js
// CreateListComponent.js
import bus from './bus.js'
import ListComponent from './ListComponent.vue';

export default function createListComponent(componentName) {
  return {
    name: componentName,
    mounted() {
      bus.$emit('off:loading');
    },
    render(h) {
      return h(ListComponent);
    }
  }
}
```

위 코드는 CreateListComponent라는 하이 오더 컴포넌트를 구현한 코드입니다. 하이 오더 컴포넌트를 적용할 컴포넌트들의 공통 코드들(mounted, name 등)을 미리 정의했습니다. 그럼 이제 이 하이 오더 컴포넌트를 어떻게 사용할까요? 아래를 보겠습니다.

```js
// router.js
import createListComponent from './createListComponent.js';

new VueRouter({
  routes: [
    {
      path: 'products',
      component: createListComponent('ProductList')
    },
    {
      path: 'users',
      component: createListComponent('UserList')
    },
    ...
  ]
})
```

위와 같은 방식으로 하이 오더 컴포넌트를 임포트 하고, 각 컴포넌트의 이름만 정의를 해주면 컴포넌트의 기본 공용 로직인 `mounted()`, `name`를 가지고 컴포넌트가 생성됩니다. 따라서, 컴포넌트마다 불 필요하게 반복되는 코드를 정의하지 않아도 됩니다.