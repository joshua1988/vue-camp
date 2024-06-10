---
title: Data Fetching 🆕
---

# Nuxt 3의 데이터 호출 방법

기존 Nuxt에서는 [asyncData 속성](../nuxt/data-fetching#asyncdata)과 [fetch 속성](../nuxt/data-fetching#fetch)으로 데이터를 호출했습니다. Nuxt 3에서는 컴포지션 문법 형태인 `useAsyncData()`와 `useFetch()`를 사용합니다.

## useAsyncData

useAsyncData는 기존 asyncData 속성과 동일하게 페이지를 그리기 전에 데이터를 받아오기 위해 사용되는 데이터 호출 메서드입니다. 기존 asyncData와의 차이점은 컴포지션 문법으로 바뀐 점과 [ofetch]()라는 HTTP 라이브러리를 기본적으로 사용할 수 있게 제공되는 
점입니다.

## useAsyncData 기본 문법

기본 문법을 보겠습니다.

```html
<!-- pages/user.vue -->
<script setup>
const { data, error } = await useAsyncData('user', () => $fetch('users/1'))
</script>
```

공식 문서에서 안내된 방식으로 생성된 Nuxt 3 프로젝트에서는 `useAsyncData()`와 같은 API를 별도로 임포트 할 필요가 없습니다. 위와 같이 뷰 컴포넌트의 `script` 태그에 `setup`을 추가하고 바로 `useAsyncData()`를 사용하면 됩니다.

`useAsyncData()`의 첫 번째 인자 `user`는 바로 API 응답을 캐싱하기 위한 식별자입니다. 두 번째 인자에서 `$fetch`는 Nuxt 팀에서 자체 개발한 HTTP 라이브러리인 ofetch 라이브러리입니다. 만약 axios와 같은 별도의 HTTP 라이브러리를 사용하지 않는다면 기본적으로 제공되는 ofetch를 사용해도 됩니다.

:::tip
`$fetch`는 Nuxt 프로젝트 안에 있는 뷰 컴포넌트에서 전역 레벨로 접근할 수 있게 구성되어 있습니다. 별도로 임포트하거나 선언하지 않아도 접근할 수 있습니다.
:::

:::tip
`<script setup>`은 뷰 컴포넌트에서 컴포지션 API 문법을 쉽게 작성할 수 있는 문법입니다. 자세한 내용은 [script setup 문서](../composition/script-setup)를 참고해 보세요.
:::

## useAsyncData 커스텀 문법 - 외부 HTTP 라이브러리 연동

만약 axios와 같은 대중적인 HTTP 라이브러리를 연결하고 싶다면 다음과 같이 코드를 작성합니다.

```html
<!-- pages/user.vue -->
<script setup>
import {fetchUsers} from '../api/index.js'

const { data, error } = await useAsyncData(() => fetchUsers().then(response => response.data))
</script>
```

useAsyncData() API 첫 번째 인자에 익명 함수를 하나 선언하고 반환 값으로 axios로 작성해 둔 API 함수를 연결합니다. 이렇게 외부 HTTP 라이브러리를 연결해서 사용할 수 있습니다. 참고로, 첫 번째 인자로 별도의 키 값을 정의하지 않았는데요. 키 값은 정의하지 않더라도 코드가 선언된 파일과 위치를 기준으로 자동 생성됩니다. 그래도 코드가 더 복잡해 질 경우를 대비해 다음과 같이 키를 지정해 주는게 좋습니다.

```html
<!-- pages/user.vue -->
<script setup>
import {fetchUsers} from '../api/index.js'

const { data, error } = await useAsyncData('user', () => fetchUsers().then(response => response.data))
</script>
```

## useFetch

useFetch는 useAsyncData와 $fetch를 쉽게 사용할 수 있게 만든 래핑 코드입니다. 래핑 코드란 이미 있는 코드를 한번 더 감싼 코드를 의미하는데요. 아래 코드로 이해해 보겠습니다.

```html
<script setup>
// 1. useFetch를 사용한 코드
const { data } = await useFetch('users/1');

// 2. useAsyncData를 사용한 코드
const { data } = await useAsyncData(() => $fetch('users/1'))
</script>
```

위 2개 코드는 같은 동작을 하는 코드입니다. 단순히 `useAsyncData`와 `$fetch`를 매번 선언하지 않고도 편하게 쓸 수 있게끔 `useFetch`라는 API로 코드를 감싼거죠. 이런식으로 보통 코드가 너저분해지는 걸 방지하기 위해 별도의 함수로 감싸서 추상화 하는 경우들이 있습니다.

## useFetch 장단점

useFetch를 사용했을 때 편리한 점은 코드를 더 간결하게 작성할 수 있다는 점입니다. useAsyncData를 선언할 때 지정해 주어야 하는 유니크한 식별자(키 값)도 생략할 수 있습니다. 하지만, axios와 같은 외부 HTTP 라이브러리 연동은 하기 어렵습니다. 이런 차이점을 이해한 상태에서 적절한 API를 고르는 걸 추천드립니다.

## useAsyncData와 useFetch의 반환 값

두 API 모두 다음과 같이 반환 값을 뱉어줍니다.

```js
const { data, pending, refresh, error } = await useFetch();
const { data, pending, refresh, error } = await useAsyncData();
```

useFetch도 내부적으로는 useAsyncData를 쓰기 때문에 두 API의 반환 값은 같습니다. 반환 값 속성은 이름에서 충분히 역할이 유추되지만 간단히 알아보겠습니다.

- `data` : API 응답의 결과
- `pending` : 데이터가 로딩 중인지의 상태
- `refresh` : 데이터 호출 API를 다시 실행할 수 있는 속성 함수. `refresh()`를 실행하면 데이터가 다시 불러와진다. `execute`와 같은 역할
- `error` : 데이터 호출이 실패했을 때 반환되는 에러 객체

이외에 status와 execute 속성도 더 있는데요. 위 4개 속성이면 개발하는데 문제가 없을 겁니다. 혹시 궁금하신 분들은 다음 문서를 참고하세요 :)

[Nuxt 3 공식 문서 - Return Values](https://nuxt.com/docs/api/composables/use-fetch#return-values)