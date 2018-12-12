---
title: Code Splitting
---

# 코드 분할

코드 분할(Code Splitting)은 싱글 페이지 애플리케이션의 성능을 향상시키는 방법입니다. 싱글 페이지 애플리케이션(Single Page Application)은 초기 실행시에 필요한 웹 자원을 모두 다운 받는 특징이 있습니다. 코드 분할을 활용하게 되면 초기 로딩시에 모든 웹 자원을 다운받지 않고 필요한 시점에 다운 받아 성능 상의 이점이 생깁니다. 참고로 뷰에서 코드 분할이 가능한 이유는 뷰의 [비동기 컴포넌트 로딩](https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components)과 웹팩의 [코드 스플리팅 기술](https://webpack.js.org/guides/code-splitting/) 덕택입니다.

## 개발 환경 조건

다만 지연된 로딩(Lazy Loading) 방법을 적용하기 위해서는 아래와 같은 개발 환경을 갖고 있어야 합니다.

1. 싱글 파일 컴포넌트 체계 (.vue)
2. 웹팩 - 모듈 번들러 (2.x 이상)
3. 바벨 [Syntax-dynamic-import 플러그인](https://babeljs.io/docs/plugins/syntax-dynamic-import/)

### 바벨 Syntax-dynamic-import 설치 방법

뷰 CLI로 생성한 경우에는 이미 1번과 2번을 만족하고 계실테지만 3번의 경우에는 별도의 설치가 필요합니다.
바벨 Syntax-dynamic-import 플러그인 설치는 아래의 절차를 따릅니다.

1. [syntax-dynamic-import 플러그인](https://babeljs.io/docs/plugins/syntax-dynamic-import/) 설치

```bash
npm install --save-dev babel-plugin-syntax-dynamic-import
```

2. `.babelrc` 파일에 아래와 같이 플러그인 설정 추가

```json
{
  "plugins": ["syntax-dynamic-import"]
}
```

## 라우터의 코드 분할 문법

싱글 페이지 애플리케이션에서 뷰 라우터를 사용할 때 라우팅 별로 코드를 분할하는 방법은 아래와 같습니다.

```js
{
	path: 'url 이름',
	component: () => import('컴포넌트 이름')
}
```

위와 같은 방법을 지연된 로딩(Lazy Loading)이라고 합니다. 이는 애플리케이션 규모가 커져 싱글 페이지 애플리케이션의 초기 화면 로딩 시간을 줄일 때 사용하는 방법입니다. 왜냐면 화면이 10개인 웹 앱이 있는데 애플리케이션을 처음 시작했을 때 쓰지도 않을 나머지 화면 9개를 다 불러오는 것 보다는
특정 화면으로 이동할 때마다 해당 화면의 내용을 추가적으로 불러오는 것이 애플리케이션 로딩 속도 면에서 더 효율적이기 때문입니다.



위 환경을 구성하고 나면 아래와 같이 특정 URL에 따른 코드 분할이 가능해집니다.

```js
const routes = [
	{
    path: '/login',
    name: 'login',
    component: () => import('./LoginPage.vue')
  },
	{
    path: '/main',
    name: 'main',
    component: () => import('./MainPage.vue')
  },
];

new VueRouter({
	mode: 'history',
	routes: routes,
});
```