---
title: v-slot
---

# v-slot

Vue 2.6.0에서 `v-slot` 디렉티브가 새롭게 소개되었습니다. `v-slot`은  네임드 슬롯(Named Slots)과 스콥드 슬롯(Scoped Slot) 사용을 통합한 새로운 디렉티브 입니다. 기존의 스콥드 슬롯(Scoped Slot) 표현은 Vue 3.0 에서 사라집니다.

이전 버전에서 스콥드 슬롯이 가지고 있었던 문제점과 함께 `v-slot` 디렉티브가 어떻게 그 문제점을 해결했는지 살펴봅시다.

## 스콥드 슬롯의 문제점

Vue.js에서 슬롯을 사용하는 이유는 재사용성이 높은 컴포넌트를 설계하기 쉽기 때문입니다. 함수형 프로그래밍에서 함수를 작성할 때 [단일 책임 원칙(Single Responsibility Principle)](https://en.wikipedia.org/wiki/Single_responsibility_principle)을 지켜주면 좋은 것처럼 Vue.js 컴포넌트를 설계할 때에도 하나의 컴포넌트가 하나의 역할을 할 수 있도록 설계하는 것이 좋습니다.

[스콥드 슬롯](/reuse/scoped-slot.html)**은 슬롯을 사용할 때, 하위 컴포넌트의 값을 상위 컴포넌트에서 참조**할 수 있게 합니다. 상위 컴포넌트의 데이터를 하위 컴포넌트 슬롯으로 바인딩 해주는 것이 자연스러워 보이지만, 하위 컴포넌트가 단일 책임을 지기 위해 데이터를 가지고 있어야 합니다. 그리고 데이터를 상위에서 참조해야 할 때가 있습니다. 그때 사용하는 것이 스콥드 슬롯입니다.

하지만, Vue.js에서 스콥드 슬롯을 소개했을 때, `slot-scope`속성을 추가한  `<template>`태그를 사용해 구문이 길어지는 문제가 있었습니다.

```html {4}
<!-- 하위 컴포넌트(Foo.vue) -->
<template>
  <div>
    <slot :fooProps="fooProps"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fooProps: {
        id: 1,
        msg: 'Hello',
      } 
    }
  }
}
</script>
```

```html {4,6}
<!-- 상위 컴포넌트 -->
<template>
  <foo>
    <template slot-scope="fooProps">
      <div>{{ fooProps }}</div>
    </template>
  </foo>
</template>

<script>
import Foo from './Foo.vue';

export default {
  components: {
    Foo
  }
}
</script>
```

스콥드 슬롯을 사용하기 위해서 `<template>`태그를 항상 사용해야 했기 때문에 Vue 2.5에서는 스콥드 슬롯을 `<template>`태그 대신, 표현하고자 하는 태그에 직접 작성할 수 있도록 변경되었습니다.

```html {2}
<foo>
  <div slot-scope="fooProps">{{ fooProps }}</div>
</foo>
```

여기서 눈여겨봐야 할 부분은 하위 컴포넌트인 `<foo>`태그의 프롭스 속성이 상위 컴포넌트의 `<div>`태그로 전달되었다는 점입니다. 

또한, HTML의 기본 태그뿐 아니라 컴포넌트 태그에서도 스콥드 슬롯을 표현할 수 있습니다.

```html {2}
<foo>
  <bar slot-scope="fooProps">{{ fooProps }}</bar>
</foo>
```

하지만 위와 같이 사용했을 때, 컴포넌트의 복잡성이 늘어나면 어떤 컴포넌트의 `slot-scope`변수를 사용하는지 명확하지 않다는 문제점이 발생합니다.

```html
<foo>
  <bar slot-scope="fooProps">
    <baz slot-scope="barProps">
      <div slot-scope="bazProps">
        {{ fooProp }} {{ barProp }} {{ bazProp }}
      </div>
    </baz>
  </bar>
</foo>
```

자식 컴포넌트인 `<foo>`태그가 스콥드 슬롯을 사용하기 위해 `<bar>`태그에 `slot-scope`를 사용했고, 이어서 `<bar>`태그는 이어서 `<baz>`태그에 사용했습니다. 이렇게 중첩된 컴포넌트에서 스콥드 슬롯을 사용하게 되면 어떤 컴포넌트가 어떤 props을 올려주고 있는지 명확하지 않게 됩니다.

즉 2.5 버전에서 스콥드 슬롯을 사용할 때 `slot-scope`속성을 `<template>`태그에만 사용하는 것이 아니라, 기존 태그에 사용할 수 있도록 허용한 것이 문제가 되었습니다. 따라서, `v-slot`디렉티브가 등장하게 되었습니다.

:::tip
Vue 3.0에서는 `slot-scope`문법이 제거되었기 때문에, Vue 3.0에서 `slot-scope`를 사용하면 eslint가 `v-slot`으로 변환해 줍니다. (Vue CLI를 이용해 Vue 3.0을 설치했다고 가정합니다.)
:::

## v-slot 기본 사용 방법

`v-slot`은 슬롯에 name 속성을 지정하여 여러 개 사용할 수 있도록 하는 [네임드 슬롯(Named Slots)](/reuse/slots.html#named-slots)과 스콥드 슬롯을 한 번에 표현할 수 있습니다.

### 네임드 슬롯 표현

```html
<!-- 하위 컴포넌트(Foo.vue) -->
<div>
  <!-- 헤더 영역 -->
  <slot name="header"></slot>
  <!-- 본문 영역 -->
  <slot></slot>
  <!-- 푸터 영역 -->
  <slot name="footer"></slot>
</div>
```

```html {4,9,14}
<!-- 상위 컴포넌트 -->
<foo>
  <!-- 헤더 영역 -->
  <template v-slot:header>
    <h1>Header</h1>
  </template>

  <!-- 본문 영역 -->
  <template v-slot:default>
    <div>Body</div>
  </template>

  <!-- 푸터 영역 -->
  <template v-slot:footer>
    <div>Footer</div>
  </template>
</foo>
```

:::tip
`v-slot:default`는 슬롯에 name 속성을 붙이지 않은 영역에 표현됩니다.
:::

렌더링 된 HTML은 아래와 같습니다.

```html
<div>
  <h1>Header</h1>
  <div>Body</div>
  <div>Footer</div>
</div>
```

### 스콥드 슬롯 표현

```html {3}
<!-- 하위 컴포넌트(Foo.vue) -->
<template>
  <slot :msg="msg"></slot>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello!',
    };
  },
};
</script>
```

```html {3,4,5}
<!-- 상위 컴포넌트 -->
<foo>
  <template v-slot:default="slotProps">
    <h1>{{ slotProps.msg }}</h1>  <!-- <h1>Hello!</h1> -->
  </template>
</foo>
```

## v-slot의 이점

`<template>` 태그를 사용함으로써 장황해지는 표현을 간략하게 할 수 있으며, 덕분에 가독성 또한 좋아집니다.

```html
<!-- old -->
<foo>
  <template slot-scope="{ msg }">
    {{ msg }}
  </template>
</foo>
```

```html
<!-- new -->
<foo v-slot="{ msg }">{{ msg }}</foo>
```

어떤 컴포넌트의 스콥드 슬롯인지 명확하게 표현됩니다.

```html
<!-- old -->
<foo>
  <bar slot-scope="foo">
    <baz slot-scope="bar">
      <div slot-scope="baz">
        {{ foo }} {{ bar }} {{ baz }}
      </div>
    </baz>
  </bar>
</foo>
```

```html
<!-- new -->
<foo v-slot="foo">
  <bar v-slot="bar">
    <baz v-slot="baz">
      {{ foo }} {{ bar }} {{ baz }}
    </baz>
  </bar>
</foo>
```

## v-slot 응용 표현 방식

### 축약 표현

스콥드 슬롯은 `v-slot`뒤에 props를 작성해 주면 하위 태그에서 사용할 수 있게 됩니다. 앞서 Vue 2.5에서 문제가 되었던 `<template>`태그를 다시 사용해야 한다는 단점이 생길 수 있습니다. 하지만, 여러 개의 슬롯을 사용하지 않고 default 슬롯만 사용한다면 아래와 같이 컴포넌트 자체에 `v-slot`속성을 지정해 사용할 수 있습니다.

```html {1}
<foo v-slot:default="slotProps">
  <h1>{{ slotProps.msg }}</h1>
</foo>
```

:::warning
하지만 슬롯이 여러 개일 경우는 반드시 `<template>`태그를 사용해 컴포넌트 하위에 표현해 주어야 합니다. 
:::

또한 `v-slot:default`는 `v-slot`으로 축약하여 표현할 수 있습니다.

```html {1}
<foo v-slot="slotProps">
  <h1>{{ slotProps.msg }}</h1>
</foo>
```

단, 컴포넌트 자체에 `v-slot`을 사용하고, 하위에 이름을 가진 `v-slot`을 사용할 수는 없습니다.  스콥드 슬롯의 변수 범위가 모호해지기 때문입니다. 아래의 예시  코드는 `default` 슬롯이 `foo` 컴포넌트에 선언되었고, 하위에 `other` 이름을 가진 슬롯이 존재합니다.

```html {2,4}
<!-- v-slot:other이 있기 때문에 오류 발생 -->
<foo v-slot="slotProps">
  {{ slotProps.msg }}
  <template v-slot:other="otherSlotProps">
    <!-- 이곳에 slotProps를 적용할 수 없음. -->
  </template>
</foo>
```

위 코드가 동작하려면 `<template>` 태그로 명확한 범위를 지정해 주어야 합니다. 그리고, default name을 가진 `v-slot` 축약 문법은 `<template>`태그로 명확한 범위를 지정해 준다면, 이름을 가진 슬롯(`<v-slot:other>`등)과 혼용해서 사용할 수 있습니다.

```html {2,5}
<foo>
  <template v-slot="slotProps">
    {{ slotProps.msg }}
  </template>
  <template v-slot:other="otherSlotProps">
    {{ otherSlotProps.something }}
  </template>
</foo>
```

#### 특수 기호 표현

`v-slot`은 `v-bind(:)`, `v-on(@)`과 같이 특수 기호를 통해 나타낼 수 있습니다. 특수 기호는 `#`입니다. 예를 들어 `v-slot:default`는 `#default`로 표현될 수 있습니다.

```html {1}
<foo #default="slotProps">
  <h1>{{ slotProps.msg }}</h1>
</foo>
```

단, `#="slotProps"`구문은 불가능합니다. 특수 기호로 표현하고 싶다면, `#default="slotProps"`와 같이 반드시 슬롯 이름을 지정해 주어야 합니다.

### Destructuring 표현

스콥드 슬롯의 변수에 ES6 문법인, [구조 분해 문법(Destructuring)](/es6/destructuring.html) 표현도 가능합니다.

```html {1}
<foo v-slot="{ msg }">
  <h1>{{ msg }}</h1>
</foo>
```

### Dynamic Slot Names 표현

슬롯 name을 동적으로 표현할 수 있습니다.

```html
<foo>
  <template v-slot:[dynamicSlotName]>
    ...
  </template>
</foo>
```

:::warning
스콥드 슬롯의 `slot-scope` 표현은 Vue 3.0 이하의 버전에서는 계속 사용할 수 있습니다. 단 Vue 3.0 이상 버전에서 삭제되었으므로 Vue 2.6 이상을 사용하고 있다면, `v-slot`디렉티브를 통해 슬롯을 사용하도록 권장합니다.
:::