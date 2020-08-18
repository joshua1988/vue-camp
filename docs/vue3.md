---
sidebar: auto
---

# Vue 3.0

새로 등장한 Vue.js Composition API(뷰 3.0)에 대해 알아보겠습니다.

## 기존의 문제점

- 복잡한 앱에서 코드 재사용 방법의 한계
  - HOC
  - 믹스인

## 가고자 하는 방향

- 인스턴스 **옵션 단위**가 아니라 특정 **기능이나 논리의 단위**로 코드를 그룹화 하는 것. 그리고 그 그룹화된 로직을 여러 컴포넌트에서 재사용하기

> most of us opt to organize files by feature or responsibility

- ss

##

---

## Note Taking 

- `ref`가 객체인 이유는 `number`, `string` 등의 원시 타입이 passed by value 이기 때문에 `computed` 내부 로직 흐름상 passed by reference인 `object` 모양이 필요했음

```js
// won't work
function computed(getter) {
  let value
  watchEffect(() => {
    value = getter()
  })
  return value
}
```

```js
// works like a charm
function computed(getter) {
  let ref = {
    value: null
  }
  watchEffect(() => {
    ref.value = getter()
  })
  return ref
}
```

## ref

기존 뷰 버전에서는 `ref`가 뷰 템플릿의 DOM 또는 컴포넌트를 가리키는 속성으로 사용되었습니다.
Vue 3에서는 `ref`가 `reactive reference`를 의미합니다.

Vue 3의 `ref`는 리액티브한 데이터를 가리킬 뿐만 아니라 템플릿 표현식도 함께 가리킵니다.

:::tip
TLDR
- `ref` means `reactive reference`
- 
:::

`reactive` 안에 `ref` 값을 사용하면 `.value`로 접근할 필요가 없다.

```js
// ref
import { ref, watch } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}

console.log(count.value) // 0

count.value++
console.log(count.value) // 1

// reactive
const state = reactive({
  count: 0,
  double: computed(() => state.count * 2)
})

// no need to use `state.double.value`
console.log(state.double)
```

## reactive와 ref의 차이점?

`reactive`는 기존 뷰 문법의 `data` 속성 느낌이고, `ref`는 좀 더 리액티브 속성을 개별적으로 선언하는 느낌.

```js
// reactive
const event = reactive({
  count: 3,
  doubled: computed(() => state.count * 2)
})

// ref
const count = ref(3)
const doubled = computed(() => count.value * 2)
```

## reactive가 더 선언하기 편한 것 같은데요?

선언하는 쪽 코드만 보면 그렇지만 실제로는 템플릿에서 아래와 같은 불편함이 발생한다.
`reactive`의 케이스를 보자.

```html
<!-- reactive -->
<div>count: {{ event.count }}</div>
<div>doubled: {{ event.doubled }}</div>
```

```js
// reactive
const event = reactive({
  count: 3,
  doubled: computed(() => state.count * 2)
})
```

의외로 `ref` 속성이 선언할 때 조금 불편하지만 템플릿에서는 접근하기가 편하다.

```html
<!-- ref -->
<div>count: {{ count }}</div>
<div>doubled: {{ doubled }}</div>
```

```js
// ref
const count = ref(3)
const doubled = computed(() => count.value * 2)
```

## 그래도 reactive가 좀 더 편할 것 같은데 어떻게 방법이 없을까요?

ES6의 디스트럭처링 문법을 생각해보면 왠지 아래와 같은 시도가 가능할 것 같다.

```html
<!-- reactive -->
<div>count: {{ event.count }}</div>
<div>doubled: {{ event.doubled }}</div>
```

```js
// reactive
function setup() {
  const event = reactive({
    count: 3,
    doubled: computed(() => state.count * 2)
  })

  // 정상 문법
  return { event }
}
```

기본적으로 `setup` API에서 반응성이 주입된 값(reactive 또는 ref)을 반환해줘야 하는데 이 때 뭔가 아래와 같이 해볼 수 있을 것 같다.

```html
<!-- reactive -->
<div>count: {{ count }}</div>
<div>doubled: {{ doubled }}</div>
```

```js
// reactive
function setup() {
  // ...
  return { ...event } // X
}
```

```js
// reactive
function setup() {
  // ...
  return { event.count, event. doubled } // X
}
```

위와 같은 형태로는 `reactive` 안에 선언된 속성들을 바로 템플릿에서 접근할 수가 없다.
이 때 사용할 수 있는게 `toRef` API다

```html
<!-- reactive -->
<div>count: {{ count }}</div>
<div>doubled: {{ doubled }}</div>
```

```js
import { toRefs } from 'vue';

// reactive
function setup() {
  // ...
  return { ...toRefs(event) } // O
  return toRefs(event); // O
}
```

## 모듈화 관련된 내용은 아래 링크 참고

- [modularizing](https://www.vuemastery.com/courses/vue-3-essentials/modularizing)

## 라이프 사이클 훅

1. 기존의 라이프 사이클 훅의 앞에 `on` 접두사가 붙는다.

- `beforeMount` -> `onBeforeMount`
- `mounted` -> `onMounted`

2. 이외에도 `beforeCreate`와 `created` 라이프 사이클이 제거됨
3. 새로 추가된 라이프 사이클 훅은 아래와 같다.

- `onRenderTracked` : 렌더 함수 안에 존재하는 리액티브 디펜던시가 최초로 접근되었을 때 호출된다. 디버깅에 유용한 훅
- `onRenderTriggered` : 렌더링이 새로 되었을 때 호출된다. 화면을 다시 그린 이유가 어떤건지 디버깅하기 좋다.

## watch

- nexttick은 `setup()` 코드가 실행된 이후에 실행할 코드를 의미.
- 새 버전에서는 다양한 문법이 존재하므로 아래 내용을 참고

[watch 문법 2분 20초대](https://www.vuemastery.com/courses/vue-3-essentials/watch)
