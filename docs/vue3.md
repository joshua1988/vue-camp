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

## composition API의 장점

- 
- `ref`, `reactive` API로 생성한 reactive 데이터들은 템플릿에만 꼭 쓰지 않아도 되는 장점이 생긴다. 컴포넌트와 별개로 사용할 수 있는 반응성 데이터를 생성할 수 있음.
- 컴포넌트 옵션 속성이 존재하기 전에 `setup` API가 실행되므로 `this`로 컴포넌트를 접근할 수 없다. 대신 `context` 사용. (마치 기존의 functional component를 변형해서 사용하는 느낌)
- `setup` API의 두 번째 인자에 제공되는 옵션들

```js
setup(props, context) {
  context.attrs
  context.slots
  context.parent
  context.root
  context.emit
}
```

## composition API에 대한 생각

- API 함수로 불러온 데이터를 컴포넌트 `data`에 연결하기 전에 가공할 일이 많은데 이를 컴포지션 API 함수 레이어에 넣으면 좋을 것 같다는 생각이 듦. 이를 서비스 레이어라고 치면 기존에는 스토어라든가 믹스인에 분산시키거나 앵귤러처럼 서비스 파일을 만드는 경향이 있는 듯.

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
  doubled: computed(() => event.count * 2)
})

// ref
const count = ref(3)
const doubled = computed(() => count.value * 2)
```

- 두개 다 어차피 `event.count`로 접근하나 `count.value`로 접근하나 속성으로 한단계 더 들어가서 접근해야 하는건 같다.

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

## 라이프 사이클 훅

`setup` API에서 기존 라이프 사이클 개념과 훅은 대부분 유지가 되었고 아래 4가지의 변화만 있다.

1. `beforeCreate`, `created`는 `setup` 함수 안에서의 로직 실행으로 동일한 효과를 발휘하기 때문에 제거됨
2. `beforeDestroy`, `destroyed`는 더 명시적인 이름으로 변경 -> `beforeUnmount`, `unmounted`
3. `onRenderTracked` : 화면을 다시 그리기 위한 리액티브 디펜던시(반응성이 주입된 데이터 변화 정도로 이해)가 처음으로 감지되었을 때. 디버깅 용도 
4. `onRenderTriggered` : 첫 번째 렌더링이 일어났을 때. 어떤 이유로 화면이 다시 그려진건지 디버깅하기 위한 용도.

문법은 아래와 같이 변경되었다.

```js
// 기존
new Vue({
  created() {
    
  },
  beforeMount() {

  }
})

// setup
setup() {
  onBeforeMount(() => {
    console.log("Before Mount!");
  });
  onMounted(() => {
    console.log("Mounted!");
  });
}
```

**Vue 3 컴포지션 API 비디오 8 ~ 11까지 보기**

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

## 참고 자료 

- [괜찮은 setup 예제 - Auth0](https://auth0.com/blog/vue-composition-api-tutorial/)