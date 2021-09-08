---
title: Middleware
---

# Middleware

Nuxt에서 미들웨어(Middleware)는 페이지나 레이아웃이 렌더링 되기 전에 호출되는 커스텀 훅(Hook)입니다. 미들웨어의 대표적인 특징은 아래와 같습니다.

- Vue 인스턴스가 생성되기 전에 호출되는 `asyncData` 보다 더 일찍 호출됩니다([Nuxt 라이프 싸이클](./middleware.html#참고-자료) 참조).
- `asyncData`와 마찬가지로 [context](./data-fetching.html#asyncdata의-파라미터)를 인자로 받기 때문에 `store`, `route`, `params`, `query`, `redirect` 등에 접근할 수 있습니다.
- 위의 두 특징들을 활용하여 [네비게이션 가드](../advanced/navigation-guard.html) 형태로 미들웨어 제작이 가능합니다.

:::warning
Nuxt의 또 다른 미들웨어인 [서버 미들웨어(serverMiddleware)](https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-servermiddleware)는 이 페이지에서 다루고 있지 않습니다.
:::

:::tip
서버 미들웨어와 구분하기 위해서 해당 페이지에 다루는 미들웨어를 라우트(Route) 미들웨어라고 부릅니다.
:::

## 종류

미들웨어는 특정 페이지나 레이아웃에 종속되는지에 따라서 익명 미들웨어와 네임드 미들웨어로 나뉩니다.

### 익명 미들웨어(Anonymous Middleware)

익명 미들웨어는 특정 페이지나 레이아웃에 종속되는 미들웨어를 뜻합니다. 페이지나 레이아웃에서 직접 `middleware` 훅을 통해 명시하기 때문에 다른 페이지나 레이아웃에서 공유할 수 없습니다.

```js{4-8}
// pages/secret.vue 또는 layouts/authenticated.vue
<script>
  export default {
    middleware({ store, redirect }) {
      // 만약 유저가 인증 받지 못한 경우 로그인 페이지로 이동합니다.
      if (!store.state.authenticated) {
        return redirect("/login");
      }
    },
  };
</script>
```

### 네임드 미들웨어(Named Middleware)

네임드 미들웨어는 여러 페이지나 레이아웃에서 공유될 수 있도록 `middleware` 디렉토리에서 관리되는 미들웨어들을 뜻합니다. 이러한 미들웨어들은 Nuxt 환경 파일을 통해 전역적으로 적용하거나 반대로 각각의 페이지나 레이아웃을 통해 선별적으로 적용 가능합니다.

:::tip
미들웨어가 작성된 파일 이름을 활용하기 때문에 네임드 미들웨어라고 부릅니다.
:::

아래 코드는 전역 설정과 지역 설정의 예시 코드에서 참조할 미들웨어의 예시입니다.

```js
// middleware/stats.js
import http from "http";

export default function({ route }) {
  return http.post("http://my-stats-api.com", {
    url: route.fullPath,
  });
}
```

#### 전역 설정

`router.middleware`의 값에 적용하고 싶은 미들웨어 파일의 이름을 문자열 또는 문자열의 배열 형태로 지정하면 모든 라우팅에 대해서 해당 미들웨어가 작동합니다.

```js
// nuxt.config.js
export default {
  router: {
    // 모든 라우팅에 대해서 stats 미들웨어가 적용됩니다.
    middleware: "stats",
  },
};
```

#### 지역 설정

미들웨어를 적용하고 싶은 페이지나 레이아웃에 해당 미들웨어를 명시합니다.

```js
// pages/index.vue 또는 layouts/default.vue
export default {
  middleware: ["stats"],
};
```

## 활용법 예시

아래의 예시들은 네비게이션 가드처럼 사용할 수 있는 미들웨어 활용법입니다.

### 인증

인증을 받지 못한 경우 로그인 페이지로 리다이렉트 시킬 수 있습니다.

```js
// middleware/auth.vue
export default function({ store, redirect }) {
  if (!store.state.auth) {
    return redirect("/login");
  }
}
```

### 로케일

언어별 컨텐츠를 지원할 경우 찾고자 하는 언어가 없을 때 404 페이지로 폴백(Fallback)이 일어날 수 있습니다. 로케일 미들웨어를 활용하면 404 폴백을 막고 기본 언어 컨텐츠로 리다이렉트 시킬 수 있습니다.

```js
// 지원되는 로케일 항목
const SUPPORTED_LOCALES = ["ko-kr", "en-us", "en-de"];

export default function({ route, redirect }) {
  const { language, pageName, country } = route.params;
  const locale = `${language}-${country}`;

  if (SUPPORTED_LOCALES.includes(locale)) return;

  // 현재 로케일이 지원되는 로케일이 아닐 경우 en-us의 콘텐츠로 리다이렉트
  const redirectRoute = `en/us/${pageName}`;
  redirect(redirectRoute);
}
```

## 참고 자료

- [Nuxt 라이프 싸이클](https://nuxtjs.org/docs/2.x/concepts/nuxt-lifecycle)
- [미들웨어](https://ko.nuxtjs.org/docs/2.x/directory-structure/middleware/)
- [미들웨어 활용법 예시](https://medium.com/sharenowtech/global-navigation-guards-in-nuxt-using-middlewares-43ae9dc131b4)
